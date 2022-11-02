---
layout:  post
title:  Software Design - What is Abstraction?
date:    2019-04-16 12:31:19
summary: Abstraction is one of the fundamental concepts of software engineering. It is all about hiding complexity while building your application. 
categories: SwDesign
permalink:  /software-design-what-is-abstraction
image: /images/architecture.png
---

Abstraction is one of the fundamental concepts of software engineering. It is all about hiding complexity in building various parts of your application. 

# You will learn

In this guide, we look at:
* What is Abstraction?
* A few examples of abstraction
* Why is Abstraction Important in Software Design?
* How can you introduce good abstractions?



### Software Design

This is the third article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### What Is Abstraction?

Abstraction is one of the fundamental concepts of software engineering.

#### An Example Of Abstraction

Consider a real-world analogy. Let's say you want to ride a motor bike. All you need to start the motor bike is to put the key on, push the start button, and use the accelerator. While riding, you may need to use the brake as well. 

You are not really concerned about how the engine, accelerator and brake are working during the ride. All that is **abstract** to you, and you are not concerned with it (unless you are mechanic). 

#### Another Example

Take another example - printing a document from your computer. You just open the document, click on the "print" command, and in a short while, the printed document is ready. You are not really bothered about how the computer stores the document in 0s and 1s, nor about hoe it is transferred to the printer. 

### Abstraction In Your Application

Whenever we build applications, we do so in layers. Here is the layered architecture of a simple web application:

![image info](/images/Capture-012-01.png)

An advantage of doing so is that the Web layer does not need to know anything about the Data layer. It is **abstracted away** from the Data layer. All that it needs to be concerned with, is that it can delegate requests to the Business layer, and the business layer would take care of rest of the flow. Layering in an application is, in a way, abstracting away complexity. 

### Abstraction In Programming

Let's go one level deeper and look at what happens underneath the hood when we write computer programs.

#### Programming In High-Level Languages

Have you ever written an assembly language program? Those funny ones with 1s and 0s. Actually, thats the only language that your computer would understand.

If you want to develop a web service, will we use Assembly Language? Far from it. We would instead use a high-level language such as Java or Python, to do that. These are human readable languages, that spare us the task of programming in 0s and 1s. 

The high level programming languages are an abstraction on top of machine or assembly language.

#### Writing SQL Queries

Think of how you write SQL queries to interact with a database. You just write what data you are concerned with, without paying heed to how it is stored in, or retrieved from the database. We expect the database to take care of all that. 

SQL is an abstraction layer for retrieving data from your database.

#### Calling Built-In Methods

In a high level programming language, calling built in utility methods available in its packages is another example of abstraction. Here is an example in Python:

```py

	>>> 'Hello World'.endswith('World')
	True
	>>> 'Hello'.islower()
	False
	>>>

```

When we call the built-in utility ```endswith()```, we are not concerned with how it is implemented. We only care about the fact that when called with ```World``` as a parameter on ```Hello World```, it returns ```True```. 

Same is the case with ```islower()```.Their implementations are abstracted away from you.

### Abstraction In Microservices

Consider the following enterprise application architecture:

![image info](/images/Capture-012-02.png)

It is quite common in such architectures to have common components for security, logging and archetype. The reason we have them is that we want them to take care of a specific responsibility. 

Let's say you want to handle authorization and authentication. By using a specific Security component to handle this functionality, you are abstracting away this logic from the rest of the application. The higher level microservices shown only need to know how to integrate with the security component. It does not need to know the inner details of the security component.

Do check out our video on this:

[![image info](/images/Capture-012-03.png)](https://www.youtube.com/watch?v=OF55HZPE7lQ)

### Summary

In this article, we had a look at what abstraction is, and understood that it is the basic pillar used to hide complexity. We also saw that abstraction takes up different forms at different levels. We looked at a number of examples to explore the same.


