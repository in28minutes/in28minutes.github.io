---
layout:     post
title:      Spring Boot - HATEOAS for RESTful Services
date:       2023-04-10 12:31:19
summary:    "Hypermedia as the engine of application state" is abbreviated as HATEOAS. It's a lengthy acronym. In this tutorial, we will decode HATEOAS and show you how to implement it for a REST API/Service using Spring Boot.
categories:  SpringBoot
permalink:  /spring-boot-hateoas-for-rest-services
image: /images/spring-boot-feature.png

---

![Image](/images/CRUDServiceWithHibernate.png "CRUDServiceWithHibernate") 

This post will walk you through the process of implementing HATEOAS for a REST API/Service using Spring Boot.
 
## You will learn
- What is HATEOAS?
- Why do you need HATEOAS?
- How do you implement HATEOAS with Spring Boot?
- What are the HATEOAS best practices?


## Project Code Structure

The screenshot below depicts the framework of the project we will be creating.

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
- Your favorite IDE. We use Eclipse or IntelliJ.
- JDK 17

## Maven Project Completion using Code Examples

> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-with-hateoas

## Richardson Maturity Model 

A Restful Web Service's maturity level is defined by the Richardson Maturity Model. The following are the various levels and their features.
- **Level 0** : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST.
- **Level 1** : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used.
- **Level 2** : Resources use proper URI's + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1.
- **Level 3** : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.

## What is HATEOAS?

> "Hypermedia as the engine of application state" is abbreviated as HATEOAS.

It's a lengthy acronym. Let us decipher it for you.

What do you see when you go to a website?

The information that you are looking for. Is that it? There would also be links and buttons for viewing relevant data.

If you go to a student page, for example, you will observe 
- Student profile
- Links to Edit and Delete Student details
- Links to see details of other students
- Link to see details of the courses and grades of the student

HATEOAS applies the same ideas to RESTful Web Services.

When certain information about a resource is requested, you will supply that information as well as information about related resources and various actions you may do with the resource. A REST service, for example, can return the following information when asked for information on a Facebook user.
- User details 
- Links to get his recent posts
- Links to get his recent comments 
- Links to retrieve his friend’s list.

## Using a REST Resource to Launch a Project

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> The same example will be used to discuss HATEOAS.

## Implementing HATEOAS with Spring Boot

Spring Boot serves as a starting point for HATEOAS. Include the dependency in the `pom.xml` file.
```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-hateoas</artifactId>
    </dependency>
```

### Components in Spring Boot HATEOAS Starter

Some of the most critical dependencies from are listed here. `spring-boot-starter-hateoas`.

```xml
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>3.0.2</version>
      <scope>compile</scope>
  </dependency>
  <dependency>
      <groupId>org.springframework.hateoas</groupId>
      <artifactId>spring-hateoas</artifactId>
      <version>2.0.1</version>
      <scope>compile</scope>
  </dependency>

```

'spring-hateoas' is the most crucial dependent.

### Improving the resource's ability to return HATEOAS responses

We would need to add associated materials in the answer to implement HATEOAS.

Instead of Student we use a return type of `EntityModel<Student>`. 

> EntityModel is a basic class that wraps a domain object and allows you to add connections to it.

```java
@GetMapping("/students/{id}")
public EntityModel<Student> retrieveStudent(@PathVariable long id) {
    Optional<Student> student = studentRepository.findById(id);

    if (!student.isPresent())
      throw new StudentNotFoundException("id-" + id);

    EntityModel<Student> resource = EntityModel.of(student.get());

    WebMvcLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAllStudents());

    resource.add(linkTo.withRel("all-students"));

    return resource;
  }
```

We create a new resource.
```java
  EntityModel<Student> resource = EntityModel.of(student.get());
```

We add the link to retrieve all students method to the links.
```java
      WebMvcLinkBuilder linkTo = linkTo(methodOn(this.getClass()).retrieveAllStudents());

    resource.add(linkTo.withRel("all-students"));

```

The response when we execute a GET request to `http://localhost:8080/students/10001` is shown below:

```
{
  "id": 10001,
  "name": "Ranga",
  "passportNumber": "E1234567",
  "_links": {
    "all-students": {
      "href": "http://localhost:8080/students"
    }
  }
}
```

You can see that there is a new section `_links` with a link to all students Resource.

### Enhance Other Resources with HATEOAS

The above example illustrates key aspects in increasing resources using HATEOAS. 

However, you must make a critical decision: 
- What are the most significant resources for a certain resource?

Go ahead and enhance the application with more HATEOAS links.

## Maven Project Completion using Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-with-hateoas
