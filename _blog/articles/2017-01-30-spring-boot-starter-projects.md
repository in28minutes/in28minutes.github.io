---
layout:     post
title:      Initializing Projects with Spring Boot Starters - Web and JPA
date:       2025-09-07 12:31:19
summary:    Key goal of Spring Boot is to enable a quick start to developing production ready applications. Most important components behind the features of Spring Boot are the Spring Boot Starter Projects. 
categories:  SpringBoot
permalink:  /spring-boot-starter-projects
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

# Spring Boot Starter Projects

This guide will help you understand how **Spring Boot Starter Projects** enable the key goal of Spring Boot — *a quick start to developing production-ready applications*.

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

## You will learn
- What features are provided by Spring Boot Starter Projects?
- Example of a Starter Project
- Introduction to Spring Boot Starter Web
- Overview of different Starter Projects provided by Spring Boot

## Tools you will need
- Maven 3.0+ as your build tool
- Your favorite IDE (Eclipse or IntelliJ IDEA recommended)
- JDK 17+

## Why do we need Spring Boot Starter Projects?

To understand the value of starter projects, let’s first imagine a project **without them**.

### What if we do not have starter projects?

Suppose we want to build a **Spring MVC web application**.

- First, we need to decide **which frameworks** to use.
- Then, we need to figure out **compatible versions** of those frameworks.
- Finally, we have to manage linking and configuration manually.

Some of the dependencies we typically use in a Spring MVC project are:

- **Spring MVC** – Core web framework
- **Jackson Databind** – For JSON data binding
- **Hibernate Validator** – For server-side validation using Java Validation API
- **Log4j** – For logging

👉 The challenge: We must carefully select versions that are compatible with each other, which adds complexity and slows down development.


```xml
<dependency>
   <groupId>org.springframework</groupId>
   <artifactId>spring-webmvc</artifactId>
   <version>7.0.0-M7</version>
</dependency>

<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.19.2</version>
    <scope>compile</scope>
</dependency>

<dependency>
    <groupId>org.hibernate.validator</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>9.0.1.Final</version>
</dependency>

<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-bom</artifactId>
    <version>2.25.1</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
    
```

To get everything working together, we also had to add **manual configurations**, such as:

- Dispatcher Servlet
- View Resolver
- Error Page
- Web Jars (for serving static content)
- And other supporting settings

👉 As you can see, without starter projects, setting up even a simple Spring MVC application involves a lot of **boilerplate configuration**.

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

We would need to do **similar setup tasks when using JPA**.

- Provide the required JPA and Hibernate jars
- Configure the **DataSource**
- Configure the **EntityManagerFactory**
- Configure the **TransactionManager**
- Add other related settings manually

👉 As with Spring MVC, this becomes **time-consuming and error-prone**.

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

Here’s how the official Spring Boot documentation defines starters:

> **Starters are a set of convenient dependency descriptors that you can include in your application.**  
> You get a one-stop shop for all the Spring and related technologies you need, without having to hunt through sample code or copy-paste loads of dependency descriptors.  
> For example, if you want to get started using Spring and JPA for database access, just include the `spring-boot-starter-data-jpa` dependency in your project, and you are good to go.

### Example: Spring Boot Starter Web

If you want to:
- Build a **web application**
- Or expose **RESTful services**

👉 `spring-boot-starter-web` is the starter you should pick.

Let’s create a simple project with **Spring Boot Starter Web** using **Spring Initializr**.

---

# Creating REST Services Applications with Spring Initializr

## What is Spring Initializr?

[Spring Initializr](https://start.spring.io/) is an invaluable web-based tool designed to **bootstrap your Spring Boot projects quickly and efficiently**. It eliminates the complexity of manual project setup by providing an intuitive interface for generating production-ready Spring Boot applications.

## Key Configuration Options

When creating your REST services project, you can customize several essential parameters:

### Project Configuration
- **Project Type**: Choose your preferred build automation tool
    - **Maven** - XML-based configuration, widely adopted
    - **Gradle** - Groovy/Kotlin DSL, modern build system

- **Programming Language**: Select the language that fits your team's expertise
    - **Java** - Industry standard, extensive ecosystem
    - **Kotlin** - Concise syntax, 100% Java interoperability
    - **Groovy** - Dynamic language with Java compatibility

- **Spring Boot Version**: Pick the appropriate framework version
    - Latest stable release (recommended for new projects)
    - LTS versions for enterprise applications
    - Snapshot versions for bleeding-edge features

This saves a lot of time by generating a ready-to-use project structure.


![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

### Steps to Create a Spring Boot Starter Web Project

As shown in the image above, follow these steps:

1. **Launch Spring Initializr** and choose the following options:
    - **Group:** `com.in28minutes.springboot`
    - **Artifact:** `student-services`
    - **Dependencies:**
        - Web
        - Actuator
        - DevTools

2. **Click "Generate Project"** to download the project as a `.zip` file.

3. **Import the project into Eclipse** (or your preferred IDE).
    - In Eclipse, use:  
      `File > Import > Existing Maven Projects`

4. If you want to **understand all the files** that are part of this generated project, you can check the detailed explanation [here](#) _(link to explanation or documentation)_.


## Spring Boot Starter Web

Spring Boot Starter Web has two crucial features:

- **Compatible Dependencies** that are needed to develop web applications
- **Auto Configuration** to automatically set up common configurations (DispatcherServlet, Jackson, Validation, Embedded Tomcat, etc.)

### Dependency for Spring Boot Starter Web

If you are using **Maven**, add this to your `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
If you are using Gradle, add this to your `build.gradle`:
```gradle
implementation 'org.springframework.boot:spring-boot-starter-web'
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

All of these requirements would be used by any regular web application. Spring Boot Starter Site already has them. As a developer, I would not have to be concerned about their dependencies or their compatible version 

### Auto Configuration
Spring Boot Starter Web automatically configures the essentials. To explore the functionality added by Spring Boot Starter Web, run StudentServicesApplication.java as a Java Application and examine the log.

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

As we can see from **Spring Boot Starter Web**, starter projects allow us to get started quickly with designing various types of applications.

### Application Starters
- `spring-boot-starter-web-services` - SOAP Web Services
- `spring-boot-starter-web` - Web & RESTful applications
- `spring-boot-starter-test` - Unit testing and Integration Testing
- `spring-boot-starter-jdbc` - Traditional JDBC
- `spring-boot-starter-hateoas` - Add HATEOAS features to your services
- `spring-boot-starter-security` - Authentication and Authorization using Spring Security
- `spring-boot-starter-data-jpa` - Spring Data JPA with Hibernate
- `spring-boot-starter-cache` - Enabling Spring Framework’s caching support
- `spring-boot-starter-data-rest` - Expose Simple REST Services using Spring Data REST

### Technical Starters
- `spring-boot-starter-actuator` - Advanced features like monitoring & tracing out of the box
- `spring-boot-starter-undertow`, `spring-boot-starter-jetty`, `spring-boot-starter-tomcat` - Choose your specific Embedded Servlet Container
- `spring-boot-starter-logging` - Logging using Logback
- `spring-boot-starter-log4j2` - Logging using Log4j2  

