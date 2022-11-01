---
layout: post
title: Unit Testing Best Practices - with Java and Junit Examples
date:    2019-08-28 12:31:19
summary: Unit Testing is often underrated. As far as I am concerned, having good unit tests seperates good projects from bad. In this article, let's look at unit testing best practices in depth. We use examples from Java and JUnit to illustrate the concepts. However, the best practices are applicable irrespective of the programming language used.
categories:  SwProgramming
permalink:  /unit-testing-best-practices-with-java-and-junit-examples
image: /images/unit-test-category.png
---

Unit Testing is often underrated. As far as I am concerned, having good unit tests seperates good projects from bad. In this article, let's look at unit testing best practices in depth. We use examples from Java and JUnit to illustrate the concepts. However, the best practices are applicable irrespective of the programming language used.
 
## You will learn
- What are the benefits of Unit Testing?
- What is a good unit test?
- What are examples of Unit Testing Best Practices?
- How do you write great unit tests?
- What are the important principles for Unit Testing?

This is fourth article in a series of 4 articles on Automation Testing in Microservices
- [1 - Automation Testing in Microservices - Five Types Of Automation tests](/microservice-and-automation-testing){:target='_blank'}
- [2 - Best Java Unit Testing Frameworks - With Examples of JUnit, Mockito and More...](/java-unit-testing-frameworks-with-examples-junit-mockito){:target='_blank'}
- [3 - Programming Basics - Unit Testing - What Is Mocking?](/programming-basics-introduction-to-mocking-in-unit-tests){:target='_blank'}
- [4 - Unit Testing Best Practices - with Java and Junit Examples](/unit-testing-best-practices-with-java-and-junit-examples){:target='_blank'}



### What Is Unit Testing?

By unit testing, we are referring to the xUnit testing (JUnit, NUnit, etc) done on individual code units, such as methods and classes.

### Your Attitude Toward Unit Testing

The most important aspect of unit testing is your attitude towards it. 

##### Unit Testing Is More Important Than Code

Unit testing is more important than coding, because it gives you the confidence to carry out continuous refactoring of code. As a result, the overall quality of the low level design improves continuously.

##### Unit Tests Are Best Written Before Code

The practice of writing unit tests even before you write code is called test driven development (TDD). TDD gives you an outside-in perspective, because you look at code functionality from the perspective of the test. Following TDD improves low level design along with providing with great unit tests. 

### The Unit Testing Principles

We start with look at generic principles that are applicable to any code, including unit test code. After that we look at principles specific to Unit Tests.

#### The Four Principles Of Simple Design

Any code, including unit test code, should adhere to Four Principles of Simple Design.

A software application is said to have a simple design if it:
* **Runs all tests**
* **Contains no duplication**
* **Expresses intent of programmers**
* **Minimizes number of classes and methods**

#### Unit Test Specific Principles

Here are some of the important principles which are specific to Unit Tests.

##### Unit Tests Fail Only when there is a problem with In Production Code

Let's consider an example where you write a unit test depending on some data in the database. A new developer accidentally changed the data. What would happen? Unit test would fail.

Let's say it happens again. 

The development team would lose confidence in unit tests. 

> Over a period of time, they would start ignoring tests which are failing.

Unit tests should fail only when there is something wrong with the code. How do we ensure this?

###### No dependencies between test conditions

Don't assume the order in which the tests would be run. 

JUnit does not guarantee that tests would run in the same order that they are written in.

###### Avoid External Dependencies

Avoid writing tests that depends on an external database, external interface, a container or a network connection. 

If you need to test code functionality that otherwise depends on these, make use of stubs or mock servers.

###### Avoid Depending On System Date etc

Since the system on which the code will is deployed will be different the development machine, don't depend on any setup on a machine. Also, avoid hard-coding of system paths within the test code. This will make the test code tied to one machine. 


##### Unit Tests Find All Problems With Production Code

This is the very reason why we test.  
* Test everything that could possibly break. Test exceptions well, and closely test boundary conditions.
* Try to use strong assertions to detect failures. Do not write tests just for coverage.

Quoting a common JUnit maxim: "Test until fear turns to boredom." 

```

	becomeTimidAndTestEverything
	whileWritingTheSameThingOverAndOverAgain
		becomeMoreAggressive
		writeFewerTests
		writeTestsForMoreInterestingCases
		ifGetBurnedByStupidDefect
			feelStupid
			becomeTimidAndTestEverything
		end
	End

```

Remember, this is an infinite loop!

#### Unit Tests Run Quickly

To maximize benefits, tests should be run as frequently as possible. 

If unit tests are slow, they would be run less often. 

Avoid reading from the file system, or from the network. 

A common solution to test duration is to collect all long-running tests into a single test suite, and run that suite less often.

#### Unit Tests should be easy to read

Typical tests should not take more than 15 seconds to read. 

Here are a couple of examples we use, in explaining Unit Testing standards more effectively:

* ```Amount getClientProductsSum(List<Products>)```:
	*  For a list of Products, calculate the sum of Product amounts and return the total.
	*  Throw a ```DifferentCurrenciesException``` if products have different currencies.

##### Example-1: Unit Testing Principle - Easy To Understand

```java

	@Test
	public void testClientProductsSum() {
		List<Product> products = new ArrayList<Products>();

		products.add(new ProductImpl(100, "Product 15", ProductType.BANK_GUARANTEE, 
					 new AmountImpl(new BigDecimal("5.0"), Currency.EURO)));
		
		products.add(new ProductImpl(120, "Product 20", ProductType.BANK_GUARANTEE, 
					 new AmountImpl(new BigDecimal("6.0"), Currency.EURO)));

		Amount temp = null;

		try {
			temp. clientBO.getClientProductsSum(products);
		} catch(DirrerentCurrenciesException e) {
			fail();
		}

		assertEquals(Currency.EURO, temp.getCurrency());
	}

```

This test code is not very readable, isn't it! The following is another way to write the same test:

```java

	public void testClientProductsSum_AllProductsSameCurrency() throws DifferentCurrenciesException{
		Amount[] amounts = {
			new AmountImpl(new BigDecimal("5.0"), Currency.EURO),
			new AmountImpl(new BigDecimal("6.0"), Currency.EURO)
		};

		List<Product> products = createProductsWithAmounts(amounts);
		Amount actual = clientBO.getClientProductsSum(products);
		Amount expected = new AmountImpl(new BigDecimal("11.0"), Currency.EURO);
		
		assertAmount(actual, expected);
	}

```

The second version is very easy to understand. The inputs and expectations are clearly states, and this makes it very readable. Teh differences between the two can be summed up in the following points:

###### Name Of The Test

The name of the test should include the condition being tested and if necessary, the result.  hence, ```testClientProductsSum_AllProductsSameCurrency()``` is preferrable to ```testClientProductsSum()```. Also, variations such as ```testClientProductsSum_DifferentCurrenciews_ThrowException()``` takes on a different condition, and also includes the result. This is preferrable to something mundane such as ```testClientProductsSum()```. 

###### The keyword "test" Is Now Superfluous

In later versions of JUnit, after annotations were supported, you don't need to prefix "test" before every test name. Something like ```clientProductsSum_DifferentCurrenciews_ThrowException()``` will do.  

###### Highlight Values Important To A Test

Compare how test setup is being done in the two versions.

```java

	List<Product> products = new ArrayList<Products>();

		products.add(new ProductImpl(100, "Product 15", ProductType.BANK_GUARANTEE, 
					 new AmountImpl(new BigDecimal("5.0"), Currency.EURO)));
		
		products.add(new ProductImpl(120, "Product 20", ProductType.BANK_GUARANTEE, 
					 new AmountImpl(new BigDecimal("6.0"), Currency.EURO)));

```

Over here, there are a lot of values in the setup code that are not relevant to the test at all, such as ```120```, ```"Product 15"```, ```ProductType.BANK_GUARANTEE``` and the like. Compare this to the following in the second example:

```java

	Amount[] amounts = {
			new AmountImpl(new BigDecimal("5.0"), Currency.EURO),
			new AmountImpl(new BigDecimal("6.0"), Currency.EURO)
		};

		List<Product> products = createProductsWithAmounts(amounts);

```

One the data relevant to the condition being tested are included in the test.

###### One Condition Per Test

This standard states that:

* The test results should be presented in simple code without using conditionals, loops, etc.  
* If the test fails, you need to know the exact condition that is failing.
* Create useful assertion methods to test the specific condition.

```java

	private void assertAmount(Amount expected, Amount actual) {
		assertEquals(expected.getCurrency(), actual.getCurrency());
		assertEquals(expected.getValue(), actual.getValue());
	}

```

###### No Exception Handling Within A Test

Have the test method itself throw an exception instead. Prefer the following code:

```java

	public void testClientProductsSum_AllProductsSameCurrency() throws DifferentCurrenciesException{
		//...
	}

```

Instead of the following:

```java

	//BAD PRACTICE
	try {
			temp. clientBO.getClientProductsSum(products);
		} catch(DirrerentCurrenciesException e) {
			fail();
		}

```

This keeps the code very readable. If an exception is thrown, the test would fail any way.

###### Use Annotated Exception Handling To Test For Exceptions

Use code that uses annotated exceptions, such as the following:

```java

	@Test(exception=DifferentCurrenciesException.class)
	public void testClientProductsSum_DifferentCurrencies_ThrowsException() throws DifferentCurrenciesException{
		//... Code That Throws Exception
	}

```

Avoid code that does things like:

```java

	//BAD CODE WARNING
	@Test
	public void testClientProductsSum1() {
		//...

		try {
			//... Code That Throws Exception
		} catch(DirrerentCurrenciesException e) {
			fail("DifferentCurrenciesException expected");
		}

		//...
	}

```

If the particular exception is thrown, the annotation detects it, and the test would pass. Otherwise, the test would fail.

###### Use The New Features

Making use of new features makes code easy to read. Here are a few examples:

* Comparing arrays: Use ```assertArrayEquals(expectedArray, actualArray)```
* Testing exceptions: Use ```<Annotation>(exception=Exception.class)```
* Testing performance: use an annotation like this: ```<Annotation>(timeout=2)```. This sets a timeout of 2 milliseconds. The moment the test takes longer to run, it will fail.

#### Other Unit Testing Best Practices

##### Unit Tests Should be Separated From Production Code

Unit tests should be organized in separate folders and should not be part of your production deployable unit.

##### Unit Tests should be included in CI Builds

All unit tests should be run in a CI Build as soon as the code is commited. This leads to early detection of bugs.

You can check out our video on the same topic:

[![image info](images/Capture-107-01.png)](https://www.youtube.com/watch?v=BukAouJgEjo)

### Summary

In this article, we focused on the principles behind writing good unit tests. 

If you follows these principles of unit testing, the result is that your tests can be used a documentation. For example, have  a look at the tests that we explored a little earlier:

* ```testClientProductsSum_AllProductsSameCurrency```
* ```testClientProductsSum_DifferentCurrencies_ThrowsException```
* ```testClientProductsSum_NoProducts```

These are very readable tests, and they can be used in your business discussions as well!

