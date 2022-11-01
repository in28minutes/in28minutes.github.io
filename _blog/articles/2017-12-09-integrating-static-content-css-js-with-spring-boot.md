---
layout:     post
title:      Spring Boot - Integrating Static Content -  Javascript (JS) and CSS files 
date:       2022-07-07 12:31:19
summary:    Learn how to integrate Spring Boot with Static Content -  Javascript (JS) and CSS files . We will set up a simple web application and add the static content for these frameworks. 
categories:  SpringBoot
permalink:  /spring-boot-with-static-content-css-and-javascript-js
image: /images/spring-boot-application.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

This guide will help you create a simple web application with Spring Boot. We will add static content (css and js) and use it from a JSP view. 
 
![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

## You will learn
- How to bootstrap a simple project with Spring Initializr?
- How to initialize a basic web application for Spring Boot?
- How to add a JSP for web application?
- How to add static content - JS and CSS?



## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Overview of the Web application

We will build a static todo page (un-formatted) rendered using a jsp.

### Files

Following screenshot shows eclipse project with all the files we would create.

![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

A brief overview of all files

- `SpringBootWebApplicationBootstrapJqueryApplication.java` - Spring Boot Application class. This initializes the Spring Boot application with auto configuration.
- `WelcomeController.java` - A Controller with a method to redirect to the view - jsp.
- welcome.jsp - The view - using the custom js and css. 
- `application.properties` - This is typically used to configure frameworks in Spring Boot. In this example, we would configure our view resolver in application.properties.
- custom.css - contains some basic css.
- custom.js - contains a javascript alert.

> Complete project on Github : https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-web-application-bootstrap-jquery

## Bootstrapping web application with Spring Initializr

Creating a Web application with Spring Initializr is a cake walk.  

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.web.application` as Group
  - Choose `spring-boot-web-application-bootstrap-jquery` as Artifact
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

## Configuring a View Resolver

We would have our jsp's in /WEB-INF/jsp/. We would need to configure the view resolver with the prefix and suffix.

```properties
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

## Controller

Lets add in a simple controller redirecting to the view.

/src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/WelcomeController.java

```java
@Controller
public class WelcomeController {    
    @RequestMapping("/welcome")
    public String loginMessage(){
        return "welcome";
    }
}
```

The url to this controlle method will be http://localhost:8080/welcome

## Adding a view

Let's create a simple with a basic HTML structure. We will create a basic table which we would want to format a little later. 

/src/main/webapp/WEB-INF/jsp/welcome.jsp

```
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <div class="container">
        <table class="table table-striped">
            <caption>Your todos are</caption>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Target Date</th>
                    <th>Is it Done?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Todo 1</td>
                        <td>10/12/2017</td>
                        <td>No</td>
                        <td><a class="btn btn-warning" href="/edit-todo">Edit Todo</a></td>
                        <td><a class="btn btn-warning" href="/delete-todo">Delete Todo</a></td>
                    </tr>
            </tbody>
        </table>
        <div>
            <a class="btn btn-default" href="/add-todo">Add a Todo</a>
            
        </div>
    </div>
</body>
</html>
```
## Adding Static Content CSS and JS

The recommended folder for static content is `/src/main/resources/static`. 

We will create the css as shown below. It give a light blue background color to the body of the page.

/src/main/resources/static/css/custom.css
```css
body {
    background-color: lightblue;
}
```

We will create a custom js file throwing an alert

### /src/main/resources/static/js/custom.js

```js
alert("I'm active");
```

## Using JS and CSS in View


Referring to JS file
```
<script src="js/custom.js"></script>
```

Referring to jQuery js
```
<link href="css/custom.css"
        rel="stylesheet">
```

Complete updated view is shown below.

/src/main/webapp/WEB-INF/jsp/welcome.jsp

```
<html>
<head>
    <title>Welcome</title>
    <link href="css/custom.css"
        rel="stylesheet">
</head>
<body>
    <div class="container">
        <table class="table table-striped">
            <caption>Your todos are</caption>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Target Date</th>
                    <th>Is it Done?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Todo 1</td>
                        <td>10/12/2017</td>
                        <td>No</td>
                        <td><a class="btn btn-warning" href="/edit-todo">Edit Todo</a></td>
                        <td><a class="btn btn-warning" href="/delete-todo">Delete Todo</a></td>
                    </tr>
            </tbody>
        </table>
        <div>
            <a class="btn btn-default" href="/add-todo">Add a Todo</a>
            
        </div>
        <script src="js/custom.js"></script>
    </div>
</body>
</html>
```
