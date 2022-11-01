---
layout:     post
title:      Spring Boot For Beginners in 100 Steps
date:       2022-10-11 12:31:19
summary:    Understand and love the power of Spring Boot - All its features are illustrated developing a web application managing todos and a basic API for survey questionnaire. Also covers unit testing, mocking and integration testing.
categories: SpringBoot
permalink:  /spring-boot-for-beginners-and-experts
image: /images/generic-category.png
---

Spring Boot has a lot of magic going for it. 

Developing applications with it is cool and fun.

Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can “just run”. Most Spring Boot applications need very little Spring configuration.

> In this course, you will learn the cool things about Spring Boot and Spring Boot Starter Projects. 

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://links.in28minutes.com/MISC-SPRING-BOOT){:target="_blank"}


## What You will learn

We will develop 
- A web application to manage your todos
- A basic REST Service to manage questions of a survey

This course would be a perfect first step as an introduction to Spring Boot.

> You will learn about Spring Boot step by step - in more than 90 steps. 

You will be using REST Services, Spring (Dependency Management), Spring MVC, Spring Boot, Spring Security (Authentication and Authorization), BootStrap (Styling Pages), Maven (dependencies management), Eclipse (IDE) and Tomcat Embedded Web Server. We will help you set up each one of these. 

You will learn about
- Basics of Spring Boot
- Basics of Auto Configuration and Spring Boot Magic
- Spring Boot Starter Projects
- Spring Initializr
- DispatcherServlet
- Basic Todo Management Application with Login/Logout
- Model, Controllers, ViewResolver and Filters
- Forms - DataBinding, Validation
- Annotation based approach - @RequestParam, @ModelAttribute, @SessionAttributes etc
- Bootstrap to style the page
- Basic REST Services using Spring Boot Starter Web
- REST Service Content Negotiation with JSON and XML
- Embedded servlet containers : Tomcat, Jetty and Undertow
- Writing Unit and Integration tests using Spring Boot Starter Test
- Profiles and Dynamic Configuration with Spring Boot
- Spring Boot Data JPA
- Spring Boot Actuator
- Spring Security
- Spring Boot Developer Tools and LiveReload



## Getting Started

### Installing Tools

- Installation 
	- Video : https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
	- PDF : https://github.com/in28minutes/SpringIn28Minutes/blob/master/InstallationGuide-JavaEclipseAndMaven_v2.pdf
	- More Details : https://github.com/in28minutes/getting-started-in-5-steps
- Troubleshooting
	- [A 50 page troubleshooting guide with more than 200 Errors and Questions answered](https://github.com/in28minutes/in28minutes-initiatives/blob/master/The-in28Minutes-TroubleshootingGuide-And-FAQ)
	
### Running Examples

- Download the zip or clone the Git repository.
- Unzip the zip file (if you downloaded one)
- Open Command Prompt and Change directory (cd) to folder containing pom.xml
- Open Eclipse 
   - File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip
   - Select the right project
- Choose the Spring Boot Application file (search for @SpringBootApplication)
- Right Click on the file and Run as Java Application
- You are all Set
- For help : use our installation guide - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3

## Spring Level 1 to Level 6 Section Overview

Here is a quick overview of different sections of the course:
- Introduction to Spring in 10 Steps
- Develop a Todo Management Web Application in 30 Steps
- Introduction to Unit Testing with JUnit in 5 Steps 
- Introduction to Mocking with Mockito in 5 Steps
- Advanced Features of Spring Boot in 25 Steps - We learn these developing a simple API for managing survey questionnaire.
- Introduction to JPA in 10 Steps
- Connecting our Todo Management Web Application to JPA

|Title|Category|Github|
| -------------------- |:------------------:|--------------|
|Spring Framework in 10 Steps|Spring - Level 1|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/01-spring-in-depth){:target='_blank'}|
|Spring in Depth|Spring - Level 2|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/01-spring-in-depth){:target='_blank'}|
|Unit Testing with Spring Framework|Spring - Level 3|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/01-spring-in-depth){:target='_blank'}|
|Spring Boot in 10 Steps|Spring - Level 4|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/00-framework-tool-introductions/05.Spring-Boot-Introduction-In-10-Steps){:target='_blank'}|
|Spring AOP|Spring - Level 5|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/03-spring-aop){:target='_blank'}|
|Spring JDBC and JPA|Spring - Level 6|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/04-spring-jdbc-to-jpa){:target='_blank'}|

## 5 Bonus Sections - Introduction to Tools and Frameworks

|Title|Category|Github|
| -------------------- |:------------------:|--------------|
|Eclipse in 5 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/00-framework-tool-introductions/01.Eclipse-Introduction-in-5-steps){:target='_blank'}|
|Maven in 5 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/00-framework-tool-introductions/02.Maven-Introduction-In-5-Steps){:target='_blank'}|
|JUnit in 5 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/00-framework-tool-introductions/03.JUnit-Introduction-In-5-Steps){:target='_blank'}|
|Mockito in 5 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-master-class/tree/master/00-framework-tool-introductions/04.Mockito-Introduction-In-5-Steps){:target='_blank'}|
|Basic Web Application with Spring MVC|Introduction|[Project Folder on Github](){:target='_blank'}|

## Step by Step Details

### Introductory Modules

> Note : These introductory modules are organized across the course to enable you to learn JIT - Just In Time. If you are new to Spring, Do not forget to check out the introduction to Spring module in the appendix.

- Introduction to JUnit in 5 Steps
- Introduction to Mockito in 5 Steps
- Introduction to JPA in 10 Steps
- Introduction to Spring in 10 Steps

### Web Application with Spring Boot
- Step 01: Part 1 Basic Spring Boot Web Application Setup
- Step 01: Part 2 Pom.xml, Spring Boot Application and application properties
- Step 02: Part 1 First Spring MVC Controller, @ResponseBody, @Controller
- Step 02: Part 2 Understanding HTTP Request Flow
- Step 03: Demystifying some of the Spring Boot magic
- Step 04: Redirect to Login JSP - @ResponseBody and View Resolver
- Step 05: Show userid and password on welcome page - ModelMap and @RequestParam
- Step 06: DispatcherServlet and Spring MVC Flow
- Step 07: Your First HTML form
- Step 08: Add hard-coded validation of userid and password
- Step 09: Magic of Spring
- Step 10: Create TodoController and list-todos view. Make TodoService a @Service
- Step 11: Architecture of Web Applications
- Step 12: Session vs Model vs Request - @SessionAttributes
- Step 13: Add new todo
- Step 14: Display Todos in a table using JSTL Tags
- Step 15: Bootstrap for Page Formatting using webjars
- Step 16: Let's delete a Todo
- Step 17: Format Add Todo Page and Adding Basic HTML5 form validation
- Step 18: Part 1 Validations with Hibernate Validator - Using Command Bean
- Step 18: Part 2 Using JSR 349 Validations
- Step 19: Updating a todo
- Step 20: Let's add a Target Date for Todo - Use initBinder to Handle Date Fields
- Step 21: JSP Fragments and Navigation Bar
- Step 22: Preparing for Spring Security
- Step 23: Initial Spring Security Setup
- Step 24: Refactor and add Logout Functionality using Spring Security
- Step 25: Exception Handling

### Connecting Web Application with JPA

> Note : Ensure that you complete the introduction to JPA module before doing this section

- Step 26: Adding Dependencies for JPA and H2
- Step 27: Configuring H2 Console
- Step 28: Create Todo Entity and JPA Repository
- Step 29: Insert Todo using JPA Repository
- Step 30: Update, Delete and Retrieve Todos using JPA Repository
- Step 31: Data initialization with data.sql
- Step 32: Connecting JPA to other databases
- Step 33: Upgrading to Spring Boot 2 and Spring 5


### Spring Boot Deep Dive with a simple API
- Step 01: Setup and Launch Spring Boot Application with Maven and Eclipse
- Step 02: Creating your first RestController
- Step 03: Understanding Spring Boot Magic : Spring Boot Starter Web
- Step 04: Understanding Spring Boot Magic : Spring Boot Starter Parent
- Step 05: Spring Boot vs Spring
- Step 06: Create all Services for Survey and Questions
- Step 07: What is REST? Creating REST Service with @GetMapping and @PathVariable
- Step 08: Second REST Service to retrieve a specific question
- Step 09: Spring Boot Developer Tools and LiveReload : Develop faster!
- Step 10: Create a REST Service to add a new question to survey : @PostMapping, Postman 
- Step 11: Understand Content Negotiation. Deliver XML Responses from the REST Services
- Step 12: Spring Initializr : Create Spring Boot Projects on the fly!
- Step 13: Spring Boot Actuator : Monitor your Spring Boot applications!
- Step 14: Understanding Embedded servlet containers : Switch to Jetty or Undertow
- Step 15: Adding Dynamic Configuration to your application : YAML & More..
- Step 16: Basics of Profiles
- Step 17: Advanced Application Configuration with Type Safe Configuration Properties
- Step 18: Spring Boot Starter : Spring Data JPA with CommandLineRunner
- Step 19: In Memory Database H2 Console and add a new JPA Repository Method
- Step 20: Spring Boot Starter : Introduction to Spring Data Rest
- Step 21: Spring Boot Integration Test
- Step 22: Adding Integration Test for POST Request
- Step 23: Small Refactoring to organise ourselves
- Step 24: Writing Unit Tests with Spring Boot and Mockito
- Step 25: Writing Unit test for createTodo
- Step 26: Securing our services with Basic Authentication using Spring Security
- Step 27: Configure Spring Security user roles for survey and other services
- Step 28: A Deep Dive into Spring Boot Auto Configuration


## Step By Step Notes and Code Examples

### 02.Spring-Boot-Web-Application

## Step01.md

#### What You Will Learn during this Step:
- Lets create a simple web application using Spring Boot
- Lets run the Spring Boot Application
- There is a lot of magic happening in here! We will take a deep dive into the magic in Step 03. 

#### Files List

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.web</groupId>
	<artifactId>spring-boot-first-web-application</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-boot-first-web-application</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.3.RELEASE</version> 
		<!-- We will upgrade to 2.3.1.RELEASE in Step 33: Upgrading to Spring Boot 2 and Spring 5 ->
		<relativePath/> <!-- lookup parent from repository -->
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
src/main/java/com/in28minutes/springboot/web/SpringBootFirstWebApplication.java

```java
package com.in28minutes.springboot.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootFirstWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFirstWebApplication.class, args);
	}
}
```
---
src/main/resources/application.properties

```
```
---
src/test/java/com/in28minutes/springboot/web/SpringBootFirstWebApplicationTests.java

```java
package com.in28minutes.springboot.web;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootFirstWebApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---
## Step02.md

#### What You Will Learn during this Step:
- @RequestMapping(value = "/login", method = RequestMethod.GET)
- http://localhost:8080/login
- Why @ResponseBody?
- Important of RequestMapping method
- How do web applications work? Request and Response
 - Browser sends Http Request to Web Server
 - Code in Web Server => Input:HttpRequest, Output: HttpResponse
 - Web Server responds with Http Response

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java New

```java
package com.in28minutes.springboot.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
	
	@RequestMapping("/login")
	public String loginMessage(){
		return "Hello World";
	}
}
```
---
src/main/resources/application.properties Modified
New Lines
```
logging.level.org.springframework.web: DEBUG
```
## Step03.md

#### What You Will Learn during this Step:
- Demystifying some of the magic
 - Spring Boot Starter Parent
 - Spring Boot Starter Web
 - Embedded Tomcat
 - Dev Tools

## Step04.md

#### What You Will Learn during this Step:
- Your First JSP
 - There is a bit of setup before we get there!
- Introduction to View Resolver

#### Useful Snippets and References
First Snippet - /src/main/webapp/WEB-INF/jsp/login.jsp
```
<html>
<head>
<title>Yahoo!!</title>
</head>
<body>
My First JSP!!!
</body>
</html>
```

Second Snippet - /src/main/resources/application.properties
```
spring.mvc.view.prefix: /WEB-INF/jsp/
spring.mvc.view.suffix: .jsp
logging.level.: DEBUG
```

Third Snippet : To enable jsp support in embedded tomcat server!
```
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
            <scope>provided</scope>
        </dependency>

```

#### Exercises
- Create a new jsp and a new controller method to redirect to it!
- Play around!

#### Files List

pom.xml Modified
New Lines
```
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
            <scope>provided</scope>
        </dependency>		
```

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified
```java
package com.in28minutes.springboot.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
	
	@RequestMapping("/login")
	public String loginMessage(){
		return "login";
	}
}
```
---
src/main/resources/application.properties Modified
New Lines
```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
logging.level.org.springframework.web=DEBUG
```
src/main/webapp/WEB-INF/jsp/login.jsp New

```
<html>

<head>
<title>First Web Application</title>
</head>

<body>
My First JSP!!
</body>

</html>
```
## Step05.md

#### What You Will Learn during this Step:
- You first GET Parameter
- Problem with using GET

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified
```java
@Controller
public class LoginController {
	@RequestMapping("/login")
	public String loginMessage(@RequestParam String name, ModelMap model){
		model.put("name", name);
		return "login";
	}
}
```
---
src/main/webapp/WEB-INF/jsp/login.jsp Modified
New Lines
```
My First JSP!! Welcome ${name}!
```

## Step06.md

#### What You Will Learn during this Step:
- Understand importance of DispatcherServlet.

#### Spring MVC Request Flow
- DispatcherServlet receives HTTP Request.
- DispatcherServlet identifies the right Controller based on the URL.
	- Controller executes Business Logic.
	- Controller returns a) Model b) View Name Back to DispatcherServlet.
- DispatcherServlet identifies the correct view 
	- ViewResolver
- DispatcherServlet makes the model available to view and executes it.
- DispatcherServlet returns HTTP Response Back.
- Flow : http://docs.spring.io/spring-framework/docs/2.0.8/reference/images/mvc.png

## Step07.md

#### What You Will Learn during this Step:
- Lets get the name from the user in a form

#### Useful Snippets and References
First Snippet
```
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String showLoginPage(ModelMap model, @RequestParam String name) {
        return "login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String handleLogin(ModelMap model, @RequestParam String name) {
        model.put("name", name);
        return "welcome";
    }

```
Second Snippet
```
<form method="POST">
        Name : <input name="name" type="text" /> <input type="submit" />
</form>

```

#### Files List

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified
```java
package com.in28minutes.springboot.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String showLoginPage(ModelMap model){
		return "login";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String showWelcomePage(ModelMap model, @RequestParam String name){
		model.put("name", name);
		return "welcome";
	}

}
```
---
src/main/webapp/WEB-INF/jsp/login.jsp Modified
New Lines
```
	<form method="post">
		Name : <input type="text" name="name" />
		Password : <input type="password" name="password" /> 
		<input type="submit" />
	</form>
```
src/main/webapp/WEB-INF/jsp/welcome.jsp New

```
<html>

<head>
<title>First Web Application</title>
</head>

<body>
	Welcome ${name}!!
</body>

</html>
```
---
## Step08.md

#### What You Will Learn during this Step:

- Add validation for userid and password
 - Hard coded validation!!


#### Files List

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified

```java
@Controller
public class LoginController {
	
	@Autowired
	LoginService service;
	
	@RequestMapping(value="/login", method = RequestMethod.GET)
	public String showLoginPage(ModelMap model){
		return "login";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String showWelcomePage(ModelMap model, @RequestParam String name, @RequestParam String password){
		boolean isValidUser = service.validateUser(name, password);
		
		if (!isValidUser) {
			model.put("errorMessage", "Invalid Credentials");
			return "login";
		}
		
		model.put("name", name);
		model.put("password", password);
		
		return "welcome";
	}

}
```
---
src/main/java/com/in28minutes/springboot/web/service/LoginService.java New

```java
package com.in28minutes.springboot.web.service;

import org.springframework.stereotype.Component;

@Component
public class LoginService {

	public boolean validateUser(String userid, String password) {
		// in28minutes, dummy
		return userid.equalsIgnoreCase("in28minutes")
				&& password.equalsIgnoreCase("dummy");
	}

}
```
---
src/main/webapp/WEB-INF/jsp/login.jsp Modified
New Lines
```
	<font color="red">${errorMessage}</font>
```

## Step09.md

#### What You Will Learn during this Step:
- Magic of Spring
 - Learn about Spring Auto-wiring and Dependency Management.
 - @Autowired, @Component

## Step10.md

#### What we will do:
- Create TodoController and list-todos.jsp
- Make TodoService a @Service and inject it

#### Pending for Next Step
- ${name} is not available in list-todos.jsp
- in28Minutes is hardcoded in TodoController

#### Snippets

Snippet -  /src/main/java/com/in28minutes/springboot/web/model/Todo.java
```
package com.in28minutes.springboot.web.model;

import java.util.Date;

public class Todo {
    private int id;
    private String user;
    private String desc;
    private Date targetDate;
    private boolean isDone;

    public Todo(int id, String user, String desc, Date targetDate,
            boolean isDone) {
        super();
        this.id = id;
        this.user = user;
        this.desc = desc;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Todo other = (Todo) obj;
        if (id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.format(
                "Todo [id=%s, user=%s, desc=%s, targetDate=%s, isDone=%s]", id,
                user, desc, targetDate, isDone);
    }

}
```

Snippet - /src/main/java/com/in28minutes/springboot/web/service/TodoService.java
```
package com.in28minutes.springboot.web.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.springboot.web.model.Todo;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int todoCount = 3;

    static {
        todos.add(new Todo(1, "in28Minutes", "Learn Spring MVC", new Date(),
                false));
        todos.add(new Todo(2, "in28Minutes", "Learn Struts", new Date(), false));
        todos.add(new Todo(3, "in28Minutes", "Learn Hibernate", new Date(),
                false));
    }

    public List<Todo> retrieveTodos(String user) {
        List<Todo> filteredTodos = new ArrayList<Todo>();
        for (Todo todo : todos) {
            if (todo.getUser().equals(user)) {
                filteredTodos.add(todo);
            }
        }
        return filteredTodos;
    }

    public void addTodo(String name, String desc, Date targetDate,
            boolean isDone) {
        todos.add(new Todo(++todoCount, name, desc, targetDate, isDone));
    }

    public void deleteTodo(int id) {
        Iterator<Todo> iterator = todos.iterator();
        while (iterator.hasNext()) {
            Todo todo = iterator.next();
            if (todo.getId() == id) {
                iterator.remove();
            }
        }
    }
}
```
## Step11.md

#### What we will do:
- Lets discuss about Architecture of web applications

## Step12.md

#### What You Will Learn during this Step:
- Session vs Model vs Request.
- Be cautious about what you use Session for.
- @SessionAttributes("name") and how it works?
- Why use Model? "adding elements directly to the HttpServletRequest (as request attributes) would seem to serve the same purpose. The reason to do this is obvious when taking a look at one of the requirements we have set for the MVC framework: It should be as view-agnostic as possible, which means we’d like to be able to incorporate view technologies not bound to the HttpServletRequest as well." - Rod Johnson et. al’s book Professional Java Development with the Spring Framework
- Spring documentation states that the @SessionAttributes annotation “list the names of model attributes which should be transparently stored in the session or some conversational storage.”

#### Useful Snippets and References
First Snippet
```
@SessionAttributes("name")
```

#### Files List

src/main/java/com/in28minutes/springboot/web/SpringBootFirstWebApplication.java Modified
New Lines
```
import org.springframework.context.annotation.ComponentScan;
@ComponentScan("com.in28minutes.springboot.web")
```
---
src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified
```java
@Controller
@SessionAttributes("name")
public class LoginController {
```
---
src/main/java/com/in28minutes/springboot/web/controller/TodoController.java New

```java
package com.in28minutes.springboot.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.in28minutes.springboot.web.service.LoginService;
import com.in28minutes.springboot.web.service.TodoService;

@Controller
@SessionAttributes("name")
public class TodoController {
	
	@Autowired
	TodoService service;
	
	@RequestMapping(value="/list-todos", method = RequestMethod.GET)
	public String showTodos(ModelMap model){
		String name = (String) model.get("name");
		model.put("todos", service.retrieveTodos(name));
		return "list-todos";
	}
}
```
---
src/main/java/com/in28minutes/springboot/web/model/Todo.java New

```java
package com.in28minutes.springboot.web.model;

import java.util.Date;

public class Todo {
    private int id;
    private String user;
    private String desc;
    private Date targetDate;
    private boolean isDone;

    public Todo(int id, String user, String desc, Date targetDate,
            boolean isDone) {
        super();
        this.id = id;
        this.user = user;
        this.desc = desc;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Todo other = (Todo) obj;
        if (id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.format(
                "Todo [id=%s, user=%s, desc=%s, targetDate=%s, isDone=%s]", id,
                user, desc, targetDate, isDone);
    }

}
```
---
src/main/java/com/in28minutes/springboot/web/service/LoginService.java Modified
```java
@Service
public class LoginService {

```
---
src/main/java/com/in28minutes/springboot/web/service/TodoService.java New

```java
package com.in28minutes.springboot.web.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.springboot.web.model.Todo;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int todoCount = 3;

    static {
        todos.add(new Todo(1, "in28Minutes", "Learn Spring MVC", new Date(),
                false));
        todos.add(new Todo(2, "in28Minutes", "Learn Struts", new Date(), false));
        todos.add(new Todo(3, "in28Minutes", "Learn Hibernate", new Date(),
                false));
    }

    public List<Todo> retrieveTodos(String user) {
        List<Todo> filteredTodos = new ArrayList<Todo>();
        for (Todo todo : todos) {
            if (todo.getUser().equals(user)) {
                filteredTodos.add(todo);
            }
        }
        return filteredTodos;
    }

    public void addTodo(String name, String desc, Date targetDate,
            boolean isDone) {
        todos.add(new Todo(++todoCount, name, desc, targetDate, isDone));
    }

    public void deleteTodo(int id) {
        Iterator<Todo> iterator = todos.iterator();
        while (iterator.hasNext()) {
            Todo todo = iterator.next();
            if (todo.getId() == id) {
                iterator.remove();
            }
        }
    }
}
```
---
src/main/webapp/WEB-INF/jsp/list-todos.jsp New

```
<html>

<head>
<title>First Web Application</title>
</head>

<body>
	Here are the list of your todos:
	${todos} 
	<BR/>
	Your Name is : ${name}
</body>

</html>
```
---
src/main/webapp/WEB-INF/jsp/welcome.jsp Modified
New Lines
```
	Welcome ${name}!! <a href="/list-todos">Click here</a> to manage your todo's.
```

## Step13.md

#### What we will do:
- Add Facility to add New Todo
- todo.jsp
- Importance of redirect:/list-todos

#### Files List

src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java
	
	@RequestMapping(value="/add-todo", method = RequestMethod.GET)
	public String showAddTodoPage(ModelMap model){
		return "todo";
	}

	@RequestMapping(value="/add-todo", method = RequestMethod.POST)
	public String addTodo(ModelMap model, @RequestParam String desc){
		service.addTodo((String) model.get("name"), desc, new Date(), false);
		return "redirect:/list-todos";
	}
```

---

src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
	Here are the list of ${name}'s todos:
	${todos}.
	<a href="/add-todo">Add a Todo</a> 
```

src/main/webapp/WEB-INF/jsp/todo.jsp New

```
<html>

<head>
<title>First Web Application</title>
</head>

<body>
ADD Todo Page for ${name}

<form method="post">
	Description : <input name="desc" type="text"/> 
	<input type="submit"/>	
</form>

</body>

</html>
```

## Step14.md

#### What we will do:
- Display Todos in a table using JSTL Tags
- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
- Add Dependency for jstl

#### Snippet
```       
       <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
        </dependency>
```

## Step15.md

#### What we will do:
- Add bootstrap to give basic formatting to the page : We use bootstrap classes container,table and table-striped.
- We will use webjars
 - Already auto configured by Spring Boot : o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]

#### Useful Snippets
```     
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>bootstrap</artifactId>
            <version>3.3.6</version>
        </dependency>
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>1.9.1</version>
        </dependency>
        
  		
  
		<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
	    <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	    		rel="stylesheet">

```

#### Files List

pom.xml Modified
New Lines
```

        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>bootstrap</artifactId>
            <version>3.3.6</version>
        </dependency>
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>1.9.1</version>
        </dependency>
        <dependency>
        	<groupId>org.apache.tomcat.embed</groupId>
			<artifactId>tomcat-embed-jasper</artifactId>
			<scope>provided</scope>
        </dependency>
        <dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>jstl</artifactId>
        </dependency>
```

src/main/resources/application.properties Modified
New Lines
```
logging.level.org.springframework.web=INFO
```

src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<title>Todo's for ${name}</title>
<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
	<div class="container">
		<table class="table table-striped">
			<caption>Your todos are</caption>
			<thead>
				<tr>
					<th>Description</th>
					<th>Target Date</th>
					<th>Is it Done?</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${todos}" var="todo">
					<tr>
						<td>${todo.desc}</td>
						<td>${todo.targetDate}</td>
						<td>${todo.done}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<div> <a class="button" href="/add-todo">Add a Todo</a></div>
		<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
		<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	</div>
```

## Step16.md

#### What we will do:
- Add functionality to delete a todo

#### Useful Snippets
```     
	<a type="button" class="btn btn-warning" 
		href="/delete-todo?id=${todo.id}">Delete</a>
```
#### Files List

src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified
New Lines
```
	@RequestMapping(value="/delete-todo", method = RequestMethod.GET)
	public String deleteTodo(@RequestParam int id){
		service.deleteTodo(id);
	}
```

---
src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
		<td><a type="button" class="btn btn-warning" href="/delete-todo?id=${todo.id}">Delete</a></td>
```
## Step17.md

#### What we will do:

In this short step:
- Format Add Todo Page
- Add Html5 Form Validations

#### Useful Snippets
```     
	<fieldset class="form-group">
		<label>Description</label>
		<input name="desc" type="text" class="form-control" required="required"/>
	</fieldset>

```

#### Files List

src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
Snippets
```
<td><a type="button" class="btn btn-warning"
	href="/delete-todo?id=${todo.id}">Delete</a></td>

<div>
	<a class="button" href="/add-todo">Add a Todo</a>
</div>

<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
```

src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Lines
```
<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">
	<div class="container">
		<form method="post">
			<fieldset class="form-group">
				<label>Description</label> 
				<input name="desc" type="text"
					class="form-control" required="required"/>
			</fieldset>
			<button type="submit" class="btn btn-success">Add</button>
		</form>
	</div>
	<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
	<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
```

## Step18.md

#### What we will do:
- Lets use a command bean for Todo
- Add Validations
- The JSR 303 and JSR 349 defines specification for the Bean Validation API (version 1.0 and 1.1, respectively), and Hibernate Validator is the reference implementation.
- org.hibernate:hibernate-validator

#### Useful Snippets
```     
		<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

		<form:form method="post" commandName="todo">
		<!-- use modelAttribute instead of commandName for Spring Boot Versions > 2.*
		<form:form method="post" modelAttribute="todo"> -->
			<fieldset class="form-group">
				<form:label path="desc">Description</form:label>
				<form:input path="desc" type="text" class="form-control" required="required"/>
			</fieldset>
		</form:form>

		@Size(min = 10, message = "Enter atleast 10 Characters.")
		
		@Valid Todo todo, BindingResult result

		if (result.hasErrors())
			return "todo";
		
		<form:errors path="desc" cssClass="text-warning" />
		
```
#### Files List

src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java

@Controller
@SessionAttributes("name")
public class TodoController {

	@Autowired
	TodoService service;

	@RequestMapping(value = "/list-todos", method = RequestMethod.GET)
	public String showTodos(ModelMap model) {
		String name = (String) model.get("name");
		model.put("todos", service.retrieveTodos(name));
		return "list-todos";
	}

	@RequestMapping(value = "/add-todo", method = RequestMethod.GET)
	public String showAddTodoPage(ModelMap model) {
		model.addAttribute("todo", new Todo(0, (String) model.get("name"), "Default Desc",
				new Date(), false));
		return "todo";
	}

	@RequestMapping(value = "/delete-todo", method = RequestMethod.GET)
	public String deleteTodo(@RequestParam int id) {
		service.deleteTodo(id);
		return "redirect:/list-todos";
	}

	@RequestMapping(value = "/add-todo", method = RequestMethod.POST)
	public String addTodo(ModelMap model, @Valid Todo todo, BindingResult result) {
		
		if(result.hasErrors()){
			return "todo";
		}
		
		service.addTodo((String) model.get("name"), todo.getDesc(), new Date(),
				false);
		return "redirect:/list-todos";
	}
}
```
---
src/main/java/com/in28minutes/springboot/web/model/Todo.java Modified
New Lines
```
    public Todo() {
    		super();
    }
    
    @Size(min=10, message="Enter at least 10 Characters...")
    private String desc;

```
---
src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Lines
```
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
		<form:form method="post" commandName="todo">

				<!-- use modelAttribute instead of commandName for Spring Boot Versions > 2.*
		<form:form method="post" modelAttribute="todo"> -->

				<form:label path="desc">Description</form:label> 
				<form:input path="desc" type="text"
				<form:errors path="desc" cssClass="text-warning"/>
		</form:form>
```

## Step19.md

#### What we will do:
- Add Update Functionality
- Lets Use the Same JSP as earlier.

#### Useful Snippets
```
	public Todo retrieveTodo(int id) {
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

	public void updateTodo(Todo todo) {
		todos.remove(todo);
		todos.add(todo);
	}
   
   todo.setUser("in28Minutes"); //TODO:Remove Hardcoding Later
   service.updateTodo(todo);
   
   <form:hidden path="id"/>  
```

#### Files List

src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java

	@RequestMapping(value = "/update-todo", method = RequestMethod.GET)
	public String showUpdateTodoPage(@RequestParam int id, ModelMap model) {
		Todo todo = service.retrieveTodo(id);
		model.put("todo", todo);
		return "todo";
	}

	@RequestMapping(value = "/update-todo", method = RequestMethod.POST)
	public String updateTodo(ModelMap model, @Valid Todo todo, BindingResult result) {

		if (result.hasErrors()) {
			return "todo";
		}
		
		todo.setUser((String) model.get("name"));
		
		service.updateTodo(todo);

		return "redirect:/list-todos";
	}

}
```
---
src/main/java/com/in28minutes/springboot/web/service/TodoService.java Modified

```java
    public List<Todo> retrieveTodos(String user) {
        List<Todo> filteredTodos = new ArrayList<Todo>();
        for (Todo todo : todos) {
            if (todo.getUser().equalsIgnoreCase(user)) {
                filteredTodos.add(todo);
            }
        }
        return filteredTodos;
    }
    
    public Todo retrieveTodo(int id) {
        for (Todo todo : todos) {
            if (todo.getId()==id) {
                return todo;
            }
        }
        return null;
    }

    public void updateTodo(Todo todo){
    		todos.remove(todo);
    		todos.add(todo);
    }
```
---
src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
		<td><a type="button" class="btn btn-success"
			href="/update-todo?id=${todo.id}">Update</a></td>
```
src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Lines
```
		
		<form:hidden path="id"/>
```

## Step20.md

#### What we will do:
- Make real use of the Target Date Field
- initBinder method

#### Useful Snippets
```
	<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
	<fmt:formatDate pattern="dd/MM/yyyy"
									value="${todo.targetDate}" />
									
	
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(
				dateFormat, false));
	}
	
	<dependency>
		<groupId>org.webjars</groupId>
		<artifactId>bootstrap-datepicker</artifactId>
		<version>1.0.1</version>
	</dependency>
	
	<script
		src="webjars/bootstrap-datepicker/1.0.1/js/bootstrap-datepicker.js"></script>

	<script>
		$('#targetDate').datepicker({
			format : 'dd/mm/yyyy'
		});
	</script>
		
```

#### Files List

pom.xml Modified
New Lines
```
	<dependency>
		<groupId>org.webjars</groupId>
		<artifactId>bootstrap-datepicker</artifactId>
		<version>1.0.1</version>
	</dependency>
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>bootstrap</artifactId>
        <version>3.3.6</version>
    </dependency>
    <dependency>
        <groupId>org.webjars</groupId>
        <artifactId>jquery</artifactId>
        <version>1.9.1</version>
    </dependency>
    
  		
```
src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		// Date - dd/MM/yyyy
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(
				dateFormat, false));
	}

	@RequestMapping(value = "/update-todo", method = RequestMethod.POST)
	public String updateTodo(ModelMap model, @Valid Todo todo,
			BindingResult result) {

		if (result.hasErrors()) {
			return "todo";
		}

		todo.setUser((String) model.get("name"));

		service.updateTodo(todo);

		return "redirect:/list-todos";
	}

	@RequestMapping(value = "/add-todo", method = RequestMethod.POST)
	public String addTodo(ModelMap model, @Valid Todo todo, BindingResult result) {

		if (result.hasErrors()) {
			return "todo";
		}

		service.addTodo((String) model.get("name"), todo.getDesc(), todo.getTargetDate(),
				false);
		return "redirect:/list-todos";
	}
```
---
src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
						<td><fmt:formatDate value="${todo.targetDate}" pattern="dd/MM/yyyy"/></td>
```

src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Snippets
```
<form:hidden path="id" />
<form:label path="desc">Description</form:label>
<form:input path="desc" type="text" class="form-control"
	required="required" />
<form:errors path="desc" cssClass="text-warning" />
<form:label path="targetDate">Target Date</form:label>
<form:input path="targetDate" type="text" class="form-control"
	required="required" />
<form:errors path="targetDate" cssClass="text-warning" />


<script
	src="webjars/bootstrap-datepicker/1.0.1/js/bootstrap-datepicker.js"></script>

<script>		
	$('#targetDate').datepicker({
		format : 'dd/mm/yyyy'
	});
</script>
```

## Step21.md

#### What we will do:
- Add a navigation bar
- Use JSP Fragments
- Exercise : Align the login & welcome pages.
- Exercise : Highlight the correct menu item.

#### Useful Snippets
```
<nav role="navigation" class="navbar navbar-default">
	<div class="">
		<a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
	</div>
	<div class="navbar-collapse">
		<ul class="nav navbar-nav">
			<li class="active"><a href="/login">Home</a></li>
			<li><a href="/list-todos">Todos</a></li>

		</ul>
	</div>
</nav>
```

#### Files List

src/main/webapp/WEB-INF/jsp/common/footer.jspf New

```
<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script
	src="webjars/bootstrap-datepicker/1.0.1/js/bootstrap-datepicker.js"></script>
<script>
	$('#targetDate').datepicker({
		format : 'dd/mm/yyyy'
	});
</script>

</body>
</html>
```
---

src/main/webapp/WEB-INF/jsp/common/header.jspf New

```
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>

<head>
<title>First Web Application</title>
<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">

</head>

<body>
```
---
src/main/webapp/WEB-INF/jsp/common/navigation.jspf New

```
	<nav role="navigation" class="navbar navbar-default">
	    <div class="">
	        <a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
	    </div>
	    <div class="navbar-collapse">
	        <ul class="nav navbar-nav">
	            <li class="active"><a href="/login">Home</a></li>
	            <li><a href="/list-todos">Todos</a></li>
	        </ul>
	    </div>
	</nav>
```
---
src/main/webapp/WEB-INF/jsp/list-todos.jsp Modified
New Lines
```
<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
<%@ include file="common/footer.jspf" %>
```

src/main/webapp/WEB-INF/jsp/login.jsp Modified
New Lines
```
<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
<div class="container">

<!--OLD CODE-->

</div>
<%@ include file="common/footer.jspf" %>
```

src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Lines
```
<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
<div class="container">
	<form:form method="post" commandName="todo">
			<!-- use modelAttribute instead of commandName for Spring Boot Versions > 2.*
		<form:form method="post" modelAttribute="todo"> -->
		<form:hidden path="id" />
		<fieldset class="form-group">
			<form:label path="desc">Description</form:label>
			<form:input path="desc" type="text" class="form-control"
				required="required" />
			<form:errors path="desc" cssClass="text-warning" />
		</fieldset>
		<fieldset class="form-group">
			<form:label path="targetDate">Target Date</form:label>
			<form:input path="targetDate" type="text" class="form-control"
				required="required" />
			<form:errors path="targetDate" cssClass="text-warning" />
		</fieldset>
		<button type="submit" class="btn btn-success">Add</button>
	</form:form>
</div>
<%@ include file="common/footer.jspf" %>
```
src/main/webapp/WEB-INF/jsp/welcome.jsp Modified
New Lines
```
<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<div class="container">
	Welcome ${name}!! <a href="/list-todos">Click here</a> to manage your
	todo's.
</div>
<%@ include file="common/footer.jspf"%>
```

## Step22.md

#### What we will do:
- Prepare for Using Spring Security
- Remove All the Login Related Functionality
- Make Welcome the default page - with some hardcoding to start with.
- Refactor getLoggedInUserName
- Update Home Page Link in navigation

#### Files List

src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Modified
New Lines
```
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String showLoginPage(ModelMap model) {
		model.put("name", "in28Minutes");
```
---
src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java
	@RequestMapping(value = "/list-todos", method = RequestMethod.GET)
	public String showTodos(ModelMap model) {
		String name = getLoggedInUserName(model);
		model.put("todos", service.retrieveTodos(name));
		return "list-todos";
	}

	private String getLoggedInUserName(ModelMap model) {
		return (String) model.get("name");
	}

```
---
src/main/webapp/WEB-INF/jsp/common/navigation.jspf Modified
New Lines
```
	            <li class="active"><a href="/">Home</a></li>
```
src/main/webapp/WEB-INF/jsp/login.jsp Deleted

## Step23.md

#### What we will do:
- Get Setup for Spring Security


#### Useful Snippets
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>

package com.in28minutes.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public void configureGlobalSecurity(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.inMemoryAuthentication().passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance()).withUser("in28Minutes").password("dummy")
				.roles("USER", "ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/login").permitAll()
				.antMatchers("/", "/*todo*/**").access("hasRole('USER')").and()
				.formLogin();
	}
}

```

Not Needed anymore with Spring Boot Auto Configuration
```
	   <filter>
	    		<filter-name>springSecurityFilterChain</filter-name>
	    		<filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
	   </filter>
	 
	   <filter-mapping>
	   		<filter-name>springSecurityFilterChain</filter-name>
	    		<url-pattern>/*</url-pattern>
	   </filter-mapping> 
```

#### Files List

pom.xml Modified
New Lines
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```
src/main/java/com/in28minutes/springboot/web/security/SecurityConfiguration.java New

```java
package com.in28minutes.springboot.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	//Create User - in28Minutes/dummy
	@Autowired
    public void configureGlobalSecurity(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance()).withUser("in28Minutes").password("dummy")
                .roles("USER", "ADMIN");
    }
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/login").permitAll()
                .antMatchers("/", "/*todo*/**").access("hasRole('USER')").and()
                .formLogin();
    }
}
```
---

## Step24.md

#### What we will do:
- Remove Hardcoding of User Name
- Remove LoginService
- Rename LoginController to WelcomeController
- Add Logout Functionality

#### Useful Snippets
```
	private String getLoggedInUserName(ModelMap model) {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();

		if (principal instanceof UserDetails)
			return ((UserDetails) principal).getUsername();

		return principal.toString();
	}

		<ul class="nav navbar-nav navbar-right">
			<li><a href="/logout">Logout</a></li>
		</ul>

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request,
			HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext()
				.getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/";
	}

```
## Step25.md

#### What we will do:
- Basic Exception Handling
- Exception Handling is a cross cutting concern
- Do not handle exceptions in Controllers or Services, if you cannot add value to them.
- Bit of refactoring on the controllers
- Whitelabel Error Page provided by default by Spring Boot
 - You can see a few details of the errors
- We can customize if we would want to
- @ControllerAdvice and Controller Specific Exception Handling
- Handling Errors thrown from Views

#### Useful Snippets
```
@Controller("error")
public class ExceptionController {

    private Log logger = LogFactory.getLog(ExceptionController.class);

    @ExceptionHandler(Exception.class)
    public ModelAndView handleError(HttpServletRequest req, Exception ex) {
        logger.error("Request: " + req.getRequestURL() + " raised " + ex);

        ModelAndView mav = new ModelAndView();
        mav.addObject("exception", ex);
        mav.addObject("url", req.getRequestURL());
        mav.setViewName("error");
        return mav;
    }
}

```

#### Files List

src/main/java/com/in28minutes/springboot/web/controller/ErrorController.java New

```java
package com.in28minutes.springboot.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@Controller("error")
public class ErrorController {
	
	@ExceptionHandler(Exception.class)
	public ModelAndView handleException
		(HttpServletRequest request, Exception ex){
		ModelAndView mv = new ModelAndView();

		mv.addObject("exception", ex.getLocalizedMessage());
		mv.addObject("url", request.getRequestURL());
		
		mv.setViewName("error");
		return mv;
	}

}
```
---
src/main/java/com/in28minutes/springboot/web/controller/LoginController.java Deleted

src/main/java/com/in28minutes/springboot/web/controller/LogoutController.java New

```java
package com.in28minutes.springboot.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LogoutController {

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request,
			HttpServletResponse response) {
		
		Authentication authentication = SecurityContextHolder.getContext()
				.getAuthentication();
		
		if (authentication != null) {
			new SecurityContextLogoutHandler().logout(request, response,
					authentication);
		}

		return "redirect:/";
	}
}
```
---
src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified

```java

	private String getLoggedInUserName(ModelMap model) {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		if (principal instanceof UserDetails) {
			return ((UserDetails) principal).getUsername();
		}
		
		return principal.toString();
	}

```
---
src/main/java/com/in28minutes/springboot/web/controller/WelcomeController.java New

```java
package com.in28minutes.springboot.web.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WelcomeController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String showWelcomePage(ModelMap model) {
		model.put("name", getLoggedinUserName());
		return "welcome";
	}

	private String getLoggedinUserName() {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		if (principal instanceof UserDetails) {
			return ((UserDetails) principal).getUsername();
		}
		
		return principal.toString();
	}

}
```
---
src/main/java/com/in28minutes/springboot/web/service/LoginService.java Deleted

src/main/webapp/WEB-INF/jsp/common/navigation.jspf Modified
New Lines
```
<nav role="navigation" class="navbar navbar-default">
	<div class="">
		<a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
	</div>
	<div class="navbar-collapse">
		<ul class="nav navbar-nav">
			<li class="active"><a href="/">Home</a></li>
			<li><a href="/list-todos">Todos</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li><a href="/logout">Logout</a></li>
		</ul>
	</div>
</nav>
```
src/main/webapp/WEB-INF/jsp/error.jsp New

```
<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<div class="container">
An exception occurred! Please contact Support!
</div>
<%@ include file="common/footer.jspf"%>
```
---
## Connecting Web Application with JPA

> Note : Ensure that you complete the introduction to JPA module before doing this section

- Step 26: Adding Dependencies for JPA and H2
- Step 27: Configuring H2 Console
- Step 28: Create Todo Entity and JPA Repository
- Step 29: Insert Todo using JPA Repository
- Step 30: Update, Delete and Retrieve Todos using JPA Repository
- Step 31: Data initialization with data.sql
- Step 32: Connecting JPA to other databases
- Step 33: Upgrading to Spring Boot 2 and Spring 5

## Step 26 to 32

### /pom.xml New

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.web</groupId>
	<artifactId>spring-boot-first-web-application-git</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-boot-first-web-application</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.3.RELEASE</version>
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
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		
		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>

		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>jstl</artifactId>
		</dependency>

		<dependency>
			<groupId>org.webjars</groupId>
			<artifactId>bootstrap</artifactId>
			<version>3.3.6</version>
		</dependency>
		
		<dependency>
			<groupId>org.webjars</groupId>
			<artifactId>bootstrap-datepicker</artifactId>
			<version>1.0.1</version>
		</dependency>
		
		<dependency>
			<groupId>org.webjars</groupId>
			<artifactId>jquery</artifactId>
			<version>1.9.1</version>
		</dependency>

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

### /src/main/java/com/in28minutes/springboot/web/SpringBootFirstWebApplication.java New

```java
package com.in28minutes.springboot.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.in28minutes.springboot.web")
public class SpringBootFirstWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootFirstWebApplication.class, args);
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/web/controller/ErrorController.java New

```java
package com.in28minutes.springboot.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@Controller("error")
public class ErrorController {
	
	@ExceptionHandler(Exception.class)
	public ModelAndView handleException
		(HttpServletRequest request, Exception ex){
		ModelAndView mv = new ModelAndView();

		mv.addObject("exception", ex.getLocalizedMessage());
		mv.addObject("url", request.getRequestURL());
		
		mv.setViewName("error");
		return mv;
	}

}
```
---

### /src/main/java/com/in28minutes/springboot/web/controller/LogoutController.java New

```java
package com.in28minutes.springboot.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LogoutController {

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request,
			HttpServletResponse response) {
		
		Authentication authentication = SecurityContextHolder.getContext()
				.getAuthentication();
		
		if (authentication != null) {
			new SecurityContextLogoutHandler().logout(request, response,
					authentication);
		}

		return "redirect:/";
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/web/controller/TodoController.java New

```java
package com.in28minutes.springboot.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.in28minutes.springboot.web.model.Todo;
import com.in28minutes.springboot.web.service.TodoRepository;

@Controller
public class TodoController {
	
	@Autowired
	TodoRepository repository;

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		// Date - dd/MM/yyyy
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(
				dateFormat, false));
	}

	@RequestMapping(value = "/list-todos", method = RequestMethod.GET)
	public String showTodos(ModelMap model) {
		String name = getLoggedInUserName(model);
		model.put("todos", repository.findByUser(name));
		//model.put("todos", service.retrieveTodos(name));
		return "list-todos";
	}

	private String getLoggedInUserName(ModelMap model) {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		if (principal instanceof UserDetails) {
			return ((UserDetails) principal).getUsername();
		}
		
		return principal.toString();
	}

	@RequestMapping(value = "/add-todo", method = RequestMethod.GET)
	public String showAddTodoPage(ModelMap model) {
		model.addAttribute("todo", new Todo(0, getLoggedInUserName(model),
				"Default Desc", new Date(), false));
		return "todo";
	}

	@RequestMapping(value = "/delete-todo", method = RequestMethod.GET)
	public String deleteTodo(@RequestParam int id) {

		//if(id==1)
			//throw new RuntimeException("Something went wrong");
		repository.delete(id);
		//service.deleteTodo(id);
		return "redirect:/list-todos";
	}

	@RequestMapping(value = "/update-todo", method = RequestMethod.GET)
	public String showUpdateTodoPage(@RequestParam int id, ModelMap model) {
		Todo todo = repository.findOne(id);
		//Todo todo = service.retrieveTodo(id);
		model.put("todo", todo);
		return "todo";
	}

	@RequestMapping(value = "/update-todo", method = RequestMethod.POST)
	public String updateTodo(ModelMap model, @Valid Todo todo,
			BindingResult result) {

		if (result.hasErrors()) {
			return "todo";
		}

		todo.setUser(getLoggedInUserName(model));

		repository.save(todo);
		//service.updateTodo(todo);

		return "redirect:/list-todos";
	}

	@RequestMapping(value = "/add-todo", method = RequestMethod.POST)
	public String addTodo(ModelMap model, @Valid Todo todo, BindingResult result) {

		if (result.hasErrors()) {
			return "todo";
		}

		todo.setUser(getLoggedInUserName(model));
		repository.save(todo);
		/*service.addTodo(getLoggedInUserName(model), todo.getDesc(), todo.getTargetDate(),
				false);*/
		return "redirect:/list-todos";
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/web/controller/WelcomeController.java New

```java
package com.in28minutes.springboot.web.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WelcomeController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String showWelcomePage(ModelMap model) {
		model.put("name", getLoggedinUserName());
		return "welcome";
	}

	private String getLoggedinUserName() {
		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		if (principal instanceof UserDetails) {
			return ((UserDetails) principal).getUsername();
		}
		
		return principal.toString();
	}

}
```
---

### /src/main/java/com/in28minutes/springboot/web/model/Todo.java New

```java
package com.in28minutes.springboot.web.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Todo {
    
	@Id
	@GeneratedValue
	private int id;
    
	private String user;
    
    @Size(min=10, message="Enter at least 10 Characters...")
    private String desc;

    private Date targetDate;
    private boolean isDone;

    public Todo() {
    		super();
    }
    
    public Todo(int id, String user, String desc, Date targetDate,
            boolean isDone) {
        super();
        this.id = id;
        this.user = user;
        this.desc = desc;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Todo other = (Todo) obj;
        if (id != other.id) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.format(
                "Todo [id=%s, user=%s, desc=%s, targetDate=%s, isDone=%s]", id,
                user, desc, targetDate, isDone);
    }

}
```
---

### /src/main/java/com/in28minutes/springboot/web/security/SecurityConfiguration.java New

```java
package com.in28minutes.springboot.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	//Create User - in28Minutes/dummy
	@Autowired
    public void configureGlobalSecurity(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.inMemoryAuthentication().passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance()).withUser("in28Minutes").password("dummy")
                .roles("USER", "ADMIN");
    }
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/login", "/h2-console/**").permitAll()
                .antMatchers("/", "/*todo*/**").access("hasRole('USER')").and()
                .formLogin();
        
        http.csrf().disable();
        http.headers().frameOptions().disable();
    }
}
```
---

### /src/main/java/com/in28minutes/springboot/web/service/TodoRepository.java New

```java
package com.in28minutes.springboot.web.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.in28minutes.springboot.web.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
	List<Todo> findByUser(String user);
	
	//service.retrieveTodos(name)

	//service.deleteTodo(id);
	//service.retrieveTodo(id)
	//service.updateTodo(todo)
	//service.addTodo(getLoggedInUserName(model), todo.getDesc(), todo.getTargetDate(),false);
}
```
---

### /src/main/java/com/in28minutes/springboot/web/service/TodoService.java New

```java
package com.in28minutes.springboot.web.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.springboot.web.model.Todo;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int todoCount = 3;

    static {
        todos.add(new Todo(1, "in28Minutes", "Learn Spring MVC", new Date(),
                false));
        todos.add(new Todo(2, "in28Minutes", "Learn Struts", new Date(), false));
        todos.add(new Todo(3, "in28Minutes", "Learn Hibernate", new Date(),
                false));
    }

    public List<Todo> retrieveTodos(String user) {
        List<Todo> filteredTodos = new ArrayList<Todo>();
        for (Todo todo : todos) {
            if (todo.getUser().equalsIgnoreCase(user)) {
                filteredTodos.add(todo);
            }
        }
        return filteredTodos;
    }
    
    public Todo retrieveTodo(int id) {
        for (Todo todo : todos) {
            if (todo.getId()==id) {
                return todo;
            }
        }
        return null;
    }

    public void updateTodo(Todo todo){
    		todos.remove(todo);
    		todos.add(todo);
    }

    public void addTodo(String name, String desc, Date targetDate,
            boolean isDone) {
        todos.add(new Todo(++todoCount, name, desc, targetDate, isDone));
    }

    public void deleteTodo(int id) {
        Iterator<Todo> iterator = todos.iterator();
        while (iterator.hasNext()) {
            Todo todo = iterator.next();
            if (todo.getId() == id) {
                iterator.remove();
            }
        }
    }
}
```
---

### /src/main/resources/application.properties New

```properties
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
logging.level.org.springframework.web=INFO

spring.jpa.show-sql=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default
spring.h2.console.enabled=true
```
---

### /src/main/resources/data.sql New

```
insert into TODO
values(10001, 'Learn Spring Boot', false, sysdate(), 'in28Minutes');
insert into TODO
values(10002, 'Learn Angular JS', false, sysdate(), 'in28Minutes');
insert into TODO
values(10003, 'Learn to Dance', false, sysdate(), 'in28Minutes');
```
---

### /src/main/webapp/WEB-INF/jsp/common/footer.jspf New

```
<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script
	src="webjars/bootstrap-datepicker/1.0.1/js/bootstrap-datepicker.js"></script>
<script>
	$('#targetDate').datepicker({
		format : 'dd/mm/yyyy'
	});
</script>

</body>
</html>
```
---

### /src/main/webapp/WEB-INF/jsp/common/header.jspf New

```
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>

<head>
<title>First Web Application</title>
<link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
	rel="stylesheet">

</head>

<body>
```
---

### /src/main/webapp/WEB-INF/jsp/common/navigation.jspf New

```

<nav role="navigation" class="navbar navbar-default">
	<div class="">
		<a href="http://www.in28minutes.com" class="navbar-brand">in28Minutes</a>
	</div>
	<div class="navbar-collapse">
		<ul class="nav navbar-nav">
			<li class="active"><a href="/">Home</a></li>
			<li><a href="/list-todos">Todos</a></li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li><a href="/logout">Logout</a></li>
		</ul>
	</div>
</nav>
```
---

### /src/main/webapp/WEB-INF/jsp/error.jsp New

```
<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<div class="container">
An exception occurred! Please contact Support!
</div>
<%@ include file="common/footer.jspf"%>
```
---

### /src/main/webapp/WEB-INF/jsp/list-todos.jsp New

```
<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
	
	<div class="container">
		<table class="table table-striped">
			<caption>Your todos are</caption>
			<thead>
				<tr>
					<th>Description</th>
					<th>Target Date</th>
					<th>Is it Done?</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${todos}" var="todo">
					<tr>
						<td>${todo.desc}</td>
						<td><fmt:formatDate value="${todo.targetDate}" pattern="dd/MM/yyyy"/></td>
						<td>${todo.done}</td>
						<td><a type="button" class="btn btn-success"
							href="/update-todo?id=${todo.id}">Update</a></td>
						<td><a type="button" class="btn btn-warning"
							href="/delete-todo?id=${todo.id}">Delete</a></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<div>
			<a class="button" href="/add-todo">Add a Todo</a>
		</div>
	</div>
<%@ include file="common/footer.jspf" %>
```
---

### /src/main/webapp/WEB-INF/jsp/todo.jsp New

```
<%@ include file="common/header.jspf" %>
<%@ include file="common/navigation.jspf" %>
<div class="container">
	<form:form method="post" commandName="todo">
			<!-- use modelAttribute instead of commandName for Spring Boot Versions > 2.*
		<form:form method="post" modelAttribute="todo"> -->
		<form:hidden path="id" />
		<fieldset class="form-group">
			<form:label path="desc">Description</form:label>
			<form:input path="desc" type="text" class="form-control"
				required="required" />
			<form:errors path="desc" cssClass="text-warning" />
		</fieldset>

		<fieldset class="form-group">
			<form:label path="targetDate">Target Date</form:label>
			<form:input path="targetDate" type="text" class="form-control"
				required="required" />
			<form:errors path="targetDate" cssClass="text-warning" />
		</fieldset>

		<button type="submit" class="btn btn-success">Add</button>
	</form:form>
</div>
<%@ include file="common/footer.jspf" %>
```
---

### /src/main/webapp/WEB-INF/jsp/welcome.jsp New

```
<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<div class="container">
	Welcome ${name}!! <a href="/list-todos">Click here</a> to manage your
	todo's.
</div>
<%@ include file="common/footer.jspf"%>
```
---

### /src/test/java/com/in28minutes/springboot/web/SpringBootFirstWebApplicationTests.java New

```java
package com.in28minutes.springboot.web;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootFirstWebApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```

## step33-Upgrade-To-Sprint-Boot-2-M3.md

### /pom.xml Modified
New Lines
```
		<version>2.3.1.RELEASE</version>
```
### /src/main/java/com/in28minutes/springboot/web/controller/TodoController.java Modified
New Lines
```
	repository.deleteById(id);
	Todo todo = repository.findById(id).get();
```
---

### /src/main/webapp/WEB-INF/jsp/todo.jsp Modified
New Lines
```
	<form:form method="post" modelAttribute="todo">
```

## Files List

### 02.Spring-Boot-Web-Application/notes.md


## Schema


```sql
create table todo 
(id integer not null, 
desc varchar(255), 
is_done boolean not null, 
target_date timestamp, 
user varchar(255), 
primary key (id))
```

### Data

```sql
INSERT INTO TODO
VALUES(10001, 'Learn Spring Boot', false, sysdate(),'in28Minutes')

INSERT INTO TODO
VALUES(10002, 'Learn RESTful Web Services', false, sysdate(),'in28Minutes')

INSERT INTO TODO
VALUES(10003, 'Learn SOAP Web Services', false, sysdate(),'in28Minutes')
```

### 02.Spring-Boot-Web-Application/README.md

Developing your first Spring Boot Web Application is fun.

## Installing and Setting Up MySQL

- Install MySQL https://dev.mysql.com/doc/en/installing.html
  - More details : http://www.mysqltutorial.org/install-mysql/
  - Trouble Shooting - https://dev.mysql.com/doc/refman/en/problems.html
- Startup the Server (as a service)
- Go to command prompt (or terminal)
   - Execute following commands to create a database and a user

```
mysql --user=user_name --password db_name
create database todo_example;
create user 'todouser'@'localhost' identified by 'YOUR_PASSWORD';
grant all on todo_example.* to 'todouser'@'localhost';
```

- Execute following sql queries to create the table and insert the data

Table
```sql
create table todo 
(id integer not null, 
desc varchar(255), 
is_done boolean not null, 
target_date timestamp, 
user varchar(255), 
primary key (id));
```

Data
```sql
INSERT INTO TODO
VALUES(10001, 'Learn Spring Boot', false, sysdate(),'in28Minutes');

INSERT INTO TODO
VALUES(10002, 'Learn RESTful Web Services', false, sysdate(),'in28Minutes');

INSERT INTO TODO
VALUES(10003, 'Learn SOAP Web Services', false, sysdate(),'in28Minutes');
```

## Code changes to connect to MySQL
- Add dependency to pom.xml (and remove H2 dependency)
```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```
- Configure application.properties

```properties
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=jdbc:mysql://localhost:3306/todo_example
spring.datasource.username=todouser
spring.datasource.password=YOUR_PASSWORD
```

- Restart and You are ready!

# 05.Spring-Boot-Advanced

You will be using Spring Boot and get introduced to REST Services.

You will learn about

- Basics of Auto Configuration and Spring Boot Magic
- Spring Boot Starter Projects
- Spring Initializr
- REST Service Content Negotiation with JSON and XML
- Embedded servlet containers : Tomcat, Jetty and Undertow
- Writing Unit and Integration tests using Spring Boot Starter Test
- Profiles and Dynamic Configuration with Spring Boot
- Spring Boot Data JPA
- Spring Boot Actuator
- Spring Boot Developer Tools and LiveReload


## Step01.md
#### What You Will Learn during this Step:
- Set up an Maven Project with Eclipse. 
 - Intellij Link : https://www.jetbrains.com/help/idea/2016.2/getting-started-with-maven.html#create_maven_project
- Copy Two Files pom.xml and Application.java
- Launch Your First Spring Boot Application.
- You will be introduced to Maven
  - Dependency Management

#### Cool thing to note!
- Without a lot of configuration, we are up and running with a web application
 - Refer https://github.com/in28minutes/SpringMvcStepByStep/blob/master/Step15.md to understand the sort of stuff - web.xml, dispatcher servlet configuration, maven dependency management and plugins - that are need to launch a typical web application without Spring Boot!

#### What You Will NOT Learn during this Step:
- Spring Boot does a lot of magic. This magic is called Auto Configuration. We will discuss about different terms related to Spring Boot - Starter Parent, Starter projects, Auto configuration - in depth during our first 10 steps.
- As far as this step is concerned, we will focus on getting up and running with Spring Boot. We will understand all the magic a little later. 
- We will copy a lot of code in this step - just to avoid typos

#### Exercises
- If you are comfortable with Spring, try to create a few dependencies and see if are automatically auto-wired!

#### Files List
pom.xml
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.in28minutes.springboot</groupId>
	<artifactId>first-springboot-project</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.0.RELEASE</version>
	</parent>

	<properties>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
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
src/main/java/com/in28minutes/springboot/Application.java
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

}
```
## Step02.md

#### What You Will Learn during this Step:
- Lets add a RestController with a dependency and see Spring Boot Magic live

#### Theory Break : Quick Spring and Spring MVC Primer
- What is dependency?
- @Component
- @Autowired
- @RestController

#### Useful Snippets and References
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}

@Component
class WelcomeService {

	public String retrieveWelcomeMessage() {
		//Complex Method
		return "Good Morning updated";
	}
}
```
#### Files List
src/main/java/com/in28minutes/service/WelcomeService.java New
```
package com.in28minutes.service;

import org.springframework.stereotype.Component;

@Component
public class WelcomeService {

	public String retrieveWelcomeMessage() {
		//Complex Method
		return "Good Morning updated";
	}
}
```
src/main/java/com/in28minutes/springboot/Application.java Modified
New Lines
```
import org.springframework.context.annotation.ComponentScan;
@ComponentScan("com.in28minutes")
```
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.in28minutes")
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

}
```
src/main/java/com/in28minutes/springboot/WelcomeController.java New
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.service.WelcomeService;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}
```
## Step03.md

#### What You Will Learn during this Step:
- First installment of revealing how magic happens with Spring Boot. As a Spring Boot developer, you need to understand what's happening beneath the hood of Spring Boot! 
- spring-boot-starter-web : starter for building applications with Spring MVC. Tomcat is default embedded container.
- We already added this starter in the first step! Now we will explore the features it provides
- We will enable logging in DEBUG mode to understand further

## spring-boot-starter-web
- Spring Boot Starter Web brings all dependencies needed to build normal and RESTful web applications. Look at the dependency tree. 
 - All the dependencies are added in because of spring-boot-starter-web
 - Also look at /META-INF/spring.provides inside the spring-boot-starter-web.jar
- Spring Boot Starter Web auto configures things needed to startup a web application. Look at the log
 - Mapping servlet: 'dispatcherServlet' to [/]
 - Mapped "{[/error]}" onto public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)
 - Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
 - Look at package org.springframework.boot.autoconfigure.web in spring-boot-autoconfigure-*.jar
- Go to url http://localhost:8080/some-non-existing-url

#### Useful Snippets
/src/main/resources/application.properties
```
logging.level.org.springframework: DEBUG
```

#### Files List
src/main/java/com/in28minutes/service/WelcomeService.java Deleted
src/main/java/com/in28minutes/springboot/Application.java Modified
New Lines
```
```
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

}
```
src/main/java/com/in28minutes/springboot/WelcomeController.java Modified
New Lines
```
```
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}
```
src/main/java/com/in28minutes/springboot/WelcomeService.java New
```
package com.in28minutes.springboot;

import org.springframework.stereotype.Component;

@Component
public class WelcomeService {

	public String retrieveWelcomeMessage() {
		//Complex Method
		return "Good Morning updated";
	}
}
```
src/main/resources/application.properties New
```
logging.level.org.springframework: DEBUG
```
## Step04.md

#### What You Will Learn during this Step:
- Understand Starter Parent
- How to override things defined in Starter Parent
- Other starter projects

#### Starter Parent
- Dependency Versions
- Java Versions
- Default Plugins

#### Other Starter Projects
- spring-boot-starter-web-services
- spring-boot-starter-test
- spring-boot-starter-jdbc
- spring-boot-starter-security
- spring-boot-starter-data-jpa
- spring-boot-starter-data-rest
- More at https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#using-boot-starter

#### Useful Snippets and References
First Snippet
```
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.4.0.RELEASE</version>
    </parent>
```
## Step05.md

#### What You Will Learn during this Step:
- Spring Boot vs Spring
- What Spring Boot is Not!

#### Spring Boot vs Spring

### Applications with Spring Framework New
- Over the next few years, a number of applications were developed with Spring Framework
 - Testable but
 - Lot of configuration (XML and Java)
  - Developing Spring Based application need configuration of a lot of beans!
  - Integration with other frameworks need configuration as well!
- In the last few years, focus is moving from monolith applications to microservices. We need to be able to start project quickly. Minimum or Zero start up time
 - Framework Setup
 - Deployment - Configurability
 - Logging, Transaction Management
 - Monitoring
 - Web Server Configuration
 
### Spring New
- Spring is just a dependency injection framework. Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.
- First half of the 2000 decade! EJBs
- EJBs were NOT easy to develop. 
 - Write a lot of xml and plumbing code to get EJBs running
 - Impossible to Unit Test
 - Alternative - Writing simple JDBC Code involved a lot of plumbing
- Spring framework started with aim of making Java EE development simpler. 
 - Goals
  - Make applications testable. i.e. easier to write unit tests
  - Reduce plumbing code of JDBC and JMS
  - Simple architecture. Minus EJB.
  - Integrates well with other popular frameworks.

### Spring Boot New
- Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can “just run”. 
- We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. 
- Example Problem Statements
 - You want to add Hibernate to your project. You dont worry about configuring a data source and a session factory. I will do if for you! 
- Goals
  - Provide quick start for projects with Spring.
  - Be opinionated but provide options.
  - Provide a range of non-functional features that are common to large classes of projects (e.g. embedded servers, security, metrics, health checks, externalized configuration).

###### What Spring Boot is NOT?
- It’s not an app or a web server
- Does not implement any specific framework - for example, JPA or JMS
- Does not generate code

pom.xml Deleted
src/main/java/com/in28minutes/springboot/Application.java Deleted
src/main/java/com/in28minutes/springboot/WelcomeController.java Deleted
src/main/java/com/in28minutes/springboot/WelcomeService.java Deleted
src/main/resources/application.properties Deleted
## Step06.md

#### What You Will Learn during this Step:
- We want to prepare for creating a Rest Service 
 - Survey
 - Question
 - SurveyService
- We use hard-coded data to get started

#### Files List
### Applications with Spring Framework Deleted
### Spring Deleted
### Spring Boot Deleted
pom.xml New
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.in28minutes.springboot</groupId>
	<artifactId>first-springboot-project</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.0.RELEASE</version>
	</parent>

	<properties>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
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
src/main/java/com/in28minutes/springboot/Application.java New
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

}
```
src/main/java/com/in28minutes/springboot/WelcomeController.java New
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}
```
src/main/java/com/in28minutes/springboot/WelcomeService.java New
```
package com.in28minutes.springboot;

import org.springframework.stereotype.Component;

@Component
public class WelcomeService {

	public String retrieveWelcomeMessage() {
		//Complex Method
		return "Good Morning updated";
	}
}
```
src/main/java/com/in28minutes/springboot/model/Question.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Question {
	private String id;
	private String description;
	private String correctAnswer;
	private List<String> options;

	// Needed by Caused by: com.fasterxml.jackson.databind.JsonMappingException:
	// Can not construct instance of com.in28minutes.springboot.model.Question:
	// no suitable constructor found, can not deserialize from Object value
	// (missing default constructor or creator, or perhaps need to add/enable
	// type information?)
	public Question() {

	}

	public Question(String id, String description, String correctAnswer,
			List<String> options) {
		super();
		this.id = id;
		this.description = description;
		this.correctAnswer = correctAnswer;
		this.options = options;
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

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public List<String> getOptions() {
		return options;
	}

	@Override
	public String toString() {
		return String
				.format("Question [id=%s, description=%s, correctAnswer=%s, options=%s]",
						id, description, correctAnswer, options);
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
		Question other = (Question) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
```
src/main/java/com/in28minutes/springboot/model/Survey.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Survey {
	private String id;
	private String title;
	private String description;
	private List<Question> questions;

	public Survey(String id, String title, String description,
			List<Question> questions) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.questions = questions;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	@Override
	public String toString() {
		return "Survey [id=" + id + ", title=" + title + ", description="
				+ description + ", questions=" + questions + "]";
	}

}
```
src/main/java/com/in28minutes/springboot/service/SurveyService.java New
```
package com.in28minutes.springboot.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.model.Survey;

@Component
public class SurveyService {
	private static List<Survey> surveys = new ArrayList<>();
	static {
		Question question1 = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question2 = new Question("Question2",
				"Most Populus Country in the World", "China", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question3 = new Question("Question3",
				"Highest GDP in the World", "United States", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question4 = new Question("Question4",
				"Second largest english speaking country", "India", Arrays
						.asList("India", "Russia", "United States", "China"));

		List<Question> questions = new ArrayList<>(Arrays.asList(question1,
				question2, question3, question4));

		Survey survey = new Survey("Survey1", "My Favorite Survey",
				"Description of the Survey", questions);

		surveys.add(survey);
	}

	public List<Survey> retrieveAllSurveys() {
		return surveys;
	}

	public Survey retrieveSurvey(String surveyId) {
		for (Survey survey : surveys) {
			if (survey.getId().equals(surveyId)) {
				return survey;
			}
		}
		return null;
	}

	public List<Question> retrieveQuestions(String surveyId) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		return survey.getQuestions();
	}

	public Question retrieveQuestion(String surveyId, String questionId) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		for (Question question : survey.getQuestions()) {
			if (question.getId().equals(questionId)) {
				return question;
			}
		}

		return null;
	}

	private SecureRandom random = new SecureRandom();

	public Question addQuestion(String surveyId, Question question) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		String randomId = new BigInteger(130, random).toString(32);
		question.setId(randomId);

		survey.getQuestions().add(question);

		return question;
	}
}
```
src/main/resources/application.properties New
```
logging.level.org.springframework: DEBUG
```
## Step07.md

#### What You Will Learn during this Step:
- Create a REST Service for Retrieving all questions for a survey
 - Autowire SurveyService
 - Create @GetMapping("/surveys/{surveyId}/questions")
 - Use @PathVariable String surveyId
- http://localhost:8080/surveys/Survey1/questions/
 - How does the Bean get converted to a JSON?
  - Auto Configuration : If Jackson jar is on the class path, message converters are auto created! (Search in log :Creating shared instance of singleton bean 'mappingJackson2HttpMessageConverter')

#### Some Theory
- What is REST?
- Architectural style for the web. REST specifies a set of constraints.
   - Client - Server : Server (service provider) should be different from a client (service consumer). 
     - Enables loose coupling and independent evolution of server and client as new technologies emerge. 
   - Each service should be stateless.
   - Each Resource has a resource identifier.
   - It should be possible to cache response.
   - Consumer of the service may not have a direct connection to the Service Provider. Response might be sent from a middle layer cache.
   - A resource can have multiple representations. Resource can modified through a message in any of the these representations.
   
#### Useful Snippets and References
- JSON View : https://jsonview.com/
First Snippet
```
@RestController
class SurveyController {
    @Autowired
    private SurveyService surveyService;

    @GetMapping("/surveys/{surveyId}/questions")
    public List<Question> retrieveQuestions(@PathVariable String surveyId) {
        return surveyService.retrieveQuestions(surveyId);
    }
}
```

#### Exercise
- Try to think about how the URI for retrieving the details of a specific question should be!

#### Files List
pom.xml Modified
New Lines
```
		
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
```
src/main/java/com/in28minutes/springboot/controller/SurveyController.java New
```
package com.in28minutes.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RestController
class SurveyController {
	@Autowired
	private SurveyService surveyService;

	@GetMapping("/surveys/{surveyId}/questions")
	public List<Question> retrieveQuestions(@PathVariable String surveyId) {
		return surveyService.retrieveQuestions(surveyId);
	}
}
```
## Step08.md

#### What You Will Learn during this Step:
- Adding the second method to rest service to retrieve a specific question
- This will be a very short step
- http://localhost:8080/surveys/Survey1/questions/Question1
- Different Request Methods
  - GET - Retrieve details of a resource
  - POST - Create a new resource
  - PUT	- Update an existing resource
  - PATCH - Update part of a resource
  - DELETE - Delete a resource

#### Useful Snippets and References
First Snippet
```
    @GetMapping(path = "/surveys/{surveyId}/questions/{questionId}")
    public Question retrieveQuestion(@PathVariable String surveyId,
            @PathVariable String questionId) {
        return surveyService.retrieveQuestion(surveyId, questionId);
    }

```

#### Exercises
- Write the method to retrieve all surveys! 

#### Files List
src/main/java/com/in28minutes/springboot/controller/SurveyController.java Modified
New Lines
```
	// GET "/surveys/{surveyId}/questions/{questionId}"
	@GetMapping("/surveys/{surveyId}/questions/{questionId}")
	public Question retrieveDetailsForQuestion(@PathVariable String surveyId,
			@PathVariable String questionId) {
		return surveyService.retrieveQuestion(surveyId, questionId);
```
```
package com.in28minutes.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RestController
class SurveyController {
	@Autowired
	private SurveyService surveyService;

	@GetMapping("/surveys/{surveyId}/questions")
	public List<Question> retrieveQuestions(@PathVariable String surveyId) {
		return surveyService.retrieveQuestions(surveyId);
	}

	// GET "/surveys/{surveyId}/questions/{questionId}"
	@GetMapping("/surveys/{surveyId}/questions/{questionId}")
	public Question retrieveDetailsForQuestion(@PathVariable String surveyId,
			@PathVariable String questionId) {
		return surveyService.retrieveQuestion(surveyId, questionId);
	}

}
```
## Step09.md

#### What You Will Learn during this Step:
- I hate the fact that I've to stop and start the server each time. Can somebody save me?
 - Yeah. Spring Boot Developer Tools
  - By default, any entry on the classpath that points to a folder  will be monitored for changes.
  - These will not trigger restart - /META-INF/maven, /META-INF/resources ,/resources ,/static ,/public or /templates 
  - Folders can be configured : spring.devtools.restart.exclude=static/**,public/** 
  - Additional Paths : spring.devtools.restart.additional-paths
  - LiveReload http://livereload.com/extensions/
   - Technology in progress!! So, expect a few problems!
- Programming Tip 
 - Become an expert at your IDE - https://www.youtube.com/watch?v=dN9GYsG1v_c

#### Useful Snippets and References
First Snippet
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
```

#### Exercises
- Make changes and see if they reflect immediately

## Step10.md

#### What You Will Learn during this Step:
- Create a REST Service to add a new question to survey
 - @PostMapping("/surveys/{surveyId}/questions")
 - @RequestBody Question question
 - What should be Response Status for create?
 - ResponseEntity.created(location).build()
 - ResponseEntity.noContent().build()
 - Using Postman : https://www.getpostman.com
 - URL to POST to - http://localhost:8080/surveys/Survey1/questions

#### Useful Snippets and References

Sample Body for POST Request
```
{"description":"Second Most Populous Country in the World","correctAnswer":"India","options":["India","Russia","United States","China"]}
```

First Snippet
```
    @PostMapping("/surveys/{surveyId}/questions")
    ResponseEntity<?> add(@PathVariable String surveyId,
            @RequestBody Question question) {

        Question createdTodo = surveyService.addQuestion(surveyId, question);

        if (createdTodo == null) {
            return ResponseEntity.noContent().build();
        }

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(location).build();

    }
```

#### Exercises
- Create more REST services of your choice

#### Files List
src/main/java/com/in28minutes/springboot/controller/SurveyController.java Modified
New Lines
```
import java.net.URI;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
	// /surveys/{surveyId}/questions
	@PostMapping("/surveys/{surveyId}/questions")
	public ResponseEntity<Void> addQuestionToSurvey(
			@PathVariable String surveyId, @RequestBody Question newQuestion) {
		Question question = surveyService.addQuestion(surveyId, newQuestion);
		if (question == null)
			return ResponseEntity.noContent().build();
		// Success - URI of the new resource in Response Header
		// Status - created
		// URI -> /surveys/{surveyId}/questions/{questionId}
		// question.getQuestionId()
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(question.getId()).toUri();
		// Status
		return ResponseEntity.created(location).build();
```
```
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

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RestController
class SurveyController {
	@Autowired
	private SurveyService surveyService;

	@GetMapping("/surveys/{surveyId}/questions")
	public List<Question> retrieveQuestions(@PathVariable String surveyId) {
		return surveyService.retrieveQuestions(surveyId);
	}

	// GET "/surveys/{surveyId}/questions/{questionId}"
	@GetMapping("/surveys/{surveyId}/questions/{questionId}")
	public Question retrieveDetailsForQuestion(@PathVariable String surveyId,
			@PathVariable String questionId) {
		return surveyService.retrieveQuestion(surveyId, questionId);
	}

	// /surveys/{surveyId}/questions
	@PostMapping("/surveys/{surveyId}/questions")
	public ResponseEntity<Void> addQuestionToSurvey(
			@PathVariable String surveyId, @RequestBody Question newQuestion) {

		Question question = surveyService.addQuestion(surveyId, newQuestion);

		if (question == null)
			return ResponseEntity.noContent().build();

		// Success - URI of the new resource in Response Header
		// Status - created
		// URI -> /surveys/{surveyId}/questions/{questionId}
		// question.getQuestionId()
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(question.getId()).toUri();

		// Status
		return ResponseEntity.created(location).build();
	}

}
```

## Step11.md

#### What You Will Learn during this Step:
- Understand Content Negotiation
 - Accept:application/xml
- Deliver XML Responses from the REST Services
- http://localhost:8080/surveys/Survey1/questions/

#### Useful Snippets and References
First Snippet
```
        <dependency>
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-xml</artifactId>
        </dependency>

```
Second Snippet
```
<List>
    <item>
        <id>Question1</id>
        <description>Largest Country in the World</description>
        <correctAnswer>Russia</correctAnswer>
        <options>
            <options>India</options>
            <options>Russia</options>
            <options>United States</options>
            <options>China</options>
        </options>
    </item>
    <item>
        <id>Question2</id>
        <description>Most Populus Country in the World</description>
        <correctAnswer>China</correctAnswer>
        <options>
            <options>India</options>
            <options>Russia</options>
            <options>United States</options>
            <options>China</options>
        </options>
    </item>
    <item>
        <id>Question3</id>
        <description>Highest GDP in the World</description>
        <correctAnswer>United States</correctAnswer>
        <options>
            <options>India</options>
            <options>Russia</options>
            <options>United States</options>
            <options>China</options>
        </options>
    </item>
    <item>
        <id>Question4</id>
        <description>Second largest english speaking country</description>
        <correctAnswer>India</correctAnswer>
        <options>
            <options>India</options>
            <options>Russia</options>
            <options>United States</options>
            <options>China</options>
        </options>
    </item>
</List>
```



#### Exercises
- Execute other services using xml and see what happens!
## Step12.md

#### What You Will Learn during this Step:
- Spring Initializr
- https://start.spring.io
- Create a few projects!

#### Exercises
- Create more projects with Spring Initializr and play around with it!

## Step13.md

#### What You Will Learn during this Step:
- Spring Boot Actuator
 - /env, /metrics, /trace, /dump, /shutdown, /beans, / autoconfig, /configprops, /mappings 
- HAL Browser
 - http://localhost:8080/actuator/
- Execute individual REST Services for each of above
- Programming Tip
 - Use static code analysis - https://www.youtube.com/watch?v=rB_BaftN3nE

#### Useful Snippets and References
First Snippet
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-rest-hal-browser</artifactId>
        </dependency>

```

#### Files List
pom.xml Modified
New Lines
```
			<artifactId>spring-boot-devtools</artifactId>
			<optional>true</optional>
			<artifactId>spring-boot-starter-actuator</artifactId>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-rest-hal-browser</artifactId>
```

## Step14.md

#### What You Will Learn during this Step:
- Embedded servlet containers
 - Default Tomcat
 - We did not install Tomcat. Did we? Magic is done by Spring Boot!
 - Switching to Jetty or Undertow
- Configuration
 - server.port
- Programming Tip
 - Always review code : https://www.youtube.com/watch?v=hVJGu0xdXII

#### Useful Snippets and References
First Snippet
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

#### Exercises
- Find out from documentation (https://docs.spring.io/spring-boot/docs/current/reference/html/howto-embedded-servlet-containers.html) how to switch to undertow!

#### Files List
pom.xml Modified
New Lines
```
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
			</exclusions>
			<artifactId>spring-boot-starter-jetty</artifactId>
```

## Step15.md

#### What You Will Learn during this Step:
- Using Dynamic Configuration in your application
- Customize Welcome Message
- Different ways of configuration
 - --welcome.message="SomethingElse" in Program Arguments
 - --spring.config.location=classpath:/default.properties
 - We will learn about profiles in next step
- Using Placeholders
- YAML

#### Snippets
First Snippet
```
logging:
  level:
      org.springframework: DEBUG
app:
   name: In28Minutes
   description: ${app.name} is your first Spring Boot application
welcome:
    message: Welcome to your first Spring Boot app!
```

Second Snippet
```
@Value("${welcome.message}")
```

#### Files List
src/main/java/com/in28minutes/springboot/WelcomeService.java Modified
New Lines
```
import org.springframework.beans.factory.annotation.Value;
//Spring to manage this bean and create an instance of this
	@Value("${welcome.message}")
	private String welcomeMessage;
		return welcomeMessage;
```
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

//Spring to manage this bean and create an instance of this
@Component
public class WelcomeService {

	@Value("${welcome.message}")
	private String welcomeMessage;

	public String retrieveWelcomeMessage() {
		//Complex Method
		return welcomeMessage;
	}
}
```
src/main/resources/application.properties Modified
New Lines
```
logging.level.org.springframework.web.servlet: DEBUG
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}
```
src/main/resources/application.yaml New
```
logging:
 level:
   org.springframework: INFO
   org.springframework.web.servlet: DEBUG
```

## Step16.md

#### What You Will Learn during this Step:
- Understand Basics of Profiles
- Setting a profile
 - Using -Dspring.profiles.active=prod in VM Arguments
 - spring.profiles.active=prod 
- Using a profile
 - application-{profile-name}.properties
 - @Profile("dev") on a bean
- Usage
 - Configure Resources - Databases, Queues, External Services
 
#### Files List
src/main/java/com/in28minutes/springboot/Application.java Modified
New Lines
```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
	@Profile("prod")
	@Bean
	public String dummy() {
		return "something";
```
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

	@Profile("prod")
	@Bean
	public String dummy() {
		return "something";
	}
}
```
src/main/resources/application-dev.properties New
```
logging.level.org.springframework: TRACE
```
src/main/resources/application-prod.properties New
```
logging.level.org.springframework: INFO
```
src/main/resources/application.properties Modified
New Lines
```
spring.profiles.active=prod

 
```
src/main/resources/application.yaml Deleted

## Step17.md

#### What You Will Learn during this Step:
- Even better configuration management than @Value
- Type-safe Configuration Properties
- http://localhost:8080/dynamic-configuration
- Also look at http://localhost:8080/actuator/#http://localhost:8080/configprops

#### Useful Snippets and References
First Snippet
```
package com.in28minutes.springboot.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
    private boolean value;
    private String message;
    private int number;

    public boolean isValue() {
        return value;
    }

    public void setValue(boolean value) {
        this.value = value;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

}

```
Second Snippet
```
        @Autowired
        private BasicConfiguration configuration;

        @RequestMapping("/dynamic-configuration")
        public Map dynamicConfiguration() {
            // Not the best practice to use a map to store differnt types!
            Map map = new HashMap();
            map.put("message", configuration.getMessage());
            map.put("number", configuration.getNumber());
            map.put("key", configuration.isValue());
            return map;
        }

```
Third Snippet
```
basic.value: true
basic.message: Dynamic Message
basic.number: 100
```
Fourth Snippet
```
basic: 
   value: true
   message: Dynamic Message YAML
   number: 100
```

#### Exercises

Understand Type Safety

```
***************************
APPLICATION FAILED TO START
***************************

Description:

Binding to target com.in28minutes.springboot.configuration.BasicConfiguration@391b8545 failed:

    Property: basic.number
    Value: ABC
    Reason: Failed to convert property value of type [java.lang.String] to required type [int] for property 'number'; nested exception is org.springframework.core.convert.ConverterNotFoundException: No converter found capable of converting from type [java.lang.String] to type [int]


Action:

Update your application's configuration

```

#### Files List
src/main/java/com/in28minutes/springboot/WelcomeController.java Modified
New Lines

```
import java.util.HashMap;
import java.util.Map;
import com.in28minutes.springboot.configuration.BasicConfiguration;
	private BasicConfiguration configuration;
	@RequestMapping("/dynamic-configuration")
	public Map dynamicConfiguration() {
		Map map = new HashMap();
		map.put("message", configuration.getMessage());
		map.put("number", configuration.getNumber());
		map.put("value", configuration.isValue());
		return map;
```

```
package com.in28minutes.springboot;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.configuration.BasicConfiguration;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@Autowired
	private BasicConfiguration configuration;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}

	@RequestMapping("/dynamic-configuration")
	public Map dynamicConfiguration() {
		Map map = new HashMap();
		map.put("message", configuration.getMessage());
		map.put("number", configuration.getNumber());
		map.put("value", configuration.isValue());

		return map;
	}

}
```
src/main/java/com/in28minutes/springboot/configuration/BasicConfiguration.java New
```
package com.in28minutes.springboot.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
	private boolean value;
	private String message;
	private int number;

	public boolean isValue() {
		return value;
	}

	public void setValue(boolean value) {
		this.value = value;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}
}
```
src/main/resources/application.properties Modified
New Lines
```
basic.value=true
basic.message=Welcome to in28minutes
basic.number=200
```
## Step18.md

#### What You Will Learn during this Step:
- Let's switch back to tomcat first!
- Get introduced to Spring Data JPA
- Create a very simple example with Spring Data JPA
- Use CommandLineRunner!

#### Some Notes
- Useful Properties
 - spring.datasource.driver-class-name=com.mysql.jdbc.Driver
 - spring.datasource.url=jdbc:mysql://localhost:3306/test 
 - spring.datasource.username=root
 - spring.datasource.password=admin
 - spring.datasource.initialize=true 
 - spring.jpa.hibernate.ddl-auto=update
 - spring.jpa.show-sql=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default

#### Useful Snippets and References
First Snippet - Add H2 Later after showing the error
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
        </dependency>

```
Second Snippet
```
package com.in28minutes.springboot.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;// Not perfect!! Should be a proper object!
    private String role;// Not perfect!! An enum should be a better choice!

    protected User() {
    }

    public User(String name, String role) {
        super();
        this.name = name;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return String.format("User [id=%s, name=%s, role=%s]", id, name, role);
    }

}

```
Third Snippet
```
package com.in28minutes.springboot.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory
            .getLogger(UserCommandLineRunner.class);

    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) {
        // save a couple of customers
        repository.save(new User("Ranga", "Admin"));
        repository.save(new User("Ravi", "User"));
        repository.save(new User("Satish", "Admin"));
        repository.save(new User("Raghu", "User"));

        log.info("-------------------------------");
        log.info("Finding all users");
        log.info("-------------------------------");
        for (User user : repository.findAll()) {
            log.info(user.toString());
        }

    }

}

```
Fourth Snippet
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
```

#### Exercises
- Look at other methods provided by the UserRepository

#### Files List
pom.xml Modified
New Lines
```
			<artifactId>spring-boot-starter-data-jpa</artifactId>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
```
src/main/java/com/in28minutes/springboot/jpa/User.java New
```
package com.in28minutes.springboot.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String role;

	protected User() {
	}

	public User(String name, String role) {
		super();
		this.name = name;
		this.role = role;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getRole() {
		return role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", role=" + role + "]";
	}

}
```
src/main/java/com/in28minutes/springboot/jpa/UserCommandLineRunner.java New
```
package com.in28minutes.springboot.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

	private static final Logger log = LoggerFactory
			.getLogger(UserCommandLineRunner.class);

	@Autowired
	private UserRepository repository;

	@Override
	public void run(String... args) throws Exception {

		repository.save(new User("Ranga", "Admin"));
		repository.save(new User("Ravi", "User"));
		repository.save(new User("Satish", "Admin"));
		repository.save(new User("Raghu", "User"));

		for (User user : repository.findAll()) {
			log.info(user.toString());
		}

		log.info("Admin users are.....");
		log.info("____________________");
		for (User user : repository.findByRole("Admin")) {
			log.info(user.toString());
		}

	}

}
```
src/main/java/com/in28minutes/springboot/jpa/UserRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
```

## Step19.md

#### What You Will Learn during this Step:
- Look at H2 Console : http://localhost:8080/h2-console
 - Use db url jdbc:h2:mem:testdb
- Add findByRole method 

#### Some Notes
- Useful Properties
 - spring.datasource.driver-class-name=com.mysql.jdbc.Driver
 - spring.datasource.url=jdbc:mysql://localhost:3306/test 
 - spring.datasource.username=root
 - spring.datasource.password=admin
 - spring.datasource.initialize=true 
 - spring.jpa.hibernate.ddl-auto=update
 - spring.jpa.show-sql=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default

#### Useful Snippets and References

First Snippet
```

        log.info("-------------------------------");
        log.info("Finding user with id 1");
        log.info("-------------------------------");
        User user = repository.findOne(1L);
        log.info(user.toString());

        log.info("-------------------------------");
        log.info("Finding all Admins");
        log.info("-------------------------------");
        for (User admin : repository.findByRole("Admin")) {
            log.info(admin.toString());
            // Do something...
        }

```
Second Snippet
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findByRole(String description);
}
```

#### Files List
src/main/java/com/in28minutes/springboot/jpa/UserRepository.java Modified
New Lines
```
	List<User> findByRole(String role);
```
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findByRole(String role);
}
```

## Step20.md

#### What You Will Learn during this Step:
- Introduction to Spring Data Rest
 - Hit http://localhost:8080/users in POSTMAN
 - http://localhost:8080/users/1
 - http://localhost:8080/users/?size=4
 - http://localhost:8080/users/?sort=name,desc
 - @Param("role")
 - http://localhost:8080/users/search/findByRole?role=Admin
- Good for quick prototype! Be cautious about using this in Big applications!

#### Useful Snippets and References
First Snippet
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-rest</artifactId>
        </dependency>

```
Second Snippet
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRestRepository extends
PagingAndSortingRepository<User, Long> {
    List<User> findByRole(@Param("role") String role);
}
```

Third Snippet : POST to http://localhost:8080/users
```
HEADER
Content-Type:application/json

BODY
{
  "name": "Raja",
  "role": "Admin"
}
```
Fourth Snippet : POST to http://localhost:8080/users/5
```
HEADER
Content-Type:application/json

BODY
{
  "name": "Raja-Updated",
  "role": "Admin"
}
```
#### Files List
pom.xml Modified
New Lines
```
			<artifactId>spring-boot-starter-data-rest</artifactId>
```
src/main/java/com/in28minutes/springboot/jpa/UserRestRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface UserRestRepository extends
		PagingAndSortingRepository<User, Long> {
	List<User> findByRole(@Param("role") String role);
}
```
## Step21.md

### /pom.xml New
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.in28minutes</groupId>
    <artifactId>springboot-for-beginners-example</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>Your First Spring Boot Example</name>
    <packaging>jar</packaging>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.4.0.RELEASE</version>
    </parent>

    <dependencies>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-rest</artifactId>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-xml</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-rest-hal-browser</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

    </dependencies>


    <properties>
        <java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
    </properties>

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
### /src/main/java/com/in28minutes/springboot/Application.java New
```
package com.in28minutes.springboot;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.configuration.BasicConfiguration;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {

        ApplicationContext ctx = SpringApplication.run(Application.class, args);
    }

    @RestController
    class SomeBean {

        @Autowired
        private SomeDependency someDependency;

        @Autowired
        private BasicConfiguration configuration;

        @RequestMapping("/")
        public String index() {
            return someDependency.getSomething();
        }

        @RequestMapping("/dynamic-configuration")
        public Map dynamicConfiguration() {
            // Not the best practice to use a map to store differnt types!
            Map map = new HashMap();
            map.put("message", configuration.getMessage());
            map.put("number", configuration.getNumber());
            map.put("key", configuration.isValue());
            return map;
        }

    }

    @Component
    class SomeDependency {

        @Value("${welcome.message}")
        private String welcomeMessage;

        public String getSomething() {
            return welcomeMessage;
        }

    }

}
```
### /src/main/java/com/in28minutes/springboot/configuration/BasicConfiguration.java New
```
package com.in28minutes.springboot.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
    private boolean value;
    private String message;
    private int number;

    public boolean isValue() {
        return value;
    }

    public void setValue(boolean value) {
        this.value = value;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

}
```
### /src/main/java/com/in28minutes/springboot/controller/SurveyController.java New
```
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

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RestController
class SurveyController {
    @Autowired
    private SurveyService surveyService;

    @GetMapping("/surveys/{surveyId}/questions")
    public List<Question> retrieveQuestions(@PathVariable String surveyId) {
        return surveyService.retrieveQuestions(surveyId);
    }

    @GetMapping(path = "/surveys/{surveyId}/questions/{questionId}")
    public Question retrieveQuestion(@PathVariable String surveyId,
            @PathVariable String questionId) {
        return surveyService.retrieveQuestion(surveyId, questionId);
    }

    @PostMapping("/surveys/{surveyId}/questions")
    ResponseEntity<?> add(@PathVariable String surveyId,
            @RequestBody Question question) {

        Question createdTodo = surveyService.addQuestion(surveyId, question);

        if (createdTodo == null) {
            return ResponseEntity.noContent().build();
        }

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(location).build();

    }

}
```
### /src/main/java/com/in28minutes/springboot/jpa/User.java New
```
package com.in28minutes.springboot.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;// Not perfect!! Should be a proper object!
    private String role;// Not perfect!! An enum should be a better choice!

    protected User() {
    }

    public User(String name, String role) {
        super();
        this.name = name;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return String.format("User [id=%s, name=%s, role=%s]", id, name, role);
    }

}
```
### /src/main/java/com/in28minutes/springboot/jpa/UserCommandLineRunner.java New
```
package com.in28minutes.springboot.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory
            .getLogger(UserCommandLineRunner.class);

    @Autowired
    private UserRepository repository;

    @Override
    public void run(String... args) {
        // save a couple of customers
        repository.save(new User("Ranga", "Admin"));
        repository.save(new User("Ravi", "User"));
        repository.save(new User("Satish", "Admin"));
        repository.save(new User("Raghu", "User"));

        log.info("-------------------------------");
        log.info("Finding all users");
        log.info("-------------------------------");
        for (User user : repository.findAll()) {
            log.info(user.toString());
        }

        log.info("-------------------------------");
        log.info("Finding user with id 1");
        log.info("-------------------------------");
        User user = repository.findOne(1L);
        log.info(user.toString());

        log.info("-------------------------------");
        log.info("Finding all Admins");
        log.info("-------------------------------");
        for (User admin : repository.findByRole("Admin")) {
            log.info(admin.toString());
            // Do something...
        }
    }

}
```
### /src/main/java/com/in28minutes/springboot/jpa/UserRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findByRole(String description);
}
```
### /src/main/java/com/in28minutes/springboot/jpa/UserRestRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRestRepository extends
PagingAndSortingRepository<User, Long> {
    List<User> findByRole(@Param("role") String role);
}
```
### /src/main/java/com/in28minutes/springboot/model/Question.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Question {
    private String id;
    private String description;
    private String correctAnswer;
    private List<String> options;

    // Needed by Caused by: com.fasterxml.jackson.databind.JsonMappingException:
    // Can not construct instance of com.in28minutes.springboot.model.Question:
    // no suitable constructor found, can not deserialize from Object value
    // (missing default constructor or creator, or perhaps need to add/enable
    // type information?)
    public Question() {

    }

    public Question(String id, String description, String correctAnswer,
            List<String> options) {
        super();
        this.id = id;
        this.description = description;
        this.correctAnswer = correctAnswer;
        this.options = options;
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

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public List<String> getOptions() {
        return options;
    }

    @Override
    public String toString() {
        return String
                .format("Question [id=%s, description=%s, correctAnswer=%s, options=%s]",
                        id, description, correctAnswer, options);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (id == null ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Question other = (Question) obj;
        if (id == null) {
            if (other.id != null) {
                return false;
            }
        } else if (!id.equals(other.id)) {
            return false;
        }
        return true;
    }

}
```
### /src/main/java/com/in28minutes/springboot/model/Survey.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Survey {
    private String id;
    private String title;
    private String description;
    private List<Question> questions;

    public Survey(String id, String title, String description,
            List<Question> questions) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.questions = questions;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    @Override
    public String toString() {
        return String.format(
                "Survey [id=%s, title=%s, description=%s, questions=%s]", id,
                title, description, questions);
    }

}
```
### /src/main/java/com/in28minutes/springboot/service/SurveyService.java New
```
package com.in28minutes.springboot.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.model.Survey;

@Component
public class SurveyService {
    private static List<Survey> surveys = new ArrayList<>();
    static {
        Question question1 = new Question("Question1",
                "Largest Country in the World", "Russia", Arrays.asList(
                        "India", "Russia", "United States", "China"));
        Question question2 = new Question("Question2",
                "Most Populus Country in the World", "China", Arrays.asList(
                        "India", "Russia", "United States", "China"));
        Question question3 = new Question("Question3",
                "Highest GDP in the World", "United States", Arrays.asList(
                        "India", "Russia", "United States", "China"));
        Question question4 = new Question("Question4",
                "Second largest english speaking country", "India",
                Arrays.asList("India", "Russia", "United States", "China"));

        List<Question> questions = new ArrayList<>(Arrays.asList(question1,
                question2, question3, question4));

        Survey survey = new Survey("Survey1", "My Favorite Survey",
                "Description of the Survey", questions);

        surveys.add(survey);
    }

    public List<Survey> retrieveAllSurveys() {
        return surveys;
    }

    public Survey retrieveSurvey(String surveyId) {
        for (Survey survey : surveys) {
            if (survey.getId().equals(surveyId)) {
                return survey;
            }
        }
        return null;
    }

    public List<Question> retrieveQuestions(String surveyId) {
        Survey survey = retrieveSurvey(surveyId);

        if (survey == null) {
            return null;
        }

        return survey.getQuestions();
    }

    public Question retrieveQuestion(String surveyId, String questionId) {
        Survey survey = retrieveSurvey(surveyId);

        if (survey == null) {
            return null;
        }

        for (Question question : survey.getQuestions()) {
            if (question.getId().equals(questionId)) {
                return question;
            }
        }

        return null;
    }

    private SecureRandom random = new SecureRandom();

    public Question addQuestion(String surveyId, Question question) {
        Survey survey = retrieveSurvey(surveyId);

        if (survey == null) {
            return null;
        }

        String randomId = new BigInteger(130, random).toString(32);
        question.setId(randomId);

        survey.getQuestions().add(question);

        return question;
    }
}
```
### /src/main/resources/application.properties New
```
logging.level.org.springframework: INFO
app.name: In28Minutes
app.description: ${app.name} is your first Spring Boot application Properties
welcome.message: Welcome to your first Spring Boot application
basic.value: true
basic.message: Dynamic Message
basic.number: 123
```
### /src/main/resources/application.yaml New
```
logging:
  level:
      org.springframework: DEBUG

app:
   name: In28Minutes
   description: ${app.name} is your first Spring Boot application

welcome:
    message: Welcome to your first Spring Boot app!
    
basic: 
   value: true
   message: Dynamic Message YAML
   number: 100
```
### /src/test/java/com/in28minutes/springboot/controller/SurveyControllerIT.java New
```
package com.in28minutes.springboot.controller;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.Application;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

    @LocalServerPort
    private int port;

    private TestRestTemplate template = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Before
    public void setupJSONAcceptType() {
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    }

    @Test
    public void retrieveSurveyQuestion() throws Exception {

        String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia,options:[India,Russia,United States,China]}";

        ResponseEntity<String> response = template.exchange(
                createUrl("/surveys/Survey1/questions/Question1"),
                HttpMethod.GET, new HttpEntity<String>("DUMMY_DOESNT_MATTER",
                        headers), String.class);

        JSONAssert.assertEquals(expected, response.getBody(), false);
    }

    private String createUrl(String uri) {
        return "http://localhost:" + port + uri;
    }

}
```
#### What You Will Learn during this Step:
- First thing first : I hate the fact that we did not write tests until Step 20 of this course
 - I love TDD and use it in all my projects. However, when learning something new, I think it is important to focus on one thing at a time!
- You can learn more about unit testing here - https://www.youtube.com/playlist?list=PL83C941BB0D27A6AF
- Let's write a Integration Test for our service 

#### Useful Snippets and References
First Snippet
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

```
UnRefactored Snippet
```
package com.in28minutes.springboot.controller;

import java.util.Arrays;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.Application;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class,
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

	@LocalServerPort
	private int port;

	@Test
	public void testRetrieveSurveyQuestion() {

		String url = "http://localhost:" + port
				+ "/surveys/Survey1/questions/Question1";

		TestRestTemplate restTemplate = new TestRestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(url,
				HttpMethod.GET, entity, String.class);

		String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia}";

		JSONAssert.assertEquals(expected, response.getBody(), false);
	}
}


```
Refactored Snippet
```
package com.in28minutes.springboot.controller;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.Application;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

    @LocalServerPort
    private int port;

    private TestRestTemplate template = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Before
    public void setupJSONAcceptType() {
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    }

    @Test
    public void retrieveSurveyQuestion() throws Exception {

        String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia,options:[India,Russia,United States,China]}";

        ResponseEntity<String> response = template.exchange(
                createUrl("/surveys/Survey1/questions/Question1"),
                HttpMethod.GET, new HttpEntity<String>("DUMMY_DOESNT_MATTER",
                        headers), String.class);

        JSONAssert.assertEquals(expected, response.getBody(), false);
    }

    private String createUrl(String uri) {
        return "http://localhost:" + port + uri;
    }

}
```

#### Exercises
- Try writing integration test for retrieveAllQuestions

#### Files List

pom.xml Deleted
src/main/java/com/in28minutes/springboot/Application.java Deleted
src/main/java/com/in28minutes/springboot/WelcomeController.java Deleted
src/main/java/com/in28minutes/springboot/WelcomeService.java Deleted
src/main/java/com/in28minutes/springboot/configuration/BasicConfiguration.java Deleted
src/main/java/com/in28minutes/springboot/controller/SurveyController.java Deleted
src/main/java/com/in28minutes/springboot/jpa/User.java Deleted
src/main/java/com/in28minutes/springboot/jpa/UserCommandLineRunner.java Deleted
src/main/java/com/in28minutes/springboot/jpa/UserRepository.java Deleted
src/main/java/com/in28minutes/springboot/jpa/UserRestRepository.java Deleted
src/main/java/com/in28minutes/springboot/model/Question.java Deleted
src/main/java/com/in28minutes/springboot/model/Survey.java Deleted
src/main/java/com/in28minutes/springboot/service/SurveyService.java Deleted
src/main/resources/application-dev.properties Deleted
src/main/resources/application-prod.properties Deleted
src/main/resources/application.properties Deleted
## Step22.md

### /pom.xml Deleted
### /src/main/java/com/in28minutes/springboot/Application.java Deleted
### /src/main/java/com/in28minutes/springboot/configuration/BasicConfiguration.java Deleted
### /src/main/java/com/in28minutes/springboot/controller/SurveyController.java Deleted
### /src/main/java/com/in28minutes/springboot/jpa/User.java Deleted
### /src/main/java/com/in28minutes/springboot/jpa/UserCommandLineRunner.java Deleted
### /src/main/java/com/in28minutes/springboot/jpa/UserRepository.java Deleted
### /src/main/java/com/in28minutes/springboot/jpa/UserRestRepository.java Deleted
### /src/main/java/com/in28minutes/springboot/model/Question.java Deleted
### /src/main/java/com/in28minutes/springboot/model/Survey.java Deleted
### /src/main/java/com/in28minutes/springboot/service/SurveyService.java Deleted
### /src/main/resources/application.properties Deleted
### /src/main/resources/application.yaml Deleted
### /src/test/java/com/in28minutes/springboot/controller/SurveyControllerIT.java Deleted
#### What You Will Learn during this Step:
- Exercise from previous step
- Integration Test for POST Request - Add To do

#### Useful Snippets and References
First Snippet
```
    @Test
    public void retrieveSurveyQuestions() throws Exception {
        ResponseEntity<List<Question>> response = template.exchange(
                createUrl("/surveys/Survey1/questions/"), HttpMethod.GET,
                new HttpEntity<String>("DUMMY_DOESNT_MATTER", headers),
                new ParameterizedTypeReference<List<Question>>() {
                });

        Question sampleQuestion = new Question("Question1",
                "Largest Country in the World", "Russia", Arrays.asList(
                        "India", "Russia", "United States", "China"));

        assertTrue(response.getBody().contains(sampleQuestion));
    }

```
Before Refactoring Snippet
```
	//NEEDS REFACTORING
	@Test
	public void retrieveAllSurveyQuestions() throws Exception {

		String url = "http://localhost:" + port + "/surveys/Survey1/questions";

		TestRestTemplate restTemplate = new TestRestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		ResponseEntity<List<Question>> response = restTemplate.exchange(url,
				HttpMethod.GET, new HttpEntity<String>("DUMMY_DOESNT_MATTER",
						headers),
				new ParameterizedTypeReference<List<Question>>() {
				});

		Question sampleQuestion = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));

		assertTrue(response.getBody().contains(sampleQuestion));
	}

```
After Refactoring Snippet - We will discuss this in Step 23
```

    @Test
    public void createSurveyQuestion() throws Exception {
        Question question = new Question("DOESN'T MATTER", "Smallest Number",
                "1", Arrays.asList("1", "2", "3", "4"));

        ResponseEntity<String> response = template.exchange(
                createUrl("/surveys/Survey1/questions/"), HttpMethod.POST,
                new HttpEntity<Question>(question, headers), String.class);

        assertThat(response.getHeaders().get(HttpHeaders.LOCATION).get(0),
                containsString("/surveys/Survey1/questions/"));
    }

```

#### Files List
pom.xml New
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.in28minutes.springboot</groupId>
	<artifactId>first-springboot-project</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.4.0.RELEASE</version>
	</parent>

	<properties>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-rest</artifactId>
		</dependency>

		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<optional>true</optional>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-rest-hal-browser</artifactId>
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
src/main/java/com/in28minutes/springboot/Application.java New
```
package com.in28minutes.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

	}

	@Profile("prod")
	@Bean
	public String dummy() {
		return "something";
	}
}
```
src/main/java/com/in28minutes/springboot/WelcomeController.java New
```
package com.in28minutes.springboot;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.springboot.configuration.BasicConfiguration;

@RestController
public class WelcomeController {

	//Auto wiring
	@Autowired
	private WelcomeService service;

	@Autowired
	private BasicConfiguration configuration;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}

	@RequestMapping("/dynamic-configuration")
	public Map dynamicConfiguration() {
		Map map = new HashMap();
		map.put("message", configuration.getMessage());
		map.put("number", configuration.getNumber());
		map.put("value", configuration.isValue());

		return map;
	}

}
```
src/main/java/com/in28minutes/springboot/WelcomeService.java New
```
package com.in28minutes.springboot;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

//Spring to manage this bean and create an instance of this
@Component
public class WelcomeService {

	@Value("${welcome.message}")
	private String welcomeMessage;

	public String retrieveWelcomeMessage() {
		//Complex Method
		return welcomeMessage;
	}
}
```
src/main/java/com/in28minutes/springboot/configuration/BasicConfiguration.java New
```
package com.in28minutes.springboot.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
	private boolean value;
	private String message;
	private int number;

	public boolean isValue() {
		return value;
	}

	public void setValue(boolean value) {
		this.value = value;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}
}
```
src/main/java/com/in28minutes/springboot/controller/SurveyController.java New
```
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

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RestController
class SurveyController {
	@Autowired
	private SurveyService surveyService;

	@GetMapping("/surveys/{surveyId}/questions")
	public List<Question> retrieveQuestions(@PathVariable String surveyId) {
		return surveyService.retrieveQuestions(surveyId);
	}

	// GET "/surveys/{surveyId}/questions/{questionId}"
	@GetMapping("/surveys/{surveyId}/questions/{questionId}")
	public Question retrieveDetailsForQuestion(@PathVariable String surveyId,
			@PathVariable String questionId) {
		return surveyService.retrieveQuestion(surveyId, questionId);
	}

	// /surveys/{surveyId}/questions
	@PostMapping("/surveys/{surveyId}/questions")
	public ResponseEntity<Void> addQuestionToSurvey(
			@PathVariable String surveyId, @RequestBody Question newQuestion) {

		Question question = surveyService.addQuestion(surveyId, newQuestion);

		if (question == null)
			return ResponseEntity.noContent().build();

		// Success - URI of the new resource in Response Header
		// Status - created
		// URI -> /surveys/{surveyId}/questions/{questionId}
		// question.getQuestionId()
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(
				"/{id}").buildAndExpand(question.getId()).toUri();

		// Status
		return ResponseEntity.created(location).build();
	}

}
```
src/main/java/com/in28minutes/springboot/jpa/User.java New
```
package com.in28minutes.springboot.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String role;

	protected User() {
	}

	public User(String name, String role) {
		super();
		this.name = name;
		this.role = role;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getRole() {
		return role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", role=" + role + "]";
	}

}
```
src/main/java/com/in28minutes/springboot/jpa/UserCommandLineRunner.java New
```
package com.in28minutes.springboot.jpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

	private static final Logger log = LoggerFactory
			.getLogger(UserCommandLineRunner.class);

	@Autowired
	private UserRepository repository;

	@Override
	public void run(String... args) throws Exception {

		repository.save(new User("Ranga", "Admin"));
		repository.save(new User("Ravi", "User"));
		repository.save(new User("Satish", "Admin"));
		repository.save(new User("Raghu", "User"));

		for (User user : repository.findAll()) {
			log.info(user.toString());
		}

		log.info("Admin users are.....");
		log.info("____________________");
		for (User user : repository.findByRole("Admin")) {
			log.info(user.toString());
		}

	}

}
```
src/main/java/com/in28minutes/springboot/jpa/UserRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findByRole(String role);
}
```
src/main/java/com/in28minutes/springboot/jpa/UserRestRepository.java New
```
package com.in28minutes.springboot.jpa;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface UserRestRepository extends
		PagingAndSortingRepository<User, Long> {
	List<User> findByRole(@Param("role") String role);
}
```
src/main/java/com/in28minutes/springboot/model/Question.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Question {
	private String id;
	private String description;
	private String correctAnswer;
	private List<String> options;

	// Needed by Caused by: com.fasterxml.jackson.databind.JsonMappingException:
	// Can not construct instance of com.in28minutes.springboot.model.Question:
	// no suitable constructor found, can not deserialize from Object value
	// (missing default constructor or creator, or perhaps need to add/enable
	// type information?)
	public Question() {

	}

	public Question(String id, String description, String correctAnswer,
			List<String> options) {
		super();
		this.id = id;
		this.description = description;
		this.correctAnswer = correctAnswer;
		this.options = options;
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

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public List<String> getOptions() {
		return options;
	}

	@Override
	public String toString() {
		return String
				.format("Question [id=%s, description=%s, correctAnswer=%s, options=%s]",
						id, description, correctAnswer, options);
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
		Question other = (Question) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
```
src/main/java/com/in28minutes/springboot/model/Survey.java New
```
package com.in28minutes.springboot.model;

import java.util.List;

public class Survey {
	private String id;
	private String title;
	private String description;
	private List<Question> questions;

	public Survey(String id, String title, String description,
			List<Question> questions) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.questions = questions;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	@Override
	public String toString() {
		return "Survey [id=" + id + ", title=" + title + ", description="
				+ description + ", questions=" + questions + "]";
	}

}
```
src/main/java/com/in28minutes/springboot/service/SurveyService.java New
```
package com.in28minutes.springboot.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.model.Survey;

@Component
public class SurveyService {
	private static List<Survey> surveys = new ArrayList<>();
	static {
		Question question1 = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question2 = new Question("Question2",
				"Most Populus Country in the World", "China", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question3 = new Question("Question3",
				"Highest GDP in the World", "United States", Arrays.asList(
						"India", "Russia", "United States", "China"));
		Question question4 = new Question("Question4",
				"Second largest english speaking country", "India", Arrays
						.asList("India", "Russia", "United States", "China"));

		List<Question> questions = new ArrayList<>(Arrays.asList(question1,
				question2, question3, question4));

		Survey survey = new Survey("Survey1", "My Favorite Survey",
				"Description of the Survey", questions);

		surveys.add(survey);
	}

	public List<Survey> retrieveAllSurveys() {
		return surveys;
	}

	public Survey retrieveSurvey(String surveyId) {
		for (Survey survey : surveys) {
			if (survey.getId().equals(surveyId)) {
				return survey;
			}
		}
		return null;
	}

	public List<Question> retrieveQuestions(String surveyId) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		return survey.getQuestions();
	}

	public Question retrieveQuestion(String surveyId, String questionId) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		for (Question question : survey.getQuestions()) {
			if (question.getId().equals(questionId)) {
				return question;
			}
		}

		return null;
	}

	private SecureRandom random = new SecureRandom();

	public Question addQuestion(String surveyId, Question question) {
		Survey survey = retrieveSurvey(surveyId);

		if (survey == null) {
			return null;
		}

		String randomId = new BigInteger(130, random).toString(32);
		question.setId(randomId);

		survey.getQuestions().add(question);

		return question;
	}
}
```
src/main/resources/application-dev.properties New
```
logging.level.org.springframework: TRACE
```
src/main/resources/application-prod.properties New
```
logging.level.org.springframework: INFO
```
src/main/resources/application.properties New
```
logging.level.org.springframework: DEBUG
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}

basic.value=true
basic.message=Welcome to in28minutes
basic.number=200
```
src/test/java/com/in28minutes/springboot/controller/SurveyControllerIT.java New
```
package com.in28minutes.springboot.controller;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.Application;
import com.in28minutes.springboot.model.Question;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class,
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

	@LocalServerPort
	private int port;

	//NEEDS REFACTORING
	@Test
	public void testRetrieveSurveyQuestion() {

		String url = "http://localhost:" + port
				+ "/surveys/Survey1/questions/Question1";

		TestRestTemplate restTemplate = new TestRestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(url,
				HttpMethod.GET, entity, String.class);

		String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia}";

		JSONAssert.assertEquals(expected, response.getBody(), false);
	}

	//NEEDS REFACTORING
	@Test
	public void retrieveAllSurveyQuestions() throws Exception {

		String url = "http://localhost:" + port + "/surveys/Survey1/questions";

		TestRestTemplate restTemplate = new TestRestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		ResponseEntity<List<Question>> response = restTemplate.exchange(url,
				HttpMethod.GET, new HttpEntity<String>("DUMMY_DOESNT_MATTER",
						headers),
				new ParameterizedTypeReference<List<Question>>() {
				});

		Question sampleQuestion = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));

		assertTrue(response.getBody().contains(sampleQuestion));
	}

	//NEEDS REFACTORING
	@Test
	public void addQuestion() {

		String url = "http://localhost:" + port + "/surveys/Survey1/questions";

		TestRestTemplate restTemplate = new TestRestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		Question question = new Question("DOESNTMATTER", "Question1", "Russia",
				Arrays.asList("India", "Russia", "United States", "China"));

		HttpEntity entity = new HttpEntity<Question>(question, headers);

		ResponseEntity<String> response = restTemplate.exchange(url,
				HttpMethod.POST, entity, String.class);

		String actual = response.getHeaders().get(HttpHeaders.LOCATION).get(0);

		assertTrue(actual.contains("/surveys/Survey1/questions/"));

	}

}
```

## Step23.md

#### What You Will Learn during this Step:
- Lets do some cleanup
 - Lets Refactor the SurveyControllerIT.java

#### Exercises
- Test and make sure everything is working fine

#### Files List
src/test/java/com/in28minutes/springboot/controller/SurveyControllerIT.java 

```
package com.in28minutes.springboot.controller;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.Application;
import com.in28minutes.springboot.model.Question;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class,
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

	@LocalServerPort
	private int port;

	TestRestTemplate restTemplate = new TestRestTemplate();

	HttpHeaders headers = new HttpHeaders();

	@Before
	public void before() {

		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

	}

	@Test
	public void testRetrieveSurveyQuestion() {

		HttpEntity<String> entity = new HttpEntity<String>(null, headers);

		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/surveys/Survey1/questions/Question1"),
				HttpMethod.GET, entity, String.class);

		String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia}";

		JSONAssert.assertEquals(expected, response.getBody(), false);
	}

	@Test
	public void retrieveAllSurveyQuestions() throws Exception {

		ResponseEntity<List<Question>> response = restTemplate.exchange(
				createURLWithPort("/surveys/Survey1/questions"),
				HttpMethod.GET, new HttpEntity<String>("DUMMY_DOESNT_MATTER",
						headers),
				new ParameterizedTypeReference<List<Question>>() {
				});

		Question sampleQuestion = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));

		assertTrue(response.getBody().contains(sampleQuestion));
	}

	@Test
	public void addQuestion() {

		Question question = new Question("DOESNTMATTER", "Question1", "Russia",
				Arrays.asList("India", "Russia", "United States", "China"));

		HttpEntity entity = new HttpEntity<Question>(question, headers);

		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/surveys/Survey1/questions"),
				HttpMethod.POST, entity, String.class);

		String actual = response.getHeaders().get(HttpHeaders.LOCATION).get(0);

		assertTrue(actual.contains("/surveys/Survey1/questions/"));

	}

	private String createURLWithPort(final String uri) {
		return "http://localhost:" + port + uri;
	}

}
```

## Step24.md

#### What You Will Learn during this Step:

- Write a Unit Test for retrieving a specific question from a survey.
- Different between Unit Test and Integration Test
- Basics of Mocking
- MockMvc framework
- @MockBean

> Programming Tip - Become an expert at Mockito - https://courses.in28minutes.com/p/mockito-for-beginner-in-5-steps


#### Exercises
- Write unit test for retrieve all questions for a survey

#### Files List
src/test/java/com/in28minutes/springboot/controller/SurveyControllerTest.java New

```
package com.in28minutes.springboot.controller;

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

import com.in28minutes.springboot.model.Question;
import com.in28minutes.springboot.service.SurveyService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = SurveyController.class)
public class SurveyControllerTest {

	@Autowired
	private MockMvc mockMvc;

	// Mock @Autowired
	@MockBean
	private SurveyService surveyService;

	@Test
	public void retrieveDetailsForQuestion() throws Exception {
		Question mockQuestion = new Question("Question1",
				"Largest Country in the World", "Russia", Arrays.asList(
						"India", "Russia", "United States", "China"));

		Mockito.when(
				surveyService.retrieveQuestion(Mockito.anyString(), Mockito
						.anyString())).thenReturn(mockQuestion);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
				"/surveys/Survey1/questions/Question1").accept(
				MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		String expected = "{id:Question1,description:Largest Country in the World,correctAnswer:Russia}";

		JSONAssert.assertEquals(expected, result.getResponse()
				.getContentAsString(), false);

		// Assert
	}
}
```

## Step25.md

#### What You Will Learn during this Step:
- Exercise from previous step
- Unit test for createTodo

#### Files List
src/test/java/com/in28minutes/springboot/controller/SurveyControllerTest.java Modified

```

	@Test
	public void createSurveyQuestion() throws Exception {
		Question mockQuestion = new Question("1", "Smallest Number", "1",
				Arrays.asList("1", "2", "3", "4"));

		String questionJson = "{\"description\":\"Smallest Number\",\"correctAnswer\":\"1\",\"options\":[\"1\",\"2\",\"3\",\"4\"]}";
		//surveyService.addQuestion to respond back with mockQuestion
		Mockito.when(
				surveyService.addQuestion(Mockito.anyString(), Mockito
						.any(Question.class))).thenReturn(mockQuestion);

		//Send question as body to /surveys/Survey1/questions
		RequestBuilder requestBuilder = MockMvcRequestBuilders.post(
				"/surveys/Survey1/questions")
				.accept(MediaType.APPLICATION_JSON).content(questionJson)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(HttpStatus.CREATED.value(), response.getStatus());

		assertEquals("http://localhost/surveys/Survey1/questions/1", response
				.getHeader(HttpHeaders.LOCATION));
	}
```

## Step26.md

#### What You Will Learn during this Step:
- Securing our services with Basic Authentication using Spring Security
- Executing Requests using Basic Authentication with Postman
 - default user name is user
 - default security password is printed in console

#### Useful Snippets and References

First Snippet
```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```

Second Snippet
```
Using default security password:
```

Third Snippet : Executing a GET to http://localhost:8080/surveys/Survey1/questions/
```
{
  "timestamp": 1483514297025,
  "status": 401,
  "error": "Unauthorized",
  "message": "Full authentication is required to access this resource",
  "path": "/surveys/Survey1/questions/"
}
```

## Step27.md

#### What You Will Learn during this Step:
- Configure different user roles for survey and other services
- Update integration tests
- Update unit tests


#### Files List
pom.xml Modified
New Lines
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
src/main/java/com/in28minutes/springboot/security/SecurityConfig.java New
```
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
	// survey -> USER
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic().and().authorizeRequests().antMatchers("/surveys/**")
				.hasRole("USER").antMatchers("/users/**").hasRole("USER")
				.antMatchers("/**").hasRole("ADMIN").and().csrf().disable()
				.headers().frameOptions().disable();
	}

}
```
src/test/java/com/in28minutes/springboot/controller/SurveyControllerIT.java Modified
New Lines

```
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class,
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SurveyControllerIT {

	//Other Code 

	HttpHeaders headers = new HttpHeaders();

	@Before
	public void before() {
		headers.add("Authorization", createHttpAuthenticationHeaderValue(
				"user1", "secret1"));
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	}
    //Other Code 
	
	private String createHttpAuthenticationHeaderValue(String userId,
			String password) {

		String auth = userId + ":" + password;

		byte[] encodedAuth = Base64.encode(auth.getBytes(Charset
				.forName("US-ASCII")));

		String headerValue = "Basic " + new String(encodedAuth);

		return headerValue;
	}

}
```

src/test/java/com/in28minutes/springboot/controller/SurveyControllerTest.java Modified
```
@WebMvcTest(value = SurveyController.class, secure = false)
```

## Step28.md

#### What You Will Learn during this Step:
- A Deep Dive into Autoconfiguration
 - spring-boot-autoconfigure-1.4.0.RELEASE.jar
  - /META-INF/spring.factories
  - Package org.springframework.boot.autoconfigure
- Lets look at the log in debug mode!
- Examples
 - JdbcTemplateAutoConfiguration
 - HttpMessageConvertersAutoConfiguration
- Programming Tips 
 - Understand Design Patterns
  - https://www.youtube.com/watch?v=Vp7q_pE7Fzg
 - Understand Modern Development Practices
  - https://www.youtube.com/watch?v=0Kqzfyp-w4s

#### Useful Snippets and References
```
        String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);

        for (String beanName : beanNames) {
            System.out.println(beanName);
        }
```

