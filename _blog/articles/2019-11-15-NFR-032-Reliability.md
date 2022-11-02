---
layout:  post
title: Microservices Architectures - Non Functional Requirements - Reliability
date:    2019-11-14 12:31:19
summary: In this article, we explore an important non functional requirement called Reliability. 
categories: SwArchitecture
permalink:  /non-functional-requirements-in-microservices-introduction-to-Reliability
image: /images/architecture.png
---

In this article, we explore the important non functional requirement called Reliability. 

### What you will learn
- What Is Reliability?
- Why is Reliability important?
- How do you improve Reliability of your system?



### Non Functional Requirements and Microservices

This is the part of a series of articles on Non Functional Requirements:

- [1 - Microservices Architectures - Non Functional Requirements](/non-functional-requirements-in-microservices-architectures){:target='_blank'}
- [2 - Security](/non-functional-requirements-in-microservices-introduction-to-Security){:target='_blank'}
- [3 - Web Application Security And OWASP - Top Ten Security Flaws](/web-application-security-owasp-top-ten){:target='_blank'}
- [4 - Maintainability](/non-functional-requirements-in-microservices-introduction-to-Maintainability){:target='_blank'}
- [5 - Scalability](/non-functional-requirements-in-microservices-introduction-to-Scalability){:target='_blank'}
- [6 - Performance](/non-functional-requirements-in-microservices-introduction-to-performance){:target='_blank'}
- [7 - Reusability](/non-functional-requirements-in-microservices-introduction-to-Reusability){:target='_blank'}
- [8 - Reliability](/non-functional-requirements-in-microservices-introduction-to-Reliability){:target='_blank'}
- [9 - Modularity](/modularity-non-functional-requirement-in-microservices){:target='_blank'}
- [10 - Availability](/availability-non-functional-requirement-in-microservices){:target='_blank'}
- [11 - Portability](/non-functional-requirements-in-microservices-introduction-to-portability){:target='_blank'}


### What Is Reliability?

There are two important aspects to application reliability.

* Whatever data that you present to the system user, how accurate is that data? Are there any bugs in the source of that data?
* How reliable is the data present in your database? This is crucial, because such data could be provided to other systems, or be used to generate important analytics. 

### Improving Application Reliability

Let's look at some of the things you can do to improve reliability of an application.

#### Write Great Code

When you write readable code, any bugs present in them would stand out. 

#### Write Great Tests

If you have writing good quality unit tests as part of the development process, it helps build robust software. Not only do they help improve the design, they also help find bugs very early. Following a development process such as Test Driven Development (TDD) is highly recommended for reliable applications.

The same logic extends to component-level and API-level testing as well.

#### Automate The Testing Process

The integration and system tests must have a high degree of automation. When you depend on manual testing, the chance that a bug leaks over to production is very high. Properly configured automation leads to proper testing of builds, and gives clear and immediate feedback on the build status.

#### Use Continuous Integration

It is highly recommended that the automated tests be run very frequently, in Continuous Integration, as soon as code is committed into the source repository.

#### Ensure Proper Database Design

Make sure that your database design is top-class. Normalizing your database helps in eliminating bad data at origin.

Do check out our video on this:

[![image info](/images/Capture-032-01.png)](https://www.youtube.com/watch?v=mF-c2xK8Lqk)

### Summary

In this short article, we talked about the important concept of application reliability. There are two aspects to it - ensuring data shown to users is reliable, and ensuring data in our data stores is accurate. You can improve reliability by writing great code, writing and automating great unit and system tests, having frequent build testing, and ensuring proper database design.

