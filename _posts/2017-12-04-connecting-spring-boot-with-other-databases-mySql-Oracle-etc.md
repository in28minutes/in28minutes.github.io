---
layout:     post
title:   Connecting Spring Boot with databases - MySQL and Oracle
date:       2017-12-04 12:31:19
summary:  Learn how to connect a Spring Boot application with relational databases like Oracle and MySQL. Learn how to setup a database schema for them and also what to configure in application configuration.
categories:  SpringBootJPA
permalink:  /spring-boot-with-mysql-and-oracle
---

This guide will help you understand how to connect Spring Boot with databases like MySql and Oracle.
 
## You will learn
- How to connect Spring Boot, JPA application with MySQL and Oracle?
- What should you configure in application.properties?
- How to setup the database schema?

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

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/course/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.

