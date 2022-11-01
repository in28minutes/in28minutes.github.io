---
layout:     post
title:      Getting Started with Spring Boot - 7 things a beginner should know!
date:       2022-07-01 12:31:19
summary:    Spring Boot is a tricky framework to understand. In this tutorial for beginnners with Spring Boot, we will look at the basics of Spring Boot and help you understand the important concepts - Architecture, Starter Projects, Auto Configuration and Starter Parent. We will look at the architecture of Spring Boot and explore a variety of resources - tutorials, courses and videos - we created to help you get started with Spring Boot effectively.
categories:  SpringBoot
permalink:  /introduction-to-spring-boot-for-beginners
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

Spring Boot is a tricky framework to understand. In this tutorial for beginnners with Spring Boot, we will look at the basics of Spring Boot and help you understand the important concepts - Starter Projects, Auto Configuration and Starter Parent. We will explore a variety of resources - tutorials, courses and videos - we created to help you get started with Spring Boot effectively. 



## Understand Spring Boot Architecture

Building blocks of Spring Boot are 
- Spring Boot Starter Projects
- Spring Boot Starter Parent
- Auto Configuration

We will start with understanding what Spring Boot wants to achieve by comparing it with Spring and Spring MVC. 

Once you understand that you would be in a good position to start with the building blocks of Spring Boot. 

Let's get started on the roller coaster ride of Spring Boot

## Spring Boot vs Spring MVC vs Spring - How do they compare?

Most important thing to understand is

> Spring Boot does not compete with Spring or Spring MVC. It makes it easy to use them.

##### Spring Framework
> Most important feature of Spring Framework is Dependency Injection. At the core of all Spring Modules is Dependency Injection or IOC Inversion of Control.

When DI or IOC is used properly, we can develop loosely coupled applications. And loosely coupled applications can be easily unit tested.

##### Spring MVC

> Spring MVC Framework provides decoupled way of developing web applications. With simple concepts like Dispatcher Servlet, ModelAndView and View Resolver, it makes it easy to develop web applications.

##### Spring Boot

The problem with Spring and Spring MVC is the amount of configuration that is needed.

```
  <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/views/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
  </bean>
  
  <mvc:resources mapping="/webjars/**" location="/webjars/"/>
```

Spring Boot solves this problem through a combination of  Auto Configuration and Starter Projects. Spring Boot also provide a few non functional features to make building production ready applications faster. 

Following article digs deeper and give you a full blown comparison between Spring, Spring MVC and Spring Boot.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Spring Boot vs Spring MVC vs Spring - How do they compare?|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){: target='_blank'}  | |

## Spring Boot Auto Configuration

Spring and Spring MVC applications have a lot of XML or Java Bean Configuration.

Spring Boot brings in new thought process around this. 

> Can we bring more intelligence into this? When a spring mvc jar is added into an application, can we auto configure some beans automatically? 

- How about auto configuring a Data Source if Hibernate jar is on the classpath? 
- How about auto configuring a Dispatcher Servlet if Spring MVC jar is on the classpath?

There would be provisions to override the default auto configuration. 

> Spring Boot looks at a) Frameworks available on the CLASSPATH b) Existing configuration for the application. Based on these, Spring Boot provides basic configuration needed to configure the application with these frameworks. This is called `Auto Configuration`.  

Following article explores Auto Configuration in depth.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|What is Spring Boot Auto Configuration?|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-boot-auto-configuration){: target='_blank'}  | |

## Spring Boot Starter Projects

Here's what the Spring Boot documentations says about starters.

> Starters are a set of convenient dependency descriptors that you can include in your application. You get a one-stop-shop for all the Spring and related technology that you need, without having to hunt through sample code and copy paste loads of dependency descriptors. For example, if you want to get started using Spring and JPA for database access, just include the spring-boot-starter-data-jpa dependency in your project, and you are good to go.

Let's consider an example starter - Spring Boot Starter Web.

If you want to develop a web application or an application to expose restful services, Spring Boot Start Web is the starter to pick.

Following screenshot shows the different dependencies that are added in to our application when you add Spring Boot Start Web into the dependencies of your project.

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

This is a wide variety of components that are typically used to develop web applications. Spring Boot Starter Web brings them together and provides a simple approach to use them. 
- Spring - core, beans, context, aop
- Web MVC - (Spring MVC)
- Jackson - for JSON Binding 
- Validation - Hibernate Validator, Validation API
- Embedded Servlet Container - Tomcat
- Logging - logback, slf4j

> Any typical web application would use all these dependencies. Spring Boot Starter Web comes pre packaged with these. As a developer, I would not need to worry about either these dependencies or their compatible versions.  

Spring Boot provides a wide range of starter projects. Spring Initializr suppports all of them and more. Among a varied range of starter projects and options supported are:

- spring-boot-starter-web-services : For building applications exposing SOAP Web Services
- spring-boot-starter-web - Build Web applications & RESTful applications
- spring-boot-starter-test - Write great Unit  and Integration Tests
- spring-boot-starter-jdbc - Traditional JDBC Applications
- spring-boot-starter-hateoas - Make your services more RESTful by adding HATEOAS features
- spring-boot-starter-security - Authentication and Authorization using Spring Security
- spring-boot-starter-data-jpa -  Spring Data JPA with Hibernate
- spring-boot-starter-cache - Enabling Spring Framework’s caching support
- spring-boot-starter-data-rest - Expose Simple REST Services using Spring Data REST

You can explore starter projects in depth with the article below.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Initializing Projects with Spring Boot Starters - Web and JPA|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-boot-starter-projects){: target='_blank'}  | |

## Spring Boot Starter Parent

All Spring Boot projects typically use spring-boot-starter-parent as the parent in pom.xml.

```
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.1.RELEASE</version>
    </parent>
```

Parent Poms allow you to manage the following things for multiple child projects and modules:
- Configuration - Java Version and Other Properties
- Depedency Management - Version of dependencies
- Default Plugin Configuration

You can read more about Spring Boot Starter Parent at the article below.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Introduction to Spring Boot Starter Parent|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-boot-starter-parent){: target='_blank'}  | |

## Spring Initializr - Create Spring Boot Projects at F1 Speed

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

It allows you to create varied range of Spring Boot based Applications from a very simple UI. Some of the types of applications you can bootstrap are:

- Web Applications
- Restful Applications
- Batch Applications

Let's take the example of creating a Web application with Spring Initializr.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} and choose the following
  - Choose `com.in28minutes.springboot` as Group
  - Choose `student-services` as Artifact
  - Choose following dependencies
    - Web
- Click Generate Project button at the bottom of the page.
- Import the project into Eclipse.

Following article delves more into Spring Initializr.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Spring Initializr - Bootstrap Your Spring Boot Applications at F1 speed!|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){: target='_blank'}  | |

## Spring Boot and Embedded Servers

When we create an application deployable, we would embed the server (for example, tomcat) inside the deployable. 
> For example, for a Spring Boot Application, you can generate an application jar which contains Embedded Tomcat. You can run a web application as a normal Java application!

Embedded server implies that our deployable unit contains the binaries for the server (example, tomcat.jar).

Let's take a quick look at the dependencies for `spring-boot-starter-web`

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-tomcat</artifactId>
  <version>2.3.1.RELEASE</version>
  <scope>compile</scope>
</dependency>
```

You can see that by default Starter Web includes a dependency on starter tomcat. 
- Tomcat is the default embedded server with Spring Boot. 
- Spring Boot also supports Jetty and Undertow.

Following article explores more about Embedded Servers.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Spring Boot and Embedded Servers - Tomcat, Jetty and Undertow|Spring Boot Basics|[URL](http://www.springboottutorial.com/spring-boot-with-embedded-servers-tomcat-jetty){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics){:target='_blank'} |


## Spring Data

From http://projects.spring.io/spring-data/
> Spring Data's mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store. It makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services.

To make it simpler, Spring Data provides Abstractions (interfaces) you can use irrespective of underlying data source. 

Some of the sub modules in Spring Data are 
- Spring Data JPA - Relational Databases
- Spring Data Mongodb
- Spring Data Rest - Expose awesome REST API around Spring Data Repositories

Following articles digs deeper into Spring Data.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Introduction to Spring Data - Spring Data JPA, Spring Data REST and MongoDB|Spring Data|[URL](http://www.springboottutorial.com/introduction-to-spring-data-with-spring-boot){: target='_blank'}  | |

