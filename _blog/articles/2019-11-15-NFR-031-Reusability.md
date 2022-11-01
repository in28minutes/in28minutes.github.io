---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Reusability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Reusability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-Reusability
image: /images/architecture.png
---

In this article, we explore the important non functional requirement called Reusability. 

### What you will learn
- What Is Reusability?
- Why is Reusability important?
- How do you improve Reusability of your components?



### Non Functional Requirements and Microservices

This is the part of a series of articles on Non Functional Requirements:

- [1 - Microservices Architectures - Non Functional Requirements](/non-functional-requirements-in-microservices-architectures){:target='_blank'}
- [2 - Security](/non-functional-requirements-in-microservices-introduction-to-Security){:target='_blank'}
- [3 - Web Application Security And OWASP - Top Ten Security Flaws](/web-application-security-owasp-top-ten){:target='_blank'}
- [4 - Maintainability](/non-functional-requirements-in-microservices-introduction-to-Maintainability){:target='_blank'}
- [5 - Scalability](/non-functional-requirements-in-microservices-introduction-to-Scalability){:target='_blank'}
- [6 - Performance](/non-functional-requirements-in-microservices-introduction-to-performance){:target='_blank'}
- [7 - Reusability](/non-functional-requirements-in-microservices-introduction-to-Reusability){:target='_blank'}
- [8 - Reliability](/non-functional-requirements-in-microservices-introduction-to-Reliability){:target='_blank'}
- [9 - Modularity](/modularity-non-functional-requirement-in-microservices){:target='_blank'}
- [10 - Availability](/availability-non-functional-requirement-in-microservices){:target='_blank'}
- [11 - Portability](/non-functional-requirements-in-microservices-introduction-to-portability){:target='_blank'}


### What Is Reusability?

Suppose you have worked on a project to create a microservice - Microservice A - and you are now working on a new project - Microservice B. 

Question to ask is:
> How much of the earlier implementation of Microservice A, how many modules and components (technical and infrastructure) can you reuse in the next microservice? 

You would prefer your applications to be built with reusable components, because it avoids unnecessary duplication of code and effort.

### Improving Reusability

The common approach to improving reusability involves one thing - "Build your system in a modular manner". 

Have a look at the following microservice architecture:
![image info](/images/Capture-031-02.png)

Instead of having a single monolith application, system is organized into modules. Over here, we have identified several common components, such as Security and Logging, which have logic that can be used across microservices.

Also visible are several common infrastructure components, such as NamingService, CentralizedLogging and APIGateway. These offer common services to several microservices. 

Once you have such common modules organized, each microservice would only be responsible for its own business logic. That makes it very easy to augment the system by adding new microservices, because there is no need to replicate the common components logic any more. The new service also just needs to manage its own business logic. The functionality of the common component can be **reused**.

#### Reusability at Code Level

You would want to avoid duplication in your code. The best way to ensure good low level design (methods and classes) is to ensure you are following the 4 Principles of Simple Design.
- You have great tests
- Your code is readable
- Your code has minimum duplication
- Your application, components, packages, classes and methods are as small as they can be

### Summary

In this short article, we talked about application reusability as a measure of how much functionality can be reused indifferent scenarios. Reusability can reduce duplication of code and effort. The most suitable way to improve the reusability of an application is to make its design modular.  

Do check out our video on this:

[![image info](/images/Capture-031-01.png)](https://www.youtube.com/watch?v=xfHgYXENDkk)

