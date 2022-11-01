---
layout:  post
title:  What is an Embedded Server? (Spring Boot)
date:    2019-09-05 12:31:19
summary: In this article, we focus in exploring what an embedded server is, and how they help make application deployment simpler.
categories: SwJavaProgrammers
permalink:  /java-programmer-essentials-what-is-an-embedded-server
image: /images/spring-boot-feature.png
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
