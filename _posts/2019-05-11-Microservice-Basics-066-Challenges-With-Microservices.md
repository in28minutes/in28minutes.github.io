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

