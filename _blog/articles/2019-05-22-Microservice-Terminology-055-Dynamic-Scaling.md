---
layout:  post
title:  Microservices Architectures - Introduction to Auto Scaling
date:    2019-05-22 12:31:19
summary:  In this article, we focus our attention on the Dynamic Scaling or Auto Scaling. Why do we need applications that can auto scale?
categories:  SpringBootMicroservices
permalink:  /introduction-to-auto-scaling-or-dynamic-scaling-in-cloud
image: /images/microservices-category.png
---

In this article, we focus our attention on the Dynamic Scaling or Auto Scaling. Why do we need applications that can auto scale?

## You will learn
- What is Auto or Dynamic Scaling?
- Why is Dynamic Scaling important in a microservices context?
- How can you implement Dynamic Scaling in Cloud?



### Cloud and Microservices Terminology

This is the fifth article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}



### Load On Applications Varies

Load on your applications vary depending on time of the day, the day of the month or the month of the year. 

Take for instance, amazon.com. It has very high loads during Thanks Giving Period, up to 20 times the normal load. However, during the major sports events such as Superbowl or a Football World Cup, the traffic could be considerably lesser - because every body is busy watching the event.

> How can you setup infrastructure for applications to manage varying loads? 

It is quite possible that the infrastructure needed to handle 10x the load, is ten times that needed to handle 1x the load. 

If you have on premise infrastructure, you need a large infrastructure in place to handle peak load. 

During periods with lesser load, a lot of infrastructure would be sitting idle.

### Cloud To The Rescue

That's where cloud comes into picture.  With cloud, you can request more resources when the load is high and give them back to the cloud when you have less load.

> This is called Scale Out (create more instances as load increases) and Scale In (reduces instances as load goes down)

How do you build applications that are cloud enabled - applications that work well in the cloud?

That's where a microservices architecture comes into picture.

### Introducing Auto Scaling Example

Building your application using microservices enables you to increase the number of microservice instances during high load, and reduce them during less load. 

Consider the following example of a CurrencyConversionService:

![image info](/images/Capture-055-02.png)

![image info](/images/Capture-055-03.png)

The CurrencyConversionService talks to the ForexService. The ForexService is concerned with calculating how many INR can result from 1 USD, or how many INR can result from 1 EUR. 

The CurrencyConversionService takes a bag of currencies and amounts, and produce the total amount in a currency of your choice. For example, it will tell the total worth in INR of 10 EUR and 25 USD. 

The ForexService might also be consumed from a number of other microservices.

#### Scaling Infrastructure To Match Load

The load on ForexService might be different from the load on CurrencyConversionService. You might need to have different number of instances of CurrencyConversionService and ForexService. For example, there may be two instances of the CurrencyConversionService, and five instances of the ForexService:  

![image info](/images/Capture-055-04.png)

![image info](/images/Capture-055-05.png)

At a later point in time, the load on CurrencyConversionService could be low, needing just two instances. On the other hand, a much higher load on ForexService could need 50 instances. The requests coming in from the 2 instances of CurrencyConversionService are distributed across the 50 instances of the ForexService. 

That in essence, is the requirement for auto scaling - dynamically changing number of microservice instances, and evenly distributing the load across them.

### Implementing Auto Scaling

There are a few important concepts involved in implementing auto scaling. The following sections discuss them in some detail.

#### Naming Server

Naming servers enables something called **location transparency**. Every microservice registers with the naming service. Any microservice that needs to talk to another microservice, will ask the naming server for its location. 

Whenever a new instance of CurrencyConversionService or ForexService comes up, it registers with the naming server. 
![image info](/images/Capture-055-06.png)

When CurrencyConversionService wants to talk to ForexService, it asks the naming server for available instances.


### Implementing Location Transparency

CurrencyConversionService knows that there are five instances of the ForexService.

> How does it distribute the load among all these instances?

That's where a load balancer comes into the picture. 

A popular client side load balancing framework is Ribbon.
![image info](/images/Capture-055-07.png)

Let's look at a diagram to understand whats happening:

![image info](/images/Capture-055-08.png)

As soon as any instance of CurrencyConversionService or ForexService comes up, it registers itself with the naming server. If the CCSInstance2 wants to know the URL of ForexService instances, it again talks to the naming server. The naming server responds with a list of all instances of the ForexService - FSInstance1 and FSinstance2, and their corresponding URLs. 

The Ribbon load balancer does a round-robin among the ForexService instances to balance out the load among the instances. 

> Ribbon offers wide variety of load balancing algorithms to choose from.

### When to increase and decrease instances?

There is one question we did not really talk about.

How do we know when to increase or decrease the number of instances of a microservices?

That is where application monitoring and container (Docker) management (using Kubernetes) comes into the picture.

![image info](/images/Capture-055-09.png)

An application needs to be monitored to find out how much load it has. For this, the application has to expose metrics for us to track the load. 

You can containerize each microservice using Docker and create an image. 

Kubernetes has the capability to manage containers. Kubernetes can configured to auto scale based on the load. Kubernetes can identify the application instances, monitor their loads, and automatically scale up and down.

Do check out our video on this:

[![image info](/images/Capture-055-01.png)](https://www.youtube.com/watch?v=rxTNUw0wp-U)

### Summary

In this article, we talked about auto scaling. We look at important parts of implementing auto scaling - naming server, load balancer, containers (Docker) and container orchestration (Kubernetes).

