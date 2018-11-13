---
layout:     post
title:      Spring Boot and Content Negotiation - XML and JSON Representations 
date:       2017-12-29 12:31:19
summary:    Learn how to implement Content Negotiation for a REST API/Service with Spring Boot. Content Negotiation helps the Consumer and Provider interact about the data exchange format. In this article, we will expose both XML and JSON representations.
categories: Spring Boot, REST Service, HATEOAS
permalink:  /spring-boot-content-negotiation-with-xml-json-representations
---

This guide will help you implement Content Negotiation for a REST API/Service with Spring Boot. Content Negotiation helps the Consumer and Provider interact about the data exchange format. In this article, we will expose both XML and JSON representations.
 
## You will learn
- What is Content Negotiation?
- Why do you need Content Negotiation?
- How do you implement Content Negotiation with Spring Boot?
- How do you use XML representation for request and response with Spring Boot RESTful Services?
- How do you use JSON representation for request and response with Spring Boot RESTful Services?

## Recommended REST API Course

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}


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
![Image](/images/CRUDServiceWithHibernate.png "CRUDServiceWithHibernate") 

A few details:
- SpringBoot2RestServiceApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `Student.java` - Student JPA Entity
- StudentRepository.java - Student JPA Repository. This is created using Spring Data JpaRepository.
- StudentResource.java - Spring Rest Controller exposing all services on the student resource.
- data.sql - Initial data for the student table. Spring Boot would execute this script after the tables are created from the entities.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation

## What is Content Negotiation?

> REST stands for REpresentational State Transfer.

Key abstraction in REST is a Resource. There is no restriction on what can be a resource. A todo is a resource. A person on facebook is a resource. 

A resource can have multiple representations
- XML
- HTML
- JSON

When a resource is requested, we provide the representation of the resource.

When a consumer sends a request, it can specify two HTTP Headers related to Content Negotiation
- Accept and
- Content-Type

Content-Type indicates the content type of the body of the request.

Accept indicates the expected content type of the response.

## Example of Content Negotiation

Following screenshot shows how you can specify these headers in a request using Postman.
![Image](/images/ContentNegotiationHeaders-AcceptAndContentType.png "Content Negotiation Headers - Accept and Content-Type") 

The server is expected to respond based on the Accept header.

For example, if a consumer sends a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml', we need to provide the xml representation of the resource.

```
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

If a consumer sends a request with Accept header as 'application/json', we need to provide the JSON representation of the resource.

```
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

Similar concept applies to the Response Body Content based on the Content-Type.

A consumer can send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/xml', and provide the XML representation of the resource to be created.

```
<Student>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

A consumer can also send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/json', and provide the JSON representation of the resource to be created.

```
{
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

> This dialogue which happens between the Consumer and Service Provider is called Content Negotiation.

## Bootstrapping a Project with a REST Resource

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to discuss about Content Negotiation.

## Implementing Content Negotiation with Spring Boot

Let's execute a few requests to discover that content negotiation is not provided by default by the project we created with Spring Boot Starter Web and move on the adding content negotiation to our application.

### Executing a request with Accept Header 'application/xml'

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

You are expecting to get an XML representation of the resource.

However you would get a response with status -> 406 Not Acceptable. This indicates that application does not support providing a response with content type 'application/xml'. 

However if you send a request to `http://localhost:8080/students/10001` with Accept header as 'application/json', you would get the response back as expected.

```
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

### Implementing XML Representation for Spring Boot Services

Its simple. All that you would need to do is to add a simple dependency to your pom.xml.

```
<dependency>
  <groupId>com.fasterxml.jackson.dataformat</groupId>
  <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

Restart your application. 

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

Response
```
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

Cool! Your application now supports both XML and JSON representations of the student resource.

You can use 
- Content-Type to indicate content type of the body  for POST and PUT requests.
- Accept indicates the expected content type of the response for GET requests.

### Playing with Content Negotiation

#### GET Request

- URL - http://localhost:8080/students
- Request Method - GET
- Request Headers
  - Accept - application/xml

Response
```xml
<List>
    <item>
        <id>10001</id>
        <name>Ranga</name>
        <passportNumber>E1234567</passportNumber>
    </item>
    <item>
        <id>10002</id>
        <name>Ravi</name>
        <passportNumber>A1234568</passportNumber>
    </item>
</List>
```

#### POST Request

- URL - http://localhost:8080/students
- Request Method - POST
- Request Headers
  - Content-Type - application/xml
  
Request
```json
    <item>
        <name>Tom</name>
        <passportNumber>Z1234567</passportNumber>
    </item>
```

Response 
- Status 201 - CREATED
- Header Location →http://localhost:8080/students/2

#### PUT Request

- URL → http://localhost:8080/students/10002
- Request 
    - Method → PUT
- Request Headers
  - Content-Type - application/xml

Request

```xml
<item>
    <name>Tom</name>
    <passportNumber>Z1234567</passportNumber>
</item>
```

Response with status 204 - No Content


> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.in28minutes.springboot.rest.example</groupId>
  <artifactId>spring-boot-2-rest-service-content-negotiation</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>spring-boot-2-rest-service</name>
  <description>Spring Boot 2 and REST - Example Project</description>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.0.RELEASE</version>
    <relativePath /> <!-- lookup parent from repository -->
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
      <groupId>com.fasterxml.jackson.dataformat</groupId>
      <artifactId>jackson-dataformat-xml</artifactId>
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

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
  public Student retrieveStudent(@PathVariable long id) {
    Optional<Student> student = studentRepository.findById(id);

    if (!student.isPresent())
      throw new StudentNotFoundException("id-" + id);

    return student.get();
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
