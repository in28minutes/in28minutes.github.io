---
layout:  post
title:  Software Design - Single Responsibility Principle - with examples
date:    2019-11-14 12:31:19
summary: For me, Single Responsibility Principle is the most important design principle. What is Single Responsibility Principle? How do you use it? How does it help with making your software better? Let's get started.
categories: SwDesign
permalink:  /software-design-single-responsibility-principle
image: /images/design-category.png
---

For me, Single Responsibility Principle (SRP) is the most important design principle. 

What is Single Responsibility Principle? How do you use it? How does it help with making your software better? Let's get started.


### What will you learn?
* What is the Single Responsibility Principle?
* How do you apply this principle in developing and designing software applications?

### Software Design Principles

This is the fourth article in a series of articles on important Software Design Principles:

- [1 - Introduction to Four Principles Of Simple Design](/four-principles-of-simple-design){:target='_blank'}
- [2 - Software Design - Separation Of Concerns - with examples](/software-design-seperation-of-concerns-with-examples){:target='_blank'}
- [3 - Object Oriented Software Design - Solid Principles - with examples](/software-design-solid-principles){:target='_blank'}
- [4 - Software Design - Single Responsibility Principle - with examples](/software-design-single-responsibility-principle){:target='_blank'}
- [5 - Software Design - Open Closed Principle - with examples](/software-design-open-closed-principle){:target='_blank'}
- [6 - Software Design - What is Dependency Inversion Principle?](/software-design-dependency-inversion-principle){:target='_blank'}


## What Is The Single Responsibility Principle (SRP)?

As the term says, this principle is all about having single responsibility. 

In any software system, this principle is applicable at multiple levels 
- a variable
- a method
- a class
- a package
- a component
- application layers or 
- the entire application itself

## SRP For Methods

Any method that you write should have a single responsibility -  it should either be a high-level method, or a low-level one. Only when a method has a single responsibility, you will be able to give it an appropriate name.

## SRP For Classes

> "A class should have one, and only one reason to change"

Let's now have a look at a few examples of classes that violate this principle, and then look at how to correct the violation.

### Example 1: The ```Task``` class

```java

	public class Task {
		public void downloadFile(Strign location) {
			//...
		}

		public void parseTheFile(File file) {
			//...
		}

		public void persistTheData(Data data) {
			//...
		}
	}

```

Does the class ```Task``` adhere to the single responsibility principle? Not at all, because it does a lot of different things:

* ```downloadFile()``` downloads the file, by communicating over the internet
* ```parseTheFile()``` parses the file contents
* ```persistTheData()``` saves the data into a database

A better solution would be to have separate classes for each of the responsibilities currently taken up by ```Task```. Here is one such solution.

#### Identifying The Low-level Classes

```java

	public class FileDownloader {
		public void downloadFile() {
			//...
		}
	}

	public class DataParser {
		public void parseData() {
			//...
		}
	}

	public class DatabaseStorer {
		public void storeIntoDatabase() {
			//...
		}
	}

```

* ```FileDownloader``` only downloads the file from the internet
* ```DataParser``` only parses the downloaded file
* ```DatabaseStorer``` only stores the parsed data, into the database

These are all low-level classes here. 

#### Adding A High-Level Class

```java
	public class DownloadAndStore {
		public void doEverything() {
			new FileDownloader().downloadFile();
			new DataParser().parseData();
			new DatabaseStorer().storeIntoDatabase();
		}
	}

```

Then, you can create a high-level class such as ```DownloadAndStore``` that invokes the functionality of these low-level classes to perform the complete task. Such an organization ensures that the low-level classes are reusable. 

### Example 2: The Employee Class

Consider next, the ```Employee``` class shown below:

```java

	public class Employee {
		public Money calculatePay() {
			//...
		}
		public String reportHours() {
			//...
		}
		public void save() {
			//...
		}
	}

```

```Employee``` concerns itself with not just calculating the pay of an employee, but also reporting hours for work, and saving these details to the database. 

I will leave it as an exercise to fix the Employee class to adhere to SRP.

## SRP For Components

Every enterprise application has parts of its functionality organized as Components. For example, have a look at the diagram below:

![image info](/images/Capture-05-02.png)

Here, the following components are of note:

* Security component  takes care of user authentication and authorization. Designing such a component helps abstract applications from the low-level security details. All microservices can interact with this component to find out if a user has access. 
* The Logging component - does the low level logging functionality
* The Archetype component - Can be used to create new microservices

Each of these components have a single responsibility. If the Security component takes care of logging, it would become less reusable. Therefore, at the component level, a well-defined single responsibility is highly desirable.

### Using SRP For Common Infrastructure

![image info](/images/Capture-05-02.png)

In the diagram shown above, you can identify the following infrastructure components:

* Naming Service - Has the responsibility to retrieve the service location based on its name
* API Gateway - All requests go through the API Gateway. Common features like authentication, logging, rate limiting can be implemented in an API Gateway.
* Centralized Logging - Centralized store for logs from all microservices so that we can easily debug problems

Even with these sub-systems, a single responsibility for each of them is most desirable. 

### Using SRP For Application Layering

Single responsibility is also an important factor in how you layer your application. Have a look at the following conceptual layers in a web application: 

![image info](/images/Capture-05-03.png)

* Web Layer: All functionality concerned with direct user interaction sits here
* Business Layer: Houses the core business logic
* Data layer: All the functionality dealing with storing and retrieving data goes here

If you had the need to talk to other systems, there would have been an additional Enterprise Messaging Layer added onto this setup.

### Summary

In this article, we talked about the Single Responsibility Principle. It is applicable at multiple levels to the parts of an application. This includes methods, classes, packages, components and application layers. With regards to classes, at a low level it means a class has only one reason to change. 

In general, **Single Responsibility ensures high cohesion, low coupling and enhanced reusability**.

Do check out our video on this:

[![image info](/images/Capture-05-01.png)](	https://www.youtube.com/watch?v=eympIQPQLx4) 
