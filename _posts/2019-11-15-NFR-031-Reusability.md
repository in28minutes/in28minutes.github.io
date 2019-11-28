---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Reusability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Reusability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-Reusability
---

In this article, we explore the important non functional requirement called Reusability. 

### What you will learn
- What Is Reusability?
- Why is Reusability important?
- How do you improve Reusability of your components?

### Non Functional Requirements and Microservices

This is the part of a series of articles on Non Functional Requirements:

- [1 - Microservices Architectures - Non Functional Requirements](/non-functional-requirements-in-microservices-architectures){:target='_blank'}
- [2 - Security](/non-functional-requirements-in-microservices-introduction-to-Security){:target='_blank'}
- [3 - Web Application Security And OWASP - Top Ten Security Flaws](/web-application-security-owasp-top-ten){:target='_blank'}
- [4 - Maintainability](/non-functional-requirements-in-microservices-introduction-to-Maintainability){:target='_blank'}
- [5 - Scalability](/non-functional-requirements-in-microservices-introduction-to-Scalability){:target='_blank'}
- [6 - Performance](/non-functional-requirements-in-microservices-introduction-to-performance){:target='_blank'}
- [7 - Reusability](/non-functional-requirements-in-microservices-introduction-to-Reusability){:target='_blank'}
- [8 - Reliability](/non-functional-requirements-in-microservices-introduction-to-Reliability){:target='_blank'}
- [9 - Modularity](/modularity-non-functional-requirement-in-microservices){:target='_blank'}
- [10 - Availability](/availability-non-functional-requirement-in-microservices){:target='_blank'}
- [11 - Portability](/non-functional-requirements-in-microservices-introduction-to-portability){:target='_blank'}

### What Is Reusability?

Suppose you have worked on a project to create a microservice - Microservice A - and you are now working on a new project - Microservice B. 

Question to ask is:
> How much of the earlier implementation of Microservice A, how many modules and components (technical and infrastructure) can you reuse in the next microservice? 

You would prefer your applications to be built with reusable components, because it avoids unnecessary duplication of code and effort.

### Improving Reusability

The common approach to improving reusability involves one thing - "Build your system in a modular manner". 

Have a look at the following microservice architecture:
![image info](/images/Capture-031-02.png)

Instead of having a single monolith application, system is organized into modules. Over here, we have identified several common components, such as Security and Logging, which have logic that can be used across microservices.

Also visible are several common infrastructure components, such as NamingService, CentralizedLogging and APIGateway. These offer common services to several microservices. 

Once you have such common modules organized, each microservice would only be responsible for its own business logic. That makes it very easy to augment the system by adding new microservices, because there is no need to replicate the common components logic any more. The new service also just needs to manage its own business logic. The functionality of the common component can be **reused**.

#### Reusability at Code Level

You would want to avoid duplication in your code. The best way to ensure good low level design (methods and classes) is to ensure you are following the 4 Principles of Simple Design.
- You have great tests
- Your code is readable
- Your code has minimum duplication
- Your application, components, packages, classes and methods are as small as they can be

### Summary

In this short article, we talked about application reusability as a measure of how much functionality can be reused indifferent scenarios. Reusability can reduce duplication of code and effort. The most suitable way to improve the reusability of an application is to make its design modular.  

Do check out our video on this:

[![image info](/images/Capture-031-01.png)](https://www.youtube.com/watch?v=xfHgYXENDkk)

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
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


