---
layout:     post
title:      Spring Boot Developer Tools and Live Reload - Maximize productivity with Hot Swapping
date:       2022-10-10 12:31:19
summary:    When we develop web applications with Java, we had to restart the server to pick up all changes. This kills productivity. Spring Boot Developers Tools provides solutions to automatically pick up changes without a complete server restart. Lets get productive with Spring Boot Developer Tools.
categories:  SpringBoot
permalink: /spring-boot-developer-tools-and-live-reload
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")

When we develop web applications with Java, we had to restart the server to pick up all changes. This kills productivity. Spring Boot Developers Tools provides solutions to automatically pick up changes without a complete server restart. Lets get productive with Spring Boot Developer Tools.
 
## You will learn
- How to use Spring Boot Developer Tools?
- What kind of changes does Spring Boot Developer Tools pick up automatically?
- How can you use Live Reload to be more productive?



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

