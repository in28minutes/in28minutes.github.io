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

> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>


## Next Steps

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/course/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=OCTOBER-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/course/spring-web-services-tutorial/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/course/spring-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/course/spring-boot-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/course/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/course/learn-unit-testing-with-spring-boot/?couponCode=OCTOBER-2019){:target="_blank"}

