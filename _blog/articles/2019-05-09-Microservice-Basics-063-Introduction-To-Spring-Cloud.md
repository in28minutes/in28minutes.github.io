---
layout:  post
title:  Microservice Architectures - Introduction to Spring Cloud
date:    2019-05-09 12:31:19
summary:  In this article, we focus on Spring Cloud. We talk about the various components under its umbrella. 
categories:  SpringBootMicroservices
permalink:  /introduction-to-spring-cloud
image: /images/spring-boot-application.png
---

In this article, we focus on Spring Cloud. We talk about the various components under its umbrella. 
 
## You will learn
- What is Spring Cloud?
- What are the typical challenges in microservices architectures?
- What are the challenges that Spring Cloud solves?
- What are the important projects under Spring Cloud umbrella?
- How does Spring Cloud help you build your microservices architecture?


### Introduction to Cloud, Microservice - Challenges and Advantages

This is the second article in a series of five articles on cloud and microservices:
- [1 - Microservices Architecutres - Quick introduction to Cloud - Why, What and How?](/introduction-to-cloud){:target='_blank'}
- [2 - Microservice Architectures - Introduction to Spring Cloud](/introduction-to-spring-cloud){:target='_blank'}
- [3 - Microservices Architectures - Advantages Of Microservices](/microservice-architectures-advantages-of-microservices){:target='_blank'}
- [4 - Microservice Architectures - Challenges with building Microservices](/microservice-architectures-challenges-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Microservices vs SOA](/microservice-architectures-soa-vs-microservices){:target='_blank'}


## Introducing Spring Cloud

If you go to the homepage of Spring Cloud:

![image info](/images/Capture-063-02.png)

> Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems (e.g. configuration management, service discovery, circuit breakers, intelligent routing, micro-proxy, control bus, one-time tokens, global locks, leadership election, distributed sessions, cluster state)

Spring Cloud is not a single project, rather a cluster of them.

Shown below is just a small sample of the projects present under this umbrella. 

![image info](/images/Capture-063-03.png)

Let's get a quick introduction to some of the important projects under Spring Cloud umbrella 

### Spring Cloud Netflix

Netflix was one of the first organizations to play around with microservices architecture. Under this project, a large number of projects have been open sourced for public use. Eureka, Hystrix and Zuul are popular ones among them. 

#### Spring Cloud Config

This project provides a framework for centralized configuration management, making use of a Git or a SVN repository.

#### Spring Cloud Bus

This enables the microservices and infrastructure components to communicate with each other, in a distributed setup. 

### Challenges in Microservices Architectures

Let's now have a look at the challenges we face while developing microservices applications, and the solutions offered by Spring Cloud for them.

### Configuration Management

In a system with a microservices architecture, there are a large number of small-sized microservices that communicate with each other: 

![image info](/images/Capture-063-04.png)

Each of these microservices needs to execute across multiple environments. In a given environment, there could be multiple instances of that microservice running. This means the operations team needs to manage a lot of configuration information for each microservice. 

> The Spring Cloud Config Server provides a solution to such configuration management

![image info](/images/Capture-063-05.png)

It provides an approach, where all the configurations across environments for all the microservices, is stored in a Git repository. The Spring Cloud Config Server then exposes this information to all the microservices. 

Storing the configurations in such a centralized location makes it easier for the operations team to manage it.

### Dynamic Scale Up And Down

Consider the following example: 

The CurrencyCalculationService microservice talks to another microservice, the CurrencyExchangeService. Currently, three instances of CurrencyExchangeService are running. it is possible that at any point in time, more instances can be added in, or existing instances can be removed. 

![image info](/images/Capture-063-06.png)

We need the CurrencyCalculationService to be able to distribute the load across the instances available at that point in time. 

The need is to dynamically find out the number of instances of the CurrencyExchangeService at that time, and distribute the load across them.

Solution involves multiple components.

#### Service Registration

All microservices register with a naming server. One of the options Spring Boot provides is Eureka.

#### Service Discovery

When any microservice wants to talk to another microservice, it asks the naming server In the example above, the CurrencyCalculationService can ask the Eureka naming server, about the instances of the CurrencyExchangeService that are running. The naming service would, in turn, provide the URLs of those instances back to the CurrencyConversionService. 

This helps establish a dynamic relationship between instances of the communicating microservices. 

#### Load Balancing

When there are multiple instances of same microservice, you want to distribute load between them. One of the options Spring Cloud provides is a client side load balancing framework, Ribbon. 

The CurrencyCalculationService uses Ribbon and distributes requests across instances of the CurrencyExchangeService. 

The Feign framework helps us to write simpler RESTful clients. 

### Visibility And Monitoring

In Microservices Architectures, You would need to have complete visibility into what's happening in your microservices.

In order to trace a request, you need to assign it a unique identifier. Spring Cloud Sleuth helps in assigning an identifier to every request. You can use a distributed tracing solution like Zipkin to trace the request across multiple components. 

### API Gateway

All micorservices have a few common features -  security, logging, analytics, and so on. What is best place to implement these common features?

An API Gateway provides a great solution to this kind of a challenge. 

The Netflix Zuul API gateway is a great solution to implement an API Gateway.

### Fault Tolerance

What if a microservice is down? How do other microservices respond to it?

Hystrix helps in improving fault tolerance of your microservices.

Do check out our video on this:

[![image info](/images/Capture-063-01.png)](https://www.youtube.com/watch?v=Lr96QgqylIU)

### Summary

In this article, we had a look at the Spring Cloud project, and saw that it is an umbrella for a wide variety of projects. Each of these solves a particular problem associated with microservices. Important problems include service registration, service discovery, load distribution, event tracing, service monitoring and fault tolerance.

