---
layout:     post
title:      Spring Interview Questions and Answers - Course
date:       2022-10-29 12:31:19
summary:    Preparing for the spring interview is tricky. There are a wide variety of spring modules and spring projects that you would need to review and be prepared to answer questions on. You would need to get a good understanding of the new features of Spring and have a firm grasp of the concepts you implemented in your projects. This course helps you prepare for the Spring Interview with code examples covering 200+ Spring Interview Questions and Answers on Spring, Spring Boot, Spring MVC, Spring JDBC, JPA, AOP, RESTful Services, and SOAP Web Services. 
categories: SpringBoot
permalink:  /spring-and-spring-boot-interview-guide
image: /images/spring-framework-category.png

---

The Spring Framework is the most popular Java framework ever. It continues to evolve with changing architectures. The Spring Boot is one of the most popular spring projects. Spring Boot is the most commonly used Java framework to develop RESTful services and microservices.

Preparing for spring and spring boot interviews is tricky. There are a wide variety of Spring Modules and Spring Projects you would need to recollect and be prepared to answer questions on. You would need to get a good understanding of the new features of Spring and have a firm grasp of the concepts you implemented in your projects.

This course helps you prepare for the Spring Interview with code examples covering 200+ Spring Interview Questions and Answers on Spring, Spring Boot, Spring MVC, Spring JDBC, JPA, AOP, RESTful Services, and SOAP Web Services. 



## Github Repository
> https://github.com/in28minutes/spring-interview-guide

## Presentation
- https://github.com/in28minutes/spring-interview-guide/raw/master/spring-interview-questions.pdf

## What Will I Learn?

- You will learn to answer 200 interview questions on Spring, Spring Boot, and Spring MVC.
- You will learn to answer questions on basics of `JPA, Spring Data, Spring Data JPA, Spring AOP`
- You will learn to answer questions on RESTful Web Services and SOAP Web Services with Spring & Spring Boot
- You will learn to answer questions on the basics of the Spring Framework-`IOC, Application Context, Dependency Injection, Scope and Component Scan`.
- You will learn about Spring Annotations: `@Component, @Service, @Repository, @Controller, @Autowired, @Primary, @Qualifier, and @Setup`
- You will understand the basic features of Spring Boot: `Starters, Auto Configuration, Actuator, and Externalized Configuration`.
- You will be introduced to the best practises for using Spring and Spring Boot.
- You will be introduced to the approaches to handling validation errors with Spring MVC and Spring REST.
- You will be introduced to RESTful Service approaches for versioning and content negotiation.
- You will understand the best practises for documenting your RESTful services with Swagger.


A list of questions discussed for each topic is listed below.

## Spring

- What is Loose Coupling?
- What is a Dependency?
- What is IOC (Inversion of Control)?
- What is Dependency Injection?
- Can you give a few examples of dependency injection?
- What is Auto Wiring?
- What are the important roles of an IOC container?
- What are "Bean Factory" and "Application Context"?
- Can you compare Bean Factory with Application Context?
- How do you create an application context with Spring?
- How does Spring know where to search for components or beans?
- What is a Component Scan? 
- How do you define a component scan in XML and Java configurations?
- How is it done with the Spring Boot?
- What does "@Component" signify?
- What does "@Autowired" signify?
- What’s the difference between @Controller, @Component, @Repository, and @Service Annotations in Spring?
- What is the default scope of a bean? 
- Are spring beans thread safe?
- What are the other scopes available?
- How is Spring’s singleton bean different from the Gang of Four(GoF) Singleton Pattern?
- What are the different types of dependency injections?
- What is setter injection?
- What is constructor injection?
- How do you choose between setter and constructor injections?
- What are the different options available to create application contexts for Spring?
- What is the difference between XML and Java Configurations for Spring?
- How do you choose between XML and Java Configurations for Spring?
- How does Spring do autowiring?
- What are the different kinds of matching used by Spring for autowiring?
- How do you debug problems with the Spring Framework?
- How do you solve the NoUniqueBeanDefinitionException?
- How do you solve the NoSuchBeanDefinitionException?
- What is @Primary?
- What is @Qualifier?
- What is CDI (Contexts and Dependency Injection)? 
- Does spring support CDI?
- Would you recommend using CDI or Spring Annotations?
- What are the major features in different versions of Spring?
- What are the new features in Spring Framework 4.0?
- What are the new features in Spring Framework 5.0?
- What are the important Spring Modules?
- What are the important Spring Projects?
- What is the simplest way of ensuring that we are using a single version of all Spring-related dependencies?
- Name some of the design patterns used in the Spring Framework.
- What do you think about the Spring Framework?
- Why is Spring Popular?
- Can you give a big picture of the Spring Framework?

## Spring MVC

- What is Model 1 architecture?
- What is Model 2 architecture?
- What is Model 2 Front Controller architecture?
- Can you show an example controller method in Spring MVC?
- Can you explain a simple flow in Spring MVC?
- What is a ViewResolver?
- What is Model?
- What is ModelAndView?
- What is a RequestMapping?
- What is Dispatcher Servlet?
- How do you set up Dispatcher Servlet?
- What is a form-backing object?
- How is validation done using Spring MVC?
- What is BindingResult?
- How do you map validation results to your view?
- What are Spring Form Tags?
- What is a Path Variable?
- What is a Model Attribute?
- What is a Session Attribute?
- What is a init binder?
- How do you set the default date format with Spring?
- Why is Spring MVC so popular?

## Spring Boot

- What is Spring Boot?
- What are the important Goals of Spring Boot?
- What are the important Features of Spring Boot?
- Compare Spring Boot vs Spring?
- Compare Spring Boot vs Spring MVC?
- What is the importance of @SpringBootApplication?
- What is Auto Configuration?
- How can we find more information about Auto Configuration?
- What is an embedded server? Why is it important?
- What is the default embedded server with Spring Boot?
- What are the other embedded servers supported by Spring Boot?
- What are Starter Projects?
- Can you give examples of important starter projects?
- What is Starter Parent?
- What are the different things that are defined in Starter Parent?
- How does Spring Boot enforce common dependency management for all its Starter projects?
- What is Spring Initializr?
- What is application.properties?
- What are some of the important things that can be customised in application.properties?
- How do you externalise configuration using Spring Boot?
- How can you add custom application properties using Spring Boot? 
- What is @ConfigurationProperties?
- What is a profile?
- How do you define beans for a specific profile?
- How do you create an application configuration for a specific profile?
- How do you have different configurations for different environments?
- What is Spring Boot Actuator? 
- How do you monitor web services using Spring Boot Actuator?
- How do you find more information about your application environment using Spring Boot?
- What is a CommandLineRunner?

## Database Connectivity-JDBC, Spring JDBC, & JPA

- What is Spring JDBC? How is different from JDBC?
- What is a JdbcTemplate?
- What is a RowMapper?
- What is JPA?
- What is Hibernate?
- How do you define an entity in JPA?
- What is an Entity Manager?
- What is a Persistence Context?
- How do you map relationships in JPA?
- What are the different types of relationships in JPA?
- How do you define One to One Mapping in JPA?
- How do you define One to Many Mapping in JPA?
- How do you define Many to Many Mapping in JPA?
- How do you define a datasource in a Spring Context?
- What is the use of persistence.xml
- How do you configure Entity Manager Factory and Transaction Manager?
- How do you define transaction management for Spring – Hibernate integration?

## Spring Data
- What is Spring Data?
- What is the need for Spring Data?
- What is Spring Data JPA?
- What is a CrudRepository?
- What is a PagingAndSortingRepository?

## Unit Testing

- How does Spring Framework Make Unit Testing Easy?
- What is Mockito?
- What is your favorite mocking framework?
- How do you do mock data with Mockito?
- What are the different mocking annotations that you worked with?
- What is MockMvc?
- What is @WebMvcTest?
- What is @MockBean?
- How do you write a unit test with MockMVC?
- What is JSONAssert?
- How do you write an integration test with Spring Boot?
- What is @SpringBootTest?
- What is @LocalServerPort?
- What is TestRestTemplate?

## AOP

- What are cross cutting concerns?
- How do you implement cross cutting concerns in a web application?
- If you want to log every request to a web application, what are the options you can think of?
- If you want to track performance of every request, what options can you think of?
- What is an Aspect and Pointcut in AOP?
- What are the different types of AOP advices?
- What is weaving?
- Compare Spring AOP vs AspectJ?

## SOAP Web Services

- What is a Web Service?
- What is SOAP Web Service?
- What is SOAP?
- Waht is a SOAP Envelope?
- What is SOAP Header and SOAP Body?
- Can you give an example of SOAP Request and SOAP Response?
- What is a SOAP Header? What kind of information is sent in a SOAP Header?
- Can you give an example of a SOAP header with authentication information?
- What is WSDL (Web Service Definition Language)? 
- What are the different parts of a WSDL?
- What is Contract First Approach?
- What is an XSD?
- Can you give an example of an XSD?
- What is JAXB?
- How do you configure a JAXB Plugin?
- What is an Endpoint?
- Can you show an example endpoint written with Spring Web Services?
- What is a MessageDispatcherServlet?
- How do you configure a MessageDispatcherServlet?
- How do you generate a WSDL using Spring Web Services?
- How do you implement error handling for SOAP Web Services?
- What is a SOAP Fault?

## RESTful Web Services

- What is REST?
- What are the key concepts in designing RESTful API?
- What are the Best Practices of RESTful Services?
- Can you show the code for an example Get Resource method with Spring REST?
- What happens when we return a bean from a Request Mapping Method?
- What is GetMapping and what are the related methods available in Spring MVC?
- Can you show the code for an example Post Resource method with Spring REST?
- What is the appropriate HTTP Response Status for successful execution of a Resource Creation?
- Why do we use ResponseEntity in a RESTful Service?
- What is HATEOAS? 
- Can you give an Example Response for HATEOAS?
- How do we implement it using Spring?
- How do you document RESTful web services?
- Can you give a brief idea about Swagger Documentation?
- How do you automate the generation of Swagger Documentation from RESTful Web Services?
- How do you add custom information to Swagger Documentation generated from RESTful Web Services?
- What is Swagger-UI?
- What is the "representation" of a resource?
- What is Content Negotiation? 
- Which HTTP header is used for content negotiation?
- How do we implement it using Spring Boot?
- How do you add XML support to your RESTful Services built with Spring Boot?
- How do you implement Exception Handling for RESTFul Web Services?
- What are the best practises for handling exceptions with RESTful Web Services?
- What are the different error statuses that you would return in RESTful Web Services?
- How would you implement them using Spring Boot?
- What HTTP Response Status do you return for validation errors?
- How do you handle validation errors with RESTful Web Services?
- Why do we need versioning for RESTful Web Services?
- What are the versioning options that are available?
- How do you implement versioning for RESTful Web Services?

## Java and Spring Interview Guides

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://links.in28minutes.com/MISC-SPRING-INTERVIEW){:target="_blank"}


