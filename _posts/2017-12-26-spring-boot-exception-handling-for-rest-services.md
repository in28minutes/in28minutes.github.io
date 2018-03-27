---
layout:     post
title:      Spring Boot Exception(Error) Handling for RESTful Services
date:       2017-12-26 12:31:19
summary:    Great REST APIs have Great Exception Handling. You don't want to leave your API consumer hanging not knowing what to do when an error occurs. Let's learn how to implement effective exception handling for a REST API/Service with Spring Boot. You will understand and implement HTTP Error Response statuses based on the type of error.
categories: Spring Boot, REST Service, Exception Handling
permalink:  /spring-boot-exception-handling-for-rest-services
---

This guide will help you implement effective exception/error handling for a REST API/Service with Spring Boot.
 
## You will learn
- What is exception handling?
- Why do you need exception handling?
- What are the default exception handling capabilities provided by Spring Boot?
- How to implement exception handling with Spring Boot for RESTful Services?
- What are different return statuses you can use based on the API?
- How/What to think when you design error handling for REST API?

## 10 Step Reference Courses

- [Spring Framework for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-framework-for-beginners){:target="_blank"}
- [Spring Boot for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
- [Spring MVC in 10 Steps](https://www.youtube.com/watch?v=BjNhGaZDr0Y){:target="_blank"}
- [JPA and Hibernate in 10 Steps](https://courses.in28minutes.com/p/jpa-and-hibernate-tutorial-for-beginners-with-spring-boot){:target="_blank"}
- [Eclipse Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/eclipse-tutorial-for-beginners){:target="_blank"}
- [Maven Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/maven-tutorial-for-beginners-in-5-steps){:target="_blank"}
- [JUnit Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/junit-tutorial-for-beginners){:target="_blank"}
- [Mockito Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/mockito-for-beginner-in-5-steps){:target="_blank"}
- [Complete in28Minutes Course Guide](https://courses.in28minutes.com/p/in28minutes-course-guide){:target="_blank"}

## Project Code Structure

Following screenshot shows the structure of the project we will create.
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


> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
- Become Spring Boot Expert for $10 a Month - 5 Awesome Courses on Microservices, APIs, Web Services with Spring and Spring Boot - [Start Learning Now] (https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}
- [Learn RESTful and SOAP Web Services with Spring Boot](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBTWEBSITE){:target="_blank"}
- [Learn Microservices with Spring Boot and Spring Cloud](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBTWEBSITE){:target="_blank"}
- [Watch Spring Framework Interview Guide - 200+ Questions & Answers](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBTWEBSITE){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}

## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.in28minutes.springboot.rest.example</groupId>
  <artifactId>spring-boot-2-rest-service-exception-handling</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>spring-boot-2-rest-service</name>
  <description>Spring Boot 2 and REST - Example Project</description>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.0.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-hateoas</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>com.h2database</groupId>
      <artifactId>h2</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

  <repositories>
    <repository>
      <id>spring-snapshots</id>
      <name>Spring Snapshots</name>
      <url>https://repo.spring.io/snapshot</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
    <repository>
      <id>spring-milestones</id>
      <name>Spring Milestones</name>
      <url>https://repo.spring.io/milestone</url>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </repository>
  </repositories>

  <pluginRepositories>
    <pluginRepository>
      <id>spring-snapshots</id>
      <name>Spring Snapshots</name>
      <url>https://repo.spring.io/snapshot</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </pluginRepository>
    <pluginRepository>
      <id>spring-milestones</id>
      <name>Spring Milestones</name>
      <url>https://repo.spring.io/milestone</url>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </pluginRepository>
  </pluginRepositories>


</project>
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/exception/CustomizedResponseEntityExceptionHandler.java

```java
package com.in28minutes.springboot.rest.example.exception;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.in28minutes.springboot.rest.example.student.StudentNotFoundException;

@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(Exception.class)
  public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex, WebRequest request) {
    ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
        request.getDescription(false));
    return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @ExceptionHandler(StudentNotFoundException.class)
  public final ResponseEntity<ErrorDetails> handleUserNotFoundException(StudentNotFoundException ex, WebRequest request) {
    ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
        request.getDescription(false));
    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
  }

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/exception/ErrorDetails.java

```java
package com.in28minutes.springboot.rest.example.exception;
import java.util.Date;

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

  public Date getTimestamp() {
    return timestamp;
  }

  public String getMessage() {
    return message;
  }

  public String getDetails() {
    return details;
  }

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/SpringBoot2RestServiceApplication.java

```java
package com.in28minutes.springboot.rest.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBoot2RestServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot2RestServiceApplication.class, args);
  }
}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/student/Student.java

```java
package com.in28minutes.springboot.rest.example.student;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Student {
  @Id
  @GeneratedValue
  private Long id;
  private String name;
  private String passportNumber;
  
  public Student() {
    super();
  }

  public Student(Long id, String name, String passportNumber) {
    super();
    this.id = id;
    this.name = name;
    this.passportNumber = passportNumber;
  }
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getPassportNumber() {
    return passportNumber;
  }
  public void setPassportNumber(String passportNumber) {
    this.passportNumber = passportNumber;
  }
    
}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/student/StudentNotFoundException.java

```java
package com.in28minutes.springboot.rest.example.student;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class StudentNotFoundException extends RuntimeException {

  public StudentNotFoundException(String exception) {
    super(exception);
  }

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/student/StudentRepository.java

```java
package com.in28minutes.springboot.rest.example.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/student/StudentResource.java

```java
package com.in28minutes.springboot.rest.example.student;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class StudentResource {

  @Autowired
  private StudentRepository studentRepository;

  @GetMapping("/students")
  public List<Student> retrieveAllStudents() {
    return studentRepository.findAll();
  }

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

  @DeleteMapping("/students/{id}")
  public void deleteStudent(@PathVariable long id) {
    studentRepository.deleteById(id);
  }

  @PostMapping("/students")
  public ResponseEntity<Object> createStudent(@RequestBody Student student) {
    Student savedStudent = studentRepository.save(student);

    URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
        .buildAndExpand(savedStudent.getId()).toUri();

    return ResponseEntity.created(location).build();

  }
  
  @PutMapping("/students/{id}")
  public ResponseEntity<Object> updateStudent(@RequestBody Student student, @PathVariable long id) {

    Optional<Student> studentOptional = studentRepository.findById(id);

    if (!studentOptional.isPresent())
      return ResponseEntity.notFound().build();

    student.setId(id);
    
    studentRepository.save(student);

    return ResponseEntity.noContent().build();
  }
}
```
---

### /src/main/resources/application.properties

```properties
```
---

### /src/main/resources/data.sql

```
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```
---

### /src/test/java/com/in28minutes/springboot/rest/example/SpringBoot2RestServiceApplicationTests.java

```java
package com.in28minutes.springboot.rest.example;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot2RestServiceApplicationTests {

  @Test
  public void contextLoads() {
  }

}
```
---
