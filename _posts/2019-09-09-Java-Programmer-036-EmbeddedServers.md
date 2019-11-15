---
layout:  post
title:  What is an Embedded Server?
date:    2019-09-05 12:31:19
summary: In this article, we focus in exploring what an embedded server is, and how they help make application deployment simpler.
categories: SwJavaProgrammers
permalink:  /java-programmer-essentials-what-is-an-embedded-server
---

In this article, we focus in exploring what an embedded server is, and how they help make application deployment simpler.

### You will Learn
- What Is An Embedded Server?
- Why should you use an Embedded Server?
- How do Embedded Server help with simplifying deployment?


### Java Programmer Essentials

As we go towards microservices architectures, what should a Java Programmer learn? 

This is the fifth article in series of six articles on Java Programmer Essentials :
- [1 - Five Languages To Learn as a Java Programmer](/five-great-languages-to-learn-as-a-java-programmer){:target='_blank'}
- [2 - Five Great Frameworks To Try for Java Programmers](/five-frameworks-for-java-programmers){:target='_blank'}
- [3 - Five Tools To Learn as a Java Developer](/five-tools-to-learn-for-java-programmers){:target='_blank'}
- [4 - Java Tools and Frameworks : Introduction To Maven](/java-tools-and-frameworks-introduction-to-maven){:target='_blank'}
- [5 - What is an Embedded Server?](/java-programmer-essentials-what-is-an-embedded-server){:target='_blank'}
- [6 - What is an In Memory Database?](/java-programmer-essentials-what-is-an-in-memory-database){:target='_blank'}



### Why We Need An Embedded Server?

In a typical microservice architecture, there could be hundreds of microservice instances deployed at a given point in time. 

We would like to automate development and deployment of microservices to the maximum extent possible. 

A good approach would be to take the application, wrap it in a container image, and manage it as needed using something like Kubernetes.

For this, the deployment process needs to be very simple.

If you are using a custom version of Tomcat, or WebLogic to deploy your application, then you would need to 
- Install Java 
- Install Web Server
- Deploy application artififact to web server

#### How can we make it simpler? 

An interesting approach would be to make the server a part of your application. In that case, there are just two steps: install the right version of Java, and run the application. 

This is where the concept of an embedded server comes in.

### What Is An Embedded Server?

An embedded server is embedded as part of the deployable application. 

If we talk about Java applications, that would be a JAR. 

The advantage with this is you don't need the server pre-installed in the deployment environment. 

With SpringBoot, the default embedded server is Tomcat. Other options available are Jetty and UnderTow. 

A lot of developers used to working with WAR and EAR files tend to assume that using an embedded server in a JAR is not stable. 

Embedded servers are quite scalable, and can host applications that support millions of users. These are no less scalable than the conventional fat servers.

### Switching To Jetty

By default, the Spring Boot framework uses Tomcat as the embedded server of choice. However, you could override this default setting by specifying certain configuration settings. For instance, if you want to use a Jetty dependency instead, then use an ```<exclusion>``` element in the XML configuration file, and specify a ```<dependency>``` element as well: 

![image info](/images/Capture-036-02.png)

A similar dependency also exists for Undertow.

### Embedded Servers Have High Utility

As a concept, embedded servers might take some time to get used to. These can be used with applications for deployment in high-workload environments, without sacrificing any reliability or stability.

Embedded servers are also quite lightweight. If you look at a conventional WebSphere or Weblogic installation, or even a default Tomcat setup, their install sizes are huge! 

Embedded server images don't generally result in huge archive sizes and helps in building smaller containers.

Do check out our video on this:

[![image info](/images/Capture-036-01.png)](https://www.youtube.com/watch?v=BUP8-YJ-smI)

### Summary

In this article, we talked about the need for embedded servers as a concept. We discussed how an embedded server works, and how it sits inside an application image. We also saw an example with the Spring Boot framework, which uses Tomcat by default, as the embedded server. 
> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>

## Next Steps
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/course/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=OCTOBER-2019){:target="_blank"}

