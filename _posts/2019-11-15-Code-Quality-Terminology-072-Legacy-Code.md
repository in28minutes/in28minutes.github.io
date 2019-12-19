---
layout:  post
title:  Code Quality Basics - What Is Legacy Code?
date:    2019-11-14 12:31:19
summary: If you are working in a large software application or project, you will hear the term **legacy code** quite a lot. What does this term mean, and how can you avoid legacy code?
categories: SwCodeQuality
permalink:  /introduction-to-legacy-code
---

If you are working in a large software application or project, you will often hear the term **legacy code** quite a lot. What does this term mean, and how can you avoid legacy code?

## You will learn
- What Is Legacy Code?
- What are the challenges with Legacy Code?
- How do you improve Legacy Code?

### Article Series

This is last article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Legacy Code?

The popular definition of legacy code going around is 

> Old code - built in old technology. 

I would add one more element to it

> Any code which is difficult to understand and improve the design is legacy code. 

In other words, any code which does not have great design, which does not have the support of good unit tests, is legacy code. That's because you cannot refactor it to improve its design, as you are unsure if you break functionality.
 
### What Make Code A Legacy?

* Old code in outdated technologies
* Code without tests
* Code with a lot of technical debt

### Challenges With Legacy Code

#### Unexpected Impact

One of the biggest problems caused due to legacy code, is that changes in one part can lead to impact in other parts. This could lead to long release cycles.

#### Extreme Caution During Maintenance

Every time a change is made in one part of the code, the entire code base needs to be tested extensively to check for unexpected impact. This attaches a large cost in time and manpower across the team.

### Dealing With Legacy Code

#### Have Good Code Review Processes

Make sure that the code in the application is reviewed at regular intervals during the development cycle, to identify maintainability issues.

#### Refactor Code

It is impossible to refactor and improve every part of a large legacy application.

To start with, identify critical areas that frequently change and improve their design. Try and build good unit tests as you refactor.

#### Perform Static Analysis

Make sure you use static analysis tools such as Sonar. Put them in continuous integration. Have processes to monitor new violations

#### Have Automated Regression Testing

In general, it is difficult to write good unit tests for legacy code. 

A more practical optionis to write good automated integration and regression tests.

#### Develop New Functionality in a New Component

Start exploring new avenues. Instead of building everything into your legacy application, start thinking about creating new components and/or services and integrating with them.

Do check out our video on the same topic:

[![image info](images/Capture-072-01.png)](https://www.youtube.com/watch?v=5odeVADF2Og)

### Summary

In this article, we saw that any code that is difficult to maintain, is legacy code. We had a look at what factors contribute to legacy code, and what challenges developers face due to it. We then explored different ways to deal with legacy code in a project.

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


---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---
---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---


