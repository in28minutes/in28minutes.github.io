---
layout:     post
title:      Microservices with Spring Boot - Part 5 - Example using Eureka Naming Server
date:       2022-07-01 12:31:19
summary:    Let's learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. In part 5 of this series, we will focus on enabling Eureka Naming Server and have the microservices communicate with it.
categories:  SpringBootMicroservices
permalink:  /microservices-with-spring-boot-part-5-eureka-naming-server
image: /images/microservices-category.png
---

Let's learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. 

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 


Here is the Microservice Series Outline:
Microservices with Spring Boot 
- Part 1 - [Getting Started with Microservices Architecture](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-1-getting-started){:target="_blank"}
- Part 2 - [Creating Forex Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-2-forex-microservice){:target="_blank"}
- Part 3 - [Creating Currency Conversion Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-3-currency-conversion-microservice){:target="_blank"}
- Part 4 - [Using Ribbon for Load Balancing](http://www.springboottutorial.com/microservices-with-spring-boot-part-4-ribbon-for-load-balancing){:target="_blank"}
- Current Part - Part 5 - Using Eureka Naming Server

This is part 5 of this series. In this part, we will focus on enabling Eureka Naming Server and have the microservices communicate with it.
 
## You will learn
- What is the need for Naming Server?
- What is Eureka?
- How does Naming Server enable location transparancy between microservices?


## Microservices Overview

In Parts 2 & 3, we created two microservices and established communication between them.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

In Part 4, we used Ribbon to distribute load between the two instances of Forex Service.

However, we are hardcoding the urls of both instances of Forex Service in CCS. 

```
forex-service.ribbon.listOfServers=localhost:8000,localhost:8001
```

That means every time there is a new instance of FS, we would need to change the configuration of CCS. Thats not cool. 

In this part, we will use Eureka Naming Server to fix this problem.

![Image](/images/Spring-Boot-Microservice-6-EurekaNamingServer-Deployment.png "Spring-Boot-Microservice-6-EurekaNamingServer-Deployment")

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-basic-microservice


## Bootstrapping Eureka Naming Server with Spring Initializr

Creating Eureka Naming Server with Spring Initializr is a cake walk. 

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

You can create a wide variety of projects using Spring Initializr.

Following steps have to be done for a Web Services project

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.microservice.eureka.naming.server` as Group
  - Choose `spring-boot-microservice-eureka-naming-server` as Artifact
  - Choose following dependencies
    - Eureka
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

> Do not forget to choose Eureka in the dependencies

## Enabling Eureka

EnableEurekaServer in `SpringBootMicroserviceEurekaNamingServerApplication`.

```
@SpringBootApplication
@EnableEurekaServer
public class SpringBootMicroserviceEurekaNamingServerApplication {
```

Configure the application name and port for the Eureka Server

/spring-boot-microservice-eureka-naming-server/src/main/resources/application.properties

```properties
spring.application.name=netflix-eureka-naming-server
server.port=8761

eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

## Launching Eureka Naming Server

Launch `SpringBootMicroserviceEurekaNamingServerApplication` as a Java application.

You can launch up Eureka at `http://localhost:8761`

You would see that there are no instances yet connect to Eureka.

![Image](/images/Spring-Boot-Microservice-8-LaunchingEurekaServer.png "Spring-Boot-Microservice-8-LaunchingEurekaServer")

## Connect FS and CCS Microservices with Eureka

Make these changes on both the microservices

Add to pom.xml
```
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>

```

Configure Eureka URL in application.properties

```properties
eureka.client.service-url.default-zone=http://localhost:8761/eureka
```

Restart all the instances of CCS and FS. You would see that the CCS and FS microservices are registered with Eureka Naming Server. Thats Cool!
![Image](/images/Spring-Boot-Microservice-9-ConnectCCSandFSToEureka.png "Spring-Boot-Microservice-9-ConnectCCSandFSToEureka")

Screenshot shows how to launch an additional instance of Forex Service on 8081.

![Image](/images/Spring-Boot-Microservice-91-LauchingFSOn8081.png "Spring-Boot-Microservice-91-LauchingFSOn8081")

You would see that one instance of CCS and two instances of FS microservices are registered with Eureka Naming Server.

![Image](/images/Spring-Boot-Microservice-92-TwoinstancesofFSOnEureka.png "Spring-Boot-Microservice-92-TwoinstancesofFSOnEureka")

## Routing Ribbon Requests Through Eureka

All that you would need to do is to remove this configuration

Remove this configuration in application.properties
```
forex-service.ribbon.listOfServers=localhost:8000,localhost:8001
```

Restart the CCS instance. 

## Eureka in Action

Currently we have the following services up and running
- Currency Conversion Micro Service (CCS) on 8100
- Two instances of Forex MicroService on 8000 and 8001
- Eureka Server launched

Now you would see that the requests to CCS would get distributed between the two instances of Forex Microservice by Ribbon through Eureka.

### Request 1
GET to http://localhost:8100/currency-converter-feign/from/EUR/to/INR/quantity/10000

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

### Request 2
GET to http://localhost:8100/currency-converter-feign/from/EUR/to/INR/quantity/10000

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  quantity: 10000,
  totalCalculatedAmount: 750000,
  port: 8001,
}
```

You can see that the port numbers in the two responses are different.

> Exercise : Launch up another instance of Forex Service on 8002. You would see that load gets automatically routed to it as well

Cool! Thats awesome. Isn't it.

## Summary

We have now created two microservices and established communication between them.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

We are using Ribbon to distribute load between the two instances of Forex Service and Eureka as the naming server.

When we launch new instances of Forex Service, you would see that load is automatically distribute to them.

The idea behind these series of 5 articles was to give a flavor of Spring Boot and Spring Cloud with Microservices.

There is a lot more ground to conver with Microservices. Until next time, Cheers!

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-basic-microservice
