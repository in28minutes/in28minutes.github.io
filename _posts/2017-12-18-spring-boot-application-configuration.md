---
layout:     post
title:      Application Configuration with Spring Boot
date:       2017-12-18 12:31:19
summary:    Externalizing Application Configuration is a key challenge in developing great Application. Spring Boot provides a variety of options to expose Application Configuration. In this tutorial, we explore the basics of application.properties, @Value and @ConfigurationProperties.
categories: Spring Boot, Application Configuration
permalink:  /spring-boot-application-configuration
---

This guide will introduce you to the various application configuration options that are present in Spring Boot. You will also learn how to create custom configuration for an application. 
 
## You will learn
- What is application configuration?
- Why do we need application configuration?
- What is application.properties?
- What are some of the important things that can customized in application.properties?
- How do you externalize configuration using Spring Boot?
- How can you add custom application properties using Spring Boot?
- What is @ConfigurationProperties?
- What are the advantages of using @ConfigurationProperties?

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

## Need for Application Configuration

Configuration for applications vary from one environment to another
- You would want to connect to a different database or queues
- You would want to connect with different services
- You would want to configure less logging in production
- You might want to have different custom configuration

## Application Configuration with Spring Boot application.properties

Spring Boot allows you to configure your application configuration using a file named `application.properties`

`application.properties` can reside anywhere in the classpath of the application.

In application.properties, we can use the "logging.level" prefix to set logging levels.

```
logging.level.some.package.path=DEBUG
logging.level.some.other.package.path=ERROR
```

You can configure a log file by using logging.file property in application.properties. The logging here would be in addition to the logging in console.

```
logging.file=\path_to\logfile.log
```

You can also configure the port to run the server on using server.port

```
server.port = 9080
```

For complete list of options refer spring documentation - https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html


In this guide, we will create three services using proper URIs and HTTP methods:

## Project Code Structure

Following screenshot shows the structure of the project we will create.
![Image](/images/SpringBootApplicationConfiguration-ProjectStructure.png "Spring Boot Application Configuration Project Structure")

A few details:
- SpringBootTutorialBasicsConfigurationApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project.
- BasicConfiguration.java - We will use this component to define application configuration using @ConfigurationProperties
- WelcomeResource.java - Example of a resource using @Value
- application.properties - Configuration for application

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics-configuration

## Bootstrapping with Spring Initializr

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.tutorial.basics.application.configuration` as Group
  - Choose `spring-boot-tutorial-basics-configuration` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

## Application Configuration using @Value

Let's create a very simple example.

```
@RestController
public class WelcomeResource {

	@Value("${welcome.message}")
	private String welcomeMessage;

	@GetMapping("/welcome")
	public String retrieveWelcomeMessage() {
		// Complex Method
		return welcomeMessage;
	}
}
```

Notes
- `@Value("${welcome.message}") private String welcomeMessage;` - Pick up the value for welcome.message from application configuration and assign it to this member variable.
- `@GetMapping("/welcome") public String retrieveWelcomeMessage()` - Expose a simple service using the configuration

Let's configure a value for welcome message in the application.properties.

```
welcome.message=Welcome message from property file! Welcome to in28Minutes
```

When you launch http://localhost:8080/welcome, you would see a page with this message

`Welcome message from property file! Welcome to in28Minutes`

We can make the application.properties more creative by using other properties as variables too.

```
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}

```

Spring Boot provides different ways of configuring your property values.
- You can send in a program argument 
   - --welcome.message="SomethingElse"
- You can use a different file as property file 
   - --spring.config.location=classpath:/default.properties
- You can configure an environment variable

@Value is the basic approach for application configuration using Spring.

## Application Configuration using Type-safe Configuration Properties

The problem with @Value is that you would have your configuration values distributed through out your application. A better option would be to have a centralized approach. 

You can define a configuration component using `@ConfigurationProperties`.

```
@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
    private boolean value;
    private String message;
    private int number;

    public boolean isValue() {
        return value;
    }

    public void setValue(boolean value) {
        this.value = value;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

}
```

Notes:
- `@Component @ConfigurationProperties("basic")` - Defines that this java bean contains configuration properties. All property names will start with `basic.`.
- `private boolean value`  - A boolean value. Can be configured as basic.value.
- `private String message` - A String value. Can be configured as basic.message.

We would need to use the BasicConfiguration in a service to expose the values

```
@Autowired
private BasicConfiguration configuration;

@RequestMapping("/dynamic-configuration")
public Map dynamicConfiguration() {
    // Not the best practice to use a map to store differnt types!
    Map map = new HashMap();
    map.put("message", configuration.getMessage());
    map.put("number", configuration.getNumber());
    map.put("key", configuration.isValue());
    return map;
}

```

Notes
- `@Autowired private BasicConfiguration configuration` - Its very easy to use BasicConfiguration. Autowire it in when ever you need the value for a property from it.
- `@RequestMapping("/dynamic-configuration") public Map dynamicConfiguration() {` - Define a simple service to expose the configured values.

The values can be configured in application.properties
```
basic.value: true
basic.message: Dynamic Message
basic.number: 100
```

When you browse to http://localhost:8080/dynamic-configuration, you see the following response.

```
{"number":100,"message":"Dynamic Message","key":true}
```

### Understand Type Safety

@ConfigurationProperties is type safe. If you configure any property with a value of an invalid type, the application fails at startup.

Below snippet shows the log when basic.number is assigned a non numberic value.
```
***************************
APPLICATION FAILED TO START
***************************

Description:

Binding to target com.in28minutes.springboot.configuration.BasicConfiguration@391b8545 failed:

    Property: basic.number
    Value: ABC
    Reason: Failed to convert property value of type [java.lang.String] to required type [int] for property 'number'; nested exception is org.springframework.core.convert.ConverterNotFoundException: No converter found capable of converting from type [java.lang.String] to type [int]


Action:

Update your application's configuration

```

> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}
- [Learn RESTful and SOAP Web Services with Spring Boot](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBTWEBSITE){:target="_blank"}
- [Learn Microservices with Spring Boot and Spring Cloud](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBTWEBSITE){:target="_blank"}
- [Watch Spring Framework Interview Guide - 200+ Questions & Answers](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBTWEBSITE){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.tutorial.basics.application.configuration</groupId>
	<artifactId>spring-boot-tutorial-basics-configuration</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-boot-tutorial-basics-configuration</name>
	<description>Spring Boot Tutorial - Application Configuration with Profiles and YAML</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.0.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
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

### /src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/BasicConfiguration.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
	private boolean value;
	private String message;
	private int number;

	public boolean isValue() {
		return value;
	}

	public void setValue(boolean value) {
		this.value = value;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

}
```
---

### /src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/SpringBootTutorialBasicsConfigurationApplication.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class SpringBootTutorialBasicsConfigurationApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication
				.run(SpringBootTutorialBasicsConfigurationApplication.class, args);

		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/tutorial/basics/application/configuration/WelcomeResource.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeResource {

	@Value("${welcome.message}")
	private String welcomeMessage;

	@GetMapping("/welcome")
	public String retrieveWelcomeMessage() {
		// Complex Method
		return welcomeMessage;
	}

	@Autowired
	private BasicConfiguration configuration;

	@RequestMapping("/dynamic-configuration")
	public Map<String, Object> dynamicConfiguration() {
		// Not the best practice to use a map to store differnt types!
		Map<String, Object> map = new HashMap<>();
		map.put("message", configuration.getMessage());
		map.put("number", configuration.getNumber());
		map.put("key", configuration.isValue());
		return map;
	}
}
```
---


### /src/main/resources/application.properties

```properties
logging.level.org.springframework.web.servlet: DEBUG
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}

basic.value: true
basic.message: Dynamic Message
basic.number: 100
```

### /src/test/java/com/in28minutes/springboot/tutorial/basics/application/configuration/SpringBootTutorialBasicsConfigurationApplicationTests.java

```java
package com.in28minutes.springboot.tutorial.basics.application.configuration;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootTutorialBasicsConfigurationApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---
