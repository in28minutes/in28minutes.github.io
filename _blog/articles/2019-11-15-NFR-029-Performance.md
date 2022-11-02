---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Performance
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called performance. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-performance
image: /images/architecture.png
---

In this article, we explore the important non functional requirement called performance. 

### What you will learn
- What Is Performance?
- Why is Performance important?
- What are the best practices in building performant systems?



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


### What Is Performance?

When we type in a web page URL in a browser, performance from a users perspective is the time it takes for the page to load. 

Performance is essentially a measure of how much time a system takes to respond to a user request. 

Consider the following simple microservices architecture:

![image info](/images/Capture-029-02.png)

There are three microservices in here, that communicate with several kinds of common components and other infrastructure. How would you go about improving the performance of a system such as this one? 

Let's look at different aspects of this goal.

### Improve The Code

The first step would be to improve the performance of code written for each of these microservices. If for instance Microservice1 is written in Java, then make sure you follow the applicable Java best practices for its code, such as: 
* Making best possible use of Java collections 
* Not creating too many objects
* Using the right efficient data structures and algorithms, in your business logic 
* Make sure that the microservices are profiles and performance tunes to the maximum possible extent

### Fine-Tune Your Databases

If your application accesses a database in order to store and retrieve data, then such access needs to be efficient. For example, your microservice could be talking to a data service in order to manage its data, much like the following:  

![image info](/images/Capture-029-03.png)

For that, you need to ensure that the databases used are fine-tuned to the kind of queries used by the microservices. This would include things such as: 
* Proper use of indexes

### Cache Your Data

Particularly in web applications, quite a few aspects of data handled by it can be cached. 

If caching were not used, a lot of static content, including HTML/CSS/JavaScript would need to be transferred repeatedly between the server and the browsers. 

Similarly, a microservice need not always fetch data from the data store. It could have a cache built in at the business logic, where it stores recently or frequently accessed data.

Another aspect to look at is the kind of caching mechanisms that can be used. The caching model could be a database-specific cache such as at the JPA level, or a distributed cache. 

If you use a distributed cache, data accessed by different instances of a microservice could be cached centrally. 

### Build Redundancy

The next option available to improving application performance, is to build redundancy. 

In our example, instead of having one instance each of Microservice1, Microservice2 and Microservice3, have say 10, 5 and 3 instances. The number of microservice instances created depends on the expected load on each such microservice. This would allow the application to handle a larger volume of requests within lesser time, and lighter load on the server in general. 

You could also build redundancy by having multiple instances of each type of common infrastructure. 

### Improve System Capacity

Another option is to improve the configuration of each of the servers. This could involve arranging for better CPU processing power, and augmenting the amount of available physical memory. 

### Ensure Modular Design

In our microservices architecture example, you have noticed that we have built the system in a modular way. We have designed different types of components for different responsibilities, as well as organized infrastructure code into different modules. 

At a design level, one of the ways to improve the performance of a large monolith application would be to make it more modular. For example, splitting it up into components would enable us to deploy them onto different servers. 

### Best Practices For Performance Improvement

Until now, we have looked at different options that are available to improve the performance of an application. Let's now look at a few best practices for improving an application's performance.

#### Have Clear Guidelines

You must have clear performance guidelines from the start of a project. Do not wait until the end of the project to outline these. 

The requirements should clearly list out the system parameters, such as the number of system users, the peak load, the expected response time, among others. 

#### Test Performance Early

You need to test your application's performance early, and not just leave it to the end.  Ideally, performance tests need to be part of your definition of done. 

#### Profile Your Code

Make sure you profile your code at regular intervals of time, to identify places of improvement. After identifying them , effort should be put in to fine-tune the application to address this feedback. 

#### Ensure Visibility

Whenever you find a performance problem with your application, you need to identify the root cause. Also, when you need to give a fix for this, the solution should be one that gives the best possible improvement. 

Nailing down the root cause of a problem is only possible if you have great visibility of what is going on. 

You would need clear visibility into what's happening with the request in the back ground
- What microservices are involved? How much time is spent in each of them? 
- What infrastructure components are involved? How much time is spent in each of them? 

The more visibility you have into an application, the easier it is to identify performance bottlenecks.

Do check out our video on this:

[![image info](/images/Capture-029-01.png)](https://www.youtube.com/watch?v=zjZ7-pmfezE)

### Summary

In this video, we say that performance is a measure of how much time a system takes to respond to a user request. We saw that there are a number of aspects to how to improve application performance. 

The first aspect refers to improving the code to adhere to the language, framework best practices. Then, you could work on fine-tuning the performance to databases to which the system has access to. A third option would be to introduce caching as a practice to store recently, or frequently accessed data. Introducing redundancy improves performance by distributing the load on a server, among different nodes.

We then looked at general best practices for performance improvement. These include having clear performance guidelines early on, testing regularly for performance, profiling code frequently, and improving traceability. 

