---
layout:     post
title:      TODO
date:       2016-01-01 12:31:19
summary:    TODO
categories: SpringBootMicroservices
permalink:  /url
---

This guide will help you create a TODO***. 
 
## You will learn
- What?
- Why?
- How?
- Where?
- When?


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



## Complete Code Example
- TODO