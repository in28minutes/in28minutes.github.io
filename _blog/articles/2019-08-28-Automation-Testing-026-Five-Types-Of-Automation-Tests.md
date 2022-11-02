---
layout:  post
title:  Automation Testing in Microservices - Five Types Of Automation tests
date:    2019-08-26 12:31:19
summary: Automation tests are a very important requirement to have highly successful microservice architectures. In order to take things live on a frequent basis, it is imperative to have great automation tests. In this article, we talk of the five kinds of automation tests that you can write, for your microservices.
categories:  SpringBootUnitTesting
permalink:  /microservice-and-automation-testing
image: /images/unit-test-category.png
---

Automation tests are a very important requirement to have highly successful microservice architectures. In order to take things live on a frequent basis, it is imperative to have great automation tests. In this article, we talk of the five kinds of automation tests that you can write, for your microservices.

This is first article in a series of 4 articles on Automation Testing in Microservices
- [1 - Automation Testing in Microservices - Five Types Of Automation tests](/microservice-and-automation-testing){:target='_blank'}
- [2 - Best Java Unit Testing Frameworks - With Examples of JUnit, Mockito and More...](/java-unit-testing-frameworks-with-examples-junit-mockito){:target='_blank'}
- [3 - Programming Basics - Unit Testing - What Is Mocking?](/programming-basics-introduction-to-mocking-in-unit-tests){:target='_blank'}
- [4 - Unit Testing Best Practices - with Java and Junit Examples](/unit-testing-best-practices-with-java-and-junit-examples){:target='_blank'}




#### Unit Tests

When you develop an application, it could contain a large number of classes, each of which probably has several methods. You normally write a test case for a particular **unit** of code. A unit could be a method, a group of methods, or  the entire code of a class. Typically, you want to keep the individual unit tests as independent as possible. 

A common approach to unit testing is to mock external dependencies, for effectively testing the business logic. For example, a unit test could be run independent of a database. This ensures that tests do not have external dependencies and do not fail when something external to the test changes. 

#### Layer Integration Tests

When we develop enterprise applications, we generally structure them into layers. For instance, a web applications could have  web, business and data layers. You would want these separate layers to work well together. Therefore, you write layer integration tests to ensure their proper integration. 

For example, when you make a call to the web layer, is it being propagated correctly to the business layer, and from there to the data layer? Finally, are you getting a proper response to the request? 

#### API Tests

When we create a microservice, we end up offering APIs for the consumers to access and consume resources. Examples are REST and SOAP APIs. You can test an API by writing an automation test for it. Even for such API tests, the need of the hour is an in-memory database, as it is good to avoid external dependencies.  

#### System Tests

Here is where all the systems external to our application come into the picture, during testing. You would start accounting for databases, external interfaces and other dependencies needed by your application. This is where you actually deploy your application in a real-world environment.  

#### User Acceptance Tests

This is the final level of automation testing, where you test every aspect of the end-user usage scenarios. The focus here is on creating real-time usage scenarios, such as accessing a production-mode database for testing the logic. This step is necessary before you take the application live.

Do check out our video on this:

[![image info](/images/Capture-026-02.png)](https://www.youtube.com/watch?v=kwqH1C76siE)

### Summary

In this article, we explored the five different kinds of automation testing that is generally performed on applications. These are unit testing, layer integration testing, API testing, system testing and user acceptance testing. 


