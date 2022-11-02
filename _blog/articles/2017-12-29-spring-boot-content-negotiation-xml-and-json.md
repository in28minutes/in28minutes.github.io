---
layout:     post
title:      Spring Boot and Content Negotiation - XML and JSON Representations 
date:       2022-07-02 12:31:19
summary:    Learn how to implement Content Negotiation for a REST API/Service with Spring Boot. Content Negotiation helps the Consumer and Provider interact about the data exchange format. In this article, we will expose both XML and JSON representations.
categories:  SpringBoot
permalink:  /spring-boot-content-negotiation-with-xml-json-representations
image: /images/rest-api-category.png
---

This guide will help you implement Content Negotiation for a REST API/Service with Spring Boot. Content Negotiation helps the Consumer and Provider interact about the data exchange format. In this article, we will expose both XML and JSON representations.
 
![Image](/images/ContentNegotiationHeaders-AcceptAndContentType.png "Content Negotiation Headers - Accept and Content-Type") 

## You will learn
- What is Content Negotiation?
- Why do you need Content Negotiation?
- How do you implement Content Negotiation with Spring Boot?
- How do you use XML representation for request and response with Spring Boot RESTful Services?
- How do you use JSON representation for request and response with Spring Boot RESTful Services?



## Project Code Structure

Following screenshot shows the structure of the project we will create.

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
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation

## What is Content Negotiation?

> REST stands for REpresentational State Transfer.

Key abstraction in REST is a Resource. There is no restriction on what can be a resource. A todo is a resource. A person on facebook is a resource. 

A resource can have multiple representations
- XML
- HTML
- JSON

When a resource is requested, we provide the representation of the resource.

When a consumer sends a request, it can specify two HTTP Headers related to Content Negotiation
- Accept and
- Content-Type

Content-Type indicates the content type of the body of the request.

Accept indicates the expected content type of the response.

## Example of Content Negotiation

Following screen shot shows how you can specify these headers in a request using Postman.

![Image](/images/ContentNegotiationHeaders-AcceptAndContentType.png "Content Negotiation Headers - Accept and Content-Type") 

The server is expected to respond based on the Accept header.

For example, if a consumer sends a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml', we need to provide the xml representation of the resource.

```
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

If a consumer sends a request with Accept header as 'application/json', we need to provide the JSON representation of the resource.

```
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

Similar concept applies to the Response Body Content based on the Content-Type.

A consumer can send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/xml', and provide the XML representation of the resource to be created.

```
<Student>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

A consumer can also send a POST request to `http://localhost:8080/students` with Content-Type header as 'application/json', and provide the JSON representation of the resource to be created.

```
{
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

> This dialog which happens between the Consumer and Service Provider is called Content Negotiation.

## Bootstrapping a Project with a REST Resource

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to discuss about Content Negotiation.

## Implementing Content Negotiation with Spring Boot

Let's execute a few requests to discover that content negotiation is not provided by default by the project we created with Spring Boot Starter Web and move on the adding content negotiation to our application.

### Executing a request with Accept Header 'application/xml'

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

You are expecting to get an XML representation of the resource.

However you would get a response with status -> 406 Not Acceptable. This indicates that application does not support providing a response with content type 'application/xml'. 

However if you send a request to `http://localhost:8080/students/10001` with Accept header as 'application/json', you would get the response back as expected.

```
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567"
}
```

### Implementing XML Representation for Spring Boot Services

Its simple. All that you would need to do is to add a simple dependency to your pom.xml.

```
<dependency>
  <groupId>com.fasterxml.jackson.dataformat</groupId>
  <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

Restart your application. 

Send a request to `http://localhost:8080/students/10001` with Accept header as 'application/xml'. 

Response
```
<Student>
    <id>10001</id>
    <name>Ranga</name>
    <passportNumber>E1234567</passportNumber>
</Student>
```

Cool! Your application now supports both XML and JSON representations of the student resource.

You can use 
- Content-Type to indicate content type of the body  for POST and PUT requests.
- Accept indicates the expected content type of the response for GET requests.

### Playing with Content Negotiation

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

Response with status 204 - No Content


## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-content-negotiation
