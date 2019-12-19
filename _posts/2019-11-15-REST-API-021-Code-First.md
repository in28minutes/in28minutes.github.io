---
layout:  post
title:  Designing REST API - What is Code First Approach?
date:    2019-11-14 12:31:19
summary: Designing Great REST API is important to have great microservices. Code First approach focuses on generating the contract from code. Is it the best possible approach? 
categories: RestAPI
permalink:  /rest-api-code-first-approach
---

Designing Great REST API is important to have great microservices. Code First approach focuses on generating the contract from code. Is it the best possible approach? 

## You will learn
- What is Code First approach of designing REST API?
- What are advantages of Code First approach?
- What are disadvantages of Code First approach?
- When do you adopt Code First approach?

### REST API

This is the fourth article in a series of articles on REST APIs:

- [1 - Introduction to REST API - RESTful Web Services](/introduction-to-rest-api){:target='_blank'}
- [2 - REST v SOAP - A few perspectives](/rest-vs-soap-web-services){:target='_blank'}
- [3 - Designing REST API - What is Contract First?](/rest-api-contRact-first-approach){:target='_blank'}
- [4 - Designing REST API - What is Code First Approach?](/rest-api-code-first-approach){:target='_blank'}
- [5 - REST API - What is HATEOAS?](/rest-api-what-is-hateoas){:target='_blank'}
- [6 - REST API Best Practices - With Design Examples from Java and Spring Web Services](/rest-api-best-practices-with-java-and-spring){:target='_blank'}



### What Is Code First?

Whenever you develop service, such as a REST API or a SOAP API, there are two approaches you could choose from:

* Code First, and generate the contract out of the code
* Contract First, and develop the code based on the contract

Let's start with a quick example for Code First

### Spring Boot Code First REST API Example

We are developing a RESTful web service, by making use of the Spring Boot Framework to generate the API. For example, in the ```retrieveAllUsers()``` API, we expose the ```"/users"``` URI and return all the user resources by calling a service method. when we hit this URL, we get these users returned:

![image info](/images/Capture-021-02.png)

In a similar manner, there are other service methods defied, each with their own URI. What we are doing with this example is taking the code, and generating documentation from it. That documentation lists out how a user can use the service. For this, we use a documentation format called Swagger:

![image info](/images/Capture-021-03.png)

Swagger enables us to generate documentation from the code. For example, the following is what Swagger generates for a request to retrieve all users:

![image info](/images/Capture-021-04.png)

It lists out the kind of response message we get, and the response status accompanying it as well. You can even call that service from Swagger, leading to:

![image info](/images/Capture-021-05.png)

You can also send a POST request to ```"/users"```:

![image info](/images/Capture-021-06.png)

Swagger tells us how to structure the request message, and specify the individual field formats inside. It will also tell you the type of response you get back, along with the response code.

What Swagger generates out of the code, is called a **contract**. 

### Advantages Of Code First

The advantages of this approach are mainly:

* **Low-effort contracts**: Generating the contract does not require any additional effort. It is just a by-product of the service development, as it can be automatically generated from the code 
* **Contract, code in-sync**: As the contract is generated from the code, the two always in sync with each other

### Disadvantages Of Code-First

The disadvantages of this approach are as follows:

#### No Parallel Development

The service producer and the service consumers cannot be developed in parallel. First the service needs to be developed, then the contract is generated, and only after that, consumer code can be written to adhere to the contract. Without understanding the contract, a consumer cannot be developed.

#### No Target For Teams

As the contract cannot be known before the service is developed, there is no target for the various stakeholders in development. Hence, there is every chance that directions go wayward, and unnecessary changes are made, leading to wastage of effort.

#### No Cross-Platform Compatibility

In some older frameworks, it is not that easy to generate the contract from the code. As a result, it is quite common for the contracts generated not being compatible across platforms.

Do check out our video on this:

[![image info](/images/Capture-021-01.png)](https://www.youtube.com/watch?v=yDAujtMk2oQ)

### Summary

In this article, we explored the code first approach of building REST API. While code first approach is efficient from a developer perspective, it has significant challenges when it comes to developing the service provider and consumer together.


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


