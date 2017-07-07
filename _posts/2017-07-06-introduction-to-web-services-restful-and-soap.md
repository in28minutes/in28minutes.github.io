---
layout:     post
title:      Introduction to Web Services - Restful and SOAP
date:       2017-07-05 12:31:19
summary:    Introduction to Web Services - Restful and SOAP
categories: Web services, SOAP, REST
permalink:  /introduction-to-web-services-with-soap-and-rest
---

This guide will help you understand what Web Services is and what are the different types of web services.
 
## You will learn
- What is a web service?
- What are the advantages of web services?
- What are the different types of web services?
- What are RESTful web services?
- What are SOAP web services?

## References

1 hour video courses on all popular frameworks!

- Spring - [spring-framework-tutorial-for-beginners](https://in28minutes.teachable.com/p/spring-framework-tutorial-for-beginners)
- Spring MVC - [https://www.youtube.com/watch?v=BjNhGaZDr0Y](https://www.youtube.com/watch?v=BjNhGaZDr0Y)
- Spring Boot - [https://www.youtube.com/watch?v=PSP1-2cN7vM](https://www.youtube.com/watch?v=PSP1-2cN7vM)
- Eclipse - [https://www.youtube.com/watch?v=s4ShbtOHMCA](https://www.youtube.com/watch?v=s4ShbtOHMCA)
- Maven - [https://www.youtube.com/watch?v=0CFWeVgzsqY](https://www.youtube.com/watch?v=0CFWeVgzsqY)
- JUnit - [https://www.youtube.com/watch?v=o5k9NOR9lrI](https://www.youtube.com/watch?v=o5k9NOR9lrI)
- Mockito - [https://www.youtube.com/watch?v=d2KwvXQgQx4](https://www.youtube.com/watch?v=d2KwvXQgQx4)

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

# What is a Web Service?

> Service delivered over the web

Is this really a complete definition. Is everything thats delivered over the web "Web Service"?

Let's consider a web application we developed for our Spring MVC Course to manage todo's.  
![Image](/images/Web_Services_Web_Application_To_Manage_Todos.png)

Is this application a web service?

Nope. The answer is no. This is a web application. Not a web service.

We are back to square one.

- What is a web service?
- How is it differnent from a web application?

To understand this, lets consider an example.

Mark Zuckerberg likes my web application to manage todo's. He thinks that my todo application is a right fit to integrate into facebook to manage todo's. Can we use the existing application to do the integration? No.

Why? Because the existing application is designed for humans - other individuals. The output of the application is html which is rendered by browser to the end user. This is not designed for other applications.

What would be the difference in my thinking if I want to design the todo application so that other applications can interact with it?

I would need to produce the output in the format that the consumers can understand. Then facebook can call my web service and integrate it.

That leads use to - W3C definition of a Web Service
> Software system designed to support interoperable machine-to-machine interaction over a network.

The key things to understand is 
- Web services are designed for machine-to-machine (or application-to-application) interaction
- Web services should be interoperable - Not platform dependent
- Web services should allow communication over a network

## Types of Web Services

Facebook wants to talk to Todo Application. 
- Facebook is built on a variety of languages - PHP is used for the front-end, Erlang is used for Chat, Java and C++ are also used. 
- Todo Application is build on Java using Spring MVC

This is how we see the basic interaction
![Image](/images/Web_Service_Basic_Interaction.png)

Both applications should be able to understand the request and response. So, what formats should we use for the request and response?

They should be standard formats so that they can be used with varied kind of platforms. 
 - JSON and XML are quite popular Data Exchange formats.

Not really types but a broad classification
- SOAP
- REST

These are not really mutually exclusive. Some SOAP services can actually be RESTful. 

When does a web service become a SOAP Web service or a Restful web service?

### SOAP

SOAP was earlier an abbreviation for Simple Object Access Protocol. In SOAP, the request and response are in XML format. However, not all types of XML are valid SOAP Requests. SOAP defines a standard XML format. We will use WSDL (Web Service Definition Language) to define the format of request xml and the response xml.

Now lets say Facebook wants to know how to call the TODO Service? What should I give to the Facebook developer? I will give him a WSDL. It will explain 
- What are the different services (operations) exposed by the server?
- How can a service (operation) be called? What url to use? (also called End Point).
- What should the structure of request xml?
- What should be the structure of response xml?

SOAP format defines a SOAP-Envelope which envelopes the entire document. 
- SOAP-Header (optional) contains any information needed to identify the request. Also, part of the Header is authentication, authorization information (signatures, encrypted information etc). 
- SOAP-Body contains the real xml content of request or response.
- In case of error response, server responds back with SOAP-Fault.

Isn't that cool?

### REST

First of all, REST does not define a standard message exchange format. You can build REST services with both XML and JSON. However, JSON is a more popular format with REST.

So, if it does not define a standard message exchange format, what is REST then?

> REST is a style of software architecture for distributed hypermedia systems

> REST stands for REpresentational State Transfer

Key abstraction in REST is a Resource. There is no restriction on what can be a resource. A todo is a resource. A person on facebook is a resource. 

A resource has an URI (Uniform Resource Identifier):
- /user/Ranga/todos/1
- /person/Ranga

A resource will have representations
- XML
- HTML
- JSON

A resource will have state. The representation of a resource should capture its current state.

When a resource is requested, we provide the representation of the resource. 

REST builds on top of HTTP (Hypertext Transfer Protocol). HTTP is the language of the web. 

HTTP has a few important verbs.
- POST - Create a new resource
- GET - Read a resource
- PUT - Update an existing resource
- DELETE - Delete a resource

HTTP also defines standard response codes.
- 200 - SUCESS
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 201 - CREATED
- 401 - UNAUTHORIZED
- 415 - UNSUPPORTED TYPE - Representation not supported for the resource
- 500 - SERVER ERROR

Restful Service Constraints
- Client - Server : There should be a service producer and a service consumer.
- The interface (URL) is uniform and exposing resources. Interface uses nouns (not actions)
- The service is stateless. Even if the service is called 10 times, the result must be the same.
- The service result should be Cacheable. HTTP cache, for example.
- Service should assume a Layered architecture. Client should not assume direct connection to server - it might be getting info from a middle layer - cache.

Richardson Maturity Model defines the maturity level of a Restful Web Service. Following are the different levels and their characteristics.
- Level 0 : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST.
- Level 1 : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used.
- Level 2 : Resources use proper URI's + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1.
- Level 3 : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.

Designing Restful APIs
- While designing any API, the most important thing is to think about the api consumer i.e. the client who is going to use the service. What are his needs? Does the service uri make sense to him? Does the request, response format make sense to him?
- In Rest, we think Nouns (resources) and NOT Verbs (NOT actions). So, URI’s should represent resources. URI’s should be hierarchical and as self descriptive as possible. Prefer plurals.
- Always use HTTP Methods. 
  - GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
  - POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition : Return code 201 (CREATED) is possible.
  - PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK)
  - DELETE : Used to delete a resource.

## REST vs SOAP

REST vs SOAP are not really comparable. REST is an architectural style. SOAP is a message exchange format.

Let's compare the popular implementations of REST and SOAP styles.
- RESTful Sample Implementation : JSON over HTTP
- SOAP Sample Implementation : XML over SOAP over HTTP

- REST is built over simple HTTP protocol. SOAP services are more complex to implement and more complex to consume.
- REST has better performance and scalability. REST reads can be cached, SOAP based reads cannot be cached.
- REST permits many different data formats (JSON is the most popular choice) where as SOAP only permits XML.
- SOAP services have well defined structure and interface (WSDL) and has a set of well defined standards (WS-Security, WS-AtomicTransaction and WS-ReliableMessaging). Documentation standards with REST are evolving(We will use Swagger in this course).

## Advantages of Web Services

- Reuse : Mark Zuckerberg does not need to invest to build a todo application of his own.
- Modularity 
- Language Neutral

Webservices form the building blocks of SOA and microservices architectures.


## SOAP Service Examples

### Request
```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <getCourseDetailsRequest xmlns="http://in28minutes.com/courses">
            <id>Course1</id>
        </getCourseDetailsRequest>
    </Body>
</Envelope>
```

### Response
```
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:getCourseDetailsResponse xmlns:ns2="http://in28minutes.com/courses">
            <ns2:course>
                <ns2:id>Course1</ns2:id>
                <ns2:name>Spring</ns2:name>
                <ns2:description>10 Steps</ns2:description>
            </ns2:course>
        </ns2:getCourseDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### Fault

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <SOAP-ENV:Fault>
            <faultcode>SOAP-ENV:Server</faultcode>
            <faultstring xml:lang="en">java.lang.NullPointerException</faultstring>
        </SOAP-ENV:Fault>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### WSDL

- view-source:http://localhost:8080/ws/courses.wsdl

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?><wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:sch="http://in28minutes.com/courses" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:tns="http://in28minutes.com/courses" targetNamespace="http://in28minutes.com/courses">
  <wsdl:types>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" targetNamespace="http://in28minutes.com/courses">

    <xs:element name="getCourseDetailsRequest">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="id" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <xs:element name="getCourseDetailsResponse">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="course" type="tns:course"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <xs:complexType name="course">
        <xs:sequence>
            <xs:element name="id" type="xs:string"/>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="description" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
</xs:schema>
  </wsdl:types>
  <wsdl:message name="getCourseDetailsRequest">
    <wsdl:part element="tns:getCourseDetailsRequest" name="getCourseDetailsRequest">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="getCourseDetailsResponse">
    <wsdl:part element="tns:getCourseDetailsResponse" name="getCourseDetailsResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:portType name="CoursesPort">
    <wsdl:operation name="getCourseDetails">
      <wsdl:input message="tns:getCourseDetailsRequest" name="getCourseDetailsRequest">
    </wsdl:input>
      <wsdl:output message="tns:getCourseDetailsResponse" name="getCourseDetailsResponse">
    </wsdl:output>
    </wsdl:operation>
  </wsdl:portType>
  <wsdl:binding name="CoursesPortSoap11" type="tns:CoursesPort">
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
    <wsdl:operation name="getCourseDetails">
      <soap:operation soapAction=""/>
      <wsdl:input name="getCourseDetailsRequest">
        <soap:body use="literal"/>
      </wsdl:input>
      <wsdl:output name="getCourseDetailsResponse">
        <soap:body use="literal"/>
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="CoursesPortService">
    <wsdl:port binding="tns:CoursesPortSoap11" name="CoursesPortSoap11">
      <soap:address location="http://localhost:8080/ws"/>
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>
```