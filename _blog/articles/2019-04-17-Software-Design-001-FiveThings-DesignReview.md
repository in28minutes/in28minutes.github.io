---
layout:  post
title:  Software Design - Five Things To Look Out For In A Design Review
date:    2019-04-16 12:31:19
summary: Doing a software design review is never a straightforward task, with a number of things to look out for. In this short article, we look at five such aspects, which will help you structure your review process in a better way.
categories: SwDesign
permalink:  /software-design-five-things-design-review
image: /images/design-category.png
---

You are invited to do a design review for an important project.  
- Where do you start? 
- What do you look for?

Doing a software design review is never a straightforward task, with a number of things to look out for. In this short article, we look at five such aspects, which will help you structure your review process in a better way.



### Software Design

This is the last article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}
- [8 - Software Design - Five Things To Look Out For In A Design Review](/software-design-five-things-design-review){:target='_blank'}


## Do you have good high level architecture?

I would start with looking at the high level architecture. Understand the business context of the application. Understand Choice Of Layers And Responsibilities

* Are we making the *right choice* in number of software layers
* Does each layer have its *own responsibility*?
* Do we have *too few layers*?
* Are we making the *design too complex*?
* Are we making the *right choice of responsibility* for each layer?
* Are we creating *good APIs*? Are we exposing functionality in the *right way*?

## Are you choosing the right frameworks and tools?

The second thing I would look at is the choice of frameworks and tools. 
* Are we choosing the best framework options?
* Does it fit in with the enterprise guidelines of the organization?
* Are the chosen frameworks *appropriate for the domain* in which the software is being developed?
* Are we making the *best use* of those frameworks?

## Do you have Great Unit Tests?

> This might be a surprise but I'm a great believer that great applications have great unit tests. 

In order have the design of your software to be always evolving, you need an awesome set of unit tests. 

> Unit Testing Golden Rule : Are you able to understand the scenario being tested in less than a minute? 

If you are, that's awesome. If you are not, this might indicate
* Lack of Single Responsibility
* Complex Dependencies or 
* Bad Unit Tests 

Any of the above is a bad omen. 

## Is the readability of code good?

The next thing I would look at is the readability of source code. Am I able to look at a piece of code and understand it quickly?

If you are, that's awesome. If you are not, this might indicate
* Bad Coding Practices
* Lack of Single Responsibility
* Complex Dependencies

## Are you using and creating reusable components?

The last thing I would focus on is Reusability. You don't want to build everything on your own. Do you? You want to use open source frameworks and also frameworks available in your enterprise. And you might also want to contribute to the frameworks in your enterprise.

Here are somethings look at?
* Can I *use other common components* present in the enterprise?
* Can some part of what we are building (for example authentication, database framework etc) be *re-used across the enterprise*? Can we create a common component?
* Are we making the *right use* of such common components?

Do check out our video on this:

[![image info](/images/Capture-01-02.png)](https://www.youtube.com/watch?v=idgO7_Dvdm0)

### Summary

In this article, we looked at how you can do a quick design review for a new project.

Do you look for anything else in a quick review? Leave a comment.


