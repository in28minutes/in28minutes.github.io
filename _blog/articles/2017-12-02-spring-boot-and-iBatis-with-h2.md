---
layout:     post
title:   Spring Boot and iBatis with H2 - A Tutorial
date:       2022-07-07 12:31:19
summary:    Learn using Spring Boot Starter myBatis to connect Spring Boot to H2 (in memory database) using Object Mapping Framework - myBatis (iBatis).
categories:  SpringBootJPA
permalink:  /spring-boot-and-iBatis-with-h2-tutorial
image: /images/spring-data-category.png
---

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

This guide will help you create a simple project with Spring Boot. You will add code to the project to connect to H2 Database using myBatis. You will learn to write all the basic CRUD methods using myBatis.

![Image](/images/SpringBootwithmyBatis-ProjectStructure.png "Spring Boot with myBatis - Project Structure") 

 
## You will learn
- How to connect a Spring Boot project to database using myBatis?
- How to write a simple repository class with all the CRUD methods to execute queries using myBatis?
- How to execute basic queries using myBatis?
- How to create a project using Spring Boot, myBatis and H2?
- What are the basics of an in memory database?


## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootwithmyBatis-ProjectStructure.png "Spring Boot with myBatis - Project Structure") 

A few details:

- `Student.java` - The bean to store student details.
- `StudentMyBatisRepository.java` - Contains all the methods to store and retrieve student details to the H2 database.
- `schema.sql` - Since we are using an in memory database, we define the tables as part of our application code in this file.
- `data.sql` - We use data.sql to populate the initial student data.
- SpringBoot2MyBatisWithH2Application.java - The main Spring Boot Application class which is used to launch up the application. We will extend `CommandLineRunner` interface and implement `public void run(String... args)` method to launch the spring jdbc code when the server launches up.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter myBatis and Web other than Developer Tools and H2 as in memory database.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-myBatis-with-h2

## A little bit of Theory

JDBC
- JDBC stands for Java Database Connectivity
- It used concepts like Statement, PreparedStatement and ResultSet
- In the example below, the query used is ```Update todo set user=?, desc=?, target_date=?, is_done=? where id=?```
- The values needed to execute the query are set into the query using different set methods on the PreparedStatement
- Results from the query are populated into the ResultSet. We had to write code to liquidate the ResultSet into objects.

#### Update Todo
```java
Connection connection = datasource.getConnection();

PreparedStatement st = connection.prepareStatement(
		"Update todo set user=?, desc=?, target_date=?, is_done=? where id=?");

st.setString(1, todo.getUser());
st.setString(2, todo.getDesc());
st.setTimestamp(3, new Timestamp(
		todo.getTargetDate().getTime()));
st.setBoolean(4, todo.isDone());
st.setInt(5, todo.getId());

st.execute();

st.close();

connection.close();
```

### Spring JDBC

- Spring JDBC provides a layer on top of JDBC
- It used concepts like JDBCTemplate
- Typically needs lesser number of lines compared to JDBC as following are simplified
   - mapping parameters to queries
   - liquidating resultsets to beans
   - zero exception handling needed because all exceptions are converted to RuntimeExceptions.

### myBatis

MyBatis removes the need for manually writing code to set parameters and retrieve results. It provides simple XML or Annotation based configuration to map Java POJOs to database.

We compare the approaches used to write queries below:

- JDBC or Spring JDBC - ```Update todo set user=?, desc=?, target_date=?, is_done=? where id=?```
- myBatis - ```Update todo set user=#{user}, desc=#{desc}, target_date=#{targetDate}, is_done=#{isDone} where id=#{id}```

#### Update Todo and Retrieve Todo

```java
@Mapper
public interface TodoMybatisService
		extends TodoDataService {

	@Override
	@Update("Update todo set user=#{user}, desc=#{desc}, target_date=#{targetDate}, is_done=#{isDone} where id=#{id}")
	public void updateTodo(Todo todo) throws SQLException;

	@Override
	@Select("SELECT * FROM TODO WHERE id = #{id}")
	public Todo retrieveTodo(int id) throws SQLException;
}

```

## Creating the Project with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.rest.example` as Group
  - Choose `spring-boot-2-jdbc-with-h2` as Artifact
  - Choose following dependencies
    - Web
    - H2
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here TODO.

## Add the myBatis starter to pom.xml

myBatis is not a standard Spring Boot Starter project. We would need to add it manually to pom.xml.
```
<dependency>
	<groupId>org.mybatis.spring.boot</groupId>
	<artifactId>mybatis-spring-boot-starter</artifactId>
	<version>1.2.1</version>
</dependency>

```

Rebuild the project to see all the dependencies related to myBatis.

![Image](/images/myBatisDependencies.png "my Batis Dependencies")

## Initialize H2 in-memory database with the schema

We will use H2 as the database. 

H2 provides a web interface called H2 Console to see the data. Let's enable h2 console in the application.properties

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

### Create Schema using schema.sql and Data using data.sql

We will create a table called student with few simple columns. We can initialize a schema by create a `schema.sql` file in the resources.

/src/main/resources/schema.sql

```
create table student
(
   id integer not null,
   name varchar(255) not null,
   passport_number varchar(255) not null,
   primary key(id)
);
```

Let's also populate some data into the student table.

/src/main/resources/data.sql

```
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```

When the application reloads you would see following statements in the log indicating that the sql files are picked up
```
Executing SQL script from URL [file:PATH/schema.sql]
Executing SQL script from URL [file:PATH/data.sql]
```

When you login to H2 Console (http://localhost:8080/h2-console) you can see that the student table is created and the data is populated.

![Image](/images/H2-Console-With-Student.png "H2 Console With Student")

## Creating Student Bean

Lets create a simple Student bean with basic student information along with getters, setters and a toString method.

```java
package com.in28minutes.springboot.jdbc.h2.example.student;

public class Student {
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
## Create Repository method to Read Student information

We would want to start with creating a simple repository. `@Mapper` indicates that this is an myBatis mapper class.

```java
@Mapper
public interface StudentMyBatisRepository {

}

```
> Spring Boot Auto Configuration sees H2 in the classpath. It understands that we would want to talk to an in memory database. It auto configures a datasource and also a JdbcTemplate connecting to that datasource.

Let's create the findById method to retrieve a student by id in StudentJdbcRepository.
```java
@Select("SELECT * FROM student WHERE id = #{id}")
public Student findById(long id);
```

Notes
- `@Select("SELECT * FROM student WHERE id = #{id}")` - `@Select` highlights that this is a select query. `#{id}` is used to indicate that id is a parameter to this query.
- You can observe that are defining a simple interface method without the implementation.

We would want to execute findById method. To keep things simple we will make the SpringBoot2MyBatisWithH2Application class implement CommandLineRunner and implement run method to call the findById method on the repository.

/src/main/java/com/in28minutes/springboot/jdbc/h2/example/SpringBoot2JdbcWithH2Application.java

```java
@SpringBootApplication
public class SpringBoot2MyBatisWithH2Application implements CommandLineRunner {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StudentMyBatisRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBoot2MyBatisWithH2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		logger.info("Student id 10001 -> {}", repository.findById(10001L));
	}
}
```
Notes
- `@Autowired StudentMyBatisRepository repository;` - We will autowire StudentMyBatisRepository we created earlier.
- `public void run(String... args) throws Exception {` - Implement the run method defined in the CommandLineRunner interface. This method is executed as soon as the application is launched up.
- `logger.info("Student id 10001 -> {}", repository.findById(10001L))` - Log all the information about student id 10001.

When the application reloads you will see this in the log. 
```
Student id 10001 -> Student [id=10001, name=Ranga, passportNumber=E1234567]
```
> Congratulations on executing the first myBatis method! You can see how easy it is with Spring Boot.

Let's now add another method to retrieve details of all the students to StudentJdbcRepository.

```java
@Select("select * from student")
public List<Student> findAll();
```
Notes
- `@Select("select * from student")` - Since we want to return a list of students, we do not need to pass any parameters. Its a simple `@Select` query.

We can add a call to find all method in the run method of `SpringBoot2MyBatisWithH2Application.java`

```java

logger.info("All users 1 -> {}", repository.findAll());

```

You can see following output in the log when the project reloads.
```
All users 1 -> [Student [id=10001, name=Ranga, passportNumber=E1234567], Student [id=10002, name=Ravi, passportNumber=A1234568]]
```

## Implementing myBatis delete, insert and update methods

The code below shows the delete, insert and update methods.

```java
	@Delete("DELETE FROM student WHERE id = #{id}")
	public int deleteById(long id);

	@Insert("INSERT INTO student(id, name, passport) VALUES (#{id}, #{name}, #{passport})")
	public int insert(Student student);

	@Update("Update student set name=#{name}, passport=#{passport} where id=#{id}")
	public int update(Student student);


```

Notes 
- These methods are relatively straight forward.
- All methods use the appropriate annotation with the query and highlight the necessary parameters.

We can add a call to all the above methods in the run method of `SpringBoot2MyBatisWithH2Application.java`

```java

logger.info("Inserting -> {}", repository.insert(new Student(10010L, "John", "A1234657")));

logger.info("Update 10001 -> {}", repository.update(new Student(10001L, "Name-Updated", "New-Passport")));

repository.deleteById(10002L);

logger.info("All users 2 -> {}", repository.findAll());

```

You can see following output in the log when the project reloads.
```
Inserting -> 1
Update 10001 -> 1
All users 2 -> [Student [id=10001, name=Name-Updated, passportNumber=New-Passport], Student [id=10010, name=John, passportNumber=A1234657]]
```
> Awesome ! You've implemented all the CRUD methods using iBatis and Spring Boot.