---
layout:     post
title:   Spring Boot and iBatis with H2 - A Tutorial
date:       2023-03-20 12:31:19
summary:    Discover how to connect Spring Boot to H2 (in memory database) using Object Mapping Framework - myBatis with Spring Boot Starter (iBatis).
categories:  SpringBootJPA
permalink:  /spring-boot-and-iBatis-with-h2-tutorial
image: /images/spring-data-category.png
---

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

This article will assist you in creating a basic Spring Boot project. You will add code to the project that will allow you to connect to the H2 Database using myBatis. You will learn how to use myBatis to build all of the core CRUD functions.

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

- `Student.java` - The bean is used to hold student information.
- `StudentMyBatisRepository.java` - Includes all of the methods for storing and retrieving student information from the H2 database.
- `schema.sql` - Because we are utilising an in memory database, we define the tables in this file as part of our application code.
- `data.sql` - To supply the initial student data, we utilise data.sql.
- SpringBoot2MyBatisWithH2Application.java - This is the primary Spring Boot Application class that is used to start the application. We will extend the `CommandLineRunner` interface and add the `public void run method (String... args)` method to launch the spring jdbc code when the server launches up.
- `pom.xml` - This package contains all of the dependencies required to develop this project. In addition to Developer Tools and H2, we will utilise Spring Boot Starter myBatis and Web.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse or IntelliJ.
- JDK 17+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-myBatis-with-h2

## A little bit of Theory

JDBC
- JDBC is an abbreviation for Java Database Connectivity.
- It made use of concepts such as `Statement, PreparedStatement, and ResultSet`.
- In the example below, the query used is ```Update todo set user=?, desc=?, target_date=?, is_done=? where id=?```
- The values required to run the query are entered into the query using various set methods on the PreparedStatement.
- The query's results are added to the ResultSet. To convert the ResultSet into objects, we had to create code.

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

MyBatis eliminates the requirement to write code to configure parameters and receive results. It allows you to link Java POJOs to databases using easy XML or Annotation-based setup.

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

myBatis isn't your typical Spring Boot Starter project. We would need to add it manually to pom.xml.
```xml
<dependency>
	<groupId>org.mybatis.spring.boot</groupId>
	<artifactId>mybatis-spring-boot-starter</artifactId>
	<version>3.0.1</version>
</dependency>

```

Rebuild the project to view all the dependencies linked to myBatis.

![Image](/images/myBatisDependencies.png "my Batis Dependencies")

## Initialize H2 in-memory database with the schema

We will use H2 as the database. 

H2 provides a web interface called H2 Console to see the data. Let's enable h2 console in the application.properties

/src/main/resources/application.properties
```properties
# Enabling H2 Console
# Enabling H2 Console
spring.h2.console.enabled=true
#Turn Statistics on
spring.jpa.properties.hibernate.generate_statistics=true
logging.level.org.hibernate.stat=debug
# Show all queries
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.type=trace
spring.datasource.url=jdbc:h2:mem:testdb
spring.data.jpa.repositories.bootstrap-mode=default
spring.jpa.defer-datasource-initialization=true
```
When you reload the application, you can launch up H2 Console at http://localhost:8080/h2-console.

![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

> Tip - Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

When you use the right JDBC URL given above, you should see an empty schema when you click `Connect` button.

![Image](/images/H2-Console-Empty-Schema.png "H2 Console Empty Page") 

### Build a schema using schema.sql and a data set with data.sql.

We'll make a student table with a few simple columns. We may initialise a schema by generating a `schema.sql` file under the resources.

/src/main/resources/schema.sql

```sql
create table student
(
   id integer not null,
   name varchar(255) not null,
   passport_number varchar(255) not null,
   primary key(id)
);
```

Let's additionally add some information to the student table.

/src/main/resources/data.sql

```sql
insert into student
values(10001,'Ranga', 'E1234567');

insert into student
values(10002,'Ravi', 'A1234568');
```

After you refresh the application, you should see the following messages in the log showing that the sql files have been picked up.
```
Executing SQL script from URL [file:PATH/schema.sql]
Executing SQL script from URL [file:PATH/data.sql]
```

When you login to H2 Console (http://localhost:8080/h2-console) you can see that the student table is created and the data is populated.

![Image](/images/H2-Console-With-Student.png "H2 Console With Student")

## Creating Student Bean

Let's make a simple Student bean that has basic student information as well as getters, setters, and a function toString() function.

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
## Develop a technique for reading student information from a repository.

We would like to start with constructing a basic repository. This is a myBatis mapper class with `@Mapper`.

```java
@Mapper
public interface StudentMyBatisRepository {

}

```
> H2 is seen in the classpath by Spring Boot Auto Configuration. It recognises that we wish to communicate with an in-memory database. It automatically configures a datasource as well as a JdbcTemplate that connects to that datasource.

Let's create the findById method to retrieve a student by id in StudentJdbcRepository.
```java
@Select("SELECT * FROM student WHERE id = #{id}")
public Student findById(long id);
```

Notes
- `@Select("SELECT * FROM student WHERE id = #{id}")` - `@Select` highlights that this is a select query. `#{id}` is used to indicate that id is a parameter to this query.
- You can observe that are defining a simple interface method without the implementation.

We'd want to use the findById function. To keep things simple, we'll create the SpringBoot2MyBatisWithH2Application class interface CommandLineRunner and implement a run function that calls the repository's findById method.

/src/main/java/com/in28minutes/springboot/jdbc/h2/example/SpringBoot2JdbcWithH2Application.java

```java
package com.in28minutes.springboot.mybatis.h2.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.in28minutes.springboot.mybatis.h2.example.student.Student;
import com.in28minutes.springboot.mybatis.h2.example.student.StudentMyBatisRepository;

@SpringBootApplication
public class SpringBoot2MyBatisWithH2Application implements CommandLineRunner {

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @Autowired
    StudentMyBatisRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(SpringBoot2MyBatisWithH2Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        LOGGER.info("Student id 10001 -> {}", repository.findById(10001L));

        LOGGER.info("Inserting -> {}", repository.insert(new Student(10010L, "John", "A1234657")));

        LOGGER.info("Update 10003 -> {}", repository.update(new Student(10001L, "Name-Updated", "New-Passport")));

        repository.deleteById(10002L);

        LOGGER.info("All users -> {}", repository.findAll());
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