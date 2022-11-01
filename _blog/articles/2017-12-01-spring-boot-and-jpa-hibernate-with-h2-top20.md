---
layout:     post
title:      Integrating Hibernate and JPA with Spring Boot
date:       2022-07-02 07:55:19
summary:    Learn using Spring Boot Starter JPA to connect Spring Boot to H2 (in memory database) using Hibernate/JPA. You will learn the basics of JPA and Hibernate - Entities and Keys. We will create a simple repository extending JPARepository and explore different methods it exposes.
categories:  SpringBootJPA
permalink:  /hibernate-jpa-tutorial-with-spring-boot-starter-jpa
image: /images/spring-data-category.png
---

![Image](/images/spring-initializer-web-h2-devtools-jpa.png)

This guide will help you create a simple project with Spring Boot and connect to a database using Hibernate/JPA. We will use Spring Boot Starter JPA and in memory database H2.

![Image](/images/JPA_02_Architecture.png "JPA Architecuture")
 
## You will learn
- Basics of JPA/Hibernate
- How to create a project using Spring Boot, Spring Boot Starter JPA and H2?
- How to use Spring Boot Starter JPA?
- How to connect a Spring Boot project to database using JPA/Hibernate?
- How to create a simple JPA Entity with a primary key?
- How to write a simple repository interface extending JpaRepository interface?
- What are the basics of an in memory database?

## Spring Boot and Hibernate Course

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://links.in28minutes.com/MISC-JPA){:target="_blank"}



## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootwithJPA-ProjectStructure.png "Spring Boot with JPA - Project Structure") 

A few details:

- `Student.java` - Entity bean to store student details.
- `StudentRepository.java` - Extends JpaRepository. Acts as a repository to update/retrieve Student entities.
- `data.sql` - We use data.sql to populate the initial student data.
- SpringBoot2JPAWithHibernateAndH2Application.java - The main Spring Boot Application class which is used to launch up the application. We will extend `CommandLineRunner` interface and implement `public void run(String... args)` method to launch the spring jpa repository methods when the server launches up.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter JPA and Web other than Developer Tools and H2 as in memory database.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-jpa-with-hibernate-and-h2





## How does JPA/Hibernate Work?

Databases are designed with Tables/Relations. Java objects are designed using OOPS. We would want to store the data from objects into tables and vice-versa.

Earlier approaches involved writing SQL Queries. JDBC, Spring JDBC and myBatis were popular approaches.

However, JPA evolved as a result of a different thought process. 

> How about mapping the objects directly to tables/relationships?
 
This Mapping is also called ORM - Object Relational Mapping. Before JPA, ORM was the term more commonly used to refer to these frameworks. Thats one of the reasons, Hibernate is called a ORM framework.

## Important Concepts in JPA

![Image](/images/JPA_02_Architecture.png "JPA Architecuture")

JPA allows to map application classes to tables in database.
- Entity Manager - Once the mappings are defined, entity manager can manage your entities. Entity Manager handles all interactions with the database
- JPQL (Java Persistence Query Language) - Provides ways to write queries to execute searches against entities. Important thing to understand is the these are different from SQL queries. JPQL queries already understand the mappings that are defined between entities. We can add additional conditions as needed.
- Criteria API defines a Java based API to execute searches against databases.

## JPA vs Hibernate

Hibernate is one of the most popular ORM frameworks. 

JPA defines the specification. It is an API. 
 - How do you define entities?
 - How do you map attributes?
 - How do you map relationships between entities?
 - Who manages the entities?

Hibernate is one of the popular implementations of JPA.
 - Hibernate understands the mappings that we add between objects and tables. It ensures that data is stored/retrieved from the database based on the mappings.
 - Hibernate also provides additional features on top of JPA. But depending on them would mean a lock in to Hibernate. You cannot move to other JPA implementations like Toplink.

## Creating the Project with Spring Initializr

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jpa.png "Web, JPA, H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.rest.example` as Group
  - Choose `spring-boot-2-jpa-with-hibernate-and-h2` as Artifact
  - Choose following dependencies
    - Web
    - JPA
    - H2
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

## Starter Projects in pom.xml

Below is the list of starter projects in pom.xml. 

```
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

## Understanding Spring Boot Starter JPA

Below picture highlights some of the dependencies that are part of the imported JPA project.

![Image](/images/spring-boot-starter-jpa-dependencies.png "Spring Boot Starter JPA Dependencies")

> Key Question : How did all these dependencies come in?

All these dependencies are defined in spring-boot-starter-jpa. As soon as we include Spring Boot Starter JPA in our project (pom.xml), we get the following features from a wide variety of dependencies
- AOP
- Transaction Management
- JPA API
- JPA Implementation - Default Hibernate
- JDBC

Extract below shows some code from pom.xml of spring-boot-starter-jpa.
```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-aop</artifactId>
  <version>3.0.0-M3</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jdbc</artifactId>
  <version>3.0.0-M3</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.hibernate</groupId>
  <artifactId>hibernate-core</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>jakarta.transaction</groupId>
  <artifactId>jakarta.transaction-api</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.springframework.data</groupId>
  <artifactId>spring-data-jpa</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-aspects</artifactId>
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
spring.data.jpa.repositories.bootstrap-mode=default
spring.jpa.defer-datasource-initialization=true
```

When you reload the application, you can launch up H2 Console at http://localhost:8080/h2-console.

![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

> Tip - Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

When you use the right JDBC URL given above, you should see an empty schema when you click `Connect` button.

![Image](/images/H2-Console-Empty-Schema.png "H2 Console Empty Page") 

### Create Your First JPA Entity

The first step is to create a JPA Entity. Lets create a simple Student Entity with a primary key id.


```java
package com.in28minutes.springboot.jpa.hibernate.h2.example.student;

// Changed from javax to jakarta
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String passportNumber;

	public Student() {
		super();
	}

	public Student(Long id, String name, String passportNumber) {
		super();
		this.id = id;
		this.name = name;
		this.passportNumber = passportNumber;
	}

	public Student(String name, String passportNumber) {
		super();
		this.name = name;
		this.passportNumber = passportNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassportNumber() {
		return passportNumber;
	}

	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}

	@Override
	public String toString() {
		return String.format("Student [id=%s, name=%s, passportNumber=%s]", id, name, passportNumber);
	}

}
```

Important things to note:
 - ```@Entity```: Specifies that the class is an entity. This annotation is applied to the entity class.
 - ```@Id```: Specifies the primary key of an entity.
 - ```@GeneratedValue```: Provides for the specification of generation strategies for the values of primary keys.
 - ```public Student()```: Default constructor to make JPA Happy


When the application reloads, you can launch H2 console at http://localhost:8080/h2-console.

You will see that a new table called 'student' is created in H2 Console.

> How did the Student table get created?

Its because of Spring Boot Auto Configuration. We will talk about this a little later.

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

## Create Repository class to Read Student information

/src/main/java/com/in28minutes/springboot/jpa/hibernate/h2/example/student/StudentRepository.java

We create a simple interface StudentRepository extending JpaRepository.

```java
package com.in28minutes.springboot.jpa.hibernate.h2.example.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
```
Notes
- We will talk about all the methods in the JpaRepository a little later.
- `public interface StudentRepository extends JpaRepository<Student, Long>` - We are extending JpaRepository using two generics - Student & Long. Student is the entity that is being managed and the primary key of Student is Long.

### JpaRepository

JpaRepository (Defined in Spring Data JPA) is the JPA specific Repository interface.

```java
public interface JpaRepository<T, ID extends Serializable>
		extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
```

> JpaRepository extends PagingAndSortingRepository which in turn extends CrudRepository interface. So, JpaRepository inherits all the methods from the two interfaces shown below.

PagingAndSortingRepository
```java
public abstract interface PagingAndSortingRepository extends CrudRepository {
  
  public abstract Iterable findAll(Sort arg0);
  
  public abstract Page findAll(Pageable arg0);

}
```

CrudRepository
```java
public interface CrudRepository<T, ID extends Serializable>
    extends Repository<T, ID> {

    <S extends T> S save(S entity);

    T findOne(ID primaryKey);       

    Iterable<T> findAll();          

    Long count();                   

    void delete(T entity);          

    boolean exists(ID primaryKey);  

    // … more functionality omitted.
}
```

## Enable Debug Logging for Hibernate and Queries

Before we go any further, let's enable logging for all queries generated by Hibernate. We also enable statistics and format generated sql statements.

### /src/main/resources/application.properties

```properties
#Turn Statistics on
spring.jpa.properties.hibernate.generate_statistics=true
logging.level.org.hibernate.stat=debug
# Show all queries
spring.jpa.show-sql=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.type=trace
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default
spring.jpa.defer-datasource-initialization=true
```

Some of the log that is generated (later when we execute queries) when we turn statistics on is shown below.

Session Level Metrics
```
i.StatisticalLoggingSessionEventListener : Session Metrics {
    23004 nanoseconds spent acquiring 1 JDBC connections;
    0 nanoseconds spent releasing 0 JDBC connections;
    41930 nanoseconds spent preparing 1 JDBC statements;
    174065 nanoseconds spent executing 1 JDBC statements;
    0 nanoseconds spent executing 0 JDBC batches;
    0 nanoseconds spent performing 0 L2C puts;
    0 nanoseconds spent performing 0 L2C hits;
    0 nanoseconds spent performing 0 L2C misses;
    0 nanoseconds spent executing 0 flushes (flushing a total of 0 entities and 0 collections);
    5125 nanoseconds spent executing 1 partial-flushes (flushing a total of 0 entities and 0 collections)
```

Queries and Parameters
```
Hibernate: 
    select
        student0_.id as id1_0_,
        student0_.name as name2_0_,
        student0_.passport_number as passport3_0_ 
    from
        student student0_
2017-12-05 10:20:59.457 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([id1_0_] : [BIGINT]) - [1]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([name2_0_] : [VARCHAR]) - [John]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([passport3_0_] : [VARCHAR]) - [A1234657]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([id1_0_] : [BIGINT]) - [10001]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([name2_0_] : [VARCHAR]) - [Name-Updated]
2017-12-05 10:20:59.458 TRACE 26877 --- [  restartedMain] o.h.type.descriptor.sql.BasicExtractor   : extracted value ([passport3_0_] : [VARCHAR]) - [New-Passport]
2017-12-05 10:20:59.458 DEBUG 26877 --- [  restartedMain] o.h.s.internal.ConcurrentStatisticsImpl  : HHH000117: HQL: select generatedAlias0 from Student as generatedAlias0, time: 1ms, rows: 2

```

## Exploring JpaRepository methods

Code belows shows the SpringBoot2JPAWithHibernateAndH2Application class extended to execute some of the StudentRepository methods.

```java
@SpringBootApplication
public class SpringBoot2JPAWithHibernateAndH2Application implements CommandLineRunner {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StudentRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBoot2JPAWithHibernateAndH2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//Code to run at application startup
	}
}

```

> Spring Boot Auto Configuration sees H2 in the classpath. It understands that we would want to talk to an in memory database. It auto configures a datasource and also a JdbcTemplate connecting to that datasource.

Important Things To Note
- `SpringBoot2JPAWithHibernateAndH2Application implements CommandLineRunner` - Implementing CommandLineRunner helps to execute the repository methods at start of the application.
- `public void run(String... args) throws Exception {` - Implement the run method defined in the CommandLineRunner interface. This method is executed as soon as the application is launched up.

Let's extend the `run` method to execute a few methods on the student repository.

```java
@Override
public void run(String... args) throws Exception {

	logger.info("Student id 10001 -> {}", repository.findById(10001L));
	
	logger.info("All users 1 -> {}", repository.findAll());
	
	//Insert
	logger.info("Inserting -> {}", repository.save(new Student("John", "A1234657")));

	//Update
	logger.info("Update 10001 -> {}", repository.save(new Student(10001L, "Name-Updated", "New-Passport")));

	repository.deleteById(10002L);
	
	logger.info("All users 2 -> {}", repository.findAll());
}

```

Important points to Note:
- findById, findAll, deleteById methods are self explanatory.
- `save' method is used for both insertion and updates. If the entity is already present in the database, it is updated. Else, it is inserted.

Output from above statements when the code is run is shown below:
```
Student id 10001 -> Optional[Student [id=10001, name=Ranga, passportNumber=E1234567]]
All users 1 -> [Student [id=10001, name=Ranga, passportNumber=E1234567], Student [id=10002, name=Ravi, passportNumber=A1234568]]
Inserting -> Student [id=1, name=John, passportNumber=A1234657]
Update 10001 -> Student [id=10001, name=Name-Updated, passportNumber=New-Passport]
All users 2 -> [Student [id=1, name=John, passportNumber=A1234657], Student [id=10001, name=Name-Updated, passportNumber=New-Passport]]

```

## Few more advanced JPA/Hibernate ORM Mappings

Lets look at a few more examples to understand how JPA can be used to map objects to tables.

#### Example 1 - Relationships @ManyToMany

Relationships between objects are expressed in a different way compared to relationship between tables.

Each Employee can have multiple Tasks. Each Task can be shared by multiple Employees. There is a Many to Many relationship between them. We use @ManyToMany annotation to establish the relationship.

```java
public class Employee {
   
     //Some other code
	
	@ManyToMany
	private List<Task> tasks;
}

public class Task {

     //Some other code

	@ManyToMany(mappedBy = "tasks")
	private List<Employee> employees;
}
```

```sql
CREATE TABLE employee 
  ( 
     id            BIGINT NOT NULL, 
     OTHER_COLUMNS
  ) 


  CREATE TABLE employee_tasks 
  ( 
     employees_id BIGINT NOT NULL, 
     tasks_id     INTEGER NOT NULL 
  ) 

  CREATE TABLE task 
  ( 
     id          INTEGER GENERATED BY DEFAULT AS IDENTITY, 
     OTHER_COLUMNS
  ) 

```

#### Example 2 - Inheritance Startegies - InheritanceType.SINGLE_TABLE

Some times multiple classes are mapped to a single table and vice-versa. In these situations, we define a inheritance strategy. In this example, we use a strategy of InheritanceType.SINGLE_TABLE.

Objects

```java
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "EMPLOYEE_TYPE")
public  class Employee {	
    //Other Employee Attributes
}

public class FullTimeEmployee extends Employee {
	protected Integer salary;
}

public class PartTimeEmployee extends Employee {
	protected Float hourlyWage;
}
```

Tables

```sql
CREATE TABLE employee 
  ( 
     employee_type VARCHAR(31) NOT NULL, 
     id            BIGINT NOT NULL, 
     city          VARCHAR(255), 
     state         VARCHAR(255), 
     street        VARCHAR(255), 
     zip           VARCHAR(255), 

     hourly_wage   FLOAT,  --PartTimeEmployee

     salary        INTEGER, --FullTimeEmployee

     PRIMARY KEY (id) 
  ) 

```

## Complete Code Example

Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-jpa-with-hibernate-and-h2