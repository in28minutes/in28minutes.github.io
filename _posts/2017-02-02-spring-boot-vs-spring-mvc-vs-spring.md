---
layout:     post
title:      Spring Boot vs Spring MVC vs Spring - How do they compare?
date:       2017-02-01 12:31:19
summary:    How does Spring Boot compare with Spring MVC and Spring? 
categories: [Spring Boot, Spring Boot Web Application]
permalink:  /spring-boot-vs-spring-mvc-vs-spring
---

What is Spring Boot? What is Spring MVC? What is Spring Framework? What are their goals? How do they compare?
 
## You will learn
- Get an overview of Spring Framework
- What are the problems that Spring Framework wanted to solve?
- Get an overview of Spring MVC Framework
- What are the problems that Spring MVC Framework wanted to solve?
- Get an overview of Spring Boot Framework
- What are the problems that Spring Boot wants to solve?
- Compare Spring vs Spring Boot vs Spring MVC
- Most important thing that you will learn is Spring, Spring MVC and Spring Boot are not competing for the same space. They solve different problems and they solve them very well.

## References

1 hour video courses on all popular frameworks!

- Spring - [spring-framework-tutorial-for-beginners](https://in28minutes.teachable.com/p/spring-framework-tutorial-for-beginners)
- Spring MVC - [https://www.youtube.com/watch?v=BjNhGaZDr0Y](https://www.youtube.com/watch?v=BjNhGaZDr0Y)
- Spring Boot - [https://www.youtube.com/watch?v=PSP1-2cN7vM](https://www.youtube.com/watch?v=PSP1-2cN7vM)
- Eclipse - [https://www.youtube.com/watch?v=s4ShbtOHMCA](https://www.youtube.com/watch?v=s4ShbtOHMCA)
- Maven - [https://www.youtube.com/watch?v=0CFWeVgzsqY](https://www.youtube.com/watch?v=0CFWeVgzsqY)
- JUnit - [https://www.youtube.com/watch?v=o5k9NOR9lrI](https://www.youtube.com/watch?v=o5k9NOR9lrI)
- Mockito - [https://www.youtube.com/watch?v=d2KwvXQgQx4](https://www.youtube.com/watch?v=d2KwvXQgQx4)


## What is the core problem that Spring Framework solves?

Think long and hard. What's the problem Spring Framework solves?

> Most important feature of Spring Framework is Dependency Injection. At the core of all Spring Modules is Dependency Injection or IOC Inversion of Control.

Why is this important? Because, when DI or IOC is used properly, we can develop loosely coupled applications. And loosely coupled applications can be easily unit tested.

Let's consider a simple example:

### Example without Dependency Injection
Consider the example below: WelcomeController depends on WelcomeService to get the welcome message. What is it doing to get an instance of WelcomeService? `WelcomeService service = new WelcomeService();`. It's creating an instance of it. And that means they are tightly coupled. For example : If I create an mock for WelcomeService in a unit test for WelcomeController, How do I make WelcomeController use the mock? Not easy!

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
World looks much easier with dependency injection. You let the spring framework do the hard work. We just use two simple annotations: @Component and @Autowired.

- Using `@Component`, we tell Spring Framework - Hey there, this is a bean that you need to manage.
- Using `@Autowired`, we tell Spring Framework - Hey find the correct match for this specific type and autowire it in.

In the example below, Spring framework would create a bean for WelcomeService and autowire it into WelcomeController.

In a unit test, I can ask the Spring framework to auto-wire the mock of WelcomeService into WelcomeController. (Spring Boot makes things easy to do this with @MockBean. But, that's a different story altogether!)

```java

@Component
public class WelcomeService {
    //Bla Bla Bla
}

@RestController
public class WelcomeController {

    @Autowired
    private WelcomeService service = new WelcomeService();

	@RequestMapping("/welcome")
	public String welcome() {
		return service.retrieveWelcomeMessage();
	}
}

```

## What else does Spring Framework solve?

### Problem 1 : Duplication/Plumbing Code

Does Spring Framework stop with Dependency Injection? No. It builds on the core concept of Dependeny Injection with a number of Spring Modules

- Spring JDBC
- Spring MVC
- Spring AOP
- Spring ORM
- Spring JMS
- Spring Test

Consider Spring JMS and Spring JDBC for a moment.

Do these modules bring in any new functionality? No. We can do all this with J2EE or JEE. So, what do these bring in? They bring in simple abstractions. Aim of these abstractions is to

- Reduce Boilerplate Code/ Reduce Duplication
- Promote Decoupling/ Increase Unit Testablity

For example, you need much less code to use a JDBCTemplate or a JMSTemplate compared to traditional JDBC or JMS.

### Problem 2 : Good Integration with Other Frameworks.
Great thing about Spring Framework is that it does not try to solve problems which are already solved. All that it does is to provide a great integration with frameworks which provide great solutions.

- Hibernate for ORM
- iBatis for Object Mapping
- JUnit & Mockito for Unit Testing


## What is the core problem that Spring MVC Framework solves?

> Spring MVC Framework provides decoupled way of developing web applications. With simple concepts like Dispatcher Servlet, ModelAndView and View Resolver, it makes it easy to develop web applications. 

## Why do we need Spring Boot?

Spring based applications have a lot of configuration. 

When we use Spring MVC, we need to configure component scan, dispatcher servlet, a view resolver, web jars(for delivering static content) among other things.

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
  
When we use Hibernate/JPA, we would need to configure a datasource, an entity manager factory, a transaction manager among a host of other things. 

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

## Problem #1 : Spring Boot Auto Configuration : Can we think different?

Spring Boot brings in new thought process around this. 

> Can we bring more intelligence into this? When a spring mvc jar is added into an application, can we auto configure some beans automatically? 

- How about auto configuring a Data Source if Hibernate jar is on the classpath? 
- How about auto configuring a Dispatcher Servlet if Spring MVC jar is on the classpath?

There would be provisions to override the default auto configuration. 

> Spring Boot looks at a) Frameworks available on the CLASSPATH b) Existing configuration for the application. Based on these, Spring Boot provides basic configuration needed to configure the application with these frameworks. This is called `Auto Configuration`.  


## Problem #2 : Spring Boot Starter Projects : Built around well known patterns

Let's say we want to develop a web application. 

First of all we would need to identify the frameworks we want to use, which versions of frameworks to use and how to connect them together. 

All web application have similar needs. Listed below are some of the dependencies we use in our Spring MVC Course. These include Spring MVC, Jackson Databind (for data binding), Hibernate-Validator (for server side validation using Java Validation API) and Log4j (for logging). When creating this course, we had to choose the compatible versions of all these frameworks.

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

Let's consider an example starter - Spring Boot Starter Web.

If you want to develop a web application or an application to expose restful services, Spring Boot Start Web is the starter to pick. Lets create a quick project with Spring Boot Starter Web using Spring Initializr.

### Dependency for Spring Boot Starter Web

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

### Spring Boot Starter Project Options

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
