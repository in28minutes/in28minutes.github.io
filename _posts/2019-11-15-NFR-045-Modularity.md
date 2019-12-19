---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Modularity
date:  2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Modularity. 
categories: SwArchitecture
permalink:  /modularity-non-functional-requirement-in-microservices
---

In this article, we explore the important non functional requirement called Modularity. 

### What you will learn

- What Is Modularity?
- Why is Modularity important?
- How can you build more Modular systems?

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


### What Is Modularity?

What you are looking at is an instance of a microservices architecture:

![image info](/images/Capture-045-02.png)

How would you build such a system? 

A decade back, the entire functionality of what you see in the picture, would be provided by a single monolith application.

As we moved on from monolith to service-oriented to microservices architecture, we build more modular applications. 

We focus on identifying multiple microservices, common components that have well defined interfaces, and common infrastructure components that are the building blocks of the application's technical capabilities. This is what is called a **modular architecture**. 

Modularity applies at multiple levels:
- How do you architect your applications?
- How do you design your components?
- How do you design your classes?

### What is Separation of Concerns?

The cornerstone of modular architecture is **separation of concerns**. 

> This involves identifying a functionality that can be handled separately, and defining an application, a component, a package or a class  to do it. 

For example, the security component handles the low-level details of user authentication and authorization. These include the specifics of how user credentials are stored, how user's access related information is stored, and the like. 

Security component provides a well-defined, consistent interface. When a microservice needs to authenticate the user, it would send a request to the security component. The microservice will not need to worry about how the authentication is done.

While implementing modularity, you try and create components with separate responsibilities. This makes reusing the components and creating new microservices easy. 

### Building reusable components

Let's look at an example.

Suppose Microservice1 wants to check of the user has provided the right credentials, and whether he has access to a particular resource. It clearly needs to make use of the Security component. If it finds the need to log a message, it makes use of the Logging component. If Microservice1 wants to find out where Microservice3 is deployed, it submits a query to the NamingServer infrastructure component. The component in turn, provides a response with the location. 

There are essentially two kinds of components:
- Common Utility Components and Frameworks : There are very technical in nature, each of them being implemented as separate modules. In Java applications, these would be JARs. Microservice1 would call methods in the JARs and use their functionality. 
- Infrastructure Common Components : These are independently deployable common applications - Naming Servers, API Gateways etc.

> The term component is used to describe a part of the application, that is independently reusable. 

Do check out our video on this:

[![image info](/images/Capture-045-01.png)](https://www.youtube.com/watch?v=v-0ClsJ5UcI)

### Summary

In this article, we explored the meaning of the term modularity, when applied to application architecture. We saw that modern microservices implement something separation of concern, to achieve modularity. They do this by identifying and extracting out functionality into common components, both technical and infrastructure. These components have well defined interfaces, and makes the addition of new microservices to the application, relatively easy. 

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
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---


