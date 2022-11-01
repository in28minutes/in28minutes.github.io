---
layout:  post
title:  Software Design - Cohesion - with examples
date:    2019-04-16 12:31:19
summary: High Cohesion is one of the important aims when your architect and design your software. What is it all about?
categories: SwDesign
permalink:  /software-design-cohesion-with-examples
image: /images/architecture.png
---

High Cohesion is one of the important aims when your architect and design your software. What is it all about?

# You will learn
* What is Cohesion?
* Why is Cohesion important?
* What are the different parts of applications that need high Cohesion?
* How do we acheive high cohesion?



### Software Design

This is the sixth article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### What Is Cohesion?

Cohesion is all about grouping related things in your software, together, at one place. 

Drawing from a real-life example, there would be a thousand things in your home. But if asked to fetch your tennis racket, you can get it in a matter of minutes, if not seconds. If you are asked to get a cooking utensil, you immediate go the the kitchen. How is it that you are able to retreive things quickly? Because you have organized them in a highly cohesive way. You have put all the related things together.

That is cohesion at play in real life.

### Levels Of Cohesion

Cohesion in software is applicable at multiple levels:

* Methods: We group related methods together to create a class
* Classes: We group related classes and create a package
* Packages: We group related packages to probably create a component
* Components
* Applications
* Microservices

### Cohesion: A First Example

Have a look at the following code:

```java

	class DownloadAndStore {
		void downloadFromInternet() {
			//...
		}
		void parseData() {
			//...
		}
		void storeIntoDatabase() {
			//...
		}
		void doEverything() {
			downloadFromInternet();
			parseData();
			storeIntoDatabase();
		}
	}

``` 

```DownloadAndStore``` has the responsibility of doing three tasks, and has methods to do each one of them:

* ```downloadFromInternet()``` connects to a server and downloads a file
* ```parseData()``` needs an understanding of the data format to get the data from this file
* ```saveToDatabase()``` needs to talk to a database server to save the data
 
To perform them at one go, it defines another method, aptly named ```doEverything()``` to call the other three. 

```DownloadAndStore``` is a prime example of a class that has **very low cohesion**. Each of the listed three methods is doing something totally unrelated to the others. 

#### An Improved Solution

A better solution would be to have an implementation like the following:

```java

	class InternetDownloader {
		public void downloadFromInternet() {
			//...
		}
	}

	class DataParser {
		public void parseData() {
			//...
		}
	}

	class DatabaseStorer {
		public void storeIntoDatabase() {
			//...
		}
	}

	class DownloadAndStore {
		public void doEverything() {
			new InternetDownloader().downloadFromInternet();
			new DataParser().parseData();
			new DatabaseStorer().storeToDatabase();
		}
	}

```

In this code organization:

* Classes named ```InternetDownloader```, ```DataParser``` and ```DatabaseStorer``` are defined, each with a single important thing to do
* Methods of these classes are invoked to accomplish what is needed, within an external class, ```DownloadAndStore```.

This is a better solution, because it increases the possibilities of code reuse. Let's explore this a little further.

### Layered Architecture And Cohesion

Consider a simple web application, that is organized into three layers:

![image info](/images/Capture-08-01.png)

Organizing an application into layers helps to allocate responsibility clearly and separately. Here, 
* All the UI logic would be confined to the Web layer
* All the business logic would be the responsibility of the Business layer
* All the data storage and retrieval would be taken up by the Data layer

This is an example of cohesion at the application layer level. Each layer is highly cohesive, because it does one specific thing, whether large or small. 

### Component-Level Cohesion

Another instance where cohesion comes into play when you design components to be used in an enterprise application:

![image info](/images/Capture-05-02.png)

Authorization and Authentication approaches might be similar across the microservices in your enterprise. Hence, you could define a common security component. The security component only bothers about whether a given user has the right access and the right credentials - nothing else. It can be easily reused across multiple microservices. It is highly cohesive. It does security and it does it very well.

Note that if you try to enhance the features of the Security component by adding a logging capability as well, then its reusability goes down greatly. Both security and logging are better off implemented separately, as  independent cohesive reusable components.

### Example: The Spring Framework

One of the best examples of cohesion popularly in use is the Spring Framework:

![image info](/images/Capture-06-03.png)

The framework is not implemented as one big component. It is organized as a set of modules, each one of which can be composed of smaller components. Here is how it is organized, in brief:

* **Core Container**: The core feature of Spring is ***Dependency Injection***. This module is composed of core components such as Beans, Core, Context, and SpEL.
* **AOP, Aspects, Instrumentation and Messaging** are separate, smaller components
* **The Spring MVC Framework** is a separate module with components that handle web application needs
* The **Data Access and Integration** module has components such as JDBC, ORM, Transactions and others
* With the evolution of microservices, **Spring Cloud** is an additional module that has been designed to contain a set of cohesive components

#### Leveraging Cohesion In Spring

Each component has its own boundary; it is concerned with taking up a single responsibility, and doing it well. The more cohesive a component is, the more reusable it becomes. 

The modular structure of the Spring framework enables a programmer to pull in only those components that she actually needs. If she needs just the core functionality, the Core components sufficient. If database integration is necessary, then she can make use of the JDBC components, for instance.

### How To Make Software More Cohesive?

The guiding light that you need to follow to improve the cohesion in your software, is the **Single Responsibility Principle (SRP)**. 

When you look at your method/class/package/component, take to a minute to also think about its **responsibility**. If you can describe it in a single phrase or sentence, then you've done a good job defining it. 

However, if you end up joining together many phrases and sentences with several "and"s, then you violate the SRP. Your software could end up have low cohesion. 


Do check out our video on this:

[![image info](/images/Capture-08-02.png)](https://www.youtube.com/watch?v=Gx2N-kkO4FU)
     

### Summary

In this video, we talked about cohesion in significant detail. Cohesion is all about grouping related things together. Cohesion is applicable at multiple levels in a single application, such as method/class/package/component/application. You group related methods into a class, related classes into a package, and related packages perhaps into a component. 

We also examined the fact that cohesive classes and components are highly reusable. In addition, organizing an application into multiple layers also improves their cohesion. Then, we observed how the Spring Framework is organized into cohesive modules, each with a single responsibility. Finally, we looked at how Single Responsibility Principle can be used to build cohesive software.


