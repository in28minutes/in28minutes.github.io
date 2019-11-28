---
layout:  post
title:  REST v SOAP - A few perspectives
date:    2019-11-14 12:31:19
summary: In this article, we look at the major differences between SOAP and REST. OOPS.. actually, comparing the two is a little like comparing apples to oranges, as SOAP is a protocol format based on XML, whereas REST is an architectural approach.
categories: RestAPI
permalink:  /rest-vs-soap-web-services
---

In this article, we look at the major differences between SOAP and REST. OOPS.. actually, comparing the two is a little like comparing apples to oranges, as SOAP is a protocol format based on XML, whereas REST is an architectural approach.

## You will Learn
- What is REST?
- What is SOAP?
- How are REST and SOAP different?

### REST API

This is the second article in a series of articles on REST APIs:

- [1 - Introduction to REST API - RESTful Web Services](/introduction-to-rest-api){:target='_blank'}
- [2 - REST v SOAP - A few perspectives](/rest-vs-soap-web-services){:target='_blank'}
- [3 - Designing REST API - What is Contract First?](/rest-api-contRact-first-approach){:target='_blank'}
- [4 - Designing REST API - What is Code First Approach?](/rest-api-code-first-approach){:target='_blank'}
- [5 - REST API - What is HATEOAS?](/rest-api-what-is-hateoas){:target='_blank'}
- [6 - REST API Best Practices - With Design Examples from Java and Spring Web Services](/rest-api-best-practices-with-java-and-spring){:target='_blank'}



### REST vs SOAP

REST vs SOAP are not really comparable. REST is an architectural style. SOAP is a message exchange format.

Let’s compare the popular implementations of REST and SOAP styles.

- RESTful Sample Implementation : JSON over HTTP
- SOAP Sample Implementation : XML over SOAP over HTTP

At a high level, SOAP is about restrictions on your message structures while REST is an architectural approach focused on using HTTP Transport.
- SOAP is particular about the **Data Exchange Format**. With SOAP, this is always SOAP-XML, which is an XML with envelope, header and body. Both the request and response should adhere to the SOAP structure.
- REST is very particular about using HTTP as the transport protocol. It intends to make the best use of the features provided by HTTP - Request methods, Request headers, Response, Response headers etc.

### Message interchange format
- With SOAP, you use SOAP XML format for Request and Response
- With REST, there is no such fixed format. You could exchange messages based on XML, JSON or any other convenient format. JSON is the most popular among the used formats.

### Service Definitions
- SOAP makes use of **Web Service Definition Language (WSDL)**. 
- REST does not have a standard service definition language. Even though WADL was one of the first standards to be proposed, it is not very popular. Swagger or Open API is another popular approach.


### Transport
- SOAP does not place any restrictions on the kind of transport protocol. You could either use Web (which is HTTP), or MQ. 
- REST intends to make the best use of HTTP Transport Protocol

### Ease of Implementation
RESTFful services are typically a lot easier to implement than SOAP based web services. 
* REST typically uses JSON, which is easier to parse and process. In addition to that, REST does not require you to have a service definition in place to provide a web service. 
* However with SOAP, you are needed to define your service using WSDL, and greater overhead is involved in processing and parsing the SOAP-XML messages.

Do check out our video on this:

[![image info](/images/Capture-014-01.png)](https://www.youtube.com/watch?v=PbIT0yppvW8)   

### Summary

In this article, we broadly looked the differences between REST and SOAP.

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

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


