---
layout:     post
title:      Microservices with Spring Boot and Java - Part 1 - Getting Started
date:       2022-07-01 12:31:19
summary:    Let's learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. In part 1 of this series, lets get introduced to the concept of microservices and understand how to create great microservices with Spring Boot and Spring Cloud.
categories:  SpringBootMicroservices
permalink:  /creating-microservices-with-spring-boot-part-1-getting-started
image: /images/microservices-category.png
---

This guide will help you learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. 

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

> We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. 

This is a 5 Part Article Series

Microservices with Spring Boot 
- Current Part - Part 1 - Getting Started with Microservices Architecture
- Part 2 - [Creating Forex Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-2-forex-microservice){:target="_blank"}
- Part 3 - [Creating Currency Conversion Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-3-currency-conversion-microservice){:target="_blank"}
- Part 4 - [Using Ribbon for Load Balancing](http://www.springboottutorial.com/microservices-with-spring-boot-part-4-ribbon-for-load-balancing){:target="_blank"}
- Part 5 - [Using Eureka Naming Server](http://www.springboottutorial.com/microservices-with-spring-boot-part-5-eureka-naming-server){:target="_blank"}

In part 1 of this series, lets get introduced to the concept of microservices and understand how to create great microservices with Spring Boot and Spring Cloud.
 
## You will learn
- What is a Monolith?
- What is a Microservice?
- What are the Challenges with Microservices?
- How does Spring Boot and Spring Cloud make developing Microservices easy?
- How to implement client side load balancing with Ribbon?
- How to implement a Naming Server (Eureka Naming Server)?
- How to connect the microservices with Naming Server and Ribbon?



## Microservices Overview - A Big Picture

In this series of articles, we would create two microservices:
- Forex Service - Abbreviated as FS
- Currency Conversion Service - Abbreviated as CCS

> Do not worry if you are not clear about a few things. The idea is to give a big picture before we get our hands dirty and create the microservices step by step




### Forex Service

Forex Service (FS) is the Service Provider. It provides currency exchange values for various currency. Let's assume that it talks to a Forex Exchange and provides the current conversion value between currencies.

An example request and response is shown below:

GET to http://localhost:8000/currency-exchange/from/EUR/to/INR

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  port: 8000,
}
```

The request above is the currency exchange value for EUR to INR. In the response, conversionMultiple is 75.

> We will talk about port in the response a little later.

### Currency Conversion Service

Currency Conversion Service (CCS) can convert a bucket of currencies into another currency. It uses the Forex Service to get current currency exchange values. CCS is the Service Consumer.

An example request and response is shown below:

GET to http://localhost:8100/currency-converter/from/EUR/to/INR/quantity/10000

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  quantity: 10000,
  totalCalculatedAmount: 750000,
  port: 8000,
}
```

The request above is to find the value of 10000 EUR in INR. The totalCalculatedAmount is 750000 INR.

The diagram below shows the communication between CCS and FS.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

### Eureka Naming Server and Ribbon

Based on the load, we can have multiple instances of the Currency Conversion Service and the Forex Service running.

![Image](/images/Spring-Boot-Microservice-2-CCS.png "Spring-Boot-Microservice-2-CCS.png")

![Image](/images/Spring-Boot-Microservice-3-FSInstances.png "Spring-Boot-Microservice-3-FSInstances.png")

And the number of instances for each service might vary with time. Below picture shows a specific instance where there are 5 instances of the Forex Service.

![Image](/images/Spring-Boot-Microservice-4-5FSInstances.png "Spring-Boot-Microservice-4-5FSInstances.png")

What needs to happen in the above situation is load should be uniformly distributed among these 5 instances.

![Image](/images/Spring-Boot-Microservice-5-CCSToFS5instances.png "Spring-Boot-Microservice-5-CCSToFS5instances.png")

In this series of articles, we will use Ribbon for Load Balancing and Eureka Naming server for registering all microservices.

![Image](/images/Spring-Boot-Microservice-6-EurekaNamingServer-Deployment.png "Spring-Boot-Microservice-6-EurekaNamingServer-Deployment.png")

> Do not worry if you are not clear about a few things. The idea is to give a big picture before we get our hands dirty and create the microservices step by step

## What is a Monolith Application?

Have you ever worked in a project
- Which is released (taken to production) once every few months
- Which has a wide range of features and functionality
- Which has a team of more than 50 working for it
- Where debugging problems is a big challenge
- Where bringing in new technology and new process is almost impossible

These are typical characteristics of a Monolith applications.

> Monolith applications are typically huge - more 100,000 line of code. In some instances even more than million lines of code.

Monoliths are characterized by
- Large Application Size
- Long Release Cycles
- Large Teams

Typical Challenges include
- Scalability Challenges
- New Technology Adoption
- New Processes - Agile?
- Difficult to Automation Test
- Difficult ot Adapt to Modern Development Practices
- Adapting to Device Explosion


## Microservices

Microservice Architectures evolved as a solution to the scalability and innovotation challenges with Monolith architectures.

There are a number of definitions proposed for Microservices

> Small autonomous services that work together - Sam Newman

> Developing a single application as a suite of small services each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies - James Lewis and Martin Fowler

While there is no single accepted definition for microservices, for me, there are a few important characteristics:
- REST - Built around RESTful Resources. Communication can be HTTP or event based.
- Small Well Chosen Deployable Units - Bounded Contexts
- Cloud Enabled - Dynamic Scaling


## How does Microservice Architecture look like?

This is how a monolith would look like. One application for everything.
![](images/MonolithApplication.png)

This is how the same application would look like when developed using Microservices Architecture.
![](images/MicroservicesArchitectureSplit.png)

Microservice Architectures involve a number of small, well designed, components interacting with messages.
![](images/Microservices-Chain-Example.png)

## Advantages of Microservices

Advantages
- New Technology & Process Adaption becomes easier. You can try new technologies with the newer microservices that we create.
- Faster Release Cycles
- Scaling with Cloud

## Challenges with Microservice Architectures

While developing a number of smaller components might look easy, there are a number of inherent complexities that are associated with microservices architectures.

Lets look at some of the challenges:
- Quick Setup needed : You cannot spend a month setting up each microservice. You should be able to create microservices quickly.
- Automation : Because there are a number of smaller components instead of a monolith, you need to automate everything - Builds, Deployment, Monitoring etc. 
- Visibility : You now have a number of smaller components to deploy and maintain. Maybe 100 or maybe 1000 components. You should be able to monitor and identify problems automatically. You need great visibility around all the components.
- Bounded Context : Deciding the boundaries of a microservice is not an easy task. Bounded Contexts from Domain Driven Design is a good starting point. Your understanding of the domain evolves over a period of time. You need to ensure that the microservice boundaries evolve.
- Configuration Management : You need to maintain configurations for hundreds of components across environments. You would need a Configuration Management solution
- Dynamic Scale Up and Scale Down : The advantages of microservices will only be realized if your applications can scaled up and down easily in the cloud.
- Pack of Cards : If a microservice at the bottom of the call chain fails, it can have knock on effects on all other microservices. Microservices should be fault tolerant by Design.
- Debugging : When there is a problem that needs investigation, you might need to look into multiple services across different components. Centralized Logging and Dashboards are essential to make it easy to debug problems.
- Consistency : You cannot have a wide range of tools solving the same problem. While it is important to foster innovation, it is also important to have some decentralized governance around the languages, platforms, technology and tools used for implementing/deploying/monitoring microservices.
## Solutions to Challenges with Microservice Architectures

### Spring Boot

> Enable building production ready applications quickly

Provide non-functional features 
  - embedded servers  (easy deployment with containers)
  - metrics (monitoring)
  - health checks (monitoring)
  - externalized configuration

### Spring Cloud

> Spring Cloud provides solutions to cloud enable your microservices. It leverages and builds on top of some of the Cloud solutions opensourced by Netflix (Netflix OSS).

#### Important Spring Cloud Modules

Dynamic Scale Up and Down. Using a combination of 
- Naming Server (Eureka)
- Ribbon (Client Side Load Balancing)
- Feign (Easier REST Clients)

Visibility and Monitoring with
- Zipkin Distributed Tracing
- Netflix API Gateway

Configuration Management with
- Spring Cloud Config Server

Fault Tolerance with
- Hystrix

## Microservice Series of Articles

In this series of articles, we would create two microservices:
- Forex Service - Abbreviated as FS
- Currency Conversion Service - Abbreviated as CCS

The diagram below shows the communication between CCS and FS. We would establish communication between these two components.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

We would want to be able to dynamically scale up and scale down the number of instances of each of these services.

![Image](/images/Spring-Boot-Microservice-2-CCS.png "Spring-Boot-Microservice-2-CCS.png")
![Image](/images/Spring-Boot-Microservice-3-FSInstances.png "Spring-Boot-Microservice-3-FSInstances.png")

And the number of instances for each service might vary with time. Below picture shows a specific instance where there are 5 instances of the Forex Service.

![Image](/images/Spring-Boot-Microservice-4-5FSInstances.png "Spring-Boot-Microservice-4-5FSInstances.png")

Implementing a solution for dynamic scale up and down needs to answer two questions
- How does the Currency Conversion Service (CCS) know how many instances of Forex Service (FS) are active?
- How does the Currency Conversion Service (CCS) distribute the load between the active instances.

Because we want this to be dynamic, we cannot hardcode the urls of FS in CCS. Thats why we bring in a Naming Server.

![Image](/images/Spring-Boot-Microservice-6-EurekaNamingServer-Deployment.png "Spring-Boot-Microservice-6-EurekaNamingServer-Deployment.png")

All instances of the components (CCS and FS) register with the Eureka Naming Server. When FS needs to call the CCS, it will ask Eureka Naming Server for the active instances. We will use Ribbon to do Client Side Load Balancing between the different instances of FS.

A high level sequence diagram of what would happen when there is a request from CCS to FS is shown below:
![Image](/images/Spring-Boot-Microservice-7-Eureka-Sequence-Diagram.png "Spring-Boot-Microservice-7-Eureka-Sequence-Diagram.png")

## Next Steps

Continue Learning Microservices with Spring Boot 
- Current Part - Part 1 - Getting Started with Microservices Architecture
- Part 2 - [Creating Forex Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-2-forex-microservice){:target="_blank"}
- Part 3 - [Creating Currency Conversion Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-3-currency-conversion-microservice){:target="_blank"}
- Part 4 - [Using Ribbon for Load Balancing](http://www.springboottutorial.com/microservices-with-spring-boot-part-4-ribbon-for-load-balancing){:target="_blank"}
- Part 5 - [Using Eureka Naming Server](http://www.springboottutorial.com/microservices-with-spring-boot-part-5-eureka-naming-server){:target="_blank"}
