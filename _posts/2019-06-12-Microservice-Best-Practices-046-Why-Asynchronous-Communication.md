---
layout:  post
title: Asynchronous communication with queues and microservices - A perfect combination?
date:    2019-06-12 12:31:19
summary:  In this article, we throw some light on what asynchronous messaging is all about and discuss why you should consider it for your microservices architectures.
categories:  SpringBootMicroservices
permalink:  /asynchronous-communication-with-queues-in-microservices
---

In this article, we throw some light on what asynchronous messaging is all about and discuss why you should consider it for your microservices architectures.

### What you will learn
- What is Asynchronous Communication?
- Why Do We Need Asynchronous Communication?
- How is Asynchronous Communication implemented?
- Why should you consider using Asynchronous Communication for your microservices?

### Best Practices with Cloud and Microservices

This is the last article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Microservice Best Practice - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Microservice Best Practice - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}

### What Is Synchronous Communication?

Consider the following example of a microservices architecture:

![image info](/images/Capture-046-02.png)

You have Microservice1 calling Microservice2, which in turn invokes Microservice3. Suppose that Microservice3 offers a simple web service functionality. So Microservice1 can send it a request for data over HTTP, and get back a response containing the requested data. 

The communication that exists between these two microservices is called **synchronous communication**. Microservice1 sends the request, waits for the data to be returned, and then proceeds. 

#### Drawbacks Of Synchronous Communication

This mode of communication works well when the response arrives almost immediately. However, it puts restrictions on the microservices that are involved. In order that Microservice1 be available, Microservice2 also needs to be available. 

In certain scenarios, synchronous communication might not even be user friendly.

Let's say Microservice2 is down. In that case, the user who submitted the request needs to be intimated about it. You don't always want to do that. In such situations, **asynchronous communication** provides a better alternative. 

### Asynchronous Communication

Have a look at the following application architecture:

![image info](/images/Capture-046-03.png)

In the picture above, we make use of a ZipkinDistributedTracingServer. Different Microservices send logs that are finally consolidated in the Zipkin Tracing Service. Each microservice puts its tracing information into the RabbitMQ message queue. The server processes messages as and when they come into the queue. 

In this architecture, applications communicate through RabbitMQ. CurrencyCalculationService puts its own tracing information into RabbitMQ, and then forgets about it. It does not worry about the responses coming back to it.

Now, what would happen if the ZipkinDistributedTracingServer were to go down? 

The services communicating with it would not worry one bit. They would continue sending messages to the queue. When the server comes back up, it resumes processing the messages present in the queue, and saves them to the database. 

#### Advantages Of Asynchronous Communication

Let's look at a few advantages of asynchronous communication:
* In a system that involves asynchronous messaging, the server does not need to be up and running, all the time. Messages that are put into the message queue can be processed in batches, at a later time.
* Instead of a single instance of the tracing server processing the message queue, you could spawn multiple instances to lighten the load. 
* If you use a modern version of a messaging queue, there is a good chance you get to use a replay feature. This helps in re-processing a message that initially threw an error. 
* Asynchronous communication is great for systems that require **eventual consistency**. 

> Great thing is as long as we fix the errors and reprocess the message, the users of services that initiated the requests with errors do not even need to know about them. 

#### Limitations Of Asynchronous Communication

Asynchronous communication cannot be used 
- If the processing needs to be real-time - if there is a hard constraint on the response time of a certain request. 
Do check out our video on this:

[![image info](/images/Capture-046-01.png)](https://www.youtube.com/watch?v=wCugdNicf-0)

### Summary

In this article, we had a look at what asynchronous communication is all about, We started with a peek at synchronous communication, and saw that it puts constraints on applications and their availability. Asynchronous communication solves the problem by causing services to enqueue requests into a message queue. A server then processes them independently, often in batches.

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


