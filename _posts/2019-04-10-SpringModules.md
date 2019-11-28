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

## 10 Step Reference Courses

- [Spring Framework for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-framework-for-beginners){:target="_blank"}
- [Spring Boot for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
- [Spring MVC in 10 Steps](https://www.youtube.com/watch?v=BjNhGaZDr0Y){:target="_blank"}
- [JPA and Hibernate in 10 Steps](https://courses.in28minutes.com/p/jpa-and-hibernate-tutorial-for-beginners-with-spring-boot){:target="_blank"}
- [Eclipse Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/eclipse-tutorial-for-beginners){:target="_blank"}
- [Maven Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/maven-tutorial-for-beginners-in-5-steps){:target="_blank"}
- [JUnit Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/junit-tutorial-for-beginners){:target="_blank"}
- [Mockito Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/mockito-for-beginner-in-5-steps){:target="_blank"}
- [Complete in28Minutes Course Guide](https://courses.in28minutes.com/p/in28minutes-course-guide){:target="_blank"}

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


