---
layout:     post
title:   Spring Boot - Unit Testing and Mocking with Mockito and JUnit
date:       2017-12-13 12:31:19
summary:    Learn the basics of JUnit and Mockito. We will Spring Boot to create a Business Service and Data Services. We will unit test the Business Service using Spring Boot, Mockito and JUnit in two different approaches. 
categories:  SpringBootUnitTesting
permalink:  /spring-boot-unit-testing-and-mocking-with-mockito-and-junit
---

This guide will help you create great unit tests with JUnit and Mockito for your Spring Boot Projects. We will use two difference approaches to write unit tests.
 
## You will learn
- What is JUnit?
- What is Mockito?
- How to create a simple Spring Boot project with Unit Testing?
- How to write unit tests with Mockito using @Mock and @InjectMocks without launching up a Spring Context?
- How to write a unit test with mocking and launching up the complete Spring Context using @MockBean?

## Recommended Unit Testing Courses

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/learn-unit-testing-with-spring-boot/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Unit-Testing-With-JUnit-and-Mockito.png "Mockito Tutorial : Learn mocking with 25 Junit Examples")](https://www.udemy.com/mockito-tutorial-with-junit-examples/?couponCode=SBT-2019){:target="_blank"}


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

## Project Code Structure

Following screenshot shows the structure of the project we will create.
![Image](/images/SpringBootWithMockito-ProjectStructure.png "Spring Boot with Mockito - Project Structure") 

A few details:

- `BusinessService.java` - The Business Service that we want to test.
- `DataService.java` - DataService is a dependency of the BusinessService. We would want to mock the DataService in  our unit tests.
- `BusinessServiceMockTest.java` - Unit test using basic mocking with @Mock and @InjectMocks. This unit test does not launch up a Spring Context.
- `BusinessServiceMockSpringContextTest.java` - Unit test launching the complete spring context to test BusinessService.
- SpringBootTutorialBasicsApplication.java - The main Spring Boot Application class which is used to launch up the application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter Web and Test other than Developer Tools.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics

## Introduction to JUnit

JUnit is the most popular Java Unit testing framework

We typically work in large projects  - some of these projects have more than 2000 source files or sometimes it might be as big as 10000 files with one million lines of code. 

Before unit testing, we depend on deploying the entire app and checking if the screens look great. But that's not very efficient. And it is manual.

Unit Testing focuses on writing automated tests for individual classes and methods. 

JUnit is a framework which will help you call a method and check (or assert) whether the output is as expected. 

The important thing about automation testing is that these tests can be run with continuous integration - as soon as some code changes.

Example Source Code to Test
```java
package com.in28minutes.junit;

public class MyMath {
	int sum(int[] numbers) {
		int sum = 0;
		for (int i : numbers) {
			sum += i;
		}
		return sum;
	}
}
```

Unit test for the sum method
```java
package com.in28minutes.junit;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class MyMathTest {
	MyMath myMath = new MyMath();

	// MyMath.sum
	// 1,2,3 => 6
	@Test
	public void sum_with3numbers() {
		System.out.println("Test1");
		assertEquals(6, myMath.sum(new int[] { 1, 2, 3 }));
	}

	@Test
	public void sum_with1number() {
		System.out.println("Test2");
		assertEquals(3, myMath.sum(new int[] { 3 }));
	}
}
```
Other Important JUnit annotations
- @Before @After annotations
	- Run before and after every test method in the class
- @BeforeClass @AfterClass annotations
	- Static methods which are executed once before and after a test class


```java
package com.in28minutes.junit;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class MyMathTest {
	MyMath myMath = new MyMath();

	@Before
	public void before() {
		System.out.println("Before");
	}

	@After
	public void after() {
		System.out.println("After");
	}

	@BeforeClass
	public static void beforeClass() {
		System.out.println("Before Class");
	}

	@AfterClass
	public static void afterClass() {
		System.out.println("After Class");
	}

	// MyMath.sum
	// 1,2,3 => 6
	@Test
	public void sum_with3numbers() {
		System.out.println("Test1");
		assertEquals(6, myMath.sum(new int[] { 1, 2, 3 }));
	}

	@Test
	public void sum_with1number() {
		System.out.println("Test2");
		assertEquals(3, myMath.sum(new int[] { 3 }));
	}
}
```

## Introduction to Mockito

Mockito is the most popular mocking framework in Java.

In the example below SomeBusinessImpl depends on DataService. When we write a unit test for SomeBusinessImpl, we will want to use a mock DataService - one which does not connect to a database.

```
package com.in28minutes.mockito.mockitodemo;

public class SomeBusinessImpl {
	private DataService dataService;

	public SomeBusinessImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

```

### Writing a test with Mockito

```
package com.in28minutes.mockito.mockitodemo;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;

public class SomeBusinessMockTest {

	@Test
	public void testFindTheGreatestFromAllData() {
		DataService dataServiceMock = mock(DataService.class);
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceMock);
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(24, result);
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		DataService dataServiceMock = mock(DataService.class);
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceMock);
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(15, result);
	}

}
```

Notes
- ```DataService dataServiceMock = mock(DataService.class)``` - We are using the mock method to create a mock.
- ```when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 })``` - stubbing the mock to return specific data

### Using Mockito Annotations - @Mock, @InjectMocks, @RunWith(MockitoJUnitRunner.class)

```
package com.in28minutes.mockito.mockitodemo;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class SomeBusinessMockAnnotationsTest {

	@Mock
	DataService dataServiceMock;

	@InjectMocks
	SomeBusinessImpl businessImpl;

	@Test
	public void testFindTheGreatestFromAllData() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		assertEquals(24, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		assertEquals(15, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_NoValues() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
	}
}
```
Notes
- ```@Mock DataService dataServiceMock;``` - Create a mock for DataService.
- ```@InjectMocks SomeBusinessImpl businessImpl;``` - Inject the mocks as dependencies into businessImpl.
- ```@RunWith(MockitoJUnitRunner.class)``` - The JUnit Runner which causes all the initialization magic with @Mock and @InjectMocks to happen before the tests are run.

## Creating the Project with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.tutorial.basics.example` as Group
  - Choose `spring-boot-tutorial-basics` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

## Starter Projects in pom.xml

Below are a couple ofstarter projects in pom.xml. 

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-test</artifactId>
	<scope>test</scope>
</dependency>
```

The important dependency for unit testing is `spring-boot-starter-test`

> Spring Boot Test Starter is Starter for testing Spring Boot applications with libraries including JUnit, Hamcrest and Mockito

Let's look at important dependencies in spring-boot-starter-test.

```
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.12</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.assertj</groupId>
  <artifactId>assertj-core</artifactId>
  <version>3.8.0</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-core</artifactId>
  <version>2.11.0</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.hamcrest</groupId>
  <artifactId>hamcrest-core</artifactId>
  <version>1.3</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.hamcrest</groupId>
  <artifactId>hamcrest-library</artifactId>
  <version>1.3</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.skyscreamer</groupId>
  <artifactId>jsonassert</artifactId>
  <version>1.5.0</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-test</artifactId>
  <version>5.0.1.RELEASE</version>
  <scope>compile</scope>
</dependency>

```

Spring Boot Test Starter brings in a wide range of dependencies for Unit Testing
- Basic Test Framework - JUnit
- Mocking - Mockito
- Assertion - AssertJ, Hamcrest
- Spring Unit Test Framework - Spring Test

## Add the code under Test

Lets create a simple DataService. Actually this should talk to some database to get all the data but for now lets keep it simple and return hardcode value. This will be a dependency for the BusinessService

/src/main/java/com/in28minutes/springboot/tutorial/basics/example/unittesting/DataService.java
```java
@Repository
public class DataService {
	public int[] retrieveAllData() {
		// Some dummy data
		// Actually this should talk to some database to get all the data
		return new int[] { 1, 2, 3, 4, 5 };
	}
}
```


Let's create the BusinessService using DataService as a dependency.
/src/main/java/com/in28minutes/springboot/tutorial/basics/example/unittesting/BusinessService.java

```java
@Service
public class BusinessService {
	private DataService dataService;

	public BusinessService(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	public int findTheGreatestFromAllData() {
		int[] data = dataService.retrieveAllData();
		int greatest = Integer.MIN_VALUE;

		for (int value : data) {
			if (value > greatest) {
				greatest = value;
			}
		}
		return greatest;
	}
}
```

Important things to note:
- `public BusinessService(DataService dataService) { ` - we are providing a constructor for injecting the data service.
- `public int findTheGreatestFromAllData()` - This is the method we would want to write unit tests for. We would want to test with a wide range of combinations

## Unit Testing with Mockito using MockitoRunner

Code below shows a unit test with Mockito using MockitoJUnitRunner.

/src/test/java/com/in28minutes/springboot/tutorial/basics/example/unittest/BusinessServicesMockTest.java

```java
@RunWith(MockitoJUnitRunner.class)
public class BusinessServicesMockTest {

	@Mock
	DataService dataServiceMock;

	@InjectMocks
	BusinessService businessImpl;

	@Test
	public void testFindTheGreatestFromAllData() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		assertEquals(24, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		assertEquals(15, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_NoValues() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
	}
}
```
Notes
- `@RunWith(MockitoJUnitRunner.class) public class BusinessServicesMockTest` - The JUnit Runner which causes all the initialization magic with @Mock and @InjectMocks to happen before the tests are run.
- `@Mock DataService dataServiceMock` - Create a mock for DataService
- `@InjectMocks BusinessService businessImpl` - Inject the mocks as dependencies into BusinessService
- There are three test methods testing three different scenarios - multiple values, one value and no value passed in.

## Unit Test launching the complete Spring Context using @MockBean

Example code below shows how we can write the same unit test launching up the complete Spring context.

/src/test/java/com/in28minutes/springboot/tutorial/basics/example/unittest/BusinessServicesMockSpringContextTest.java

```java

@RunWith(SpringRunner.class)
@SpringBootTest
public class BusinessServicesMockSpringContextTest {

	@MockBean
	DataService dataServiceMock;

	@Autowired
	BusinessService businessImpl;

	@Test
	public void testFindTheGreatestFromAllData() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		assertEquals(24, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		assertEquals(15, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_NoValues() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
	}
}
```
Notes
- `@RunWith(SpringRunner.class)` - Spring Runner is used to launch up a spring context in unit tests.
- `@SpringBootTest` - This annotation indicates that the context under test is a `@SpringBootApplication`. The complete SpringBootTutorialBasicsApplication is launched up during the unit test. 
- `@MockBean DataService dataServiceMock` - @MockBean annotation creates a mock for DataService. This mock is used in the Spring Context instead of the real DataService.
- `@Autowired BusinessService businessImpl` - Pick the Business Service from the Spring Context and autowire it in.

## Choosing between the approaches

Launching the entire spring context makes the unit test slower. Unit tests will also start failing if there are errors in other beans in the contexts. So, the MockitoJUnitRunner approach is preferred.

> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>

## Next Steps

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.springboot.tutorial.basics.example</groupId>
	<artifactId>spring-boot-tutorial-basics</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-boot-tutorial-basics</name>
	<description>Spring Boot Tutorial - Basic Concept Examples</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.0.RELEASE</version>
		<relativePath /> <!-- lookup parent from repository -->
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

### /src/main/java/com/in28minutes/springboot/tutorial/basics/example/SpringBootTutorialBasicsApplication.java

```java
package com.in28minutes.springboot.tutorial.basics.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

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

### /src/main/java/com/in28minutes/springboot/tutorial/basics/example/unittesting/BusinessService.java

```java
package com.in28minutes.springboot.tutorial.basics.example.unittesting;

import org.springframework.stereotype.Service;

@Service
public class BusinessService {
	private DataService dataService;

	public BusinessService(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	public int findTheGreatestFromAllData() {
		int[] data = dataService.retrieveAllData();
		int greatest = Integer.MIN_VALUE;

		for (int value : data) {
			if (value > greatest) {
				greatest = value;
			}
		}
		return greatest;
	}
}
```
---

### /src/main/java/com/in28minutes/springboot/tutorial/basics/example/unittesting/DataService.java

```java
package com.in28minutes.springboot.tutorial.basics.example.unittesting;

import org.springframework.stereotype.Repository;

@Repository
public class DataService {
	public int[] retrieveAllData() {
		// Some dummy data
		// Actually this should talk to some database to get all the data
		return new int[] { 1, 2, 3, 4, 5 };
	}
}
```

### /src/test/java/com/in28minutes/springboot/tutorial/basics/example/SpringBootTutorialBasicsApplicationTests.java

```java
package com.in28minutes.springboot.tutorial.basics.example;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootTutorialBasicsApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```
---

### /src/test/java/com/in28minutes/springboot/tutorial/basics/example/unittest/BusinessServicesMockSpringContextTest.java

```java
package com.in28minutes.springboot.tutorial.basics.example.unittest;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.in28minutes.springboot.tutorial.basics.example.unittesting.BusinessService;
import com.in28minutes.springboot.tutorial.basics.example.unittesting.DataService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BusinessServicesMockSpringContextTest {

	@MockBean
	DataService dataServiceMock;

	@Autowired
	BusinessService businessImpl;

	@Test
	public void testFindTheGreatestFromAllData() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		assertEquals(24, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		assertEquals(15, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_NoValues() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
	}
}
```
---

### /src/test/java/com/in28minutes/springboot/tutorial/basics/example/unittest/BusinessServicesMockTest.java

```java
package com.in28minutes.springboot.tutorial.basics.example.unittest;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.in28minutes.springboot.tutorial.basics.example.unittesting.BusinessService;
import com.in28minutes.springboot.tutorial.basics.example.unittesting.DataService;

@RunWith(MockitoJUnitRunner.class)
public class BusinessServicesMockTest {

	@Mock
	DataService dataServiceMock;

	@InjectMocks
	BusinessService businessImpl;

	@Test
	public void testFindTheGreatestFromAllData() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		assertEquals(24, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		assertEquals(15, businessImpl.findTheGreatestFromAllData());
	}

	@Test
	public void testFindTheGreatestFromAllData_NoValues() {
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
	}
}
```
---