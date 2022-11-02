---
layout:  post
title:  Introduction To Code Quality
date:    2019-11-14 12:31:19
summary: In this article, we discuss code quality and why you should have great code quality. 
categories: SwCodeQuality
permalink:  /introduction-to-code-quality
image: /images/design-category.png
---

In this article, we discuss code quality and why you should have great code quality.

## You will learn
- What is Code Quality?
- Why do you need to track Code Quality?
- What are the approaches to evaluate Code Quality of an application?
- What are the popular code quality tools? 



## Article Series

This is the first article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}

### What Is Code Quality?

Code quality is a measure of how maintainable your code is. 

The next question that comes up is - how do you measure code quality? 

The way you do that is by having 
* Static Analysis
* Peer code reviews

### Setting the Right Coding Standards

Having the right coding standards is an important starting point to having great code. Most organizations have coding standards at the enterprise level as well. Coding standards ensure a certain level of code consistency, when a developer moves from one module to another within a project, or from one project to another within an organization.  

You can read more about it [here](/coding-standards-with-java-examples){:target='_blank'}


### Static Analysis

Static analysis of code can be done by using tools such as SonarQube. A best practice that is recommended is to perform static analysis of your code at least once a day. 

Also ensure that you have processes in place to keep reviewing them. 

Make sure that your code quality standards are set as part of you Definition Of Done. At the end of every sprint, evaluate your code against the set code quality standards, and see if it matches up to them. 


#### Static Analysis with SonarQube

One of the best ways to measure code quality is by using a tool such as SonarQube:

![image info](images/Capture-079-02.png)

SonarQube looks at your code form a wide variety of perspectives. It look at angles such as the types of:
* Bugs
* Security vulnerabilities
* Code smells - patterns in code that could indicate hidden bugs
* Code Coverage - How good are your unit tests, and how much code do they cover
* Amount of Code Duplication

All these are good measures of code quality. 

You can read more about static analysis here - [Code Quality Basics - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}

### Peer Reviews

Static analysis is not a silver bullet. Use peer reviews to identify things that cannot be found in static analysis.

Code Review is one of the most important components in ensuring great Code Quality in your projects.

Remember that a code review is not a tool to find fault with others efforts. 

Here are a couple of important goals:
- A code review is done to add value to the system and the people in the team. 
- It also adds to a list of best practices that team members can follow.

You can read more about [Code Review Best Practices](/code-review-best-practices){:target='_blank'}

Do check out our video on the same topic:

[![image info](images/Capture-079-01.png)](https://www.youtube.com/watch?v=aGQda_tlfdw)

### Summary

In this article, we had an overview of what code quality is all about. We saw that it can be ensured by using static analysis tools, and by doing peer code reviews. There are several parameters to evaluate the quality of an application's code.

