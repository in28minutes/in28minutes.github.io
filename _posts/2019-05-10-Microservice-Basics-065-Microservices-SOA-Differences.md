---
layout:  post
title:  Microservices Architectures - Microservices vs SOA
date:    2019-05-10 12:31:19
summary: Microservices architectures are very popular today. In this article, we take a look at how microservices architectures are different from Service Oriented Architectures (SOA).
categories:  SpringBootMicroservices
permalink:  /microservice-architectures-soa-vs-microservices
---

Microservices architectures are very popular today. In this article, we take a look at how microservices architectures are different from Service Oriented Architectures (SOA).

### Introduction to Cloud, Microservice - Challenges and Advantages

This is the last article in a series of five articles on cloud and microservices:
- [1 - Microservices Architecutres - Quick introduction to Cloud - Why, What and How?](/introduction-to-cloud){:target='_blank'}
- [2 - Microservice Architectures - Introduction to Spring Cloud](/introduction-to-spring-cloud){:target='_blank'}
- [3 - Microservices Architectures - Advantages Of Microservices](/microservice-architectures-advantages-of-microservices){:target='_blank'}
- [4 - Microservice Architectures - Challenges with building Microservices](/microservice-architectures-challenges-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Microservices vs SOA](/microservice-architectures-soa-vs-microservices){:target='_blank'}


### Deployability

Both Microservices and Service Oriented Architectures primarily talk about creating small services. 

Whenever we talk of microservices, we refer to small sized services that are also independently deployable.

![image info](images/Capture-065-02.png)

For example, we should be able to release Microservice1 without affecting the behavior of any of the other microservices. We would be able to take such a microservice to production very quickly. 

The focus of SOA might be on creating independent services, but not exactly independently deployable ones. In SOA, while we focused on API, the deployable units were generally large.

### Thin Pipes v Enterprise System Bus

With the evolution of its architectures, SOA ended up having large Enterprise Service Buses (ESBs). ESBs were introduced to enable loose coupling between SOA components. 

![image info](images/Capture-065-03.png)

In order to implement a new feature in an application, changes are needed both on the application logic, as well as in the enterprise bus. 

The enterprise system bus become a central spoke where a lot of business logic also made its way. Over a period of time, these sucked in a lot of business logic, making the application difficult to maintain. 

Microservices architectures keep minimum logic in the communication infrastructure - thin pipes.

### Tied To XML

SOA was tied to the XML technologies, inheriting its formalities and complexities.

### Governance

With SOA, there is always an centralize architecture team that decides what logic goes into an ESB, and what cannot, among other things.

On the other hand, microservices architectures focuses on having decentralized governance.

### Let's take an example

Consider a banking application. Along with a savings account, a customer gets a debit card for free. An Insurance Savings Account and a Debit Card are different banking products, managed by different product systems.

![image info](images/Capture-065-03.png)

#### SOA

In the SOA architecture, the ESB takes the order from the selling application, and handles the communication with the systems that create the appropriate products. 

The ESB ends up having a lot of business logic, making it top-heavy.

#### Microservices

Typical microservices architecture makes use of an event driven architecture. It makes extensive use of a message queue to ensure reliable communication between different microservices, each having it own responsibility. 

The sales app would create an order event, and put it in the queue. Each of the other services would look at the event, and process it if relevant to them.

Do check out our video on the same topic:

[![image info](images/Capture-065-01.png)](https://www.youtube.com/watch?v=Ng79aeXukDE)

### Summary

In this article, we had a look at the differences between microservices architecture and SOA. We  looked at independent deployability, de-centralized governance, and the event based nature of microservices architectures.

	Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

	<blockquote>
		<H2>Join 300,000 Learners!</H2>
		<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
	</blockquote>


## Spring Boot Courses

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/learn-unit-testing-with-spring-boot/?couponCode=SBT-2019){:target="_blank"}

