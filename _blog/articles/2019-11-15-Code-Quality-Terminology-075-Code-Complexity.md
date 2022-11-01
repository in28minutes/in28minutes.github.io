---
layout:  post
title:  Code Quality Basics - What Is Code Complexity?
date:    2019-11-14 12:31:19
summary: In this article, we find out what code complexity is, and how we keep track of it.
categories: SwCodeQuality
permalink:  /code-quality-what-is-code-complexity
image: /images/design-category.png
---

In this article, we find out what code complexity is, and how we keep track of it.

### You will learn
- What Is Code Complexity?
- What are a few examples of Code Complexity?
- Why Is Code Complexity important?
- What are the tools you can use to measure Code Complexity?
- How can ensure that Code Complexity standards are Adhered to?



### Article Series

This is third article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Code Complexity?

Code Complexity is a measure of how difficult your code is to understand. 

* Suppose you have just written a method having 15 ```if``` conditions and 3 ```for``` loops. How easy do you think it is to understand? 
* Think of a class we have written that has 25 member variables and 75 methods, where some of these methods are huge, having a lot of ```if``` conditions and ```for``` loops. Is this an easy class to understand?

### Measuring Code Complexity

#### Measuring Cyclomatic And Cognitive Complexity

Cyclomatic complexity is a way of measuring complexity taking into account
* The number of ```if``` ```else``` ```switch``` conditionals
* The number of loops - ```for``` , ```while``` and ```do while``` 

There is a way to measure the code complexity in SonarQube as well:

![image info](images/Capture-075-02.png)

You can see that the TreeFactory.java has a cyclomatic complexity measure of 366. That means this class might be a little difficult to understand. 

Let's pick up another file which has a lower complexity listed:

![image info](images/Capture-075-03.png)

You can see that the ```findMemberType()``` method is being highlighted. When you click on it, you get some additional info:

![image info](images/Capture-075-04.png)

It says that the method has a different complexity measure, the **cognitive complexity**, that is bad for the code here. It suggests that we refactor this method to correct the complexity. 

If you look at this method:
![image info](images/Capture-075-05.png)

It has ```for``` loops, ```if```, conditional operator at multiple places, all in interesting combinations! 

A complex method is often a sign that the developer has not thought enough about the code.   

### Understanding Code Complexity

Whenever we write code, we need to keep things small. Simple methods, small classes, small packages, simple components all lead to small and simple applications. 

The goal of writing code is not to write large amounts of it, but to achieve a certain functionality. The aim is to achieve that functionality with as little code and complexity as possible. 

PMD is also a good static analysis tool to assess code complexity, apart from Sonar.

### Addressing Code Complexity

In order to address the problem of complexity, you need to identify it early and monitor it on a regular basis.

You need to include code complexity goals as a major part of your coding standards. These should be regularly tracked.

Do check out our video on the same topic:

[![image info](images/Capture-075-01.png)](https://www.youtube.com/watch?v=cE44izR3A5E)

### Summary

Code complexity is a measure of how difficult it is to understand your code. Generally, large method and classes are code smells. There are different measures for code complexity, and various tools to measure them as well. Keep Refactoring code to reduce complexity.
