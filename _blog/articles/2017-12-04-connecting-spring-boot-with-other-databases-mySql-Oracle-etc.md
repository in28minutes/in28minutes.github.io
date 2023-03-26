---
layout:     post
title:   Connecting Spring Boot with databases - MySQL and Oracle
date:       2023-03-24 12:31:19
summary:  Discover how to integrate a Spring Boot application with relational databases such as Oracle and MySQL. Discover how to create a database schema for them as well as what to put up in application configuration.
categories:  SpringBootJPA
permalink:  /spring-boot-with-mysql-and-oracle
image: /images/spring-data-category.png
---

![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

This post will show you how to connect Spring Boot to databases such as MySQL and Oracle.
 
## You will learn
- How do I link a Spring Boot and JPA application to MySQL and Oracle?
- What should be set in application.properties?
- How do I create a database schema?



## Step-by-Step Spring Boot Project Update

Let's go over the five steps in connecting a Spring Boot application to a database.

> You can use the example we created earlier for connecting to H2 in memory database as the starting point for this article- http://www.springboottutorial.com/hibernate-jpa-tutorial-with-spring-boot-starter-jpa

### Step 1 - Add dependency for your database connector to pom.xml 

Example for MySQL is shown below.

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>
```

If you wish to connect to an Oracle database, use a dependency like the one shown below.

```xml
<dependency>
    <groupId>com.oracle</groupId>
    <artifactId>ojdbc7</artifactId>
    <version>12.1.0.1</version>
</dependency>

```

### Step 2 - Remove H2 Dependency from pom.xml
Or atleast make its scope as test

```xml
<!--
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>test</scope>
</dependency>
-->
```

### Step 3 - Setup your My SQL Database

We would need to create a schema and tables for your database.

> For an example, check out - https://github.com/in28minutes/jpa-with-hibernate#installing-and-setting-up-mysql

### Step 4 - Setup your database connection.

Connect to your database using `application.properties`.

Below is an example of My SQL:
```properties
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=jdbc:mysql://localhost:3306/todo_example
spring.datasource.username=todouser
spring.datasource.password=YOUR_PASSWORD
```

#### spring.jpa.hibernate.ddl-auto
Spring Boot determines the default value for this based on whether or not you are connecting to an embedded database. 
- Embedded Databases - default create-drop
- Other Databases - default none

Here is a quick guide to all the options
- none : No action will be performed.
- create-only : Database creation will be generated from entities.
- drop : Database dropping will be generated from entities.
- create : Database dropping will be generated followed by database creation.
- validate : Validate entites with the database schema
- update : Update the database schema based on the entities

### Step 5 - Restart, and you're done!
That's it

