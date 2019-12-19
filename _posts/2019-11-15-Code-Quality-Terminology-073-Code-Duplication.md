---
layout:  post
title:  Code Quality Basics - What Is Code Duplication?
date:    2019-11-14 12:31:19
summary: Having minimum code duplication is one of the Four Principles of Simple Design. In this article, we look at why we should worry about code duplication, and what are the best practices to follow to reduce it.
categories: SwCodeQuality
permalink:  /code-quality-what-is-code-duplication
---

Having minimum code duplication is one of the Four Principles of Simple Design. In this article, we look at why we should worry about code duplication, and what are the best practices to follow to reduce it.

### You will learn
- What Is Code Duplication?
- Why Is Code Duplication Bad?
- How do you measure Code Duplication?
- How can ensure that Code Duplication standards are Adhered to?

### Article Series

This is fourth article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Code Duplication?

Same block of code repeating multiple times is the most basic form of Code Duplication.

### Why Is Code Duplication Bad?

Suppose there is  a change needed in one of the places where a code block is used. When the change is made, it needs to be replicated at all other places where it occurs. If a code block of 40 lines occurs at 10 places in your application, there is a chance that a developer modifies it only in 8 places out of the 10. The code is now potentially broken!

When you have code duplication, maintaining the code becomes very difficult. 

### How To Measure Code Duplication?

There are static analysis tools such as SonarQube that measure code duplication as part of estimating technical debt:

![image info](images/Capture-073-02.png)

![image info](images/Capture-073-03.png)

As you can see, code duplication is mentioned under "Duplication" at the bottom. It gives an idea of the percentage of duplicate code in the project. 

Typically, you have some extent of duplication in your code.  A general measure of controlled duplication is a limit of 5%. A project having less than 5% of code duplication is considered very good. 

It is important to continously evaluate code duplication and identify improvements.

### Looking At Code With Duplication

Have a look at the following source file, from the project which we ran SonarQube on, previously:

##### < ParenthesizedTreeImpl.java >

![image info](images/Capture-073-04.png)

You can see that the duplicated block is highlighted by a bold-grey vertical line. We can click on it to see the duplicated blocks:

![image info](images/Capture-073-05.png)  

SonarQube indicates that SynchronizedStatementTreeImpl.java, SwitchStatementTreeImpl.java and ParenthesizedTreeImpl.java have the same code block duplicated across them. 

### Avoiding Code Duplication

#### Make Use Of Inheritance

The simplest solution for the problem at hand is to define a super class, and define the duplicated blocks as code within its methods. 

#### Define A Utility Class Or Method

This is the alternative available when reuse by inheritance is not the option that works.

The catch is that there is no single solution! It depends on the duplicate code block, and the context in which it is being used. 

Do check out our video on the same topic:

[![image info](images/Capture-073-01.png)](https://www.youtube.com/watch?v=uauZjxAu3p8)

### Summary

In this article, we had a close look at code duplication. We explored why code duplication is  not good, and what are the ways in which it can be detected and measured. We also had a brief look at how to avoid it.

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


