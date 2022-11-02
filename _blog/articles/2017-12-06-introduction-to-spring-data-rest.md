---
layout:     post
title:   Introduction to Spring Data Rest - Create RESTful APIs at F1 Speed
date:    2022-07-07 12:31:19
summary: Learn to create RESTful Services with Spring Data Rest and Spring Boot. We will create a JPA Project connecting to H2 (in memory database) and add Spring Data JPA Rest Starter to expose API.
categories:  SpringBoot
permalink:  /introduction-to-spring-data-rest-using-spring-boot
image: /images/spring-boot-application.png
---

![Image](/images/spring-initializer-web-h2-devtools-jpa.png "Web, JPA, H2 and Developer Tools")

This guide will help you expose RESTful API using a combination of Spring Boot, JPA/Hibernate, Spring Data and Spring Data REST. We will use H2 as the in memory database. 
 
![Image](/images/SpringDataREST-ExectingPostRequest.png "Spring Data Rest with Spring Boot and JPA - Post Request")

## You will learn
- How to create a project using Spring Boot, Spring Boot Starter JPA, Spring Boot Data Rest Starter and H2?
- How to expose RESTful API using Spring Boot Data Rest?
- How to connect a Spring Boot project to database using JPA/Hibernate?
- How to create a simple JPA Entity with a primary key?
- How to write a simple repository interface extending JpaRepository interface?



## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringDataRESTwithSpringBoot-ProjectStructure.png "Spring Data Rest with Spring Boot and JPA - Project Structure") 

A few details:

- `Student.java` - Entity bean to store student details.
- `StudentDataRestRepository.java` - Extends PagingAndSortingRepository. Acts as a @RepositoryRestResource to provide RESTful API/Services to update/retrieve Student entities.
- `data.sql` - We use data.sql to populate the initial student data.
- SpringBoot2JPAWithSpringDataRestApplication.java - The main Spring Boot Application class which is used to launch up the application. 
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter JPA, Spring Boot Data REST Starter and Spring Boot Starter Web other than Developer Tools and H2 as in memory database.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-jpa-spring-data-rest

## Big Picture - How does Spring Data REST Work?

Let's start with JPA before moving onto Spring Data and Spring Data REST.

### JPA
JPA allows to map application classes to tables in database.
- Entity Manager - Once the mappings are defined, entity manager can manage your entities. Entity Manager handles all interactions with the database
- JPQL (Java Persistence Query Language) - Provides ways to write queries to execute searches against entities. Important thing to understand is the these are different from SQL queries. JPQL queries already understand the mappings that are defined between entities. We can add additional conditions as needed.
- Criteria API defines a Java based API to execute searches against databases.

### What is Spring Data?

From http://projects.spring.io/spring-data/
> Spring Data's mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store. It makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services.

To make it simpler, Spring Data provides Abstractions (interfaces) you can use irrespective of underlying data source. 

An example is shown below
```java
interface TodoRepository extends CrudRepository<Todo, Long> {
```

Core idea is that
> You can define a simple repository and use it to insert, update, delete and retrieve todo entities from the database - without writing a lot of code.


### Spring Data REST

Spring Data REST can be used to expose HATEOAS RESTful resources around Spring Data repositories.

An example using JPA is shown below

```java
@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository
		extends PagingAndSortingRepository<Todo, Long> {

```

> Without writing a lot of code, we can expose RESTful API around Spring Data Repositories.

A few example REST Services that are automatically exposed are shown below:

#### POST 
- URL : http://localhost:8080/todos
- Use Header : Content-Type:application/json

Request Content 
```json
{
  "user": "Jill",
  "desc": "Learn Hibernate",
  "done": false
}
```
Response Content
```
{
  "user": "Jill",
  "desc": "Learn Hibernate",
  "done": false,
  "_links": {
    "self": {
      "href": "http://localhost:8080/todos/1"
    },
    "todo": {
      "href": "http://localhost:8080/todos/1"
    }
  }
}
```
The response contains the href of the newly created resource.

#### GET

- URI - http://localhost:8080/todos

Response
```json
{
  "_embedded" : {
    "todos" : [ {
      "user" : "Jill",
      "desc" : "Learn Hibernate",
      "done" : false,
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/todos/1"
        },
        "todo" : {
          "href" : "http://localhost:8080/todos/1"
        }
      }
    } ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/todos"
    },
    "profile" : {
      "href" : "http://localhost:8080/profile/todos"
    },
    "search" : {
      "href" : "http://localhost:8080/todos/search"
    }
  },
  "page" : {
    "size" : 20,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  }
}
```

## Creating the Project with Spring Initializr

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jpa.png "Web, JPA, H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.jpa.spring.data.rest.example` as Group
  - Choose `spring-boot-2-jpa-spring-data-rest` as Artifact
  - Choose following dependencies
    - Web
    - JPA
    - H2
    - DevTools
    - Rest Repositories
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

> Do not forget to add the dependency on "Rest Repositories" i.e. Spring Boot Data Rest Starter.

## Starter Projects in pom.xml

Below is the list of starter projects in pom.xml. 

```
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-rest</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
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
```
## Understanding Spring Boot Starter Data Rest

Below picture highlights some of the dependencies that are part of the imported Spring Boot project.

![Image](/images/spring-boot-starter-data-rest-dependencies.png "Spring Boot Starter Data Rest Dependencies")

> Key Question : How did all these dependencies come in?

All these dependencies are defined in spring-boot-starter-jpa and spring-boot-starter-data-rest. As soon as we include them in our project (pom.xml), we get the following features from a wide variety of dependencies
- Spring Data
- Spring Data Rest
- AOP
- Transaction Management
- JPA API
- JPA Implementation - Default Hibernate
- JDBC

Extract below shows some code from pom.xml of spring-boot-starter-data-rest.
```
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-json</artifactId>
      <version>2.3.1.RELEASE</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>2.3.1.RELEASE</version>
      <scope>compile</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.data</groupId>
      <artifactId>spring-data-rest-webmvc</artifactId>
      <version>3.0.1.RELEASE</version>
      <scope>compile</scope>
    </dependency>
```

## Enable H2 Console 

We will use H2 as the database. 

H2 provides a web interface called H2 Console to see the data. Let's enable h2 console in the application.properties.

/src/main/resources/application.properties
```properties
# Enabling H2 Console
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default

```

When you reload the application, you can launch up H2 Console at http://localhost:8080/h2-console.

![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

> Tip - Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

When you use the right JDBC URL given above, you should see an empty schema when you click `Connect` button.

![Image](/images/H2-Console-Empty-Schema.png "H2 Console Empty Page") 

## Create Your First JPA Entity

The first step is to create a JPA Entity. Lets create a simple Student Entity with a primary key id.


```java
package com.in28minutes.springboot.jpa.hibernate.h2.example.student;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String passportNumber;

```

Important things to note:
 - ```@Entity```: Specifies that the class is an entity. This annotation is applied to the entity class.
 - ```@Id```: Specifies the primary key of an entity.
 - ```@GeneratedValue```: Provides for the specification of generation strategies for the values of primary keys.
 - ```public Student()```: Default constructor to make JPA Happy


When the application reloads, you can launch H2 console at http://localhost:8080/h2-console.

You will see that a new table called 'student' is created in H2 Console.

> How did the Student table get created?

Its because of Spring Boot Auto Configuration. 

> You can read more about auto configuration here - http://www.springboottutorial.com/spring-boot-auto-configuration

Let's now populate some data into the student table.

/src/main/resources/data.sql

```
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```

When the application reloads you would see following statements in the log indicating that the sql files are picked up.

```
Executing SQL script from URL [file:/in28Minutes/git/spring-boot-examples/spring-boot-2-jdbc-with-h2/target/classes/data.sql]
```

After App Reload, When you login to H2 Console (http://localhost:8080/h2-console) you can see that the student table is created and the data is populated.

![Image](/images/H2-Console-With-Student.png "H2 Console With Student")

## Create Spring Data Rest Repository class to expose Student API

Code below shows the Spring Data Rest Repository to expose API around the Student resource.

/src/main/java/com/in28minutes/springboot/jpa/spring/data/rest/example/student/StudentDataRestRepository.java

```java
@RepositoryRestResource(path = "students", collectionResourceRel = "students")
public interface StudentDataRestRepository extends PagingAndSortingRepository<Student, Long>{

}
```
`RepositoryRestResource` annotation is used to expose Spring Data Rest services

When the application reloads, you would see that there are a number of new statements in the console log.

```
Mapped "{[/ || ],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.http.HttpEntity<org.springframework.data.rest.webmvc.RepositoryLinksResource> org.springframework.data.rest.webmvc.RepositoryController.listRepositories()
Mapped "{[/{repository}],methods=[HEAD],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<?> org.springframework.data.rest.webmvc.RepositoryEntityController.headCollectionResource(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.data.rest.webmvc.support.DefaultedPageable) throws org.springframework.web.HttpRequestMethodNotSupportedException
Mapped "{[/{repository}],methods=[POST],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryEntityController.postCollectionResource(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.data.rest.webmvc.PersistentEntityResource,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler,java.lang.String) throws org.springframework.web.HttpRequestMethodNotSupportedException
Mapped "{[/{repository}/{id}],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<org.springframework.hateoas.Resource<?>> org.springframework.data.rest.webmvc.RepositoryEntityController.getItemResource(org.springframework.data.rest.webmvc.RootResourceInformation,java.io.Serializable,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler,org.springframework.http.HttpHeaders) throws org.springframework.web.HttpRequestMethodNotSupportedException
Mapped "{[/{repository}/{id}],methods=[PUT],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<? extends org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryEntityController.putItemResource(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.data.rest.webmvc.PersistentEntityResource,java.io.Serializable,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler,org.springframework.data.rest.webmvc.support.ETag,java.lang.String) throws org.springframework.web.HttpRequestMethodNotSupportedException
Mapped "{[/{repository}/{id}],methods=[PATCH],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryEntityController.patchItemResource(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.data.rest.webmvc.PersistentEntityResource,java.io.Serializable,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler,org.springframework.data.rest.webmvc.support.ETag,java.lang.String) throws org.springframework.web.HttpRequestMethodNotSupportedException,org.springframework.data.rest.webmvc.ResourceNotFoundException
Mapped "{[/{repository}/{id}],methods=[DELETE],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<?> org.springframework.data.rest.webmvc.RepositoryEntityController.deleteItemResource(org.springframework.data.rest.webmvc.RootResourceInformation,java.io.Serializable,org.springframework.data.rest.webmvc.support.ETag) throws org.springframework.data.rest.webmvc.ResourceNotFoundException,org.springframework.web.HttpRequestMethodNotSupportedException
Mapped "{[/{repository}/search],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.data.rest.webmvc.RepositorySearchesResource org.springframework.data.rest.webmvc.RepositorySearchController.listSearches(org.springframework.data.rest.webmvc.RootResourceInformation)
Mapped "{[/{repository}/search/{search}],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<?> org.springframework.data.rest.webmvc.RepositorySearchController.executeSearch(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>,java.lang.String,org.springframework.data.rest.webmvc.support.DefaultedPageable,org.springframework.data.domain.Sort,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler,org.springframework.http.HttpHeaders)
Mapped "{[/{repository}/{id}/{property}/{propertyId}],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryPropertyReferenceController.followPropertyReference(org.springframework.data.rest.webmvc.RootResourceInformation,java.io.Serializable,java.lang.String,java.lang.String,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler) throws java.lang.Exception
Mapped "{[/{repository}/{id}/{property}],methods=[GET],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryPropertyReferenceController.followPropertyReference(org.springframework.data.rest.webmvc.RootResourceInformation,java.io.Serializable,java.lang.String,org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler) throws java.lang.Exception
Mapped "{[/{repository}/{id}/{property}],methods=[PATCH || PUT || POST],consumes=[application/json || application/x-spring-data-compact+json || text/uri-list],produces=[application/hal+json || application/json]}" onto public org.springframework.http.ResponseEntity<? extends org.springframework.hateoas.ResourceSupport> org.springframework.data.rest.webmvc.RepositoryPropertyReferenceController.createPropertyReference(org.springframework.data.rest.webmvc.RootResourceInformation,org.springframework.http.HttpMethod,org.springframework.hateoas.Resources<java.lang.Object>,java.io.Serializable,java.lang.String) throws java.lang.Exception
```
As we can see a number of URIs with varied request methods are exposed by Spring Data Rest. In the next section, we will explore all these resources.

## RESTful APIs exposed by Spring Data Rest

In this section, lets look at some of the Resource URIs that are exposed by Spring Data Rest.

### Spring Data Rest API - Get All Data for Resource

  localhost:8080/students
- Request Method - GET
Response
```json
{
  "_embedded" : {
    "students" : [ {
      "name" : "Ranga",
      "passportNumber" : "E1234567",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/students/10001"
        },
        "student" : {
          "href" : "http://localhost:8080/students/10001"
        }
      }
    }, {
      "name" : "Ravi",
      "passportNumber" : "A1234568",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/students/10002"
        },
        "student" : {
          "href" : "http://localhost:8080/students/10002"
        }
      }
    } ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/students{?page,size,sort}",
      "templated" : true
    },
    "profile" : {
      "href" : "http://localhost:8080/profile/students"
    }
  },
  "page" : {
    "size" : 20,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  }
}
```

Notes:
- `_embedded` - Details of all students are part of this JSON element.
- `_links` - This section contains the links to other related resources - HATEOAS. 
- `page` - This section contains the details of current page if we are using pagination. For example - http://localhost:8080/students?page=1 (0 indexed) will retrieve the second page of results. In this case, the page will be empty.
- Support for sorting - http://localhost:8080/students?sort=passportNumber : Sort by passport number. Ravi would appear in the results before Ranga because his passport starts with "A".

### Student RESTful API - POST Method

- URI - http://localhost:8080/students
- Request Method - POST
- Content-Type - application/json

Request Body Content
```
{
  "name": "Adam",
  "passportNumber": "Z1234567"
}

```

When we execute the above request, a new student is created.

Response
```
{
    "name": "Adam",
    "passportNumber": "Z1234567",
    "_links": {
        "self": {
            "href": "http://localhost:8080/students/1"
        },
        "student": {
            "href": "http://localhost:8080/students/1"
        }
    }
}
```
The response contains the URI to the created resource. Response Status - 201 CREATED.

Screenshot below shows a screenshot of executing the POST request using POSTMan

![Image](/images/SpringDataREST-ExectingPostRequest.png "Spring Data Rest with Spring Boot and JPA - Post Request")

### Student RESTful API - GET Method

- URI - http://localhost:8080/students
- Request Method - GET

When we execute the above request, details of a student are retrieved.

Response
```
{
    "name": "Adam",
    "passportNumber": "Z1234567",
    "_links": {
        "self": {
            "href": "http://localhost:8080/students/1"
        },
        "student": {
            "href": "http://localhost:8080/students/1"
        }
    }
}
```

### Student RESTful API - PUT Method

Used to update the details of a Student

- URI - http://localhost:8080/students/1
- Request Method - PUT
- Content-Type - application/json

Request Body Content
```
{
  "name": "Adam",
  "passportNumber": "Z12345678"
}

```

When we execute the above request, student details are updated.

Response
```
{
    "name": "Adam",
    "passportNumber": "Z12345678",
    "_links": {
        "self": {
            "href": "http://localhost:8080/students/1"
        },
        "student": {
            "href": "http://localhost:8080/students/1"
        }
    }
}
```
The response contains the URI to the updated resource.

### Student RESTful API - Delete Method

- URI - http://localhost:8080/students/1
- Request Method - DELETE

Student 1 is deleted.

### ALPS REST API for Resource Semantics

> ALPS is a data format for defining simple descriptions of application-level semantics, similar in complexity to HTML microformats. An ALPS document can be used as a profile to explain the application semantics of a document with an application-agnostic media type (such as HTML, HAL, Collection+JSON, Siren, etc.). This increases the reusability of profile documents across media types.

- URI - http://localhost:8080/profile/students 

Response
```
{
    "alps": {
        "version": "1.0",
        "descriptors": [
            {
                "id": "student-representation",
                "href": "http://localhost:8080/profile/students",
                "descriptors": [
                    {
                        "name": "name",
                        "type": "SEMANTIC"
                    },
                    {
                        "name": "passportNumber",
                        "type": "SEMANTIC"
                    }
                ]
            },
            {
                "id": "get-students",
                "name": "students",
                "type": "SAFE",
                "rt": "#student-representation",
                "descriptors": [
                    {
                        "name": "page",
                        "doc": {
                            "value": "The page to return.",
                            "format": "TEXT"
                        },
                        "type": "SEMANTIC"
                    },
                    {
                        "name": "size",
                        "doc": {
                            "value": "The size of the page to return.",
                            "format": "TEXT"
                        },
                        "type": "SEMANTIC"
                    },
                    {
                        "name": "sort",
                        "doc": {
                            "value": "The sorting criteria to use to calculate the content of the page.",
                            "format": "TEXT"
                        },
                        "type": "SEMANTIC"
                    }
                ]
            },
            {
                "id": "create-students",
                "name": "students",
                "type": "UNSAFE",
                "rt": "#student-representation"
            },
            {
                "id": "update-student",
                "name": "student",
                "type": "IDEMPOTENT",
                "rt": "#student-representation"
            },
            {
                "id": "delete-student",
                "name": "student",
                "type": "IDEMPOTENT",
                "rt": "#student-representation"
            },
            {
                "id": "get-student",
                "name": "student",
                "type": "SAFE",
                "rt": "#student-representation"
            },
            {
                "id": "patch-student",
                "name": "student",
                "type": "UNSAFE",
                "rt": "#student-representation"
            }
        ]
    }
}
```

## Other Features

Some of the other features of spring data rest include
- Paging and Sorting
- Customizing Serialization with Jackson’s ObjectMapper
- Projections
- Validation
- Security
- CORS Configurability

> Refer to official documentation of Spring Data Rest for more details - https://docs.spring.io/spring-data/rest/docs/3.0.2.RELEASE/reference/html/
