---
layout:     post
title:      Spring Boot vs Spring MVC - How do they compare?
date:       2017-02-01 12:31:19
summary:    How does Spring Boot compare to Spring MVC? 
categories: [Spring Boot, Spring Boot Web Application]
permalink:  /creating-web-application-with-spring-boot
---

What is Spring Boot? What is Spring MVC Framework? What are their goals? How do they compare?
 
## You will learn
- Get an overview of Spring MVC Framework
- What are the problems that Spring MVC Framework wants to solve?
- Get an overview of Spring Boot Framework
- What are the problems that Spring Boot wants to solve?
- Compare Spring MVC vs Spring Boot
- Most important thing that you will learn is Spring Boot is not a competitor to Spring MVC Framework. As far as web applications is concerned, with starter projects and auto configuration Spring Boot adds on to the great work done by Spring MVC. Spring Boot is not restricted to web applications. For example, it provides starters for data and integration layers as well.

## What is the core problem that Spring MVC Framework solves?

> Spring MVC Framework provides decoupled way of developing web applications. With simple concepts like Dispatcher Servlet, ModelAndView and View Resolver, it makes it easy to develop web applications. 

## Why do we need Spring Boot Starter Web?

Spring MVC based applications have a lot of configuration. When we use Spring MVC, we need to configure component scan, dispatcher servlet, a view resolver, web jars(for delivering static content) among other things.

```xml
  <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/views/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
  </bean>
  
  <mvc:resources mapping="/webjars/**" location="/webjars/"/>
    
```

Below code snippet shows typical configuration of a dispatcher servlet in a web application.

```xml
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/todo-servlet.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
```
  
## Spring Boot Auto Configuration : Can we think different?

Spring Boot brings in new thought process around this. 

> Can we bring more intelligence into this? When a spring mvc jar is added into an application, can we auto configure some beans automatically? 

How about auto configuring a Dispatcher Servlet if Spring MVC jar is on the classpath?

> Spring Boot looks at a) Frameworks available on the CLASSPATH b) Existing configuration for the application. Based on these, Spring Boot provides basic configuration needed to configure the application with these frameworks. This is called `Auto Configuration`.  


## Spring Boot Starter Web

Let's say we want to develop a web application. First of all we would need to identify the frameworks we want to use, which versions of frameworks to use and how to connect them together. 

> All web application have similar needs. Listed below are some of the dependencies we use in our Spring MVC Course. These include Spring MVC, Jackson Databind (for data binding), Hibernate-Validator (for server side validation using Java Validation API) and Log4j (for logging). When creating this course, we had to choose the compatible versions of all these frameworks.

```xml
<dependency>
   <groupId>org.springframework</groupId>
   <artifactId>spring-webmvc</artifactId>
   <version>4.2.2.RELEASE</version>
</dependency>

<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.5.3</version>
</dependency>

<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>5.0.2.Final</version>
</dependency>

<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
    
```
Here's what the Spring Boot documentations says about starters.

> Starters are a set of convenient dependency descriptors that you can include in your application. You get a one-stop-shop for all the Spring and related technology that you need, without having to hunt through sample code and copy paste loads of dependency descriptors. For example, if you want to get started using Spring and JPA for database access, just include the spring-boot-starter-data-jpa dependency in your project, and you are good to go.

## Spring Boot Starter Web

If you want to develop a web application or an application to expose restful services, Spring Boot Start Web is the starter to pick. Lets create a quick project with Spring Boot Starter Web using Spring Initializr.

###Dependency for Spring Boot Starter Web

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Following screenshot shows the different dependencies that are added in to our application 

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

Dependencies can be classified into:

- Spring - core, beans, context, aop
- Web MVC - (Spring MVC)
- Jackson - for JSON Binding 
- Validation - Hibernate Validator, Validation API
- Embedded Servlet Container - Tomcat
- Logging - logback, slf4j

Any typical web application would use all these dependencies. Spring Boot Starter Web comes pre packaged with these. As a developer, I would not need to worry about either these dependencies or their compatible versions. 

## Spring Boot - Other Starter Projects

As we see from Spring Boot Starter Web, starter projects help us in quickly getting started with developing specific types of applications. 

- spring-boot-starter-web-services - SOAP Web Services
- spring-boot-starter-web - Web & RESTful applications
- spring-boot-starter-test - Unit testing and Integration Testing
- spring-boot-starter-jdbc - Traditional JDBC
- spring-boot-starter-hateoas - Add HATEOAS features to your services
- spring-boot-starter-security - Authentication and Authorization using Spring Security
- spring-boot-starter-data-jpa -  Spring Data JPA with Hibernate
- spring-boot-starter-cache - Enabling Spring Framework’s caching support
- spring-boot-starter-data-rest - Expose Simple REST Services using Spring Data REST

## Other Goals of Spring Boot

There are a few starters for technical stuff as well

- spring-boot-starter-actuator - To use advanced features like monitoring &amp; tracing to your application out of the box
- spring-boot-starter-undertow, spring-boot-starter-jetty, spring-boot-starter-tomcat - To pick your specific choice of Embedded Servlet Container 
- spring-boot-starter-logging - For Logging using logback
- spring-boot-starter-log4j2 - Logging using Log4j2

Spring Boot aims to enable production ready applications in quick time. 

- Actuator : Enables Advanced Monitoring and Tracing of applications.
- Embedded Server Integrations - Since server is integrated into the application, I would need to have a separate application server installed on the server.
- Default Error Handling
