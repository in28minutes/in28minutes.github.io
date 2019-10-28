---
layout:  post
title:  What is an In Memory Database?
date:    2019-09-06 12:31:19
summary: In this article, we understand what the term "In-Memory Database" actually means. We see what scenarios they can be used, and why they are important.
categories: SwJavaProgrammers
permalink:  /java-programmer-essentials-what-is-an-in-memory-database
---

In this article, we understand what the term "In-Memory Database" actually means. We see what scenarios they can be used, and why they are important.

### You will Learn
- What Is An In-Memory Database?
- Why should you use an In-Memory Database?
- When should you use An In-Memory Database?
- How do in-memory databases help with unit testing?


### Java Programmer Essentials

As we go towards microservices architectures, what should a Java Programmer learn? 

This is the last article in series of six articles on Java Programmer Essentials :
- [1 - Five Languages To Learn as a Java Programmer](/five-great-languages-to-learn-as-a-java-programmer){:target='_blank'}
- [2 - Five Great Frameworks To Try for Java Programmers](/five-frameworks-for-java-programmers){:target='_blank'}
- [3 - Five Tools To Learn as a Java Developer](/five-tools-to-learn-for-java-programmers){:target='_blank'}
- [4 - Java Tools and Frameworks : Introduction To Maven](/java-tools-and-frameworks-introduction-to-maven){:target='_blank'}
- [5 - What is an Embedded Server?](/java-programmer-essentials-what-is-an-embedded-server){:target='_blank'}
- [6 - What is an In Memory Database?](/java-programmer-essentials-what-is-an-in-memory-database){:target='_blank'}



### What Is An In-Memory Database?

Imagine a real world database such as MySQL Server or Oracle. The first step in using one is to install it. The second step would be to create the schemas, and the third involves creating the tables and other definitions. 

With an in-memory database: 
* The step of installing a separate database is done away with. 
* The database now sits inside the running application's memory. 
* The database schema can be automatically created at application startup using a simple script or based on entities configured in case of Spring Data JPA.

In memory databases allow you to focus on building a great prototype and validate business ideas.

Once you have a prototype ready, you can make a switch to a real world database.

### When to use An In-Memory Database?

An in-memory database is of great value when a developer tries to learn a new language or framework. You would prefer to learn the features of the language or a framework, rather than be caught up with configuring a database, or learning how to create a schema.

Switching over to a real database is relatively easy, with a few simple configuration changes. 

Another major advantage of an in-memory database is in unit testing or system testing. You don't want to depend on external resources such as a database, because the information stored in them can change any time. This can lead to tests failing, even with code remaining the same! 

It is much better to launch a database in memory, populate the data, run the tests and verify the results.

An in memory database also provides a great option when you are building prototypes or initial designs.

### Features of in memory databases

An in-memory database typically supports a subset of the SQL language standard. Make sure that it supports all features you want to use. Such a database also offers a browser-based console, such as the following for H2:

![image info](/images/Capture-035-02.png)

When you launch your application, you could also visit the in memory DB console and connect to the application. That would enable you to view the data stored there:

![image info](/images/Capture-035-03.png)

You can see data from various tables.

### Examples Of In-Memory Databases

Popular examples of in-memory databases are 

* H2 : This is the more popular one among others
* HSQL

### Using An In-Memory Database with Spring Boot

If you are developing an application using the Spring Boot framework, then the Spring Initializr web utility makes this very easy for you. You just need to add your in-memory database as a dependency to your configuration:

![image info](/images/Capture-035-05.png)

Notice how we added H2 and JPA as dependencies in our list.

Do check out our video on this:

[![image info](/images/Capture-035-01.png)](https://www.youtube.com/watch?v=7mdZT_yDgCU)

### Summary

In this article, we talked about the need for an in memory database, and how it is good for quick prototyping and learning. We focused on what such a database is, and how it is different from a real world database. We then took the example of H2 and described how to use an in-memory database.Finally, we showed you how easy it is to use an in-memory database, such as H2.

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

