---
layout:     post
title:      Creating a Web Application with Spring Boot with JSP
date:       2022-07-08 12:31:19
summary:    Setting up a basic web application with Spring Boot is a cake walk. We will create a simple web application using Spring Initializr and add JSP features to it. 
categories:  SpringBoot
permalink:  /creating-web-application-with-spring-boot
image: /images/spring-boot-application.png
---

This guide will help you create a simple web application with Spring Boot. We will develop a simple application with login functionality as well as the functionality to show a list of todo's. We will follow MVC pattern using JSP as the view.  

![Image](/images/SpringBootWebApplication-AllFiles.png "Spring Boot Web Application - All Files")

 
## You will learn
- How to bootstrap a simple project with Spring Initializr?
- How to initialize a basic web application for Spring Boot?
- How to add a JSP for web application?
- How to build basic login functionality?
- How to add functionality to show a list of todo's?
- How to auto-wire components using Spring Framework?
- What if you want to learn more?



## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Overview of the Web application

We will build a list todo page (un-formatted) with basic login feature.

### Files

Following screenshot shows eclipse project with all the files we would create.

![Image](/images/SpringBootWebApplication-AllFiles.png "Spring Boot Web Application - All Files") 

A brief overview of all files

- `LoginService, TodoService` - Contain the business logic. LoginService has simple hardcoded validation for userid and password. TodoService contains a service method to retrieve a list of todos. 
- `login.jsp, welcome.jsp, list-todos.jsp` - The name clearly explains what each of these views contain.
- `LoginController, TodoController` - Act as Controllers in the MVC patter. LoginController has a little bit of flow. If user enters valid user id and password combination, he would be redirected to the welcome page. Otherwise, login page will be shown with the error message.
- `pom.xml` - Important depedencies are Spring Boot Starter Web and  tomcat-embed-jasper. We will talk about these later.
- `application.properties` - This is typically used to configure frameworks in Spring Boot. In this example, we would configure our view resolver in application.properties.

### Screenshots of the application

Login Page

![Image](/images/SpringBootWebApplication-LoginPage.png "Spring Boot Web Application - Login Page")

Login Page if user enters invalid userid and password

![Image](/images/SpringBootWebApplication-LoginPage-InvalidCredentials.png "Spring Boot Web Application - Login Page with Invalid Credentials")

Welcome Page 

![Image](/images/SpringBootWebApplication-WelcomePage.png "Spring Boot Web Application - Welcome Page")

List Todos Page

![Image](/images/SpringBootWebApplication-TodoPage.png "Spring Boot Web Application - Todo Page")


## Bootstrapping web application with Spring Initializr

Creating a Web application with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

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

## Project Dependencies

Spring Boot Starter Web provides all the dependencies and the auto configuration need to develop web applications. It is the first dependency we would use.

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

We want to use JSP as the view. Default embedded servlet container for Spring Boot Starter Web is tomcat. To enable support for JSP's, we would need to add a dependency on tomcat-embed-jasper.

```
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
```

### Spring Boot Starter Web Dependencies
Following screenshot shows the different dependencies that are added in to our application because of Spring Boot Starter Web.

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

Dependencies can be classified into:

- Spring - core, beans, context, aop
- Web MVC - (Spring MVC)
- Jackson - for JSON Binding 
- Validation - Hibernate Validator, Validation API
- Embedded Servlet Container - Tomcat
- Logging - logback, slf4j

Any typical web application would use all these dependencies. Spring Boot Starter Web comes pre packaged with these. As a developer, I would not need to worry about either these dependencies or their compatible versions.  

### Auto Configuration
Spring Boot Starter Web auto configures the basic things that are needed. To understand the features Spring Boot Starter Web brings in, lets run StudentServicesApplication.java as a Java Application and review the log.

```
Mapping servlet: 'dispatcherServlet' to [/]

Mapped "{[/error]}" onto public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)

Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]

```
Spring Boot Starter Web auto-configures 

- Dispatcher Servlet
- Error Page
- Web Jars to manage your static dependencies
- Embedded Servlet Container - Tomcat is the default

## Configuring a View Resolver

We would have our jsp's in /WEB-INF/jsp/. We would need to configure the view resolver with the prefix and suffix.

```properties
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

## Login Controller

- `public String showLoginPage(ModelMap model)`: Mapped to the \login Get Method, this method shows the login page.
-  `@Autowired LoginService service`: LoginService has the validation logic
- `showWelcomePage(ModelMap model, @RequestParam String name, @RequestParam String password)`: Mapped to the \login Post Method, this method validates the userid and password. Redirects to welcome page if login is successful.

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

@Controller
@SessionAttributes("name")
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

## Login Service

Has the basic logic for authentication. Hardcoded business logic.

```java
package com.in28minutes.springboot.web.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    public boolean validateUser(String userid, String password) {
        // in28minutes, dummy
        return userid.equalsIgnoreCase("in28minutes")
                && password.equalsIgnoreCase("dummy");
    }

}
```

## Login view - JSP

Simple login page with userid and password form fields. If error message is populated into model, `${errorMessage}` will show the authentication failure error message. 

```html
<html>

<head>
<title>First Web Application</title>
</head>

<body>
    <font color="red">${errorMessage}</font>
    <form method="post">
        Name : <input type="text" name="name" />
        Password : <input type="password" name="password" /> 
        <input type="submit" />
    </form>
</body>

</html>
```

## Welcome View - JSP
Welcome page is shown on successful authentication. Shows the name of the login user and a link to manage todo's.

```html
<html>

<head>
<title>First Web Application</title>
</head>

<body>
    Welcome ${name}!! <a href="/list-todos">Click here</a> to manage your todo's.
</body>

</html>
```


## Todo Model and Business Service

We are using a basic todo with id, user, description and a target date.

```java
package com.in28minutes.springboot.web.model;

import java.util.Date;

public class Todo {
    private int id;
    private String user;
    private String desc;
    private Date targetDate;
    private boolean isDone;

	//Getters, Setters, Constructors, toString, equals and hash code
} 
```

Todoservice uses a simple ArrayList to store a list of todo's in memory. It offers a method to retrieve the todo's.

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
}
```

## List Todo JSP

List todos pages shows the list of todo's. This is completely unformatted page. During the subsequest steps of our course, we beautify this page and add more functionality to add, delete and update todo's.

```jsp
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

## Todo Controller

Todo Controller has a simple method to retrieve the list of todos and populate it into model. It redirects to list-todos view.

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

## Running the application
We use a Spring Boot Application class to launch our application

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

Complete code is on Github repository : https://github.com/in28minutes/SpringBootWebApplicationStepByStep. You can download Step12.zip and import as a maven project to be able to run it.

You can run this as a simple java application. When you run this you would see the application starting up. Below is some of the extract from the log. You can see that all the request mappings are properly mapped. You can launch the application at http://localhost:8080/login and enter userid/password combination of in28Minutes/dummy.

```

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.4.3.RELEASE)

2017-01-30 10:02:01.775  INFO 6070 --- [  restartedMain] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat initialized with port(s): 8080 (http)
2017-01-30 10:02:01.798  INFO 6070 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service Tomcat
2017-01-30 10:02:01.800  INFO 6070 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/8.5.6
2017-01-30 10:02:02.498  INFO 6070 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2017-01-30 10:02:02.498  INFO 6070 --- [ost-startStop-1] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 3747 ms
2017-01-30 10:02:02.803  INFO 6070 --- [ost-startStop-1] o.s.b.w.servlet.ServletRegistrationBean  : Mapping servlet: 'dispatcherServlet' to [/]
2017-01-30 10:02:03.557  INFO 6070 --- [  restartedMain] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped "{[/login],methods=[GET]}" onto public java.lang.String com.in28minutes.springboot.web.controller.LoginController.showLoginPage(org.springframework.ui.ModelMap)
2017-01-30 10:02:03.559  INFO 6070 --- [  restartedMain] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped "{[/login],methods=[POST]}" onto public java.lang.String com.in28minutes.springboot.web.controller.LoginController.showWelcomePage(org.springframework.ui.ModelMap,java.lang.String,java.lang.String)
2017-01-30 10:02:03.559  INFO 6070 --- [  restartedMain] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped "{[/list-todos],methods=[GET]}" onto public java.lang.String com.in28minutes.springboot.web.controller.TodoController.showTodos(org.springframework.ui.ModelMap)
2017-01-30 10:02:03.564  INFO 6070 --- [  restartedMain] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped "{[/error]}" onto public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)
2017-01-30 10:02:03.565  INFO 6070 --- [  restartedMain] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped "{[/error],produces=[text/html]}" onto public org.springframework.web.servlet.ModelAndView org.springframework.boot.autoconfigure.web.BasicErrorController.errorHtml(javax.servlet.http.HttpServletRequest,javax.servlet.http.HttpServletResponse)
2017-01-30 10:02:03.615  INFO 6070 --- [  restartedMain] o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2017-01-30 10:02:03.616  INFO 6070 --- [  restartedMain] o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2017-01-30 10:02:03.682  INFO 6070 --- [  restartedMain] o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/**/favicon.ico] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2017-01-30 10:02:04.108  INFO 6070 --- [  restartedMain] o.s.j.e.a.AnnotationMBeanExporter        : Registering beans for JMX exposure on startup
2017-01-30 10:02:04.288  INFO 6070 --- [  restartedMain] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat started on port(s): 8080 (http)
2017-01-30 10:02:04.307  INFO 6070 --- [  restartedMain] c.i.s.web.SpringBootFirstWebApplication  : Started SpringBootFirstWebApplication in 7.204 seconds (JVM running for 9.191)

```

Complete code is on Github repository : https://github.com/in28minutes/SpringBootWebApplicationStepByStep. You can download Step12.zip and import as a maven project to be able to run it.
