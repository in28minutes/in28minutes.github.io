---
layout:     post
title:      Spring Boot Profiles - Application Configuration made easy
date:       2020-07-05 12:31:19
summary:    Different environments have different application configuration. Profiles help you to configure different configuration for different environments. In this tutorial, lets understand how to use Profiles with Spring Boot. Let's learn how to make your Application Configuration simple and dynamic.
categories:  SpringBoot
permalink:  /spring-boot-profiles
---

This guide will introduce you to profiles and help you understand how to use profiles with the various application configuration options that are present in Spring Boot. 
 
## You will learn
- What is application configuration?
- What is a profile?
- How do you define beans for a specific profile?
- How do you create application configuration for a specific profile?
- How do you have different configuration for different environments?

## Free Courses - Learn in 10 Steps

- [FREE 5 DAY CHALLENGE - Learn Spring and Spring Boot](https://links.in28minutes.com/SBT-Page-Top-LearningChallenge-SpringBoot){:target="_blank"}
- [Learn Spring Boot in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-springboot){:target="_blank"}
- [Learn Docker in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-docker){:target="_blank"}
- [Learn Kubernetes in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-k8s){:target="_blank"}
- [Learn AWS in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-aws-beanstalk){:target="_blank"}



## Need for Application Configuration

Configuration for applications vary from one environment to another
- You would want to connect to a different database or queues
- You would want to connect with different services
- You would want to configure less logging in production
- You might want to have different custom configuration

## Need for Profiles

Enterprise application development is complex. You have multiple environments
- Dev
- QA
- Stage
- Production

You want to have different application configuration in each of the environments.

> Profiles help to have different application configuration for different environments. 

Spring and Spring Boot provide features where you can specify
- What is the configuration for various environments in different profiles?
- Set the active profile for a specific environment.

Spring Boot would pick up the application configuration based on the active profile that is set in a specific environment.

## Project Code Structure

Following screen shot shows the structure of the project we will create.
![Image](/images/SpringBootApplicationConfiguration-ProjectStructure.png "Spring Boot Application Configuration Project Structure")

A few details:
- SpringBootTutorialBasicsConfigurationApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application. In this example, a few profile based beans are also created in the Application class.
- `pom.xml` - Contains all the dependencies needed to build this project.
- `BasicConfiguration.java` - We will use this component to define application configuration using @ConfigurationProperties
- `WelcomeResource.java` - Example of a resource using @Value
- `application.properties` - Configuration for application. Active profile is set in application.properties in this example
- `application-dev.properties` - Configuration Overrides for dev profile
- `application-prod.properties` - Configuration Overrides for prod profile

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


### Set up a Quick Example to illustrate Profiles

Lets create a simple resource to expose application configuration using @Value.

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

Value for welcome message can be configured in application.properties.

```
welcome.message=Welcome message from property file! Welcome to in28Minutes
```

When you launch http://localhost:8080/welcome, you would see a page with this message

`Welcome message from property file! Welcome to in28Minutes`


Let's define another simple resource specifying application configuration using `@ConfigurationProperties`.

```
@Component
@ConfigurationProperties("basic")
public class BasicConfiguration {
    private boolean value;
    private String message;
    private int number;

    //GETTERS AND SETTERS
}
```
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

When you browse to http://localhost:8080/dynamic-configuration, you see the following response.

```
{"number":100,"message":"Dynamic Message","key":true}
```

The above example is explained step by step in more detail in the Application Configuration article - http://www.springboottutorial.com/spring-boot-application-configuration

## Using Profiles to configure environment specific configuration

Profile is nothing but a key to identify an environment. 

In this example, we will use two profiles
- dev
- prod

The default application configuration is present in application.properties. Let's consider an example.

application.properties
```
logging.level.org.springframework.web.servlet: DEBUG
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}

basic.value= true
basic.message= Dynamic Message
basic.number= 100
```

We would want to customize the application.properties for DEV profile. We would need to create a file with name application-dev.properties and override the properties that we would want to customize.

application-dev.properties
```
welcome.message=Welcome message from property file! Welcome to ${app.name} in DEV

basic.message: Dynamic Message in DEV
```

Similarly you can configure properties for prod profile.

application-prod.properties
```
welcome.message=Welcome message from property file! Welcome to ${app.name} in Prod

basic.message: Dynamic Message in Prod
```

## Setting Active Profile

Once you have profile specific configuration, you would need to set the active profile in an environment.

There are multiple ways of doing this
 - Using -Dspring.profiles.active=prod in VM Arguments
 - Use `spring.profiles.active=prod` in application.properties

In this example let's set it in application.properties. Lets add another property to application.properties
```
spring.profiles.active=dev
```

When you restart the application, you would see that the dev profile is active.

```
otTutorialBasicsConfigurationApplication : The following profiles are active: dev
```

Look at the response from services

http://localhost:8080/welcome
```
Welcome message from property file! Welcome to in28Minutes in DEV
```

http://localhost:8080/dynamic-configuration
```
{"number":100,"message":"Dynamic Message in DEV","key":true}
```

You can see that the configuration for dev profile is being picked up by Spring Boot.

## Configuring Profile Specific Beans

You can take this one step further and configure profile specific beans that are created only in specific profiles.

Let's add this to `SpringBootTutorialBasicsConfigurationApplication.java`
```
	@Profile("dev")
	@Bean
	public String devBean() {
		return "dev";
	}

	@Profile("qa")
	@Bean
	public String qaBean() {
		return "qa";
	}

	@Profile("prod")
	@Bean
	public String prodBean() {
		return "prod";
	}
```

Using @Profile annotation we can indicate the active profile in which a specific bean should be created.

To test this let's further enhance `SpringBootTutorialBasicsConfigurationApplication`.

Let's print the name of all the beans that are loaded.
```
	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication
				.run(SpringBootTutorialBasicsConfigurationApplication.class, args);

		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}

```

We are currently using dev profile
```
spring.profiles.active=dev
```

When you reload the application, you would see the following in the log
```
devBean 
```

You would see that the devBean is created. However, the beans shown below are not created because those profiles are not active.
```
	@Profile("qa")
	@Bean
	public String qaBean() {
		return "qa";
	}

	@Profile("prod")
	@Bean
	public String prodBean() {
		return "prod";
	}
```




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
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
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
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
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

	@Profile("dev")
	@Bean
	public String devBean() {
		return "dev";
	}

	@Profile("qa")
	@Bean
	public String qaBean() {
		return "qa";
	}

	@Profile("prod")
	@Bean
	public String prodBean() {
		return "prod";
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

### /src/main/resources/application-dev.properties

```properties
welcome.message=Welcome message from property file! Welcome to ${app.name} in DEV
```
---

### /src/main/resources/application-prod.properties

```properties
logging.level.org.springframework: INFO
```
---

### /src/main/resources/application.properties

```properties
spring.profiles.active=dev
logging.level.org.springframework.web.servlet: DEBUG
app.name=in28Minutes
welcome.message=Welcome message from property file! Welcome to ${app.name}

basic.value: true
basic.message: Dynamic Message
basic.number: 100
```
---

### /src/main/resources/application.yaml

```
logging:
 level:
   org.springframework: INFO
   org.springframework.web.servlet: DEBUG
   
basic: 
   value: true
   message: Dynamic Message YAML
   number: 100
```
---

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
