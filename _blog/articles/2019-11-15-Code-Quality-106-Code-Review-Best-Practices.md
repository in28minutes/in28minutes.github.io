---
layout:  post
title:  Code Review Best Practices
date:    2019-11-14 12:31:19
summary: Code Review is one of the most important components in ensuring great Code Quality in your projects. How do you ensure that code reviews in your projects yield expected results? 
categories: SwCodeQuality
permalink:  /code-review-best-practices
image: /images/design-category.png
---

Code Review is one of the most important components in ensuring great Code Quality in your projects. How do you ensure that code reviews in your projects yield expected results? 
 
## You will learn
- What is code review?
- Why do you do code reviews?
- When should you do a code review?
- How can you become a good code reviewer?
- What are the things to look for in a code review?
- What are the code review best practices?



## Article Series

This is the fifth article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### Why Code Reviews

What could be the reason for doing a code review? 

![image info](images/Capture-106-02.png)

Remember that a code review is not a tool to find fault with others efforts. 

Here are a couple of important goals:
- A code review is done to add value to the system and the people in the team. 
- It also adds to a list of best practices that team members can follow.

#### Adding Value To The System

Code reviews add value to your system. Aim of the code review is to make the system more maintainable. Your aim is to check for bugs in adhering to functional and non functional requirements - scalablity, performance, security etc.

#### Adding Value To The People

Code reviews should be used as a way to enhance the knowledge of the developers involved and a way to spread the best practices. 

#### Adding To Best Practices

An important step of code review should be to identify best practices. Common error patterns can be identified and documented.

### When Should You Do Code Reviews?

![image info](images/Capture-106-03.png)

#### Review As Early As Possible

It is preferable to do code reviews **as early as possible**.

##### Review with Normal Focus

Normal focus refers to typical code review done during the course of a sprint for a run of the mill user story. 

##### Review with High Focus

There are times during development when peer reviews need to be done with high focus. 

###### New Developers Joining In

A good example is when a new developer joins a team. A new developer takes time to get familiar and start implementing code that meets the team's coding standards. An effort should be made to encourage them to learn from code reviews.

###### New Methodology Or Technology Implemented

When a new methodology is being adopted, or a new technology is being brought into the code base, it is important to have focused code reviews.

###### Building A Vertical Slice

In the initial stages of the project, you generally build a vertical slice. Vertical slice helps in solving technical challenges. 

Vertical slice becomes a reference for the project. It is important to have focused code reviews for the vertical slice. 

### How To Do Code Reviews?

![image info](images/Capture-106-04.png)

#### Encourage Pair Programming

Ideally, I would love to have pair programming reviews. A lot of times, it is much easier to refactor code almost immediately during the review, than at a later point in time.

### Code Review Best Practices

Let's quickly review a few other best practices related to code review.

#### Use Static Analysis Tools

Make use of static analysis tool such as SonarQube.

* Check the components in code, their sizes, and their interactions with other components in the code. 
* Identify and look closely at certain types of code hot-spots, such as:
	* Large classes
	* Complex methods
	* Large components
	* Lot of dependencies
	* Uncovered code

#### Review Junits

Review the Junits for complex method and classes, and see how readable the code actually is. 

> Junits are often a very good signal of the readability of code. If the code is difficult to test, the code is definitely difficult to understand.

#### Check Readability Of Code

Look at the readability of the code, by focusing on the Four Principles Of Simple Design. 

### What do you look for in a code review?

There are various aspects to be considered while doing a review of the code.

![image info](images/Capture-106-05.png)



#### Review The Architecture

Have a look at various points, such as:

* The choice of frameworks in the code base
* The way the code components communicate with other systems
* How testable the code is?
* The architecture of the components themselves
* The extent of code reuse - Are common components are identified and abstracted away for use in other places?

#### Review The Design

![image info](images/Capture-106-06.png)

Review the following aspects:
* What is the nature of the interaction between the various classes? How loosely are the classes coupled, and what is the cohesion between them?
* Have a look at the layer responsibilities, and see if the layers are clearly demarcated, and do not overlap in functionality. 
* How well are the core object oriented principles followed in the code design?
* What is the nature of the unit tests? How easy or difficult is it to unit test the code under review?

#### Review The Code

![image info](images/Capture-106-07.png)

* Make sure the code follows the Four Principles Of Simple Design
* Ensure the code got the basics right

![image info](images/Capture-106-08.png)

* Will the code be scalable and performant?

![image info](images/Capture-106-09.png)

* How does the code handle important security concerns?
* How well are the unit tests written, and are they readable?
* Are language specific standards being adhered to? In Java foe example, the following language constructs have certain purposes:

![image info](images/Capture-106-10.png)

For example, Enums are preferred to strings wherever possible, and this makes the code more readable.

#### Review Engineering Practices

![image info](images/Capture-106-11.png)

The quality of code in an application depends greatly on the kind of engineering practices followed in the team. You can check
* How often the code is committed?
* Review how often builds are broken
* Review the entire continuous integration process

Do check out our video on the same topic:
[![image info](images/Capture-106-01.png)](https://www.youtube.com/watch?v=hVJGu0xdXII)

### Summary

In this article, we had a good overview of code review best practices for a team, or organization. The core principle behind doing code reviews is to add value - to the system, to the people involved, and to the best practices as a whole.
