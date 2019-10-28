---
layout:  post
title:  Microservices Architecutres - Quick introduction to Cloud - Why, What and How?
date:    2019-05-08 12:31:19
summary:  In this article, we focus our attention on the cloud. Why do we need the cloud?
categories:  SpringBootMicroservices
permalink:  /introduction-to-cloud
---

In this article, we focus our attention on the cloud. Why do we need the cloud?

## You will learn
- What is Cloud?
- Why do we need the Cloud?
- How does cloud provide auto scaling?
- What are the advantages of Cloud?
- What are the challenges with Cloud?

### Introduction to Cloud, Microservice - Challenges and Advantages

This is the first article in a series of five articles on cloud and microservices:
- [1 - Microservices Architecutres - Quick introduction to Cloud - Why, What and How?](/introduction-to-cloud){:target='_blank'}
- [2 - Microservice Architectures - Introduction to Spring Cloud](/introduction-to-spring-cloud){:target='_blank'}
- [3 - Microservices Architectures - Advantages Of Microservices](/microservice-architectures-advantages-of-microservices){:target='_blank'}
- [4 - Microservice Architectures - Challenges with building Microservices](/microservice-architectures-challenges-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Microservices vs SOA](/microservice-architectures-soa-vs-microservices){:target='_blank'}


### The Need For The Cloud

Loads on applications is not consistent throughout the year:
- Consider a startup company, which could have a potential to grow very fast.
- Imagine an online shopping portal, whose customer load varies throughout the year. 
- Other online business portals, such the insurance sector, which have peak load at a particular time of the year, and very little load during other times.

> If you provision your infrastructure to be able to handle the peak system lead, what would that infrastructure be doing the rest of the time? 

Most of it would just be sitting idle, watching the fun. 

That is exactly the problem cloud wants to solve.

Cloud intends to make it easy to provision infrastructure when you need, and just as easy to release it when you don't. This feature of the cloud has created a lot of buzz around it, over the last decade or so.  

### Building Applications For The Cloud

The thing is, you cannot take any application and just put it on the cloud. 

> A lot of things need to be right, in order to make an application cloud-enabled. They are known as **cloud-native applications**. 

There are best practices in place to develop such cloud-native applications, also known as the twelve-factor apps. We discuss those in a seperate article.

#### Advantages Of The Cloud

##### Auto Scaling and Agility

There is no longer a need to statically provision infrastructure to ensure availability for peak loads. You can do that on-demand.

##### Cost Reduction

There are significant cost reductions with using infrastructure from the cloud, because you only use what you need for the duration you need them.

##### Scalability And Elasticity

When applications are built well, they can auto scale based on the load.

##### Reliability 

Since your applications are cloud-enabled, they are designed to withstand certain kinds of outages. For example, applications with microservices architecture have fault-tolerance built into them. 

### Migrating Applications To The Cloud

It is not very straightforward to migrate your application to be cloud-enabled. 

The first step is to make them cloud-native. The next decision to make is choosing a platform to migrate the application to. You generally have choice of platforms to migrate to, such as Microsoft Azure, AWS and Google Cloud, among others.

### Best Practices

The best practices listed for making applications cloud-native are often termed as **12 factor apps**. These capture the experiences of Heroku, with developing cloud enabled applications. 

### Challenges With Developing Cloud Applications

#### Security

Security is a major concern, as the infrastructure is not what you own, and it can be dynamically acquired and released. 

#### Application Compatibility

Most applications are not compatible with the cloud. Applications have to enhanced to make them cloud native.

### Manifestations Of Cloud

#### IaaS

Infrastructure as a service is the first level of cloud. Cloud provider only provides the hardware needed to run applications.

#### PaaS 

Platform of service is the next level of cloud, where the cloud provider provides you a platform - an operating system or managed software (databases, programming languages, web application platforms) - on top of the hardware. 

#### SaaS

Software as a Service is the third level of cloud, where the cloud provider offers a software product on the cloud - like Google Docs.

Do check out our video on this:

[![image info](/images/Capture-056-01.png)](https://www.youtube.com/watch?v=rxTNUw0wp-U)

### Summary

In this article, we had a good look at the cloud. We saw that a cloud helps ease the infrastructure management of online businesses by making provisioning dynamic. A cloud could be public, or private. Using a cloud has many advantages to offer, such as agility, cost reduction and reliability.

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

