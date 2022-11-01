---
layout:  post
title:  Code Quality Basics - What Are Code Smells?
date:    2019-11-14 12:31:19
summary: In this article, we have a closer look at code smells. We see what they are, and what you should do about them.
categories: SwCodeQuality
permalink:  /code-quality-code-smells
image: /images/design-category.png
---

In this article, we have a closer look at code smells. We see what they are, and what you should do about them.

### You will learn
- What Are Code Smells?
- What are the typical code smells?
- How do you identify code smells?
- How do you react to code smells?



## Article Series

This is the sixth article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### What Are Code Smells?

A code smell refers to a certain pattern in the code that signals there could be a defect lurking somewhere. 

Static analysis tools are very good at detecting code smells. They analyze the patterns, and then see if they could lead to a problem. 

For example, if you assign a variable in Java a ```null``` value, and then immediate call a method on it, a ```NullPointerException``` would result. That is nothing but a code smell! 

If you do static analysis of that part of code, the tool would indicate there is a high chance of a defect in the code at that point.  

Choosing static analysis tools is the best way to detect code smells in your application:

![image info](images/Capture-077-02.png)

SonarQube has great tools for detecting code smells. what we see in the snapshot above are the rules for Java, and a profile where there are 194 code smells present.

### Typical Code Smells

What are examples of typical code smells? Let's take the example of Java programs:

* You make use of a deprecated method definition, that is annotated by ```@Deprecated```
* You make use of a ```for``` loop, but do not increment/decrement the loop counters
* You access a ```static``` member using an instance variable
* You make use of a ```switch``` statement, but do not have a ```default``` clause
* You have a ```switch``` statement with just two ```case``` clauses
* You call ```toString()``` on a ```String``` object
* In a situation where you need to use a ```while``` loop, you use a ```for``` loop
* You name a class as ```Exception```, but do not extend the built-in ```Exception``` class, or a subclass of it
* You throw an exception in the ```finally``` clause
* You throw very generic exceptions
* You use a ```try```-```catch``` block, where a ```try```-with-resources might be a better option
* You have unused private methods

When you see instances of such smells, you conclude that the developer does not fully understand what he/she was trying to do. Such situations could cause hidden bugs to exist in the code. 

### Other Kinds Of Code Smells

Other kinds of code smells could exists, especially in your JUnit code. These include:
* Ignored unit tests
* Empty test case
* Test case without asserts

### Handling Code Smells

Make sure that having zero code smells is an integral part of your Definition Of Done. 

It is important that you do static analysis and manual code review on a regular basis. 

Static analysis should be part of continuous integration build.

Do check out our video on the same topic:

[![image info](images/Capture-077-01.png)](https://www.youtube.com/watch?v=r0CyMrZBYa4)

### Summary

Code smells are patterns in code that could indicate hidden bugs. The two ways to detect code smells are static analysis, and manual code reviews. It is important to do both systematically, to keep the application free of code smells. 

