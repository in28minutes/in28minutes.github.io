---
layout:  post
title:  Designing REST API - What is Contract First?
date:    2019-11-14 12:31:19
summary: Designing Great REST API is important to have great microservices. Contract First approach helps you in designing a great contract before implementing it. However, it does not come easy!
categories: RestAPI
permalink:  /rest-api-contRact-first-approach
image: /images/spring-boot-application.png
---

Designing Great REST API is important to have great microservices. Contract First approach helps you in designing a great contract before implementing it. However, it does not come easy!

![image info](/images/Capture-018-05.png)
 
## You will learn
- What is Contract First approach of designing REST API?
- What are advantages of Contract First approach?
- What are disadvantages of Contract First approach?
- When do you adopt Contract First approach?


### REST API

This is the third article in a series of articles on REST APIs:

- [1 - Introduction to REST API - RESTful Web Services](/introduction-to-rest-api){:target='_blank'}
- [2 - REST v SOAP - A few perspectives](/rest-vs-soap-web-services){:target='_blank'}
- [3 - Designing REST API - What is Contract First?](/rest-api-contRact-first-approach){:target='_blank'}
- [4 - Designing REST API - What is Code First Approach?](/rest-api-code-first-approach){:target='_blank'}
- [5 - REST API - What is HATEOAS?](/rest-api-what-is-hateoas){:target='_blank'}
- [6 - REST API Best Practices - With Design Examples from Java and Spring Web Services](/rest-api-best-practices-with-java-and-spring){:target='_blank'}



### Understanding Web Services

There are several kinds of web services that are offered - REST, SOAP - among others. 

For every services, there is a
* The service provider, which provides the service
* The service consumer, which makes use of it

A consumer needs to know the details of the service provided. For this reason, a contract needs to be in place. A service contract specifies:
* What are the inputs and the outputs of/from the service?
* What is the URL at which the service is available?
* How do you send authorization?


### Contract First Approach

In a Contract-First approach, you first define the contract, and then implement the service. 

Let's look at an example.

#### WSDL

Let us first take up the case of WSDL - Web Service Definition Language format. Here is an example in use:

![image info](/images/Capture-018-02.png)

WSDL is typically used with SOAP/XML web services. In such a definition, you typically define:

* The formats of the request and response

![image info](/images/Capture-018-03.png)

* Where the services are exposed

![image info](/images/Capture-018-04.png)

* The URL where the serviced can be called

![image info](/images/Capture-018-05.png)

* The headers that are part of the request

### What Contract-First Implies

When we start out with establishing a contract, we define a WSDL, and then share it with our consumer. All this can happen even before we implement the service and make it available. 

The contract tells the consumer what the request and response communication is expected to be. Once the contract is in place, the service provider can work on providing a service that adheres to the contract. The service consumer can work on developing an application to consume it.

### Advantages Of Contract First

#### Teams Can Develop In Parallel

Since coding happens based on the contract, the service provider and service consumer teams are clear about the communication approach and details. Hence, development can happen at the same time.

#### Teams Know What To Expect

Since coding happens based on contract, the producer and consumer teams have an idea of each others' expectations. As a result, if cross team testing is not possible due to different pace of development, stub software can be used to mock the others behavior, all based on the contract.

#### Cross Platform Compatible

Once the service parameters depend only on the contract, the actual software framework used to develop the service does not matter that much. The service provider and service consumer can use different technologies.  

#### Enables Reuse Of Schemas

The schemas that are used to define the contract for a service, are well defined in the WSDL. Therefore, if parts of services are repeated across other services, then the corresponding schemas can be reused as well.

### Disadvantages Of Contract First

#### Requires Initial Additional Effort

Most of this effort would center round agreement on a service contract. You need to make sure that the contract is well defined and does not change very often. 

#### Mechanism For Contract Update And Sharing

Over the course of using a service, if you update a contract, it affects all the other stakeholders. Therefore, there has to be a proper mechanism to communicate the changes to the various consumers. 


Do check out our video on this:

[![image info](/images/Capture-018-01.png)](https://www.youtube.com/watch?v=SKEuvFyBYdE)

### Summary

In this article, we discussed about the Contract-First approach, in the context of web services.

