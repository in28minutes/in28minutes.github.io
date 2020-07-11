---
layout:     post
title:      Spring Framework Tutorial for Beginners - Your First 10 Steps
date:       2020-07-08 12:31:19
summary:    Learn the basics of Spring Framework setting up a very simple example.
categories: SpringFramework
permalink:  /spring-tutorial-for-beginners
---

Spring Framework remains as popular today as it was when I first used it 12 years back. How is this possible in the incredibly dynamic world where architectures have completely changed?

### What You will learn

- Basics of Spring Framework
	- Dependency Injection
	- Constructor and Setter Injections
	- Autowiring
- Important Annotations - @Component, @Autowired, @Primary
- Overview of Spring Modules
- Overview of Spring Projects

## Free Courses - Learn in 10 Steps

- [FREE 5 DAY CHALLENGE - Learn Spring and Spring Boot](https://links.in28minutes.com/SBT-Page-Top-LearningChallenge-SpringBoot){:target="_blank"}
- [Learn Spring Boot in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-springboot){:target="_blank"}
- [Learn Docker in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-docker){:target="_blank"}
- [Learn Kubernetes in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-k8s){:target="_blank"}
- [Learn AWS in 10 Steps](https://links.in28minutes.com/in28minutes-10steps-aws-beanstalk){:target="_blank"}



### Section Introduction

Welcome to this section where we would be introducing the Spring Framework to you. In this section, we will help you to set up a simple Spring project. We will help you understand the concepts of tight coupling, loose coupling, dependency injection, inversion of control and auto wiring. We will also give you a high level picture on the Spring world. 
- What are Spring Modules? 
- What are Spring projects? 

We’ll also understand why Spring Framework is so popular. 

###  First 10 Steps in Spring

#### Step 1 : Setting up a Spring Project using htttp://start.spring.io

One of the most important features of Spring Framework is dependency injection. Spring framework helps in creating loosely coupled applications. To be able to appreciate dependency injection you should understand tight coupling and how to create loosely coupled applications. What we will start with is setting up a simple example to be able to understand tight couplings and also dependency injection. 

Creating a Spring Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializr-spring-in-10-steps.png "Spring Initializr")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.spring.basics` as Group
  - Choose `spring-in-5-steps` as Artifact
  - Do not choose any dependencies
    - By default Basic Starter is included, which has the core spring framework and the spring test starter.
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

#### Step 2 : Understanding Tight Coupling using the Binary Search Algorithm Example

Set up an example of tight coupling with Binary Search and Bubble Sort Algorithm as shown in the picture below.

![Image](/images/SpringIn10Steps-BinarySearchTightlyCoupleWithBubbleSort.png "Spring In 10 Steps - Tight Coupling") 

However, we have a problem with above implementation. If we want to use binary search with a different sort algorithm, I would need to change the code. 

We want to make the binary search algorithm loosely coupled so that it can work with any sort algorithm. 

> Think about the solution before moving to next step!

#### Step 3 : Making the Binary Search Algorithm Example Loosely Coupled

Introduce an interface to make the Binary Search loosely coupled to the sort algorithm.

```java
package com.in28minutes.spring.basics.springin5steps;

public interface SortAlgorithm {
	public int[] sort(int[] numbers);
}
```

```java
public class BinarySearchImpl {

	private SortAlgorithm sortAlgorithm;
```	


#### Step 4 : Using Spring to Manage Dependencies - @Component, @Autowired

> In the previous steps - we wrote code to create objects of the bubble sort algorithm and binary search. We also managed the dependencies. It would be great actually if some framework can take control of creation of the beans and autowiring the dependencies.

That's where Spring Framework comes in!

Let's start using Spring to do autowiring.

Notes
- Sort algorithm is a dependency of the binary search.


```java
@Component
public class BinarySearchImpl {

	@Autowired
	private SortAlgorithm sortAlgorithm;
```	


```java
@Component
public class BubbleSortAlgorithm implements SortAlgorithm {
	public int[] sort(int[] numbers) {
		// Logic for Bubble Sort
		return numbers;
	}
}
```

#### Step 5 : What is happening in the background?

Enable debug logging and check what's happening in the background.

/src/main/resources/application.properties
```properties
logging.level.org.springframework = debug
```

- Spring does a Component scan on the parent package "com.in28minutes.spring.basics.springin5steps" to find the components - classes that have @Component on them.
- It identifies components and dependencies
- It identifies that BinarySearchImpl has a dependency SortAlgorithm
- It identifies that SortAlgorithm does not have a dependency. So, it creates an instance of it and autowires it into an instance of BinarySearchImpl

#### Step 6 : Dynamic auto wiring and Troubleshooting - @Primary

What if we add one more SortAlgorithm?

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.stereotype.Component;

@Component
public class QuickSortAlgorithm implements SortAlgorithm {
	public int[] sort(int[] numbers) {
		// Logic for Quick Sort
		return numbers;
	}
}
```

There are now two matching SortAlgorithm instances. Spring throws an exception because it does not know which one to use.

We use @Primary to mark one of the SortAlgorithm implementations is more important!

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class BubbleSortAlgorithm implements SortAlgorithm {
	public int[] sort(int[] numbers) {
		// Logic for Bubble Sort
		return numbers;
	}
}
```
#### Step 7 : Constructor and Setter Injection

Constructor Injection
![Image](/images/SpringIn10Steps-ConstructorInjection.png "Spring In 10 Step - Constructor Injection ") 

Setter Injection
![Image](/images/SpringIn10Steps-SetterInjection.png "Spring In 10 Step - Setter Injection") 
 
#### Step 8 : Spring Modules

Spring is built in a very modular way and this enables use to use specific modules without using the other modules of Spring.

![Image](/images/SpringIn10Steps-SpringModules.png "Spring In 10 Steps - Spring Modules") 

Notes
- Spring beans, core and context form the core of spring framework -  creating an application context, managing bean lifecycles and autowiring. 
- Spring also has a very good integration with data and integration layers. 
- One of the important data access modules is Spring JDBC which makes JDBC much more easier. Something which would take twenty five lines of code with JDBC would typically take five to 10 lines of code with Spring JDBC. Spring has good integration with JPA and ORM based frameworks like Hibernate.
- Spring JMS you'd be able to talk to the other applications using JMS. You can put messages on the queue and wherever. 
object to XML transformation is needed in those kind of scenarios. 
- Spring has really good connections with web frameworks like Struts. Spring also offers a web framework of its own. It's called Spring MVC. 
- Crosscutting concerns - concerns of more than one layer. Spring  enables easy implementation of cross cutting concerns like security and logging through aspect oriented programming. Spring has a module of its own called Spring AOP to do basic aspect oriented programming. Spring provides really good integration with AspectJ as well. 
- Spring has good support for unit testing through the Spring test framework.

#### Step 9 : Spring Projects

Spring projects provide solutions for different problems faced by enterprise applications.

![Image](/images/SpringIn10Steps-SpringProjects.png "Spring In 10 Steps - Spring Projects")

Notes
- Spring Boot is one of the most popular frameworks to develop micro services today. Spring Boot makes it very very easy to develop applications quickly. With features like starter projects, auto configuration and actuator, Spring Boot makes developing production ready applications a cakewalk. 
- We know that the world is moving towards the cloud. Everybody wants to deploy their applications in the cloud. And therefore it's not sufficient if we devlelop good applications. We have to develop Cloud native applications. We would want to be able to dynamically configure applications, we would be able to dynamically connect them.  Cloud native applications need a lot of different features. Spring Cloud can be used to cloud enable a micro service. 
- Spring data provides consistent data access. If we go a few years back, there was only one kind of database that we connect to - A relational SQL database. Today, we have a mix of data sources. How do you ensure that the way we access data from all these sources remains consistent. That’s what Spring data aims to solve. 
- Spring integration, on the other hand, addresses problems with application integration. Spring integration implements the patterns which are recommended in the book "Enterprise Integration Patterns". - Batch applications have their own requirements. Like, for example, I would want to be able to restart a failed job from where it failed or I would want to be able to track down exactly what's happening in a batch in much much more minute detail. Spring Batch provides those kinds of features. It enables developing batch applications very easily. 
- Security is one of the important parts of developing applications. You'd want your applications to be secure whether you are developing a web application or REST service. Spring Security provides solutions for securing your applications. 
- Spring HATEOAS enables you to develop HATEOAS compatible services. In REST it’s not sufficient to just return the data. You'd also want to return the related links that would help the consumer to understand where to go from here. Spring HATEOAS would help you to do that very easily. 

What we're looking at are seven of the Spring projects that are just touching the tip of the iceberg. There are a lot of other Spring projects like Spring webservices, Spring session, Spring social, Spring mobile and Spring Android which are solving problems in various different spaces. 

> Spring has not really restricted itself to just the Spring framework and got involved in a lot of wide variety of projects.

#### Step 10 : Why is Spring Popular?
![Image](/images/SpringIn10Steps-SpringPopularity.png "Spring In 10 Steps - Spring Popularity") 
Spring is one of the very few frameworks that remains as popular today as it was 15 years back. 

How did Spring maintain its popularity through these one and half decades? 
- Unit Testing - The most important reason Spring is so popular is because it enables writing testable code. The core feature of Spring is dependency injection. And if we use Dependency Injection properly then we would be able to write unit tests for our code very easily. Spring has a really good integration frameworks like Junit and Mockito and it enables us to write good unit tests very quickly. 
- Zero Plumbing Code - Zero exception handling code because Spring makes all its exceptions unchecked. 
- Architectural Flexibility - Spring is very modular. There are Spring modules and Spring projects for very specific purposes. And I can use a specific Spring module without using all others. So even though Spring has a really good MVC framework - Spring MVC - it still offers good support with all the other MVC frameworks like Struts. Even though Spring has its own REST support through Spring MVC, it offers good support with JAX-RS and Jersey as well. If I use Spring in my project my options are not really restricted. 
- The last reason why Spring is very popular is it is able to stay with the trend. For example, in the last few years there is a lot of evolution with micro services and cloud. Spring is able to come up with projects that helps it to stay relevant.


## Complete Code Example

### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.spring.basics</groupId>
	<artifactId>spring-in-5-steps</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-in-5-steps</name>
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
			<artifactId>spring-boot-starter</artifactId>
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

### /src/main/java/com/in28minutes/spring/basics/springin5steps/BinarySearchImpl.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BinarySearchImpl {

	@Autowired
	private SortAlgorithm sortAlgorithm;
	
	public int binarySearch(int[] numbers, int numberToSearchFor) {

		int[] sortedNumbers = sortAlgorithm.sort(numbers);
		System.out.println(sortAlgorithm);
		// Search the array
		return 3;
	}

}
```
---

### /src/main/java/com/in28minutes/spring/basics/springin5steps/BubbleSortAlgorithm.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class BubbleSortAlgorithm implements SortAlgorithm {
	public int[] sort(int[] numbers) {
		// Logic for Bubble Sort
		return numbers;
	}
}
```
---

### /src/main/java/com/in28minutes/spring/basics/springin5steps/QuickSortAlgorithm.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.stereotype.Component;

@Component
public class QuickSortAlgorithm implements SortAlgorithm {
	public int[] sort(int[] numbers) {
		// Logic for Quick Sort
		return numbers;
	}
}
```
---

### /src/main/java/com/in28minutes/spring/basics/springin5steps/SortAlgorithm.java

```java
package com.in28minutes.spring.basics.springin5steps;

public interface SortAlgorithm {
	public int[] sort(int[] numbers);
}
```
---

### /src/main/java/com/in28minutes/spring/basics/springin5steps/SpringIn5StepsApplication.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringIn5StepsApplication {

	// What are the beans?
	// What are the dependencies of a bean?
	// Where to search for beans? => No need

	public static void main(String[] args) {

		// BinarySearchImpl binarySearch =
		// new BinarySearchImpl(new QuickSortAlgorithm());
		// Application Context
		ApplicationContext applicationContext = 
				SpringApplication.run(SpringIn5StepsApplication.class, args);
		BinarySearchImpl binarySearch = 
				applicationContext.getBean(BinarySearchImpl.class);
		int result = 
				binarySearch.binarySearch(new int[] { 12, 4, 6 }, 3);
		System.out.println(result);
	}
}
```
---

### /src/main/resources/application.properties

```properties
logging.level.org.springframework = debug
```
---

### /src/main/resources/log.txt

```
Searching directory [/in28Minutes/git/getting-started-in-5-steps/spring-in-5-steps/target/classes/com/in28minutes/spring/basics/springin5steps] for files matching pattern [/in28Minutes/git/getting-started-in-5-steps/spring-in-5-steps/target/classes/com/in28minutes/spring/basics/springin5steps/**/*.class]
Identified candidate component class: file [/in28Minutes/git/getting-started-in-5-steps/spring-in-5-steps/target/classes/com/in28minutes/spring/basics/springin5steps/BinarySearchImpl.class]
Identified candidate component class: file [/in28Minutes/git/getting-started-in-5-steps/spring-in-5-steps/target/classes/com/in28minutes/spring/basics/springin5steps/BubbleSortAlgorithm.class]

Creating instance of bean 'binarySearchImpl'
Creating instance of bean 'bubbleSortAlgorithm'
Finished creating instance of bean 'bubbleSortAlgorithm'

Constuctor - Autowiring by type from bean name 'binarySearchImpl' via constructor 
to bean named 'bubbleSortAlgorithm'
Setter -  Autowiring by type from bean name 'binarySearchImpl' to bean named 'bubbleSortAlgorithm'
No Setter or Constructor - Autowiring by type from bean name 'binarySearchImpl' to bean named 'bubbleSortAlgorithm'


Finished creating instance of bean 'binarySearchImpl'
```
---

### /src/test/java/com/in28minutes/spring/basics/springin5steps/SpringIn5StepsApplicationTests.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringIn5StepsApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---