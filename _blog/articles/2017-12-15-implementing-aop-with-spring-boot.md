---
layout:     post
title:      Implementing AOP with Spring Boot and AspectJ
date:       2022-07-06 12:31:19
summary:    Learn how to implement AOP with Spring Boot Starter AOP and AspectJ. You will understand cross cutting concerns and the basics of AOP - Aspect, Point cut, JoinPoint, Advice and more.
categories:  SpringBoot
permalink:  /spring-boot-and-aop-with-spring-boot-starter-aop
image: /images/spring-boot-feature.png
---

This guide will help you implement AOP with Spring Boot Starter AOP. We will implement 4 different advices using AspectJ and also create a custom annotation to track execution time of a method.

![Image](/images/SpringBootAOPProjectStructure.png "Spring Boot AOP Project Structure") 
 
## You will learn
- What are cross cutting concerns?
- How do you implement cross cutting concerns in an application?
	- If you would want to log every request to a web application, what are the options you can think of?
	- If you would want to track performance of every request, what options can you think of?
- What is an Aspect and Point cut in AOP?
- What are the different types of AOP advices?
- How do you implement AOP with Spring Boot?
- How to use Spring AOP and AspectJ to implement your aspects?
- What are the AOP Best Practices?


## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootAOPProjectStructure.png "Spring Boot AOP Project Structure") 

A few details:

- SpringBootTutorialBasicsApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `Business1.java`, `Business2.java`, `Dao1.java`, `Dao2.java` - Business classes are dependent on Dao classes. We would write aspects to intercept calls to these business and dao classes.
- `AfterAopAspect.java` - Implements a few After advices.
- `UserAccessAspect.java` - Implements a before advice to do an access check.
- BusinessAopSpringBootTest.java - The unit test which invokes the business methods.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics


## Introduction to AOP

Applications are generally developed with multiple layers. A typical Java application has 
- Web Layer - Exposing the services to outside world using REST or a web application
- Business Layer - Business Logic
- Data Layer - Persistence Logic 

While the responsibilities of each of these layers are different, there are a few common aspects that apply to all layers
- Logging
- Security

These common aspects are called Cross Cutting Concerns.

One option of implementing cross cutting concerns is to implement it seperately in every layer. However, that would mean that the code becomes difficult to maintain.

Aspect Oriented Programming provides a solution to implement Cross Cutting Concerns. 
- Implement the cross cutting concern as an aspect.
- Define point cuts to indicate where the aspect has to be applied.

This ensures that the cross cutting concerns are defined in one cohesive code component and can be applied as needed.

## Setting up Spring Boot AOP Project

Creating a Spring AOP Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

Notes
- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.tutorial.basics.example` as Group
  - Choose `spring-boot-tutorial-basics` as Artifact
  - Choose the following Dependencies
    - AOP
- Click Generate Project.
- Import the project into Eclipse.

## Spring Boot AOP Starter

> Starter for aspect-oriented programming with Spring AOP and AspectJ

Key dependencies in the Spring Boot AOP Starter are listed below 
- Spring AOP provides basic AOP Capabilities.
- AspectJ provides a complete AOP framework.

```
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-aop</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.aspectj</groupId>
  <artifactId>aspectjweaver</artifactId>
  <scope>compile</scope>
</dependency>

```

## Setting up AOP Example

Let's add a couple of business classes Business1 and Business2. These business classes are dependent on a couple of data classes Data1 and Data2.

```java
@Service
public class Business1 {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private Dao1 dao1;
	
	public String calculateSomething(){
		String value = dao1.retrieveSomething();
		logger.info("In Business - {}", value);
		return value;
	}
}
```

```java
@Service
public class Business2 {
	
	@Autowired
	private Dao2 dao2;
	
	public String calculateSomething(){
		//Business Logic
		return dao2.retrieveSomething();
	}
}
```

```java
@Repository
public class Dao1 {

	public String retrieveSomething(){
		return "Dao1";
	}

}
```

```java
@Repository
public class Dao2 {

	public String retrieveSomething(){
		return "Dao2";
	}

}
```

Notes
- `@Autowired private Dao1 dao1` - The Dao's are autowired as dependencies into the Business classes.
- `public String calculateSomething(){` - Each of the business classes have a simple calculate method.

#### Simple Unit Test to Test AOP

Let's write a simple unit test to invoke the business classes created below.

```
@RunWith(SpringRunner.class)
@SpringBootTest
public class BusinessAopSpringBootTest {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private Business1 business1;

	@Autowired
	private Business2 business2;

	@Test
	public void invokeAOPStuff() {
		logger.info(business1.calculateSomething());
		logger.info(business2.calculateSomething());
	}
}
```

Notes
- `@RunWith(SpringRunner.class) @SpringBootTest public class BusinessAopSpringBootTest` - We are launching up the complete Spring Boot Application in the Unit Test.
- `@Autowired private Business1 business1` and `@Autowiredprivate Business2 business2` - Autowire the business classes into the test from the launched up Spring Context
- `@Test public void invokeAOPStuff() {` - Invoke the methods on the business services.

At this point, we have no AOP logic implemented. So, the output would be the simple messages from the Dao and Business classes.

```
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : In Business - Dao1
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : Dao1
```

## Implementing @Before advice

Typically when we implement security using AOP, we would want to intercept the call to the method and apply your check. This is typically done using @Before advice.

An implementation is shown below.


```java

@Aspect
@Configuration
public class UserAccessAspect {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	//What kind of method calls I would intercept
	//execution(* PACKAGE.*.*(..))
	//Weaving & Weaver
	@Before("execution(* com.in28minutes.springboot.tutorial.basics.example.aop.data.*.*(..))")
	public void before(JoinPoint joinPoint){
		//Advice
		logger.info(" Check for user access ");
		logger.info(" Allowed execution for {}", joinPoint);
	}
}
```

Notes
- `@Aspect` - Indicates that this is an Aspect
- `@Configuration` - Indicates that this file contains Spring Bean Configuration for an Aspect.
- `@Before` - We would want to execute the Aspect before execution of the method
- `("execution(* com.in28minutes.springboot.tutorial.basics.example.aop.data.*.*(..))")` - This defines the point cut - We would want to intercept all method calls made to any methods in the package `com.in28minutes.springboot.tutorial.basics.example.aop.data`


When you run the unit test, you will see that before executing the DAO method the user access check code is executed.
```
Check for user access 
Allowed execution for execution(String com.in28minutes.springboot.tutorial.basics.example.aop.data.Dao1.retrieveSomething())
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : In Business - Dao1
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : Dao1

Check for user access 
Allowed execution for execution(String com.in28minutes.springboot.tutorial.basics.example.aop.data.Dao2.retrieveSomething())
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : Dao2
```

#### Understanding AOP Terminology - Pointcut, Advice, Aspect, Join Point

Let's spend some time understanding the AOP Terminology
- Pointcut - Pointcut is the expression used to define when a call to a method should be intercepted. In the above example, `execution(* com.in28minutes.springboot.tutorial.basics.example.aop.data.*.*(..))` is the pointcut.
- Advice - What do you want to do? It is the logic that you would want to invoke when you intercept a method. In the above example, it is the code inside the `before(JoinPoint joinPoint)` method.
- Aspect - A combination of defining when you want to intercept a method call (Pointcut) and what to do (Advice) is called an Aspect.
- Join Point - When the code is executed and the condition for pointcut is met, the advice is executed. The Join Point is a specific execution instance of an advice.
- Weaver - Weaver is the framework which implements AOP - AspectJ or Spring AOP.

####Using @After, @AfterReturning, @AfterThrowing advices

Let's now the other interception options AOP provides.
- `@After` - Executed in two situations - when a method executes successfully or it throws an exception.
- `@AfterReturning` - Executed only when a method executes successfully.
- `@AfterThrowing` - Executed only when a method throws an exception.

Let's create a simple Aspect with a couple of these variations.

```
@Aspect
@Configuration
public class AfterAopAspect {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@AfterReturning(value = "execution(* com.in28minutes.springboot.tutorial.basics.example.aop.business.*.*(..))", 
			returning = "result")
	public void afterReturning(JoinPoint joinPoint, Object result) {
		logger.info("{} returned with value {}", joinPoint, result);
	}
	
	@After(value = "execution(* com.in28minutes.springboot.tutorial.basics.example.aop.business.*.*(..))")
	public void after(JoinPoint joinPoint) {
		logger.info("after execution of {}", joinPoint);
	}
}
```

The code is self explanatory. 

Output from execution is shown below:
```
Check for user access 
Allowed execution for execution(String com.in28minutes.springboot.tutorial.basics.example.aop.data.Dao1.retrieveSomething())
In Business - Dao1
after execution of execution(String com.in28minutes.springboot.tutorial.basics.example.aop.business.Business1.calculateSomething())
execution(String com.in28minutes.springboot.tutorial.basics.example.aop.business.Business1.calculateSomething()) returned with value Dao1
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : Dao1
Check for user access 
Allowed execution for execution(String com.in28minutes.springboot.tutorial.basics.example.aop.data.Dao2.retrieveSomething())
after execution of execution(String com.in28minutes.springboot.tutorial.basics.example.aop.business.Business2.calculateSomething())
execution(String com.in28minutes.springboot.tutorial.basics.example.aop.business.Business2.calculateSomething()) returned with value Dao2
c.i.s.t.b.e.a.BusinessAopSpringBootTest  : Dao2

```

As you can see, just before returning the values to the calling business methods, the after advices are executed.

## Other AOP Features - @Around and Annotations

One of the other features you can implement using AOP are custom annotations for intercepting method calls.

Example below shows a simple `TrackTime` annotation.
```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TrackTime {
```

We can add an aspect defining what should be done when `TrackTime` annotation is used. MethodExecutionCalculationAspect implements a simple time tracking.
```java
@Aspect
@Configuration
public class MethodExecutionCalculationAspect {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Around("@annotation(com.in28minutes.springboot.tutorial.basics.example.aop.TrackTime)")
	public void around(ProceedingJoinPoint joinPoint) throws Throwable {
		long startTime = System.currentTimeMillis();

		joinPoint.proceed();

		long timeTaken = System.currentTimeMillis() - startTime;
		logger.info("Time Taken by {} is {}", joinPoint, timeTaken);
	}
}
```
Notes
- `@Around` - Uses an around advice. Intercepts the method call and uses `joinPoint.proceed()` to execute the method.
- `@annotation(com.in28minutes.springboot.tutorial.basics.example.aop.TrackTime)
` - Pointcut to define interception based on an annotation - @annotation followed by the complete type name of the annotation.

Once we define the annotation and the advice, we can use the annotation on methods which we would want to track as shown below.

```
@Service
public class Business1 {
		
	@TrackTime
	public String calculateSomething(){
```

## AOP Best Practices

One of the AOP Best Practices is to deine a Common Class to store all the Pointcuts. This helps in maintaining the pointcuts at one place.

```java
public class CommonJoinPointConfig {
	
	@Pointcut("execution(* com.in28minutes.spring.aop.springaop.data.*.*(..))")
	public void dataLayerExecution(){}
	
	@Pointcut("execution(* com.in28minutes.spring.aop.springaop.business.*.*(..))")
	public void businessLayerExecution(){}

}
```
The above common definition can be used when defining point cuts in other aspects.

```java
@Around("com.in28minutes.spring.aop.springaop.aspect.CommonJoinPointConfig.businessLayerExecution()")
```
