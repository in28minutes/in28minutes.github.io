---
layout:  post
title:  Microservices Architectures - What is Fault Tolerance?
date:    2019-05-23 12:31:19
summary:  In this article, we discuss an important property of microservices, called fault tolerance
categories:  SpringBootMicroservices
permalink:  /fault-tolerance-in-microservices
---

In this article, we discuss an important property of microservices, called fault tolerance.

## You will learn
- What is Fault Tolerance?
- Why is fault tolerance important in microservices architecture?
- How do you achieve fault tolerance?

### Cloud and Microservices Terminology

This is the last article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}


### What Is Fault Tolerance?

Microservices need to be extremely reliable. 

When we build a microservices architecture, there are a large number of small microservices, and they all need to communicate with one another. 

Lets consider the following example:

![image info](/images/Capture-053-02.png)

Let's say Microservice5 is down at some point of time. 

All the other microservices are directly or indirectly dependent on it, so they all go down as well.

The solution to this problem is to have a fallback in case of failure of a microservice. This aspect of a microservice is called **fault tolerance**.

### Implementing Fault Tolerance with Hystrix

A popular framework used to implement fault tolerance is Hystrix, a Netflix open source framework. Here is a code example of the same:

```java

	@GetMapping("/fault-tolerance-example")
	@HystrixCommand(fallbackMethod="fallbackRetrieveConfguration")
	public LimitConfiguration retrieveConfiguration() {
		throw new RuntimeException("Not Available");
	}

	public LimitConfiguration fallbackRetrieveConfiguration() {
		return new LimitConfiguration(999, 9);
	} 

```

Hystrix enables you to specify the fallback method for each of your service methods. If the method throws an exception, what should be returned to the service consumer? 

Here, if ```retrieveConfiguration()``` fails, then ```fallbackRetrieveConfiguration``` is called, which returns a hardcoded ```LimitConfiguration``` instance:

![image info](/images/Capture-053-03.png)


#### Hystrix And Alerts

With Hystrix, you can also configure alerts at the back-end. If a service starts failing continuously, you can send alerts to the maintainance team.

### Hystrix is not a silver bullet

Using Hystrix and fallback methods is appropriate for services that handle non critical information. 

However, it is not a silver bullet.

Consider for instance, a service that returns the balance of a bank  account. You cannot provide a default hardcoded value back. 

### Using sufficient redundancy

It is important to design critical services in a fail safe manner. It is important to build enough redundancy into the system to ensure that the services do not fail.

### Have sufficient testing

It is important to test for failure. Bring a microservice down. See how your system reacts. 

Chaos Monkey is a good example from Netflix.

Do check out our video on this:

[![image info](/images/Capture-053-01.png)](https://www.youtube.com/watch?v=7qlQlvnQsuU)

### Summary

In this article, we discussed about fault tolerance. We saw how fault tolerance is essential in microservices architecture. We then saw how it can be implemented at the code level using frameworks such as Hystrix.

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

> in28Minutes is creating amazing solutions for you to learn full stack and the cloud - Docker, Kubernetes, AWS, React, Angular etc. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


