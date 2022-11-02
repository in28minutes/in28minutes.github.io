---
layout:     post
title:      Integrating Spring Boot and Spring JDBC with H2 and Starter JDBC
date:       2022-08-18 01:12:27
summary:    Learn to use Spring Boot Starter JDBC to connect Spring Boot to H2 (in-memory database) using Spring JDBC. You will create a simple project with Spring Boot. You will add code to the project to connect to a database using Spring JDBC. You will learn to implement the basic CRUD methods.
categories:  SpringBootJPA
permalink:  /spring-boot-and-spring-jdbc-with-h2
image: /images/spring-data-category.png
---

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

This guide will help you create a simple project with Spring Boot. You will add code to the project to connect to a database using Spring JDBC. You will learn to write all the CRUD methods.
 
![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

## You will learn
- How does Spring Boot Started JDBC work? 
- How to connect a Spring Boot project to a database using Spring JDBC?
- How to write a simple repository class with all the CRUD methods?
- How to execute basic queries using Spring JDBC?
- How to create a project using Spring Boot, Spring JDBC, and H2?
- What are the basics of an in-memory database?

## Project Code Structure

The following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootwithJDBC-ProjectStructure.png "Spring Boot with JDBC - Project Structure") 

A few details

- `Student.java` - The bean to store student details.
- `StudentJdbcRepository.java` - The H2 database contains all the methods to store and retrieve student details.
- `schema.sql` - Since we are using an in-memory database, we define the tables as part of our application code in this file.
- `data.sql` - We use `data.sql` to populate the initial student data.
- `SpringBoot2JdbcWithH2Application.java` - The main Spring Boot application class which is used to launch the application. We will extend the `CommandLineRunner` interface and implement the `public void run(String... args)` method to launch the spring JDBC code when the server launches.
- `pom.xml` - This contains all the dependencies needed to build this project. In addition to Developer Tools and H2, we will use Spring Boot Starter JDBC and Web. 

## You will require the following tools:
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples. - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-jdbc-with-h2

## A little bit of Theory

JDBC
- JDBC stands for Java Database Connectivity.
- It used concepts like Statement, PreparedStatement, and ResultSet.
- In the example below, the query used is ```Update todo set user=?, desc=?, target_date=?, is_done=? where id=?```
- The values needed to execute the query are set into the query using different set methods on the PreparedStatement.
- Results from the query are populated into the ResultSet. We had to write code to liquidate the ResultSet into objects.

#### Update Todo
```java
Connection connection = datasource.getConnection();

PreparedStatement st = connection.prepareStatement("Update todo set user=?, desc=?, target_date=?, is_done=? where id=?");

st.setString(1, todo.getUser());
st.setString(2, todo.getDesc());
st.setTimestamp(3, new Timestamp(todo.getTargetDate().getTime()));
st.setBoolean(4, todo.isDone());
st.setInt(5, todo.getId());

st.execute();

st.close();

connection.close();
```

### Spring JDBC

- Spring JDBC provides a layer on top of JDBC.
- It used concepts like JDBCTemplate.
- Typically needs lesser number of lines compared to JDBC as following are simplified
   - mapping parameters to queries.
   - liquidating yields beans
   - There is zero exception handling needed because all exceptions are converted to RuntimeExceptions.

## Creating the Project with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.jdbc.h2.example` as Group
  - Choose `spring-boot-2-jdbc-with-h2` as Artifact
  - Choose following dependencies
    - Web
    - JDBC
    - H2
    - DevTools
- Click "Generate"
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here TODO.

## Starter Projects in pom.xml

Below is the list of starter projects in pom.xml. 

```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-jdbc</artifactId>
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

## Initialize the H2 in-memory database with the schema

We will use H2 as the database. 

H2 provides a web interface called H2 Console to see the data. Let's enable the H2 console in the `application.properties`

/src/main/resources/application.properties
```properties
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
```
When you reload the application, you can launch up H2 Console at http://localhost:8080/h2-console

![Image](/images/H2-Console-Login-Page.png "H2 Console Login PAge") 

> Tip - Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

When you use the right JDBC URL given above, you should see an empty schema when you click `Connect` button.

![Image](/images/H2-Console-Empty-Schema.png "H2 Console Empty Page") 

### Create Schema using schema.sql and Data using data.sql

We will create a table called "student" with a few simple columns. We can initialise a schema by creating a `schema.sql` file in the resources.

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
insert into student values(10001,'Ranga', 'E1234567');
insert into student values(10002,'Ravi', 'A1234568');
```

When the application reloads you would see following statements in the log indicating that the sql files are picked up
```
Executing SQL script from URL [file:/in28Minutes/git/spring-boot-examples/spring-boot-2-jdbc-with-h2/target/classes/schema.sql]
Executing SQL script from URL [file:/in28Minutes/git/spring-boot-examples/spring-boot-2-jdbc-with-h2/target/classes/data.sql]
```

When you login to H2 Console (http://localhost:8080/h2-console), you will see that the student table is created and the data is populated.

![Image](/images/H2-Console-With-Student.png "H2 Console With Student")

## Creating Student Bean

Let's create a simple Student bean with basic student information along with getters, setters, and a toString method.

```java
ppackage com.in28minutes.springboot.jdbc.h2.example.student;

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
## Create a repository method to read student information.

We would want to start by creating a simple repository. To talk to the database, we will use a JDBCTemplate.
```java
@Repository
public class StudentJdbcRepository {
	@Autowired
	JdbcTemplate jdbcTemplate;

```
> H2 in the classpath is seen by Spring Boot Auto Configuration. It understands that we would want to talk to an in-memory database. It autoconfigures a datasource and also a JDBCTemplate connecting to that datasource.

Let's create the findById method to retrieve a student by ID in StudentJDBCRepository.
```java
	public Student findById(long id) {
		return jdbcTemplate.queryForObject("select * from student where id=?", new BeanPropertyRowMapper<>(Student.class), id);
	}
```

Notes
- `JdbcTemplate` has a number of methods to execute queries. In this example, we are using the `queryForObject` method.
- `new BeanPropertyRowMapper<Student>(Student.class)` - We are using a BeanPropertyRowMapper to map the results from ResultSet to the Student bean.
- `id` - We are passing id as a parameter to the query

We would want to execute the findById method. To keep things simple, we will make the SpringBoot2JdbcWithH2Application class implement CommandLineRunner and implement a run method to call the findById method on the repository.

/src/main/java/com/in28minutes/springboot/jdbc/h2/example/SpringBoot2JdbcWithH2Application.java

```java
@SpringBootApplication
public class SpringBoot2JdbcWithH2Application implements CommandLineRunner {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StudentJdbcRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBoot2JdbcWithH2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		logger.info("Student id 10001 -> {}", repository.findById(10001L));
	}
}
```
Notes
- `@Autowired StudentJdbcRepository repository;` - We will autowire the StudentJdbcRepository we created earlier.
- `public void run(String... args) throws Exception {` - Implement the run method defined in the CommandLineRunner interface. This method is executed as soon as the application is launched.
- `logger.info("Student id 10001 -> {}", repository.findById(10001L))` - Log all the information about student id 10001.

When the application reloads, you will see this in the log.
```
Student id 10001 -> Student [id=10001, name=Ranga, passportNumber=E1234567]
```
> Congratulations on executing the first Spring JDBC method! You can see how easy it is with Spring Boot.

Let's now add another method to retrieve details of all the students from StudentJdbcRepository.

```java
	static class StudentRowMapper implements RowMapper<Student> {
        @Override
        public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
            Student student = new Student();
            student.setId(rs.getLong("id"));
            student.setName(rs.getString("name"));
            student.setPassportNumber(rs.getString("passport_number"));
            return student;
        }

    }

	public List<Student> findAll() {
		return jdbcTemplate.query("select * from student", new StudentRowMapper());
	}
```
Notes
- `class StudentRowMapper implements RowMapper<Student>` - We are defining a custom row mapper to map the result set to a student bean.
- `jdbcTemplate.query("select * from student", new StudentRowMapper())` - Since we want to return a list of students, we use the `query` method in JdbcTemplate.

We can add a call to the find all method in the run method of `SpringBoot2JdbcWithH2Application.java`

```java

logger.info("All users 1 -> {}", repository.findAll());

```

You can see the following output in the log when the project reloads.
```
All users 1 -> [Student [id=10001, name=Ranga, passportNumber=E1234567], Student [id=10002, name=Ravi, passportNumber=A1234568]]
```

## Implementing Spring JDBC delete, insert, and update methods

The code below shows the delete, insert, and update methods.

```java
	public void deleteById(long id) {
        jdbcTemplate.update("delete from student where id=?", id);
    }

	public int insert(Student student) {
        return jdbcTemplate.update("insert into student (id, name, passport_number) " + "values(?,  ?, ?)",
                student.getId(), student.getName(), student.getPassportNumber());
    }

	public int update(Student student) {
        return jdbcTemplate.update("update student " + " set name = ?, passport_number = ? " + " where id = ?",
                student.getName(), student.getPassportNumber(), student.getId());
    }

```

Notes 
- These methods are relatively straight-forward.
- All methods use the `update` method in the JdbcTemplate class and set the right query and parameters.

We can add a call to all the above methods in the run method of `SpringBoot2JdbcWithH2Application.java`

```java
logger.info("Inserting -> {}", repository.insert(new Student(10010L, "John", "A1234657")));

logger.info("Update 10001 -> {}", repository.update(new Student(10001L, "Name-Updated", "New-Passport")));

repository.deleteById(10002L);

logger.info("All users 2 -> {}", repository.findAll());

```

You can see the following output in the log when the project reloads.
```
Inserting -> 1
Update 10003 -> 1
All users -> [Student [id=10001, name=Name-Updated, passportNumber=New-Passport], Student [id=10010, name=John, passportNumber=A1234657]]
```
> Awesome ! You've implemented all the CRUD methods using Spring JDBC and Spring Boot.
