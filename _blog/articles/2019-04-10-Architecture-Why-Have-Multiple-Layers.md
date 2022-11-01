---
layout:  post
title:  Software Architecture - Why do we use Layered Architectures?
date:    2019-04-09 12:31:19
summary:  In this article, we explore the reasons why we build applications with several layers. We also look at different options for each layer in the Java world.
categories: SwArchitecture
permalink:  /software-architecture-why-should-we-use-layered-architecture
image: /images/spring-boot-application.png
---

In this article, we explore the reasons why we build applications with several layers. We also look at different options for each layer in the Java world.

### You will Learn
- Why Have Multiple Layers?
- What are typical layers and their responsiblities?
- What are the typical frameworks used in each layer in the Java world?



This is the fifth article in the following series of articles on Software Architecture :
- [1 - Quick Introduction To Software Architecture](/introduction-to-software-architecture){:target='_blank'}
- [2 - What Is The Goal Of a Software Architect?](/what-is-the-goal-of-an-software-architect){:target='_blank'}
- [3 - 5 Qualities of a Great Software Architect](/five-important-qualities-of-a-software-architect){:target='_blank'}
- [4 - 5 Important Responsibilities of a Software Architect](/five-important-responsibilities-of-a-software-architect){:target='_blank'}
- [5 - Software Architecture - Why do we use Layered Architectures?](/software-architecture-why-should-we-use-layered-architecture){:target='_blank'}


### Why Have Multiple Layers?

When we build any large application, such as a web application or service, we try to organize it into multiple layers. We could go for layers such as Web, Business, Access, among others:

![image info](/images/Capture-038-02.png)

The reason we go to such lengths is a very important underlying principle : **separation of concerns**. 

Each of the layers above have different responsibilities. Web layer is responsible for presenting information to the user. The Business layer is responsible for application's business logic. The Data layer is responsible for taking care of the data access, and configuring and talking to the data stores. You might also have an additional access layer to talk to external applications, or queueing messages for dispatch.

By defining each layer to have a separate responsibility, you ensure high cohesion with-in each such layer. 

### Layers In Enterprise Java

When it comes to the Java world, the typical organization of enterprise applications follows this schematic:

![image info](/images/Capture-038-03.png)


### Implementing The Web Layer

Earlier, the web layer of a Java EE application is responsible for rendering the final view to the user with technologies like JSPs and variety of templating languages.  With the advent of RESTful web services and evolution of JavaScript SPA frameworks, this has changed drastically. 

Today, we expose a REST API from the Java Web layer, and a front-end framework (such as AngularJS or ReactJS) handles the user presentation.

The main responsibility of a web layer is to talk to business layer and send a proper response to REST API calls.

Another responsibility that a web layer typically handles is authentication and authorizations using a module like Spring Security.

![image info](/images/Capture-038-04.png)
 

A few important decisions when designing your web layer are
- Should the application have state? If yes, you need to store session information about the user. Ideally, you should not.
- Which framework to use? The popular options are Spring Boot (MVC), JAX-RS(REST), JAX-WS(SOAP).

### Implementing The Business Layer

![image info](/images/Capture-038-05.png)

Lets look at the important business layer responsibilities:

#### Transaction Management

This is taken care of by Java Transaction API (JTA) and Spring Transactions. 

### Implementing The Access Layer

![image info](/images/Capture-038-06.png)

The following are the responsibilities of the Access layer:

#### Communicating with Data Store

If your application communicates with an external database, JPA might be a good choice. If very complex database queries are needed, then you might want to use JDBC or MyBatis. 

> Spring Data JPA might be a good starting point for using JPA and Hibernate.

#### Communication With External Interfaces

This layer provides interface with the JMS module. It also communicates with AMQP implementations.

### Other Layers

![image info](/images/Capture-038-07.png)

One of the most important aspects that needs to be handled in any system is Cross Cutting Concerns. This includes tasks such as logging, performance and security. 

Typically these are implemented using Aspect Oriented Programming. AspectJ and Spring AOP are options to consider.

### Unit Testing

Unit testing of the application is another important concern. Typical frameworks that are provided include JUnit, Mockito and Spring Unit.

Do check out our video on this:

[![image info](/images/Capture-038-01.png)](https://www.youtube.com/watch?v=fS2JnypQKWs)

### Summary

In this article, we understood why we need to have multiple layers in an application. We looked at the layers in a typical Java web application, along with framework options available. We then had a look at the makeup of the individual Data, Business and Access layers of a typical Java web application.
