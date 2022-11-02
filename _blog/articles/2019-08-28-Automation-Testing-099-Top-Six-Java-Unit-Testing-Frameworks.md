---
layout:  post
title:  Best Java Unit Testing Frameworks - With Examples of JUnit, Mockito and More...
date:    2019-06-27 12:31:19
summary: Unit Testing is an important skill for programmers. What are the frameworks you can use to write great unit tests in the Java World?
categories:  SpringBootUnitTesting
permalink:  /java-unit-testing-frameworks-with-examples-junit-mockito
image: /images/unit-test-category.png
---

Unit Testing is an important skill for programmers. What are the frameworks you can use to write great unit tests in the Java World?

This is second article in a series of 4 articles on Automation Testing in Microservices
- [1 - Automation Testing in Microservices - Five Types Of Automation tests](/microservice-and-automation-testing){:target='_blank'}
- [2 - Best Java Unit Testing Frameworks - With Examples of JUnit, Mockito and More...](/java-unit-testing-frameworks-with-examples-junit-mockito){:target='_blank'}
- [3 - Programming Basics - Unit Testing - What Is Mocking?](/programming-basics-introduction-to-mocking-in-unit-tests){:target='_blank'}
- [4 - Unit Testing Best Practices - with Java and Junit Examples](/unit-testing-best-practices-with-java-and-junit-examples){:target='_blank'}
 

## You will learn
- What are best java unit testing frameworks?
- What is JUnit? How do you use JUnit for unit testing?
- What is Mockito? 
- What is Mocking?
- How do you write unit tests with Junit, Mockito, AssertJ and other frameworks? 
- What are the best java unit testing frameworks for writing great asserts?



### The Base Unit Testing Framework - JUnit / TestNG

Whenever you write a unit test, you execute some code, and then check its output. You need a basic framework in place to run a large number of tests in a similar manner. 

#### JUnit

The JUnit framework provides the basic framework that allows you to specify the test that you want to run, along with its inputs, and the result that comes out of it. 

Have a look at the following test:

```java

	@Test
	public truncateAInFirst2Positions_AinFirstPosition() {
		assertEquals("CD", helper.truncateAInFirstPosition("ACD"));
	}

```

Notice the annotation ```@Test``` used the decorate the test. The name of the test is descriptive, and demonstrates the intent of the test. JUnit provides different kinds of assertion methods to check the result of the code executed within a test. These include ```assertEquals()```, ```assertTrue()``` and ```assertFalse()```. 

Now have a look at this one, that tests a negative scenario:

```java

	@Test
	public testAreFirstAndLastTwoCharactersTheSame_BasicNegativeScenario() {
		assertFalse(helper.areFirstAndLastTwoCharactersTheSame("ABCD"));
	}

```

JUnit also supports something called parameterized tests. 

#### TestNG

TestNG is a good alternative to JUnit to write unit tests, that makes it easy to write customized tests. Suppose you have the test data needed to execute your suites in a spreadsheet or an XML document. TestNG makes it easy to get the data for tests to be written around them. 

At a high level, JUnit and TestNG are frameworks that enable you to write tests and check results. If a test succeeds, you see a green bar. Else, a red bar. 

### Mocking Frameworks - Mockito and EasyMock

When writing unit tests, it is often required to mock or stub dependencies. 

Mocking is preferred to stubbing. There are couple of great options for mocking in the java world - Mockito and EasyMock. 

#### Mockito

Have a look at the following example:

```java

	public class SomeBusinessImpl {
		private DataService dataService;
		//Constructor - public SomeBusinessImpl(DataService dataService) { //... }

		int findTheGreatestFromAllData() {
			int[] data = dataService.retrieveAllData();
			int greatest = Integer.MIN_VALUE;
		
			for (int value : data) {
				if(value > greatest)
					greatest = value;
			}
			return greatest;
		}
	}

``` 

The value returned by the ```findTheGreatestFromAllData()``` depends on the data that comes back from the data service. 

To be able to write a good unit test for this method, you need to mock this dependency out. 

Have a look at the following test for the class:

```java

	@Test
	public void testFindTheGreatestFromAllData() {
		DataService dataServiceMock = mock(DataService.class);
		when(dataServiceMock.retrieveAllData())
			.thenReturn(new int[] {24, 15, 3});

		SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceMock);
		int result = businessImpl.returnTheGreatestFromAllData();
		
		assertEquals(24, result);
	}

```

Mockito make it easy to mock the DataService. Here, we use its ```mock()``` method to mock the ```DataService```, and inject the mock into the ```SomeBusinessImpl``` class. 

Mockito also provides great annotations to inject mocks automatically.

```java

	@RunWith(MockitoJUNitRunner.class)
	public class SomeBusinessMockAnnotationsTest {
		@Mock
		DataService dataServiceMock;

		@InjectMocks
		SomeBusinessImpl businessImpl;

		@Test
		public void testFindTheGreatesFromAllData() {
			when(dataServiceMock.retrieveAllData())
				.thenReturn(new int[] {24, 15, 3});
			assertEquals(24, businessImpl.findTheGreatestFromAllData());
		}
	}

```

Annotations such as ```@Mock``` and ```@InjectMocks``` take care of what their names suggest, thereby making the test code smaller, and more readable.

#### EasyMock

EasyMock is also a mocking framework that can be effectively used in unit tests. It is a popular alternative to Mockito.

### Mocking complex scenarios - Use PowerMock

Framworks such as Mockito allow you to insert mocks only when the code design is good. When the design is not so good, PowerMock comes to your rescue. 

Powermock is useful when you want to mock static methods, constructors and private methods.   

Have a look at the following code:

```java

	interface Dependency {
		List<Integer> retrieveAllStats();
	}

	public class SystemUnderTest {
		private Dependency dependency;

		public int methodUsingAnArrayListConstructor() {
			ArrayList list = new ArrayList();
			return list.size();
		}

		public int methodCallingAStaticMethod() {
			//private methodUnderTest calls static method SomeClass.staticMethod

			List<Integer> stats = dependency.retrieveAllStats();
			
			long sum = 0;
			for(int stat : stats) {
				sum += stat;
			}
			return UtilityClass.staticMethod(sum);
		}

		private long privateMethodUnderTest() {
			List<Integer> stats = dependency.retrieveAllStats();
			
			long sum = 0;
			for(int stat : stats) {
				sum += stat;
			}

			return sum;
		}
	}

```

Here, ```SomeClass.staticMethod``` is a static method that is defined. Therefore, we have a need to mock it out. We need to test the method ```methodCallingAStaticMethod()``` after this mock. Have a look at the following test code:

```java

	@RunWith(PowerMockRunner.class)
	@PrepareForTest({UtilityClass.class})
	
	public class PowerMockitoMockingStaticMethodTest {
		@Mock
		Dependency dependencyMock;
		
		@InjectMocks
		SystemUnderTest systemUnderTest;

		@Test
		public void powerMockito_MockingAStaticMethodCall() {
			when(dependencyMock.retrieveAllStats()).thenReturn(Arrays.asList({1, 2, 3}));
			
			PowerMockito.mockStatic(UtilityClass.class);
			when(UtilityClass.staticMethod(anyLong())).thenReturn(150);

			assertEquals(150, systemUnderTest.methodCallingAStaticMethod);

			//Verify the specific method call

			//First, call PowerMockito.verifyStatic()
			//Second, call the method to be verified

			PowerMockito.verifyStatic(); 
			UtilityClass.staticMethod(1 + 2 + 3);

			//verify exact number of calls

			//PowerMockito.verifyStatic(Mockito.times(1));
		}
	}

```  

Here we have written code that allows us to mock out a static method. 

It is also possible to mock a constructor:

```java

	@RunWith(PowerMockRunner.class)
	@PrepareForTest({UtilityClass.class})
	public class PowerMockitoMockingConstructorTest {
		private static final int SOME_DUMMY_SIZE = 100;

		@Mock
		Dependency dependencyMock;
		
		@InjectMocks
		SystemUnderTest systemUnderTest;

		@Test
		public void powerMockito_MockingAConstructor throws Exception {
			ArrayList<String> mockList = mock(ArrayList.class);
			stub(mockList.size()).toReturn(SOME_DUMMY_SIZE);

			PowerMockito.whenNew(ArrayLst.class).withAnyArguments().thenReturn(mockList);

			int size = systemUnderTest.methodUsingAnArrayListConstructor();
			assertEquals(SOME_DUMMY_SIZE, size);
		}
	}

``` 

When the constructor is called, the ```mockList``` is returned instead. 

PowerMock can also be used to mock private methods:

```java

	@RunWith(PowerMockRunner.class)
	@PrepareForTest({UtilityClass.class})
	public class PowerMockitoMockingPrivateMethodTest {

		@Mock
		Dependency dependencyMock;
		
		@InjectMocks
		SystemUnderTest systemUnderTest;

		@Test
		public void powerMockito_CallingAPrivateMethod throws Exception {
			when(dependencyMock.retrieveAllStats()).thenReturn(Arrays.asList({1, 2, 3}));

			long value = (Long) WhiteBox.invokeMethod(systemUnderTest,
														"PrivateMethodUnderTest");
			assertEquals(6, value);
		}

```

Note that you cannot directly invoke a private method from test code. We are using the functionality of a class named ```WhiteBox```, to which we pass the string name of the private method. 

### Writing great asserts using AssertJ / Hamcrest

Whenever you write tests, you want to have great assertions.

#### AssertJ

Have a look at the folowing code:

```java

	public class AssertJTest {
		@Test
		public void learning() {
			List<Integers> numbers = Arrays.asList({12, 15, 45});

			assertThat(numbers).hasSize(3)
									.contains(12, 15)
									.allMatch(x -> x > 10)
									.allMatch(x -> x < 100)
									.noneMatch(x -> x < 0);
			assertThat("").isEmpty;
			assertThat("ABCDE").contains("BCD")
									.startsWith("ABC")
									.endsWith(""CDE);
		}
	}

```

```numbers``` is a list of integers that contains 3 values as shown. AssertJ provides the method ```assertThat()```, which allows you to chain together multiple assertions. 

Interestingly, you can see that the method ```allMatch()``` accepts a lambda expression to test the truth value of a predicate.  The call ```allMatch(x -> x > 10)``` checks whether all the integers within ```numbers``` match the predicate of being greater than ```10```. 

```assertThat()``` also works with strings, and works well especially with alphabetical text. The code is there for you to see.

#### Hamcrest
 
Hamcrest provides an alternative to AssertJ to write great asserts. 

```java

	public class HamcrestMatchersTest {
		public void learning() {
			List<Integer> numbers = Arrays.asList({12, 15, 45});

			assertThat(numbers, hasSize(3));
			assertThat(numbers, hasItems(12, 15));
			assertThat(numbers, everyItem(greaterThan(10)));
			assertThat(numbers, everyItem(lessThan(100)));

			assertThat("", isEmptyString());
			assertThat("ABCDE", containsString("BCD"));
			assertThat("ABCDE", startsWith("ABC"));
			assertThat("ABCDE", endsWith("CDE"));
		}
	}

```

### Using Spring Unit

Typical applications have multiple layers and you want to write unit tests for different layers - web, business and data. 

Here are some of the recommended options:
- Web layer - Spring MockMVC
- Data layer - DataJpaTest
- Business layer - Mockito based test preferably without launching a Spring Context

#### Unit Tests For The Web Layer  

Have a look at the following code:

```java

	@RunWith(SpringRunner.class)
	@WebMvcTest(ItemController.class)
	public class ItemControllerTest {
		@Autowired
		private MockMvc mockMvc;

		@MockBean
		private ItemBusinessService businessService;

		@test
		public void dummyItem_basic throws Exception {
			RequestBuilder request = MockMvcRequestBuilders
										.get("/dummy-item")
										.accept(MediaType.APPLICATION_JSON);

			MvcResult result = mockMvc.perform(request)
								.andExpect(status().isOk())
								.andExpect(content()
											.json("{\"id\":1, \"name\":\"Ball\"
													, \"price\":10, \"quantity\":5}"))
								.andReturn();

		//JSONAssert.assertEquals(expected, result.getResponse.getContentAsString(), flase);
		}
	}

```

This unit test uses the Spring Unit framework, and the Spring MockMVC framework. 

We are launching a Spring context and wiring  ```ItemController``` to use a mock for ```ItemBusinessService```. 

Spring MockMVC framework makes it easy to perform REST API requests. In the code above we are using it to execute a REST API, and then setting certain expectations of the result: 
* The URL is ```/dummy-item```
* The accepted content type is ```application+json```
* After the request has been sent, check that the response status is "OK", and the content is a JSON object with certain data

It is also possible for us to mock the business service:

```java

	@Test
	public void retrieveAllItems_basic() throws Exception {
		when(businessService.retrieveAllItems()).thenReturn(
					Arrays.asList(new Item(2, "Item2", 10, 10)
									, new Item(3, "Item3", 20, 20)));

		RequestBuilder request = MockMvcRequestBuilders
										.get("/all-items-from-database")
										.accept(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(request)
								.andExpect(status().isOk())
								.andExpect(content()
											.json("[{\"id\":3, \"name\":\"Item3\"
													, \"price\":20}]"))
													,{\"id\":2, \"name\":\"Item2\"
													, \"price\":10}]")
								.andReturn();
	}

```

When ```retrieveAllItems()``` is called on ```businessService```, it is made to return the fixed list of items shown. Once again, we execute a request to a different URL, and when the response comes in, the content is verified to be the proper JSON type, with the expected data.

#### Unit Tests For The Data Layer  

DataJpaTest can be used during unit testing of the data layer in an Spring Based enterprise application.  DataJpaTest uses an in-memory database for the unit test, by default.

```java

	@RunWith(SpringRunner.class)
	@DataJpaTest
	public class ItemRepositoryTest {
		@Autowired
		private ItemRepository repository;
		
		@Test
		public void testFindAll() {
			List<Item> items = repository.findAll();
			assertEquals(3, items.size());
		}
		
		@Test
		public void testFindOne() {
			Item item = repository.findById(10001).get();
			assertEquals("Item1", item.getName());
		}
	}

```

### Asserting JSON Responses - JSONAssert / JSONPath

Almost all REST API use JSON. How do you assert JSON Content?

#### Using JSONAssert

Have a look at the following test code:

![image info](images/Capture-099-02.png)

```actualResponse``` is the content that is returned by a service. 

JSONAssert allows us to check specific parts of the request that we are interested in. 
* Within the test ```jsonAssert_StrictFalse()```, we are only concerned with the ```id```, ```name``` and ```price```, ignoring the ```quantity```.
* You can also write a test to check without escape characters, as we have done with ```jsonAssert_WithoutEscapeCharacters()```. This is much easier on the eye, and can be used to compare with an actual response that contains escape characters. This mode of comparing responses is called Strict False. 

You can also do assertions in Strict mode, where you compare all the fields, and in the actual format they are in. That is what we have done with ```jsonAssert_StrictFalse_ExactMatchExceptForSpaces()```.

#### Using JSONPath

Alternative approach in asserting JSONs is the JSONPath framework. You might want to check for specific aspects of the response, such as three items in the response. 

![image info](images/Capture-099-03.png)

Just as XPath is used to query XML, JSONPath is used to query JSON. 
* The expression ```$.length()``` returns the number of elements. An assertion can then be used on that returned value.
* You can check for all the ```id``` fields with ```$..id``` and compare them with a list of pre-fixed values. 
* You can extract slices of the element list that is in the resonse, such as the first element (```$.[1]```), or the first 2 elements (```$.[0:2]```). 
* You can query the reponse to check if a particular field is present : ```$.[?(@.name == 'Eraser')]``` or ```$.[?(@.quantity == 5)]```.

Do check out our video on the same topic:

[![image info](images/Capture-099-01.png)](https://www.youtube.com/watch?v=VG7ohV4weYw)

### Summary

In this article, we looked at a wide variety of unit testing fraemworks present in the Java world. We started with the basic unit testing framework JUnit, and its alternative, TestNG. We looked at how we can do mocking with Mockito and its alternative, EasyMock. We then had a look at Powermock, which is useful when mocking static methods, private methods and constructors.

We then had a feel of powerful assertion frameworks such as AsserJ and Hamcrest. Spring Unit framework provides MockMVC as the mocking framework for the web layer and DataJPATest for the data layer. Finally, we explored JSONAssert and JSONPath, used to assert JSON responses in a unit test.   

