---
layout:  post
title:  What Are Spring Projects?
date:   2019-04-10 12:31:19
summary: There are several important Spring Projects solving the needs of enterprises today. What are Spring Projects and how are they different from Spring Modules?
categories:  SpringBoot
permalink:  /spring-projects-with-examples
---

There are several important Spring Projects solving the needs of enterprises today. What are Spring Projects and how are they different from Spring Modules?
 
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

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


