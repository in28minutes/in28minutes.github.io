---
layout:     post
title:      Spring Framework Tutorial for Beginners - Your First 10 Steps
date:       2022-07-29 12:31:19
summary:    Learn the basics of Spring Framework setting up a very simple example.
categories: SpringFramework
permalink:  /spring-tutorial-for-beginners
image: /images/spring-framework-category.png
---

The Spring Framework remains as popular today as it was when I first used it 12 years ago. How is this possible in an incredibly dynamic world where architecture has completely changed?

### What you will learn

- Spring Framework Fundamentals
	- Dependency Injection
	- Constructor and Setter Injections
	- Autowiring
- Important Annotations-@Component, @Autowired, @Primary
- An Overview of Spring Modules
- An Overview of Spring Projects



### Section Introduction

Welcome to this section where we will be introducing the Spring Framework to you. In this section, we will help you set up a simple Spring project. We will help you understand the concepts of tight coupling, loose coupling, dependency injection, inversion of control, and autowiring. We will also give you a high-level picture of the spring world.
- What are Spring Modules? 
- What are Spring projects? 

We’ll also understand why the Spring Framework is so popular. 

### The First 10 Steps in Spring

#### Step 1: Create a Spring Project with HTTP: //start.spring.io

One of the most important features of the Spring Framework is dependency injection. The Spring framework helps in creating loosely coupled applications. To be able to appreciate dependency injection, you should understand tight coupling and how to create loosely coupled applications. What we will start with is setting up a simple example to be able to understand tight couplings and also dependency injection. 

Creating a Spring Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializr-spring-in-10-steps.png "Spring Initializr")   

As shown in the image above, the following steps have to be taken.

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.spring.basics` as Group
  - Choose `spring-in-5-steps` as Artifact
  - Do not choose any dependencies.
    - By default, the Basic Starter is included, which has the core spring framework and the spring test starter.
- To begin a new project, click the "Generate" button.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

#### Step 2 : Understanding Tight Coupling with the Binary Search Algorithm Example

Set up an example of tight coupling with the Binary Search and Bubble Sort Algorithms as shown in the picture below.

![Image](/images/SpringIn10Steps-BinarySearchTightlyCoupleWithBubbleSort.png "Spring In 10 Steps - Tight Coupling") 

However, we have a problem with the above implementation. If we want to use binary search with a different sort algorithm, I would need to change the code.

We want to make the binary search algorithm loosely coupled so that it can work with any sorting algorithm. 

> Think about the solution before moving to the next step!

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


#### Step 4 : Using Spring to Manage Dependencies-@Component, @Autowired

> In the previous steps, we wrote code to create objects using the bubble sort algorithm and binary search. We also managed the dependencies. It would be great if some framework could take control of the creation of the beans and autowire the dependencies.

That's where the Spring Framework comes in!

Let's start using Spring to do autowiring.

Notes
- The sort algorithm is a dependency of the binary search.


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

- Spring does a component scan on the parent package "com.in28minutes.spring.basics.springin5steps" to find the component classes that have @Component on them.
- It identifies components and dependencies.
- It determines that BinarySearchImpl is dependent. SortAlgorithm
- It identifies that SortAlgorithm does not have a dependency. So, it creates an instance of it and autowires it into an instance of BinarySearchImpl.

#### Step 6 : Dynamic auto wiring and troubleshooting-@Primary

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

We use @Primary to mark one of the SortAlgorithm implementations as more important!

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
#### Step 7: Inject Constructor and Setter

Constructor Injection
![Image](/images/SpringIn10Steps-ConstructorInjection.png "Spring In 10 Step - Constructor Injection ") 

Setter Injection
![Image](/images/SpringIn10Steps-SetterInjection.png "Spring In 10 Step - Setter Injection") 
 
#### Step 8 : Spring Modules

Spring is built in a very modular way, and this enables us to use specific modules without using the other modules of Spring.

![Image](/images/SpringIn10Steps-SpringModules.png "Spring In 10 Steps - Spring Modules") 

Notes
- Spring beans, core and context form the core of the spring framework—creating an application context, managing bean lifecycles, and autowiring. 
- Spring also has very good integration with data and integration layers. 
- One of the important data access modules is Spring JDBC, which makes JDBC much easier. Something which would take twenty-five lines of code with JDBC would typically take five to 10 lines of code with Spring JDBC. Spring has good integration with JPA and ORM-based frameworks like Hibernate.
- Spring JMS You'd be able to talk to the other applications using JMS. You can put messages in the queue and wherever. Object to XML transformation is needed in those kind of scenarios. 
- The Spring has really good connections with web frameworks like Struts. Spring also offers a web framework of its own. It's called Spring MVC.
- Crosscutting concerns: concerns of more than one layer. Through aspect-oriented programming, Spring enables easy implementation of cross-cutting concerns like security and logging. Spring has a module of its own called Spring AOP to do basic aspect-oriented programming. Spring provides really good integration with AspectJ as well. 
- Spring has good support for unit testing through the Spring test framework.

#### Step 9 : Spring Projects

Spring projects provide solutions for different problems faced by enterprise applications.

![Image](/images/SpringIn10Steps-SpringProjects.png "Spring In 10 Steps - Spring Projects")

Notes
- Spring Boot is one of the most popular frameworks to develop micro services today. Spring Boot makes it very easy to develop applications quickly. With features like starter projects, auto configuration, and actuators, Spring Boot makes developing production-ready applications a cakewalk. 
- We know that the world is moving towards the cloud. Everybody wants to deploy their applications on the cloud. And therefore, it's not sufficient if we develop good applications. We have to develop cloud native applications. We would want to be able to dynamically configure applications. We would be able to dynamically connect them. Cloud native applications need a lot of different features. Spring Cloud can be used to cloud enable a micro service. 
- Spring data provides consistent data access. If we go a few years back, there was only one kind of database that we connected to: a relational SQL database. Today, we have a mix of data sources. How do you ensure that the way we access data from all these sources remains consistent? That’s what Spring data aims to solve. 
- Spring integration, on the other hand, addresses problems with application integration. Spring Integration implements the patterns which are recommended in the book "Enterprise Integration Patterns". -- Batch applications have their own requirements. For example, I would want to be able to restart a failed job from where it failed, or I would want to be able to track down exactly what's happening in a batch in much more minute detail. Spring Batch provides those kinds of features. It enables developing batch applications very easily. 
- Security is one of the important parts of developing applications. You'd want your applications to be secure, whether you are developing a web application or a REST service. Spring Security provides solutions for securing your applications.
- Spring HATEOAS enables you to develop HATEOAS compatible services. In REST, it’s not sufficient to just return the data. You'd also want to return the related links that would help the consumer understand where to go from here. Spring HATEOAS would help you to do that very easily. 

What we're looking at are seven of the spring projects that are just touching the tip of the iceberg. There are a lot of other Spring projects like Spring webservices, Spring sessions, Spring social, Spring mobile, and Spring Android which are solving problems in various different spaces. 

> Spring has not really restricted itself to just the Spring framework and has gotten involved in a wide variety of projects.

#### Step 10 : Why Is Spring Popular?
![Image](/images/SpringIn10Steps-SpringPopularity.png "Spring In 10 Steps - Spring Popularity") 
Spring is one of the very few frameworks that remains as popular today as it was 15 years ago. 

How did Spring maintain its popularity over the past 15 years? 
- *Unit Testing*: The most important reason Spring is so popular is because it enables writing testable code. The core feature of Spring is dependency injection. And if we use Dependency Injection properly, then we will be able to write unit tests for our code very easily. Spring has some really good integration frameworks like `Junit` and `Mockito`, and it enables us to write good unit tests very quickly. 
- *Zero Plumbing Code* -Zero exception handling code because Spring makes all its exceptions unchecked.
- *Architectural Flexibility* -Spring is very modular. There are Spring modules and Spring projects for very specific purposes. And I can use a specific Spring module without using all the others. So, even though Spring has a really good MVC framework (Spring MVC), it still offers good support with all the other MVC frameworks like Struts. Even though Spring has its own REST support through Spring MVC, it offers good support for JAX-RS and Jersey as well. If I use Spring in my project, my options are not really restricted. 
- The last reason why spring is so popular is that it is able to stay with the trend. For example, in the last few years, there has been a lot of evolution in micro services and cloud. Spring is able to come up with projects that help it stay relevant.


## Example of Complete Code

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
		<version>3.0.0-M4</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<java.version>17</java.version>
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
		ApplicationContext applicationContext = SpringApplication.run(SpringIn5StepsApplication.class, args);
		
		BinarySearchImpl binarySearch = applicationContext.getBean(BinarySearchImpl.class);
		
		int result = binarySearch.binarySearch(new int[] { 12, 4, 6 }, 3);

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

Constuctor-Autowiring by type from bean name 'binarySearchImpl' via constructor to bean named 'bubbleSortAlgorithm'
Setter-Autowiring by type from bean name 'binarySearchImpl' to bean name 'bubbleSortAlgorithm'
No Setter or Constructor-Autowiring by type from bean name 'binarySearchImpl' to bean name 'bubbleSortAlgorithm'

Finished creating instance of bean 'binarySearchImpl'
```
---

### /src/test/java/com/in28minutes/spring/basics/springin5steps/SpringIn5StepsApplicationTests.java

```java
package com.in28minutes.spring.basics.springin5steps;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class SpringIn5StepsApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---