---
layout:     post
title:      Spring Boot - HATEOAS for RESTful Services
date:       2022-07-03 12:31:19
summary:    HATEOAS stands for "Hypermedia as the engine of application state". Its a complicated acronym. In this article, we decode HATEOAS for you and help you learn how to implement HATEOAS for a REST API/Service with Spring Boot.
categories:  SpringBoot
permalink:  /spring-boot-hateoas-for-rest-services
image: /images/spring-boot-feature.png

---

![Image](/images/CRUDServiceWithHibernate.png "CRUDServiceWithHibernate") 

This guide will help you implement HATEOAS for a REST API/Service with Spring Boot.
 
## You will learn
- What is HATEOAS?
- Why do you need HATEOAS?
- How do you implement HATEOAS with Spring Boot?
- What are the HATEOAS best practices?



## Project Code Structure

Following screenshot shows the structure of the project we will create.

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
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-hateoas

## Richardson Maturity Model 

Richardson Maturity Model defines the maturity level of a Restful Web Service. Following are the different levels and their characteristics.
- Level 0 : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST.
- Level 1 : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used.
- Level 2 : Resources use proper URI's + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1.
- Level 3 : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.

## What is HATEOAS?

> HATEOAS stands for "Hypermedia as the engine of application state"

Its a complicated acronym. Let's decode it for you.

What do you see when you visit a web page?

The data that you would want to see. Is that all? You would also see links and buttons to see related data.

For example, if you go to a student page, you will see 
- Student profile
- Links to Edit and Delete Student details
- Links to see details of other students
- Link to see details of the courses and grades of the student

HATEOAS brings the same concepts to RESTful Web Services.

When some details of a resource are requested, you will provide the resource details as well as details of related resources and the possible actions you can perform on the resource. For example, when requesting information about a facebook user, a REST service can return the following
- User details 
- Links to get his recent posts
- Links to get his recent comments 
- Links to retrieve his friend’s list.

## Bootstrapping a Project with a REST Resource

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to discuss about HATEOAS.

## Implementing HATEOAS with Spring Boot

Spring Boot provides a Starter for HATEOAS. Include the dependency in your pom.xml
```
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-hateoas</artifactId>
    </dependency>
```

### Components in Spring Boot HATEOAS Starter

Listed below are some of the important dependencies from `spring-boot-starter-hateoas`.

```
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>2.3.1.RELEASE</version>
    <scope>compile</scope>
  </dependency>
  <dependency>
    <groupId>org.springframework.hateoas</groupId>
    <artifactId>spring-hateoas</artifactId>
    <version>0.24.0.RELEASE</version>
    <scope>compile</scope>
  </dependency>
  <dependency>
    <groupId>org.springframework.plugin</groupId>
    <artifactId>spring-plugin-core</artifactId>
    <version>1.2.0.RELEASE</version>
    <scope>compile</scope>
  </dependency>

```

Most important dependency is `spring-hateoas`.

### Enhancing the resource to return HATEOAS response

To implement HATEOAS, we would need to include related resources in the response.

Instead of Student we use a return type of `EntityModel<Student>`. 

> EntityModel is a simple class wrapping a domain object and allows adding links to it.

```
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
```
  EntityModel<Student> resource = EntityModel.of(student.get());
```

We add the link to retrieve all students method to the links.
```
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

Above example covers important concepts in enhancing resources with HATEOAS. 

However, you have to make the important decision: 
- What are the important resources related to a specific resource?

Go ahead and enhance the application with more HATEOAS links.


## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-hateoas
