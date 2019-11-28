---
layout:  post
title:  Microservices Architectures - Introduction to API Gateway
date:    2019-05-20 12:31:19
summary:  In this article, we look at what an API Gateway is, in the context of microservices.
categories:  SpringBootMicroservices
permalink:  /introduction-to-api-gateways-with-microservices
---

In this article, we look at what an API Gateway is, in the context of microservices.

## You will learn
- What is an API Gateway?
- Why do we need API Gateways?
- How does an API Gateway Work?

### Cloud and Microservices Terminology

This is the third article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}


### Handling Cross Cutting Concerns

Whenever we design and develop a large software application, we make use of  a **layered architecture**. For instance, in a web application, it is quite common to see an architecture similar to the following:

![image info](/images/Capture-02-01.png)

Here, we see that the application is organized into a Web layer, a Business layer, and a Data layer. 

In a layered architecture, there are specific parts that are common to all these different layers. Such parts include:
* Logging
* Security
* Performance
* Auditing

All these features are applicable across layers, hence it makes sense to implement them in a common way. 

Aspect Oriented programming is a well established way of handling these concerns. Use of constructs such as filters and interceptors is common while implementing them.

### The Need For API Gateway

When we talk about a microservices architecture, we deal with multiple microservices talking to each other:
![image info](/images/Capture-059-02.png)

Where do you implement all the features that are common across microservices?
- authentication
- logging
- auditing
- rate limiting

That's where the API Gateway comes into the picture.

### How does an API Gateway Work?

In microservices, we route all requests - both internal and external - through API Gateways. We can implement all the common features like authentication, logging, auditing, and rate limiting in the API Gateway. 

For example, you may not want Microservice3 to be called more than 10 times by a particular client. You could do that as part of rate limiting in the API gateway.

You can implement the common features across microservices in the API gateway. A popular API Gateway implementation is Zuul API Gateway.

Do check out our video on this:

[![image info](/images/Capture-059-01.png)](https://www.youtube.com/watch?v=rg7Xkdur-vc)

### Summary

Just like AOP handles cross cutting concerns in standalone applications, the API gateway manages common features for microservices in an enterprise. 

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


