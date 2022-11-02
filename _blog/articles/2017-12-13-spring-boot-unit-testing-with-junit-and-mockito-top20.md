---
layout:     post
title:   Spring Boot - Unit Testing and Mocking with Mockito and JUnit
date:       2022-01-02 12:31:19
summary:    Learn the basics of JUnit and Mockito. We will Spring Boot to create a Business Service and Data Services. We will unit test the Business Service using Spring Boot, Mockito and JUnit in two different approaches. 
categories:  SpringBootUnitTesting
permalink:  /spring-boot-unit-testing-and-mocking-with-mockito-and-junit
image: /images/unit-test-category.png
---

![Image](/images/SpringBootWithMockito-ProjectStructure.png "Spring Boot with Mockito - Project Structure") 

This guide will help you create great unit tests with JUnit and Mockito for your Spring Boot Projects. We will use two difference approaches to write unit tests.
 
![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")


## You will learn
- What is JUnit?
- What is Mockito?
- How to create a simple Spring Boot project with Unit Testing?
- How to write unit tests with Mockito using @Mock and @InjectMocks without launching up a Spring Context?
- How to write a unit test with mocking and launching up the complete Spring Context using @MockBean?


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


## Complete Code Example

Github repository has the complete code - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics

