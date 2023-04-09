---
layout:     post
title:   Introduction to Spring Data - Spring Data JPA, Spring Data REST and MongoDB
date:       2023-04-04 12:31:19
summary:  The objective of Spring Data is to provide a familiar and consistent Spring-based programming model for data access. In this article, we will look at the various APIs offered by Spring Data. We'll look at Spring Data JPA and Spring Data for MongoDB briefly.
categories:  SpringBootJPA
permalink:  /introduction-to-spring-data-with-spring-boot
image: /images/spring-data-category.png
---

![Image](/images/SpringBootWebApplication-StaticContent.png "Spring Boot Web Application with jQuery and Bootstrap- All Files") 

This article will teach you the fundamentals of Spring Data. We will look at the different Spring Data alternatives as well as two examples: Spring Data JPA and Spring Data Mongodb.
 
## You will learn
- Basics of Spring Data
- Why is Spring Data needed? 
- What are the different interfaces provided by Spring Data?
- How to get started with Spring Data?



## What is Spring Data?

Consider the progress of databases in recent years.

When Spring Framework was built in the early 2000s, the only type of database available was relational databases such as Oracle, MS SQL Server, My SQL, and others. In recent years, a broad range of databases have gained popularity, the majority of which are not relational and do not use SQL. These databases are referred to using a wide range of words. For instance, consider NoSQL. 

ORM frameworks (Hibernate) and standards (JPA) suited relational databases well. Nevertheless, modern databases have different requirements.

From http://projects.spring.io/spring-data/
> The objective of Spring Data is to provide a familiar and consistent Spring-based programming model for data access while keeping the unique characteristics of the underlying data store. It makes data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services simple to utilise.

To make things easier, Spring Data provides Abstractions (interfaces) that may be used regardless of the underlying data source. 

## Spring Data Commons

Spring Data Commons offers all of the common abstractions needed to connect to various data storage. 


### Crud Repository
`CrudRepository` is the main interface in Spring Data Commons. It offers general CRUD activities regardless of the underlying data storage. It extends Repository, which is the foundation class for all repositories that provide data store access. 

The methods of the `CrudRepository` interface are all listed below.

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

The CrudRepository's methods are self-explanatory.

### PagingAndSortingRepository

PagingAndSortingRepository is another key Spring Data interface. PagingAndSortingRepository allows you to
- Sort your data using `Sort` interface
- Paginate your data using `Pageable` interface, which provides methods for pagination - getPageNumber(), getPageSize(), next(), previousOrFirst() etc. 

public abstract interface PagingAndSortingRepository extends CrudRepository {
  
  public Iterable findAll(Sort sort);
  
  public Page findAll(Pageable pageable);

}

### Defining Custom Repositories

You may build your own repository by extending one of the repository classes: Repository, PagingAndSortingRepository, or CrudRepository.

An example is shown below
```java
interface PersonRepository extends CrudRepository<User, Long> {
```

### Defining custom queries
Spring Data also supports query generation from interface method names.

Consider the following example:

```java
  List<Person> findByFirstNameAndLastname(String firstName, String lastname);
```

The approach described above allows you to search a data store by entering a person's first and last name. This would construct the proper query for the data store, which would yield the person's information.

> You can find more details in the spring data documentation - https://docs.spring.io/spring-data/commons/docs/current/reference/html/#repositories.query-methods.query-creation

### Auditing with Spring Data

Spring Data also supports auditing with simple annotations.

```java
class Student {

  @CreatedBy
  private User createdUser;

  @CreatedDate
  private DateTime createdDate;

  // further properties omitted
}
```

There are corresponding annotations for updates as well
- LastModifiedBy
- LastModifiedDate

## Spring Data Implementations

There are Spring Data Modules for any data store you want to utilise.
- Spring Data JPA - ORM frameworks are used to connect to relational databases.
- Spring Data MongoDB - Repositories for MongoDB.
- Spring Data REST - HATEOAS RESTful resources are exposed around Spring Data repositories.
- Spring Data Redis - Repositories for Redis.

### Spring Data JPA

Spring Data JPA makes it possible to connect to relational databases through ORM frameworks.

The dependency is shown below:

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
  </dependency>
<dependencies>
```

Hibernate is the default JPA implementation.

The core interface is the JpaRepository.

```java
public interface JpaRepository<T, ID> 
	extends PagingAndSortingRepository<T, ID>, 
	        QueryByExampleExecutor<T>
```

Some of the extra methods it provides (in comparison to PagingAndSortingRepository) are listed below. As you can see, all of these methods are JPA-specific.

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

Spring Data REST may be used to deliver HATEOAS RESTful resources that are nested within Spring Data repositories.

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
```json
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

Spring Data REST also allows you to search by column name.
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

Spring Data MongoDB supports the use of MongoDB as a data storage.

The key interface is MongoRepository.

```java
public interface MongoRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> 
```

Some of the most significant methods (in addition to PagingAndSortingRepository) are listed below. Search samples may be found here.

```java

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

