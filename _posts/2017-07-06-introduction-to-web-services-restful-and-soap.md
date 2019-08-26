---
layout:     post
title:      Introduction to Web Services - Restful and SOAP
date:       2017-07-06 12:31:19
summary:    Introduction to Web Services - Restful and SOAP, This tutorial will help you understand the basics of web services and the different kinds of web services - REST and SOAP.
categories: Web services, SOAP, REST
permalink:  /introduction-to-web-services-with-soap-and-rest
---

This tutorial will help you understand the basics of web services and the different kinds of web services - REST and SOAP.
 
## You will learn
- What is a web service?
- What are the advantages of web services?
- What are the different types of web services?
- What are RESTful web services?
- What are SOAP web services?

## Recommended REST API Course

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

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

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

# What is a Web Service?

> Service delivered over the web

Is this really a complete definition. Is everything thats delivered over the web "Web Service"?

Let's consider a web application we developed for our Spring MVC Course to manage todo's.  

![Image](/images/Web_Services_Web_Application_To_Manage_Todos.png)

Is this application a web service?

> Nope. The answer is no. This is a web application. Not a web service.

We are back to square one.

- What is a web service?
- How is it different from a web application?

To understand this, lets consider an example.

Mark Zuckerberg likes the web application we developed to manage todo's. He thinks that our todo application is a right fit to integrate into facebook to manage todo's. Can we use the existing application to do the integration? No.

Why? Because the existing application is designed for humans - other individuals. The output of the application is html which is rendered by browser to the end user. This is not designed for other applications.

What would be the difference in my thinking if I want to design the todo application so that other applications can interact with it?

> I would need to produce the output in the format that the consumers can understand. Then facebook can call my web service and integrate it.

That leads use to - W3C definition of a Web Service
> Software system designed to support interoperable machine-to-machine interaction over a network.

The key things to understand is 
- Web services are designed for machine-to-machine (or application-to-application) interaction
- Web services should be interoperable - Not platform dependent
- Web services should allow communication over a network

## Web Service Data Exchange Formats

Facebook wants to talk to Todo Application 
- Facebook is built on a variety of languages - PHP is used for the front-end, Erlang is used for Chat, Java and C++ are also used. 
- Todo Application is build on Java using Spring MVC

You can see that Facebook and the Todo Application use different implementation technologies. However, we would want them to talk to each other as shown in the picture below:

![Image](/images/Web_Service_Basic_Interaction.png)

Both applications should be able to understand the request and response. 

So, what formats should we use for the request and response?

> They should be standard formats so that they can be used with varied kind of platforms. JSON and XML are quite popular Data Exchange formats.

## Types of Web Services

Not really types but a broad classification
- SOAP
- REST

These are not really mutually exclusive. Some SOAP services can actually be RESTful. So, the question is: 

> When does a web service become a SOAP Web service or a RESTful web service?

### SOAP

SOAP was earlier an abbreviation for Simple Object Access Protocol. In SOAP, the request and response are in XML format. However, not all types of XML are valid SOAP Requests. 

SOAP defines a standard XML format. We will use WSDL (Web Service Definition Language) to define the format of request xml and the response xml.

Now lets say Facebook wants to know how to call the TODO Service? What should I give to the Facebook developer? 

I will give him a WSDL of the Todo service. It will explain: 
- What are the different services (operations) exposed by the server?
- How can a service (operation) be called? What url to use? (also called End Point).
- What should the structure of request xml?
- What should be the structure of response xml?

SOAP format defines a SOAP-Envelope which envelopes the entire document. 
- SOAP-Header (optional) contains any information needed to identify the request. Also, part of the Header is authentication, authorization information (signatures, encrypted information etc).
- SOAP-Body contains the real xml content of request or response.
- In case of error response, server responds back with SOAP-Fault.

Isn't that cool?

### REST

First of all, REST does not define a standard message exchange format. You can build REST services with both XML and JSON. However, JSON is a more popular format with REST.

So, if it does not define a standard message exchange format, what is REST then?

> REST is a style of software architecture for distributed hypermedia systems

REST stands for REpresentational State Transfer. The definitions for REST can be vague. So, lets understand the important concepts.

Key abstraction in REST is a Resource. There is no restriction on what can be a resource. A todo is a resource. A person on facebook is a resource. 

A resource has an URI (Uniform Resource Identifier):
- /user/Ranga/todos/1
- /person/Ranga

A resource will have representations
- XML
- HTML
- JSON

A resource will have state. The representation of a resource should capture its current state.

When a resource is requested, we provide the representation of the resource. 

#### REST and HTTP

REST builds on top of HTTP (Hypertext Transfer Protocol). HTTP is the language of the web. 

HTTP has a few important verbs.
- POST - Create a new resource
- GET - Read a resource
- PUT - Update an existing resource
- DELETE - Delete a resource

HTTP also defines standard response codes.
- 200 - SUCESS
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 201 - CREATED
- 401 - UNAUTHORIZED
- 415 - UNSUPPORTED TYPE - Representation not supported for the resource
- 500 - SERVER ERROR

Restful Service Constraints
- Client - Server : There should be a service producer and a service consumer.
- The interface (URL) is uniform and exposing resources. Interface uses nouns (not actions)
- The service is stateless. Even if the service is called 10 times, the result must be the same.
- The service result should be Cacheable. HTTP cache, for example.
- Service should assume a Layered architecture. Client should not assume direct connection to server - it might be getting info from a middle layer - cache.

#### Richardson Maturity Model 

Richardson Maturity Model defines the maturity level of a Restful Web Service. Following are the different levels and their characteristics.
- Level 0 : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST.
- Level 1 : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used.
- Level 2 : Resources use proper URI's + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1.
- Level 3 : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.

#### Designing RESTful APIs

Following are the important things to consider when designing RESTful API's:
- While designing any API, the most important thing is to think about the api consumer i.e. the client who is going to use the service. What are his needs? Does the service uri make sense to him? Does the request, response format make sense to him?
- In Rest, we think Nouns (resources) and NOT Verbs (NOT actions). So, URI’s should represent resources. URI’s should be hierarchical and as self descriptive as possible. Prefer plurals.
- Always use HTTP Methods. 
  - GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
  - POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition : Return code 201 (CREATED) is possible.
  - PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK)
  - DELETE : Used to delete a resource.

## REST vs SOAP

REST vs SOAP are not really comparable. REST is an architectural style. SOAP is a message exchange format.

Let's compare the popular implementations of REST and SOAP styles.
- RESTful Sample Implementation : JSON over HTTP
- SOAP Sample Implementation : XML over SOAP over HTTP

Following are the important things to consider:
- REST is built over simple HTTP protocol. SOAP services are more complex to implement and more complex to consume.
- REST has better performance and scalability. REST reads can be cached, SOAP based reads cannot be cached.
- REST permits many different data formats (JSON is the most popular choice) where as SOAP only permits XML.
- SOAP services have well defined structure and interface (WSDL) and has a set of well defined standards (WS-Security, WS-AtomicTransaction and WS-ReliableMessaging). Documentation standards with REST are evolving(We will use Swagger in this course).

## Advantages of Web Services

- Reuse : Mark Zuckerberg does not need to invest to build a todo application of his own.
- Modularity 
- Language Neutral

Webservices form the building blocks of SOA and microservices architectures.


## SOAP Service Examples

### Request
```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <getCourseDetailsRequest xmlns="http://in28minutes.com/courses">
            <id>Course1</id>
        </getCourseDetailsRequest>
    </Body>
</Envelope>
```

### Response
```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:getCourseDetailsResponse xmlns:ns2="http://in28minutes.com/courses">
            <ns2:course>
                <ns2:id>Course1</ns2:id>
                <ns2:name>Spring</ns2:name>
                <ns2:description>10 Steps</ns2:description>
            </ns2:course>
        </ns2:getCourseDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### Fault

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <SOAP-ENV:Fault>
            <faultcode>SOAP-ENV:Server</faultcode>
            <faultstring xml:lang="en">java.lang.NullPointerException</faultstring>
        </SOAP-ENV:Fault>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### WSDL

- view-source:http://localhost:8080/ws/courses.wsdl

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?><wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:sch="http://in28minutes.com/courses" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tns="http://in28minutes.com/courses" targetNamespace="http://in28minutes.com/courses">
  <wsdl:types>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" targetNamespace="http://in28minutes.com/courses">

    <xs:element name="getCourseDetailsRequest">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="id" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <xs:element name="getCourseDetailsResponse">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="course" type="tns:course"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="course">
        <xs:sequence>
            <xs:element name="id" type="xs:string"/>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="description" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
  </wsdl:types>
  <wsdl:message name="getCourseDetailsRequest">
    <wsdl:part element="tns:getCourseDetailsRequest" name="getCourseDetailsRequest">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="getCourseDetailsResponse">
    <wsdl:part element="tns:getCourseDetailsResponse" name="getCourseDetailsResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:portType name="CoursesPort">
    <wsdl:operation name="getCourseDetails">
      <wsdl:input message="tns:getCourseDetailsRequest" name="getCourseDetailsRequest">
    </wsdl:input>
      <wsdl:output message="tns:getCourseDetailsResponse" name="getCourseDetailsResponse">
    </wsdl:output>
    </wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="CoursesPortSoap11" type="tns:CoursesPort">
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <wsdl:operation name="getCourseDetails">
      <soap:operation soapAction=""/>
      <wsdl:input name="getCourseDetailsRequest">
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output name="getCourseDetailsResponse">
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="CoursesPortService">
    <wsdl:port binding="tns:CoursesPortSoap11" name="CoursesPortSoap11">
      <soap:address location="http://localhost:8080/ws"/>
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>
```

> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}