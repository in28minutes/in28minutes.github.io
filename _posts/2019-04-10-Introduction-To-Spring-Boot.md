---
layout:  post
title:  Introduction To Spring Boot Framework - A Quick Tutorial for Beginners
date:   2019-04-10 12:31:19
summary: In this article, we understand the basics of Spring Boot framework. We look at the important features of Spring Boot and how it is different from the Spring framework.
categories:  SpringBoot
permalink:  /introduction-to-spring-boot
---

In this article, we understand the basics of Spring Boot framework. We look at the important features of Spring Boot and how it is different from the Spring framework.

## You will learn
- What is Spring Boot?
- What are the problems in developing Spring Based Applications?
- How does Spring Boot help in solving these problems?
- What are important concepts to understand in Spring Boot?
- What are the best practices in using Spring Batch?
- What is Spring Boot Auto Configuration?
- What are Spring Boot Starter Projects?

### What Is Spring Boot?

Here's the official definition of Spring Boot from the Spring Boot Web Site.

> Spring Boot makes it easy to create stand-alone, production-ready Spring-based application that is ready to run. Most Spring Boot applications need very little Spring configuration.  

What does it mean? Let's start with looking at Spring Framework.

### Spring Framework

The core feature of Spring framework is **dependency injection**. Spring alsoe provides great integration with other frameworks, like Hibernate. Spring provides a few frameworks of its own - for example, Spring MVC for developing web applications and REST API.

### Problem with Spring Based Applications

If you look at any Spring-based application, such as a Spring MVC application:

![image info](images/Capture-085-02.png)

You need to configure a lot of components within it:

![image info](images/Capture-085-03.png)

You also end up configuring a data source and a transaction manager: 

![image info](images/Capture-085-04.png)

The configuration story is the same for any Spring-based application. 

### Spring Boot To The Rescue

Spring Boot asks the question: 

> Why do we need to do the exact same thing for every project involving Spring? 

Why not just abstract it away, and help the developer build applications quicker?

#### Spring Boot Auto Configuration

Spring Boot Auto Configuration looks to bring more intelligence into application configuration. 

For example, it looks to build a few patterns, identify what JAR files are available, and looks to auto-configure a lot of the things.

Spring Boot ensures that a developer can build a new Spring project in a few minutes, instead of hours. 

#### Spring Boot And Frameworks

Spring Boot takes care of the typical things you normally do in Sprint 0 of a project. In addition, Spring Boot helps the developer in the following areas:
* Integration with several frameworks
* Configuration management
* Logging
* Transaction management
* Error/Exception handling
* Monitoring and health checks
* Integrating unit testing and mocking frameworks

All we need to do is provide the frameworks that are needed by the application, and Spring Boot magically auto configures them. 

#### Spring Boot And Version Management

Spring Boot also takes the responsibility of managing versions of dependent libraries. 

You just need to migrate to the latest version of Spring Boot, and the corresponding compatible versions of all the frameworks being used are directly available for you. 

### Why Do You Need Spring Boot?

#### Reducing Project Start-up Time

Spring Boot reduces the startup time in creating new projects. You can add frameworks and Spring Boot automatically configures them for you. In the world of microservices, as we create a number of smaller microservices instead of a large monolith, Spring Boot helps us start up projects quickly. 

#### Spring Boot Provides Starter Projects

Spring Boot provides a feature called Starter Projects, which helps you quickly add specific features to your application. Important ones include:
* spring-boot-starter-web-services: Quickly build SOAP Web Services.
* spring-boot-starter-web: Useful to build RESTful web applications, using Spring MVC. It uses Tomcat as the default embedded container.
* spring-boot-starter-test: Used for testing Spring Boot applications, using libraries such as JUnit, Hamcrest, and Mockito.
* spring-boot-starter-hateoas: Useful for building hypermedia-based RESTful web applications, using Spring MVC and Spring HATEOAS.
* spring-boot-starter-jersey: An alternative to string-boot-starter-web. Useful for building RESTful web applications using JAX-RS and Jersey
* spring-boot-starter-security: Useful for using Spring Security
* spring-boot-starter-jpa: Used for Spring data JPA with hibernate
* spring-boot-starter-data-rest: A stater for exposing Spring Data repositories over REST, using Spring Data REST

#### Spring Boot Provides Developer Tools

Spring Boot makes the life of a developer a lot easier by providing important debug and deployment tools. 

Do check out our video on the same topic:

[![image info](images/Capture-085-01.png)](https://www.youtube.com/watch?v=sKdD3wYP9SM)

### Summary

In this article, we had a quick look at the Spring Boot Framework. We saw that the Spring framework is very useful to developers, but Spring projects had a large configuration overhead. Spring Boot adds some intelligence with autoconfiguration. It greatly reduces project startup time and provides easier mechanism - called starter projects - for developing different kinds of applications.

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

