---
layout:  post
title:  Spring Data and Spring Data JPA - Quick Tutorial for Beginners
date:   2022-04-10 12:31:19
summary: In this article, we take a look at Spring Data and Spring Data JPA.
categories:  SpringBoot
permalink:  /introduction-to-spring-data-and-spring-data-jpa
image: /images/spring-data-category.png
---

In this article, we take a look at Spring Data and Spring Data JPA.

![image info](images/Capture-081-02.png)

### You will Learn

- What are the challenges with existing data store integration solutions?
- What is Spring Data?
- What are the aims of Spring Data?
- How does Spring Data abstract talking to different data stores?
- What is Spring Data JPA?
- How does Spring Data JPA help in making JPA easier?


### Challenges with Existing Data Store solutions

Let's start with looking at problems with some of the existing solutions for storing data to data stores.

#### Duplication of Code

Let's start with looking at one of the important challenges with JPA - Duplicate code.

Let's look at a couple of data layer classes to manage Passport and Student entities.

#### Passport

```java

	@PersistenceContext
	private EntityManager entityManager;
	
	public Passport getPassport(final long id) {
		return entityManager.find(Passport.class, id);
	}

	public Passport createPassport(Passport passport) {
		return entityManager.merge(passport);
	}

```   

#### Student

```java

	@PersistenceContext
	private EntityManager entityManager;

	public Student retrieveStudent(final long id) {
		return entityManager.find(Student.class, id);
	}

	public Student createStudent(Studetn student) {
		return entityManager.merge(student);
	}

```

When we look at the above two snippets of code, we can see that there is a lot of similarity in the code structurally. Any additional methods written for the two entities would be very similar.

A straightforward approach to deal with such duplication would be to create a common interface to extract the functionality, and implement that interface in an application.

#### Explosion Of Data Stores

Nowadays, we are not confined to talking to just relational databases. We have a variety of data stores including NoSQL data stores such as MongoDB, Hadoop and Cassandra.

### Spring Data

Spring Data provides common abstractions to store and retrieve data from a data store. This eliminates the need to connect and interact differently, with different types of data stores. 

Such abstractions allow you to connect in the same way to relational databases and NO-SQL databases. It enables you to switch effortlessly between data stores.

### Spring Data JPA

Spring Data JPA is an extension of Spring Data, to connect to JPA - concerned with talking with relational databases. 

#### Using Spring Data JPA

This is how you go about using this framework:

```java

	public interface StudentRepository extends CrudRepository<Student, Long> {
		//...
	}

	public interface PassportRepository extends CrudRepository<Passport, Long> {
		//...
	}

```

Each of the repositories extends the base ```CrudRepository```, which is a repository that supports the CRUD operations - Create, read, Update and Delete.

#### CrudRepository Interface

Let's look at some of the methods in ```CrudRepository``` ```interface```:

```java

	public interface Crudrepository<T, ID> extends Repository<T, ID> {
		<S extends T> S save(Entity s);
		Optional<T> findById(ID id);
		boolean existsById(ID id);
		Iterable<T> findAll();
		void deleteById(ID id);
		long count();
		//Other methods
	}

```

### Exploring Other Repositories

The ```CrudRepository``` is a very useful interface, and there are other repositories built on top of this. Let's look at a few of them.

#### The PaginationAndSortingRepository

```java

	public interface PaginationAndSortingRepository<T, ID> extends CrudRepository<T,ID> {
		Iterable<T> findAll(Sort sort);
		Page<T> findAll(Pageable pageable);
	}

```

If you wanted to access a particular page in a set of search results, or want them sorted in a specific order, then this repository is of good use. 

Do check out our video on the same topic:

[![image info](images/Capture-083-01.png)](https://www.youtube.com/watch?v=bg0_9FsOI64)

### Summary

In this article, we talked about Spring Data, and Spring Data JPA. 

Spring Data offers common abstractions, which allows us to talk to different data stores, both relational and otherwise. It is independent of any kind of data store. Spring Data JPA is an Spring Data Extension to work with JPA relational data stores.

