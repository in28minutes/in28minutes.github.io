---
layout:  post
title:  Software Design - Separation Of Concerns - with examples
date:    2019-11-14 12:31:19
summary: Software architects and programmers love having Separation of Concerns. What is it? Why is it important? Let's get started.
categories: SwDesign
permalink:  /software-design-seperation-of-concerns-with-examples
image: /images/design-category.png
---

Software architects and programmers love having Separation of Concerns. What is it? Why is it important? Let's get started.

### You will learn

* What is Separation Of Concerns?
* What are common examples of implementing Separation Of Concerns in software?

### Software Design Principles

This is the second article in a series of articles on important Software Design Principles:

- [1 - Introduction to Four Principles Of Simple Design](/four-principles-of-simple-design){:target='_blank'}
- [2 - Software Design - Separation Of Concerns - with examples](/software-design-seperation-of-concerns-with-examples){:target='_blank'}
- [3 - Object Oriented Software Design - Solid Principles - with examples](/software-design-solid-principles){:target='_blank'}
- [4 - Software Design - Single Responsibility Principle - with examples](/software-design-single-responsibility-principle){:target='_blank'}
- [5 - Software Design - Open Closed Principle - with examples](/software-design-open-closed-principle){:target='_blank'}
- [6 - Software Design - What is Dependency Inversion Principle?](/software-design-dependency-inversion-principle){:target='_blank'}


### What Is Separation Of Concerns?

Separation Of Concerns is an important design and architectural principle.

> Every element of a software application - a component, a layer,a package,a class or a method should have one concern and implement it well. 

All methods with similar concerns will grouped into a class. 

All classes with similar concerns will be grouped into packages. 

So on and so forth.

### Separation Of Concerns In Action

#### Layered Architecture

Organizing an application into separate layers is one way of separating out concerns. 

For example, the following is the typical architecture of a web application:

![image info](/images/Capture-039-02.png)

Here are some of the important responsibilities of each of these layers
- The Web layer only bothers about how to present data to its users 
- The Business layer focuses on implementing the core application logic, correctly and efficiently
- The Data layer takes responsibility of talking to the data store. 

You can see that each layer has a concern and implements it well.

#### Organizing Microservices

Another good example of Separation Of Concerns is how you split your microservices. Have a look at the diagram below: 

![image info](/images/Capture-039-03.png)

All the microservices shown are part of a movie application. But each one of them has its own independent concern. 

#### Identifying Common Components

Separation of concerns is also an important factor in building common application and infrastructure components.

Since a large part of the functionality of microservices is common to all of them, it makes sense to extract out the common components. Here is an example:

![image info](/images/Capture-039-04.png)

All microservices need features such as security and logging. By identifying common components in your service such as Security and Logging, and providing well defined interfaces with each microservice, the implementation of the microservices gets simpler.

The same is the case with common infrastructure components. Any microservice can interact with them and use their functionality. 

A few examples of Separation of Concern in infrastructure components
- Naming Server - Microservice3 can locate the identity of Microservice2.
- API Gateway - Centralized access to all microservices. You can implement cross cutting microservice concerns here.
- Distributed Tracing and Centralized Logging - You can trace microservices and find out what's happening behind the scenes.

Do check out our video on this:

[![image info](/images/Capture-039-01.png)](https://www.youtube.com/watch?v=GRTQ896UWaI)

### Summary

In this article, we looked at separation of concerns, and several examples of it in action - such as in a layered architecture, in the way microservices are split and organized, and in the way common components and infrastructure are identified and extracted out in a microservices architecture.