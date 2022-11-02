---
layout:  post
title:  Quick Introduction To Software Architecture - What, Why and How?
date:    2019-04-09 12:31:19
summary: Good Software Architecture is essential to building great software. What is Software Architecture all about?
categories: SwArchitecture
permalink:  /introduction-to-software-architecture
image: /images/architecture.png
---

Good Software Architecture is essential to building great software. What is Software Architecture all about?

## You will learn
- What Is Software Architecture?
- What do Software Architects do?
- What are some of the important decisions software architects make?
- Why do we need Software Architecture?



This is the first article in the following series of articles on Software Architecture :
- [1 - Quick Introduction To Software Architecture](/introduction-to-software-architecture){:target='_blank'}
- [2 - What Is The Goal Of a Software Architect?](/what-is-the-goal-of-an-software-architect){:target='_blank'}
- [3 - 5 Qualities of a Great Software Architect](/five-important-qualities-of-a-software-architect){:target='_blank'}
- [4 - 5 Important Responsibilities of a Software Architect](/five-important-responsibilities-of-a-software-architect){:target='_blank'}
- [5 - Software Architecture - Why do we use Layered Architectures?](/software-architecture-why-should-we-use-layered-architecture){:target='_blank'}


### What Is Software Architecture?

To understand what software architecture is all about, let us look at the following diagram:

![image info](images/Capture-087-02.png)

This application architecture has multiple microservices - Microservice1, Microservice2 and Microservice3. There are a set of common components that handle functionality such as security, logging, archetype creation, and the like. You also have components to handle common infrastructure concerns/ These include an API Gateway, a naming server, and a centralized logging system. 

#### Answering Some Important Questions

* Who made the decision that there need to be three microservices, and assigned specific responsibility to each one of them?
* Who decided that certain functionalities of the application need to be handled by common components? 
* Who designed the mode of interaction between the microservices and the common components?
* Who classifies the common infrastructure components, and designs their interfaces with each of the microservices?

#### Architecture Is All About Making Decisions

Designing an application architecture is all about making such important decisions. It involves staring from a level that involves these decisions:

* What are the applications? What are their individual boundaries?
* What are the interactions between the individual applications? In other words, the services of which other applications are needed by a particular application?
* What are the common functionalities that can be identified in the system? How do you design them as components, and how to interface them with the other applications/components?
* What services of the system need to be abstracted into the common infrastructure? How do you decide on how to make these services available to the rest of the system?


### Why Do We Need Software Architecture?

A few decades earlier, software programs built were small and simple. However, things have changed dramatically. 

Software has become quite complex, with the advent of cloud computing, microservices, big data, and what not.

Factors that have contributed to this complexity include:

* **Distributed Systems**: Even a single web page that you may view online, might be driven by a cluster of hundreds of systems.
* **Device Explosion**: Earlier, devices owned by users were limited to a single PC or laptop per person. Nowadays, you have a choice of mobile phones, tablets, IoT devices, and what not! Software that needs to run on  more than one device, will be complex
* **Enormous Scale**: The load or the scale of users that an enterprise application needs to support has also gone up significantly
* **Technology Evolution**: The languages, frameworks, tools and processes used in software development continuously undergo change, and applications need to keep pace with them
* **Non Functional Requirements**: It is very important to ensure that all non functional requirements are adhered to when designing your applications.

The challenge in such a dynamic scenario, is to develop applications that work today, and adapt to stay relevant tomorrow. This is the puzzle that architects try to solve. 

That's also the reason why you need to pay attention to the architecture, when you develop applications. 

Do check out our video on the same topic:

[![image info](images/Capture-087-01.png)](https://www.youtube.com/watch?v=RxNNPU7pz_s)
[![image info](/images/Capture-023-01.png)](https://www.youtube.com/watch?v=RALT8z8Ya0w)

### Summary

Software architecture is all about making decisions. It mainly involves identifying applications and components, and clearly demarcating their boundaries. 

