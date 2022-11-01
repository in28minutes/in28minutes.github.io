---
layout:  post
title:  Spring Profile - Quick Tutorial for Beginners
date:   2019-04-10 12:31:19
summary: When we develop applications, we would want to be able to provide different application configuration in different environments? How do you achieve it with Profiles?
categories:  SpringBoot
permalink:  /spring-boot-profiles-tutorial
image: /images/spring-boot-feature.png
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