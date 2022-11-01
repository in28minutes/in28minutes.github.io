---
layout:  post
title:  Code Quality Basics - What Is Legacy Code?
date:    2019-11-14 12:31:19
summary: If you are working in a large software application or project, you will hear the term **legacy code** quite a lot. What does this term mean, and how can you avoid legacy code?
categories: SwCodeQuality
permalink:  /introduction-to-legacy-code
image: /images/design-category.png
---

If you are working in a large software application or project, you will often hear the term **legacy code** quite a lot. What does this term mean, and how can you avoid legacy code?

## You will learn
- What Is Legacy Code?
- What are the challenges with Legacy Code?
- How do you improve Legacy Code?



### Article Series

This is last article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Legacy Code?

The popular definition of legacy code going around is 

> Old code - built in old technology. 

I would add one more element to it

> Any code which is difficult to understand and improve the design is legacy code. 

In other words, any code which does not have great design, which does not have the support of good unit tests, is legacy code. That's because you cannot refactor it to improve its design, as you are unsure if you break functionality.
 
### What Make Code A Legacy?

* Old code in outdated technologies
* Code without tests
* Code with a lot of technical debt

### Challenges With Legacy Code

#### Unexpected Impact

One of the biggest problems caused due to legacy code, is that changes in one part can lead to impact in other parts. This could lead to long release cycles.

#### Extreme Caution During Maintenance

Every time a change is made in one part of the code, the entire code base needs to be tested extensively to check for unexpected impact. This attaches a large cost in time and manpower across the team.

### Dealing With Legacy Code

#### Have Good Code Review Processes

Make sure that the code in the application is reviewed at regular intervals during the development cycle, to identify maintainability issues.

#### Refactor Code

It is impossible to refactor and improve every part of a large legacy application.

To start with, identify critical areas that frequently change and improve their design. Try and build good unit tests as you refactor.

#### Perform Static Analysis

Make sure you use static analysis tools such as Sonar. Put them in continuous integration. Have processes to monitor new violations

#### Have Automated Regression Testing

In general, it is difficult to write good unit tests for legacy code. 

A more practical optionis to write good automated integration and regression tests.

#### Develop New Functionality in a New Component

Start exploring new avenues. Instead of building everything into your legacy application, start thinking about creating new components and/or services and integrating with them.

Do check out our video on the same topic:

[![image info](images/Capture-072-01.png)](https://www.youtube.com/watch?v=5odeVADF2Og)

### Summary

In this article, we saw that any code that is difficult to maintain, is legacy code. We had a look at what factors contribute to legacy code, and what challenges developers face due to it. We then explored different ways to deal with legacy code in a project.

