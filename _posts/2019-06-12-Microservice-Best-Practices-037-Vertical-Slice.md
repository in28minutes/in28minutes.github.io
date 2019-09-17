---
layout:  post
title:  Microservice Best Practice - Why do you build a Vertical Slice?
date:    2019-06-09 12:31:19
summary:  In this article, we look at what is a vertical slice, and why we build it. We also discuss the best practices involved in building vertical slices.
categories:  SpringBootMicroservices
permalink:  /software-best-practices-building-a-vertical-slice
---
In this article, we look at what is a vertical slice, and why we build it. We also discuss the best practices involved in building vertical slices.

### What you will learn
- What is an vertical slice?
- When do you build a vertical slice?
- What are the advantages in building a vertical slice?
- What are the best practices in building a vertical slice?

### Best Practices with Cloud and Microservices

This is the third article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Microservice Best Practice - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Microservice Best Practice - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}

### Need For A Vertical Slice

Let's say you want to start off writing a new microservice, or developing any new application. There are several technical risks that need to be addressed , such as deciding what framework to use, identifying the layers of the architecture, figuring out communication with other systems, and so on. 

You want to make sure you have great unit tests in place, and also have a good continuous integration and deployment system to process the builds.

How do we address these challenges?

### What Is A Vertical Slice?

A vertical slice involves selecting one or more of the complex or risky use cases of the systems, and implementing them first. 

Typically, this involves addressing all the risks listed above - selecting the right framework, organizing into layers, handling communication properly, having great tests in place, and following a CI/CD process. 

You will also deploy and test it to make sure all requirements are met.

### Benefits Of A Vertical Slice

A vertical slice will help you identify and solve technology risk faster. Once a vertical slice is built well, adhering to coding and other standards, it could also act as a reference point for other developers in your team.

### Best Practices

Lets quickly look at a few best practices around building vertical slices:

#### Ensure Static Analysis

Make sure that a tool to perform static analysis of your code is in place during the development of the vertical slice. Also make sure development adheres to all relevant best practices.

#### Ensure Continuous Integration

It is very important you have a continuous integration process in place, to take the vertical slice build through development, QA, staging and deployment.

#### Address Technical Training Issues

If the vertical slice is well implemented, it acts as a good reference point. This means that the development team can be trained using the vertical slice as a case study. 

### Challenges

It is very important that care be shown in selecting the use case for your vertical slice. Make sure that you choose a sufficiently complex use case, because you need to explore how the various technical risks will be addressed.

Do check out our video on this:

[![image info](/images/Capture-037-01.png)](https://www.youtube.com/watch?v=fk4itQzBsEE)

### Summary

In this article, we had a look at what are the technical risks involved in starting application development. We then saw how creating a vertical slice, using a complex use case, helps in exploring solutions to these risks, and acts as a reference point for the development team. We explored the best practices for creating a vertical slice, and looked at the challenges involved. 

> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>


## Next Steps

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

