---
layout:  post
title:  Introduction To Spring Framework - Quick Tutorial For Beginners
date:   2019-04-10 12:31:19
summary: In this article, we look to get an introduction to what the Spring framework is, and why it is so widely used.
categories:  SpringFramework
permalink:  /introduction-to-the-spring-framework
---

In this article, we look to get an introduction to what the Spring framework is, and why it is so widely used. 
 
## You will learn
- What is Spring Framework?
- What are the important problems that Spring Framework solves?
- How does Spring Framework make building enterprise applications easier?
- What are important features of Spring Framework?
- What are important concepts to understand in Spring Framework?
- Why Is The Spring Framework Important?
- What are the best practices in using Spring Framework?
- What are Spring Projects?
- What are Spring Modules?

### Spring Framework

This is the first article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}

### What Is Spring?

Here's the description from the Spring web site:

> The Spring framework provides comprehensive infrastructural support to develop Java applications.  Spring handles the infrastructure, so you can develop your application. 

What does this mean?

Let's look at some of the important features of Spring framework with examples.

### Writing Loosely Coupled Code

When we write application code, we don't want it to be tightly coupled.

#### What Is Tight Coupling?

Tightly coupled code could look like the following:

```java

	public class ComplexAlgorithmImpl {
		BubbleSortAlgorithm bubbleSortAlgorithm = new BubbleSortAlgorithm();
		//...
	}

```

```ComplexAlgorithmImpl``` is tightly coupled to the ```BubbleSortAlgorithm```. 

If you need to change the sort algorithm from ```BubbleSortAlgorithm``` to ```QuickSortAlgorithm```, then the code of ```ComplexAlgorithmImpl``` needs to change as well.

#### What Is Loose Coupling?

Is there a better way to manage change, than what we see over here?  turns out there is - use an interface named ```SortAlgorithm```:

```java

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	public class BubbleSortAlgorithm implements SortAlgorithm {
		//...
	}

	public class QuickSortAlgorithm implements SortAlgorithm {
		//...
	}

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;
		//...
	}

```

```ComplexAlgorithmImpl``` is no longer tightly coupled to any particular sort algorithm. 

Whenever you need to instantiate a ```ComplexAlgorithmImpl```, this is how  you proceed:

```java

	ComplexAlgorithmImpl binarySearch = new ComplexAlgorithmImpl(new QuickSortAlgorithm());

```

The exact sort algorithm to be used can be passed as an input parameter to the constructor.  

#### What does the Spring Framework do?

Where does the Spring framework come into the picture? 

Look at the snippet below:


```java

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;
		//...
	}

```

```java
	@Component
	public class QuickSortAlgorithm implements SortAlgorithm {
		//...
	}
```

We defined the components and identified their dependencies by using Spring specific annotations.

We are defining ```ComplexAlgorithmImpl``` as a spring bean, and ```SortAlgorithm``` as a dependency. We are also providing an implementation of ```SortAlgorithm``` - ```QuickSortAlgorithm``` as a spring bean.

When Spring Framework looks at this code, it create a QuickSortAlgorithm bean and injects it into ComplexAlgorithmImpl bean. This is called **Dependency Injection**. 

### Advantages Of Loose Coupling

If you want to switch to a new ```SortAlgorithm``` implementation, then loose coupling makes it very easy to make the change. The code inside ```ComplexAlgorithmImpl``` does not need to change at all.

You need to remove the ```@Component``` annotation from ```QuickSortAlgorithm``` and place it at the definition of the new implementation. 

The other thing you are now able to do is write a unit test for ```ComplexAlgorithmImpl```, without worrying about the sort logic. 

You can create a stub algorithm that implements ```SortAlgorithm```, and use that in tests for ```ComplexAlgorithmImpl```. The test would now focus on the business logic of the component, not its dependencies.

### Another Example Of Loose Coupling

Have a look at the following code:

```java

	@RestController
	public class WelcomeController {
		private WelcomeService service = new WelcomeService();
		
		@RequestMapping("/welcome")
		public String welcome() {
			return service.retrieveWelcomeMessage();
		}
	}

```

The ```WelcomeController``` is directly creating an instance of the ```WelcomeService```, and so it is tightly coupled to it. 

If you were to use the Spring framework to decouple the two, you do something like:

```java

	@Component
	public class WelcomeService {
		//...
	}

	@RestController
	public class Welcome Controller {
	{
		@Autowired
		WelcomeService service;

		@RequestMapping("/welcome")
		public String welcome() {
			return service.retrieveWelcomeMessage();
		}		
	}	

``` 

Now, Spring auto-wires in the ```WelcomeService``` dependency to the ```WelcomeController``` component. When writing a unit test for this component, we can use a ```WelcomeService``` stub instead of an actual dependency. 

### Solving Other Problems Using Spring

The Spring framework can be used to solve a host of other problems in Java applications.
Let's look at a few of them.

#### Reducing Duplication In Code

Spring provides a whole range of modules such as:

* SpringMVC
* SpringJDBC
* SpringORM
* SpringAOP
* SpringJMS
* SpringTest

All these frameworks make it easy to write your Java code. They bring in a set of abstractions, that reduce boilerplate code.  

#### Improving Integration With Other Frameworks

Spring does not try to provide solutions for problems that have already been solved. It provides excellent integration with frameworks such as 
* Hibernate for ORM
* iBatis for object mapping
* JUnit and Mockito for unit testing

### What Does The Spring Framework Do?

The Spring framework facilitates the following:

* Allows the programmers to focus on the business logic. The key feature is dependency management, and it provides excellent interfacing with external frameworks, by adding layers on top of them. 
* Enables testability, as it enables us to write decoupled code.
* Allows for inversion of control, through dependency injection. A component is no longer tied to specific dependencies. Instead, the dependency is injected in from outside, during instantiation of the component. The Spring framework takes care of the actual injection.

### Best Practices With Spring

#### Use Spring Initializr

Spring Initializr is a Spring project generation tool. Visit the following website - start.spring.io:

![image info](images/Capture-081-02.png)

You only need to provide the Group Id, the Artifact Id, and the framework dependencies of the project. After that, you can generate the project and get started with Spring.

#### Consider Spring Boot

Spring Boot makes it very easy to use the Spring framework.

#### Write Unit Tests

Always make sure you write great unit tests, because Spring makes it easy for you.

### Challenges With Spring Framework

Spring is difficult for a starting programmer to understand. However, once you understand it, you cannot stop using it!

### Understand Spring Modules

Modules in Spring offer specialized functionality which can be used within a Spring application. Popular ones are:

* SpringMVC
* SpringJDBC
* SpringORM
* SpringAOP
* SpringJMS
* SpringTest

### Explore Spring Projects

There are a wide variety of projects that have been done, under the umbrella of the Spring Framework. Popular ones include Spring Cloud, and Spring Web Services. 

Do check out our video on the same topic:
[![image info](images/Capture-081-01.png)](https://www.youtube.com/watch?v=6xB-uXqbOqo)

### Summary

In this article, we had an introductory look at the Spring Framework. We saw that Spring is a Java framework that makes life easy for a programmer. Spring improves the testability of the application code, and also makes it easy to interface it with external frameworks. Spring comes with its own umbrella of projects, and a rich set of modules as well.

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
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


