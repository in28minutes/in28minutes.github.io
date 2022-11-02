---
layout:     post
title:   Introduction to Spring Data - Spring Data JPA, Spring Data REST and MongoDB
date:       2022-01-02 12:31:19
summary:  Spring Data's mission is to provide a familiar and consistent, Spring-based programming model for data access. In this tutorial, we will explore the different interfaces provided by Spring Data. We will take a quick peek into Spring Data JPA and Spring Data for MongoDB.
categories:  SpringBootJPA
permalink:  /introduction-to-spring-data-with-spring-boot
image: /images/spring-data-category.png
---

![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

This guide will help you understand the basics of Spring Data. We will look at the various options that Spring Data provides and a couple of examples - Spring Data JPA and Spring Data Mongodb.
 
## You will learn
- Basics of Spring Data
- Why is Spring Data needed? 
- What are the different interfaces provided by Spring Data?
- How to get started with Spring Data?



## What is Spring Data?

Think about the evolution of databases in the last few years.

When Spring Framework was created, in early 2000s, the only kind of database was relational database - Oracle, MS SQL Server, My SQL etc. In the last few years, there are a wide variety of databases that are getting popular - most of them not relational and not using SQL. Wide variety of terminology is used to refer to these databases. NoSQL, for example. 

ORM frameworks (Hibernate) and specifications(JPA) were good fit for the relational databases. But, the newer databases, have different needs.

From http://projects.spring.io/spring-data/
> Spring Data's mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store. It makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services.

To make it simpler, Spring Data provides Abstractions (interfaces) you can use irrespective of underlying data source. 

## Spring Data Commons

Spring Data Commons provides all the common abstractions that enable you to connect with different data stores. 


### Crud Repository
The key interface in Spring Data Commons is `CrudRepository`. It provides generic CRUD operations irrespective of the underlying data store. It extends Repository which is the base class for all the repositories providing access to data stores. 

All the methods in the `CrudRepository` interface are shown below

```
public interface CrudRepository<T, ID> extends Repository<T, ID> {
	<S extends T> S save(S entity);

	<S extends T> Iterable<S> saveAll(Iterable<S> entities);

	Optional<T> findById(ID id);

	boolean existsById(ID id);

	Iterable<T> findAll();

	Iterable<T> findAllById(Iterable<ID> ids);

	long count();

	void deleteById(ID id);

	void delete(T entity);

	void deleteAll(Iterable<? extends T> entities);

	void deleteAll();
}
```

The methods in the CrudRepository are self explanatory.

### PagingAndSortingRepository

The other important interface in Spring Data is PagingAndSortingRepository. PagingAndSortingRepository provides options to 
- Sort your data using `Sort` interface
- Paginate your data using `Pageable` interface, which provides methods for pagination - getPageNumber(), getPageSize(), next(), previousOrFirst() etc. 

public abstract interface PagingAndSortingRepository extends CrudRepository {
  
  public Iterable findAll(Sort sort);
  
  public Page findAll(Pageable pageable);

}

### Defining Custom Repositories

You can create a custom repository extending any of the repository classes - Repository, PagingAndSortingRepository or CrudRepository.

An example is shown below
```java
interface PersonRepository extends CrudRepository<User, Long> {
```

### Defining custom queries
Spring Data also provides the feature of query creation from interface method names.

Look at the example below:

```java
  List<Person> findByFirstNameAndLastname(String firstName, String lastname);
```

Above method helps you search a data store by passing in the first name and last name of a person. This would generate the appropriate query for the data store to return the person details.

> You can find more details in the spring data documentation - https://docs.spring.io/spring-data/commons/docs/current/reference/html/#repositories.query-methods.query-creation

### Auditing with Spring Data

Spring Data also provides auditing capabilities through simple annotations.

```
class Student {

  @CreatedBy
  private User createdUser;

  @CreatedDate
  private DateTime createdDate;

  // … further properties omitted
}
```

There are corresponding annotations for updates as well
- LastModifiedBy
- LastModifiedDate

## Spring Data Implementations

There are Spring Data Modules specific to the data store you would want to use.
- Spring Data JPA - Connect to relational databases using ORM frameworks.
- Spring Data MongoDB - Repositories for MongoDB.
- Spring Data REST - Exposes HATEOAS RESTful resources around Spring Data repositories.
- Spring Data Redis - Repositories for Redis.

### Spring Data JPA

Spring Data JPA helps you to connect to relational databases using ORM frameworks.

The dependency is shown below:

```
<dependencies>
  <dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
  </dependency>
<dependencies>
```

The default JPA implementation used is Hibernate.

The core interface is the JpaRepository.

```
public interface JpaRepository<T, ID> 
	extends PagingAndSortingRepository<T, ID>, 
	        QueryByExampleExecutor<T>
```

Some of the additional methods it provides (compared to PagingAndSortingRepository) are shown below. As you can see, all these methods are specific to JPA.

```
/**
 * Saves an entity and flushes changes instantly.
 *
 * @param entity
 * @return the saved entity
 */
<S extends T> S saveAndFlush(S entity);

	/**
 * Deletes the given entities in a batch which means it will create a single {@link Query}. Assume that we will clear
 * the {@link javax.persistence.EntityManager} after the call.
 *
 * @param entities
 */
void deleteInBatch(Iterable<T> entities);

/**
 * Deletes all entities in a batch call.
 */
void deleteAllInBatch();

```

> Recommended Reading for Spring Data JPA - http://www.springboottutorial.com/introduction-to-jpa-with-spring-boot-data-jpa


### Spring Data REST

Spring Data REST can be used to expose HATEOAS RESTful resources around Spring Data repositories.

An example using JPA is shown below

```java
@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository
		extends PagingAndSortingRepository<Todo, Long> {

```

A few example REST Services are shown below:


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

GET to http://localhost:8080/todos/1
```json
{
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
}
```

Spring Data Rest also supports search using column names
- Example - http://localhost:8080/todos?user=Jill

Spring Data Rest can be extended by defining custom methods in the repositories.
http://localhost:8080/todos/search/findByUser?user=Jill can be used expose specific search method defined below.

```java
@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository
		extends PagingAndSortingRepository<Todo, Long> {

	List<Todo> findByUser(@Param("user") String user);

}
```

Spring Data REST supports 
- Spring Data JPA
- Spring Data MongoDB
- Spring Data Neo4j
- Spring Data GemFire
- Spring Data Cassandra

> Recommended Reading for Spring Data Rest - http://www.springboottutorial.com/introduction-to-spring-data-rest-using-spring-boot

### Spring Data MongoDB

Spring Data MongoDB provides support for using MongoDB as data store.

The key interface is MongoRepository.

```java
public interface MongoRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> 
```

Some of the important methods (provided in addition to PagingAndSortingRepository) are shown below. You can see examples of search by example.

```

	/* 
	 * (non-Javadoc)
	 * @see org.springframework.data.repository.query.QueryByExampleExecutor#findAll(org.springframework.data.domain.Example)
	 */
	@Override
	<S extends T> List<S> findAll(Example<S> example);

	/* 
	 * (non-Javadoc)
	 * @see org.springframework.data.repository.query.QueryByExampleExecutor#findAll(org.springframework.data.domain.Example, org.springframework.data.domain.Sort)
	 */
	@Override
	<S extends T> List<S> findAll(Example<S> example, Sort sort);
```

