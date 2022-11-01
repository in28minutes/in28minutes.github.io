---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Scalability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Scalability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-Scalability
image: /images/architecture.png
---

In this article, we explore the important non functional requirement called Scalability. 

### What you will learn
- What Is Scalability?
- Why is Scalability important?
- What are the different types of Scalability?
- What are the best practices in building Scalable systems?



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


#### What Is Scalabiity?

Let's say we have an application A, that supports N number of users with its current infrastructure. 

If we increase the infrastructure by a factor of 10, can we hope to support 10 times the current users? 

This is at the heart of scalability. 

> How we can we support a multifold increase in number of users with a linear increase in infrastructure?

The question that naturally follows is 
- How do you build scalable applications? 

For that, we need to understand the types of scalability.

### Types Of Scalability

 At a high level, there are two kinds of scalability: 

* Vertical
* Horizontal

### What Is Vertical Scalability?

Vertical scalability is all about increasing the hardware and processing capacity available to a system. 

Consider the following microservice architecture:

![image info](/images/Capture-030-02.png)

Suppose Microservice1 is deployed on a specific system. Vertical scaling for Microservice1 system would be achieved by increasing the CPU processing power, or by augmenting the amount of main memory on the physical server. 

Vertical scalability has limits - Its very expensive to purchase powerful hardware. Vertical Scalability can only help you to a certain extent.

### What Is Horizontal Scalability?

How about having 5 instances of Microservice1 instead of just 1 instance? How about having 5 Naming Servers and 2 API Gateways?  This is the core thought process for Horizontal Scalability.

> Most of the times that we talk of scalability, we refer to horizontal scalability. 

Discussing horizontal scalability brings us to a very important question: **"How do you build scalable applications?"**

### Building Scalable Applications

Let's look at few of the important factors to consider when building an application which can scale.

#### Have Modular Applications

A very important factor in scalable applications is **modularity** of your applications. In our example microservice architecture, there are multiple modules or components, each of which can be independently deployed. For example, you can increase the number of instances of each of the microservices, independently.

If you have large **monolith** applications, or large monolith databases with huge amounts of data within them, they become huge bottlenecks. For example, it is very hard to replicate large databases, or to scale them, vertically or horizontally. Same is the case with monolith applications. 

> An important step in improving scalability is to make the application more modular, by adopting a microservice architecture, for example.

#### Improve Caching

If part of the system has higher load, and we access certain data very frequently, **caching** is a viable option to improve scalability. 

Enterprise web applications generally have a lot of data available that can be cached. Microservice3 from our example above might be returning the list of all states for a particular user request. To improve efficiency for future requests, Microservice1 can cache this result, once a day. That can potentially reduce the load on Microservice3.

Another option would be to have a **built-in cache** for each of the microservices. For example, Microservice1 need not connect to a database to get results for a query; it can use an internal cache. 

A **distributed cache** caching data across different instances of a microservice might also be an option. 
 
Do check out our video on this:

[![image info](/images/Capture-030-01.png)](https://www.youtube.com/watch?v=-aO7GNzvol4)

### Summary

In this article, we introduced you to the concept of scalability. Scalability addresses the aspect of addressing increased load with minimal increase in system infrastructure. 

We saw that there are two main kinds of scalability: vertical and horizontal. 

Scalalbility of an application can be improved by designing it in a more modular manner. Different kinds of caches can also help with Scalability.

