---
layout:  post
title:  Code Quality Basics - What Is Code Complexity?
date:    2019-11-14 12:31:19
summary: In this article, we find out what code complexity is, and how we keep track of it.
categories: SwCodeQuality
permalink:  /code-quality-what-is-code-complexity
---

In this article, we find out what code complexity is, and how we keep track of it.

### You will learn
- What Is Code Complexity?
- What are a few examples of Code Complexity?
- Why Is Code Complexity important?
- What are the tools you can use to measure Code Complexity?
- How can ensure that Code Complexity standards are Adhered to?

### Article Series

This is third article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Code Complexity?

Code Complexity is a measure of how difficult your code is to understand. 

* Suppose you have just written a method having 15 ```if``` conditions and 3 ```for``` loops. How easy do you think it is to understand? 
* Think of a class we have written that has 25 member variables and 75 methods, where some of these methods are huge, having a lot of ```if``` conditions and ```for``` loops. Is this an easy class to understand?

### Measuring Code Complexity

#### Measuring Cyclomatic And Cognitive Complexity

Cyclomatic complexity is a way of measuring complexity taking into account
* The number of ```if``` ```else``` ```switch``` conditionals
* The number of loops - ```for``` , ```while``` and ```do while``` 

There is a way to measure the code complexity in SonarQube as well:

![image info](images/Capture-075-02.png)

You can see that the TreeFactory.java has a cyclomatic complexity measure of 366. That means this class might be a little difficult to understand. 

Let's pick up another file which has a lower complexity listed:

![image info](images/Capture-075-03.png)

You can see that the ```findMemberType()``` method is being highlighted. When you click on it, you get some additional info:

![image info](images/Capture-075-04.png)

It says that the method has a different complexity measure, the **cognitive complexity**, that is bad for the code here. It suggests that we refactor this method to correct the complexity. 

If you look at this method:
![image info](images/Capture-075-05.png)

It has ```for``` loops, ```if```, conditional operator at multiple places, all in interesting combinations! 

A complex method is often a sign that the developer has not thought enough about the code.   

### Understanding Code Complexity

Whenever we write code, we need to keep things small. Simple methods, small classes, small packages, simple components all lead to small and simple applications. 

The goal of writing code is not to write large amounts of it, but to achieve a certain functionality. The aim is to achieve that functionality with as little code and complexity as possible. 

PMD is also a good static analysis tool to assess code complexity, apart from Sonar.

### Addressing Code Complexity

In order to address the problem of complexity, you need to identify it early and monitor it on a regular basis.

You need to include code complexity goals as a major part of your coding standards. These should be regularly tracked.

Do check out our video on the same topic:

[![image info](images/Capture-075-01.png)](https://www.youtube.com/watch?v=cE44izR3A5E)

### Summary

Code complexity is a measure of how difficult it is to understand your code. Generally, large method and classes are code smells. There are different measures for code complexity, and various tools to measure them as well. Keep Refactoring code to reduce complexity.


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
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---




