---
layout:     post
title:      Spring Boot Tutorial For Beginners in 10 Steps
date:       2020-07-08 12:31:19
summary:    Introduction to Spring Boot in 10 Steps. Learn the basics of Spring Boot setting up a basic project example with Spring Boot.
categories: SpringBoot
permalink:  /spring-boot-introduction-in-10-steps
---

## Spring Boot Goals

- Enable building production ready applications quickly
- Provide common non-functional features 
	- embedded servers
	- metrics
	- health checks
	- externalized configuration

## Free Courses - Learn in 10 Steps

- [FREE 5 DAY CHALLENGE - Learn Spring and Spring Boot](https://links.in28minutes.com/SBT-Page-Top-LearningChallenge-SpringBoot){:target="_blank"}
- [Learn Spring Boot in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-springboot){:target="_blank"}
- [Learn Docker in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-docker){:target="_blank"}
- [Learn Kubernetes in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-k8s){:target="_blank"}
- [Learn AWS in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-aws-beanstalk){:target="_blank"}



## What Spring Boot is NOT!
- ZERO code generation
- Neither an application server nor a web server

## Features
- Quick Starter Projects with Auto Configuration
	- Web
	- JPA
- Embedded Servers 
	- Tomcat, Jetty or Undertow
- Production-ready features
	- metrics and health checks 
	- externalized configuration
 
## URLs
- http://localhost:8080/books => Few hardcoded books 


## Step By Step Details
- Step 1 : Introduction to Spring Boot - Goals and Important Features
- Step 2 : Developing Spring Applications before Spring Boot
- Step 3 : Using Spring Initializr to create a Spring Boot Application
- Step 4 : Creating a Simple REST Controller
- Step 5 : What is Spring Boot Auto Configuration?
	- Recommended Reading - http://www.springboottutorial.com/spring-boot-auto-configuration
	- Spring based applications have a lot of configuration. When we use Spring MVC, we need to configure component scan, dispatcher servlet, a view resolver, web jars(for delivering static content) among other things. When we use Hibernate/JPA, we would need to configure a datasource, an entity manager factory, a transaction manager among a host of other things. Spring Boot brings in new thought process around this - Can we bring more intelligence into this? When a spring mvc jar is added into an application, can we auto configure some beans automatically?
- Step 6 : Spring Boot vs Spring vs Spring MVC
	- Recommended Reading - http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring
	- Spring is about Dependency Injection. It makes it easy to develop loosely coupled applications. It makes applications testable.
	- Spring MVC brings loose coupling to web mvc application development with features like Dispatcher Servlet, View Resolver etc
	- Spring Boot eliminates the need for manual configuration with Spring and Spring MVC. You can use Spring and Spring MVC without needing a lot of configuration. 
	- Spring Boot aims to enable production ready applications in quick time.
		- Actuator : Enables Advanced Monitoring and Tracing of applications.
		- Embedded Server Integrations - Since server is integrated into the application, I would NOT need to have a separate application server installed on the server.
		- Default Error Handling
- Step 7 : Spring Boot Starter Projects - Starter Web and Starter JPA
	- Recommended Reading - http://www.springboottutorial.com/spring-boot-starter-projects
	- Starters are a set of convenient dependency descriptors that you can include in your application. You get a one-stop-shop for all the Spring and related technology that you need, without having to hunt through sample code and copy paste loads of dependency descriptors. For example, if you want to get started using Spring and JPA for database access, just include the spring-boot-starter-data-jpa dependency in your project, and you are good to go.
- Step 8 : Overview of different Spring Boot Starter Projects
	- As we see from Spring Boot Starter Web, starter projects help us in quickly getting started with developing specific types of applications.
	- spring-boot-starter-web-services - SOAP Web Services
	- spring-boot-starter-web - Web & RESTful applications
	- spring-boot-starter-test - Unit testing and Integration Testing
	- spring-boot-starter-jdbc - Traditional JDBC
	- spring-boot-starter-hateoas - Add HATEOAS features to your services
	- spring-boot-starter-security - Authentication and Authorization using Spring Security
	- spring-boot-starter-data-jpa - Spring Data JPA with Hibernate
	- spring-boot-starter-cache - Enabling Spring Framework’s caching support
	- spring-boot-starter-data-rest - Expose Simple REST Services using Spring Data REST
	- spring-boot-starter-actuator - To use advanced features like monitoring & tracing to your application out of the box
	- spring-boot-starter-undertow, spring-boot-starter-jetty, spring-boot-starter-tomcat - To pick your specific choice of Embedded Servlet Container
	- spring-boot-starter-logging - For Logging using logback
	- spring-boot-starter-log4j2 - Logging using Log4j2
- Step 9 : Spring Boot Actuator
	- Spring Boot starter actuator actually exposes a lot of REST services and these services are compliant with the standard called HAL standard. And we would use a hal browser so that we can browse through the data which is provided by these services.Spring Boot Actuator exposes a lot of data -  application info, metrics, dump, beans, env, config properties, audit events, heap dump, loggers, trace, health mappings and auto config.  Actuator provides more metadata about your application. 
- Step 10 : Spring Boot Developer Tools
	- Why do you need to restart your server for every java and jsp change?
	- Spring Boot Developer Tools enables dynamic reloading of modified changes.
- Spring Boot - Conclusion


## Complete Code Example

### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.basics</groupId>
	<artifactId>springboot-in-10-steps</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>springboot-in-10-steps</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.1.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.data</groupId>
			<artifactId>spring-data-rest-hal-browser</artifactId>
		</dependency>

<!-- 
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		 -->
		
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
		</dependency>

	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

	<repositories>
		<repository>
			<id>spring-snapshots</id>
			<name>Spring Snapshots</name>
			<url>https://repo.spring.io/snapshot</url>
			<snapshots>
				<enabled>true</enabled>
			</snapshots>
		</repository>
		<repository>
			<id>spring-milestones</id>
			<name>Spring Milestones</name>
			<url>https://repo.spring.io/milestone</url>
			<snapshots>
				<enabled>false</enabled>
			</snapshots>
		</repository>
	</repositories>

	<pluginRepositories>
		<pluginRepository>
			<id>spring-snapshots</id>
			<name>Spring Snapshots</name>
			<url>https://repo.spring.io/snapshot</url>
			<snapshots>
				<enabled>true</enabled>
			</snapshots>
		</pluginRepository>
		<pluginRepository>
			<id>spring-milestones</id>
			<name>Spring Milestones</name>
			<url>https://repo.spring.io/milestone</url>
			<snapshots>
				<enabled>false</enabled>
			</snapshots>
		</pluginRepository>
	</pluginRepositories>


</project>
```
---

### /src/main/java/com/in28minutes/springboot/basics/springbootin10steps/Book.java

```java
package com.in28minutes.springboot.basics.springbootin10steps;

public class Book {
	long id;
	String name;
	String author;

	public Book(long id, String name, String author) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getAuthor() {
		return author;
	}

	@Override
	public String toString() {
		return String.format("Book [id=%s, name=%s, author=%s]", id, name, author);
	}

}
```
---

### /src/main/java/com/in28minutes/springboot/basics/springbootin10steps/BooksController.java

```java
package com.in28minutes.springboot.basics.springbootin10steps;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksController {
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return Arrays.asList(
				new Book(1l, "Mastering Spring 5.2", "Ranga Karanam"));
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/basics/springbootin10steps/SpringbootIn10StepsApplication.java

```java
package com.in28minutes.springboot.basics.springbootin10steps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringbootIn10StepsApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = 
				SpringApplication.run(SpringbootIn10StepsApplication.class, args);
		
		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}
}
```
---

### /src/main/resources/application.properties

```properties
#logging.level.org.springframework = DEBUG
management.endpoints.web.exposure.include=*
```
---

### /src/test/java/com/in28minutes/springboot/basics/springbootin10steps/SpringbootIn10StepsApplicationTests.java

```java
package com.in28minutes.springboot.basics.springbootin10steps;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringbootIn10StepsApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---
