---
layout:     post
title:      TODO
date:       2016-01-01 12:31:19
summary:    TODO
categories: Spring Boot, REST Service
permalink:  /url
---

This guide will help you create a TODO***. 
 
## You will learn
- What?
- Why?
- How?
- Where?
- When?

## References

1 hour video courses on all popular frameworks!

- Spring - [spring-framework-tutorial-for-beginners](https://in28minutes.teachable.com/p/spring-framework-tutorial-for-beginners)
- Spring MVC - [https://www.youtube.com/watch?v=BjNhGaZDr0Y](https://www.youtube.com/watch?v=BjNhGaZDr0Y)
- Spring Boot - [https://www.youtube.com/watch?v=PSP1-2cN7vM](https://www.youtube.com/watch?v=PSP1-2cN7vM)
- Eclipse - [https://www.youtube.com/watch?v=s4ShbtOHMCA](https://www.youtube.com/watch?v=s4ShbtOHMCA)
- Maven - [https://www.youtube.com/watch?v=0CFWeVgzsqY](https://www.youtube.com/watch?v=0CFWeVgzsqY)
- JUnit - [https://www.youtube.com/watch?v=o5k9NOR9lrI](https://www.youtube.com/watch?v=o5k9NOR9lrI)
- Mockito - [https://www.youtube.com/watch?v=d2KwvXQgQx4](https://www.youtube.com/watch?v=d2KwvXQgQx4)

## Resources/URLs/Entities Overview

In this guide, we will create three services using proper URIs and HTTP methods:

## Project Code Structure

Following screenshot shows the structure of the project we will create.
![Image](/images/TODO.png "TODO-DESC") 

A few details:
- SpringBootTutorialBasicsApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.


## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/TODO_URL

## Article Begins
Some theory

## Bootstrapping with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `TODO` as Group
  - Choose `TODO` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
    - TODO
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here TODO.

## STEP 1 : TODO


## Step N : Executing the TODO Service 

Below picture shows how we can execute this Get Service from Postman - my favorite tool to run rest services.
![Image](/images/ExecutingGetRestServiceUsingPostman.png "Executing Rest Service From Postman")   

## Executing a POST Rest Service

Example Request is shown below. 

```json
```

Below picture shows how we can execute this Post Service from Postman - my favorite tool to run rest services. Make sure you go to the Body tab and select raw. Select JSON from the dropdown. Copy above request into body.

![Image](/images/ExecutingPostRestServiceUsingPostman.png "Executing Post Rest Service From Postman")   

> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}
- [Learn RESTful and SOAP Web Services with Spring Boot](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}
- [Learn Microservices with Spring Boot and Spring Cloud](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}
- [Watch Spring Framework Interview Guide - 200+ Questions & Answers](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://www.youtube.com/playlist?list=PLBBog2r6uMCRzaJqr-uUC8gakwSxkPSBh){:target="_blank"}

## Complete Code Example
- TODO