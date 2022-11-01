---
layout:  post
title:  Code Quality Basics - Best Practices in Static Code Analysis with SonarQube
date:    2019-11-14 12:31:19
summary: Static code analysis is a great approach to check for code quality. There are a variety of static code analysis tools available to check for coding standard violations in your code. In this article, let's get introduced to static code analysis, different tool you have and also the limitations of static code analysis.
categories: SwCodeQuality
permalink:  /static-code-analysis-and-code-quality-best-practices-sonarqube
image: /images/design-category.png
---

Static code analysis is a great approach to check for code quality. There are a variety of static code analysis tools available to check for coding standard violations in your code. In this article, let's get introduced to static code analysis, different tool you have and also the limitations of static code analysis.
 
## You will learn
- What is Static Code Analysis?
- When do you use Static Code Analysis?
- How can you do Static Code Analysis with SonarQube?
- What are the limitations of Static Code Analysis?
- What are the best practices in using Static Code Analysis?



## Article Series

This is the fourth article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### What is Static Code Analysis?

Static Analysis is awesome approach to automate your code quality checks. You run a tools like SonarQube on your source code and it gives a summary of what can be improved in your code. You don't run your code while doing static analysis.

#### Static Code Analysis is not a silver bullet

However, you need to remember that there are limitations to what static analysis can do:
- It cannot check if you have given a meaningful name to your varible, method or class
- It cannot check if there are other approaches to solving a problem.
- It cannot check if a method or class are adhering to Single Responsibility Principle
- It cannot check if your method is readable beyond a few formatting checks

All these can be only checked in peer review

#### Static Analysis is a signal

The most important thing to keep in mind that the resulting metrics are never the goal of the analysis. Static analysis results are intended to be more of a signal. 

If a code base has poor static analysis results, you can say that the code quality is pretty bad. However, if the static analysis results are good, the code might still not be readable. 

### What Is A Good Application?

![image info](images/Capture-108-02.png)

Here are the characteristics of a good application:
* How maintainable is the application (This is the aspect where static analysis contributes in a very large way)?
* How easily usable is the application?
* How reliable is it?
* What are the security features?
* What is the performance of the application, and its efficiency?
* What is the functional suitability?
* How well does it port to other platforms?

### Quick Review of Static Analysis Tools

There are a variety of static code analysis tools that are fairly popular in the programming world. Let's look at a few of them. 

![image info](images/Capture-108-03.png)

####  SonarQube

The most popular static analysis tool in the Java world is SonarQube. It has a very informative dashboard in its interface, where it shows you a variety of metrics, and how your code fares against them. These includes the extent of code duplication, how big your components are, the code coverage statistics, how complex are your methods and classes, etc. 

#### Other Tools

There are a few other plugin based static analysis tools such as Simian, Findbugs, CheckStyle and PMD. However, SonarQube stands heads and shoulders above all of them.

#### IDE Plugins

It is possible to install and configure plugins related to the above tools into your IDE, such as Eclipse. 

### Important Metrics from Static Analysis

![image info](images/Capture-108-04.png)

What are the important aspects you look at, when you analyze code from a static analysis point of view?

#### Unit Size

From the point of view of an architect, one would first start off by looking at the components. The SonarQube report clearly shows you the components that are present in code, as well as their sizes.

#### Complexity Per Unit

Complexity measure is a fair indicator of how well your code logic is organized. The cyclomatic complexity in the business layer should be typically high, and lower in the other layers.

#### Duplication

Static analysis is generally able to indicate the extent of code duplication in the application, and also identifies the duplicate code blocks.

#### Unit Testing

Analyzing the unit testing aspect is very important for any application. It is possible to measure how good the written tests are, by looking at the quality of the asserts, for example. You also get a measure of the extent of code coverage present in the application.

You could start off with that part of the code that is listed with the highest complexity, and examine the unit tests for that. 

If these tests are simple to read, that's a great sign!

###  Best Practices For Code Quality

![image info](images/Capture-108-05.png)

#### Peer Reviews Are A Must

Since we have an understanding of the limitations of static analysis, having peer reviews is understandably a must. Peer reviews are still the best way to improve on the readability and maintainability of code. 

An effective mode of peer review is to have pair programming reviews, which ensure the code is reviewed as soon as it's written. 

#### Integrate Into Continuous Integration

It is very important to have the static analysis part of code quality checks, as part of the continuous integration builds. You could have SonarQube for instance, look into code taken from the repository as part of a daily build. It is important to do this from day one, since it helps weed out code defects right from the start.

#### Comply With The Four Principles Of Simple Design

With design decisions, you can always change it at a later point in time, if the need arises. Hence, adhere to the Four Principles Of Simple Design when making these decisions. Ensure that:

* The code is as readable as possible
* The tests written are really good
* The complexity is reduced to a minimum
* The individual components (methods/classes) are as small as possible

Once these four principles are well implemented, and you are backed up by effective static analysis, you can be confident that the design is quite good. 

In case a design change needs to be made, having good tests ensures that the change will be smooth and will not break functionality.

#### Separate Architecture From Design

If you are in an Agile project, you don't want the low level design of the code to be very complex. Now, anything that's easy to change, is design. Anything that's hard to change, is architecture. Separate your decisions into design decisions, and architecture decisions. 

For architecture decisions, you need to put enough thought and effort, before going ahead with the changes. With design decisions, you can always change it at a later point in time, if the need arises.

When it comes to it, make sure you make informed choices when you select which application framework to use, and how you organize the layers.  

You can check out our video on the same topic here

[![image info](images/Capture-108-01.png)](https://www.youtube.com/watch?v=rB_BaftN3nE)

### Summary

In this article, we had a close look at the best practices involved in ensuring good code quality in your application. We saw that static analysis is a very good tool to make use of. 
