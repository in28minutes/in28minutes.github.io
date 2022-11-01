---
layout:     post
title:   Connecting Spring Boot with databases - MySQL and Oracle
date:       2022-07-07 12:31:19
summary:  Learn how to connect a Spring Boot application with relational databases like Oracle and MySQL. Learn how to setup a database schema for them and also what to configure in application configuration.
categories:  SpringBootJPA
permalink:  /spring-boot-with-mysql-and-oracle
image: /images/spring-data-category.png
---

![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

This guide will help you understand how to connect Spring Boot with databases like MySql and Oracle.
 
## You will learn
- How to connect Spring Boot, JPA application with MySQL and Oracle?
- What should you configure in application.properties?
- How to setup the database schema?



## Updating the Spring Boot Project Step By Step

Let's look at the 5 steps involved in connecting a Spring Boot application to a database.

> You can use the example we created earlier for connecting to H2 in memory database as the starting point for this article- http://www.springboottutorial.com/hibernate-jpa-tutorial-with-spring-boot-starter-jpa

### Step 1 - Add dependency for your database connector to pom.xml 

Example for MySQL is shown below.

```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```

If you would want to connect to oracle database, you can use a dependency similar to the one shown below.

```
<dependency>
    <groupId>com.oracle</groupId>
    <artifactId>ojdbc7</artifactId>
    <version>12.1.0.1</version>
</dependency>

```

### Step 2 - Remove H2 Dependency from pom.xml
Or atleast make its scope as test

```
<!--
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>test</scope>
</dependency>
-->
```

### Step 3 - Setup your My SQL Database

We would need to set up your database with a schema and the tables.

> For an example, check out - https://github.com/in28minutes/jpa-with-hibernate#installing-and-setting-up-mysql

### Step 4 - Configure your connection to Your Database

Configure application.properties to connect to your database.

An example for My SQL is shown below:
```
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=jdbc:mysql://localhost:3306/todo_example
spring.datasource.username=todouser
spring.datasource.password=YOUR_PASSWORD
```

#### spring.jpa.hibernate.ddl-auto
Spring Boot chooses a default value for this based on whether you are connecting to an embedded database or not. 
- Embedded Databases - default create-drop
- Other Databases - default none

Here is a quick guide to all the options
- none : No action will be performed.
- create-only : Database creation will be generated from entities.
- drop : Database dropping will be generated from entities.
- create : Database dropping will be generated followed by database creation.
- validate : Validate entites with the database schema
- update : Update the database schema based on the entities

### Step 5 - Restart and You are ready!
That's it

