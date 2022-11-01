---
layout:     post
title:      Initializing Projects with Spring Boot Starters - Web and JPA
date:       2022-07-09 12:31:19
summary:    Key goal of Spring Boot is to enable a quick start to developing production ready applications. Most important components behind the features of Spring Boot are the Spring Boot Starter Projects. 
categories:  SpringBoot
permalink:  /spring-boot-starter-projects
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

This guide will help you understand how Spring Boot Starter Projects enable the key goal of Spring Boot - Quick Start to developing production ready applications. 

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

 
## You will learn
- What features are provided by Spring Boot Starter Projects?
- We will look at an example of Starter Projects
- We will look at Spring Boot Starter Web
- Get an overview of different starter projects provided by Spring Boot.



## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

## Why do we need Spring Boot Starter Projects?

To understand what starter projects provide, let's consider an example project without using a starter.

### What if we do not have starter projects?

Let's say we want to develop a web application with Spring MVC.  

First of all we would need to identify the frameworks we want to use, which versions of frameworks to use and how to connect them together. 

Listed below are some of the dependencies we use in our Spring MVC Course. These include Spring MVC, Jackson Databind (for data binding), Hibernate-Validator (for server side validation using Java Validation API) and Log4j (for logging). When creating this course, we had to choose the compatible versions of all these frameworks.

```xml
<dependency>
   <groupId>org.springframework</groupId>
   <artifactId>spring-webmvc</artifactId>
   <version>6.0.0-M4</version>
</dependency>

<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.13.3</version>
</dependency>

<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>7.0.4.Final</version>
</dependency>

<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-bom</artifactId>
    <version>2.17.2</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
    
```

We had to add configuration to get all the stuff wired together. Configuration for dispatcher servlet, view resolver, error page, web jars among other configuration.

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

<bean id="messageSource"
    class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
    <property name="basename" value="classpath:messages" />
    <property name="defaultEncoding" value="UTF-8" />
</bean>

<mvc:resources mapping="/webjars/**" location="/webjars/" />

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
  
When using JPA, we would need to similar stuff. We need to add the jars and the configuration for datasource, entity manager, transaction manager etc. 

```xml
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource"
    destroy-method="close">
    <property name="driverClass" value="${db.driver}" />
    <property name="jdbcUrl" value="${db.url}" />
    <property name="user" value="${db.username}" />
    <property name="password" value="${db.password}" />
</bean>

<jdbc:initialize-database data-source="dataSource">
    <jdbc:script location="classpath:config/schema.sql" />
    <jdbc:script location="classpath:config/data.sql" />
</jdbc:initialize-database>

<bean
    class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean"
    id="entityManagerFactory">
    <property name="persistenceUnitName" value="hsql_pu" />
    <property name="dataSource" ref="dataSource" />
</bean>

<bean id="transactionManager" class="org.springframework.orm.jpa.JpaTransactionManager">
    <property name="entityManagerFactory" ref="entityManagerFactory" />
    <property name="dataSource" ref="dataSource" />
</bean>

<tx:annotation-driven transaction-manager="transactionManager"/>

``` 

## Spring Boot Starter Projects

Here's what the Spring Boot documentations says about starters.

> Starters are a set of convenient dependency descriptors that you can include in your application. You get a one-stop-shop for all the Spring and related technology that you need, without having to hunt through sample code and copy paste loads of dependency descriptors. For example, if you want to get started using Spring and JPA for database access, just include the spring-boot-starter-data-jpa dependency in your project, and you are good to go.

Let's consider an example starter - Spring Boot Starter Web.

If you want to develop a web application or an application to expose restful services, Spring Boot Start Web is the starter to pick. Lets create a quick project with Spring Boot Starter Web using Spring Initializr.

## Creating REST Services Application with Spring Initializr

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done.

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot` as Group
  - Choose `student-services` as Artifact
  - Choose following dependencies
    - Web
    - Actuator
    - DevTools
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

## Spring Boot Starter Web

Spring Boot Starter Web brings in 2 important features

- Compatible Dependencies that are needed to develop web applications
- Auto Configuration

Dependency for Spring Boot Starter Web

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

### Dependencies
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

### Auto Configuration
Spring Boot Starter Web auto configures the basic things that are needed. To understand the features Spring Boot Starter Web brings in, lets run StudentServicesApplication.java as a Java Application and review the log.

```
Mapping servlet: 'dispatcherServlet' to [/]

Mapped "{[/error]}" onto public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)

Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]

```
Spring Boot Starter Web auto-configures 

- Dispatcher Servlet
- Error Page
- Web Jars to manage your static dependencies
- Embedded Servlet Container - Tomcat is the default

The image below shows the different things that might be auto configured by Spring Boot Starter Web

![Image](/images/SpringBootStarterWeb-AutoConfiguration.png "Spring Boot Starter Web - Auto Configuration")

## Spring Boot Starter Project Options

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

There are a few starters for technical stuff as well

- spring-boot-starter-actuator - To use advanced features like monitoring &amp; tracing to your application out of the box
- spring-boot-starter-undertow, spring-boot-starter-jetty, spring-boot-starter-tomcat - To pick your specific choice of Embedded Servlet Container 
- spring-boot-starter-logging - For Logging using logback
- spring-boot-starter-log4j2 - Logging using Log4j2
