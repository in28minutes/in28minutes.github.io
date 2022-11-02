---
layout:  post
title:  Microservices Architectures - What is Fault Tolerance?
date:    2019-05-23 12:31:19
summary:  In this article, we discuss an important property of microservices, called fault tolerance
categories:  SpringBootMicroservices
permalink:  /fault-tolerance-in-microservices
image: /images/microservices-category.png
---

In this article, we discuss an important property of microservices, called fault tolerance.

## You will learn

- What is Fault Tolerance?
- Why is fault tolerance important in microservices architecture?
- How do you achieve fault tolerance?



### Cloud and Microservices Terminology

This is the last article in a series of six articles on terminology used with cloud and microservices:
- [1 - Microservices Architectures - What is Service Discovery?](/service-discovery-in-microservices){:target='_blank'}
- [2 - Microservices Architectures - Centralized Configuration and Config Server](/introduction-to-centralized-configuration-with-spring-cloud-config-server){:target='_blank'}
- [3 - Microservices Architectures - API Gateways](/introduction-to-api-gateways-with-microservices){:target='_blank'}
- [4 - Microservices Architectures - Importance of Centralized Logging](/introduction-to-centralized-logging-with-microservices){:target='_blank'}
- [5 - Microservices Architectures - Introduction to Auto Scaling](/introduction-to-auto-scaling-or-dynamic-scaling-in-cloud){:target='_blank'}
- [6 - Microservices Architectures - What is Fault Tolerance?](/fault-tolerance-in-microservices){:target='_blank'}


### What Is Fault Tolerance?

Microservices need to be extremely reliable. 

When we build a microservices architecture, there are a large number of small microservices, and they all need to communicate with one another. 

Lets consider the following example:

![image info](/images/Capture-053-02.png)

Let's say Microservice5 is down at some point of time. 

All the other microservices are directly or indirectly dependent on it, so they all go down as well.

The solution to this problem is to have a fallback in case of failure of a microservice. This aspect of a microservice is called **fault tolerance**.

### Implementing Fault Tolerance with Hystrix

A popular framework used to implement fault tolerance is Hystrix, a Netflix open source framework. Here is a code example of the same:

```java

	@GetMapping("/fault-tolerance-example")
	@HystrixCommand(fallbackMethod="fallbackRetrieveConfguration")
	public LimitConfiguration retrieveConfiguration() {
		throw new RuntimeException("Not Available");
	}

	public LimitConfiguration fallbackRetrieveConfiguration() {
		return new LimitConfiguration(999, 9);
	} 

```

Hystrix enables you to specify the fallback method for each of your service methods. If the method throws an exception, what should be returned to the service consumer? 

Here, if ```retrieveConfiguration()``` fails, then ```fallbackRetrieveConfiguration``` is called, which returns a hardcoded ```LimitConfiguration``` instance:

![image info](/images/Capture-053-03.png)


#### Hystrix And Alerts

With Hystrix, you can also configure alerts at the back-end. If a service starts failing continuously, you can send alerts to the maintainance team.

### Hystrix is not a silver bullet

Using Hystrix and fallback methods is appropriate for services that handle non critical information. 

However, it is not a silver bullet.

Consider for instance, a service that returns the balance of a bank  account. You cannot provide a default hardcoded value back. 

### Using sufficient redundancy

It is important to design critical services in a fail safe manner. It is important to build enough redundancy into the system to ensure that the services do not fail.

### Have sufficient testing

It is important to test for failure. Bring a microservice down. See how your system reacts. 

Chaos Monkey is a good example from Netflix.

Do check out our video on this:

[![image info](/images/Capture-053-01.png)](https://www.youtube.com/watch?v=7qlQlvnQsuU)

### Summary

In this article, we discussed about fault tolerance. We saw how fault tolerance is essential in microservices architecture. We then saw how it can be implemented at the code level using frameworks such as Hystrix.

