---
layout:  post
title:  Spring Profile - Quick Tutorial for Beginners
date:   2019-04-10 12:31:19
summary: When we develop applications, we would want to be able to provide different application configuration in different environments? How do you achieve it with Profiles?
categories:  SpringBoot
permalink:  /spring-boot-profiles
---

When we develop applications, we would want to be able to provide different application configuration in different environments? How do you achieve it with Profiles?

## You will learn

- What is a Profile?
- How do you provide different application configuration in different environments using Profiles?
- How do you activate beans based on Profiles?
- What is the default profiles with Spring Boot?


### What Is A Profile?

When we create an application, we need to deploy it in different kinds of environments, such as development, QA, staging and production. 

The application configuration in each of these environments will be different. 

One of the approaches to handling application configuration is to create something called a **profile**. Spring Boot has the concept of a profile built in. 

> A Profile answers the question of *"How to have different configurations in different environments?"* 

### Spring Boot Profiles 

You can define default configuration in application.properties. Environment specific overrides can be configured in specific files:
* application-dev.properties
* application-qa.properties
* application-stage.properties
* application-prod.properties

### Setting A Spring Boot Profile


Here are a couple of ways of setting the active profile:
* At the time of launching the Java application 
	- ```-Dspring.profiles.active=qa``` - in the VM properties, OR
* Do the following in the application.properties file 
	- ```spring.application.profiles=qa```.

Depending on which profile is currently the active, the appropriate configuration is picked up. 

### Using Profiles In Code

A profile can be used in code to define your beans. For example, have a look at the following piece of code:

```java

	@Profile("dev")
	@Bean
	public String devBean() {
		return "I will be available in profile dev";
	}

	@Profile("prod")
	@Bean
	public String prodBean() {
		return "I will be available in profile prod";
	}

``` 

The bean ```devBean()``` will only be available with the ```dev``` profile, as it has been annotated with ```@Profile("dev")```. Similarly, the bean ```prodBean()``` is only available with the profile ```prod```.

Do check out our video on the same topic:

[![image info](images/Capture-097-01.png)](https://www.youtube.com/watch?v=XXCNe4HiLYI)

### Summary

Spring Boot Profiles provides a simple option to have environment specific configuration.

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
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


