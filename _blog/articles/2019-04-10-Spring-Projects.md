---
layout:  post
title:  What Are Spring Projects?
date:   2022-04-10 12:31:19
summary: There are several important Spring Projects solving the needs of enterprises today. What are Spring Projects and how are they different from Spring Modules?
categories:  SpringBoot
permalink:  /spring-projects-with-examples
image: /images/spring-framework-category.png
---

There are several important Spring Projects solving the needs of enterprises today. What are Spring Projects and how are they different from Spring Modules?

![image info](images/Capture-095-03.png)
 
## You will learn
- What are Spring Projects?
- What are examples of Spring Projects?
- How are Spring Projects different from Spring Modules?


### Spring Framework

This is the sixth article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}


### What Are Spring Projects?

Within the Spring framework, there are a variety of different Spring modules - JDBC, AOP, Beans, Context. All Spring Modules share the same release version as the Spring framework. They are part of the same project.

Apart from the Spring framework and its various modules, there are other frameworks called Spring Projects. These projects provide solutions to other issues faced by enterprise applications. 

These projects are versioned differently from the Spring framework. For example, the current version of Spring Framework is 5.x.x and that of Spring Boot (one of the Spring Projects) is 2.x.x.

#### Spring Boot

Spring Boot is one of the most popular framework to develop microservices today. Spring Boot makes it easy to develop applications quickly. It has important features such as starter projects, auto configuration and actuator, it is a cakewalk to develop microservices. 

### Spring Cloud

World is moving towards the cloud. Everyone wants to deploy their application in the cloud. If you develop a microservice using Spring Boot, you could use Spring Cloud to make it cloud-enabled. 

### Spring Data

Spring Data provides a provides mechanisms for consistent data access. 

A few years earlier, there were only one kind of database an application could connect to - the SQL based relational databases.  Today, we also have at our disposal a wide variety of databases including the NoSQL databases. 

Spring Data ensures that the way we access data from all these sources remains consistent.

### Spring Integration

Spring Integration on the other hand, addresses the issues of application integration. 

Spring Integration provides implementations for recommended architecture patterns in Enterprise Application Integration. 

### Spring Batch

Not all processing is done online, and a lot is also accomplished through batch applications. 

Batch applications have their own unique set of requirements. For instance, it is important to be able to restart a batch job from the point where it had failed earlier. It may also be necessary to track down accurately what is happening in the back ground when a batch job executes. 

Spring Batch provides a great option to develop batch applications.

### Spring Security

Security is one of the most important non functional requirements of an application's development. Any application that you develop, be it a web application, a REST service or any other, you want it to be secure. 

Spring Security provides features for securing the applications that you develop. It has support for basic authentication, OAuth1 and OAuth2 authentication. 

### Spring HATEOAS

With RESTful services, it is not sufficient if you simply return the data for a resource. It is also recommended to return related actions you can perform on the resource. This is called HATEOAS. Spring HATEOAS enables you to develop HATEOAS compatible REST API.

Do check out our video on the same topic:

[![image info](images/Capture-094-01.png)](https://www.youtube.com/watch?v=gsqYVsVh7iM)

### Summary

We have looked at seven of the available Spring projects. This is an evolving space and there are new Spring projects every year to solve emerging enterprise problems.

