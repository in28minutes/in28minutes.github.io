---
layout:  post
title: Best practices in microservices
date:    2020-09-28 10:49:50
summary:  In this post we will understand the best practices in the microservices architecture
categories:  SpringBootMicroservices
permalink:  /best-practices-in-microservices-architecture
---

# Best practices while creating Microservices

Greetings from [in28minutes.com](https://courses.in28minutes.com/). 

In this short read, we will take a quick look at some of the common best practices that one must keep in mind while creating or updating the ***Microservices***. Let's get started.

 - ***Separate Data storage***
	 - This is the important factor while designing the microservices where we would like to segregate the data storage for each of the microservice. This statement often gives a calling to *Command and Query pattern* where we define the microservices to have separate reading and writing into the different models. However, there is always a conflict of interest among some developers where they also prefer the shared database approach while writing the microservices but in best practices, we should always have different persistent storage for each microservice
 - ***Dedicated Teams***
	 - In the microservices world, it is a little difficult for a single developer to understand the complete enterprise-based application. As microservices are autonomous entities so it is easy to understand 10 or 15 microservices but having a complete set is difficult where technology sets range from backend, frontend, and continuous integration plus deployment. So switching technologies can take time and effort. So the best approach is to have dedicated teams to keep them familiarized with the nuances of management while ensuring maximum possible efficiency in a microservice world
 - ***Automation of deployment***
	 - In today's world the term Continuous Integration and Continuous Deployment for very famous for the microservices architecture as they are independent. Hence this requires us to implement a build and release automation structure to reduce the overall lead time
 - ***REST API implementation***
	 - These days developers love to use the REST API to perform business-related operations through software evolution. Not that they hate frontend it is just that REST API implementation is quick and easy as you don't need any framework to learn and then apply. So here I would like to make a point where one simply begins at level 0 and make the way up to level 3 of the Richarson maturity model
 - ***Following the design patterns***
	 - Many design patterns that can guide developers the right way to design the microservices but one of the best is the *Decomposition design pattern* that helps to break down a monolithic application into smaller independent microservices. The decomposition design pattern helps to break down of a monolithic application either by business or domain capability or by service by service by using the strangler or vine design pattern
 - ***Isolation of runtime processes***
	 - Since we have independent microservices so we need to have isolation at the runtime level as well. By isolation, I mean that we need some form of distributed computing resources to pull this off from a pool of available resources such as container orchestration, various HTTP approaches, service meshes, circuit breakers for fault tolerance, etc
- ***Consider using Domain-Driven design technique***
	- It is as simple as *Object-oriented programming* that makes use of the practical rules and ideas to express the object-oriented model as the microservices are always designed about the business domains. The content delivery network platforms such as Hotstar, Amazon prime, etc. heavily use this design technique

## Conclusion
Whenever you initiate the process of converting your system into the microservices design, it is important to have a clear understanding of the best practices, and the real reason why you want to do it. In addition to these best practices, one also needs to take into account the project's capability of handling end-to-end service-oriented architecture migrations and development. Good luck and Happy learning! Feel free to share it with your friends/colleagues.
