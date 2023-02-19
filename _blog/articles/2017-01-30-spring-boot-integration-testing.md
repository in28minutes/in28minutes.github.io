---
layout:     post
title:      Writing Integration Tests for Rest Services with Spring Boot
date:       2023-02-18 12:31:19
summary:    Setting up a basic REST Service with Spring Boot is a cake walk. We will go one step further and add great integration tests! 
categories:  SpringBootUnitTesting
permalink:  /integration-testing-for-spring-boot-rest-services
image: /images/unit-test-category.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

This post will assist you in creating excellent integration tests for your Spring Boot Rest Service. We will create a few of basic rest services using a simple code sample.
 
## You will learn
- What is Integration Testing?
- How to create a Get REST Service for retrieving the courses that a student registered for?
- How to write a integration test for Get REST Service?
- How to create a Post REST Service for registering a course for student?
- How to write a integration test for the POST Service?



## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - [https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services-with-unit-and-integration-tests](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services-with-unit-and-integration-tests)

## Integration Testing

Following screenshot shows eclipse project with all the files we will create.

![Image](/images/SpringBootRestService-ProjectStructure.png "Spring Boot Rest Services - Project Structure")

We want to write an integration test for the 'StudentController' Rest Controller. The 'StudentController' class offers two service methods: Get and Post. Both of these service methods will be subjected to integration testing. 

In the integration test

- `@SpringBootTest` will be used to launch the whole Spring Boot application.
- `TestRestTemplate` will be used to call the service methods.
- The results will be asserted using a fantastic JSON assert framework - `org.skyscreamer.jsonassert.JSONAssert`.

Testing all of the application's levels is an important aspect of integration testing.

## Overview

In this guide, we perform everything in the following order:

- Spring Initializr may be used to bootstrap a project.
- Build a Business Service - StudentService - for our API.
- Use StudentController to implement the API. The GET methods are implemented first, followed by the POST methods. 
- Create API integration tests.


## Using Spring Initializr to Create a REST Services Application

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

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
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

## Adding Business Services to Your Application

All applications need data. Instead of talking to a real database, we will use an `ArrayList` - kind of an in-memory data store.

A student may enrol in many courses. A course contains an id, a name, a description, and a set of actions that must be completed in order to complete the course. A student has an id, a name, a description, and a list of courses for which he or she is presently registered. StudentService is exposing methods to us. 

- `public List<Student> retrieveAllStudents()` - Retrieve details for all students
- `public Student retrieveStudent(String studentId)` - Retrieve a specific student details
- `public List<Course> retrieveCourses(String studentId)` - Retrieve all courses a student is registered for
- `public Course retrieveCourse(String studentId, String courseId)` - Retrieve details of a specific course a student is registered for
- `public Course addCourse(String studentId, Course course)` - Add a course to an existing student

 The precise implementation of the Service `StudentService` and the model classes `Course` and 'Student' may be seen at the bottom of this article.

- src/main/java/com/in28minutes/springboot/model/Course.java
- src/main/java/com/in28minutes/springboot/model/Student.java
- src/main/java/com/in28minutes/springboot/service/StudentService.java


## Adding Couple of Http GET Operations

The Rest Service `StudentController` exposes couple of get services.

- `@Autowired private StudentService studentService` : Spring Autowiring is being used to connect the student service to the StudentController.
- `@GetMapping("/students/{studentId}/courses")`: Making a Get Service with studentId available as a route variable 
- `@GetMapping("/students/{studentId}/courses/{courseId}")`: Introducing a Get Service for fetching a student's individual course. 
- `@PathVariable String studentId`: This argument will be mapped to the value of studentId from the uri.

```java
package com.in28minutes.springboot.controller;

import java.net.URI;
import java.util.List;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students/{studentId}/courses")
    public List<Course> retrieveCoursesForStudent(@PathVariable String studentId) {
        return studentService.retrieveCourses(studentId);
    }

	@GetMapping("/students/{studentId}/courses/{courseId}")
	public Course retrieveDetailsForCourse(@PathVariable String studentId, @PathVariable String courseId) {
		return studentService.retrieveCourse(studentId, courseId);
	}

    @PostMapping("/students/{studentId}/courses")
    public ResponseEntity<Void> registerStudentForCourse(@PathVariable String studentId, @RequestBody Course newCourse) {

        Course course = studentService.addCourse(studentId, newCourse);

        if (course == null)
            return ResponseEntity.noContent().build();

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(course.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

}


```

## Executing the Http Get Operation Using Postman
We will fire a request to http://localhost:8080/students/Student1/courses/Course1 to test the service. Response is as shown below.

```json
{
  "id": "Course1",
  "name": "Spring",
  "description": "10Steps",
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

## Integration Testing with the Http Get Operation

> When we are writing an integration test for a rest service, we would want to launch the entire spring context. 

- `@SpringBootTest(classes = StudentServicesApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)` : Launch the entire Spring Boot Application on a Random Port
- `@LocalServerPort private int port;`: Autowire the random port into the variable so that we can use it create the url.
- `createURLWithPort(String uri)` : Utility method to create the url given an uri. It appends the port.
- `HttpEntity<String> entity = new HttpEntity<String>(null, headers);`: We use entity so that we have the flexibility of adding in request headers in future.
- `restTemplate.exchange(createURLWithPort("/students/Student1/courses/Course1"),HttpMethod.GET, entity, String.class)`: Fire a GET request to the specify uri and get the response as a String.
- `JSONAssert.assertEquals(expected, response.getBody(), false)` : Assert that the response contains expected fields.
            
```java
package com.in28minutes.springboot.controller;

import org.json.JSONException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.in28minutes.springboot.StudentServicesApplication;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = StudentServicesApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class StudentControllerIT {
    @LocalServerPort
    private int port;

    TestRestTemplate restTemplate = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Test
    public void testRetrieveStudentCourse() throws JSONException {

        HttpEntity<String> entity = new HttpEntity<>(null, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                createURLWithPort("/students/Student1/courses/Course1"),
                HttpMethod.GET, entity, String.class);

        String expected = "{\"id\":\"Course1\",\"name\":\"Spring\",\"description\":\"10 Steps\"}";

        JSONAssert.assertEquals(expected, response.getBody(), false);
    }

    private String createURLWithPort(String uri) {
        return "http://localhost:" + port + uri;
    }
}
```

## Adding Http POST Operation

> A POST Service should return a status of created (201) when the resource creation is successful. 

`@PostMapping("/students/{studentId}/courses")`: Mapping a url for the POST Request
`@RequestBody Course newCourse`: Using Binding to bind the body of the request to Course object.
`ResponseEntity.created(location).build()`: Return a status of created. Also return the location of created resource as a Response Header.

```java
	@PostMapping("/students/{studentId}/courses")
	public ResponseEntity<Void> registerStudentForCourse(@PathVariable String studentId, @RequestBody Course newCourse) {

		Course course = studentService.addCourse(studentId, newCourse);

		if (course == null)
			return ResponseEntity.noContent().build();

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(course.getId()).toUri();

		return ResponseEntity.created(location).build();
	}
```

## Executing Http POST Operation

Example Request is shown below. It contains all the details to register a course to a student. 
```json
{
  "name": "Microservices",
  "description": "10Steps",
  "steps": [
    "Learn How to Break Things Up",
    "Automate the hell out of everything",
    "Have fun"
  ]
}
```

Below picture shows how we can execute this Http Post Operation from Postman - my favorite tool to run rest services. Make sure you go to the Body tab and select raw. Select JSON from the dropdown. Copy above request into body.

The URL we use is http://localhost:8080/students/Student1/courses.

![Image](/images/ExecutingPostRestServiceUsingPostman.png "Executing Post Rest Service From Postman")   

## Writing Integration Test for the Http POST Operation 

> When writing an integration test for a POST service we would want to check if the location header contains the uri of the created resource.

- `String actual = response.getHeaders().get(HttpHeaders.LOCATION).get(0);` : Get the Location header from the response.
- `assertTrue(actual.contains("/students/Student1/courses/"))` : Assert that the header contains the uri of the newly created resource.

```java
	@Test
	public void addCourse() {

		Course course = new Course("Course1", "Spring", "10 Steps",
				List.of("Learn Maven", "Import Project", "First Example", "Second Example"));

		HttpEntity<Course> entity = new HttpEntity<Course>(course, headers);

		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/students/Student1/courses"),
				HttpMethod.POST, entity, String.class);

		String actual = response.getHeaders()
		.get(HttpHeaders.LOCATION)
		.get(0);

		assertTrue(actual.contains("/students/Student1/courses/"));

	}
```


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
		<version>3.0.2</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<java.version>17</java.version>
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
		<dependency>
		    <groupId>org.springframework.security</groupId>
		    <artifactId>spring-security-test</artifactId>
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

### src/main/java/com/in28minutes/springboot/controller/StudentController.java

```java
package com.in28minutes.springboot.controller;

import java.net.URI;
import java.util.List;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/students/{studentId}/courses")
    public List<Course> retrieveCoursesForStudent(
		@PathVariable String studentId) {
        return studentService.retrieveCourses(studentId);
    }

	@GetMapping("/students/{studentId}/courses/{courseId}")
	public Course retrieveDetailsForCourse(
		@PathVariable String studentId,
	    @PathVariable String courseId) {
		return studentService.retrieveCourse(studentId, courseId);
	}

    @PostMapping("/students/{studentId}/courses")
    public ResponseEntity<Void> registerStudentForCourse(
		@PathVariable String studentId,
		@RequestBody Course newCourse) {

        Course course = studentService.addCourse(studentId, newCourse);

        if (course == null)
            return ResponseEntity.noContent().build();

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(course.getId())
                .toUri();

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
import java.util.List;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.model.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

	private static final List<Student> students = new ArrayList<>();

	private final SecureRandom random = new SecureRandom();

	static {
		//Initialize Data
		Course courseOne = new Course("Course1", "Spring", "10 Steps",
				List.of("Learn Maven", "Import Project", "First Example", "Second Example"));

		Course courseTwo = new Course("Course2", "Spring MVC", "10 Examples", 
		        List.of("Learn Maven", "Import Project", "First Example", "Second Example"));

		Course courseThree = new Course("Course3", "Spring Boot", "6K Students",
				List.of("Learn Maven", "Learn Spring", "Learn Spring MVC", "First Example", "Second Example"));

		Course courseFour = new Course("Course4", "Maven", "Most popular maven course on internet!", List.of("Pom.xml", "Build Life Cycle", "Parent POM", "Importing into Eclipse"));

		Student ranga = new Student("Student1", "Ranga Karanam", "Hiker, Programmer and Architect", new ArrayList<>(List.of(courseOne, courseTwo, courseThree, courseFour)));

		Student satish = new Student("Student2", "Satish T", "Hiker, Programmer and Architect", new ArrayList<>(List.of(courseOne, courseTwo, courseThree, courseFour)));

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

		return student == null ? null : student.getCourses();
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
```
---

### src/test/java/com/in28minutes/springboot/controller/StudentControllerIT.java

```java
package com.in28minutes.springboot.controller;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.in28minutes.springboot.StudentServicesApplication;
import com.in28minutes.springboot.model.Course;
import org.json.JSONException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = StudentServicesApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class StudentControllerIT {
    @LocalServerPort
    private int port;

    TestRestTemplate restTemplate = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Test
    public void testRetrieveStudentCourse() throws JSONException {

        HttpEntity<String> entity = new HttpEntity<>(null, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                createURLWithPort("/students/Student1/courses/Course1"),
                HttpMethod.GET, entity, String.class);

        String expected = "{\"id\":\"Course1\",\"name\":\"Spring\",\"description\":\"10 Steps\"}";

        JSONAssert.assertEquals(expected, response.getBody(), false);
    }

    @Test
    public void addCourse() {

        Course course = new Course("Course1", "Spring", "10Steps",
                List.of("Learn Maven", "Import Project", "First Example",
                        "Second Example"));

        HttpEntity<Course> entity = new HttpEntity<>(course, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                createURLWithPort("/students/Student1/courses"),
                HttpMethod.POST, entity, String.class);

        String actual = response.getHeaders().get(HttpHeaders.LOCATION).get(0);

        assertTrue(actual.contains("/students/Student1/courses/"));

    }

    private String createURLWithPort(String uri) {
        return "http://localhost:" + port + uri;
    }
}
```
---
