---
layout:  post
title:  Microservices Architectures - Importance of Centralized Logging
date:   2019-05-21 12:31:19
summary: In this article, we explore the concept of centralized logging, in the context of microservices. 
categories:  SpringBootMicroservices
permalink: /introduction-to-centralized-logging-with-microservices
image: /images/microservices-category.png
---

In this article, we explore the concept of centralized logging, with respect to microservices.

### You will learn
- What is centralized logging?
- Why do we need centralized logging?
- Why are microservices difficult to debug?



### Cloud and Microservices Terminology

This is the fourth article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}


### The Need For Visibility

In a microservices architecture, there are a number of small microservices talking to each other:

![image info](/images/Capture-057-02.png)

In the above example, let's assume there is a problem with Microservice5, due to which Microservice1 throws an error. 

How does a developer debug the problem?

He would like to know the details of what's happening in every microservice from Microservice1 through Microservice5. From such a trace, it should be possible to identify that something went wrong at Microservice5.

The more you break things down into smaller microservices, the more visibility you need into what's going on in the background. Otherwise, a lot of time and effort needs to be spent in debugging problems. 

One of the popular ways to improve visibility is by using **centralized logging**. 

### Centralized Logging Using Log Streams

Using Log Streams is one way to implement centralized logging. The common way to implement it is to stream microservice logs to a common queue. Distributed logging server listens to the queue and acts as log store. It provides search capabilities to search the trace.

### Popular Implementations

Some of the popular implementations include 
- the ELK stack (Elastic Search, Logstash and Kibana) for Centralized Logging
- Zipkin, Open Tracing API And Zaeger for Distributed Tracing

Do check out our video on this:

[![image info](/images/Capture-057-01.png)](https://www.youtube.com/watch?v=rxTNUw0wp-U)

### Summary

In this article, we had a look at centralized logging. We saw that there is a need for high visibility in microservices architecture. Centralized logging provides visibility for better debugging of problems. Using log streams is one way of implementing centralized logging.

