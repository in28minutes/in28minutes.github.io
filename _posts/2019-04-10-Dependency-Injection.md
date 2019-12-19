---
layout:  post
title:  Spring Basics - Dependency Injection and Inversion of Control
date:   2019-04-10 12:31:19
summary: Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concepts of Dependency Injection and Inversion Of Control.
categories:  SpringFramework
permalink:  /spring-framework-dependency-injection-inversion-of-control
---
 
Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concepts of Dependency Injection and Inversion Of Control.

## You will learn
- What Is Dependency Injection?
- Why do you need Dependency Injection?
- What Is tight coupling?
- What Is de-coupling?
- How does Spring Framework provide Dependency Injection?
- What Is Inversion Of Control?
- What are good examples of inversion of control?
- How does Spring Framework implement Inversion of Control?
- Why Is Inversion of Control Important and what are its advantages?

### Spring Framework

This is the third article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}



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


### What Is Dependency Injection?

Dependency injection is the core feature of the Spring Framework.  Dependency injection is a concept that is borrowed from the Dependency Inversion Principle (DIP). 

#### Tight Coupling

Have a look at the following examples of code:

##### Example-1

```java

	public class TodoBusinessService {
		TodoDataServiceImpl dataService = new TodoDataServiceImpl();
		//... 
	}

```  

```TodoBusinessService``` is directly creating an instance of ```TodoDataServiceImpl``` within itself. 

##### Example-2

```java

	public class ComplexAlgorithmImpl {
		BubbleSortAlgorithm bubbleSortAlgorithm = new BubbleSortAlgorithm();
		//...
	}

``` 

```ComplexAlgorithmImpl``` is meant to perform a lot of complex logic, and one of the things it does is sorting. here, it is directly creating an instance of ```BubbleSortAlgorithm``` within itself.

These two examples highlight code with tight coupling. 

Imagine what you need to do, if you want to change the sort algorithm to quicksort. You need to change the relevant code within ```ComplexAlgorithmImpl```. 

Hence, ```ComplexAlgorithmImpl``` is tightly coupled to ```BubbleSortAlgorithm```, a specific sort algorithm.

#### Decoupling ```ComplexAlgorithmImpl```

How do we decouple ```ComplexAlgorithmImpl``` from the specific sort algorithm? 

We want it to be used with bubble sort, or quick sort, or radix sort, or any other sort. The solution is to make use of an interface.

Have a look at the following code:

```java

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;	
		//...
	}

	public class BubbleSortAlgorithm implements SortAlogrithm {
		//...
	}

	public class QuickSortAlgorithm implements SortAlogrithm {
		//...
	}

``` 
#### Decoupling Explained

We have created an interface named ```SortAlgorithm``` that has ```sort()``` method defined. Specific sort algorithms all implement ```SortAlgorithm``` by overriding ```sort()```. Here, ```ComplexAlgorithmImpl``` makes use of ```SortAlgorithm``` as a dependency by declaring it as a member. However, the actual implementation of ```SortAlgorithm``` needs to be passed in as a parameter to its constructor, or a setter method. The user decides which specific sort algorithm ```ComplexAlgorithmImpl``` gets to use.

Whichever class wants to make use of ```ComplexAlgorithmImpl``` needs to write code such as this:

```java

	CompexAlgorithmImpl binarySearch = new ComplexAlgorithmImpl(new QuickSortAlgorithm());

```

Other classes may choose to pass in ```SortAlgorithm``` implementations for bubble sort, heap sort or radix sort. 

#### Inversion of Control with ```ComplexAlgorithmImpl```

Look at it from the perspective of ```ComplexAlgorithmImpl```. 

In the first approach, it took up the responsibility of selecting the specific sort algorithm. As a result, the specific ```BubbleSortAlgorithm``` was hard-coded.

In the second approach, the class which uses ```ComplexAlgorithmImpl``` gets to decide which specific sort algorithm is to be used. 

There is a clear inversion of responsibility taking place. This is also called Inversion of Control or **dependency inversion**.

Dependency inversion results in **loose coupling**.  ```ComplexAlgorithmImpl``` is not tied to a specific sort algorithm.

### Dependency Injection In Spring

Now where does Spring framework come into picture?

Lets look at the code below:

```java

	CompexAlgorithmImpl binarySearch = new ComplexAlgorithmImpl(new QuickSortAlgorithm());

```

In the above piece of code, we are manually creating the objects and tying them up with dependencies. In a typical application, we might have thousands of objects. Do you want to write the code for all it manually. How about having a framework that does this for you?

Let's consider the following example:

```java

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;	
		//...
	}

```

When this code is run - Spring creates an instance of ```QuickSortAlgorithm``` which implements ```SortAlgorithm``` interface, and wires it into an instance of ```ComplexAlgorithmImpl```. 

This process, where the Spring framework identifies the beans, identifies the dependencies, and populates the dependencies inside the beans is called **dependency injection**. 

#### Dependency Inversion And Dependency Injection

So far in this article, we have discussed two important concepts:

* Dependency Inversion : We create loosely couple code by explicitly declaring dependencies, and introducing interfaces for them. 
* Dependency Injection : The Spring framework identifies beans and dependencies, and wires dependencies inside beans.

Do check out our video on the same topic:

[![image info](images/Capture-091-01.png)](https://www.youtube.com/watch?v=4sD_3BzxJOo)

### Summary

In this article, we talked about dependency injection. Dependency injection has its roots in a core SOLID principle of object oriented programming, named the Dependency Inversion principle. We saw how dependency inversion transforms tightly couple code into a loosely coupled one. Dependencies are explicitly identified, and classes that use them become flexible.

Dependency injection is a mechanism based on dependency inversion. The Spring framework identifies beans and dependencies, and autowires the dependencies into beans.

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---


---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---
---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---
