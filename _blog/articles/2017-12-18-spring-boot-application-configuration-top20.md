---
layout:     post
title:      Application Configuration with Spring Boot
date:       2022-07-05 12:31:19
summary:    Externalizing Application Configuration is a key challenge in developing great Application. Spring Boot provides a variety of options to expose Application Configuration. In this tutorial, we explore the basics of application.properties, @Value and @ConfigurationProperties.
categories:  SpringBoot
permalink:  /spring-boot-application-configuration
image: /images/spring-boot-feature.png
---

This guide will introduce you to the various application configuration options that are present in Spring Boot. You will also learn how to create custom configuration for an application. 

![Image](/images/SpringBootApplicationConfiguration-ProjectStructure.png "Spring Boot Application Configuration Project Structure")
 
## You will learn
- What is application configuration?
- Why do we need application configuration?
- What is application.properties?
- What are some of the important things that can customized in application.properties?
- How do you externalize configuration using Spring Boot?
- How can you add custom application properties using Spring Boot?
- What is @ConfigurationProperties?
- What are the advantages of using @ConfigurationProperties?



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
- `BasicConfiguration.java` - We will use this component to define application configuration using @ConfigurationProperties
- `WelcomeResource.java` - Example of a resource using @Value
- `application.properties` - Configuration for application

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



## Complete Code Example


Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics-configuration