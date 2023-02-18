---
layout:     post
title:      Unit Testing Rest Services with Spring Boot and JUnit
date:       2023-02-17 12:31:19
summary:    It's a piece of cake to set up a basic REST service with Spring Boot. We'll take it a step further and add excellent unit tests to our RESTful Service.
categories:  SpringBootUnitTesting
permalink:  /unit-testing-for-spring-boot-rest-services
image: /images/unit-test-category.png
---

This article will assist you in writing excellent unit tests for your Spring Boot Rest Service. We will create a few of basic rest services using a simple code sample.

![Image](/images/SpringBootRestService-ProjectStructure.png "Spring Boot Rest Services - Project Structure")
 
## You will learn
- What is Unit Testing?
- How to create a Get REST Service for retrieving the courses that a student registered for?
- How to write a unit test for Get REST Service?
- How to create a Post REST Service for registering a course for student?
- How to write a unit test for POST Service?


## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse or IntellIJ.
- JDK 17

## Complete Maven Project With Code Examples

> Our Github repository has all the code examples - [https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files](https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files){:target="_blank"}

- Rest Services with Unit and Integration Tests
    - Website-springbootrestservices-simplerestserviceswithunitandintegrationtests.zip

## Unit Testing

Following screenshot shows eclipse project with all the files we will create.

![Image](/images/SpringBootRestService-ProjectStructure.png "Spring Boot Rest Services - Project Structure")

We want to write a unit test for the 'StudentController' Rest Controller. The 'StudentController' class offers two service methods: Get and Post. Unit tests will be written for both of these service methods.

In the unit test

- We will mock out the StudentService using Mockito
- We will use Mock MVC framework to launch only StudentController. 

A critical component of unit testing is keeping the scope as small as possible. We only want to test the methods in 'StudentController' in this unit test.

## Overview

Following is the order we do things in this guide:

- Bootstrap a project using Spring Initializr.
- Implement a Business Service for our API - StudentService.
- Implement the API - using StudentController. First we implement the GET methods and then the POST methods. 
- Unit Test the API.

## Bootstrap REST Services Application with Spring Initializr
> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="\_blank"} is great tool to bootstrap your Spring Boot projects.

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

Data is required by all apps. Instead of a true database, we'll utilise an `ArrayList`, which is similar to an in-memory data store.

A student may enrol in many courses. A course contains an id, a name, a description, and a set of actions that must be completed in order to complete the course. A student has an id, a name, a description, and a list of courses for which he or she is presently registered. StudentService is exposing methods to us.

- `public List<Student> retrieveAllStudents()` - Retrieve details for all students
- `public Student retrieveStudent(String studentId)` - Retrieve a specific student details
- `public List<Course> retrieveCourses(String studentId)` - Retrieve all courses a student is registered for
- `public Course retrieveCourse(String studentId, String courseId)` - Retrieve details of a specific course a student is registered for
- `public Course addCourse(String studentId, Course course)` - Add a course to an existing student

The precise implementation of the Service 'StudentService' and the model classes 'Course' and 'Student' may be seen at the bottom of this article.

- src/main/java/com/in28minutes/springboot/model/Course.java
- src/main/java/com/in28minutes/springboot/model/Student.java
- src/main/java/com/in28minutes/springboot/service/StudentService.java


## Adding the couple of Http GET Operations

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

Below picture shows how we can execute this Get Operation from Postman - my favorite tool to run rest services.

![Image](/images/ExecutingGetRestServiceUsingPostman.png "Executing Rest Service From Postman")   

## Add spring-security-test for disabling security in unit tests

```
<dependency>
	<groupId>org.springframework.security</groupId>
	<artifactId>spring-security-test</artifactId>
	<scope>test</scope>
</dependency>
```

## Unit Testing Http Get Operation

While unit testing a rest service, we want to launch only the relevant controller and the associated MVC Components. The annotation WebMvcTest is used to unit test the Spring MVC application. This is useful when a test exclusively focuses on Spring MVC components. When this annotation is used, complete auto-configuration is disabled and just configuration relevant to MVC tests is used. 

- `@ExtendWith(SpringExtension.class)` : `@ExtendWith` is a repeating annotation for registering extensions for the annotated test class, test interface/method/parameter/field. Test class constructors, test methods, and @BeforeAll, @BeforeEach, @AfterAll, and @AfterEach all allow annotated arguments.
`SpringExtension` integrates the Spring TestContext Framework into JUnit 5's Jupiter programming model.
- `@WebMvcTest(value = StudentController.class)`: The annotation WebMvcTest is used to unit test the Spring MVC application. This is useful when a test exclusively focuses on Spring MVC components. In this test, we simply want to run StudentController. While this unit test is run, no other controllers or mappings will be started.
- `@Autowired private MockMvc mockMvc`: MockMvc is the primary point of entry for server-side Spring MVC test support. It enables us to run commands against the test context.
- `@MockBean private StudentService studentService`: MockBeans are used to populate a Spring ApplicationContext with mocks. A studentService fake is constructed and auto-wired into the StudentController.
- `Mockito.when(studentService.retrieveCourse(Mockito.anyString(),Mockito.anyString())).thenReturn(mockCourse)`:When called, the method retrieveCourse is mocked to return the particular mockCourse.
- `MockMvcRequestBuilders.get("/students/Student1/courses/Course1").accept(MediaType.APPLICATION_JSON)`: Creating a Request builder to be able to execute a get request to uri "/students/Student1/courses/Course1" with accept header as "application/json"
- `mockMvc.perform(requestBuilder).andReturn()`: mockMvc is used to perform the request and return the response back.
- `JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false)`: We are using org.skyscreamer.jsonassert.JSONAssert. This allows us to do partial asserts against a JSON String. We are passing strict as false since we do not want to check for all fields in the response.

```java
package com.in28minutes.springboot.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.in28minutes.springboot.model.Course;
import com.in28minutes.springboot.service.StudentService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(value = StudentController.class)
@WithMockUser
public class StudentControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private StudentService studentService;

	Course mockCourse = new Course("Course1", "Spring", "10Steps",
			Arrays.asList("Learn Maven", "Import Project", "First Example", "Second Example"));

	String exampleCourseJson = "{\"name\":\"Spring\",\"description\":\"10Steps\",\"steps\":[\"Learn Maven\",\"Import Project\",\"First Example\",\"Second Example\"]}";

	@Test
	public void retrieveDetailsForCourse() throws Exception {

		Mockito.when(studentService.retrieveCourse(Mockito.anyString(),
						Mockito.anyString())).thenReturn(mockCourse);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
				"/students/Student1/courses/Course1").accept(
				MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		System.out.println(result.getResponse());
		String expected = "{\"id\":\"Course1\",\"name\":\"Spring\",\"description\":\"10 Steps\"}";


		// {"id":"Course1","name":"Spring","description":"10 Steps, 25 Examples and 10K Students","steps":["Learn Maven","Import Project","First Example","Second Example"]}

		JSONAssert.assertEquals(expected, result.getResponse()
				.getContentAsString(), false);
	}

}

```

## Adding Http POST Operation

A Http POST Operation should return a status of created (201) when the resource creation is successful. 

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

## Executing the Http POST Operation

An example request is shown below. It provides all of the information needed to enrol a student for a course.
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

The image below demonstrates how we may do this Http POST Operation with Postman, my preferred tool for running rest services. Make sure you choose raw under the Body tab. Choose JSON from the dropdown menu. Copy and paste the above request into the body.

The URL we use is http://localhost:8080/students/Student1/courses.

![Image](/images/ExecutingPostRestServiceUsingPostman.png "Executing Post Rest Service From Postman")   

## Writing Unit Test for the Http POST Operation

In the unit test, we would want to post the request body to the url `/students/Student1/courses`. In the response, we check for HttpStatus of Created and that the location header contains the url of the created resource.

- `MockMvcRequestBuilders.post("/students/Student1/courses").accept(MediaType.APPLICATION_JSON)`: Create a post request with an accept header for `application\json`
- `content(exampleCourseJson).contentType(MediaType.APPLICATION_JSON)`: Use the specified content as body of the request and set content type header.
- `assertEquals(HttpStatus.CREATED.value(), response.getStatus())`: Assert that the return status is CREATED.
- `response.getHeader(HttpHeaders.LOCATION)`: Get the location from response header and later assert that it contains the URI of the created resource.

```java
	@Test
	public void createStudentCourse() throws Exception {
		Course mockCourse = new Course("1", "Smallest Number", "1",
				Arrays.asList("1", "2", "3", "4"));

		// studentService.addCourse to respond back with mockCourse
		Mockito.when(studentService.addCourse(Mockito.anyString(),
						Mockito.any(Course.class))).thenReturn(mockCourse);

		// Send course as body to /students/Student1/courses
		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post("/students/Student1/courses")
				.accept(MediaType.APPLICATION_JSON).content(exampleCourseJson)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(HttpStatus.CREATED.value(), response.getStatus());

		assertEquals("http://localhost/students/Student1/courses/1",
				response.getHeader(HttpHeaders.LOCATION));

	}

```