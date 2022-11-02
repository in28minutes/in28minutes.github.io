---
layout:  post
title:  Software Design - How do you keep your design simple?
date:    2019-04-16 12:31:19
summary: With extreme programming and agile, the focus is being lean and keeping your design simple. In this context, how do you ensure that your design remains good and evolves along with the application requirements? Here are a five tips you can focus on.
categories: SwDesign
permalink:  /software-design-keep-your-design-simple
image: /images/architecture.png
---

With extreme programming and agile, the focus is being lean and keeping your design simple. In this context, how do you ensure that your design remains good and evolves along with the application requirements? Here are a five tips you can focus on.



### Software Design

This is the first article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



#### The Four Principle Of Simple Design

These are the foundation for keeping your design simple. When you try to learn the ropes using Extreme Programming, you really need to focus on these principles. 

A software application is said to have a simple design if it:
* **Runs all tests**
* **Contains no duplication**
* **Expresses intent of programmers**
* **Minimizes number of classes and methods**

You can read more about it [here](/four-principles-of-simple-design){:target='_blank'}

#### SOLID Principles

This represents a good aim to have when designing Object Object Software. The term SOLID is an acronym for:

* Single Responsibility Principle
* Open-Closed Principle
* Liskov Substitution Principle
* Interface Segregation Principle
* Dependency Inversion Principle

You can read more about it [here](/software-design-solid-principles){:target='_blank'}

#### Appropriate Patterns

Be choosy about the design pattern you use. Do not fill up your design with patterns, just because they are available. Understand the context of your application and the context of the design pattern. Make sure they make the right match before implementing design pattern.

#### Simple Hand-drawn Diagrams

Simple, hand-drawn diagrams are quite sufficient to communicate the initial design to the stakeholders and your peers. Trying to produce stunning, intricate diagrams only leads to a wastage of precious time. 

Once the design is stabilized, you can work on more concrete diagrams.

#### Great Unit Tests

This is a very important requirement for a simple design. Tests help to keep your design evolving, because they give you feed back on how correct your code is. If that is not the case, you won;t be confident of changing your design, and  the design would no longer evolve.

Do check out our video on this:

[![image info](/images/Capture-016-01.png)](https://www.youtube.com/watch?v=pjDphh9OBVk)   

### Summary

In this article, we discussed a few tips on simple design.

