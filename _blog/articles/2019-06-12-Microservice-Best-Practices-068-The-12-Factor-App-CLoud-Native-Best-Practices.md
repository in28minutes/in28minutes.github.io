---
layout:  post
title: The 12 Factor App - Best Practices In Cloud Native Applications and Microservices
date:    2019-06-07 12:31:19
summary: In order that an application be deployed in the cloud and enjoy features such as auto scaling, it first needs to be cloud native. In this article, we have a close look at the best practices for cloud native applications, popularly known as The 12 Factor App. 
categories:  SpringBootMicroservices
permalink:  /12-factor-app-cloud-native-microservices-best-practices
image: /images/microservices-category.png
---

In order that an application be deployed in the cloud and enjoy features such as auto scaling, it first needs to be cloud native. In this article, we have a close look at the best practices for cloud native applications, popularly known as The 12 Factor App. 

### Best Practices with Cloud and Microservices

This is the first article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}




## The 12 Factor App

12 Factor App is a set of best practices that guide you to build a great cloud native application. These were framed by Heroku, based on their experiences with building cloud native applications. 

### Codebase - One codebase tracked in revision control, many deploys

You have the codebase in a version control system, and you extract and build it, then deploy it many times.

### Dependencies - Explicitly declare and isolate dependencies

Whenever you build a software application, say in Java, you need a number of dependencies such as frameworks. You may need to manage the versions of the libraries you need to use. Explicitly declare and isolate such dependencies.

### Config - Store config in the environment

There are a variety of environments where an application could execute, such as development, QA, staging and production. Applications have different configuration in each of the environments. It is recommended to seperate the configuration and store it within the environment itself.

Another option is to store the configuration information in a centralized repository. 

An good example is Spring Cloud Config Server. The configuration is stored in the config server, which can then be mapped to the environment.

###  Backing services - Treat backing services as attached resources

Backing services refers to the other systems that an application needs to talk to, and this also includes the databases. All such services need to be considered as attached resources. 

All of these need to be configurable, and it should be easy to switch from one backing service to another. This switch should be possible with just a switch in configuration.  

### Build, release, run - Strictly separate build and run stages

The build, release and run stages need to be strictly separated. 

You need to be able to build a deployable component, such as a JAR, WAR or an EAR, that is independent of the environment. There should not be any change in this component as the deployment environment changes. 

A release is a phase where we take this reusable component, and combine it with a specific configuration for a target environment. 

The next phase is to take the released entity, create a container out of it, and run it in the environment.

### Processes - Execute the app as one or more stateless processes

Ideally an application should be stateless.

But, in case you have state - where you store the state of an application determines how flexible it is. 

If you store state in a central data store such as redis, it makes the application very flexible. 

You no longer need sticky sessions. You can have any instance of an app, answer any request. 

### Port binding - Export services via port binding

You should be able to deploy applications as services, by tying them with ports.

### Concurrency - Scale out via the process model

There are two kinds of scaling that can be applied to an application - horizontal and vertical. Vertical scaling refers to increasing the hardware infrastructure, such as increasing the CPU processing power, or increasing the amount of physical memory available to the application. Clearly, there are limits to such an approach.

Horizontal scaling refers to the possibility of dynamically increasing or decreasing the number of instances of an application, depending on the system needs. 

Your applications should be built to be able to dynamically adapt to changing number of instances of various services. 

### Disposability - Maximize robustness with fast startup and graceful shutdown

If one of the instances of the application is causing errors, or is slow in responding to requests, or is not responding at all, it should be possible to gracefully shut the instance down. 

In addition, the other applications in the system should not be affected by this change in the environment. 

You should be able to bring in new instances as they are needed, and take down instances when required. This property is known as disposability, and is a measure of the system's robustness.

### Development / Production Parity

There is a strong need to keep the development, QA, staging and production stages of a deployment pipeline, as similar as possible. The similarities should apply to the processes you follow, the technologies you make use of, and the infrastructure you employ. 

If you have this parity among these stages, then most of the problems that could arise with the application, would appear in the earlier stages. Not many surprises would be in store for you at production. 

### Logs - Treat logs as event streams

Visibility is one of the most important requirements of a microservices architecture.

By treating each log message entered into a centralized logging system as an event, you get a sequence of actions that are performed on a request when it enters the system, right up to when it is completed or abandoned. 

All one needs to do in order to debug a problem, is to go to the central dashboard and search for it.

### Admin processes - Run admin/management tasks as one-off processes

There are a number of one-off process that you need to run - batch programs, database migrations, scripts.

Treat one-off processes the same way as long running processes.

Have the same standards - have code base in version control, follow standard deployment processes and use the same environments

Do check out our video on the same topic:

[![image info](images/Capture-068-01.png)](https://www.youtube.com/watch?v=wjqBxJX35fU)

### Summary

In this article, we looked at the best practices for cloud native applications, called the 12 Factor App.

