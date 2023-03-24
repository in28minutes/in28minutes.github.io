---
layout:     post
title:   Spring Boot and H2 in memory database - Why, What and How?
date:       2023-03-22 12:31:19
summary:  Discover how to link a Spring Boot application to the H2 in-memory database. Learn why in-memory databases are necessary and how to use them effectively with Spring Boot.
categories:  SpringBootJPA
permalink:  /spring-boot-and-h2-in-memory-database
image: /images/spring-data-category.png
---

![Image](/images/spring-initializer-web-h2-devtools-jpa.png "Web, JPA, H2 and Developer Tools")

This article will assist you in comprehending the notion of an in memory database. To learn the recommended practises for utilising in memory databases, we will look at a basic JPA example.

![](/images/h2-solution-image.png)
 
## You will learn
- What is an in memory database?
- Why do you use an in memory database?
- What are the best practices in using an in memory database?
- How to connect a Spring Boot project to H2?


## What exactly is an in memory database?

A typical database requires a significant amount of setup. 

Using Oracle or mySQL databases, for example, you would need to
- Install the Database
- Setup a Schema
- Setup the tables
- Populate the data
- Set up a data source and a bunch of extra code to connect the application to the database.

Case 1: Assume you need to perform a fast proof of concept. Utilizing a standard database incurs significant expense.

Scenario 2 - Consider your unit tests
- You don't want them to fail if the database's data or schema changes.
- You'd want to be able to run them concurrently, as various devs may be running the tests concurrently.

In these situations, an in memory database is the best answer.

As a programme starts, an in memory database is generated, and it is removed when the application is ended.

Advantages
- Zero project setup or infrastructure
- Zero Configuration
- Zero Maintainance
- Easy to use for Learning, POCs and Unit Tests
- Spring Boot has a Simple Configuration option for switching between a real database and an in memory database, such as H2.


## H2

H2 is a well-known in-memory database. Spring Boot provides an excellent interaction with H2.

From https://en.wikipedia.org/wiki/H2_(DBMS)
> H2 is a Java-based relational database management system. It may be integrated in Java programmes or used as a client-server application.

H2 is compatible with a subset of the SQL standard.

H2 also has a web console for database management.

## Spring Boot and H2

Spring Boot application and H2 require very minimal setting.

In most cases, simply including the H2 runtime jar in dependencies should enough.

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

## Creating a Spring Boot Project in H2

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jpa.png "Web, JPA, H2 and Developer Tools")

As seen in the graphic above, the following actions must be taken.

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.rest.example` as Group
  - Choose `spring-boot-2-jpa-with-hibernate-and-h2` as Artifact
  - Choose following dependencies
    - Web
    - JPA
    - H2
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

> Make sure H2 is checked in the dependencies.

Create a straightforward Student Entity with a primary key id.

```java
@Entity
public class Student {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String passportNumber;
```



## H2 - A Few Pointers
- An in-memory database is only active during the application's operation. It is an effective method for learning a framework.
- This is not how your real-world apps should behave.
- In the answer to the question "How do we connect to an external database?" we describe how to connect to a database of your choosing.

## H2 Magic and Spring Boot

To see the data, H2 provides a web interface called H2 Console. Let's activate the h2 console in the app. properties.

/src/main/resources/application.properties
```properties
# Enabling H2 Console
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default
```
> If you launch the programme right now, you'll witness a lot of magic happen!

When you reload the application, you can launch up H2 Console at http://localhost:8080/h2-console.

![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

> Tip - Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

On H2 Console, you will notice that a new table called'student' is generated.

> How did the Student table come to be?

Its because of Spring Boot Auto Configuration. We will talk about this in the next section.

You may alternatively populate the student database with data by including a file called `data.sql`.

/src/main/resources/data.sql

```
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```

When you restart the application, H2 Console will show you that the student table has been populated with the data from `data.sql`
- http://localhost:8080/h2-console.

How did all of the magic take place? In the next part, we'll go over it question by question.

## Frequently asked questions about Spring Boot, JPA, Hibernate and H2

### Q :  How does H2 and Spring Boot combination work?

The first and most crucial fact is that Spring Boot is clever.

When you communicate to an in memory database, it looks at the entities and constructs the database and tables by default.

When you connect to a mysql database, Spring Boot recognises that it is a persistent database. It expects you to set up the database and tables by default, and it uses the connection you setup.

### Q :  How did the Spring Boot Application connect to the database H2?

Spring Boot Auto Configuration is the key!

The first concept you must grasp is Spring Boot Auto Configuration.

Here’s a good read 
- http://www.springboottutorial.com/spring-boot-auto-configuration

When Spring Boot detects H2 in the class path, it automatically configures a data source similar to the one shown below:

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.defer-datasource-initialization=true
```

It recognises that you are using the H2 in-memory database and will use the default url if you do not specify one.


### Q :  Where can I get the database connection information? How does it know to connect to H2 automatically?

That's the power of Spring Boot Auto-configuration.

From https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-auto-configuration.html

> Spring Boot auto-configuration attempts to automatically configure your Spring application based on the jar dependencies that you have added. For example, If HSQLDB is on your classpath, and you have not manually configured any database connection beans, then Spring Boot will auto-configure an in-memory database.

Recommended Reading
- http://www.springboottutorial.com/spring-boot-auto-configuration

### Q :  What happens if H2 is not in the classpath?

You get this error

```
Cannot determine embedded database driver class for database type NONE
```

Add H2 to the pom.xml and Restart your server

```xml
<dependency>
	<groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
	<scope>runtime</scope>
</dependency>
```

### Q :  Why is the data lost between restart?

H2 is a database that runs in memory. This is not a persistent database.

H2 is an excellent learning tool because it requires no setup.

### Error :  Tables are not automatically created in H2 embedded database, or I am unable to see them.

The tables are usually produced, however the URL provided in the H2 GUI Console is incorrect.

Change the database URL in the browser to `jdbc:h2:mem:testdb` (Shown in the screen below).

![](/images/h2-solution-image.png)

You should be good to go!

### Error :  H2 Console is not Launched up?

Try enabling it in the `application.properties`

```
spring.h2.console.enabled=true
```

### Q :  How did the insert query from data.sql run at application startup? 

That's part of the Spring Boot startup routine. Any queries in data.sql are run at application startup. You can read more here. 
- https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html

## Running H2 as a persisted database with Spring Boot

While we do not encourage it, it is worth noting that H2 includes a persistent database mode.
- Even after a spring boot restart and a machine restart, the data is not lost with this arrangement. 

H2 is very very infrequently utilised in this manner. If you're looking for a durable database, we recommend looking into MySQL, Oracle, or another relational database.

`application.properties`
```
spring.datasource.name=yourdbname
spring.datasource.driverClassName=org.h2.Driver
 
spring.datasource.initialize=false
spring.datasource.url=jdbc:h2:file:~/yourdbname;DB_CLOSE_ON_EXIT=FALSE;IFEXISTS=TRUE;DB_CLOSE_DELAY=-1;
 
spring.jpa.hibernate.ddl-auto = update
```

## Using H2 for unit tests 

Application.properties is the standard properties file that Spring Boot automatically takes up when executing an application and is located in the src/main/resources folder.

If we wish to utilise alternative properties for testing, we may override the properties file in the main folder by adding a similar file in src/test/resources.

The standard key-value pairs required for setting an in memory connection should be contained in the application.properties file in the src/test/resources folder.

Then, add the requirements for your database driver (in this case, mysql) and make the h2 dependency `test` scoped.

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
</dependency>

<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>test</scope>
</dependency>
```

For your real code, use the mysql database.

src\main\resources\application.properties
```
spring.jpa.hibernate.ddl-auto=none
spring.datasource.url=jdbc:mysql://localhost:3306/person_example
spring.datasource.username=personuser
spring.datasource.password=YOUR_PASSWORD
```

Use in memory database for your unit tests

src\test\resources\application.properties
```
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1
spring.datasource.username=sa
spring.datasource.password=sa
```
