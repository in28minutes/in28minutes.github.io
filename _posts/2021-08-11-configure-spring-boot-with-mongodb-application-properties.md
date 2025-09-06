---
layout:     post
title:      Configure Spring Boot application.properties with mongoDB 
date:       2021-08-10 15:00:00
summary:    In this tutorial, we will explain how to Configure Spring Boot application.properties with mongoDB
categories:  Spring_Boot
permalink:  /configure-spring-boot-with-mongodb-application-properties
---

- The Spring Framework is an application framework and inversion of control container for the Java platform. The framework&apos;s core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform.

- MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. 



## Requirements

- Open JDK
- Maven
- mongoDB

## pom.xml

```sh
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

## application.properties



```sh
spring.data.mongodb.authentication-database= in28minutes # authentication database name
spring.data.mongodb.username= debrup # login user of your mongoDB server
spring.data.mongodb.password= root # login password of your mongoDB server
spring.data.mongodb.database= in28minutes_db # name of your database
spring.data.mongodb.port= 27017 # port of mongo server
spring.data.mongodb.host=localhost # host of mongo server
```


Good luck and Happy learning! 

Feel free to share it with your friends/colleagues.

