---
layout:     post
title:      Mockito Tutorial for Beginner in 5 Steps
date:       2023-03-19 12:31:19
summary:    Mockito lesson in 5 steps for beginners. In 5 simple stages, learn the fundamentals of mocking with the most popular Java mocking framework using a simple mock example. 
categories: SpringBootUnitTesting
permalink:  /mockito-tutorial-for-beginners
image: /images/unit-test-category.png
---

Mockito is the most popular Java mocking framework.


### Git Repository 
- https://github.com/in28minutes/getting-started-in-5-steps/tree/master/mockito-in-5-steps

### Pre-requisites 
- Java & Eclipse - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
- JUnit - https://courses.in28minutes.com/p/junit-tutorial-for-beginners

### IDE Configuration

Easier Static Imports
- Window > Preferences > Java > Editor > Content Assist > Favorites
	- org.junit.Assert
	- org.mockito.BDDMockito
	- org.mockito.Mockito
	- org.hamcrest.Matchers
	- org.hamcrest.CoreMatchers

### Reference
- Visit Mockito Official Documentation - http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html

### Overview
- Step 1 : Setting up an example using http://start.spring.io.
- Step 2 : Using a Stubs - Disadvantages
- Step 3 : Your first mock. 
- Step 4 : Using Mockito Annotations - @Mock, @InjectMocks, @RunWith(MockitoJUnitRunner.class)
- Step 5 : Mocking List interface

### Step 1 : Setting up an example using http://start.spring.io.
Creating a Spring Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializr-spring-in-10-steps.png "Spring Initializr")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.mockito` as Group
  - Choose `mockito-demo` as Artifact
  - Choose Dependency
    - Web
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

Let's also set up a simple business class with a dependency.
- SomeBusinessImpl depends on DataService for the data
- findTheGreatestFromAllData has some business logic to find the greatest

```java
package com.in28minutes.mockito.mockitodemo;

public class SomeBusinessImpl {
	private DataService dataService;

	public SomeBusinessImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

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

```java
package com.in28minutes.mockito.mockitodemo;

public interface DataService {
	int[] retrieveAllData();
}
```
### Step 2 : Using a Stubs - Disadvantages

Let's construct a unit test for SomeBusinessImpl using a stub.

```java
package com.in28minutes.mockito.mockitodemo;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SomeBusinessStubTest {
	@Test
	public void testFindTheGreatestFromAllData() {
		var businessImpl = new SomeBusinessImpl(new DataServiceStub());
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(24, result);

	}

}

class DataServiceStub implements DataService {
	@Override
	public int[] retrieveAllData() {
		return new int[] { 24, 6, 15 };
	}
}
```

Issues with Stub
- How can I get DataServiceStub to return various data depending on the situation?
- The DataServiceStub implementations should be updated whenever the DataService interface is changed with new methods.

### Step 3 : This is your first mock. 

```java
package com.in28minutes.mockito.mockitodemo;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;

public class SomeBusinessMockTest {

	@Test
	public void testFindTheGreatestFromAllData() {
		var dataServiceMock = mock(DataService.class);
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 });
		var businessImpl = new SomeBusinessImpl(dataServiceMock);
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(24, result);
	}

	@Test
	public void testFindTheGreatestFromAllData_ForOneValue() {
		var dataServiceMock = mock(DataService.class);
		when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 15 });
		var businessImpl = new SomeBusinessImpl(dataServiceMock);
		int result = businessImpl.findTheGreatestFromAllData();
		assertEquals(15, result);
	}

}
```

Notes
- ```DataService dataServiceMock = mock(DataService.class)``` - We are using the mock method to create a mock.
- ```when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 24, 15, 3 })``` - stubbing the mock to return specific data

### Step 4 : @Mock, @InjectMocks, and @ExtendWith Mockito Annotations (SpringExtension.class)

```java
package com.in28minutes.mockito.mockitodemo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
public class SomeBusinessMockAnnotationsTest {

    @Mock
    DataService dataServiceMock;

    @InjectMocks
    SomeBusinessImpl businessImpl;

    @Test
    public void testFindTheGreatestFromAllData() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[]{24, 15, 3});
        assertEquals(24, businessImpl.findTheGreatestFromAllData());
    }

    @Test
    public void testFindTheGreatestFromAllData_ForOneValue() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[]{15});
        assertEquals(15, businessImpl.findTheGreatestFromAllData());
    }

    @Test
    public void testFindTheGreatestFromAllData_NoValues() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[]{});
        assertEquals(Integer.MIN_VALUE, businessImpl.findTheGreatestFromAllData());
    }
}

```
Notes
- ```@Mock DataService dataServiceMock;``` - Create a mock for DataService.
- ```@InjectMocks SomeBusinessImpl businessImpl;``` - Inject the mocks as dependencies into businessImpl.
- ```@ExtendWith(SpringExtension.class)``` - SpringExtension integrates the Spring TestContext Framework into JUnit 5's Jupiter programming model. To use this extension, simply annotate a JUnit Jupiter based test class with `@ExtendWith(SpringExtension.class)`

### Step 5 : Mocking List interface

Mocking a method. Mock returns the same value on multiple calls.
```java
@Test
public void testSize() {
	var listMock = mock(List.class);
	when(listMock.size()).thenReturn(10);
	assertEquals(10, listMock.size());
	assertEquals(10, listMock.size());
}
```

Setting the mock to return 10 on first call and 20 on the second call.
```java
@Test
public void testSize_multipleReturns() {
	var listMock = mock(List.class);
	when(listMock.size()).thenReturn(10).thenReturn(20);
	assertEquals(10, listMock.size());
	assertEquals(20, listMock.size());
	assertEquals(20, listMock.size());
}
```

Customizing the mock based on a specific parameter value.
```java
@Test
public void testGet_SpecificParameter() {
	var listMock = mock(List.class);
	when(listMock.get(0)).thenReturn("SomeString");
	assertEquals("SomeString", listMock.get(0));
	assertEquals(null, listMock.get(1));
}
```

Using a generic argument - Mockito.anyInt()
```java
@Test
public void testGet_GenericParameter() {
	var listMock = mock(List.class);
	when(listMock.get(Mockito.anyInt())).thenReturn("SomeString");
	assertEquals("SomeString", listMock.get(0));
	assertEquals("SomeString", listMock.get(1));
}
```

## My Course Recommendation

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://links.in28minutes.com/MISC-SBT-UT)
