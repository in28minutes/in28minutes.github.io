---
layout:  post
title:  Spring Framework Basics - What Is Inversion Of Control?
date:   2019-04-10 12:31:19
summary: Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concept of Inversion of Control.
categories:  SpringFramework
permalink:  /spring-framework-what-is-inversion-of-control
---

Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concept of Inversion of Control.
 
## You will learn
- What Is Inversion Of Control?
- What are good examples of inversion of control?
- How does Spring Framework implement Inversion of Control?
- Why Is Inversion of Control Important and what are its advantages?

### What Is Inversion Of Control?

#### Approach-1

Have a look at the following implementation of ```ComplexAlgorithmImpl```:

```java

	public class ComplexAlgorithmImpl {
		BubbleSortAlgorithm bubbleSortAlgorithm = new BubbleSortAlgorithm();
		//...
	}

``` 

One of the numerous things that ```ComplexAlgorithmImpl``` does is sorting. It creates an instance of ```BubbleSortAlgorithm``` directly within its code. 

#### Approach-2

Now look at this implementation for a change:

```java

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	@Component
	public class ComplexAlgorithmImpl {
		@AutoWired
		private SortAlgorithm sortAlgorithm;
		//...
	}

```

```ComplexAlgorithmImpl``` here makes use of the ```SortAlgorithm``` interface. It also provides a constructor or a setter method, where you can set the ```SortAlgorithm``` instance into it. The user tells ```ComplexAlgorithmImpl``` which sort algorithm to make use of.

### Comparing Approach-1 and Approach-2

#### Approach-1

* ```ComplexAlgorithmImpl``` can only use ```BubbleSortAlgorithm```, it is **tightly coupled**. 
* If we need to change ```ComplexAlgorithmImpl``` to use quicksort, the relevant code needs to be changed entirely.
* The control over the ```BubbleSortAlgorithm``` dependency is with the ```ComplexAlgorithmImpl``` class. 


#### Approach-2

* ```ComplexAlgorithmImpl``` is open to using any implementation of ```SortAlgorithm```, it is **loosely coupled**.
* We only need to change the parameter we pass to the constructor or setter of ```ComplexAlgorithmImpl```.
*  The control over the ```SortAlgorithm``` dependency is with the user of ```ComplexAlgorithmImpl```. 

### Inversion Of Control At Play!

In Approach-1, ```ComplexAlgorithmImpl```  is tied to a specific sort algorithm. 

In Approach-2, it say's - give me any sort algorithm and I will work with it. 

This is **inversion of control**. 

Instead of creating its own dependencies, a class declares its dependencies. The control now shifts from the class to the user of the class to provide the dependency.

### Why Is Inversion of Control Important?

Once you wrote code with inversion of control, you can use frameworks like Spring to do Dependency Injection and wire up beans and dependencies.

### Advantages Of Inversion Of Control
* Inversion of control makes your code loosely coupled
* Inversion of control makes it easy for the programmer to write great unit tests

Do check out our video on the same topic:

[![image info](images/Capture-090-01.png)](https://www.youtube.com/watch?v=oLxsTnH_peI)

### Summary

In this article, we talked about inversion of control. Instead of a class creating an instance of its own dependency, it leaves it to the user of class to pass it in. Inversion of control makes code loosely coupled. 

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


