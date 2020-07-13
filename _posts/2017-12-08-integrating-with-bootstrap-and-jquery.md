---
layout:     post
title:      Spring Boot - Integrating with Bootstrap & jQuery using Web Jars
date:       2020-07-07 12:31:19
summary:    Learn how to integrate Spring Boot with Bootstrap and jQuery using Web Jars. We will set up a simple web application and add the web jars for these frameworks. 
categories:  SpringBoot
permalink:  /spring-boot-with-jquery-and-bootstrap-web-jars
---

This guide will help you create a simple web application with Spring Boot. We will add the dependencies for Bootstrap and jQuery webjars. We will create a simple jsp view using jQuery and Bootstrap.
 
## You will learn
- How to bootstrap a simple project with Spring Initializr?
- How to initialize a basic web application for Spring Boot?
- How to add a JSP for web application?
- How to add webjars for jQuery and Bootstrap?
- How to create a simple view using jQuery and Bootstrap?

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

## Overview of the Web application

We will build a static todo page (un-formatted) rendered using a jsp.

### Files

Following screenshot shows eclipse project with all the files we would create.

![Image](/images/SpringBootWebApplicationWithjQueryAndBootStrap-AllFiles.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

A brief overview of all files

- `SpringBootWebApplicationBootstrapJqueryApplication.java` - Spring Boot Application class. This initialized the Spring Boot application with auto configuration.
- `WelcomeController.java` - A Controller with a method to redirect to the view - jsp.
- welcome.jsp - The view - uses Jquery and Bootstrap. 
- `pom.xml` - We will add the webjar dependencies for Bootstrap and jQuery to pom.xml. 
- `application.properties` - This is typically used to configure frameworks in Spring Boot. In this example, we would configure our view resolver in application.properties.

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
## Webjars for jQuery and Bootstrap

Let's now add in the webjars to our pom.xml

```
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
```

## Using Web Jars in View

Make sure that you restart the application and we are ready to use jquery and bootstrap in our project.

If you expand your dependencies you should see the dependencies.
![Image](/images/bootstrap-and-jquery-in-dependencies.png "Bootstrap and jQuery in dependencies") 

Referring to bootstrap css
```
    <link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet">
```

Referring to Bootstrap js
```

<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>

```

Referring to jQuery js
```
<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
```
Update view using jQuery and Bootstrap is shown below.

/src/main/webapp/WEB-INF/jsp/welcome.jsp

```
<html>
<head>
    <title>Welcome</title>
    <link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
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
        <script src="webjars/jquery/1.9.1/jquery.min.js"></script>
        <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </div>
</body>
</html>
```

Spring Boot would auto configure the webjars resource mapping. So you DON'T need to do this anymore.

```
    <mvc:resources mapping="/webjars/**" location="/webjars/"/>
```



## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.in28minutes.springboot.web.application</groupId>
    <artifactId>spring-boot-web-application-bootstrap-jquery</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>spring-boot-web-application-bootstrap-jquery</name>
    <description>Spring Boot Tutorial - Adding Bootstrap and jQuery to Web Application</description>

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
            <artifactId>spring-boot-starter-web</artifactId>
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

### /src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/SpringBootWebApplicationBootstrapJqueryApplication.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootWebApplicationBootstrapJqueryApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootWebApplicationBootstrapJqueryApplication.class, args);
    }
}
```
---

### /src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/WelcomeController.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {    
    @RequestMapping("/welcome")
    public String loginMessage(){
        return "welcome";
    }
}
```
---

### /src/main/resources/application.properties

```properties
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
logging.level.org.springframework.web=INFO
```
---

### /src/main/resources/static/css/custom.css

```css
body {
    background-color: lightblue;
}
```
---

### /src/main/resources/static/js/custom.js

```js
alert("I'm active");
```
---

### /src/main/webapp/WEB-INF/jsp/welcome.jsp

```
<html>
<head>
    <title>Welcome</title>
    <link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet">
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
        <script src="webjars/jquery/1.9.1/jquery.min.js"></script>
        <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="js/custom.js"></script>
    </div>
</body>
</html>
```
---

### /src/test/java/com/in28minutes/springboot/tutorial/basics/application/configuration/SpringBootWebApplicationBootstrapJqueryApplicationTests.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootWebApplicationBootstrapJqueryApplicationTests {

    @Test
    public void contextLoads() {
    }

}
```
---
