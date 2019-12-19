---
layout:  post
title:  Microservice Architecture Best Practices - Messaging Queues
date:    2019-06-10 12:31:19
summary:  In this article, we discuss why Messaging queues are needed, and how they form the cornerstone of communication in microservices architectures.
categories:  SpringBootMicroservices
permalink:  /messaging-queues-and-asynchronous-communication-in-microservices
---

In this article, we discuss why queues are needed, and how they form the cornerstone of asynchronous communication in microservices architectures.

# What you will learn
- What is a Queue?
- What is asynchronous communication or asynchronous messaging?
- What are the advantages of using Queues in microservices architectures?

### Best Practices with Cloud and Microservices

This is the fourth article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Microservice Best Practice - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Microservice Best Practice - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}

### Why Asynchronous Messaging?

Why is asynchronous messaging important? 

Consider the simple example of an ordering service:

![image info](/images/Capture-050-02.png)

A customer places an order through the OrderService. Let's say following steps are involved:
- It needs to send a request to the StockService 
- Send communication to the user through the EmailService and SMSService 
- Call the PackageService to start delivery

### Option 1 : Single Component for all processing

One way to design this application would be to have a single component that accomplishes all this functionality. For example, write a Java class which accepts the order, and does the entire processing itself. 

### Option 2 : Introducing Asynchronous Messaging using Queues

The other option is to have a queue in-between the receiving OrderService component, and the rest of the components. When the OrderService receives an order, it places the request on the Queue. The rest of the components are independent services, listening on the Queue. 

As soon as an order is placed on the queue:
* The StockService processes the order and updates the database
* The EmailService sends out an email to the customer
* The SMSService sends out an SMS to the user
* The PackageService does the required package processing on the item

### Single Component v Queue

If your business goal is to support a few hundreds or thousands of users, then a simple architecture would be a good choice. The first architecture might be all you need. 

However, when we talk of a large scale e-commerce web application such as Amazon.com, that receives millions of orders in a short time, you need a lot of flexibility. That's when you go for the second approach, of bringing a queue in.

### Advantages of Using A Messaging Queue

Let's look at the advantages of using asynchronous communication based on a messaging queue.

#### A Queue Improves Reliability

Let's say the SMSService is down for a short time. 

In Option 1, since the OrderService directly invokes the SMSService on receiving an order, an SMS cannot be sent out. That might mean canceling the order, as all steps are part of a single transaction. Failure of one of the components would lead to cancellation of the customer request, with a need for him to re-initiate the order - at a later point in time. 

However in the second approach, called **asynchronous** communication, the order request is placed on the queue. When the SMSService comes back up, it will find the order event and process it. It can then send out the SMS messages for all its pending requests.

#### A Queue Provides Scalability

Suppose on a given day, there is a need to send out 100,000 SMS messages. An option with having asynchronous communication is that you can increase the number of instances of the SMSService. This flexibility in number of instances of the components, improves system scalability. 

#### A Queue Improves Testability

Each of the components/services are loosely tied, and have independent requirements. It is thus much easier to test each one of them, preferably in isolation. 

#### A Queue Improves Maintainability

A queue also improves system maintainability, as the application is divided into smaller services.

#### A Queue Improves Flexibility

Not only increase instances of existing services, a queue makes the system flexible to add more services in future. All that you need to do is add a new service listen to events on the queue and consuming them. The new service could be plugged in, with a minimum of down time. 

#### Popular Message Queues

An extremely popular message queue framework is RabbitMQ. 

Different frameworks use different communication protocols, but the concept underlying all of them is the same. At the core, a queue separates the component that generates the event, from the services that consume the event. 

In general, if you need a system that addresses a very large user base, whose users submit a large number of requests to be processed,  go for queue-based systems. 

Do check out our video on this:

[![image info](/images/Capture-050-01.png)](https://www.youtube.com/watch?v=cyXToKjXXQY)

### Summary

In this article, we looked at the fact that there are two types of architectures - synchronous and asynchronous. Synchronous systems have the disadvantage that one component being down, causes loss of service to the entire system. Asynchronous systems solve this problem by introducing an intermediary queue to hold events. An architecture based on asynchronous communication using a queue improves testability, scalability, maintainability and flexibility. 

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


---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---
---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---


