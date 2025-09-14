---
layout:     post
title:      Spring Boot vs Spring MVC vs Spring - How do they compare?
date:       2025-09-13 12:31:19
summary:    How does Spring Boot compare with Spring MVC and Spring? What is Spring Boot? What is Spring MVC? What is Spring Framework? What are their goals? How do they compare?
categories:  SpringBoot
permalink:  /spring-boot-vs-spring-mvc-vs-spring
image: /images/spring-boot-category.png
---

What is Spring Boot, Spring MVC, and the Spring Framework? What are their respective goals, and how do they compare to one another?

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")


## You Will Learn
- An overview of the **Spring Framework**
- The key problems the **Spring Framework** addresses
- An overview of the **Spring MVC Framework**
- The key problems the **Spring MVC Framework** addresses
- An overview of the **Spring Boot Framework**
- The key problems that **Spring Boot** solves
- A comparison: **Spring vs. Spring MVC vs. Spring Boot**
- Most importantly: **Spring, Spring MVC, and Spring Boot are not competitors.**  
  They each solve different problems—and they solve them very well.

# A Complete Maven Project With Code Examples

> Our GitHub repository contains all the code examples:  
> https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files

- `Website-springbootrestservices-simplerestserviceswithunitandintegrationtests.zip` — Rest services with unit & integration tests
- `Website-SpringSecurityStarterWebApplication_Final.zip` — Spring Security example
- `Website-springbootrestservices-all-examples.zip` — Other RESTful web services examples

# What is the core problem that the Spring Framework solves?

Think about the core problem: **how objects get their dependencies**. Spring's answer is **Dependency Injection (DI)**, also known as **Inversion of Control (IoC)**.

> The most important feature of the Spring Framework is **Dependency Injection**. At the core of all Spring modules is DI / IoC.

**Why this matters**
- Enables **loose coupling** between components.
- Makes code **easy to unit test** (you can inject mocks).
- Simplifies **swapping implementations** and managing object lifecycles.

# Example — without Dependency Injection
```java
@RestController
public class WelcomeController {

    private WelcomeService service = new WelcomeService();

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}

```

### Same Example with Dependency Injection

With **Dependency Injection (DI)**, life becomes much easier. Instead of manually wiring dependencies, you let the **Spring Framework** handle the heavy lifting. This is achieved using two simple annotations:

- `@Service` — Tells Spring: *"This is a bean. Please create and manage its lifecycle."*
- `@Autowired` — Tells Spring: *"Find a matching bean of this type and inject it here."*

In the example below, Spring automatically creates a bean for `WelcomeService` and injects it into `WelcomeController`.

```java

@Service
public class WelcomeService {
    //Bla Bla Bla
}

@RestController
public class WelcomeController {

    @Autowired
    private WelcomeService service;

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}

```

## What else does the Spring Framework solve?

### Problem 1: Boilerplate and Plumbing Code
Does the Spring Framework stop with Dependency Injection? **No.**  
It builds on DI with a number of modules, such as:

- Spring JDBC
- Spring MVC
- Spring AOP
- Spring ORM
- Spring JMS
- Spring Test

Take **Spring JDBC** and **Spring JMS** as examples.  
Do these modules provide brand-new functionality? **Not really.** Everything can already be done with J2EE/JEE.

So, what do they add? They provide **simplified abstractions** that:
- Reduce boilerplate and duplication
- Promote decoupling and improve unit testability

For instance, using Spring’s templates (like `JdbcTemplate` or `JmsTemplate`) requires far less code compared to traditional JDBC or JMS approaches.

---

### Problem 2: Seamless Integration with Other Frameworks
Another strength of Spring is that it doesn’t reinvent the wheel.  
Instead, it integrates smoothly with popular, proven frameworks, such as:

- **Hibernate** for ORM
- **iBatis** for object mapping
- **JUnit & Mockito** for testing

---

## What is the core problem that the Spring MVC Framework solves?

The **Spring MVC Framework** offers a **decoupled way to build web applications**.  
By introducing simple yet powerful concepts like the **Dispatcher Servlet**, **ModelAndView**, and **View Resolver**, it makes web application development cleaner, more modular, and easier to manage.

---

## Why do we need Spring Boot?

While Spring is powerful, **Spring-based applications traditionally require a lot of configuration**.

For example, when using Spring MVC, you typically need to configure:
- Component scanning
- The Dispatcher Servlet
- A View Resolver
- WebJars (for serving static content)
- And more...

Spring Boot was created to **remove this heavy setup burden** by providing sensible defaults, auto-configuration, and embedded servers — making it much faster to build and run Spring applications.


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

The below code snippet shows the typical configuration of a dispatcher servlet in a web application.

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
  
When we use Hibernate/JPA, we would need to configure a datasource, an entity manager factory, and a transaction manager, among a host of other things. 

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

## Problem #1: Spring Boot Auto-Configuration — A New Way of Thinking

Spring Boot introduced a fresh perspective:  
**Can configuration be made smarter and more automatic?**

> For example:
> - If a **Hibernate** JAR is on the classpath, can Spring Boot auto-configure a **DataSource**?
> - If a **Spring MVC** JAR is on the classpath, can it auto-configure a **DispatcherServlet**?

The answer is **yes**. Spring Boot automatically provides sensible defaults by analyzing:
1. The **frameworks available on the classpath**
2. The **existing configuration** in the application

Based on this, it sets up the basic configuration required to run the application.  
This intelligent setup is known as **Auto-Configuration**.

And of course, developers can **override** the defaults when needed.

---

## Problem #2: Spring Boot Starter Projects — Simplifying Dependencies

When developing a web application, we usually need to:
- Identify which frameworks to use
- Choose the correct versions of those frameworks
- Ensure all dependencies are compatible and work together

This can be tedious and error-prone.

Most web applications share common dependencies. For example, in our Spring MVC course we used:
- **Spring MVC**
- **Jackson Databind** (for JSON data binding)
- **Hibernate Validator** (for server-side validation with JSR-303/380)
- **Log4j** (for logging)

Manually selecting and managing versions of all these libraries was a challenge.

Spring Boot solved this with **Starter Projects** — curated dependency descriptors that bring in a set of compatible libraries for common application needs (like `spring-boot-starter-web` for web apps). This removes guesswork and ensures consistent, stable builds.

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
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
    
```
Here’s how the official Spring Boot documentation describes **Starters**:

> **Starters** are a convenient set of dependency descriptors that you can include in your application. They act as a one-stop shop for all the Spring and related technologies you need—without having to search through sample code or copy-paste multiple dependency entries.  
> For example, if you want to start using **Spring + JPA** for database access, simply include the `spring-boot-starter-data-jpa` dependency in your project, and you’re good to go.

---

### Example: Spring Boot Starter Web

If you want to:
- Develop a **web application**, or
- Expose **RESTful services**,

then **`spring-boot-starter-web`** is the right starter to use.

Let’s create a simple project with **Spring Boot Starter Web** using **Spring Initializr**.

---

### Dependency for Spring Boot Starter Web

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

The screenshot below shows the dependencies added to our application by the `spring-boot-starter-web` starter.


![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

## Dependencies in Spring Boot Starter Web

Dependencies in a typical web application can be grouped as follows:

- **Spring** – core, beans, context, aop
- **Web MVC** – Spring MVC
- **Jackson** – for JSON binding
- **Validation** – Hibernate Validator, Validation API
- **Embedded Servlet Container** – Tomcat
- **Logging** – Logback, SLF4J

Any typical web application would use all of these.  
The **Spring Boot Starter Web** bundles them together, so as a developer you don’t need to worry about choosing or managing compatible versions.

---

## Spring Boot Starter Project Options

Starter projects make it easy to get started with specific types of applications. Examples include:

- **spring-boot-starter-web-services** – SOAP Web Services
- **spring-boot-starter-web** – Web & RESTful applications
- **spring-boot-starter-test** – Unit and integration testing
- **spring-boot-starter-jdbc** – Traditional JDBC access
- **spring-boot-starter-hateoas** – Add HATEOAS features to services
- **spring-boot-starter-security** – Authentication & authorization with Spring Security
- **spring-boot-starter-data-jpa** – Spring Data JPA with Hibernate
- **spring-boot-starter-cache** – Enable Spring Framework’s caching support
- **spring-boot-starter-data-rest** – Expose REST services using Spring Data REST

---

## Other Goals of Spring Boot

In addition to application-specific starters, there are also starters for technical concerns:

- **spring-boot-starter-actuator** – Advanced monitoring and tracing out of the box
- **spring-boot-starter-undertow**, **spring-boot-starter-jetty**, **spring-boot-starter-tomcat** – Choose your embedded servlet container
- **spring-boot-starter-logging** – Logging with Logback
- **spring-boot-starter-log4j2** – Logging with Log4j2

Spring Boot’s broader goals include enabling **production-ready applications quickly** by providing:
- **Actuator** – Built-in monitoring, health checks, and tracing
- **Embedded server integration** – No need for an external application server; everything runs inside the application
- **Default error handling** – Sensible defaults for error responses  
