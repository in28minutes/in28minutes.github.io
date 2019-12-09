---
layout:  post
title:  Microservice Architectures - Challenges with building Microservices
date:    2019-05-11 12:31:19
summary: Microservices architectures are very popular today. In this article, we discuss the important challenges in developing a microservices architecture.
categories:  SpringBootMicroservices
permalink:  /microservice-architectures-challenges-with-microservices
---

Microservices architectures are very popular today. In this article, we discuss the important challenges in developing a microservices architecture.
- Identifying Microservice Boundaries - Implementing Bounded Context
- Having Proper Configuration Management
- Implementing Technology for Dynamic Scale Up And Scale Down
- Ensuring High Visibility
- Ensuring High Fault Tolerance

### Introduction to Cloud, Microservice - Challenges and Advantages

This is the fourth article in a series of five articles on cloud and microservices:
- [1 - Microservices Architecutres - Quick introduction to Cloud - Why, What and How?](/introduction-to-cloud){:target='_blank'}
- [2 - Microservice Architectures - Introduction to Spring Cloud](/introduction-to-spring-cloud){:target='_blank'}
- [3 - Microservices Architectures - Advantages Of Microservices](/microservice-architectures-advantages-of-microservices){:target='_blank'}
- [4 - Microservice Architectures - Challenges with building Microservices](/microservice-architectures-challenges-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Microservices vs SOA](/microservice-architectures-soa-vs-microservices){:target='_blank'}

### Identifying Microservice Boundaries - Implementing Bounded Context

We are aware that in a microservices architecture, instead of single big monolith application, we build a number of independent microservices talking with each other:

![image info](images/Capture-066-02.png)

> An important question one faces while designing such a system is, how do we define the boundaries of individual microservices? 

How do you decide what one service does, and what it should not do? 

This is particularly difficult for a new application, as there may not be enough business knowledge to establish the right boundaries. 

The task of deciding the boundaries of microservices is an evolving process. It is not something you necessarily get right the first time. 

It often involves using domain driven design while playing around the functionality of the microservices. As you gain design knowledge, you need to put that knowledge back into the microservices architecture.

The best practices include following domain driven design.

### Having Proper Configuration Management

Configuration management poses quite a stiff challenge in implementing microservices. 

Suppose that in our system, we have a few microservices, each of which has multiple instances in each environment:
![image info](images/Capture-066-03.png)

In a slightly larger system, there could be 10 microservices with 5 environments, and 50 instances at the least. We are talking about tons of configuration  here! 

This will involve a lot of work for the operations team, just to maintain all these configuration. 

Typically, centralized configuration helps you manage configuration.

### Implementing Technology for Dynamic Scale Up And Scale Down

For a microservices architecture, establishing the technology to do dynamic scaling of infrastructure, is a mountain to scale in itself. 

The loads on different microservices could be different, at different instances of time:
![image info](images/Capture-066-03.png)

At a particular point of time, you may need 2 instances of Microservice2. However at a later point in time, that need may go up to 4. Again, it could shoot up to 10 later. In essence, we need to bring up new instances of a microservices when they are in demand, and bring them down when no longer needed.

All this scaling needs to be done with dynamic load balancing. At the point of time shown in the diagram, the load from Microservice1 needs to be distributed among the 4 instances of Microservice2. Later, when there are 10 instances of Microservice2, there needs to be another load redistribution among those 10 instances. 

Building an architecture for this involves a number of technical components - Naming Server, Load Balancers, Monitoring tools to identify whether to scale in or scale out.

### Ensuring High Visibility 

Ensuring visibility is one of the most important challenges that needs to be addressed. 

![image info](images/Capture-066-02.png)

If we say that the functionality of the above system needs to be distributed among 10 microservices, but there is a bug, how do you identify where the bug is? There is clearly a need for a centralized log, where we need to find out what happened with a specific request.

We also need to have effective monitoring across the microservices.

### Ensuring High Fault Tolerance

If not well designed, a microservices architecture can behave like a pack of cards. A microservice at the end of such a chain would be fundamental to the system behaving well.

Therefore, it is very important for you to have sufficient fault tolerance in place, in your system. 

Do check out our video on the same topic:

[![image info](images/Capture-066-01.png)](https://www.youtube.com/watch?v=KGYpmVlIkIw)

### Summary

In this article, we looked at the various challenges that need to be addressed, while designing a microservices architecture. We covered areas such as bounded context, configuration management, dynamic scale up and scale down, visibility and fault tolerance.

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


