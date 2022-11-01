---
layout:     post
title:      Spring Boot REST API Projects with Code Examples
date:       2022-07-02 12:31:19
summary:    At in28Minutes, we have created 8 Spring Boot REST API projects with code examples on Github. We have 10+ tutorial articles explaining these projects.  These code examples will help beginners and experts to learn and gain expertise at developing RESTful Services with Spring Boot.
categories:  SpringBoot
permalink:  /spring-boot-rest-api-projects-with-code-examples
image: /images/spring-boot-application.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

This guide will help you understand the REST API projects with code examples on Github. We have a number of articles explaining these projects.  These code examples will help beginners and experts to learn and gain expertise at developing RESTful Services with Spring Boot. 


 
## Spring Boot REST API Projects - Code Examples on Github

Let's look at the articles in the following sections
- Projects Creating Basic REST API 
- Adding Unit and Integration Tests to RESTful Services
- Securing RESTful Services
- Basic RESTful Service Features
- Advanced RESTful Service Features

### Projects Creating Basic REST API

We explore couple of options of create RESTful Services with Spring Boot
- Using Spring Boot Web Starter
- Using Spring Data REST Starter

Using Spring Boot Web Starter, we have articles with 
- An article focusing on basics of a REST Service
- A project exposing an end to end CRUD API for an entire Resource. The project uses JPA (Hibernate) to connect to a H2 in memory database.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Creating REST Service with Spring Boot|REST API|[URL](http://www.springboottutorial.com/creating-rest-service-with-spring-boot){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services){:target='_blank'} |
|Introduction to Spring Data Rest - Create RESTful APIs at F1 Speed|Spring Data|[URL](http://www.springboottutorial.com/introduction-to-spring-data-rest-using-spring-boot){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-jpa-spring-data-rest){:target='_blank'} |
|Creating a CRUD REST API/Service with Spring Boot, JPA and Hibernate|REST API|[URL](http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-basic){:target='_blank'} |

### Adding Unit and Integration Tests to RESTful Services

Automation Tests (including Unit and Integration Tests) are a key part of ensuring your services and APIs evolve over a time period.

Let's consider a StudentController which depends on StudentService.

In the unit test
- We will mock out the StudentService using Mockito
- We will use Mock MVC framework to launch only StudentController. 

> A key part of unit testing is to restrict the scope to a minimum. In this unit test, we want to test only the methods in `StudentController`.

In the integration test

- We will launch the complete Spring Boot application using `@SpringBootTest`
- We will invoke the service methods using `TestRestTemplate`
- We will assert the results using a great JSON assert framework - `org.skyscreamer.jsonassert.JSONAssert`

> A key part of integration testing is testing all the layers in the application.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Unit Testing Rest Services with Spring Boot and JUnit|REST API|[URL](http://www.springboottutorial.com/unit-testing-for-spring-boot-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services-with-unit-and-integration-tests){:target='_blank'} |
|Writing Integration Tests for Rest Services with Spring Boot|REST API|[URL](http://www.springboottutorial.com/integration-testing-for-spring-boot-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services-with-unit-and-integration-tests){:target='_blank'} |
|Spring Boot - Unit Testing and Mocking with Mockito and JUnit|Spring Boot Unit Testing|[URL](http://www.springboottutorial.com/spring-boot-unit-testing-and-mocking-with-mockito-and-junit){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics){:target='_blank'} |

### Securing RESTful Services

In the article below, we implement basic security for a REST API.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Secure Rest Services and Web Applications with Spring Boot Security Starter|Spring Boot Basics|[URL](http://www.springboottutorial.com/securing-rest-services-with-spring-boot-starter-security){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-rest-services){:target='_blank'} |


### Basic RESTful Service Features

Great REST APIs have
- Awesome Exception Handling - You would want to return the right response with the exact response status based on the situation.
- Proper Validation - You would want to validate the right stuff and return a message which helps the consumer understand what failed.
- Current Documentation - A Consumer need to understand how to use your API. Great documentation makes your consumer and your job easy.

Articles below explore these features in depth.

|Title|Category|URL|Github|
| -------------------- |:------------------:|---------------:|--------------|
|Spring Boot Exception(Error) Handling for RESTful Services|REST API|[URL](http://www.springboottutorial.com/spring-boot-exception-handling-for-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-exception-handling){:target='_blank'} |
|Implementing Validation for RESTful Services with Spring Boot|REST API|[URL](http://www.springboottutorial.com/spring-boot-validation-for-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-validation){:target='_blank'} |
|Spring Boot and Swagger - Documenting RESTful Services|REST API|[URL](http://www.springboottutorial.com/spring-boot-swagger-documentation-for-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-with-swagger){:target='_blank'} |

### REST API Advanced Features

At the next level, REST APIs have 
- HATEOAS - HATEOAS stands for "Hypermedia as the engine of application state". When some details of a resource are requested, you will provide the resource details as well as details of related resources and the possible actions you can perform on the resource. For example, when requesting information about a facebook user, a REST service can return the following
    - user details 
    - Links to get his recent posts
    - Links to get his recent comments 
    - Links to retrieve his friend’s list.
- Content Negotiation - Why should JSON be the only data exchange format to be supported? What if your consumer loves (or is stuck with) XML? Content Negotiation helps you support multiple data exchange formats for your RESTful API.
- Versioning - As your API evolves with your and your consumer needs, you would have the need to have multiple versions of the same Resource API. How do you handle that?

Articles below explore these features in depth.

|Spring Boot - HATEOAS for RESTful Services|REST API|[URL](http://www.springboottutorial.com/spring-boot-hateoas-for-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-with-hateoas){:target='_blank'} |
|Spring Boot and Content Negotiation - XML and JSON Representations |REST API|[URL](http://www.springboottutorial.com/spring-boot-content-negotiation-with-xml-json-representations){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation){:target='_blank'} |
|Versioning RESTful Services|REST API|[URL](http://www.springboottutorial.com/spring-boot-versioning-for-rest-services){: target='_blank'}  |[Project Code on Github](https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-versioning){:target='_blank'} |


