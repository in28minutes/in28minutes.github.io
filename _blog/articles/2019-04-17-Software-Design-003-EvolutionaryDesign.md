---
layout:  post
title:  Software Design - Introduction to Evolutionary Design
date:    2019-04-16 12:31:19
summary: With extreme programming and agile, the focus is being lean and doing just in time design. In this context, how do you ensure that your design remains good and evolves along with the application requirements? 
categories: SwDesign
permalink:  /software-design-introduction-to-evolutionary-design
image: /images/design-category.png
---

With extreme programming and agile, the focus is being lean and doing just in time design. In this context, how do you ensure that your design remains good and evolves along with the application requirements? 

### What will you learn?
* What is Evolutionary Design?
* Why is it important?
* How can you use Evolutionary Design in the best way possible?
* What Are The Advantages Of Evolutionary Design?
* How does Evolutionary Design fit in with agile?
* What are the best practices with Evolutionary Design?



### Software Design

This is the last article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### Waterfall Model In Perspective

One of the first software implementation model was the **Waterfall Model**. Before we start with Evolutionary Design, lets look at how design was done in a Waterfall Model.

The Waterfall Model typically involves the following project stages:
* Architecture
* Design
* Programming/Coding
* Testing 

The duration of each of these phases could be a month, two months or even three months. 

Before you can get to the programming step, you need to be involved for a long time in the architecture and design phases. The result of this is that you have the components of your program fully specified - the classes, methods among others - before you even start coding.

This model assumes that you can design software just like you design your buildings or bridges.

However, there were several problems with this approach and we quickly moved on to other design approaches as new sotware development models evolved. 

### Introducing Evolutionary Design

In the waterfall model, we architect and design the entire system before we even start coding. 

Evolutionary Design adopts a radically different approach. It focuses on having a simple design that works to start with. Now, what is simple design? 

A software application is said to have a simple design if it:

* **Runs all tests** : There are good unit tests and all tests succeed all the time.
* **Contains no duplication** : There is no duplication of code or intent.
* **Expresses intent of programmers** : Code is clear, easy to read and simple. 
* **Minimizes number of classes and methods** : Architecture and Design are as simple as possible to get things dones. Classes and Methods are as small as possible without losing clarity or performance.

The thought process behind Evolution Design is that once the design is simple, you can enhance it easily to meet future needs.

### Evolutionary Design and Agile

Evolution design fits very well with the agile way of working. 

Agile focuses on getting things done in small cycles. You design a little. You code a little. You test a little. You move your code to production often. Focusing on 4 principles of Simple Design helps you in keeping the design simple and evolve design over a period of time instead of a one time design.

### Architecture vs Design

While the focus of agile is on just in time design, it is important to distinguish between design decisions and architectural decisions. 

Some decision are difficult to change, once you made the choice. For example:
* What frameworks to use to build your application?
* How do you integrate with other applications?
* What is the boundary of the application you are building?

These decisions are what I call - architectural decisions. It is important to take time while making architectural decisions and involve your architecture team as well. 

### How Evolutionary Design Works

In Evolutionary design, we follow an iterative approach:
1. Does your feature involve an architectural decision? If not, go to next step. Otherwise, get your architecture team involved and possibly do a prototype to test your architecural decision.
2. Code the feature
3. Refactor code to meet 4 Principles of Simple Design
4. Repeat

### What Are The Advantages Of Evolutionary Design?

The following are the stand-out advantages of Evolutionary Design:

* **Avoids over-design** : When we follow older design methods, we tend to prepare our software to handle future requirements. This is a classic case of over-design.
* **Avoids wastage of effort**: This could happen when we design for future requirements that never happen
* **Designs just-in-time**: It follows an iterative cycle of development, where the focus is on current requirements, delivering current value, and incorporating relevant feedback.

### What Challenges Arise With Evolutionary Design?

The following are the significant challenges posed by Evolutionary Design:

#### Needs a clear separation between Architecture and Design 

All design cannot be done in the nick of time; architecture decisions are difficult to change and time must be devoted to those. You may want to create a separate category of user story, or even a separate process sprint to cover the architecture decisions. Also, everyone in the project needs to be clear about these two kinds of decisions for the project.

#### Need for skilled and experienced architects and developers

A group of inexperienced or less experienced developers cannot pull off a well-designed software application, using evolutionary design. You need guidance from experienced people.

#### Need for Continuous Integration

Continuous Integration is essential for Evolutionary Design is effective:

 * To be sure your tests are running regularly
 * To ensure that code quality is under check

#### Needs High Quality Tests

Your unit tests need to be really top-class. If these unit tests are not good, then refactoring the code is out of question. This leads to the design getting stagnated, as the 
developers are reluctant to refactor the code. Now, the design is no longer evolutionary!

### Understanding The Best Practices

The two major points to stress on here are:

#### Use Test-Driven Development (TDD)

This is the best way to ensure that your low-level design is good. With TDD, your focus before you write any code is how you will go about testing it. For example, you start thinking about how someone will use your class and its methods, before you write the method. You thus have an *outside-in* perspective, and that's always good to have as a developer. This results in the software having a good and robust API. 

Another things that results from TDD is you have great unit tests! 

When following TDD, you first write a unit test, make it fail, and then write the code to make it pass. So, you have more reliable tests.

#### Use Continuous Integration

As we saw a short while ago, we need to make sure we keep running the tests we write, regularly. This ensures you get immediate feedback if something has gone wrong. 

### How To Learn Evolutionary Design?

The best way to learn this is by using **pair programming**: pair with good, experienced programmers. This will give you insights into how to evolve your program's design, over a period of time. 

### Summary

In this article, we gave you an insight into Evolutionary Design. Evolutionary Design helps us avoid over design and keeps our design simple.

Do check out our video on this:

[![image info](/images/Capture-03-01.png)](https://www.youtube.com/watch?v=9yXtlEegx90)


