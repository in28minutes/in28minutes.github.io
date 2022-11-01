---
layout:  post
title:  Introduction To Coding Standards with Java examples
date:    2019-11-14 12:31:19
summary: Having the right coding standards is an important starting point to having great code. What are coding standards? How do you ensure that you are following the best practices around coding standards? 
categories: SwCodeQuality
permalink:  /coding-standards-with-java-examples
image: /images/design-category.png
---

Having the right coding standards is an important starting point to having great code. What are coding standards? How do you ensure that you are following the best practices around coding standards? 
 
## You will learn
- What is a coding standard?
- Why do you need coding standards?
- What are the most important coding standards?
- How do you ensure that coding standards are adhered to? 
- What are the best practices and processes?



## Article Series

This is the second article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### What Is A Coding Standard?
Coding standards are standards related to 
- How to use a programming language?
- How to format your code?
- How to structure your application?
- How to use a framework or a utility?

Most organizations have coding standards at the enterprise level as well. 

Coding standards ensure a certain level of code consistency, when a developer moves from one module to another within a project, or from one project to another within an organization. 

### What Are Coding Standards Like?

Common points that are addressed by coding standards include:
* Formatting
* Complexity of a method
* Naming conventions for variables, methods and classes
* The sizes of methods and classes
* The number of parameters that a method is allowed to have

### Important Coding Standards

Let's quickly review some of the important coding stands.

#### Sizes Of Methods And Classes    

Have small methods and classes.

If you have a large method, then it is quite likely you have violated the Single Responsibility Principle (SRP). 

#### Complexity Of Methods And Classes

Methods and Classes should have as low cyclomatic complexity as possible. A method that has a large number of conditionals and nested loops is difficult to maintain.

#### Naming Variables / Methods / Classes

> How you name the various program elements directly determines how readable your code is. 

If you name your variables, methods and classes in a simple and intuitive manner, over 50% of code readability is achieved!

#### The Number Of Parameters

Limiting the number of parameters generally results in more maintainable code.

#### Have good tests with great asserts and good code coverage

How do you ensure you have great tests? 
- Have readable tests
- Have great asserts, to check for conditions in the test code

If you can have good code coverage with good asserts, then there's nothing like it! 

Note that code coverage is just a number. While having 100% code coverage is good, it is more important to have good asserts checking the functionality.

### Verifying Coding Standards

#### Using Static Analysis

You can do static analysis of your source code using tools such as SonarQube. Make sure that you run static analysis as part of your continuous integration builds.

Include static analysis goals in your sprint "Definition of Done".

You can read more about it [here](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}.

#### Performing Code Reviews

Static analysis has its limitations, since it is done in an automated manner. It cannot determine whether a variable, method or class is named appropriately. 

You also need to have a process of periodically reviewing code, mainly through peer reviews. 

You can read more about it [here](/code-review-best-practices){:target='_blank'}.

Do check out our video on the same topic:

[![image info](images/Capture-105-01.png)](https://www.youtube.com/watch?v=XRKDpQ3b27M)

### Summary

Having the right coding standards is an important starting point to having great code. Having great process around static analysis and peer reviews will help your project meet its coding standards. 

