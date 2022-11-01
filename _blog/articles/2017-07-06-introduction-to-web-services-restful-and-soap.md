---
layout:     post
title:      Introduction to Web Services - Restful and SOAP
date:       2022-07-21 12:31:19
summary:    Introduction to Web Services - Restful and SOAP, This tutorial will help you understand the basics of web services and the different kinds of web services - REST and SOAP.
categories:  SwArchitecture
permalink:  /introduction-to-web-services-with-soap-and-rest
image: /images/spring-boot-application.png
---

This tutorial will help you understand the basics of web services and the different kinds of web services—REST and SOAP. 

## You will learn
- What is a web service?
- What are the advantages of web services?
- What are the different types of web services?
- What are RESTful web services?
- What are SOAP web services?



## You will require the following tools:
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

# What is a Web Service?

> Service delivered over the web

Is this really a complete definition? Is everything that's delivered over the web a "web service"?

Let's consider a web application we developed for our Spring MVC Course to manage todo's.  

![Image](/images/Web_Services_Web_Application_To_Manage_Todos.png)

Is this application a web service?

> Nope. The answer is no. This is a web application. not a web service.

We are back to square one.

- What is a web service?
- How is it different from a web application?

To understand this, let's consider an example.

Mark Zuckerberg likes the web application we developed to manage todo's. He thinks that our todo application is the right fit to integrate into Facebook to manage todo's. Can we use the existing application to do the integration? No.

Why? Because the existing application is designed for humans—other individuals. The output of the application is html, which is rendered by the browser to the end user. This is not designed for other applications.

What would be the difference in my thinking if I wanted to design the todo application so that other applications could interact with it?

> I would need to produce the output in a format that the consumers could understand. Then Facebook can call my web service and integrate it.

That leads us to the W3C definition of a Web Service.
> A software system designed to support interoperable machine-to-machine interaction over a network.

The key thing to understand is
- Web services are designed for machine-to-machine (or application-to-application) interaction.
- Web services should be interoperable (not platform dependent).
- Web services should allow communication over a network.

## Web Service Data Exchange Formats.

Facebook wants to talk to Todo Application. 
- Facebook is built on a variety of languages: PHP is used for the front-end, Erlang is used for chat; Java and C++ are also used. 
- The Todo application is built on Java using Spring MVC.

You can see that Facebook and the Todo Application use different implementation technologies. However, we would want them to talk to each other, as shown in the picture below:

![Image](/images/Web_Service_Basic_Interaction.png)

Both applications should be able to understand the request and response. 

So, what formats should we use for the request and response?

> They should be standard formats so that they can be used with various kinds of platforms. JSON and XML are quite popular data exchange formats.

## Types of Web Services

Not exactly types, but rather a broad classification
- SOAP
- REST

These are not really mutually exclusive. Some SOAP services can actually be RESTful. So, the question is: 

> When does a web service become a SOAP web service or a RESTful web service?

### SOAP

Previously, SOAP stood for Simple Object Access Protocol. In SOAP, the request and response are in XML format. However, not all types of XML are valid SOAP requests.

SOAP defines a standard XML format. We will use WSDL (Web Service Definition Language) to define the format of the request XML and the response XML.

Now let's say Facebook wants to know how to call the TODO Service. What should I give to the Facebook developer? 

I will give him a WSDL of the Todo service. It will explain
- What are the different services (operations) exposed by the server?
- What can a service (operation) be called? What url to use? (also called "end point").
- What should the structure of the request xml be?
- What should be the structure of the response xml?

The SOAP format defines a SOAP-Envelope which envelopes the entire document. 
- The SOAP-Header (optional) contains any information needed to identify the request. Also, part of the header is authentication and authorization information (signatures, encrypted information, etc.).
- The SOAP-Body contains the real XML content of the request or response.
- In the case of an error response, the server responds back with SOAP-Fault.

Isn't that cool?

### REST

First of all, REST does not define a standard message exchange format. You can build REST services with both XML and JSON. However, JSON is a more popular format than REST.

So, if it does not define a standard message exchange format, what is REST then?

> REST is a style of software architecture for distributed hypermedia systems.

"REST stands for *RE*presentational *S*tate *T*ransfer. The definitions of REST can be vague. So let's understand the important concepts.

A key abstraction in REST is a resource. There is no restriction on what can be a resource. A todo is a resource. A person on Facebook is a resource. 

A resource has a URI (Uniform Resource Identifier):
- /user/Ranga/todos/1
- /person/Ranga

A resource will have representation.
- XML
- HTML
- JSON

A resource will have a state. The representation of a resource should capture its current state.

When a resource is requested, we provide a representation of the resource. 

#### REST and HTTP

REST is built on top of HTTP (Hypertext Transfer Protocol). HTTP is the language of the web.

HTTP has a few important verbs.
- POST - Create a new resource
- GET - Read a resource
- PUT - Update an existing resource
- DELETE - Delete a resource

HTTP also defines standard response codes.
- 200 - SUCCESS
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 201 - CREATED
- 401 - UNAUTHORIZED
- 415 - UNSUPPORTED TYPE - Representation is not supported for the resource.
- 500 - SERVER ERROR

Restful Service Constraints
- Client-Server: There should be a service producer and a service consumer.
- The interface (URL) is uniform and exposes resources. The interface uses nouns (not actions).
- The service is stateless. Even if the service is called 10 times, the result must be the same.
- The service result should be cacheable. HTTP cache, for example.
- Services should assume a layered architecture. The client should not assume direct connection to the server-it might be getting info from a middle layer-cache.

### Richardson Maturity Model 

The **Richardson Maturity Model** defines the maturity level of a restful web service. The following are the different levels and their characteristics:
- **Level 0** : Expose SOAP web services in the REST style. Expose action-based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat, etc) using REST.
- **Level 1** : Expose resources with proper URI’s (using nouns). For example, http://server/accounts and http://server/accounts/10. However, HTTP methods are not used.
- **Level 2** : Resources use proper URIs and HTTP methods. For example, to update an account, you do a PUT to You create an account, you do a POST to Uri’s looks like posts/1/comments/5 and accounts/1/friends/1.
- **Level 3** : HATEOAS (Hypermedia As The Engine Of Application State). You will know not only about the information being requested but also about the next possible actions that the service consumer can take. When requesting information about a Facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments, and how to retrieve his friend’s list.

#### Creating RESTful APIs

The following are the important things to consider when designing RESTful APIs:
- While designing any API, the most important thing is to think about the api consumer, i.e., the client who is going to use the service. What are his needs? Does the service make sense to him? Does the request and response format make sense to him?
- For the rest, we think nouns (resources) and not verbs (not actions). So, URIs should represent resources. URIs should be hierarchical and as self-descriptive as possible. Prefer plurals.
- Always use HTTP methods. 
  - GET : I should not update anything. should be idempotent (same result in multiple calls). 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST) are possible return codes.
  - POST : should create a new resource. Ideally, return JSON with a link to the newly created resource. same return codes as possible. In addition, return code 201 (CREATED) is possible.
  - PUT : Update an existing resource. update client details. Possible Return Codes: 200 (OK)
  - DELETE : Used to delete a resource.

## REST vs SOAP

REST and SOAP are not really comparable. REST is an architectural style. SOAP is a message exchange format.

Let's compare the popular implementations of REST and SOAP styles.
- RESTful Sample Implementation: JSON over HTTP
- SOAP Sample Implementation: XML over SOAP over HTTP

Following are the important things to consider:
- REST is built over a simple HTTP protocol. SOAP services are more complex to implement and more complex to consume.
- REST has better performance and scalability. REST reads can be cached. SOAP reads cannot be cached.
- REST permits many different data formats (JSON is the most popular choice), whereas SOAP only permits XML.
- SOAP services have a well defined structure and interface (WSDL) and have a set of well defined standards (WS-Security, WS-AtomicTransaction, and WS-ReliableMessaging). Documentation standards for REST are evolving (we will use Swagger in this course).

## The Advantages of Web Services

- Reuse: Mark Zuckerberg does not need to invest to build a todo application of his own.
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
