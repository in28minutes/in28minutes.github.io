---
layout:     post
title:      Spring Boot and Content Negotiation - XML and JSON Representations 
date:       2023-04-03 12:31:19
summary:    Learn how to use Spring Boot to build Content Negotiation for a REST API/Service. Content Negotiation facilitates interaction between the Consumer and the Provider over the data exchange format. We will cover both XML and JSON formats in this post.
categories:  SpringBoot
permalink:  /spring-boot-content-negotiation-with-xml-json-representations
image: /images/rest-api-category.png
---

This post will walk you through the process of implementing Content Negotiation for a REST API/Service using Spring Boot. Content Negotiation facilitates interaction between the Consumer and the Provider over the data exchange format. We will cover both XML and JSON formats in this post.
 
![Image](/images/ContentNegotiationHeaders-AcceptAndContentType.png "Content Negotiation Headers - Accept and Content-Type") 

## You will learn
- What is Content Negotiation?
- Why do you need Content Negotiation?
- How do you implement Content Negotiation with Spring Boot?
- How do you use XML representation for request and response with Spring Boot RESTful Services?
- How do you use JSON representation for request and response with Spring Boot RESTful Services?

## Project Code Structure

The screenshot below depicts the framework of the project we will be creating.

![Image](/images/CRUDServiceWithHibernate.png "CRUDServiceWithHibernate") 

A few details:
- SpringBoot2RestServiceApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `Student.java` - Student JPA Entity
- StudentRepository.java - Student JPA Repository. This is created using Spring Data JpaRepository.
- StudentResource.java - Spring Rest Controller exposing all services on the student resource.
- data.sql - Initial data for the student table. Spring Boot would execute this script after the tables are created from the entities.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse or IntelliJ.
- JDK 17

## Maven Project Completion using Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation

## What is Content Negotiation?

> REST is an acronym that stands for REpresentational State Transfer.

A Resource is a key abstraction in REST. There are no restrictions on what can be considered a resource. A todo list is a useful resource. A Facebook friend is a valuable resource.

A resource can have multiple representations
- XML
- HTML
- JSON

When a resource is requested, we deliver the resource's representation.

When a consumer makes a request, he or she might include two HTTP Headers relating to Content Negotiation.
- Accept and
- Content-Type

The Content-Type header specifies the content type of the request's body.

Accept specifies the intended response content type.

## Content Negotiation Example

The screenshot below explains how to include these headers in a Postman request.

![Image](/images/ContentNegotiationHeaders-AcceptAndContentType.png "Content Negotiation Headers - Accept and Content-Type") 

Based on the Accept header, the server is anticipated to reply.

For example, if a consumer sends a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml', we need to provide the xml representation of the resource.

```xml
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

If a consumer submits a request with the Accept header set to 'application/json,' we must offer the resource's JSON representation.

```json
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

Based on the Content-Type, a same approach applies to the Response Body Content.

A consumer can send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/xml', and provide the XML representation of the resource to be created.

```xml
<Student>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

A consumer can also send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/json', and provide the JSON representation of the resource to be created.

```json
{
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

> This dialog which happens between the Consumer and Service Provider is called Content Negotiation.

## Bootstrapping a Project with a REST Resource

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> The same example will be used to demonstrate Content Negotiation.

## Using Spring Boot to Implement Content Negotiation

Let's run a few requests to see if the project we established using Spring Boot Starter Web includes content negotiation by default, and then we'll continue on to adding content negotiation to our application.

### Executing a request with Accept Header 'application/xml'

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

You are expecting to get an XML representation of the resource.

You would, however, receive a response with the status -> 406 Not Acceptable. This means that the programme does not allow responding with the content type `application/xml`. 

However, if you submit a request to `http://localhost:8080/students/10001` with the Accept header set to `application/json`, you will receive the anticipated result.

```json
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

### Spring Boot Services XML Representation Implementation

It's straightforward. All you'd have to do is add a simple dependency to your `pom.xml`.

```xml
<dependency>
  <groupId>com.fasterxml.jackson.dataformat</groupId>
  <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

Restart your application. 

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

Response
```xml
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

Cool! Your application now supports the student resource in both XML and JSON formats.

You can use 
- Content-Type to indicate content type of the body  for POST and PUT requests.
- Accept indicates the expected content type of the response for GET requests.

### Experimenting with Content Negotiation

#### GET Request

- URL - http://localhost:8080/students
- Request Method - GET
- Request Headers
  - Accept - application/xml

Response
```xml
<List>
    <item>
        <id>10001</id>
        <name>Ranga</name>
        <passportNumber>E1234567</passportNumber>
    </item>
    <item>
        <id>10002</id>
        <name>Ravi</name>
        <passportNumber>A1234568</passportNumber>
    </item>
</List>
```

#### POST Request

- URL - http://localhost:8080/students
- Request Method - POST
- Request Headers
  - Content-Type - application/xml
  
Request
```json
    <item>
        <name>Tom</name>
        <passportNumber>Z1234567</passportNumber>
    </item>
```

Response 
- Status 201 - CREATED
- Header Location →http://localhost:8080/students/2

#### PUT Request

- URL → http://localhost:8080/students/10002
- Request 
    - Method → PUT
- Request Headers
  - Content-Type - application/xml

Request

```xml
<item>
    <name>Tom</name>
    <passportNumber>Z1234567</passportNumber>
</item>
```

Response code 204 - No Content


## Maven Project Completion using Code Examples

> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation
