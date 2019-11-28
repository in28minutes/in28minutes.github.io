---
layout:  post
title: Microservices Architectures - Non Functional Requirements
date:    2019-11-14 12:31:19
summary: In this article, we focus on the most important non functional requirements and why there are needed.
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-architectures
---

In this article, we explore the important non functional requirement called Portability. 

### What you will learn
- What are non functional requirements?
- Why are non functional requirements important?
- What are the different kinds of non functional requirements?
- How do you ensure that you adhere to non functional requirements?
- What are the best practices in implementing non functional requirements?

### Non Functional Requirements and Microservices

This is the first article in a series of articles on Non Functional Requirements:

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



# What are Non Functional Requirements?

In this article, we focus on the most important non functional requirements and why there are needed.

### What Are Non Functional Requirements?

Whenever you talk to a user who needs a web interface, he will mainly describe what needs to happen when the page loads, what it needs to look like, and what should happen when a button on it is clicked. These are the application's **functional requirements**. 

There is also one other set of requirements that users might not typically specify. For instance:
* You need to page to load up within 2 seconds (Performance)
* You require the application to support up to 100,000 concurrent users (Scalability)
* It should be easy to extend the functionality of the application (Maintainability)

There come under the category of **non functional requirements**. 

As a developer, it is very important that you give due attention to these as well. 

### Categories Of Non Functional Requirements

Following are some of the important non functional requirements:
* Authentication & Authorization
* Performance
* Scalability
* Availability
* Resilience
* Maintainability
* Portability
* Security

### Adhering To Best Practices

It is important to adhere to a few best practices, when it comes to implementing the non functional requirements. Here is a list of the most important practices.

* Have clearly stated non functional requirements
* Build vertical slices wherever possible, with a view to eliminating non functional risks such as scalability and performance.
* Make sure that the framework used in your application is able to withstand a particular load.
* Check for compliance to security requirements right from the project inception stage.
* Perform static analysis of the code right from project inception.
* Use Secure Code static analysis tools right from the start of the project.

Do check out our video on this:

[![image info](/images/Capture-040-01.png)](https://www.youtube.com/watch?v=InXlzJjwgYw)

### Summary

In this article, we discovered what non functional requirements are, and how they are different from the functional requirements. We had a brief look at the types of non functional requirements. Finally, we had a glimpse of the best practices to follow while implementing these requirements.

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


