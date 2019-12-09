---
layout:  post
title:  Spring Basics - What Is A Dependency?
date:   2019-04-10 12:31:19
summary: Most important feature of Spring Framework is Dependency Injection. To understand Dependency Injection, you need to understand the concept of a Dependency.
categories:  SpringFramework
permalink:  /spring-framework-what-is-a-dependency
---

Most important feature of Spring Framework is Dependency Injection. To understand Dependency Injection, you need to understand the concept of a Dependency.
 
## You will learn
- What is a Dependency?
- How are applications built? How is one layer dependent on another?
- How is a class dependent on another?
- How does the Spring Framework do Dependency Injection?

In this article, we have a look at what a dependency is in general terms, and then in the context of the Spring framework.

### Spring Framework

This is the second article in a series of articles on Spring Framework:

- [1 - Introduction To Spring Framework](/introduction-to-the-spring-framework){:target='_blank'}
- [2 - What Is A Dependency?](/spring-framework-what-is-a-dependency){:target='_blank'}
- [3 - What Is Dependency Injection?](/spring-framework-dependency-injection-inversion-of-control){:target='_blank'}
- [4 - What Is Component Scan?](/spring-and-spring-boot-what-is-component-scan){:target='_blank'}
- [5 - Architecture of Spring Framework - Modularity and Spring Modules](/spring-framework-architectures-and-modules){:target='_blank'}
- [6 - What Are Spring Projects?](/spring-projects-with-examples){:target='_blank'}
- [7 - Introduction To Spring Batch](/spring-basics-introduction-to-spring-batch){:target='_blank'}

### Dependencies At A High Level

We build enterprise applications in multiple layers:
![image info](images/Capture-093-02.png)

A typical Java application will have three layers in its architecture: web, business and data.
* The web layer
* The business layer
* The data layer

In the above scenario:
- Web Layer depends on Business Layer. The business layer is a dependency for the web layer.
- Business layer depends on Data Layer. The data layer is a dependency for the business layer.

### Dependencies At Class Level

Let's look at an example:

```java

	@Service
	public class ClientBOImpl implemented ClientBO {
		@Autowired
		ProductDO productDO;
		@Autowired
		ClientDO clientDo;

		@Override
		public Amount getClientProductsSum(long cliendId) {
			//...
		}

		@Override
		public void saveChangedProducts(long clientId,
										List<Product> userEnteredProducts) {
			//...
		}

		//...
	}

```

```ClientBOImpl``` is the business class, and it makes use of two data layer classes - ```ProductDO``` and ```ClientDO```. 

Let's now have a look at the business logic within ````ClientBOImpl```:

* ```getClientProductsSum()``` : This returns the sum of all products for a given client.  
* ```saveChangedProducts()``` : When products are modified on the application page, this method is called. 

Both methods in ClientBOImpl need either ```ProductDO``` or ```ClientDO```. ```ProductDO``` and ```ClientDO``` are dependencies of ClientBOImpl.

### Inputs/Outputs Are Not Dependencies

If you look at ```public Amount getClientProductsSum(long clientId)```, clientId is merely an input, not a dependency. Similarly, the total calculated amount returned by ```getClientProductsSum``` is an output, not a dependency.

### A Few More Examples Of Dependencies

#### Example-1

Have a look at the following code:

```java

	@Component
	public class ComplexAlgorithmImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;	
		//...
	}

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	@Component
	public class QuickSortAlgorithm implements SortAlogrithm {
		//...
	}

``` 

```ComplexAlgorithmImpl``` performs a lot of complex logic, and sorting is one of the steps. 

The ```SortAlgorithm``` is a dependency of ```ComplexAlgorithmImpl```. 

Since ```SortAlgorithm``` is an interface, you can easily change the actual sort algorithm used by ```ComplexAlgorithmImpl```, without changing its code. 

#### Example-2

Consider the following code:

```java

	import java.sql.ResultSet;

	@Repository
	public class PersonJdbcDao {
		@Autowired
		JdbcTemplate jdbcTemplate;

		class PersonRowMapper implements RowMapper<Person> {
			@Override
			public Person mapRow(ResultSet rs, int rowNum) throws SQLException {
				//...
			}
			//...
		}
	}

```

To execute a query on the database, ```PersonJdbcDao``` needs ```JdbcTemplate```. Therefore, ```JdbcTemplate``` is a dependency of ```PersonJdbcDao```. 

Let's look at a simple method:

```java

	public Person findById(int id) {
		return jdbcTemplate.queryForObject(//...);
	}

```

```id``` is the input for this method, and the output returned is of type ```Person```. 

In the above method, we are making use of a dependeny ```jdbcTemplate``` . The inputs and outputs are not dependencies.

Do check out our video on the same topic:

[![image info](images/Capture-093-01.png)](https://www.youtube.com/watch?v=4VajgnSHwOw)

### Summary

In this article, we focused on the most important concept in Spring Framework - a dependency.

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
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


