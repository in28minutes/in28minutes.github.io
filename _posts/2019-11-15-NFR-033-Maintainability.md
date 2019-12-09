---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Maintainability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Maintainability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-Maintainability
---

In this article, we explore the important non functional requirement called Maintainability. 

### What you will learn
- What Is Maintainability?
- Why is Maintainability important?
- How do you improve Maintainability of your system?

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

### What Is Maintainability?

Requirements for a Software Applications often change. When you develop an application, you want to be able to easily enhance it easily in the future. 

This could also be in the form of providing fixes to important bugs that are detected over time. 

Technically speaking, what we call maintainability is typically two things 
- Maintainability 
- Extensibility

#### Maintainability

Maintainability is all about how easy it is to fix a bug found in the application. 

#### Extensibility

Extensibility of a system describes how easy it is to incorporate new features into it.  

Both these concepts are quite deeply related, and are clubbed together under a single umbrella - maintainability. That's how we address them as well.

### Enhancing Maintainability

The maintainability of an application can be enhanced by following some important guidelines.

#### Have Great Low-Level Design

It is very important for your application have great low-level design, in order to be maintainable. 

Adhering to 4 Principles of Simple Design is a great starting point. 

Test Driven Development (TDD) usually leads to great tests and great low level design. With TDD, you first write tests and then write code to make these tests pass. The code is continuously refactored to meet 4 principles of simple design.

#### Ensure Modular Design

Have a look at the following microservices architecture:

![image info](/images/Capture-033-02.png)

Each of these microservices use common infrastructure components, such as Naming Service and API Gateway. It also makes use the features of common technical components, such as Security and Logging. 

Having common components and infrastructure enable the microservices to focus on their specific responsibilities. 

If Microservice1 has a need for user authentication or authorization, it interacts with the Security component through a well defined interface. Security component takes care of the inner implementation details.

As Microservice1 has lesser things to take care of, it becomes more maintainable. 

In addition, it becomes easier to add additional microservices to the system at a later point in time.

#### Ensure Great Automation Tests

It is important that all the unit, system, integration and API tests are of good quality, and equally important, are automated. Ideally, they need to be part of a Continuous Integration (CI) process, that is invoked whenever code is committed to the source repository. 

The idea is to have immediate feedback on application reliability, while removing the dependency on manual testing.  

#### Automate The Deployment Pipeline

With an automated deployment pipeline, the build moves through different stages such as development, QA, staging and production in a systematic and efficient manner.

#### Greater Visibility

Greater visibility of code across the modules in the system makes it easier to detect bugs, and shorten the time line in addressing them. 

Having great traceability across microservices in a microservices architecture helps us understand what's happening in the background with a specific request
- Which microservices are involved?
- What are the requests and responses?
- How much time was taken at each hop?

[![image info](/images/Capture-033-01.png)](https://www.youtube.com/watch?v=q89zx2VOOvY)

### Summary

In this article, we took a closer look at maintainability. We saw that it is a measure of two things : the amount of effort needed to fix bugs in the system, and the amount of effort needed to incorporate additional features into the application (also called extensibility). 

We then looked at a few ways to enhance the maintainability of an application. The important ones are to have good low-level design, ensure a modular architecture, be equipped with great automation tests, have good system visibility.

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

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


