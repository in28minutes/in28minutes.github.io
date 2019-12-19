---
layout:  post
title:  Microservices Architectures - Non Functional Requirements - Availability
date:    2019-11-14 12:31:19
summary:  In this article, we explore an important non functional requirement called Availability. 
categories: SwArchitecture
permalink:  /availability-non-functional-requirement-in-microservices
---

In this article, we explore an important non functional requirement called Availability. 

### What you will learn

- What Is Availability?
- Why is Availability important?
- How can you build more available systems?

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


### What Is Availability?

Conceptually, availability is easy to understand. Suppose you wanted to access a website but you found that it is down. That is an indication of low availability of the website. 

> **Availability** is a measure of how frequently your system provides the desired functionality, to your users. 

Typically, you want a 99.9999% or 100% availability for your system. Actually, this might not be true. 

Depending on the category of an application, there might be different needs for its availability. If it is an internal application to be used within an enterprise, then it might not be needed beyond office hours.

For most system that are available over the internet, the availability needs are quite high. 

### Improving Availability

Consider the following system with a microservices architecture:

![image info](/images/Capture-047-02.png)

How would you go about improving the availability of this system?

#### Modularity Improves Availability

Microservice architectures have high modularity. We don't build such a system as a monolith. Instead, we break it down in to smaller components (technical and infrastructure), each of which provides a well defined interface. 

Each of them is also independently deployable. Such applications will not be very bulky, nor will they need to access huge databases. That is a good head-start in giving the system high availability, since common bottlenecks are removed.

#### Redundancy Improves Availability

In the application example above, having multiple instances of each of Microservice1, Microservice2 and Microservice3 helps improve service availability to users. 

Not just the microservices, redundancy at other levels is beneficial too. Having multiple instances of the Infrastructure components such as the NamingServer and APIGateway improves availability. 

The key to high availability is to eliminate single points of failure. Ensure that all your infrastructure components have enough redundancy built in.

#### Monitoring Improves Availability

If an API Gateway goes down, you should NOT get to know of it from your users. 

If Microservice1 crashes for some reason, you should know of it first through your internal automated mechanisms. 

There needs to a facility for monitoring each of the microservices and components in the system. 

On any instance of failure, the operations team needs to be alerted by some mechanism, for diagnosis and recovery. 

Do check out our video on this:

[![image info](/images/Capture-047-01.png)](https://www.youtube.com/watch?v=R3j0Z1c-0qY)

### Summary

In this video, we talked about the availability of an application. Availability measures how frequently the system provides the desired service, to all the users. We took the example of a microservice architecture to describe how you can improve availability.

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

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---




