---
layout:     post
title:      Secure Rest Services and Web Applications with Spring Boot Security Starter
date:       2020-07-07 12:31:19
summary:    Spring Boot Starter Security is the recommended starter for enabling security on web application - including REST services. 
categories:  SpringBoot
permalink:  /securing-rest-services-with-spring-boot-starter-security
---

This guide will help you understand the different features Spring Boot Starter Security brings in using two examples

- A REST Service 
- A Simple Web Application Page
 
## You will learn
- What is Spring Boot Starter Security?
- What features are provided by Spring Boot Starter Security?
- How do you enable Spring Security on a web application?
- How do you enable Spring Security on a REST Web Service?
- How do you invoke a REST Service using Basic Authentication?
- We will look at an example of security a simple web application as well as security a REST service with Basic Authentication.

## Free Courses - Learn in 10 Steps

- [FREE 5 DAY CHALLENGE - Learn Spring and Spring Boot](https://links.in28minutes.com/SBT-Page-Top-LearningChallenge-SpringBoot){:target="_blank"}
- [Learn Spring Boot in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-springboot){:target="_blank"}
- [Learn Docker in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-docker){:target="_blank"}
- [Learn Kubernetes in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-k8s){:target="_blank"}
- [Learn AWS in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-aws-beanstalk){:target="_blank"}



## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - [https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files](https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files){:target="_blank"}

- Spring Security Example
    - Website-SpringSecurityStarterWebApplication_Final.zip

## Bootstrapping web application with Spring Initializr

Creating a Web application with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework for both the web page and the rest service.  

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot` as Group
  - Choose `student-services` as Artifact
  - Choose following dependencies
    - Web
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

## Setting up a Simple Web Application
Let's quickly setup a simple web application to secure using Spring Security. We will create one Controller which would redirect to the welcome view - a simple jsp.

### JSP Support
We want to use JSP as the view. Default embedded servlet container for Spring Boot Starter Web is tomcat. To enable support for JSP's, we would need to add a dependency on tomcat-embed-jasper.

```
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
```

### Adding Login Controller
LoginController maps the root url "/" to showLoginPage method. A hardcoded name is populated into the model. It returns a view name of "welcome" which maps to welcome.jsp.

```java
package com.in28minutes.springboot.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showLoginPage(ModelMap model) {
        model.put("name", "in28Minutes");
        return "welcome";
    }

}
```

### Adding welcome.jsp
welcome.jsp is a simple jsp with a welcome message.

```html
<div class="container">
    Welcome ${name}!! 
</div>
```

### Configure a View Resolver
Welcome jsp is in folder src/main/webapp/WEB-INF/jsp/. We will configure a view resolver in application.properties to map the view name to the physical jsp

```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

### Run the web application
Launch StudentServicesApplication as a java application. Following screenshot shows the application launched up at http://localhost:8080.

![Image](/images/SpringBootSecuritySecurity-WebApplication.png "Spring Security - Web Application") 

## Add a Simple Rest Service

Lets add a simple REST Service as well. We will add

- Two Model Objects - Course and Student. Student can register for multiple courses.
- One Business Service - To manage the business logic. Most of the business logic we use is on top of Hard coded data stored in a static ArrayList.
- One Rest Controller - StudentController. Exposes one Rest service to retrieve the list of courses a student is registered for.

## Model and Business Logic
Below snippets show an extract from the model objects Course and Student.

```java
public class Course {
	private String id;
	private String name;
	private String description;
	private List<String> steps;
}
```

```java
public class Student {
	private String id;
	private String name;
	private String description;
	private List<Course> courses;
}
```
StudentService provides a method `public List<Course> retrieveCourses(String studentId)` to retrieve the courses a student registered for.

```java
@Component
public class StudentService {

	private static List<Student> students = new ArrayList<>();

	static {
		// Initialize Data
		Course course1 = new Course("Course1", "Spring", "10 Steps",
				Arrays.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));
		Course course2 = new Course("Course2", "Spring MVC", "10 Examples",
				Arrays.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));

		Student ranga = new Student("Student1", "Ranga Karanam",
				"Hiker, Programmer and Architect", new ArrayList<>(
						Arrays.asList(course1, course2)));

		students.add(ranga);
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
}
```

### Creating REST Service

Rest Service `StudentController` exposes a simple Get service at URI mapping "/students/{studentId}/courses". The `StudentService` is auto-wired in.

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
}

```

### Executing REST Service

Executing the Rest Service is easy. Go to the url http://localhost:8080/students/Student1/courses in your browser or your favorite rest client. I use Postman.

![Image](/images/SpringBootSecuritySecurity-RestService.png "Spring Security - Rest Service") 

## Add Spring Boot Starter Security

Let's now add Spring Boot Starter Security as a dependency to this project.

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

```

### New Dependencies
Screenshot shows the new dependencies that the spring-boot-starter-security brings in.

![Image](/images/SpringBootSecuritySecurity-Depedencies.png "Dependencies of Spring Boot Security Starter")  

### Auto Configuration
When we restart the application, we see following statements printed in the log. 

```
Mapping filter: 'springSecurityFilterChain' to: [/*]

Using default security password: 25e07e82-720d-4109-ba8d-25177c6347e6

Creating filter chain:
...
...

```

All this magic is because of auto configuration:

- `Mapping filter: 'springSecurityFilterChain' to: [/*]` : Spring Security is by default turned on for all the URLs in the application.
- Basic Authentication is the default.
- `Using default security password: 25e07e82-720d-4109-ba8d-25177c6347e6` : Default userid is user. Default password is printed in the server start up log. In this example, password is 25e07e82-720d-4109-ba8d-25177c6347e6
- Some filter chains are configured to enable security

### Executing Rest Service

When we execute the Rest Service now at http://localhost:8080/students/Student1/courses it returns authentication failure. Status is 401 with message "Bad credentials". This is because our service is now protected by Spring Security.

```json
{
  "timestamp": 1485768623632,
  "status": 401,
  "error": "Unauthorized",
  "message": "Bad credentials",
  "path": "/students/Student1/courses"
}
```

Below image shows the execution of service in Postman:

![Image](/images/SpringBootSecuritySecurity-RestService-WithoutAuthentication.png "Spring Boot Security Starter - Executing Protected Rest Service without Authentication") 

### Executing Rest Service with Basic Authentication

Get the password from log by searching for `Using default security password:`. The userid is user. Use this combination to execute the service using Basic Authentication as shown in the screenshot below.

![Image](/images/SpringBootSecuritySecurity-RestService-Authentication.png "Spring Boot Security Starter - Executing Rest Service with Basic Authentication") 

### Running the Web Application
When you launch the url http://localhost:8080 in the browser you get a popup asking for userid and password. You would need to enter same details that we provided for REST Service. 

![Image](/images/SpringBootSecuritySecurity-WebApplication-Authentication.png "Spring Boot Security Starter - Providing authentication details for Web application") 

That's really a lot of magic we turned on just by adding a simple dependency Spring Boot Starter Security. 

## Configuring Custom Users and Roles

Let's now configure custom users and roles

- We will use two roles Admin and User. Admin role has access to the web application and User role has access to execute REST Services.
- We will create one user for Admin role with credentials admin1/secret1
- We will create one user for User role with credentials user1/secret1

```java
package com.in28minutes.springboot.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	// Authentication : User --> Roles
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.inMemoryAuthentication().passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance()).withUser("user1").password("secret1")
				.roles("USER").and().withUser("admin1").password("secret1")
				.roles("USER", "ADMIN");
	}

	// Authorization : Role -> Access
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers("/students/**")
				.hasRole("USER").antMatchers("/**").hasRole("ADMIN").and()
				.csrf().disable().headers().frameOptions().disable();
	}

}
```

### Executing Rest Services
Now we can use user1/secret1 combination to execute rest service.

### Launch Web application
We need to use admin1/secret1 combination in the popup to launch the web application.



## Complete Code Example

### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot</groupId>
	<artifactId>student-services-security</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>student-services</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.1.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
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

		<!--<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>-->

		<dependency>
			<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-jasper</artifactId>
			<scope>provided</scope>
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

### /src/main/java/com/in28minutes/springboot/controller/LoginController.java

```java
package com.in28minutes.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showLoginPage(ModelMap model) {
        model.put("name", "in28Minutes");
        return "welcome";
    }

}
```
---

### /src/main/java/com/in28minutes/springboot/controller/StudentController.java

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
}
```
---

### /src/main/java/com/in28minutes/springboot/model/Course.java

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

### /src/main/java/com/in28minutes/springboot/model/Student.java

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

### /src/main/java/com/in28minutes/springboot/security/SecurityConfig.java

```java
package com.in28minutes.springboot.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	// Authentication : User --> Roles
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.inMemoryAuthentication().passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance()).withUser("user1").password("secret1")
				.roles("USER").and().withUser("admin1").password("secret1")
				.roles("USER", "ADMIN");
	}

	// Authorization : Role -> Access
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers("/students/**")
				.hasRole("USER").antMatchers("/**").hasRole("ADMIN").and()
				.csrf().disable().headers().frameOptions().disable();
	}

}
```
---

### /src/main/java/com/in28minutes/springboot/service/StudentService.java

```java
package com.in28minutes.springboot.service;

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
		// Initialize Data
		Course course1 = new Course("Course1", "Spring", "10 Steps",
				Arrays.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));
		Course course2 = new Course("Course2", "Spring MVC", "10 Examples",
				Arrays.asList("Learn Maven", "Import Project", "First Example",
						"Second Example"));

		Student ranga = new Student("Student1", "Ranga Karanam",
				"Hiker, Programmer and Architect", new ArrayList<>(
						Arrays.asList(course1, course2)));

		students.add(ranga);
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
}
```
---

### /src/main/java/com/in28minutes/springboot/StudentServicesApplication.java

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

### /src/main/resources/application.properties

```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```
---

### /src/main/webapp/WEB-INF/jsp/welcome.jsp

```
<div class="container">
    Welcome ${name}!! 
</div>
```
---

### /src/test/java/com/in28minutes/springboot/StudentServicesApplicationTests.java

```java
package com.in28minutes.springboot;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentServicesApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---

