---
layout:  post
title:  Continuous Integration - 5 Important Questions or Tips
date:    2019-11-14 12:31:19
summary: Almost everybody does Continuous Integration today. But the question is : How effective is your Continuous Integration? In this short article, let's explore five important questions we need to ask about Continuous Integration (CI).
categories: SwBestPractices
permalink:  /five-tips-on-continuous-integration-best-practices
---

Almost everybody does Continuous Integration today. But the question is : How effective is your Continuous Integration? In this short article, let's explore five important questions we need to ask about **Continuous Integration** (**CI**).

### Article Series

This is the last article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### Questions To Ask About Continuous Integration

Let's look at them one by one:

#### Frequency Of Commits

> How frequently is code being committed to the version control system? 

It is awesome to have great CI infrastructure in place with frequent builds, wonderful unit tests and integration tests. However, if code is not committed frequently enough to the repository, all this infrastructure is sitting idle. 

Whenever you think your code is in a good working state, commit it to get immediate feedback. Do this five, ten, or a hundred times a day!

#### Frequency Of Builds

> How often are your CI builds running? 

Are they running every time a commit is done, every minute, every hour, or once a day? With CI, it is important to get immediate feedback. If you are running your builds less frequently, you might be enjoying all the possible benefits of CI.

Ideally, CI should run for every commit.

#### What's in the Build?

> What are the various steps that are run in your CI build?
 
 Are all of these are run in CI?
 - Code compilation
 - Unit tests
 - Integration tests
 - User acceptance tests
 - Deployment

 It is desirable to have as many steps as possible as part of the CI build.

#### Build Performance

How fast is your CI build? 

Any CI build should not take more than 10-15 minutes of time, as a benchmark. Of course, the steps involved in the build affects build performance. 

As the number of steps in the build increase, the longer it takes. You need to find the right balance between the two, such as testing everything versus testing quickly. 

One strategy would be to have two kinds of CI builds - one smaller frequent build, and one larger slower build that only runs from time to time.

#### Handling Broken Builds

This is one of the more fun events for the team. Having the member who breaks the build, buy lunch for the entire team is incentive enough for careful programming and commits! Not the least, it helps foster team building and team spirit. 


Do check out our video on this:

[![image info](/images/Capture-025-01.png)](https://www.youtube.com/watch?v=i8WNumrDMcA)

### Summary

In this article, we explored the five important questions that a team using a CI infrastructure, to ask about its development process.


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


