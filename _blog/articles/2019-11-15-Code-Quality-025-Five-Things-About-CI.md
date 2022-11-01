---
layout:  post
title:  Continuous Integration - 5 Important Questions or Tips
date:    2019-11-14 12:31:19
summary: Almost everybody does Continuous Integration today. But the question is - How effective is your Continuous Integration? In this short article, let's explore five important questions we need to ask about Continuous Integration (CI).
categories: SwBestPractices
permalink:  /five-tips-on-continuous-integration-best-practices
image: /images/architecture.png
---

Almost everybody does Continuous Integration today. But the question is : How effective is your Continuous Integration? In this short article, let's explore five important questions we need to ask about **Continuous Integration** (**CI**).



### Article Series

This is the last article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### Questions To Ask About Continuous Integration

Let's look at them one by one:

#### Frequency Of Commits

> How frequently is code being committed to the version control system? 

It is awesome to have great CI infrastructure in place with frequent builds, wonderful unit tests and integration tests. However, if code is not committed frequently enough to the repository, all this infrastructure is sitting idle. 

Whenever you think your code is in a good working state, commit it to get immediate feedback. Do this five, ten, or a hundred times a day!

#### Frequency Of Builds

> How often are your CI builds running? 

Are they running every time a commit is done, every minute, every hour, or once a day? With CI, it is important to get immediate feedback. If you are running your builds less frequently, you might be enjoying all the possible benefits of CI.

Ideally, CI should run for every commit.

#### What's in the Build?

> What are the various steps that are run in your CI build?
 
 Are all of these are run in CI?
 - Code compilation
 - Unit tests
 - Integration tests
 - User acceptance tests
 - Deployment

 It is desirable to have as many steps as possible as part of the CI build.

#### Build Performance

How fast is your CI build? 

Any CI build should not take more than 10-15 minutes of time, as a benchmark. Of course, the steps involved in the build affects build performance. 

As the number of steps in the build increase, the longer it takes. You need to find the right balance between the two, such as testing everything versus testing quickly. 

One strategy would be to have two kinds of CI builds - one smaller frequent build, and one larger slower build that only runs from time to time.

#### Handling Broken Builds

This is one of the more fun events for the team. Having the member who breaks the build, buy lunch for the entire team is incentive enough for careful programming and commits! Not the least, it helps foster team building and team spirit. 


Do check out our video on this:

[![image info](/images/Capture-025-01.png)](https://www.youtube.com/watch?v=i8WNumrDMcA)

### Summary

In this article, we explored the five important questions that a team using a CI infrastructure, to ask about its development process.
