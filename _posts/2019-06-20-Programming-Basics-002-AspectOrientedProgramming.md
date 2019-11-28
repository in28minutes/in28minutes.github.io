---
layout:  post
title:  Introduction To Aspect Oriented Programming and Cross Cutting Concerns
date:    2019-06-21 12:31:19
summary: Software applications are built in layers. There is common functionality that is sometimes needed across layers - logging, performance tracing etc. How do you implement these common features? 
categories:  SwProgramming
permalink:  /introduction-to-aspect-oriented-programming-and-cross-cutting-concerns
---

Software applications are built in layers. There is common functionality that is sometimes needed across layers - logging, performance tracing etc. 

How do you implement these common features?

### You will learn?
* What Is Aspect Oriented Programming?
* What are the important concepts behind Aspect-Oriented Programming? 
* What are the situations where AOP is used?
* Why is AOP needed?
* What are the best Java frameworks to implement AOP?

### What Is Aspect Oriented Programming?

In order to understand what **Aspect Oriented Programming (AOP)** is all about, let's first talk about **layered architecture**, and  something called **cross-cutting concerns**. 

#### What is a Layered Architecture

Whenever we design and develop a large software application, we make use of  a **layered architecture**. For instance, in a web application, it is quite common to see an architecture similar to the following:

![image info](/images/Capture-02-01.png)

Here, we see that the application is organized into a Web layer, a Business layer, and a Data layer. 

#### Understanding Cross Cutting Concerns

In a layered architecture, there are specific parts that are common to all these different layers. Such parts include:

* Logging
* Security
* Performance
* Auditing

All these features are applicable across layers, hence it makes sense to implement them in a common way. 

Let's say you want to implement logic to find out how much time each method takes to execute, in each of the three layers (Web, Business and Data) above. 

That's where AOP steps in.

#### An Example Of AOP

Let's now look at a simple example where we apply AOP.

```java

	@Component
	class HiByeService {
	  public void sayHi(String name) {
	    System.out.println("Hi " + name);
	  }
	
	  public void sayBye() {
	    System.out.println("Bye");
	  }
	
	  public String returnSomething() {
	    return "Hi Bye";
	  }
	}
```

The ```class``` ```HiByeService``` has a few methods such as ```sayHi()```, ```sayBye()``` and ```returnSomething()``` defined within it. 

We want to do a few computations by taking up each of these methods, by turn at the following stages:
* Do something before the method begins execution
* Do something after the method completes execution
* Track how much time the method takes during its execution

Here we take ```HiByeService``` as a specific example to work with. The same could be done across several classes that make up such an application. 

Let's take each of these computations and look at them in some detail.

#### Doing Stuff Before Execution

Have a look at the following AOP code:

```java

	@Aspect
	@Component
	class MyAspect {
	  @Before("execution(* HiByeService.*(..))")
	  public void before(JoinPoint joinPoint) {
	    System.out.print("Before ");
	    System.out.print(joinPoint.getSignature().getName());
	    System.out.println(Arrays.toString(joinPoint.getArgs()));
	  }
```

We first define an **aspect** with the annotation ```@Aspect``` for the ```class``` ```MyAspect```. Within it is another annotation, ```@Before``` that describes the method ```before()```. The idea of this aspect is that whatever logic lies in the ```before()``` body, is executed before any method of ```HiByeService``` is run. Note that in the ```@Before``` annotation, a package name could also be mentioned instead of a class name. This aspect would then be executed before any method in the entire package. 

#### Doing Stuff After Execution

Similar to this, it is also possible to define an aspect to execute after every method within ```HiByeService``` is run:

```java

	@AfterReturning(pointcut = "execution(* HiByeService.*(..))"
	                    , returning = "result")
	  public void after(JoinPoint joinPoint, Object result) {
	    System.out.print("After ");
	    System.out.print(joinPoint.getSignature().getName());
	    System.out.println(" result is " + result);
	  }
	}

```

For this, you need to define a method with an ```@AfterReturning``` annotation, defined above for the ```after()``` method. This method here takes an extra argument to store the result of execution of the method of ```HiByeService```. 

#### Doing Stuff Around Execution

An additional thing you can do is define an aspect around the execution of a method:

```java

	@Around(value = "execution(* HiByeService.*(..))")
	public void around(ProceedingJoinPoint joinPoint) 
	                                      throws Throwable {
	  long startTime = new Date().getTime();
	  Object result = joinPoint.proceed();
	  long endTime = new Date().getTime();
	  System.out.print("Execution Time - " 
	                  + (endTime - startTime));
	}

```

Over here, we have made use of an annotation called ```@Around``` to decorate the ```around()``` method. 

In this method body, we intercept the call to the method in ```HiByeService``` in the following manner:

* We make note of the start time of execution
* Allow the method to run its course
* Finally, we make note of the end time of execution

We then output the computed execution time of that method. 

#### How To Make Use Of AOP

At a high level, AOP allows you to intercept calls to methods, and perform logic around these calls. We have used annotations to decorate our computations within the aspect. 

In our examples above, we have restricted ourselves to a single class. However, we could easily extend it to more classes or packages by *varying* the **regular expression** we use in the annotations. 

For example, we could choose to intercept classes pertaining to the web layer, or classes across all three layers of the example web application.

#### Terms We Use In AOP

Let's now look at some important terms we use when talking about AOP.

* **Point Cut** : It refers to the regular expression that defines what methods need to be intercepted by this aspect. It essentially says where the logic within an aspect method is applicable. 
* **Advice** : This is nothing but the logic within the aspect method. It describes what we do when the Point Cut expression is matched. 
* **Aspect**: The combination of the Point Cut and the Advice
* **Join Point**: This refers to the situation where a method's execution has been intercepted, and the aspect is in execution
* **Weaving**: The entire process of taking a method, intercepting its execution and applying an aspect to its execution. This is the functionality provided by the AOP framework. Examples of AOP frameworks are **SpringAOP** and **AspectJ**.

#### AOP In Summary

In this article, we looked at Aspect Oriented Programming (AOP). We talked about cross-cutting concerns, and described the situations where AOP can be used. In particular, we saw examples of how we can define a point cut, and define the logic of an aspect. We focused on how we can specify aspects to run before, after or around the execution of a method. We then examined the important terms that describe AOP concepts.

Do check out our video on this:

[![image info](/images/Capture-02-08.png)](https://www.youtube.com/watch?v=3UE_QTaohOg)

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

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


