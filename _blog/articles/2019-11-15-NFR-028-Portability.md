---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Portability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Portability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-portability
image: /images/architecture.png
---

In this article, we explore the important non functional requirement called Portability. 

### What you will learn
- What Is Portability?
- Why is Portability important?



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


### What Is Portability?

Portability is one of an application's non-functional requirements. 

The question to ask is : What is the cost of migrating or supporting a new platform? What are the costs involved when you need to move to or support a new language, framework , database or cloud provider? 

Ideally, you want your application to be as portable as possible, as you don't want it to be tied to a specific infrastructure. 

Let's say you want to deploy your application to the cloud, and initially choose AWS as your provider. If the application is portable, it would be possible to easily migrate it in the future, to say Google Cloud or Microsoft Azure. 

#### Portability is a trade-off

It is very important to remember that there are costs involved in building portable applications. If we want our application to be deployable to AWS, Azure and GCP - it would limit the architecture choices that are available to you.
- There might be an awesome AWS feature which you might not be able to leverage

It is always important to analyze the trade-offs and evaluate the costs when it comes to portability.

### A Microservices Example

You can assess portability at multiple levels. Consider for example the following diagram of a microservices architecture:

![image info](/images/Capture-028-02.png)

This is an infrastructure where a microservice is deployed. The factors that determine the portability of such a microservice depends on:

* The language used to develop it
* The framework employed to develop it
* The interfaces that are written for it
* The common components that it makes use of
* The common infrastructure that it makes use of

### Well Defined Interfaces

It is well documented that **well-defined interfaces** are a major factor in improving an application's portability. For example, if we write a well-defined interface to talk to the security component, switching to a different security implementation later will be much easier. 

### Platform Decoupling

The other important point is not to depend in a specific platform feature. 

If your application uses a database feature specific to Oracle DB, then it is tied to Oracle DB. If you use a system feature specific to the UNIX OS, then you are again tied to it. If you are using a AWS specific feature, you are tied to AWS.

Avoid platform coupling.

### Interacting With Web Services

Another way of improving portability is for the application to have interactions with web services, to consume what they have to offer. This makes sure it is not tied to a particular technology or platform. This is kind of loosely related to the concept of interfaces.

Do check out our video on this:

[![image info](/images/Capture-028-01.png)](https://www.youtube.com/watch?v=2HWEde56mYM)

### Summary

In this video, we looked at a non-functional requirement called portability. Portability is the cost that is involved in moving an application to a different platform. That could be a new language, framework, or database. We saw that there are multiple levels of portability involved.

