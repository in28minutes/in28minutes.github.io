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

> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>


## Next Steps

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/learn-unit-testing-with-spring-boot/?couponCode=SBT-2019){:target="_blank"}

