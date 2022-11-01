---
layout:     post
title:      Spring Boot SOAP and RESTful Web Services Tutorial for Beginners
date:       2022-10-17 12:31:19
summary:    Developing SOAP and RESTful Web Services is fun. The combination of Spring Boot, Spring Web MVC, Spring Web Services and JPA makes it even more fun. There are two parts to this course - RESTful web services and SOAP Web Services.
categories: SpringBoot
permalink:  /soap-and-restful-web-services-with-spring-boot-and-jpa
image: /images/spring-boot-application.png
---

Learn how to create awesome SOAP and RESTful web services with Spring and Spring Boot.

Developing SOAP and RESTful web services is fun. The combination of Spring Boot, Spring Web MVC, Spring Web Services and JPA makes it even more fun.

There are two parts to this course - RESTful web services and SOAP Web Services

Architectures are moving towards microservices. RESTful web services are the first step to developing great microservices. Spring Boot, in combination with Spring Web MVC (also called Spring REST) makes it easy to develop RESTful web services. 

In this part of the course, you will learn the basics of RESTful web services developing resources for a social media application. You will learn to implement these resources with multiple features - versioning, exception handling, documentation (Swagger), basic authentication (Spring Security), filtering and HATEOAS. You will learn the best practices in designing RESTful web services.

In this part of the course, you will be using Spring (Dependency Management), Spring MVC (or Spring REST), Spring Boot, Spring Security (Authentication and Authorization), Spring Boot Actuator (Monitoring), Swagger (Documentation), Maven (dependencies management), Eclipse (IDE), Postman (REST Services Client) and Tomcat Embedded Web Server. We will help you set up each one of these.

While the use of SOAP Web Services is on the way down, there are still considerable number of web services using this approach. 

In this part of the course, you will learn the basics of implementing SOAP Web Services developing a few web services for a course management application. You will learn to use a Contract first approach - defining XSD (XML Schema Definition) for your requests and responses. You will learn about WSDL (SOAP Header, SOAP Body and SOAP Fault), XSD (XML Schema Definition) and JAXB (Java API for XML Binding). You will implementing three SOAP web services with exception handling and basic security (with WS Security).

In this part of the course, you will be using Spring (Dependency Management), Spring Web Services , Spring Boot, Spring Security (Authentication and Authorization), Swagger (Documentation), Maven (dependencies management), Eclipse (IDE), Wizdler (SOAP Services Chrome Plugin) and Tomcat Embedded Web Server. We will help you set up each one of these.

## Course Link
[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://links.in28minutes.com/MISC-SPRING-WEB-SERVICES){:target="_blank"}



### You will learn
- You will be able to develop and design RESTful web services
- You will understand the best practices in designing RESTful web services
- You will be able to develop and design SOAP web services
- You will understand how to connect RESTful Services to a backend with JPA
- You will understand how to implement Exception Handling, Validation, HATEOAS and filtering for RESTful Web Services.
- You will understand how to version your RESTful Web Services
- You will understand how to monitor RESTful Services with Spring Boot Actuator
- You will understand how to document RESTful Web Services with Swagger
- You will understand about WSDL, SOAP Header, SOAP Body, SOAP Fault, XSD, JAXB and EndPoint
- How to implement basic security with WS Security for SOAP Web Services?


## Installing Tools
- Installation Video : https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
- GIT Repository For Installation : https://github.com/in28minutes/getting-started-in-5-steps
- PDF : https://github.com/in28minutes/SpringIn28Minutes/blob/master/InstallationGuide-JavaEclipseAndMaven_v2.pdf

## Running Examples
- Download the zip or clone the Git repository.
- Unzip the zip file (if you downloaded one)
- Open Command Prompt and Change directory (cd) to folder containing pom.xml
- Open Eclipse 
   - File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip
   - Select the right project
- Choose the Spring Boot Application file (search for @SpringBootApplication)
- Right Click on the file and Run as Java Application
- You are all Set
- For help : use our installation guide - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3

## Course Overview

|Title|Github Folder|
| -------------------- |--------------|
|Introduction To Web Services|None|
|SOAP Web Services with Spring and Spring Boot|[Project Folder on Github](https://github.com/in28minutes/spring-web-services/tree/master/soap-web-services){:target='_blank'}|
|RESTful Web Services with Spring and Spring Boot|[Project Folder on Github](https://github.com/in28minutes/spring-web-services/tree/master/restful-web-services){:target='_blank'}|
|Connecting RESTful Web Service to JPA|[Project Folder on Github](){:target='_blank'}|
|RESTful Web Services - Best Practices|None|

## 3 Bonus Sections - Introduction to Spring, Spring Boot and JPA

|Title|Category|Github|
| -------------------- |:------------------:|--------------|
|Spring Framework in 10 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-web-services/tree/master/spring-in-10-steps){:target='_blank'}|
|Spring Boot in 10 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-web-services/tree/master/springboot-in-10-steps){:target='_blank'}|
|JPA in 10 Steps|Introduction|[Project Folder on Github](https://github.com/in28minutes/spring-web-services/tree/master/jpa-in-10-steps){:target='_blank'}|

## Introduction to Web Services

### Web Service

> Service delivered over the web?

![Image](/images/Web_Services_Web_Application_To_Manage_Todos.png)

> Is the Todo Management Application a Web Service?

- It delivers HTML output - Not consumable by other applications.

![Image](/images/Web_Services_Application_Layers.png)

- Can I reuse the Business Layer by creating a JAR?
  - Not Platform independent
  - Communication of Changes
  - Managing Dependencies - like Database


> How can I make my Todo application consumable by other applications?


> That where we get into the concept of a web service!

![Image](/images/Web_Service_Multiple_Application_Interaction.png)
![Image](/images/Web_Service_Single_Application_Interaction.png)
![Image](/images/Web_Service_Basic_Interaction.png)

#### Web Service - W3C definition

> Software system designed to support interoperable machine-to-machine interaction over a network.


#### 3 Keys

- Designed for machine-to-machine (or application-to-application) interaction
- Should be interoperable - Not platform dependent
- Should allow communication over a network

#### How?

> How does data exchange between applications take place?

![Image](/images/Web_Service_Z_ApplicationA_WebService.png)
![Image](/images/Web_Service_Z_ApplicationA_WebService_Request_Response.png)

> How can we make web services platform independent?

![Image](/images/Web_Service_Z_PlatformIndependence.png)

#### XML
```xml
        <getCourseDetailsRequest>
            <id>Course1</id>
        </getCourseDetailsRequest>
```

#### JSON

```json
[
  {
    "id": 1,
    "name": "Even",
    "birthDate": "2017-07-10T07:52:48.270+0000"
  },
  {
    "id": 2,
    "name": "Abe",
    "birthDate": "2017-07-10T07:52:48.270+0000"
  }
]
```

> How does the Application A know the format of Request and Response?

![Image](/images/Web_Service_Service_Definition.png)

> How does Application A and Web Service convert its internal data to (XML or JSON)?

![Image](/images/Web_Service_Z_ApplicationA_WebService_Request_Response.png)

#### Key Terminology

- Request and  Response
- Message Exchange Format
  - XML and JSON

#### Key Terminology

- Service Provider or Server
- Service Consumer or Client
- Service Definition

#### Key Terminology
- Transport
  - HTTP and MQ
![Image](/images/soapoverhttp.png)
![Image](/images/soapovermq.png)
### Web Service Groups
- SOAP-based
- REST-styled

> SOAP and REST are not really comparable. 

#### SOAP

##### SOAP?

![Image](/images/Web_Service_Basic_Interaction_SOAP.png)

```xml
        <getCourseDetailsRequest>
            <id>Course1</id>
        </getCourseDetailsRequest>
```

![Image](/images/Web_Service_SOAP-Envelope.svg.png)

![Image](/images/Web_Service_Basic_Interaction_SOAP_2.png)

```xml
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

##### SOAP
  - Format
  	- SOAP XML Request
  	- SOAP XML Response
  - Transport
    - SOAP over MQ
    - SOAP over HTTP
  - Service Definition
    - WSDL 

## SOAP Web Services with Spring and Spring Boot

### Step 01 - Initialize a Spring Web Services application with Spring Boot

Creating a Spring Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-soap-web-service.png "Spring Initializr")   

- Launch Spring Initializr and choose the following
  - Choose Version 2.3.1.RELEASE or greater
  - Choose Group as shown in the figure
  - Choose Artifact as shown in the figure
  - Choose Dependencies as shown in the figure
- Click Generate Project.
- Import the project into Eclipse.


##### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.in28minutes.soap.webservices</groupId>
	<artifactId>soap-course-management</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>soap-course-management</name>
	<description>Demo project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.1.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web-services</artifactId>
		</dependency>

		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/SoapCourseManagementApplication.java

```java
package com.in28minutes.soap.webservices.soapcoursemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SoapCourseManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoapCourseManagementApplication.class, args);
	}
}
```

##### /src/main/resources/application.properties

```properties
```

##### /src/test/java/com/in28minutes/soap/webservices/soapcoursemanagement/SoapCourseManagementApplicationTests.java

```java
package com.in28minutes.soap.webservices.soapcoursemanagement;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SoapCourseManagementApplicationTests {

	@Test
	public void contextLoads() {
	}

}
```


### Step 02 - Overview of creating SOAP Web Service using Contract First Approach

Lets first define an XSD.

### Step 03 - Define Request and Response XML Structure

##### /example-files/Request.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetCourseDetailsRequest xmlns="http://in28minutes.com/courses" 
xsi:schemaLocation="http://in28minutes.com/courses course-details.xsd" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<id>123</id> <!-- numbers  -->
</GetCourseDetailsRequest>
```

##### /example-files/Response.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetCourseDetailsResponse xmlns="http://in28minutes.com/courses">
	<CourseDetails>
		<id>123</id>
		<name>Spring in28minutes</name>
		<description>You would learn the basics of Spring Framework</description>
	</CourseDetails>
</GetCourseDetailsResponse>
```

### Step 04 - Define XML Schema Definition (XSD) for Request - GetCourseDetailsRequest

##### /example-files/course-details.xsd

```
<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://www.w3.org/2001/XMLSchema" 
targetNamespace="http://in28minutes.com/courses" 
xmlns:tns="http://in28minutes.com/courses" elementFormDefault="qualified">
	<element name="GetCourseDetailsRequest">
		<complexType>
			<sequence>
				<element name= "id" type="integer"></element>
			</sequence>	
		</complexType>
	</element>
</schema>

<!-- 
<GetCourseDetailsRequest xmlns="http://in28minutes.com/courses">
	<id>123</id> 
</GetCourseDetailsRequest>
 -->
```

### Step 05 - Define XML Schema Definition (XSD) for Respone - GetCourseDetailsResponse

##### /example-files/Response.xml Modified
```
<?xml version="1.0" encoding="UTF-8"?>
<GetCourseDetailsResponse xmlns="http://in28minutes.com/courses"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://in28minutes.com/courses course-details.xsd">
	<CourseDetails>
		<id>123</id>
		<name>Spring in28minutes</name>
		<description>You would learn the basics of Spring Framework</description>
	</CourseDetails>
</GetCourseDetailsResponse>
```
##### /example-files/course-details.xsd Modified
```
<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://www.w3.org/2001/XMLSchema" 
targetNamespace="http://in28minutes.com/courses" 
xmlns:tns="http://in28minutes.com/courses" elementFormDefault="qualified">
	
	<element name="GetCourseDetailsRequest">
		<complexType>
			<sequence>
				<element name= "id" type="integer"></element>
			</sequence>	
		</complexType>
	</element>
	
	<element name="GetCourseDetailsResponse">
		<complexType>
			<sequence>
				<element name= "CourseDetails" type="tns:CourseDetails"></element>
			</sequence>	
		</complexType>
	</element>
	
	<complexType name="CourseDetails">
		<sequence>
			<element name="id" type="integer"/>
			<element name="name" type="string"/>
			<element name="description" type="string"/>
		</sequence>
	</complexType>
	
</schema>	
```

### Step 06 - More about XML Schema Definition and Implementing XSD Best Practices

##### /example-files/course-details.xsd Modified
```
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" 
targetNamespace="http://in28minutes.com/courses" 
xmlns:tns="http://in28minutes.com/courses" elementFormDefault="qualified">
	
	<xs:element name="GetCourseDetailsRequest">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "id" type="xs:integer"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
	
	<xs:element name="GetCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "CourseDetails" type="tns:CourseDetails"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
	
	<xs:complexType name="CourseDetails">
		<xs:sequence>
			<xs:element name="id" type="xs:integer"/>
			<xs:element name="name" type="xs:string"/>
			<xs:element name="description" type="xs:string"/>
		</xs:sequence>
	</xs:complexType>
	
</xs:schema>
```

### Step 07 - Introduction to Java API for XML Binding (JAXB) and Configuring JAXB 2 Maven Plugin

### Step 08 - Configuring an Endpoint for GetCourseDetailsRequest

##### /pom.xml Modified
New Lines
```
<plugin>
	<groupId>org.codehaus.mojo</groupId>
	<artifactId>jaxb2-maven-plugin</artifactId>
	<version>1.6</version>
	<executions>
		<execution>
			<id>xjc</id>
			<goals>
				<goal>xjc</goal>
			</goals>
		</execution>
	</executions>
	<configuration>
		<schemaDirectory>${project.basedir}/src/main/resources</schemaDirectory>
		<outputDirectory>${project.basedir}/src/main/java</outputDirectory>
		<clearOutputDir>false</clearOutputDir>
	</configuration>
</plugin>
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/CourseDetailsEndpoint.java New

```java
package com.in28minutes.soap.webservices.soapcoursemanagement.soap;

import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.in28minutes.courses.CourseDetails;
import com.in28minutes.courses.GetCourseDetailsRequest;
import com.in28minutes.courses.GetCourseDetailsResponse;

@Endpoint
public class CourseDetailsEndpoint {

	// method
	// input - GetCourseDetailsRequest
	// output - GetCourseDetailsResponse

	// http://in28minutes.com/courses
	// GetCourseDetailsRequest
	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "GetCourseDetailsRequest")
	@ResponsePayload
	public GetCourseDetailsResponse processCourseDetailsRequest(@RequestPayload GetCourseDetailsRequest request) {
		GetCourseDetailsResponse response = new GetCourseDetailsResponse();
		
		CourseDetails courseDetails = new CourseDetails();
		courseDetails.setId(request.getId());
		courseDetails.setName("Microservices Course");
		courseDetails.setDescription("That would be a wonderful course!");
		
		response.setCourseDetails(courseDetails);
		
		return response;
	}

}
```

##### /src/main/resources/course-details.xsd New

```
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" 
targetNamespace="http://in28minutes.com/courses" 
xmlns:tns="http://in28minutes.com/courses" elementFormDefault="qualified">
	
	<xs:element name="GetCourseDetailsRequest">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "id" type="xs:int"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
	
	<xs:element name="GetCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "CourseDetails" type="tns:CourseDetails"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
	
	<xs:complexType name="CourseDetails">
		<xs:sequence>
			<xs:element name="id" type="xs:int"/>
			<xs:element name="name" type="xs:string"/>
			<xs:element name="description" type="xs:string"/>
		</xs:sequence>
	</xs:complexType>
	
</xs:schema>
```

### Step 09 - Spring Web Services Configuration - Message Dispatcher Servlet

### Step 10 - Spring Web Services Configuration - Generating WSDL

##### /pom.xml Modified
New Lines
```
		<dependency>
			<groupId>wsdl4j</groupId>
			<artifactId>wsdl4j</artifactId>
		</dependency>
```
##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/WebServiceConfig.java New

```java
package com.in28minutes.soap.webservices.soapcoursemanagement.soap;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.ws.config.annotation.EnableWs;
import org.springframework.ws.transport.http.MessageDispatcherServlet;
import org.springframework.ws.wsdl.wsdl11.DefaultWsdl11Definition;
import org.springframework.xml.xsd.SimpleXsdSchema;
import org.springframework.xml.xsd.XsdSchema;

//Enable Spring Web Services
@EnableWs
// Spring Configuration
@Configuration
public class WebServiceConfig {
	// MessageDispatcherServlet
	// ApplicationContext
	// url -> /ws/*

	@Bean
	public ServletRegistrationBean messageDispatcherServlet(ApplicationContext context) {
		MessageDispatcherServlet messageDispatcherServlet = new MessageDispatcherServlet();
		messageDispatcherServlet.setApplicationContext(context);
		messageDispatcherServlet.setTransformWsdlLocations(true);
		return new ServletRegistrationBean(messageDispatcherServlet, "/ws/*");
	}

	// /ws/courses.wsdl
	// course-details.xsd
	@Bean(name = "courses")
	public DefaultWsdl11Definition defaultWsdl11Definition(XsdSchema coursesSchema) {
		DefaultWsdl11Definition definition = new DefaultWsdl11Definition();
		definition.setPortTypeName("CoursePort");
		definition.setTargetNamespace("http://in28minutes.com/courses");
		definition.setLocationUri("/ws");
		definition.setSchema(coursesSchema);
		return definition;
	}

	@Bean
	public XsdSchema coursesSchema() {
		return new SimpleXsdSchema(new ClassPathResource("course-details.xsd"));
	}
}
```

### Step 11 - Using Wizdler to execute SOAP Requests

### Step 12 - Implementing a service - Course Details Service - backend with in memory array list

##### /pom.xml Modified
New Lines
```
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
		</dependency>
```
##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/CourseDetailsEndpoint.java Modified
```java
@Endpoint
public class CourseDetailsEndpoint {
	
	@Autowired
	CourseDetailsService service;

	// method
	// input - GetCourseDetailsRequest
	// output - GetCourseDetailsResponse

	// http://in28minutes.com/courses
	// GetCourseDetailsRequest
	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "GetCourseDetailsRequest")
	@ResponsePayload
	public GetCourseDetailsResponse processCourseDetailsRequest(@RequestPayload GetCourseDetailsRequest request) {
		
		Course course = service.findById(request.getId());

		return mapCourse(course);
	}

	private GetCourseDetailsResponse mapCourse(Course course) {
		GetCourseDetailsResponse response = new GetCourseDetailsResponse();
		
		CourseDetails courseDetails = new CourseDetails();
		
		courseDetails.setId(course.getId());
		
		courseDetails.setName(course.getName());
		
		courseDetails.setDescription(course.getDescription());
		
		response.setCourseDetails(courseDetails);
		
		return response;
	}

}
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/bean/Course.java New

```java
package com.in28minutes.soap.webservices.soapcoursemanagement.soap.bean;

public class Course {
	private int id;
	private String name;
	private String description;
	
	
	public Course(int id, String name, String description) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return String.format("Course [id=%s, name=%s, description=%s]", id, name, description);
	}

}
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/service/CourseDetailsService.java New

```java
package com.in28minutes.soap.webservices.soapcoursemanagement.soap.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Component;

import com.in28minutes.soap.webservices.soapcoursemanagement.soap.bean.Course;

@Component
public class CourseDetailsService {

	private static List<Course> courses = new ArrayList<>();

	static {
		Course course1 = new Course(1, "Spring", "10 Steps");
		courses.add(course1);

		Course course2 = new Course(2, "Spring MVC", "10 Examples");
		courses.add(course2);

		Course course3 = new Course(3, "Spring Boot", "6K Students");
		courses.add(course3);

		Course course4 = new Course(4, "Maven", "Most popular maven course on internet!");
		courses.add(course4);
	}

	// course - 1
	public Course findById(int id) {
		for (Course course : courses) {
			if (course.getId() == id)
				return course;
		}
		return null;
	}

	// courses
	public List<Course> findAll() {
		return courses;
	}

	public int deleteById(int id) {
		Iterator<Course> iterator = courses.iterator();
		while (iterator.hasNext()) {
			Course course = iterator.next();
			if (course.getId() == id) {
				iterator.remove();
				return 1;
			}
		}
		return 0;
	}

	// updating course & new course
}
```

### Step 13 - Implementing SOAP Web Service for GetAllCourseDetailsRequest


##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/CourseDetailsEndpoint.java Modified
New Lines
```

@Endpoint
public class CourseDetailsEndpoint {

	@Autowired
	CourseDetailsService service;

	// method
	// input - GetCourseDetailsRequest
	// output - GetCourseDetailsResponse

	// http://in28minutes.com/courses
	// GetCourseDetailsRequest
	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "GetCourseDetailsRequest")
	@ResponsePayload
	public GetCourseDetailsResponse processCourseDetailsRequest(@RequestPayload GetCourseDetailsRequest request) {

		Course course = service.findById(request.getId());

		return mapCourseDetails(course);
	}

	private GetCourseDetailsResponse mapCourseDetails(Course course) {
		GetCourseDetailsResponse response = new GetCourseDetailsResponse();
		response.setCourseDetails(mapCourse(course));
		return response;
	}

	private GetAllCourseDetailsResponse mapAllCourseDetails(List<Course> courses) {
		GetAllCourseDetailsResponse response = new GetAllCourseDetailsResponse();
		for (Course course : courses) {
			CourseDetails mapCourse = mapCourse(course);
			response.getCourseDetails().add(mapCourse);
		}
		return response;
	}

	private CourseDetails mapCourse(Course course) {
		CourseDetails courseDetails = new CourseDetails();

		courseDetails.setId(course.getId());

		courseDetails.setName(course.getName());

		courseDetails.setDescription(course.getDescription());
		return courseDetails;
	}

	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "GetAllCourseDetailsRequest")
	@ResponsePayload
	public GetAllCourseDetailsResponse processAllCourseDetailsRequest(
			@RequestPayload GetAllCourseDetailsRequest request) {

		List<Course> courses = service.findAll();

		return mapAllCourseDetails(courses);
	}

}
```

##### /src/main/resources/course-details.xsd Modified
New Lines
```
<xs:element name="GetAllCourseDetailsResponse">
	<xs:complexType>
		<xs:sequence>
			<xs:element name="CourseDetails" type="tns:CourseDetails" 
						maxOccurs="unbounded"/>
		</xs:sequence>	
	</xs:complexType>
</xs:element>


<xs:complexType name="CourseDetails">
	<xs:sequence>
		<xs:element name="id" type="xs:int"/>
		<xs:element name="name" type="xs:string"/>
		<xs:element name="description" type="xs:string"/>
	</xs:sequence>
</xs:complexType>

```

### Step 14 - Quick introduction to different parts of a WSDL
![Image](/images/Web_Services_WSDL_HighLevel.png)
![Image](/images/Web_Services_WSDL_LowLevel.png)
![Image](/images/SOAP_WEB_SERVICE_Initial_Setup_Overview.png)
![Image](/images/SOAPWebServiceClientAndServiceProvider.png)

### Step 15 - Implementing SOAP Web Service for DeleteCourseDetailsRequest

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/CourseDetailsEndpoint.java Modified
New Lines

```java

@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "DeleteCourseDetailsRequest")
@ResponsePayload
public DeleteCourseDetailsResponse deleteCourseDetailsRequest(
		@RequestPayload DeleteCourseDetailsRequest request) {

	int status = service.deleteById(request.getId());

	DeleteCourseDetailsResponse response = new DeleteCourseDetailsResponse();
	response.setStatus(status);
	
	return response;
}

```

##### /src/main/resources/course-details.xsd Modified
New Lines
```
	<xs:element name="DeleteCourseDetailsRequest">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "id" type="xs:int"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>

	<xs:element name="DeleteCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<!-- 1 is success 0 for failure -->
				<xs:element name= "status" type="xs:int"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
```

### Step 16 - Improving the DeleteCourseDetailsRequest - Using an Enum for Status
### Step 17 - Exception Handling and SOAP Fault Responses

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/CourseDetailsEndpoint.java Modified

```java
	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "GetCourseDetailsRequest")
	@ResponsePayload
	public GetCourseDetailsResponse processCourseDetailsRequest(@RequestPayload GetCourseDetailsRequest request) {

		Course course = service.findById(request.getId());

		if (course == null)
			throw new CourseNotFoundException("Invalid Course Id " + request.getId());

		return mapCourseDetails(course);
	}

	@PayloadRoot(namespace = "http://in28minutes.com/courses", localPart = "DeleteCourseDetailsRequest")
	@ResponsePayload
	public DeleteCourseDetailsResponse deleteCourseDetailsRequest(@RequestPayload DeleteCourseDetailsRequest request) {

		Status status = service.deleteById(request.getId());

		DeleteCourseDetailsResponse response = new DeleteCourseDetailsResponse();
		response.setStatus(mapStatus(status));

		return response;
	}

	private com.in28minutes.courses.Status mapStatus(Status status) {
		if (status == Status.FAILURE)
			return com.in28minutes.courses.Status.FAILURE;
		return com.in28minutes.courses.Status.SUCCESS;
	}
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/exception/CourseNotFoundException.java New

```java
package com.in28minutes.soap.webservices.soapcoursemanagement.soap.exception;

import org.springframework.ws.soap.server.endpoint.annotation.FaultCode;
import org.springframework.ws.soap.server.endpoint.annotation.SoapFault;

@SoapFault(faultCode=FaultCode.CUSTOM, 
	customFaultCode="{http://in28minutes.com/courses}001_COURSE_NOT_FOUND")
public class CourseNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 3518170101751491969L;

	public CourseNotFoundException(String message) {
		super(message);
	}

}
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/service/CourseDetailsService.java Modified
```java
	
	public enum Status {
		SUCCESS, FAILURE;
	}

	public Status deleteById(int id) {
		Iterator<Course> iterator = courses.iterator();
		while (iterator.hasNext()) {
			Course course = iterator.next();
			if (course.getId() == id) {
				iterator.remove();
				return Status.SUCCESS;
			}
		}
		return Status.FAILURE;
	}

```

##### /src/main/resources/course-details.xsd Modified
New Lines
```
	<xs:element name="DeleteCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name= "status" type="tns:Status"/>
			</xs:sequence>	
		</xs:complexType>
	</xs:element>
	
	<xs:simpleType name="Status">
		<xs:restriction base="xs:string">
			<xs:enumeration value="SUCCESS"/>
			<xs:enumeration value="FAILURE"/>
		</xs:restriction>
	</xs:simpleType>

```

### Step 18 - Implementing Security for SOAP Web Services with WS Security

##### /example-files/Request-Security.xml New

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
	<Header>
		<wsse:Security
			xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
			mustUnderstand="1">
			<wsse:UsernameToken>
				<wsse:Username>user</wsse:Username>
				<wsse:Password>password</wsse:Password>
			</wsse:UsernameToken>
		</wsse:Security>
	</Header>
	<Body>
		<GetCourseDetailsRequest xmlns="http://in28minutes.com/courses">
			<id>1</id>
		</GetCourseDetailsRequest>
	</Body>
</Envelope>
```
##### /example-files/Response-Fault.xml New

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header />
	<SOAP-ENV:Body>
		<SOAP-ENV:Fault>
			<faultcode xmlns:ns0="http://in28minutes.com/courses">ns0:001_COURSE_NOT_FOUND</faultcode>
			<faultstring xml:lang="en">Invalid Course Id 1234</faultstring>
		</SOAP-ENV:Fault>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

##### /pom.xml Modified
New Lines
```
		<dependency>
			<groupId>org.springframework.ws</groupId>
			<artifactId>spring-ws-security</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.security</groupId>
					<artifactId>spring-security-core</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>com.sun.xml.wss</groupId>
			<artifactId>xws-security</artifactId>
			<version>3.0</version>
			<exclusions>
				<exclusion>
					<groupId>javax.xml.crypto</groupId>
					<artifactId>xmldsig</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>javax.activation</groupId>
			<artifactId>activation</artifactId>
			<version>1.1.1</version>
		</dependency>
		
```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/WebServiceConfig.java Modified
```java
	

	//XwsSecurityInterceptor
	@Bean
	public XwsSecurityInterceptor securityInterceptor(){
		XwsSecurityInterceptor securityInterceptor = new XwsSecurityInterceptor();
		//Callback Handler -> SimplePasswordValidationCallbackHandler
		securityInterceptor.setCallbackHandler(callbackHandler());
		//Security Policy -> securityPolicy.xml
		securityInterceptor.setPolicyConfiguration(new ClassPathResource("securityPolicy.xml"));
		return securityInterceptor;
	}
	
	@Bean
	public SimplePasswordValidationCallbackHandler callbackHandler() {
		SimplePasswordValidationCallbackHandler handler = new SimplePasswordValidationCallbackHandler();
		handler.setUsersMap(Collections.singletonMap("user", "password"));
		return handler;
	}

	//Interceptors.add -> XwsSecurityInterceptor
	@Override
	public void addInterceptors(List<EndpointInterceptor> interceptors) {
		interceptors.add(securityInterceptor());
	}

```

##### /src/main/java/com/in28minutes/soap/webservices/soapcoursemanagement/soap/exception/CourseNotFoundException.java Modified
```java
@SoapFault(faultCode = FaultCode.CUSTOM, customFaultCode = "{http://in28minutes.com/courses}001_COURSE_NOT_FOUND")
public class CourseNotFoundException extends RuntimeException {

```

##### /src/main/resources/course-details.xsd Modified
```
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
	targetNamespace="http://in28minutes.com/courses" xmlns:tns="http://in28minutes.com/courses"
	elementFormDefault="qualified">

	<xs:element name="GetCourseDetailsRequest">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="id" type="xs:int" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>

	<xs:element name="GetCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="CourseDetails" type="tns:CourseDetails" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>

	<xs:element name="GetAllCourseDetailsRequest">
		<xs:complexType>
		</xs:complexType>
	</xs:element>

	<xs:element name="GetAllCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="CourseDetails" type="tns:CourseDetails"
					maxOccurs="unbounded" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>

	<xs:element name="DeleteCourseDetailsRequest">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="id" type="xs:int" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>

	<xs:element name="DeleteCourseDetailsResponse">
		<xs:complexType>
			<xs:sequence>
				<xs:element name="status" type="tns:Status" />
			</xs:sequence>
		</xs:complexType>
	</xs:element>

	<xs:simpleType name="Status">
		<xs:restriction base="xs:string">
			<xs:enumeration value="SUCCESS" />
			<xs:enumeration value="FAILURE" />
		</xs:restriction>
	</xs:simpleType>

	<xs:complexType name="CourseDetails">
		<xs:sequence>
			<xs:element name="id" type="xs:int" />
			<xs:element name="name" type="xs:string" />
			<xs:element name="description" type="xs:string" />
		</xs:sequence>
	</xs:complexType>

</xs:schema>
```
##### /src/main/resources/securityPolicy.xml New

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xwss:SecurityConfiguration 
	xmlns:xwss="http://java.sun.com/xml/ns/xwss/config">
	<xwss:RequireUsernameToken
		passwordDigestRequired="false" nonceRequired="false" />
</xwss:SecurityConfiguration>
```

### Example Requests and Responses

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
	<Header>
		<wsse:Security
			xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
			mustUnderstand="1">
			<wsse:UsernameToken>
				<wsse:Username>user</wsse:Username>
				<wsse:Password>password</wsse:Password>
			</wsse:UsernameToken>
		</wsse:Security>
	</Header>
	<Body>
		<GetCourseDetailsRequest xmlns="http://in28minutes.com/courses">
			<id>1</id>
		</GetCourseDetailsRequest>
	</Body>
</Envelope>
```

##### /example-files/Request.xml

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
	<Body>
		<GetCourseDetailsRequest xmlns="http://in28minutes.com/courses">
			<id>1</id>
		</GetCourseDetailsRequest>
	</Body>
</Envelope>
```

##### /example-files/Response-Fault.xml

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header />
	<SOAP-ENV:Body>
		<SOAP-ENV:Fault>
			<faultcode xmlns:ns0="http://in28minutes.com/courses">ns0:001_COURSE_NOT_FOUND</faultcode>
			<faultstring xml:lang="en">Invalid Course Id 1234</faultstring>
		</SOAP-ENV:Fault>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

##### /example-files/Response.xml

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetCourseDetailsResponse xmlns:ns2="http://in28minutes.com/courses">
            <ns2:CourseDetails>
                <ns2:id>1</ns2:id>
                <ns2:name>Spring</ns2:name>
                <ns2:description>10 Steps</ns2:description>
            </ns2:CourseDetails>
        </ns2:GetCourseDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```


### REST

> REpresentational State Transfer


> REST is a style of software architecture for distributed hypermedia systems

#### Make best use of HTTP

![Image](/images/REST_Block_Structure.png)

![Image](/images/Web_Service_Browser_Server__Interaction.png)

#### Key abstraction - Resource

- A resource has an URI (Uniform Resource Identifier)
 - /users/Ranga/todos/1
 - /users/Ranga/todos
 - /users/Ranga
- A resource can have different representations
 - XML
 - HTML
 - JSON

##### Example

- Create a User - POST    /users
- Delete a User - DELETE  /users/1
- Get all Users - GET     /users
- Get one Users - GET     /users/1 

#### REST

- Data Exchange Format
	- No Restriction. JSON is popular
- Transport
	- Only HTTP
- Service Definition
	- No Standard. WADL/Swagger/...

#### REST vs SOAP

- Restrictions vs Architectural Approach
- Data Exchange Format
- Service Definition
- Transport
- Ease of implementation

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetCourseDetailsRequest xmlns:ns2="http://in28minutes.com/courses">
                <ns2:id>Course1</ns2:id>
        </ns2:GetCourseDetailsRequest>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <ns2:GetCourseDetailsResponse xmlns:ns2="http://in28minutes.com/courses">
            <ns2:CourseDetails>
                <ns2:id>Course1</ns2:id>
                <ns2:name>Spring</ns2:name>
                <ns2:description>10 Steps</ns2:description>
            </ns2:CourseDetails>
        </ns2:GetCourseDetailsResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

### Richardson Maturity Model

#### Level 0

##### Expose SOAP web services in REST style
- http://server/getPosts
- http://server/deletePosts
- http://server/doThis


#### Level 1

- Expose Resources with proper URI
	- http://server/accounts
	- http://server/accounts/10
- Improper use of HTTP Methods

#### Level 2

- Level 1 + HTTP Methods

#### Level 3

- Level 2 + HATEOAS
	- Data + Next Possible Actions

#### Best Practices in RESTful Design

- Consumer First
- Make best use of HTTP
  - Request Methods
    - GET
    - POST
    - PUT
    - DELETE
  - Response Status
    - 200 - SUCCESS
    - 404 - RESOURCE NOT FOUND
    - 400 - BAD REQUEST
    - 201 - CREATED
    - 401 - UNAUTHORIZED
    - 500 - SERVER ERROR
- No Secure Info in URI
- Use Plurals
  - Prefer /users to /user
  - Prefer /users/1 to /user/1
- Use Nouns for Resources
- For Exceptions
  - Define a Consistent Approach
    - /search
    - PUT /gists/{id}/star
    - DELETE /gists/{id}/star
- Consumer First
- Define Organizational Standards
  - YARAS - https://github.com/darrin/yaras
    - Naming Resources
    - Request Response Structures
    - Common Features Standardization
      - Error Handling
      - Versioning
      - Searching
      - Filtering
      - Support for Mock Responses
      - HATEOAS
- Build a Framework
- Focus on Decentralized Governance

For more - http://www.in28minutes.com/microservices-and-restful-services-with-spring-boot-for-beginners

