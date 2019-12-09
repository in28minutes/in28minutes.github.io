---
layout:  post
title:  Code Quality Basics - Five Important Coding Standards
date:    2019-11-14 12:31:19
summary: In this article, we talk about the five most important coding standards that I would recommend all developers to follow.
categories: SwCodeQuality
permalink:  /code-quality-five-important-coding-standards
---

In this article, we talk about the five most important coding standards that I would recommend all developers to follow.

### Article Series

This is the third article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### Great Names

Giving great names to variables, methods and classes is, for me, the most important part of programming. 

Try and give bad names to your variables, methods and classes, and you will discover that it becomes very difficult to understand what's going on.

The name of a variable should represent what value it contains. The name of a method should represent what action it performs. The name of a class should be a noun that represents exactly what it is supposed to do.

If you are unable to give appropriate names to your variables/methods/classes, then it's a code smell.  Your are most probably doing too many things. Think about the Single Responsibility Principle and break it down. 

Unfortunately, there is no automated way to check if the names of different elements are appropriate. The only way to do so, is peer code reviews.

### Complexity

Complexity is generally measured by:
* How many conditionals and loops are present in a single method in the code?

Cyclomatic complexity is a very good measure of how complex your method code is. The more complex the method is, the more difficult it is to understand. 

Ideally, the cyclomatic complexity of a method should be less than 10. 

### Size Of Methods And Classes

It is highly desirable to have as small a method definition as possible, as it leads to a much better naming of the method. The length of a method should not exceed whatever you can see on a single screen. 

The same is the case with classes. The smaller a class definition, the better the name you can give it. The size of a class should never exceed 200 lines.

### Duplication

You need to have as little duplication in your code as possible. Typically, the standard measure we go by, is to keep it under 5 per cent of the total code. 

### Readability Of Code

When you look at a piece of code form an application, you should understand it very quickly. 


Do check out our video on the same topic:

[![image info](images/Capture-078-01.png)](https://www.youtube.com/watch?v=xOPTwJyFnMM)


### Summary

In this article, we has a look at the five most important coding standards. Of these 5 coding standards, the first and the last, namely naming and readability standards, are the most difficult to achieve. 

The other 3 standards can be enforced by using an automated tool such as SonarQube. SonarQube can measure code complexity, estimate the sizes of methods and classes, and check for code duplication as well. These checks can be run as part of continuous integration builds.

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


