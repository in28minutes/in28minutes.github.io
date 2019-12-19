---
layout:  post
title:  REST API - What is HATEOAS?
date:    2019-11-14 12:31:19
summary: While viewing a web page, you can see data in the page and perform actions with it. How about a REST API? Typically when you ask for a REST Resource, you get the details of the resource back. How about sending the operations that you can do with the resource in the response? 
categories: RestAPI
permalink:  /rest-api-what-is-hateoas
---

While viewing a web page, you can see data in the page and perform actions with it. How about a REST API? Typically when you ask for a REST Resource, you get the details of the resource back. How about sending the operations that you can do with the resource in the response?

### We learn
* What is HATEOAS?
* Why do you need to use HATEOAS?
* When do you make use of HATEOAS?

### REST API

This is the fifth article in a series of articles on REST APIs:

- [1 - Introduction to REST API - RESTful Web Services](/introduction-to-rest-api){:target='_blank'}
- [2 - REST v SOAP - A few perspectives](/rest-vs-soap-web-services){:target='_blank'}
- [3 - Designing REST API - What is Contract First?](/rest-api-contRact-first-approach){:target='_blank'}
- [4 - Designing REST API - What is Code First Approach?](/rest-api-code-first-approach){:target='_blank'}
- [5 - REST API - What is HATEOAS?](/rest-api-what-is-hateoas){:target='_blank'}
- [6 - REST API Best Practices - With Design Examples from Java and Spring Web Services](/rest-api-best-practices-with-java-and-spring){:target='_blank'}



### What Does HATEOAS Stand For?

The term **HATEOAS** stands for the phrase **H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate. To understand this further, we first need to understand the meaning of **Hypermedia**.

### What Does Hypermedia Mean?

Have a look at the following web page:

![image info](/images/Capture-07-01.png)

When the browser load the page, you definitely can see all the content that page has to offer. More interestingly, the page also allows you to perform a lot of actions around that data, such as: 

* Clicking on buttons (the green "Clone or Download") 
* Clicking on tabs (to view the "Issues", for instance), 

and several  more.

Now let's look at how our REST API's behave:

If you look at a typical GET request to a RESTful server, such as this one:

![image info](/images/Capture-07-02.png)

The request to ```GET http://localhost:8080/users``` retrieves a set of three users details in this case.  Sending a request with ```GET http://localhost:8080/users/1``` will retrieve details of just the first user.

Typically, when we perform a REST request, we only get the data, and not any actions around it. This is where HATEOAS comes in the fill in the gap. 

A HATEOAS request allows you to not only send the data but also specify the related actions:

![image info](/images/Capture-07-03.png)

This example was in the JSON format. An XML format for another example would look something like this:

![image info](/images/Capture-07-04.png)

When you send out this request to retrieve account details, you get both:

* Account number and balance details
* Links that provide actions to do a deposit/withdrawal/transfer/closure

With HATEOAS, a request for a REST resource gives me both data, and actions related to the data.

### Why Do We Need HATEOAS?

The single most important reason for HATEOAS is **loose coupling**. If a consumer of a REST service needs to hard-code all the resource URLS, then it is tightly coupled with your service implementation. Instead, if you return the URLs it could use for the actions, then it is loosely coupled. There is no tight dependency on the URI structure, as it is specified and used from the response. 

### Some Important Related Topics

A few significant topics related to HATEOAS are:

#### HAL - Hypertext Application Language

When you design a RESTful service, there is need to specify how to return data and links corresponding to a request. HAL is a simple format that gives a easy, consistent way to hyperlink between resources in your REST API.
Here is an example:

![image info](/images/Capture-07-05.png)

With HAL, you have a few categories of representations:

* Links: Specified as combination of
	* Target - Given as a URI
	* Relation - A name
* Embedded Resources: Other resources contained within a given REST resource
* State: The actual resource data

If you happen to use the Spring Framework to develop your REST service, then Spring HATEOAS is a good engine to use for your service.

Do check out our video on this:

[![image info](/images/Capture-07-06.png)](https://www.youtube.com/watch?v=gCNAudrbWCo)

### Summary

In this article, we looked at what HATEOAS stands for. With HATEOAS, responses to REST requests return not just the data, but also actions that can be performed with the resource. This helps in making the applications loosely coupled.

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




