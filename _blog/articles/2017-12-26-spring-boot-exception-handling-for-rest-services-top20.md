---
layout:     post
title:      Spring Boot Exception Handling for RESTful Services Errors
date:       2022-07-03 12:31:19
summary:    Great REST APIs have Great Exception Handling. You don't want to leave your API consumer hanging not knowing what to do when an error occurs. Let's learn how to implement effective exception handling for a REST API/Service with Spring Boot. You will understand and implement HTTP Error Response statuses based on the type of error.
categories:  SpringBoot
permalink:  /spring-boot-exception-handling-for-rest-services
image: /images/spring-boot-feature.png
---

This guide will help you implement effective exception/error handling for a REST API/Service with Spring Boot.

![Image](/images/SpringBootExceptionHandling-ProjectStructure.png "CRUDServiceWithHibernate") 

 
## You will learn
- What is exception handling?
- Why do you need exception handling?
- What are the default exception handling capabilities provided by Spring Boot?
- How to implement exception handling with Spring Boot for RESTful Services?
- What are different return statuses you can use based on the API?
- How/What to think when you design error handling for REST API?



## Project Code Structure

Following screen shot shows the structure of the project we will create.

![Image](/images/SpringBootExceptionHandling-ProjectStructure.png "CRUDServiceWithHibernate") 

A few details:
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
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-exception-handling

## What is Exception Handling?

Consider these
- What do you do when something goes wrong in your RESTful API?
- What do you do when you get an invalid request?
- What do you do when you something unexpected happens?

Think. What should you do?

Can I just return a Page Not Found - 404? Can I return a generic message `Something went wrong.`. Is that good enough?

One of the core design principles for RESTful services is 
> Think about the consumer

So, what should you when an error or exception happens in a RESTful service?

You should return a proper error response 
- Clear message indicating what went wrong and what the consumer can do to fix the error.
- Include information necessary to solve the error.
- Proper Response Status based on the context.
- Do not include sensitive information in the response.

### Response Statuses for Errors

Use appropriate status code based on the error.
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 401 - UNAUTHORIZED
- 415 - UNSUPPORTED TYPE - Representation not supported for the resource
- 500 - SERVER ERROR

Let's consider a few HTTP Methods:
- GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
- POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition - Return code 201 (CREATED) can be used.
- PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
- DELETE : Used to delete a resource. Possible Return Codes : 200(OK).

> 500 - SERVER ERROR is possible with all the above HTTP methods. In the case of a 500, include the contact details of the help desk in the response.


## Bootstrapping a Project with REST Resouce

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to discuss about Exception Handling.

## Default Exception Handling with Spring Boot

Spring Boot provides good default implementation for exception handling for RESTful Services. Let's quickly look at the default Exception Handling features provided by Spring Boot.


### Resource Not Present

Heres what happens when you fire a request to a non existent resource `http://localhost:8080/some-dummy-url`

```json
{
  "timestamp": 1512713804164,
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/some-dummy-url"
}
```

Thats a cool error response. It contains all the details that are typically needed.


### What happens when you throw an Exception?

Let's see what Spring Boot does when an exception is thrown from a Resource.

Lets create a `StudentNotFoundException`.

/src/main/java/com/in28minutes/springboot/rest/example/student/StudentNotFoundException.java

```java
public class StudentNotFoundException extends RuntimeException {

  public StudentNotFoundException(String exception) {
    super(exception);
  }

}
```

Let's enhance the GET method to throw this exception when a student is not found.

```
  @GetMapping("/students/{id}")
  public Resource<Student> retrieveStudent(@PathVariable long id) {
    Optional<Student> student = studentRepository.findById(id);

    if (!student.isPresent())
      throw new StudentNotFoundException("id-" + id);

    Resource<Student> resource = new Resource<Student>(student.get());

    ControllerLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAllStudents());

    resource.add(linkTo.withRel("all-students"));

    return resource;
  }
```

This is the response when you try getting details of a non existing student `http://localhost:8080/students/9`.

```
{
  "timestamp": 1512714275589,
  "status": 500,
  "error": "Internal Server Error",
  "message": "id-9",
  "path": "/students/9"
}
```

One thing I do not like is the status code of the response. It is 500 - Server Error. Actually, the error is with the request. So, I would rather return a 404 - Resource not found. 

Let's see how to customize this and more in the next section.

## Customizing Exception Handling with Spring Boot

A combination of Spring and Spring Boot provide multiple options to customize responses for errors. 

### Customizing Return Status for a Specific Exception

You can specify the Response Status for a specific exception along with the definition of the Exception with '@ResponseStatus' annotation.

```
@ResponseStatus(HttpStatus.NOT_FOUND)
public class StudentNotFoundException extends RuntimeException {
```

This is the response when you try getting details of a non existing student `http://localhost:8080/students/9`.

```
{
  "timestamp": 1512714594153,
  "status": 404,
  "error": "Not Found",
  "message": "id-9",
  "path": "/students/9"
}
```

### Customizing Error Response Structure

Default error response provided by Spring Boot contains all the details that are typically needed.

However, you might want to create a framework independent response structure for your organization. In that case, you can define a specific error response structure. 

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

To use `ErrorDetails` to return the error response, let's define a ControllerAdvice as shown below.

```
@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(StudentNotFoundException.class)
  public final ResponseEntity<ErrorDetails> handleUserNotFoundException(StudentNotFoundException ex, WebRequest request) {
    ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
        request.getDescription(false));
    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
  }
```

Notes
- `@ExceptionHandler(StudentNotFoundException.class)` indicates that this method would handle exceptions of the specific type.
- `new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND)` - Create an error response object and return it with a specific Http Status.

This is the response when you try getting details of a non existing student `http://localhost:8080/students/9`.

```
{
  "timestamp": 1512714887537,
  "message": "id-9",
  "details": "uri=/students/9"
}
```

Response uses the custom error structure that we had defined earlier.

### Using Error Response Structure for all Exceptions

You can further enhance `CustomizedResponseEntityExceptionHandler` to handle all other exceptions.

```
@ExceptionHandler(Exception.class)
public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex, WebRequest request) {
  ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
      request.getDescription(false));
  return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
}

```


## Complete Code Example

Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-exception-handling