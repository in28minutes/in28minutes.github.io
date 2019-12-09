---
layout:  post
title:  Spring Framework - What Is Component Scan?
date:   2019-04-10 12:31:19
summary: Spring framework identifies the beans and their dependencies, creates the beans and injects the dependencies into beans. How does the Spring Framework know where to search for beans and dependencies? How does Spring Boot make it easier?
categories:  SpringFramework
permalink:  /spring-and-spring-boot-what-is-component-scan
---

Spring framework identifies the beans and their dependencies, creates the beans and injects the dependencies into beans. How does the Spring Framework know where to search for beans and dependencies? How does Spring Boot make component scan easier?
 
## You will learn
- Why do we need Component Scan in Spring?
- How can you configure a Component Scan in Spring with XML and Java Annotation based configuration?
- How does Spring Boot provide an automatic Component Scan?
- How do you solve problems with Component Scan?

In this article, we understand a little bit about component scan in the context of the Spring framework. We also see how component scan works with the Spring Boot framework.

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


### Spring Framework

This is the fourth article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}


### Functionality Of The Spring Framework?

What is the fundamental functionality of the Spring framework? It is dependency injection. 

Spring framework identifies the beans and their dependencies, finds them and injects the dependencies into beans. 

Have a look at the following example:

```java

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		privare SortAlgorithm sortAlgorithm;
		//...
	}

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	@Component
	public class QuickSortAlgorithm implements SortAlgorithm {
		//...
	}

```

Let's quickly look at what Spring Framework needs to do get the autowiring working.

Spring framework needs to create instances of ```ComplexAlgorithmImpl``` and ```QuickSortAlgorithm```. 

Since ```QuickSortAlgorithm``` is the only implementation of ```SortAlgorithm``` available, it needs to be auto-wired into the ```sortAlgorithm``` field of ```ComplexAlgorithmImpl```. 

### How Does Spring Search For Beans?

Let's look at a few questions?
- How does Spring know where to look for the beans? 
- How does it know where it needs to search for classes with annotations such as ```@Component``` and ```@Service```?  

A typical application could have hundreds of JARS, and as a result, thousands of classes. Therefore, it is not practical for Spring to search in all the classes present in the ```CLASSPATH```.

### Enter Component Scan

Clearly, Spring needs to be given inputs to identify the packages of the beans and dependencies. This is where component scan comes into the picture. 

You declare a component scan by passing in a list of packages where the scan needs to take place:

```java

	@Configuration
	@ComponentScan(basePackages = {
			"com.in28minutes.spring.example1.businessservice",
			"com.in28minutes.spring.example1.dataservice.stub"})

	class SpringContext {
	}

```

The packages mentioned above are the locations where the beans and their dependencies are defined. This ```@ComponentScan``` gives a clue to the Spring framework on where to search. 

### Component Scan With XML Configuration

The thing is, component scan an also be done with XML configuration:

![image info](images/Capture-092-02.png)

For this, use the ```<context:component-scan>``` tag, and specify the packages that are the locations. 

### How does Auto Configuration work with Spring Boot?

Spring Boot tries to automate a lot of stuff. Consider the code example below:

```java

	package com.in28minutes.spring.basics.springin5steps;

	@SpringBootApplication
	public class SpringIn5StepsApplication {
		//...
	}

```

```java

	package com.in28minutes.spring.basics.springin5steps;
	
	@RunWith(SpringRunner.class)

	@SpringBootTest
	public class SpringIn5StepsApplicationTests {
		//...
	}

``` 

As soon as Spring Boot sees the annotation ```@SpringBootApplication```, it does an automatic scan on the current package, which is ```com.in28minutes.spring.basics.springin5steps```. 

You don't need to explicitly define a component scan. If all the components that you need are present in the same package as ```SpringIn5StepsApplication```, you don't need to explicitly specify component scan.

### Troubleshooting Component Scan In Spring Boot

Have a look at the following Spring Boot application:

![image info](images/Capture-092-03.png)

Since ```SpringbootIn10StepsApplication``` has a ```@SpringBootApplication``` annotation attached to it, an automatic component scan in the package ```com.in28minutes.springboot.basics.springbootin10steps```, and all its sub-packages. 

However, what would happen if you have one of the components defined in a different package, say ```com.in28mnutes.springboot.somethingelse```? 

In this case, you need to add that package to the component scan. There are a couple of options available for doing this.

### Explicit Component Scan In Spring Boot

There are two ways of doing an explicit component scan:

#### Scan a parent package

This would scan the entire parent package tree of ```com.in28minutes.springboot```. 

```java

	@ComponentScan("com.in28minutes.springboot")
	
	@SpringBootApplication
	public class SpringBootApllicationIn10Steps {
		//...
	}

``` 


#### Define explicit scans

In this case, we explicitly mention a list of specific packages within the tree. Therefore, only those two paths in the package tree will now get scanned.

```java

	@ComponentScan({
		"com.in28minutes.springboot.basics.springbootin10steps",
		"com.in28minutes.springboot.somethingelse"})
	
	@SpringBootApplication
	public class SpringBootApllicationIn10Steps {
		//...
	}

```


As soon as you explicitly define a component scan, you are taking complete control. The default automatic scan that generally happens with Spring Boot will not longer take place. You need to specify the default package, as well as other packages.

### Errors Related To Component Scan

Let's look at some of the errors related to component scan and how you can solve them.

#### Typical Errors

When the controllers are not scanned, the URLs would not work. You would observe behaviors like this:

![image info](images/Capture-092-04.png)

The other kind of error is when Spring does not find the dependencies. A typical error looks like this:

![image info](images/Capture-092-05.png)

This means Spring expects at least one bean to auto-wire a dependency, but is not able to locate them. 

### Solving Errors With Component Scan

Here are some of the things to look fo:
* Make sure that you have the right annotation for the concerned bean - ```@Controller```, ```@Repository```, ```@Component```.
* Make sure that the package that a component is present in, is part of the component scan.

Do check out our video on the same topic:

[![image info](images/Capture-092-01.png)](https://www.youtube.com/watch?v=L1Y5pwy09Vw)

### Summary

In this article, we talked about component scan in the context of Spring and Spring Boot frameworks.The ```@ComponentScan``` annotation is used to specify packages to locate components in Spring. This is automatically done in the default package, in the case of Spring Boot.

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.
