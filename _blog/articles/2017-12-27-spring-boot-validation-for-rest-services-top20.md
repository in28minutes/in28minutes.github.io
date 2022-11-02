---
layout:     post
title:      Implementing Validation for RESTful Services with Spring Boot
date:       2022-07-03 12:31:19
summary:    Validating a request is a critical component of a Great REST API. In this tutorial, Let's explore how to do implement effective validation for a RESTful Service with Spring Boot. We will use Bean Validation API and Hibernate Validator as the implementation.
categories:  SpringBoot
permalink:  /spring-boot-validation-for-rest-services
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

This guide will help you implement effective validations for a REST API/Service with Spring Boot.
 
## You will learn
- What is validation?
- Why do you need validation?
- What is Hibernate Validator?
- What is Bean Validation API?
- What are the default validation capabilities provided by Spring Boot?
- How to implement validation with Spring Boot?
- How to implement validation with Bean Validation API?



## Project Code Structure

Following files contain the important components of the project we will create. A few details:
- `SpringBoot2RestServiceApplication.java` - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `Student.java` - Student JPA Entity
- `StudentRepository.java` - Student JPA Repository. This is created using Spring Data JpaRepository.
- `StudentResource.java` - Spring Rest Controller exposing all services on the student resource.
- `CustomizedResponseEntityExceptionHandler.java` - Component to implement global exception handling and customize the response based on the exception type.
- `ErrorDetails.java` - Response Bean to use when exceptions are thrown from API.
- `StudentNotFoundException.java` - Exception thrown from resources when student is not found.
- `data.sql` - Initial data for the student table. Spring Boot would execute this script after the tables are created from the entities.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-validation

## What is Validation?

You expect a certain format of request for your RESTful Service. You except the elements of your request to have certain data types, certain domain constraints.

What if you get a request not meeting this constraints?

Think. What should you do?

Can I just return a generic message `Something went wrong.`. Is that good enough?

One of the core design principles for RESTful services is 
> Think about the consumer

So, what should you do when something in the request is not valid. 

You should return a proper error response 
- Clear message indicating what went wrong? Which field has an error and what are the accepted values? What the consumer can do to fix the error?
- Proper Response Status Bad Request.
- Do not include sensitive information in the response.

### Response Statuses for Validation Errors

Recommended response status for validation error is -> 400 - BAD REQUEST

## Bootstrapping a Project with REST Resouce

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to discuss about Exception Handling.

## Default Validation with Spring Boot

Spring Boot provides good default implementation for validation for RESTful Services. Let's quickly look at the default Exception Handling features provided by Spring Boot.

### Wrong Content Type
If you use Content-Type as `application/xml` and this is not supported by your application, Spring Boot by default returns a response status of 415 - Unsupported Media Type

### Invalid JSON Content
If you send a invalid JSON content to a method expecting a body, you would get a 400 - Bad Request

### Valid JSON with Missing Elements
However, if you send a valid JSON structure with missing/invalid attributes/elements, application will execute the request with what ever data is available.

Following request executes with a status of -> 201 Created

POST `http://localhost:8080/students`

Empty Request Content
```
{
  
}
```

Following request executes with a status of -> 201 Created

POST `http://localhost:8080/students`

Request Content
```
{
    "name1": null,
    "passportNumber": "A12345678"
}
```
You can notice that the above request has an invalid attribute name1.

This is the response when you fire a GET to `http://localhost:8080/students`

[
  {
    "id": 1,
    "name": null,
    "passportNumber": null
  },
  {
    "id": 2,
    "name": null,
    "passportNumber": "A12345678"
  },
  {
    "id": 10001,
    "name": "Ranga",
    "passportNumber": "E1234567"
  },
  {
    "id": 10002,
    "name": "Ravi",
    "passportNumber": "A1234568"
  }
]

You can see that both the resources were created with ids 1 and 2 with nulls for values that were not available. Invalid elements/attributes are ignored.

## Customizing Validations

To customize the validation, we will use Hibernate Validator, which is one of the implementations of the bean validation api.

We get Hibernate Validator for free when we use Spring Boot Starter Web.

So, we can get started with implementing the validations.

### Implementing Validations on the Bean

Before we add validations, we need to add a dependency.

```
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

Let's add a few validations to the Student bean. We are using `@Size` to specify the minimum length and also a message when a validation error occurs.

```
@Entity
public class Student {
  @Id
  @GeneratedValue
  private Long id;
  
  @NotNull
  @Size(min=2, message="Name should have atleast 2 characters")
  private String name;
  
  @NotNull
  @Size(min=7, message="Passport should have atleast 2 characters")
  private String passportNumber;
  

```

Bean Validation API provides a number of such annotations. Most of these are self explanatory.
- DecimalMax
- DecimalMin
- Digits
- Email
- Future
- FutureOrPresent
- Max
- Min
- Negative
- NegativeOrZero
- NotBlank
- NotEmpty
- NotNull
- Null
- Past
- PastOrPresent
- Pattern
- Positive
- PositiveOrZero

### Enabling Validation on the Resource

Simple. Add @Valid in addition to @RequestBody.

```
public ResponseEntity<Object> createStudent(@Valid @RequestBody Student student) {
```

That's it.

When you execute a request with attributes not matching the constraint, you get a 404 BAD Request status back.

Request
```
{
    "name": "",
    "passportNumber": "A12345678"
  }
```

But the problem is that there are no details returned indicating what went wrong.
- The consumer knows its a bad request.
- But, how do they no what is wrong? Which element did not pass the validation? What should the consumer do to fix it?

### Customizing Validation Response


Let's define a simple error response bean.

```
public class ErrorDetails {
  private Date timestamp;
  private String message;
  private String details;

  public ErrorDetails(Date timestamp, String message, String details) {
    super();
    this.timestamp = timestamp;
    this.message = message;
    this.details = details;
  }
```

Let's now define a `@ControllerAdvice` to handle validation errors. We do that by overriding `handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request)` method in the `ResponseEntityExceptionHandler`.

```
@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
      HttpHeaders headers, HttpStatus status, WebRequest request) {
    ErrorDetails errorDetails = new ErrorDetails(new Date(), "Validation Failed",
        ex.getBindingResult().toString());
    return new ResponseEntity(errorDetails, HttpStatus.BAD_REQUEST);
  } 
```

To use `ErrorDetails` to return the error response, let's define a ControllerAdvice as shown below.

```
@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(StudentNotFoundException)
  public final ResponseEntity<ErrorDetails> handleUserNotFoundException(StudentNotFoundException ex, WebRequest request) {
    ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
        request.getDescription(false));
    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
  }
```

When you execute a request with attributes not matching the constraint, you get a 404 BAD Request status back.

Request
```
{
    "name": "",
    "passportNumber": "A12345678"
  }
```

You also get a Response Body indicating what is wrong!

```
{
  "timestamp": 1512717715118,
  "message": "Validation Failed",
  "details": "org.springframework.validation.BeanPropertyBindingResult: 1 errors\nField error in object 'student' on field 'name': rejected value []; codes [Size.student.name,Size.name,Size.java.lang.String,Size]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [student.name,name]; arguments []; default message [name],2147483647,2]; default message [Name should have atleast 2 characters]"
}
```

Good Luck! You are all set now to customize the message based on your needs.


## Complete Code Example

Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-validation