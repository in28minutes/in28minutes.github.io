---
layout:  post
title:  Programming Basics - Unit Testing - What Is Mocking?
date:    2019-08-28 12:30:19
summary: Mocking is an important concept that is made use of, when writing unit tests. In this article, we explore what mocking is all about, and explore some of the popular Java mocking frameworks in use.
categories:  SpringBootUnitTesting
permalink:  /programming-basics-introduction-to-mocking-in-unit-tests
image: /images/unit-test-category.png
---

Mocking is an important concept that is made use of, when writing unit tests. In this article, we explore what mocking is all about, and explore some of the popular Java mocking frameworks in use.

### You will learn
- What is mocking?
- Why is mocking important?
- How can you use Mockito framework to mock classes in Java?
- What are things Mockito framework good at?
- What are features of PowerMock framework?

This is third article in a series of 4 articles on Automation Testing in Microservices
- [1 - Automation Testing in Microservices - Five Types Of Automation tests](/microservice-and-automation-testing){:target='_blank'}
- [2 - Best Java Unit Testing Frameworks - With Examples of JUnit, Mockito and More...](/java-unit-testing-frameworks-with-examples-junit-mockito){:target='_blank'}
- [3 - Programming Basics - Unit Testing - What Is Mocking?](/programming-basics-introduction-to-mocking-in-unit-tests){:target='_blank'}
- [4 - Unit Testing Best Practices - with Java and Junit Examples](/unit-testing-best-practices-with-java-and-junit-examples){:target='_blank'}




### Why Do We Need Mocking?

Have a look at the following Java code:

```java

	public class SomeBusinessImpl {
  	private DataService dataService;
	  //Constructor - public SomeBusinessImpl(DataService dataService)
	  int findTheGreatestFromAllData() {
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

```SomeBusinessImpl``` gets the data it needs, through a ```DataService```, which is an external interface. ```findTheGreatestFromAllTheData()``` represents a certain business logic applied to this data. 

Let's say we want to write a unit test for ```SomeBusinessImpl```. The basic approach is to let the code run as is, connect to the database and write test based on the data in the database. 

Let's say the data in the database has been modified by another developer. The unit test would start failing even though the code is still right. 

The unit test for ```SomeBusinessImpl``` might because it has an **external dependency**, which is never stable. How do we write a test for ```SomeBusinessImpl``` which does not have such an external dependency? 

### Enter Mocking

One way out is to create a **mock** for ```DataService```:


```java

	@RunWith(MockitoJUnitRunner.class)
	public class SomeBusinessMockAnnotationsTest {
	
	  @Mock
	  DataService dataServiceMock;
	
	  @InjectMocks
	  SomeBusinessImpl businessImpl;
	
	  @Test
	  public void testFindTheGreatestFromAllData() {
	    when(dataServiceMock.retrieveAllData())
	            .thenReturn(new int[] { 24, 15, 3 });    
	    assertEquals(24, businessImpl.findTheGreatestFromAllData());
	  }

```

You create a mock with the ```DataService``` class, and then do what you need to with that mock. 

Our mock here says: "When ```retrieveAllData()``` is called, then return the specific data ```new int[] { 24, 15, 3 }```". We know that if the input data is ```{24, 15, 3}```, the value expected to be returned is ```24```. We write the test using this.

This makes sure that the data which is provided to ```SomeBusinessImpl``` is within the boundary of the unit test.

The code that we see above uses a popular mocking framework called Mockito. You would see that the code written is very readable, almost like plain English. Using mocks, you can mock away entire classes. Mocking also leads to stable unit tests.

### Exploring Mocking Frameworks

#### Using Mockito With Good Design

When you have well defined classes and interfaces, unit testing with Mockito is a breeze. Mockito also provides useful annotations such as ```@Mock``` and ```@InjectMocks```.

```java

	@RunWith(MockitoJUnitRunner.class)
	public class SomeBusinessMockAnnotationsTest {
	
	  @Mock
	  DataService dataServiceMock;
	
	  @InjectMocks
	  SomeBusinessImpl businessImpl;
	
	  @Test
	  public void testFindTheGreatestFromAllData() {
	    when(dataServiceMock.retrieveAllData())
	            .thenReturn(new int[] { 24, 15, 3 });    
	    assertEquals(24, businessImpl.findTheGreatestFromAllData());
	  }

```

#### Using PowerMock With Poor Design

Sometimes however, your code might be designed very poorly. You could be making heavy use of ```static``` methods, and could also be using ```private``` methods. In addition, you might need to mock a constructor. In such cases, you need to use PowerMock along with Mockito.

Do check out our video on this:

[![image info](/images/Capture-024-01.png)](https://www.youtube.com/watch?v=xJreuzP2C0M)

### Summary

Mocking is a technique of unit testing a class, where we mock an external dependency in order to test our classes and methods. When unit tests are written well with mocks, they would not have any external dependencies and will not fail when external stuff changes. We looked at the Mockito framework. We also looked at the option of PowerMock for testing badly designed code. 


