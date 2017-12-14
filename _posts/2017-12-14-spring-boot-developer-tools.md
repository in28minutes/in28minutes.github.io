---
layout:     post
title:      Spring Boot Developer Tools and Live Reload - Maximize productivity with Hot Swapping
date:       2017-12-14 12:31:19
summary:    When we develop web applications with Java, we had to restart the server to pick up all changes. This kills productivity. Spring Boot Developers Tools provides solutions to automatically pick up changes without a complete server restart. Lets get productive with Spring Boot Developer Tools.
categories: Spring Boot, Developer Tools, DevTools, LiveReload
permalink:  /spring-boot-developer-tools-and-live-reload
---

When we develop web applications with Java, we had to restart the server to pick up all changes. This kills productivity. Spring Boot Developers Tools provides solutions to automatically pick up changes without a complete server restart. Lets get productive with Spring Boot Developer Tools.
 
## You will learn
- How to use Spring Boot Developer Tools?
- What kind of changes does Spring Boot Developer Tools pick up automatically?
- How can you use Live Reload to be more productive?

## Free 10 Step Courses

- [Spring Framework for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-framework-for-beginners){:target="_blank"}
- [Spring Boot for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
- [Spring MVC in 10 Steps](https://www.youtube.com/watch?v=BjNhGaZDr0Y){:target="_blank"}
- [JPA and Hibernate in 10 Steps](https://courses.in28minutes.com/p/jpa-and-hibernate-tutorial-for-beginners-with-spring-boot){:target="_blank"}
- [Eclipse Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/eclipse-tutorial-for-beginners){:target="_blank"}
- [Maven Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/maven-tutorial-for-beginners-in-5-steps){:target="_blank"}
- [JUnit Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/junit-tutorial-for-beginners){:target="_blank"}
- [Mockito Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/mockito-for-beginner-in-5-steps){:target="_blank"}
- [Complete in28Minutes Course Guide](https://courses.in28minutes.com/p/in28minutes-course-guide){:target="_blank"}

## Problem with Server Restarts

When we develop our applications (Web or RESTful API), we would want to be able to test our changes quickly. 

Typically, in the Java world, we need to restart the server to pick up the changes.

> There are plugins like JRebel which help, but you need shell out $$$ for it.

Restarting server takes about 1 to 5 minutes based on the size of the application. A typical developer does 30 - 40 restarts in a day. I leave it as an exercise to determine how much time a developer can save if the changes are automatically picked up as soon as I make a code change.

Thats where Spring Boot Developer Tools comes into picture.

## Adding Spring Boot Developer Tools to Your Project

Adding Spring Boot Developer Tools to your project is very simple.

Add this dependency to your Spring Boot Project pom.xml

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-devtools</artifactId>
	<scope>runtime</scope>
</dependency>
```

Restart the application. 

You are all Set.

Go ahead and make a simple change to your controller. You would see that these changes are automatically picked up.

## What kind of changes does Spring Boot Developer Tools pick up?

> By default, any entry on the classpath that points to a folder  will be monitored for changes.

Here are few important things to note:

These folders will not trigger reload by default
- /META-INF/maven
- /META-INF/resources 
- /resources 
- /static 
- /public 
- /templates 

You can configure additional folders to scan.

application.properties
```
spring.devtools.restart.additional-paths = /path-to-folder
```

You can also configure folders to exclude.

```
spring.devtools.restart.exclude=static/**,public/** 
```

## Auto refresh your browser with LiveReload

Spring Boot Developer Tools auto loads the changes to application. But if you are developing a web application, you would need to refresh the browser to pickup the change.

> LiveReload aims to solve this problem

LiveReload offers extensions for browsers  
- Download from http://livereload.com/extensions/

Once you install the LiveReload plugin for your browser, you would see that the page auto refreshes when you make a change in application code.

> LiveReload is Technology in progress!! So, expect a few problems!


> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}
- [Learn RESTful and SOAP Web Services with Spring Boot](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}
- [Learn Microservices with Spring Boot and Spring Cloud](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}
- [Watch Spring Framework Interview Guide - 200+ Questions & Answers](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SPRINGBOOTTUTRLCOM){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://www.youtube.com/playlist?list=PLBBog2r6uMCRzaJqr-uUC8gakwSxkPSBh){:target="_blank"}
