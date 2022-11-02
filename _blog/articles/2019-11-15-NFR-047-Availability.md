---
layout:  post
title:  Microservices Architectures - Non Functional Requirements - Availability
date:    2019-11-14 12:31:19
summary:  In this article, we explore an important non functional requirement called Availability. 
categories: SwArchitecture
permalink:  /availability-non-functional-requirement-in-microservices
image: /images/architecture.png
---

In this article, we explore an important non functional requirement called Availability. 

### What you will learn

- What Is Availability?
- Why is Availability important?
- How can you build more available systems?



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


### What Is Availability?

Conceptually, availability is easy to understand. Suppose you wanted to access a website but you found that it is down. That is an indication of low availability of the website. 

> **Availability** is a measure of how frequently your system provides the desired functionality, to your users. 

Typically, you want a 99.9999% or 100% availability for your system. Actually, this might not be true. 

Depending on the category of an application, there might be different needs for its availability. If it is an internal application to be used within an enterprise, then it might not be needed beyond office hours.

For most system that are available over the internet, the availability needs are quite high. 

### Improving Availability

Consider the following system with a microservices architecture:

![image info](/images/Capture-047-02.png)

How would you go about improving the availability of this system?

#### Modularity Improves Availability

Microservice architectures have high modularity. We don't build such a system as a monolith. Instead, we break it down in to smaller components (technical and infrastructure), each of which provides a well defined interface. 

Each of them is also independently deployable. Such applications will not be very bulky, nor will they need to access huge databases. That is a good head-start in giving the system high availability, since common bottlenecks are removed.

#### Redundancy Improves Availability

In the application example above, having multiple instances of each of Microservice1, Microservice2 and Microservice3 helps improve service availability to users. 

Not just the microservices, redundancy at other levels is beneficial too. Having multiple instances of the Infrastructure components such as the NamingServer and APIGateway improves availability. 

The key to high availability is to eliminate single points of failure. Ensure that all your infrastructure components have enough redundancy built in.

#### Monitoring Improves Availability

If an API Gateway goes down, you should NOT get to know of it from your users. 

If Microservice1 crashes for some reason, you should know of it first through your internal automated mechanisms. 

There needs to a facility for monitoring each of the microservices and components in the system. 

On any instance of failure, the operations team needs to be alerted by some mechanism, for diagnosis and recovery. 

Do check out our video on this:

[![image info](/images/Capture-047-01.png)](https://www.youtube.com/watch?v=R3j0Z1c-0qY)

### Summary

In this video, we talked about the availability of an application. Availability measures how frequently the system provides the desired service, to all the users. We took the example of a microservice architecture to describe how you can improve availability.

