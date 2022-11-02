---
layout:     post
title:      Java Annotation and XML Bean Configurations with Spring Boot
date:       2022-07-06 12:31:19
summary:    Spring allows you to configure your beans using Java Annotations and XML definitions. In this guide, we will explore how to use XML and Java Annotations to configure your beans with Spring Boot. We will understand how to load these configurations into a Spring Application Context. 
categories:  SpringFramework
permalink:  /spring-boot-java-xml-context-configuration
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

Spring allows you to configure your beans using Java and XML. In this guide, we will explore how to use XML and Java Configurations with Spring Boot. We will understand how to load these configurations into a Spring Application Context. 

![Image](/images/SpringBootXMLAndJavaApplicationContext-ProjectStructure.png "SpringBootXMLAndJavaApplicationContext-ProjectStructure") 


## You will learn
- How to define a Java bean configuration in a Spring Application?
- How to define a XML bean configuration in a Spring Application?
- How to load a XML Bean Configuration file into a Spring Application context?
- How to load a Java Annotation based Bean Configuration file into a Spring Application context?
- What are the best practices in using XML and Java bean configurations?
- How do you choose between XML and Java Bean Configurations?




## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootXMLAndJavaApplicationContext-ProjectStructure.png "SpringBootXMLAndJavaApplicationContext-ProjectStructure") 

A few details:
- SpringBootTutorialBasicsApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `JavaConfiguration.java` - Java Configuration file that contains the bean definitions.
- `XmlConfiguration.java` - Defines Configuration based on the applicationContext.xml
- `applicationContext.xml` - XML Configuration file that contains the bean definitions. 

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics

## Application Context - Basics of Bean configuration with XML and Java

Spring Framework is most popular Java IOC framework. The core features of Spring Framework - IOC/Dependency Injection - are provided by Application Context. (Basic version is the Bean Factory)

Application Context (and Bean Factory) takes care of the bean life cycle and wiring up dependencies other than a host of other features.

Spring Beans can be defined in XML and Java Configurations. We would want to be able to load both these configurations from an Application Context.

In this guide, we look at how to load beans from XML and Java configuration files into an application context in a Spring Boot Application.

## Bootstrapping with Spring Initializr

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.tutorial.basics.example` as Group
  - Choose `spring-boot-tutorial-basics` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here TODO.

## Listing all the Spring Beans that are loaded

Let's enhance `SpringBootTutorialBasicsApplication` to list all the beans that are loaded.

```
@SpringBootApplication
public class SpringBootTutorialBasicsApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(SpringBootTutorialBasicsApplication.class, args);

		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}
}
```

When you run this application, it should print a host of beans that are automatically loaded by the application context.

## Loading Beans from Java Configuration

Let's now define beans in a Java Configuration file.

```
package com.in28minutes.springboot.tutorial.basics.example.application.context.java;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JavaConfiguration {
	
	@Bean
	public String someDummyBean1() {
		return "someDummyBean1";
	}
	
	@Bean
	public String someDummyBean2() {
		return "someDummyBean2";
	}

}
```
Key things to note
- `@Configuration public class JavaConfiguration` - `@Configuration` indicates that this class contains configuration of Spring Beans.
- `@Bean public String someDummyBean1() {` - `@Bean` allows us to create a bean in a Spring Configuration class.

> The package in which this class is created is a sub-package of the package in which the `SpringBootTutorialBasicsApplication` is present. So, it is part of the component scan. If you use a package which is not a sub-package of the package in which the `SpringBootTutorialBasicsApplication` is present, then you would need to add an explicit component scan to ensure that this configuration file is picked up

When your run the application again, you would see couple of new entries in the list of beans loaded by Application Context.

```
someDummyBean1
someDummyBean2
```
## Loading Beans from XML Configuration

Let's start with defining a simple XML Configuration.

src/main/resources/applicationContext.xml
```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">

	<!-- <context:component-scan base-package="com.in28minutes.spring.basics"/> -->

	<bean id="xmlStringBean1" class="java.lang.String">
		<constructor-arg value="stringBean1" />
	</bean>

	<bean id="xmlStringBean2" class="java.lang.String">
		<constructor-arg value="stringBean2" />
	</bean>

</beans>
```
Above xml configuration defines a couple of String Beans.

We would want to be able to load these beans into the application context.

While there are multiple ways of doing this, the recommended way is to create a seperate configuration class to load this xml bean definition file.

```
@Configuration
@ImportResource({"classpath*:applicationContext.xml"})
public class XmlConfiguration {
}
```
The key part of the definition is `@ImportResource({"classpath*:applicationContext.xml"})`. `applicationContext.xml` will be imported from classpath.

When you run the application, you see that the beans from the XML Configuration file are also loaded up.

```
javaConfiguration
xmlConfiguration
someDummyBean1
someDummyBean2
xmlStringBean1
xmlStringBean2

```

## Should you use XML or Annotation based bean definitions?

Which is better depends on 
- context 
- preference of the team.

If you are maintaining an old project with XML bean definitions, the choice is already made for you.

If you are creating a new project and if the configuration is specific to auto-wiring or declaring a bean - for example `@Service`, `@Component`, `@Autowired` - I prefer annotations.

However, when it comes to - one time - application related configuration or a common configuration like @ComponentScan, I do not really have a preference. I would leave it to the team to choose. However, I would definitely want the entire team to discuss and agree what they would want to use in a specific project. 


## Complete Code Example

Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics