---
layout:  post
title:  Microservices Architectures - Centralized Configuration and Config Server
date:    2019-05-19 12:31:19
summary:  In this article, we explore the concept of centralized configuration, in the context of microservices. 
categories:  SpringBootMicroservices
permalink:  /introduction-to-centralized-configuration-with-spring-cloud-config-server
---

In this article, we explore the concept of centralized configuration, in the context of microservices. 

### You will learn
- What is a Cloud config server?
- What is centralized configuration?
- Why do we need centralized configuration in microservices architectures?
- What are the important features of Spring Cloud Config Server?

### Cloud and Microservices Terminology

This is the second article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}


### Why Centralized Configuration?

When we talk about microservices architecture, we visualize a large number of small microservices talking to each other. The number of microservices depends on the size of the enterprise. 

[![image info](/images/Capture-058-03.png)

The  interesting part is that each of these microservices can have its own configuration. 

Such configuration includes details such as:
* Application configuration
* Database configuration
* Communication Channel Configuration - queues and other infrastructure
* URLs of other microservices to talk to

In addition, each microservice would have a separate configuration for different environments, such as development, qa and production. 

> If maintaining a single configuration for a large application is difficult, imagine maintaining configurations for hundreds of microservice in different environments

### Centralized Config Server To The Rescue

That's where a centralized configuration server steps in. 

Configuration for all microservices (for all environments) is stored at one place - a centralized configuration store. 

When a microservice needs its configuration, it provides an id at launch - a combination of microservice name and the environment. 

The centralize config server looks up the configuration and provides the configuration to the microservice.

> Ensure that the configuration in centralized config server is secured and has role based access.

### Introducing Spring Cloud Config Server

Spring Cloud Config Server is one of the popular implementations of a cloud config server.

Spring Cloud Config Server enables you to store all the configuration for multiple microservices for different environments in a Git or a SVN Repository. A set of folder structures and conventions need to be followed for the setup to work.

![image info](/images/Capture-058-02.png)

A microservice can connect to the config server and identify itself, and also specify the instance it represents. This enables it to get the required configuration. 

The setup ensures that the operations team does not need to take time out to configure the individual microservices on a case-by-case basis. All that they need to worry about is to configure the centralized config server, and start putting relevant configuration into the Git repository.

#### Automatically picking up configuration changes

An interesting feature present with the Spring Cloud Config Server, is auto refresh. 

Whenever a change is committed to the Git repository, configuration in the application is auto-refreshed.

Do check out our video on this:

[![image info](/images/Capture-058-01.png)](https://www.youtube.com/watch?v=IsAzbA-IM98)

### Summary

In this article, we looked at why we need centralized configuration in microservices based applications. We looked at how the Spring Cloud Config Server manages centralized configuration.

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


