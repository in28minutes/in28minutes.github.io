---
layout:  post
title:  Introduction To Spring Boot Framework - A Quick Tutorial for Beginners
date:   2022-04-10 12:31:19
summary: In this article, we understand the basics of Spring Boot framework. We look at the important features of Spring Boot and how it is different from the Spring framework.
categories:  SpringBoot
permalink:  /introduction-to-spring-boot
image: /images/spring-boot-feature.png
---

In this article, we understand the basics of Spring Boot framework. We look at the important features of Spring Boot and how it is different from the Spring framework.

![image info](images/Capture-085-03.png)

## You will learn
- What is Spring Boot?
- What are the problems in developing Spring Based Applications?
- How does Spring Boot help in solving these problems?
- What are important concepts to understand in Spring Boot?
- What are the best practices in using Spring Batch?
- What is Spring Boot Auto Configuration?
- What are Spring Boot Starter Projects?


### What Is Spring Boot?

Here's the official definition of Spring Boot from the Spring Boot Web Site.

> Spring Boot makes it easy to create stand-alone, production-ready Spring-based application that is ready to run. Most Spring Boot applications need very little Spring configuration.  

What does it mean? Let's start with looking at Spring Framework.

### Spring Framework

The core feature of Spring framework is **dependency injection**. Spring alsoe provides great integration with other frameworks, like Hibernate. Spring provides a few frameworks of its own - for example, Spring MVC for developing web applications and REST API.

### Problem with Spring Based Applications

If you look at any Spring-based application, such as a Spring MVC application:

![image info](images/Capture-085-02.png)

You need to configure a lot of components within it:

![image info](images/Capture-085-03.png)

You also end up configuring a data source and a transaction manager: 

![image info](images/Capture-085-04.png)

The configuration story is the same for any Spring-based application. 

### Spring Boot To The Rescue

Spring Boot asks the question: 

> Why do we need to do the exact same thing for every project involving Spring? 

Why not just abstract it away, and help the developer build applications quicker?

#### Spring Boot Auto Configuration

Spring Boot Auto Configuration looks to bring more intelligence into application configuration. 

For example, it looks to build a few patterns, identify what JAR files are available, and looks to auto-configure a lot of the things.

Spring Boot ensures that a developer can build a new Spring project in a few minutes, instead of hours. 

#### Spring Boot And Frameworks

Spring Boot takes care of the typical things you normally do in Sprint 0 of a project. In addition, Spring Boot helps the developer in the following areas:
* Integration with several frameworks
* Configuration management
* Logging
* Transaction management
* Error/Exception handling
* Monitoring and health checks
* Integrating unit testing and mocking frameworks

All we need to do is provide the frameworks that are needed by the application, and Spring Boot magically auto configures them. 

#### Spring Boot And Version Management

Spring Boot also takes the responsibility of managing versions of dependent libraries. 

You just need to migrate to the latest version of Spring Boot, and the corresponding compatible versions of all the frameworks being used are directly available for you. 

### Why Do You Need Spring Boot?

#### Reducing Project Start-up Time

Spring Boot reduces the startup time in creating new projects. You can add frameworks and Spring Boot automatically configures them for you. In the world of microservices, as we create a number of smaller microservices instead of a large monolith, Spring Boot helps us start up projects quickly. 

#### Spring Boot Provides Starter Projects

Spring Boot provides a feature called Starter Projects, which helps you quickly add specific features to your application. Important ones include:
* spring-boot-starter-web-services: Quickly build SOAP Web Services.
* spring-boot-starter-web: Useful to build RESTful web applications, using Spring MVC. It uses Tomcat as the default embedded container.
* spring-boot-starter-test: Used for testing Spring Boot applications, using libraries such as JUnit, Hamcrest, and Mockito.
* spring-boot-starter-hateoas: Useful for building hypermedia-based RESTful web applications, using Spring MVC and Spring HATEOAS.
* spring-boot-starter-jersey: An alternative to string-boot-starter-web. Useful for building RESTful web applications using JAX-RS and Jersey
* spring-boot-starter-security: Useful for using Spring Security
* spring-boot-starter-jpa: Used for Spring data JPA with hibernate
* spring-boot-starter-data-rest: A stater for exposing Spring Data repositories over REST, using Spring Data REST

#### Spring Boot Provides Developer Tools

Spring Boot makes the life of a developer a lot easier by providing important debug and deployment tools. 

Do check out our video on the same topic:

[![image info](images/Capture-085-01.png)](https://www.youtube.com/watch?v=sKdD3wYP9SM)

### Summary

In this article, we had a quick look at the Spring Boot Framework. We saw that the Spring framework is very useful to developers, but Spring projects had a large configuration overhead. Spring Boot adds some intelligence with autoconfiguration. It greatly reduces project startup time and provides easier mechanism - called starter projects - for developing different kinds of applications.