---
layout:  post
title:  Architecture of Spring Framework - Modularity and Spring Modules
date:   2019-04-10 12:31:19
summary: One of the most important features of the Spring framework is its modularity. It is not one big monolith framework. What are Spring Modules? How are they organized? What is the architecture of Spring Framework?
categories:  SpringFramework
permalink:  /spring-framework-architectures-and-modules
---

One of the most important features of the Spring framework is its modularity. It is not one big monolith framework. What is the architecture of Spring Framework? What are Spring Modules? How are they organized?
 
## You will learn
- What is the architecture of Spring Framework?
- How is Spring Framework Modularized?
- What are different Spring Modules?
- Which modules provide which Spring Features like Dependency Injection and Auto wiring?
- How can you develop applications with multiple layers with Spring?

### Spring Framework

This is the fifth article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}


### Spring Architecture and Modules

Let's look at the modules that are present in a typical Spring Project.
![image info](images/Capture-095-02.png)

It is not organized as one big JAR file. It is composed of a large number of smaller JAR files. 

Spring is organized into modules. Here is how Spring is organized conceptually:
![image info](images/Capture-095-03.png)

### Container

This is the most heavily used part of the Spring framework. This includes modules such as:
* Beans: To manage the application dependencies
* Core
* Context: To maintain the application context

### Database Access And Integration

Spring provide excellent options for implementing data and integration layers. 

The important data access modules are:
* **JDBC** : To talk to relational database using JDBC
* **ORM** : Provides good integration with all ORM (Object Relational Mapping) frameworks, such as Hibernate and MyBatis. 
* **JMS** : If you want to talk to another application over a queue, JMS provides an excellent option. Spring has good integration with JMS. 
* **OXM** : This module provides good integration in scenarios where object to XML mappings are required.
* **Transactions** : Transaction management is an important part of data access integration functionality. Ideally, you want the transaction to be fully successful, or completely rolled back. If a transaction has 4 steps and failed at the third step, the previous two successful steps must also be rolled back. Spring has great support for transaction management.

### Web

Spring has very good support to develop your web layer: 
* Spring MVC : It is Spring's own web framework
* Struts : Spring provides good integration with Struts. 

### Cross Cutting Features

An application is typically developed in multiple layers. For example, a web application is often designed to have three layers: web, business and data:

![image info](images/Capture-095-04.png)

There are many things that are applicable to more than one layer. Those are called **cross cutting concerns**. 

#### Unit Testing

One important cross cutting concern is unit testing. We want to be able to unit test code in all the three layers mentioned above. Spring Test framework provides good support for unit testing.

#### AOP

AOP stands for Aspect oriented programming. This module is useful for implementing features such as security and logging. Spring AOP provides basic AOP features.

Spring provides good integration with the AspectJ framework to do advanced AOP.  

Do check out our video on the same topic:

[![image info](images/Capture-095-01.png)](https://www.youtube.com/watch?v=Lbz7yGXe_EM)

### Summary

In this article, we had a brief look at the modular structure of the Spring framework. It is not a single monolith, but is organized as a set of small modules.

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

