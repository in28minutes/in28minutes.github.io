---
layout:  post
title:  Code Quality Basics - What Is Technical Debt?
date:    2019-11-14 12:31:19
summary: As you make enhancements to your source code, how do you ensure that you are adhering to all the standards? Is there a way to measure how good your projects is? What is Technical Debt?
categories: SwCodeQuality
permalink:  /introduction-to-technical-debt
image: /images/design-category.png
---

As you make enhancements to your source code, how do you ensure that you are adhering to all the standards? Is there a way to measure how good your projects is? What is Technical Debt?

## You will learn
- What is technical debt?
- What are the challenges with having large technical debt?
- Why should reduce technical debt?
- How do you track technical debt?
- How do you deal with technical debt for old projects?
- What are the best practices with handling technical debt?



## Article Series

This is first article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}

### What is Technical Debt?

Not all applications are designed and developed well. The gap that exists between the design and the code of your application, as compared to an ideal application, is called **technical debt**. 

> Amount of additional effort we have to put in future development and maintenance, in order to make up for the bad choices we made, and the shortcuts we took during initial design. 

Making short-term bad decisions to meet deadlines can lead to technical debt. 

Writing bad code, or code that is not supported by unit tests, can lead to technical debt.  

### Measuring Technical Debt

It is impossible to measure technical debt accurately. Its at best, a quick guess or a means comparison between projects.

Typically the aim of estimating technical debt is not to come up with an absolute measure of the cost, such as USD 1 Billion or something similar. 

The aim is to categorize your application within a set of other applications. For example, "among this given group of applications, the technical debt of your application is **low**".  

#### Tools to measure Technical Debt - SonarQube

A popular tool used to give estimates of technical debt is SonarQube:

![image info](images/Capture-069-03.png)

You can see that the categories of technical debt parameters are:
* Bugs : How many bugs are present in the code base?
* Vulnerabilities : For example, what are security vulnerabilities of your program? 
* Code Smells : These describe the coding good practices that are not being followed.
* Coverage : How many unit tests do you have, and how many lines of the total code do these tests cover?
* Duplication : How many times are specific blocks of code repeated?

These parameters are a direct measure of application code quality as well. SonarQube calculates each of these parameters, and then estimates the technical debt that arises out of each of these. 

#### Running SonarQube Periodically

When SonarQube is part of your Continuous Integration process, technical debt can be continuously tracked

Sometimes in a large project, it may not be possible to reduce the existing technical debt. However, it might be possible to tighten your practices to make sure you don't add fresh debt to your burden.

If you look at the Code Smells section of the SonarQube, it also measure newly introduced technical debt. 

### Reducing Technical Debt

Include Technical Debt in Definition of Done and monitor it during every sprint.

The things that you can do to reduce technical debt that you detect, include:
* **Keep Architecture Simple**. Make use of the Four Principles of Simple Design extensively in your application.  
* **Perform Continuous Refactoring**. For this, you need to have the confidence to change the code, which comes from the next point.
* **Have Great Unit Tests**. They ensure that breaks and bugs in code can be detected and fixed.
* **Follow Test Driven Development (TDD)**. Here, you write tests before you write the code, and these lead to good design.
* **Perform Static Analysis Periodically**. We saw an instance of this in SonarQube, especially when used as part of CI.
* **Perform Regular Peer Reviews**. Static analysis can find only certain kinds of defects. It cannot find things such as bad variable, class and method names. This is very essential to ensure readability of code.
* **Maintain A Technical Backlog**. Keep a list of things that you need to fix, and prioritize them regularly. 
* **Have Periodic Cleanup Sprints**. 

### Challenges With Technical Debt

#### Improving An Existing Project

A big challenge with technical debt, is figuring out how to improve an existing project having a large debt. The following few steps can make this daunting task, a little simpler.
* **Identify Potential Areas Of Improvement**. You can analyze the data that you get from static analysis and other means, and identify specific areas to improve the technical debt.
* **Identify Areas OF Future Change**. You could also identify the areas of the project, where changes anticipated in say, the next 6 months. 

Combine the information from the above two points, and write unit tests for the areas of anticipated change for the next 6 months. This is very important, because we don't want to introduce bugs due to our changes, that go undetected.

Refactor. With the confidence of having unit tests in place, go head an refactor over a period of time. 

Build the test base over a period of time.

### Technical Debt Best Practices

#### Have Technical Debt As Part OF Definition Of Done

In each of the Sprint cycles of a project, do a measure of the technical debt, and add action items to a technical backlog. 

#### Measure Technical Debt From Inception

Make sure that you measure project technical debt from day one of the project. There should be a focus on maintaining a low technical debt for the application. This means you do it for a prototype, and you do it for a vertical slice as well! 

Do check out our video on the same topic:

[![image info](images/Capture-069-01.png)](https://www.youtube.com/watch?v=BUQuYy0upPE)

### Summary

In this article, we had a reasonably close look at the concept of technical debt. It is a qualitative measure of the amount of effort required to take the current design state of an application, close to an ideal application. Technical debt can arise due to reasons such as bad design standards, design shortcuts, incorrect technology and bad coding practices. 

Technical debt slows down productivity. It is important to measure technical debt using static analysis tools such as SonarQube. Measuring technical debt needs to be a continuous process. Once monitored and measured, specific steps can be taken to ensure it is reduced and that new debt does not pile up.
