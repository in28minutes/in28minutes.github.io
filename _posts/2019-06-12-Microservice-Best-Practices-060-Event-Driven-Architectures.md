---
layout:  post
title:  Microservices Architectures - Event Driven Approach
date:    2019-06-08 12:31:19
summary:  In this article, we talk about event driven approach, in the context of microservices architectures. We also discuss what are the advantages of using an event driven approach.
categories:  SpringBootMicroservices
permalink:  /introduction-to-event-driven-architectures-with-microservices
---

In this article, we talk about event driven architectures, in the context of microservices architectures. We also discuss what are the advantages of using an event driven approach.
 
## You will learn
- What is Event Driven Architecture?
- Why do we need Event Driven Architectures?
- What is the relationship between event driven architectures and microservices?
- What are the advantages of Event Driven Architectures?

### Best Practices with Cloud and Microservices

This is the second article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Microservice Best Practice - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Microservice Best Practice - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}

### The Need For Event Driven Architecture

Microservices architectures have multiple small-sized microservices talking to each other. Here is one such architecture:
![image info](/images/Capture-060-02.png)

There are a set of common components - technical as well as infrastructure. Examples of technical components are Security and Logging components. Examples of infrastructure components include Naming Server, API Gateway and Centralized Logging. 

When implementing microservices, you would want to make them as event driven as possible. Why? Let's take an example

### Take A Use Case

Consider the use case of an online shopping application. Whenever there is an order, it is received by the order service. There are several actions that need to be carried out in order service:
- Update the stock
- Send out email and SMS
- Notify the packaging team.

#### Monolithic Approach

An initial approach could be to have a single monolith application to take care of all the functionality. 

#### Microservices Approach

Alternatively, these are fairly independent activities, and the entire application can be structured to have microservices for them, in a straightforward manner.

![image info](/images/Capture-060-03.png)

In this approach, you create an order event for the request coming in, and place it in the Queue. The rest of the individual services listen in to the queue for order events, and do the processing subsequently. 

#### How to choose?

> How do we make the decision which of the two application architectures to choose? 

The nature of your application decides this. 

If your system does not have a very high load at any given time, and also does not have any pressing scalability requirements, then you might want go with a monolith approach.

However, when your system is a large , handling millions of requests every day, and also has very stringent scalability requirements, you might be better off with the microservices approach. 

> An event driven architecture would be the one best suited to your needs. 

### Advantages Of Event Driven Architectures

#### Improved Flexibility And Maintainability

One of the most important needs of an application is maintainability. Ease of maintainability comes with proper **separation of concerns**. 

In our example above, the OrderService is only responsible for collecting the order and placing it in the queue. It does not worry about how it is going to be processed, who is going to process it, and so on. 

Similarly,  the StockService is only responsible for updating the stock, and the same with the other microservices. 

If there is a need for an additional processing step on an order, you write a new microservice to listen on the queue, and easily integrate it into the system. 

Such an architecture is clearly extensible, and also easily maintainable, due to separation of concerns. 

#### High Scalability

Let's consider an example : One fine day, a large volume of emails need to be sent out. 

In that case, you have the freedom to create a large number of instances of the EmailService, to handle additional load. 

A similar thing can be spoken about the other microservices in the mix, depending on the need of the hour. 

This is a clear advantage of this architecture, over using a single component to handle all the functionality. 

#### Improved Availability

Let's say one of the services listening for order events from the queue, such as the PackageService, goes down. 

In the first architecture approach of using a monolithic approach, any one functionality going down would mean the application cannot process orders any more.

In case of an event driven architecture, the PackageService going down would not prevent the OrderService from putting the order event into the Queue. The OrderService can notify the user of successful request receipt. 

A notification request would then be sent to the troubleshooting team about the PackageServer going down, and while it is being restored, the order event remains in the Queue. It can be processed by all the other services during this time, and when PAckageService comes back up, it can process the event as if nothing untoward has happened.

#### Good Reliability

Event driven architectures ensure a good standard of reliability for the system as a whole. However, the individual microservices can function with different levels of reliability. For example the StockService normally needs to ensure a high level of reliability, the EmailService and SMSService a medium level of reliability, and the PackageService - between low and medium levels of reliability.

#### Good Performance and Responsiveness

Note that in our example event driven architecture, all that the OrderService does is receive the order and place it on the queue, before acknowledging the user. The user does not need to wait till all the steps are performed on an order. This has high high responsiveness, and is seen by the user as high performance. 

Do check out our video on this:

[![image info](/images/Capture-060-01.png)](https://www.youtube.com/watch?v=uJ4JFMMbSO8)

### Summary

In this article, we had a look at event driven architectures. We saw that event driven architecture is ideal for implementing applications with high load, and strict scalability needs. 

We saw an example of an online shopping application that employs such an architecture. The advantages of using such an architecture include improved flexibility and maintainability, high scalability, imrpoved availability, good reliability and good performance. 

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

