---
layout:     post
title:      Creating a REST Service with Spring Boot
date:       2017-01-30 12:31:19
summary:    Setting up a basic example REST Service with Spring Boot. Its a cake walk. 
categories: Spring Boot, REST Service
permalink:  /creating-rest-service-with-spring-boot
---

This guide will help you create a simple REST service using Spring Boot. 
 
## You will learn
- What is a REST Service?
- How to bootstrap a Rest Service application with Spring Initializr?
- How to create a Get REST Service for retrieving the courses that a student registered for?
- How to create a Post REST Service for registering a course for student?
- How to execute Rest Services from Postman?

## References

1 hour video courses on all popular frameworks!

- Spring - [spring-framework-tutorial-for-beginners](https://in28minutes.teachable.com/p/spring-framework-tutorial-for-beginners)
- Spring MVC - [https://www.youtube.com/watch?v=BjNhGaZDr0Y](https://www.youtube.com/watch?v=BjNhGaZDr0Y)
- Spring Boot - [https://www.youtube.com/watch?v=PSP1-2cN7vM](https://www.youtube.com/watch?v=PSP1-2cN7vM)
- Eclipse - [https://www.youtube.com/watch?v=s4ShbtOHMCA](https://www.youtube.com/watch?v=s4ShbtOHMCA)
- Maven - [https://www.youtube.com/watch?v=0CFWeVgzsqY](https://www.youtube.com/watch?v=0CFWeVgzsqY)
- JUnit - [https://www.youtube.com/watch?v=o5k9NOR9lrI](https://www.youtube.com/watch?v=o5k9NOR9lrI)
- Mockito - [https://www.youtube.com/watch?v=d2KwvXQgQx4](https://www.youtube.com/watch?v=d2KwvXQgQx4)

## Rest Services in this Guide

In this guide, we will create three services using proper URIs and HTTP methods:

- `@GetMapping("/students/{studentId}/courses")`: You can ask the courses a specific student has registered for using request method Get and example uri /students/Student1/courses.
- `@GetMapping("/students/{studentId}/courses/{courseId}")`: You can ask a specific course for a specific student using request method Get and example uri /students/Student1/courses/Course1.
- `@PostMapping("/students/{studentId}/courses")` : You can register a student for a course by sending a POST request to URI /students/Student1/courses

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - [https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files](https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files){:target="_blank"}

- Rest Services with Unit and Integration Tests
    - Website-springbootrestservices-simplerestserviceswithunitandintegrationtests.zip

## What is REST?

REST stands for REpresentational State Transfer. REST specifies a set of architectural constraints. Any service which satisfies these constraints is called RESTful Service.

The five important constraints for RESTful Web Service are

- Client - Server : There should be a service producer and a service consumer.
- The interface (URL) is uniform and exposing resources.
- The service is stateless.
- The service results should be Cacheable. HTTP cache, for example.
- Service should assume a Layered architecture. Client should not assume direct connection to server - it might be getting info from a middle layer - cache.

## Richardson Maturity Model

Richardson Maturity Model is used to identify the maturity level of a Restful Web Service. Following are the different levels and their characteristics:

- Level 0 : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST.
- Level 1 : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used.
- Level 2 : Resources use proper URI's + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1.
- Level 3 : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.

## Using appropriate Request Methods

Always use HTTP Methods. Best practices with respect to each HTTP method is described below:

- GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
- POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition : Return code 201 (CREATED) is possible.
- PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK)
- DELETE : Used to delete a resource.

## Project Structure
Following screenshot shows the structure of the project we will create.
![Image](/images/SpringBootRestService-ProjectStructure.png "Spring Boot Rest Service - Project Structure") 

A few details:

- `StudentController.java` - Rest controller exposing all the three service methods discussed above.
- `Course.java, Student.java, StudentService.java` - Business Logic for the application. StudentService exposes a couple of methods we would consume from our Rest Controller.
- `StudentControllerIT.java` - Integration Tests for the Rest Services.
- `StudentControllerTest.java` - Unit Tests for the Rest Services.
- `StudentServicesApplication.java` - Launcher for the Spring Boot Application. To run the application, just launch this file as Java Application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter Web.

## Bootstrapping REST Services with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot` as Group
  - Choose `student-services` as Artifact
  - Choose following dependencies
    - Web
    - Actuator
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here.

## Implementing Business Service for your Application

All applications need data. Instead of talking to a real database, we will use an `ArrayList` - kind of an in-memory data store.

A student can take multiple courses. A course has an id, name, description and a list of steps you need to complete to finish the course. A student has an id, name, description and a list of courses he/she is currently registered for. We have StudentService exposing methods to 

- `public List<Student> retrieveAllStudents()` - Retrieve details for all students
- `public Student retrieveStudent(String studentId)` - Retrieve a specific student details
- `public List<Course> retrieveCourses(String studentId)` - Retrieve all courses a student is registered for
- `public Course retrieveCourse(String studentId, String courseId)` - Retrieve details of a specific course a student is registered for
- `public Course addCourse(String studentId, Course course)` - Add a course to an existing student

 Refer to these files at the bottom of the article for exact implementation of the Service `StudentService` and the model classes `Course` and `Student`. 

- src/main/java/com/in28minutes/springboot/model/Course.java
- src/main/java/com/in28minutes/springboot/model/Student.java
- src/main/java/com/in28minutes/springboot/service/StudentService.java


## Adding Couple of GET Rest Services

The Rest Service `StudentController` exposes couple of get services.

- `@Autowired private StudentService studentService` : We are using Spring Autowiring to wire the student service into the StudentController.
- `@GetMapping("/students/{studentId}/courses")`: Exposing a Get Service with studentId as a path variable 
- `@GetMapping("/students/{studentId}/courses/{courseId}")`: Exposing a Get Service for retrieving specific course of a student. 
- `@PathVariable String studentId`: Value of studentId from the uri will be mapped to this parameter.

```java
package com.in28minutes.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.service.StudentService;

@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;

	@GetMapping("/students/{studentId}/courses")
	public List<Course> retrieveCoursesForStudent(@PathVariable String studentId) {
		return studentService.retrieveCourses(studentId);
	}
	
	@GetMapping("/students/{studentId}/courses/{courseId}")
	public Course retrieveDetailsForCourse(@PathVariable String studentId,
			@PathVariable String courseId) {
		return studentService.retrieveCourse(studentId, courseId);
	}

}

```

## Executing the Get Service Using Postman
We will fire a request to http://localhost:8080/students/Student1/courses/Course1 to test the service. Response is as shown below.

```json
{
  "id": "Course1",
  "name": "Spring",
  "description": "10 Steps",
  "steps": [
    "Learn Maven",
    "Import Project",
    "First Example",
    "Second Example"
  ]
}
```

Below picture shows how we can execute this Get Service from Postman - my favorite tool to run rest services.
![Image](/images/ExecutingGetRestServiceUsingPostman.png "Executing Rest Service From Postman")   

## Adding a POST Rest Service

A POST Service should return a status of created (201) when the resource creation is successful. 

`@PostMapping("/students/{studentId}/courses")`: Mapping a url for the POST Request
`@RequestBody Course newCourse`: Using Binding to bind the body of the request to Course object.
`ResponseEntity.created(location).build()`: Return a status of created. Also return the location of created resource as a Response Header.

```java
	@PostMapping("/students/{studentId}/courses")
	public ResponseEntity<Void> registerStudentForCourse(
			@PathVariable String studentId, @RequestBody Course newCourse) {

		Course course = studentService.addCourse(studentId, newCourse);

		if (course == null)
			return ResponseEntity.noContent().build();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(course.getId()).toUri();

		return ResponseEntity.created(location).build();
	}

```

## Executing a POST Rest Service

Example Request is shown below. It contains all the details to register a course to a student. 

```json
{
  "name": "Microservices",
  "description": "10 Steps",
  "steps": [
    "Learn How to Break Things Up",
    "Automate the hell out of everything",
    "Have fun"
  ]
}
```

Below picture shows how we can execute this Post Service from Postman - my favorite tool to run rest services. Make sure you go to the Body tab and select raw. Select JSON from the dropdown. Copy above request into body.

The URL we use is http://localhost:8080/students/Student1/courses.

![Image](/images/ExecutingPostRestServiceUsingPostman.png "Executing Post Rest Service From Postman")   

## Next Steps
- Understand more about Unit Testing
- Understand more about Integration Testing
- Understand more about ****
- Understand more about ****
- Understand more about ****
- Understand more about ****


## Complete Code Example

### pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot</groupId>
	<artifactId>student-services</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>student-services</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.4.RELEASE</version>
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
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
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


</project>
```
---

### src/main/java/com/in28minutes/springboot/controller/StudentController.java

```java
package com.in28minutes.springboot.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.service.StudentService;

@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;

	@GetMapping("/students/{studentId}/courses")
	public List<Course> retrieveCoursesForStudent(@PathVariable String studentId) {
		return studentService.retrieveCourses(studentId);
	}
	
	@GetMapping("/students/{studentId}/courses/{courseId}")
	public Course retrieveDetailsForCourse(@PathVariable String studentId,
			@PathVariable String courseId) {
		return studentService.retrieveCourse(studentId, courseId);
	}
	
	@PostMapping("/students/{studentId}/courses")
	public ResponseEntity<Void> registerStudentForCourse(
			@PathVariable String studentId, @RequestBody Course newCourse) {

		Course course = studentService.addCourse(studentId, newCourse);

		if (course == null)
			return ResponseEntity.noContent().build();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(course.getId()).toUri();

		return ResponseEntity.created(location).build();
	}

}
```
---

### src/main/java/com/in28minutes/springboot/model/Course.java

```java
package com.in28minutes.springboot.model;

import java.util.List;

public class Course {
	private String id;
	private String name;
	private String description;
	private List<String> steps;

	// Needed by Caused by: com.fasterxml.jackson.databind.JsonMappingException:
	// Can not construct instance of com.in28minutes.springboot.model.Course:
	// no suitable constructor found, can not deserialize from Object value
	// (missing default constructor or creator, or perhaps need to add/enable
	// type information?)
	public Course() {

	}

	public Course(String id, String name, String description, List<String> steps) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.steps = steps;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public String getName() {
		return name;
	}

	public List<String> getSteps() {
		return steps;
	}

	@Override
	public String toString() {
		return String.format(
				"Course [id=%s, name=%s, description=%s, steps=%s]", id, name,
				description, steps);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Course other = (Course) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
```
---

### src/main/java/com/in28minutes/springboot/model/Student.java

```java
package com.in28minutes.springboot.model;

import java.util.List;

public class Student {
	private String id;
	private String name;
	private String description;
	private List<Course> courses;

	public Student(String id, String name, String description,
			List<Course> courses) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.courses = courses;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

	@Override
	public String toString() {
		return String.format(
				"Student [id=%s, name=%s, description=%s, courses=%s]", id,
				name, description, courses);
	}
}
```
---

### src/main/java/com/in28minutes/springboot/service/StudentService.java

```java
package com.in28minutes.springboot.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.model.Student;

@Component
public class StudentService {

	private static List<Student> students = new ArrayList<>();

	static {
		//Initialize Data
		Course course1 = new Course("Course1", "Spring", "10 Steps", Arrays
				.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));
		Course course2 = new Course("Course2", "Spring MVC", "10 Examples",
				Arrays.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));
		Course course3 = new Course("Course3", "Spring Boot", "6K Students",
				Arrays.asList("Learn Maven", "Learn Spring",
						"Learn Spring MVC", "First Example", "Second Example"));
		Course course4 = new Course("Course4", "Maven",
				"Most popular maven course on internet!", Arrays.asList(
						"Pom.xml", "Build Life Cycle", "Parent POM",
						"Importing into Eclipse"));

		Student ranga = new Student("Student1", "Ranga Karanam",
				"Hiker, Programmer and Architect", new ArrayList<>(Arrays
						.asList(course1, course2, course3, course4)));

		Student satish = new Student("Student2", "Satish T",
				"Hiker, Programmer and Architect", new ArrayList<>(Arrays
						.asList(course1, course2, course3, course4)));

		students.add(ranga);
		students.add(satish);
	}

	public List<Student> retrieveAllStudents() {
		return students;
	}

	public Student retrieveStudent(String studentId) {
		for (Student student : students) {
			if (student.getId().equals(studentId)) {
				return student;
			}
		}
		return null;
	}

	public List<Course> retrieveCourses(String studentId) {
		Student student = retrieveStudent(studentId);

		if (student == null) {
			return null;
		}

		return student.getCourses();
	}

	public Course retrieveCourse(String studentId, String courseId) {
		Student student = retrieveStudent(studentId);

		if (student == null) {
			return null;
		}

		for (Course course : student.getCourses()) {
			if (course.getId().equals(courseId)) {
				return course;
			}
		}

		return null;
	}

	private SecureRandom random = new SecureRandom();

	public Course addCourse(String studentId, Course course) {
		Student student = retrieveStudent(studentId);

		if (student == null) {
			return null;
		}

		String randomId = new BigInteger(130, random).toString(32);
		course.setId(randomId);

		student.getCourses().add(course);

		return course;
	}
}
```
---

### src/main/java/com/in28minutes/springboot/StudentServicesApplication.java

```java
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentServicesApplication.class, args);
	}
}
```
---

### src/main/resources/application.properties

```
