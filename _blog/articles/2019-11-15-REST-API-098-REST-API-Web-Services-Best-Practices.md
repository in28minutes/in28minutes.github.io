---
layout:  post
title:  REST API Best Practices - With Design Examples from Java and Spring Web Services
date:       2022-01-02 12:31:19
summary: Designing Great REST API is important to have great microservices. How do you design your REST API? What are the best practices?
categories: SwJavaProgrammers
permalink:  /rest-api-best-practices-with-java-and-spring
image: /images/architecture.png
---

![image info](images/Capture-098-03.png)

Designing Great REST API is important to have great microservices. How do you design your REST API? What are the best practices?

![image info](images/Capture-098-04.png)
 
## You will learn
- How do you design great REST API?
- What should you think about when designing REST API?
- What are the best practices in designing RESTful Web Services?


### REST API

This is the last article in a series of articles on REST APIs:

- [1 - Introduction to REST API - RESTful Web Services](/introduction-to-rest-api){:target='_blank'}
- [2 - REST v SOAP - A few perspectives](/rest-vs-soap-web-services){:target='_blank'}
- [3 - Designing REST API - What is Contract First?](/rest-api-contRact-first-approach){:target='_blank'}
- [4 - Designing REST API - What is Code First Approach?](/rest-api-code-first-approach){:target='_blank'}
- [5 - REST API - What is HATEOAS?](/rest-api-what-is-hateoas){:target='_blank'}
- [6 - REST API Best Practices - With Design Examples from Java and Spring Web Services](/rest-api-best-practices-with-java-and-spring){:target='_blank'}



### Use A Consumer First Approach

Who is going to use your service? The Service Consumer. 

Are you looking at it from the consumer perspective?
* If you design an API, will your consumer be able to understand your API?
* If you expose your resources, will the consumer be able to locate and access them?
* Will the consumer be able to understand your URIs?
* What is the type of service that you provide? Is it a mobile application, or is a web based application? What are the kinds of consumers you expect, and are these consumer types likely to change in the future? 
* If you implement something like HATEOAS, think about how your consumers would use it, before you implement it.

> The most important thing is to have great documentation. Make things easy for your consumers, so that it saves your own time. The more consumers can do on their own, the less work there is for you. 

Whenever you have a discussion or review meeting, put the requirements of the consumer first. 

### Use A Contract First Approach

What is a contract? 

The creator of the web service is considered as the **service provider**. The application the consumes the web service is the **service consumer**. 

A **contract** is an agreement between a service provider and a service consumer about a service.

![image info](images/Capture-098-03.png)

In order the utilize the service well, the service consumer needs to understand the contract fully. A contract includes details of many aspects of the service, such as:
* How to call the web service?
* What transport is being used?
* What are the request and response structures?

This is also called the **service definition**. 

In a **contract first** approach, you define the service contract first, and only then implement the service. 

#### Contract First With WSDL

For example, when you define SOAP web services, you use WSDL to define the contract.

![image info](images/Capture-098-04.png)

WSDL defines what are the service endpoints, the operations that you are exposing, and the request and response structures. 

#### Contract First With Swagger/Open API

When you use RESTful web services, Swagger is a popular tool used to document your web services.

![image info](images/Capture-098-05.png)

![image info](images/Capture-098-06.png)

Swagger allows you to define what are the resources you are exposing as part of your API. It includes the details of each operation, such as whether it consumes XML, JSON or both. The schema of the responses is also present there.

![image info](images/Capture-098-07.png)

It also gives the details of the response codes it supports. You can also see that this particular resource, ```/jpa/users```:

![image info](images/Capture-098-08.png)

supports a GET operation. In fact also supports a POST operation:

![image info](images/Capture-098-09.png)

The response schema if this resource is seen to be:

![image info](images/Capture-098-10.png)

The definition of User is present in the Swagger contract as:

![image info](images/Capture-098-11.png)

It includes a ```birthDate```, an ```id```, a ```name``` and an array of ```posts```. Some fields also include a ```description``` field within them.  

In a contract first approach, you create such a Swagger definition, either by hand or by using an application, before the service is implemented. 

#### Advantages Of A Contract First Approach

By using a contract first approach, you are thinking about your consumers, and how they can use the service. You are initially not worrying about the implementation details. 

If you give importance to the implementation early on, then technical details creedp into your service definition. 

You need your service definition to be independent of the platform being used, be it Java, .NET or whatever.



### Define Organizational Standards For REST API

An important reference for your organizational standards is YARAS. 

![image info](images/Capture-098-12.png)

**YARAS** stands for **Yet Another RESTful API Standard**. YARAS provides standards, guidelines and conventions to be followed while developing RESTful web services. It defines tips for things such as:
* How you should name your services?
* How you should structure your request and response?
* How you should implement filtering, sorting, paging and other actions?
* How you should approach versioning?
* How you need to approach API documentation?

#### Have A Single Approach To Design Services

With RESTful web services , you need to address a lot of complex issues before you start designing them. All the things listed above need to be figured out. 

As an organization, you don't want teams that handle different resources, to approach things differently. 

For example, it is not good to have Team-A adopt request parameter based versioning, and Team-B to use URI based versioning. 

Therefore, it is important you have a clearly defined organizational standards to approach RESTful services. 

#### Customizing YARAS To Organizational Needs

The good thing about YARAS is, it can be customized to meet the needs specific to an organization. For example, you can 
* Customize what the request and response bodies need to look like
* Choose a specific kind of versioning system

Since YARAS is quite comprehensive in its coverage, you can be sure you haven't missed out on any important decision.

### Build A Standard Organization wide REST API Framework

The typical frameworks that are used to build RESTful web services in the Java world, are Spring MVC, Spring REST and JAX-RS. 

If you build a organization specific framework/archetype/reference application adhering to the common organization standards on top of your preferred REST API framework, it would make it easy for teams to adhere to your standards. 

Typical features include:
* Request and response structures
* Error handling
* Filtering
* Searching
* Versioning
* Support for mock responses
* HATEOAS

A standard framework ensures a standard way of approaching service design and implementation across the organization. 

### Have Decentralized Governance Of REST APIs
Create an expert group of representatives from teams building REST API and form a governance team. The team is responsible for 
* Improving REST API standards 
* Building/Designing your REST API Frameworks

### Make Great Use Of HTTP

Whenever you think RESTful web services, think HTTP.

HTTP has all the features that support you to build great web services. 

#### Use Proper HTTP Request Methods

Think about the HTTP request methods that you need to make use of. When you think of implementing any operation, identify the resource on which it is to be performed, and then seek out the relevant HTTP request method. Are you retrieving a detail, creating something, updating something that exists, or deleting a thing that exists? 

Use 
* GET for retrieving 
* POST for creating
* PUT for updating
* DELETE for deleting
* PATCH for partial updates

#### Use Appropriate HTTP Response Status

When you implement an operation, make sure you return the correct response status. 

For example, when a particular resource is not found, don't throw a server exception, Instead, send out the appropriate response code in the response message, such as ```404```. 

When there is actually a server exception, send back a ```500``` code. 

When there is a validation error, send the code for a bad request. 

### Focus On Representation

Each resource can have multiple representations - XML or JSON format. Service consumer can choose the representation of their choice.

The service returns three users when we submit a GET request to it. In this case, we receive the JSON representation of the resource ```/users```.

![image info](images/Capture-098-14.png)

 When consumer does not specify a preferred representation, we use JSON.

![image info](images/Capture-098-15.png)

![image info](images/Capture-098-16.png)

Consumer can send an Accept header specify the representation.

![image info](images/Capture-098-17.png)

The response body now has XML content:

![image info](images/Capture-098-18.png)

### Use Plurals

Always use plurals when you name resources. 

Let's look at a simple example. Suppose we have a service that hosts a ```users``` resource. The following describe to consumers how to access them:

* Create a user: ```POST /users```
* Delete a user: ```DELETE /users/1```
* Get all users: ```GET /users```
* Get one user: ```GET /users/1```

Prefering a plural ```users``` to ```user``` makes URI more readable.
- For example, If we use ```/user``` instead of ```/users``` for the retreive - ```GET /user``` - does not convey the right message to the reader. 

### Have Great Documentation

Consumers need to understand how to make best use of the service, and and the best way to help them is by creating great documentation.

SOAP web services can utilize the functionality of WSDL, while RESTful web services have options of Swagger (now Open API Documentation Standard). 

Choosing the format is just one part of generating good documentation. What also matters is putting in the right amount of information to be of assistance to the consumer. 

The documentation needs to be complete, and should cover the following points: 
* What are the Request and Response Structures?
* How the consumer needs to authenticate himself?
* What are the usage limits?
* Specify all the response message types, and the related status codes, that can be expected out of the service

#### Have A Common REST API Documentation Portal

A beneficial thing to do would be to have a common REST API documentation portal, across the organization. Have a look at one such portal:

![image info](images/Capture-098-19.png)

Such a portal consolidates all the resources present in the organization. Having a user interface such as Swagger UI would have its added benefits. Using Swagger UI, you can actually look at the documentation in more detail:

![image info](images/Capture-098-21.png)

This is usable even by non-technical users. The information seen here includes:

* The expected response format
* The content type
* The response codes supported

Toy can also try out the format of the documentation, in a live request/response pair.

### Support Versioning

Versioning brings in a lot of complexity for a web service. Maintaining several differing versions of the same web service is a pain. Try avoiding it, when possible.

However, in certain scenarios, versioning is unavoidable.

Let us start off by looking at an example service. Suppose we have initially defined a service to have a class named ```PersonV1```, in this manner:

```java

	public class PersonV1 {
		private String name;

		public PersonV1() {
			super();
		}

		public PersonV1(String name) {
			super();
			this.name = name;
		}

		public String getName() {
			return this.name;
		}

		public setName(String name) {
			this.name = name;
		}
	}

``` 

This version of the class does not take into account that a name could have many sub-parts, such as first name and last name. Have a look a this:

```java 

		public class Name {
			private String firstName;
			private String lastName;

			public Name() {
			}

			public Name(String firstName, String lastName) {
				this.firstName = firstName;
				thi.lastName = lastName;
			}

			public String getFirstName() {
				return this.firstName;
			}

			public String getLastName() {
				return this.lastName;
			}
		}

``` 

The second version of the original class was updated to correct this anomaly:

```java

	public class PersonV2 {
		private Name name;

		public PersonV1() {
			super();
		}

		public PersonV1(Name name) {
			super();
			this.name = name;
		}

		public String getName() {
			return this.name.getFirstName() + " " + this.name.getLastName();
		}

		public setName(Name name) {
			this.name = name;
		}
	}	

```

We cannot migrate the entire service to use ```PersonV2```, immediately! There might be other consumers who are expecting responses in the format of ```PersonV1```. 

This is where versioning is needed. 

Let us now look at the options we have to version these two resources.

#### Use Different URIs 

One option that we have is to use different URIs for these different resources. In the exampel code below, we use the URIs ```v1/person``` and ```v2/person``` to differentiate them:

```java

	@RestController
	public class PersonVersioningController {

		@GetMapping("v1/person")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping("v2/person")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}
	}

``` 

If you execute a GET request for the resource ```v1/person```:

![image info](images/Capture-098-22.png)

You will get the information corresponding to ```v1```. For the other resource:

![image info](images/Capture-098-23.png)

### Use A Request Parameter

The second versioning method uses a request parameter:

```java

	@RestController
	public class PersonVersioningController {

		@GetMapping(value="/person/param" params="version=1")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/param" params="version=2")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}
	}

``` 

To the URI ```/person/param```, if we send a parameter with ```version=1```, then we return the resource of type ```PersonV1```: 

![image info](images/Capture-098-24.png)

For the same URI, a parameter with ```version=2``` returns a resource of type ```PersonV2```:

![image info](images/Capture-098-25.png)

This method is called **request parameter versioning**. 

### Use A Header

Another way you can do versioning is by specifying a header. 

```java

	@RestController
	public class PersonVersioningController {

		@GetMapping(value="/person/header" headers="X-API-VERSION=1")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/header" headers="X-API-VERSION=1")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}
	}

``` 

Here, we use a header named ```X-API-VERSION```, and have labeled the URI as ```/person/header```. When the header value is ```1```, the resource of type ```PersonV1``` is returned: 

![image info](images/Capture-098-26.png)

When its value is ```2```,  a resource of type ```PersonV2``` is retrieved:

![image info](images/Capture-098-27.png)

We are using an attribute on a request header, to perform the versioning for us. 

### Use The Accept Header

The last method for achieving versioning makes use of the Accept header.  

```java

	@RestController
	public class PersonVersioningController {

		@GetMapping(value="/person/produces" produces="application/vnd.company.app-v1+json")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/produces" produces="application/vnd.company.app-v2+json")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}
	}

``` 

If the consumer includes the first versioning information in the Accept header of the GET request, the following resource comes back:

![image info](images/Capture-098-28.png)

Otherwise, the resource of type ```PersonV2``` is returned: 

![image info](images/Capture-098-29.png)

This is called **Accept Header Versioning**, or **Media Type Versioning**, because mime types are the usually the contents of an Accept header.  

### Comparing The Versioning Techniques

We have so far seen four types of versioning techniques:

* URI versioning
* Request Param versioning
* Header versioning
* Media Type versioning

Which of these is the best one? 

The truth is, there is no single answer to this question. 

The fact of the matter is that different types of versioning are patronized by different internet giants. 
* URI versioning -  Twitter
* Request Param versioning - Amazon
* Header Parameter versioning - Microsoft
* Media Type versioning - GitHub

You need to evaluate these four choices, accroding to your specific needs. There are a number of important factors to consider:
* **URI Pollution** : With URI versioning and request parameter versioning, we end up polluting the URI space. This is because we add prefixes and suffixes to the core URI strings. Header versioning avoids that.
* **Misuse Of HTTP Headers**: In the case of Header versioning and Media Type versioning, there is a misuse of HTTP headers, since they were not originally meant for versioning.
* **Caching**: A resource is defined by its URI. However, if you are not using the URI to determine its version, but using a header-based mechanism, the versioning information cannot be cached. If HTTP caching is important to you, use the URI or Request Parameter versioning. 
* **Browser Request Executability**: Both Header and Media Type versioning need the use of tools such as Postman to execute the browser request. However, if the consumers of the service are not technically well versed, then URI or Request Parameter versioning would be preferable. 
* **API Documentation**: You also need to think about how you want to document your APIs. The URI and Request Parameter versioning are easier to document than the other two versioning types. 

Realize that there is no single perfect solution!   

### Think About Error Handling

When a consumer sends a request to a service, it is important that he gets the right response.  Whenever something goes wrong, it is important to send an appropriate response.

#### When Consumer Requests a Non Existing Resource

If we send a GET request to search for an existing user, we get the following response:

![image info](images/Capture-098-30.png)

If you search for a non-existent user:

![image info](images/Capture-098-31.png)

What you get back is a status of ```404 Not Found```. This is good error handling, because it correctly identifies that the resource is not found, and does not return a Server Error.

Let's now send a GET request to a non-existent URI:

![image info](images/Capture-098-32.png)

You can see that you get a ```404 Not Found```. A wrong URL indicates a non-existent resource. 

#### A Look At Important Response Statuses

* 200 - Success
* 404 - Resource Not Found
* 400 - Bad Request (such as validation error)
* 201 - Created
* 401 - Unauthorized (when authorization fails)
* 500 - Server Error

#### Error Details In Response Body

It helps if you have a standard exception structure when designing your service. 

![image info](images/Capture-098-33.png)

For specific errors, specific response structures can be returned to the consumer, and this can be a standard across the organization. Make sure that the error response is also readable to the consumers, without confusion. 

### USe Swagger or Open API Documentation

Swagger is one of the most popular documentation formats for RESTful web services. It is today supported by a wide variety of organizations, and used in a large number of services. We look at two main aspects of Swagger here:

* The Swagger documentation format
* Swagger UI, which enables you to look at the Swagger documentation in a visually pleasing manner

#### Swagger Documentation

Have a look at the following Swagger JSON:

![image info](images/Capture-098-34.png)

At a high level, it looks very similar to a WSDL definition. it has several important attributes:

* ```host``` : Where the service is hosted
* ```basePath```: The path where the service is hosted
* ```consumes```: What kinds of requests are accepted

![image info](images/Capture-098-36.png)

* ```produces```: What kinds of responses are generated

![image info](images/Capture-098-37.png)

* ```paths```" the different resources present
In this case, you have several types of resources listed:

![image info](images/Capture-098-35.png)

When you look at the Swagger documentation, you can quickly determine the resources that are present, the operations that are supported, and the operations that are relevant for each resource:

![image info](images/Capture-098-38.png)

The resource ```/users``` supports both ```GET``` and ```POST``` operations. For ```GET```, you can see the supported request and response types. You also see the different response types it has:

![image info](images/Capture-098-39.png)

Notice that for a ```200``` response, a schema is also mentioned, as an array of ```User```. ```User``` is part of the ```definitions``` section at the bottom of the document:  

![image info](images/Capture-098-40.png)

Swagger is completely independent of the technology you use to implement your RESTful web service. It is all basic JSON at work. 

#### Introducing Swagger UI

Swagger is a great UI tool that is useful to visualize Swagger documentation for a RESTful web service. Have a look at the screen grab below:

![image info](images/Capture-098-41.png)

Note that we have chosen a particular version of a web service to view its documentation. Here is the same screen in better detail:   

![image info](images/Capture-098-42.png)

When we come to the homepage, it describes the resources that are listed:

![image info](images/Capture-098-43.png)

Also, the set of operations supported for the resource URLs can be seen:

![image info](images/Capture-098-44.png)

When you click on the GET operation of a particular resource, you get its details:

![image info](images/Capture-098-45.png)

You can see the Model Schema is described visually. The attributes ```birthDate```, ```id```, ```links```, ```name``` and ```posts``` are also shown. You can also execute a sample request, and view the response:

![image info](images/Capture-098-46.png)

#### Using Swagger (Open API Standard) Tools

The great thing about Swagger is there are a lot of tools available around it. Have a look at the following service which we had used earlier, to explain versioning:

```java

	@RestController
	public class PersonVersioningController {

		@GetMapping("v1/person")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping("v2/person")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}

		@GetMapping(value="/person/param" params="version=1")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/param" params="version=2")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}

		@GetMapping(value="/person/header" headers="X-API-VERSION=1")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/header" headers="X-API-VERSION=1")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}

		@GetMapping(value="/person/produces" produces="application/vnd.company.app-v1+json")
		public PersonV1 personV1() {
			return new PersonV1("Bob Charlie");
		}

		@GetMapping(value="/person/produces" produces="application/vnd.company.app-v2+json")
		public PersonV2 personV2() {
			return new PersonV2(new Name("Bob", "Charlie"));
		}

	}

```  

Here's a look at the automatically generated documentation for this service: 

![image info](images/Capture-098-47.png)

There is support in Swagger for both a contract-first approach, and a code-first approach.   

Do check out our video on the same topic:

[![image info](images/Capture-098-01.png)](https://www.youtube.com/watch?v=NzgFdEGI8sI)

### Summary

In this article, we had a look at best practices for building and designing RESTful web services.