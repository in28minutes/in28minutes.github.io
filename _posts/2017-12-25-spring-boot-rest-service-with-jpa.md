---
layout:     post
title:      Creating a CRUD REST API/Service with Spring Boot, JPA and Hibernate
date:       2017-12-25 12:31:19
summary:    Creating a complete CRUD API with GET, POST, PUT and DELETE is the first step to developing RESTful Services, In this tutorial, let's learn to create an awesome CRUD REST API with Spring Boot, Spring MVC, JPA and Hibernate.
categories:  SpringBoot
permalink:  /spring-boot-crud-rest-service-with-jpa-hibernate
---

This guide will help you create a CRUD REST API/Service with Spring Boot, JPA and Hibernate. We will create a JPA Repository for a Student Entity and expose it using a Student Resource.
 
## You will learn
- What is a RESTful Service?
- Basics of designing a REST API.
- How to create a RESTful Service offering all CRUD operations?
- How to use Spring Boot, Spring MVC, JPA and Hibernate to create a RESTful API?
- How to execute different kinds of REST API with Postman?
- What are the differences between GET, POST, PUT and DELETE request methods?

## Resources Overview

In this guide, we will create a Student Resource exposing three services using proper URIs and HTTP methods:
- Retrieve all Students - @GetMapping("/students")
- Get details of specific student - @GetMapping("/students/{id}")
- Delete a student - @DeleteMapping("/students/{id}")
- Create a new student - @PostMapping("/students")
- Update student details - @PutMapping("/students/{id}")

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
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-basic

## Types of Web Services

Not really types but a broad classification
- SOAP
- REST

These are not really mutually exclusive. Some SOAP services can actually be RESTful. 

### REST

First of all, REST does not define a standard message exchange format. You can build REST services with both XML and JSON. However, JSON is a more popular format with REST.

So, if it does not define a standard message exchange format, what is REST then?

> REST is a style of software architecture for distributed hypermedia systems

REST stands for REpresentational State Transfer. The definitions for REST can be vague. So, lets understand the important concepts.

Key abstraction in REST is a Resource. There is no restriction on what can be a resource. A todo is a resource. A person on facebook is a resource. 

A resource has an URI (Uniform Resource Identifier):
- /user/Ranga/todos/1
- /person/Ranga

A resource will have representations
- XML
- HTML
- JSON

A resource will have state. The representation of a resource should capture its current state.

When a resource is requested, we provide the representation of the resource. 

### REST and HTTP

REST builds on top of HTTP (Hypertext Transfer Protocol). HTTP is the language of the web. 

HTTP has a few important verbs.
- POST - Create a new resource
- GET - Read a resource
- PUT - Update an existing resource
- DELETE - Delete a resource

HTTP also defines standard response codes.
- 200 - SUCESS
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 201 - CREATED
- 401 - UNAUTHORIZED
- 415 - UNSUPPORTED TYPE - Representation not supported for the resource
- 500 - SERVER ERROR

Restful Service Constraints
- Client - Server : There should be a service producer and a service consumer.
- The interface (URL) is uniform and exposing resources. Interface uses nouns (not actions)
- The service is stateless. Even if the service is called 10 times, the result must be the same.
- The service result should be Cacheable. HTTP cache, for example.
- Service should assume a Layered architecture. Client should not assume direct connection to server - it might be getting info from a middle layer - cache.

### Designing RESTful APIs

Following are the important things to consider when designing RESTful API's:
- While designing any API, the most important thing is to think about the api consumer i.e. the client who is going to use the service. What are his needs? Does the service uri make sense to him? Does the request, response format make sense to him?
- In Rest, we think Nouns (resources) and NOT Verbs (NOT actions). So, URI’s should represent resources. URI’s should be hierarchical and as self descriptive as possible. Prefer plurals.
- Always use HTTP Methods. 
  - GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
  - POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition : Return code 201 (CREATED) is possible.
  - PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK)
  - DELETE : Used to delete a resource.

## When do you use JPA? 

- SQL Database
- Static Domain Model 
- Mostly CRUD 
- Mostly Simple Queries/Mappings

## Bootstrapping with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.rest.example` as Group
  - Choose `spring-boot-2-rest-service-basic` as Artifact
  - Choose following dependencies
    - Web
    - JPA
    - H2
    - DevTools
    - TODO
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

> Do not forget to add JPA and H2 as dependencies.


### Create Your First JPA Entity

The first step is to create a JPA Entity. Lets create a simple Student Entity with a primary key id.

```java
@Entity
public class Student {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String passportNumber;
```
Important things to note:
 - ```@Entity```: Specifies that the class is an entity. This annotation is applied to the entity class.
 - ```@Id```: Specifies the primary key of an entity.
 - ```@GeneratedValue```: Provides for the specification of generation strategies for the values of primary keys.
 - ```public Student()```: Default constructor to make JPA Happy

When the application reloads, you can launch H2 console at http://localhost:8080/h2-console.

You will see that a new table called 'student' is created in H2 Console.

How did the Student table get created?

> Spring Boot Auto Configuration detects that we are using an in-memory database H2. It autoconfigures the property to create the database tables based on the Entities.

Let's now populate some data into the student table.

/src/main/resources/data.sql

```
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```

When the application reloads you would see following statements in the log indicating that the sql files are picked up.

```
Executing SQL script from URL [file:/in28Minutes/git/spring-boot-examples/spring-boot-2-jdbc-with-h2/target/classes/data.sql]
```

After App Reload, When you login to H2 Console (http://localhost:8080/h2-console) you can see that the student table is created and the data is populated.

![Image](/images/H2-Console-With-Student.png "H2 Console With Student")

## Create JPA Repository class to Read Student from Database

/src/main/java/com/in28minutes/springboot/jpa/hibernate/h2/example/student/StudentRepository.java

We create a simple interface StudentRepository extending JpaRepository.

```java
@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
```
Notes
- We will talk about all the methods in the JpaRepository a little later.
- `public interface StudentRepository extends JpaRepository<Student, Long>` - We are extending JpaRepository using two generics - Student & Long. Student is the entity that is being managed and the primary key of Student is Long.

### JpaRepository
JpaRepository (Defined in Spring Data JPA) is the JPA specific Repository interface.

```java
public interface JpaRepository<T, ID extends Serializable>
		extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
```
> JpaRepository extends PagingAndSortingRepository which in turn extends CrudRepository interface. So, JpaRepository inherits all the methods from the two interfaces shown below.

PagingAndSortingRepository
```java
public abstract interface PagingAndSortingRepository extends CrudRepository {
  
  public abstract Iterable findAll(Sort arg0);
  
  public abstract Page findAll(Pageable arg0);

}
```

CrudRepository
```java
public interface CrudRepository<T, ID extends Serializable>
    extends Repository<T, ID> {

    <S extends T> S save(S entity);

    T findOne(ID primaryKey);       

    Iterable<T> findAll();          

    Long count();                   

    void delete(T entity);          

    boolean exists(ID primaryKey);  

    // … more functionality omitted.
}
```


## Exposing Resources using StudentResource

Lets start with setting up the StudentResource class and then move into creating methods to handle different kinds of request methods to the Student Resouce.

### Setting up Student Resource

```
@RestController
public class StudentResource {

	@Autowired
	private StudentRepository studentRepository;
```

Notes
- `@RestController` : Combination of @Controller and @ResponseBody. Beans returned are converted to/from JSON/XML.
- `@Autowired private StudentRepository studentRepository` : Autowire the StudentRepository so that we can retrieve and save data to database.

### Exposing GET methods on Student Resource

Let's create the method to expose the details of all students.
```
@GetMapping("/students")
public List<Student> retrieveAllStudents() {
	return studentRepository.findAll();
}
```

Below picture shows how we can execute a Get Request Method on a Resource using Postman - my favorite tool to run rest services.
![Image](/images/POSTMAN_Executing_Get_Request.png "Executing Get Rest Service From Postman")   

- URL - http://localhost:8080/students
- Request Method - GET

Response
```json
[
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

```

Let's create a method to expose the details of a specific student.

```
@GetMapping("/students/{id}")
public Student retrieveStudent(@PathVariable long id) {
	Optional<Student> student = studentRepository.findById(id);

	if (!student.isPresent())
		throw new StudentNotFoundException("id-" + id);

	return student.get();
}
```

Let's execute another GET request
![Image](/images/POSTMAN_Executing_Get_Request.png "Executing Get Rest Service From Postman")   

- URL - http://localhost:8080/students/10002
- Request Method - GET

Response
```json
{
  "id": 10002,
  "name": "Ravi",
  "passportNumber": "A1234568"
}
```

### Expose DELETE Method on Student Resouce

Delete method is simple. All you have to do is to call `studentRepository.deleteById(id)`.

```
@DeleteMapping("/students/{id}")
public void deleteStudent(@PathVariable long id) {
	studentRepository.deleteById(id);
}
```

Below picture shows how we can execute a DELETE Request method on a Resource from Postman - my favorite tool to run rest services.
![Image](/images/POSTMAN_Executing_Delete_Request.png "Executing Delete Rest Service From Postman")   

- URL - http://localhost:8080/students/10002
- Request Method - DELETE

Request - Empty Body
Response with status 200 - Successful

### Expose POST Method to create a new student

POST method is simple. All you have to do is to call `studentRepository.save(student)`. Note that we are using `@RequestBody` to map the student details from request to bean. We are also returning a ResponseEntity with a header containing the URL of the created resource.

```
@PostMapping("/students")
public ResponseEntity<Object> createStudent(@RequestBody Student student) {
	Student savedStudent = studentRepository.save(student);

	URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
			.buildAndExpand(savedStudent.getId()).toUri();

	return ResponseEntity.created(location).build();

}
```

Below picture shows how we can execute a POST Request method on a Resource from Postman - my favorite tool to run rest services.
![Image](/images/POSTMAN_Executing_Post_Request.png "Executing Post Rest Service From Postman")   

- URL - http://localhost:8080/students
- Request Method - POST

Request
```json
  {
    "name": "Tom",
    "passportNumber": "Z1234567"
  }
```

Response 
- Status 201 - CREATED
- Header Location →http://localhost:8080/students/2

### Expose PUT Method to update existing student

Before updating the student we check if the student exists. If the student does not exist, we return a not found statur. Otherwise, we save the student details using `studentRepository.save` method.

```
@PutMapping("/students/{id}")
public ResponseEntity<Object> updateStudent(@RequestBody Student student, @PathVariable long id) {

	Optional<Student> studentOptional = studentRepository.findById(id);

	if (!studentOptional.isPresent())
		return ResponseEntity.notFound().build();

	student.setId(id);
	
	studentRepository.save(student);

	return ResponseEntity.noContent().build();
}
```

Below picture shows how we can execute a PUT Request method on a Resource from Postman - my favorite tool to run rest services.
![Image](/images/POSTMAN_Executing_Put_Request.png "Executing PUT Rest Service From Postman")   

- URL → http://localhost:8080/students/10002
- Request 
    - Method → PUT

Request
```json
{
	"name": "Tom",
	"passportNumber": "Z1234567"
}
```

Response with status 200 - Successful


> Remember that you can check the updates in the database using H2 Console `http://localhost:8080/h2-console` after each of the requests.





## Complete Code Example

### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.rest.example</groupId>
	<artifactId>spring-boot-2-rest-service-basic</artifactId>
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
