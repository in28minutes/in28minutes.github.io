---
layout:  post
title:  Code Quality Basics - What Is Code Coverage?
date:    2019-11-14 12:31:19
summary: In this article, we find out what code coverage is, and how we keep track of it.
categories: SwCodeQuality
permalink:  /code-quality-what-is-code-coverage
image: /images/design-category.png
---

In this article, we find out what code coverage is, and how we keep track of it.

### You will learn
- What Is Code Coverage?
- How do you measure Code Coverage?
- How can you ensure that you have great unit tests?
- How do you ensure that you have great asserts in tests in addition to code coverage?
- How can ensure that Code Coverage standards are Adhered to?



### Article Series

This is fifth article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### What Is Code Coverage?

#### Unit Tests Are Important

A prerequisite for great code is having a set of great unit tests.

Adhering to test driven development leads us to create great code. 

TDD ensures we have great low level design, and the set of unit tests we write tend to be reliable.

#### Understanding Code Coverage

The result of great unit tests is great **code coverage**. Code coverage is a measure of what percentage of the lines of source code that are covered by unit tests. 

For example, if your project has 1000 lines of source code, unit tests cover 900 lines, then the code coverage of your application is 90%. Typically, 85-90% is considered to be good code coverage.

### Exploring Code Coverage

Have a look at the snapshot of the SonarQube Dashboard:

![image info](images/Capture-074-02.png)

The project being analyzed is being reported to have a code coverage of 97.1%. This means 97.1% of the source code is being covered by unit tests execution. That's awesome. 

You can also see a ring beside the number estimate, as well as a shaded graph as the background. The project started off with approximately 80% coverage, and slowly built it up to the present figure.

When you click on the link, you can see several source files, and their individual coverage:

![image info](images/Capture-074-03.png)

You can see that a few of the files do not have any unit test written for them at all. These are the files with 0% coverage. 

Let's pick the file ListTreeImpl.java as an example:
![image info](images/Capture-074-04.png)

This file has a coverage of around 72.1%. When you look at the code inside the file, you will see several vertical green bars. These indicate block of code that are fully covered by unit tests. The lines in red indicate those code blocks that are not covered by unit tests:
![image info](images/Capture-074-05.png)

### Why Is Code Coverage Important?

Good unit tests can catch defects that could arise out of buggy code, even in the future! They are a kind of insurance policy for developers. These tests are automated, and keep running every time code is changed.

Code coverage is a good measure to identify if all scenarios are being unit tested.

#### Find Defects Early

The more number of tests you write, the less defects you will have in the future. Having great unit tests, gives you the confidence to refactor your code. Refactoring helps improve the design of the code over a period of time.

### Challenges With Code Coverage

Here are a few challenges one has to face while dealing with code coverage.

#### Writing Tests Just For Coverage

Many project teams make the mistake of having code coverage as a direct measure. If the focus is only on the number of lines covered by unit tests, the quality of tests could get neglected.

Code coverage needs to be treated just as a result of great unit tests. 

Having great code coverage does not mean you have great unit tests. If you end up writing tests that don't check the business logic, but only increase the lines of code covered, the purpose is defeated.

The focus needs to be on a combination of the quality of the unit tests written, plus the number of lines of code covered. 

#### Dealing With Legacy Code

In general, legacy code components are not loosely coupled, and hence writing unit tests for them becomes quite a challenge. You might need to refactor code to enable you to write unit tests. 

Most of the old frameworks - mainly the web and database ones - are not designed to be unit tested. 

### Measuring Code Coverage

#### Use Sonar

SonarQube is one of the most popular static analysis tools that is used to measure code coverage. 

It is also possible to connect to SonarQube from an Eclipse plugin, and look at the measures from an Eclipse view itself. 

#### Use IDE Plugins

You can use Eclipse IDE plugins such as Cobertura and EclEmma to measure code coverage. 

The IntelliJ IDE has in-built support to measure an application's code coverage.

### Best Practices For Code Coverage

#### Include Coverage In Definition Of Done

Make sure that you constantly review your code coverage measures at the end of each sprint. Also ensure that the quality of asserts are reviewed. 

#### Measure Coverage From Day One

You need to be committed to measuring code coverage from the day of inception of the project. For that, you write unit tests for your code from the point where you start the prototype, and when you start developing the vertical slice as well. 

Do check out our video on the same topic:

[![image info](images/Capture-074-01.png)](https://www.youtube.com/watch?v=Ra42js3AXIQ)

### Summary

Code coverage measures the lines of code covered by unit tests. Having good unit tests is important for any project, as they act as a safety net against defects in the future. Code Coverage can be measured by tools such as SonarQube, or common IDE plugins.

