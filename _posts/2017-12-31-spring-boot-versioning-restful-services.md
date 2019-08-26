---
layout:     post
title:      Versioning RESTful Services
date:       2017-12-31 12:31:19
summary:    Learn why versioning is needed and how you can version your REST API. We will look at 4 ways of versioning and also compare the different approaches.
categories: Spring Boot, REST Service, Versioning
permalink:  /spring-boot-versioning-for-rest-services
---

This guide will help you understand why versioning is needed and how you can version your REST API. We will look at 4 ways of versioning and also compare the different approaches.
 
## You will learn
- Why do we need Versioning for  RESTful Web Services?
- What are the versioning options that are available?
- How do you implement Versioning for RESTful Web Services?

## Recommended REST API Course

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

## 10 Step Reference Courses

- [Spring Framework for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-framework-for-beginners){:target="_blank"}
- [Spring Boot for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
- [Spring MVC in 10 Steps](https://www.youtube.com/watch?v=BjNhGaZDr0Y){:target="_blank"}
- [JPA and Hibernate in 10 Steps](https://courses.in28minutes.com/p/jpa-and-hibernate-tutorial-for-beginners-with-spring-boot){:target="_blank"}
- [Eclipse Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/eclipse-tutorial-for-beginners){:target="_blank"}
- [Maven Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/maven-tutorial-for-beginners-in-5-steps){:target="_blank"}
- [JUnit Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/junit-tutorial-for-beginners){:target="_blank"}
- [Mockito Tutorial for Beginners in 5 Steps](https://courses.in28minutes.com/p/mockito-for-beginner-in-5-steps){:target="_blank"}
- [Complete in28Minutes Course Guide](https://courses.in28minutes.com/p/in28minutes-course-guide){:target="_blank"}

## Project Code Structure

Following screenshot shows the structure of the project we will create.
![Image](/images/SpringBootVersioningRESTAPI-ProjectStructure.png "SpringBootVersioningRESTAPI-ProjectStructure") 

A few details:
- SpringBoot2RestServiceApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- StudentV1.java - Basic Version of the Student Bean.
- StudentV2.java - Advanced Version of the Student Bean using a seperate bean for Name.
- Name.java - Seperate bean for Name having different parts of the Name.
- StudentVersioningController.java - Controller from where all the service versions are exposed.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-versioning

## Why do we need to version our RESTful API?

The best approach to versioning is NOT to do it. Yeah, that's right. Do not version as long as versioning is not needed.

> Build your services to backward compatible so that you can avoid versioning as much as possible!

However there are a number of situations where versioning is needed.

Let's consider an example.

You had this version of the student service initially
```
{
  "name": "Bob Charlie"
}
```

At a later point, you wanted to split the name up. So, you created this version of the service.

```
{
  "name": {
    "firstName": "Bob",
    "lastName": "Charlie"
  }
}
```

You can support both these requests from the same service, but it becomes complex as the requirements diversify for each of the versions.

In these kind of situations, versioning becomes mandatory.

Let's create a simple project and understand the 4 different approaches to versioning your RESTful services.

## Bootstrapping with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.rest.example` as Group
  - Choose `spring-boot-2-rest-service-basic` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

### Implementing Beans for Versioning

First version of Bean
```
public class StudentV1 {
  private String name;
```

Second Version of Bean
```
public class StudentV2 {
  private Name name;
```

Name has firstName and lastName and is used by `StudentV2`
```
public class Name {
  private String firstName;
  private String lastName;
```

## Versioning Approaches for RESTful Services

We would want to create two versions of services, one returning `StudentV1` and the other returning `StudentV2`. 

Let's look at the 4 Different Approaches for creating versions of the same service.

### URI Versioning

Basic approach to versioning is to create a completely different URI for the new service. Example implementation is shown below.

Examples
- `http://localhost:8080/v1/person`
- `http://localhost:8080/v2/person`

```
@RestController
public class StudentVersioningController {

  @GetMapping("v1/student")
  public StudentV1 studentV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping("v2/student")
  public StudentV2 studentV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

```

`http://localhost:8080/v1/person`

Response
```
{
  "name": "Bob Charlie"
}
```

`http://localhost:8080/v2/person`

Response
```
{
  "name": {
    "firstName": "Bob",
    "lastName": "Charlie"
  }
}
```

### Request Parameter versioning 

Next approach to versioning is to use the request parameter to differentiate versions.

Examples
- http://localhost:8080/person/param?version=1
- http://localhost:8080/person/param?version=2

Implementations are shown below:
```
  @GetMapping(value = "/student/param", params = "version=1")
  public StudentV1 paramV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/param", params = "version=2")
  public StudentV2 paramV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }
```

`http://localhost:8080/person/param?version=1`

Response
```
{
  "name": "Bob Charlie"
}
```

`http://localhost:8080/person/param?version=2`
Response
```
{
  "name": {
    "firstName": "Bob",
    "lastName": "Charlie"
  }
}
```

### (Custom) Headers versioning

The third approach to versioning is to use a Request Header to differentiate the versions.

Examples
- http://localhost:8080/person/header
   - headers=[X-API-VERSION=1]
- http://localhost:8080/person/header
   - headers=[X-API-VERSION=2]

Implementations are shown below:

```
  @GetMapping(value = "/student/header", headers = "X-API-VERSION=1")
  public StudentV1 headerV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/header", headers = "X-API-VERSION=2")
  public StudentV2 headerV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }
```

Below picture shows how we can execute a Get Request Method with Request Headers using Postman.
![Image](/images/Postman-ProvidingRequestHeaders.png "Postman-ProvidingRequestHeaders")   

`http://localhost:8080/person/header` with a header
- X-API-VERSION=1

Response
```
{
  "name": "Bob Charlie"
}
```

`http://localhost:8080/person/header` with a header
- X-API-VERSION=2

Response
```
{
  "name": {
    "firstName": "Bob",
    "lastName": "Charlie"
  }
}
```

### Media type versioning (a.k.a “content negotiation” or “accept header”)
The last versioning approach is to use the Accept Header in the request. 

Examples
- http://localhost:8080/person/produces
   - headers[Accept=application/vnd.company.app-v1+json]
- http://localhost:8080/person/produces
   - headers[Accept=application/vnd.company.app-v2+json]

```
  @GetMapping(value = "/student/produces", produces = "application/vnd.company.app-v1+json")
  public StudentV1 producesV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/produces", produces = "application/vnd.company.app-v2+json")
  public StudentV2 producesV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

```

Below picture shows how we can execute a Get Request Method with Request Headers using Postman.
![Image](/images/Postman-ProvidingRequestHeaders.png "Postman-ProvidingRequestHeaders")   

`http://localhost:8080/person/produces` with a header
- Accept=application/vnd.company.app-v1+json
Response
```
{
  "name": "Bob Charlie"
}
```

`http://localhost:8080/person/produces` with a header 
- Accept=application/vnd.company.app-v2+json

Response
```
{
  "name": {
    "firstName": "Bob",
    "lastName": "Charlie"
  }
}
```

## Factors affecting Versioning Choice

Following factors affect the choice of versioning:
- URI Pollution - URL versions and Request Param versioning pollute the URI space.
- Misuse of HTTP Headers - Accept Header is not designed to be used for versioning.
- Caching - If you use Header based versioning, we cannot cache just based on the URL. You would need take the specific header into consideration.
- Can we execute the request on the browser? - If you have non technical consumers, then the URL based version would be easier to use as they can be executed directly on the browser.
- API Documentation - How do you get your documentation generation to understand that two different urls are versions of the same service?

> The fact is that there is `No Perfect Solution` for versioning.

The list below shows Major API providers using different versioning approaches.
- Media type versioning (a.k.a “content negotiation” or “accept header”)
   - GitHub
- (Custom) Headers versioning
   - Microsoft
- URI Versioning
   - Twitter
- Request Parameter versioning 
   - Amazon

> Plan to avoid versioning as far as possible but evaluate and be ready with a versioing strategy before you expose your first service to your consumer. Good Luck!

#### More Reading
- https://www.mnot.net/blog/2011/10/25/web_api_versioning_smackdown
- http://urthen.github.io/2013/05/09/ways-to-version-your-api/
- http://stackoverflow.com/questions/389169/best-practices-for-api-versioning
- http://www.lexicalscope.com/blog/2012/03/12/how-are-rest-apis-versioned/
- https://www.3scale.net/2016/06/api-versioning-methods-a-brief-reference/


## Next Steps
[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}

## Complete Code Example


### /pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.in28minutes.springboot.rest.example</groupId>
  <artifactId>spring-boot-2-rest-service-versioning</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>spring-boot-2-rest-service</name>
  <description>Spring Boot 2 and REST - Example Project</description>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.0.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
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
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

  <repositories>
    <repository>
      <id>spring-snapshots</id>
      <name>Spring Snapshots</name>
      <url>https://repo.spring.io/snapshot</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
    <repository>
      <id>spring-milestones</id>
      <name>Spring Milestones</name>
      <url>https://repo.spring.io/milestone</url>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </repository>
  </repositories>

  <pluginRepositories>
    <pluginRepository>
      <id>spring-snapshots</id>
      <name>Spring Snapshots</name>
      <url>https://repo.spring.io/snapshot</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </pluginRepository>
    <pluginRepository>
      <id>spring-milestones</id>
      <name>Spring Milestones</name>
      <url>https://repo.spring.io/milestone</url>
      <snapshots>
        <enabled>false</enabled>
      </snapshots>
    </pluginRepository>
  </pluginRepositories>


</project>
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/SpringBoot2RestServiceApplication.java

```java
package com.in28minutes.springboot.rest.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBoot2RestServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBoot2RestServiceApplication.class, args);
  }
}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/versioning/Name.java

```java
package com.in28minutes.springboot.rest.example.versioning;
public class Name {
  private String firstName;
  private String lastName;

  public Name() {
  }

  public Name(String firstName, String lastName) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/versioning/StudentV1.java

```java
package com.in28minutes.springboot.rest.example.versioning;
public class StudentV1 {
  private String name;

  public StudentV1() {
    super();
  }
  
  public StudentV1(String name) {
    super();
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  
}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/versioning/StudentV2.java

```java
package com.in28minutes.springboot.rest.example.versioning;
public class StudentV2 {
  private Name name;

  public StudentV2() {
    super();
  }

  public StudentV2(Name name) {
    super();
    this.name = name;
  }

  public Name getName() {
    return name;
  }

  public void setName(Name name) {
    this.name = name;
  }

}
```
---

### /src/main/java/com/in28minutes/springboot/rest/example/versioning/StudentVersioningController.java

```java
package com.in28minutes.springboot.rest.example.versioning;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentVersioningController {

  @GetMapping("v1/student")
  public StudentV1 studentV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping("v2/student")
  public StudentV2 studentV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

  @GetMapping(value = "/student/param", params = "version=1")
  public StudentV1 paramV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/param", params = "version=2")
  public StudentV2 paramV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

  @GetMapping(value = "/student/header", headers = "X-API-VERSION=1")
  public StudentV1 headerV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/header", headers = "X-API-VERSION=2")
  public StudentV2 headerV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

  @GetMapping(value = "/student/produces", produces = "application/vnd.company.app-v1+json")
  public StudentV1 producesV1() {
    return new StudentV1("Bob Charlie");
  }

  @GetMapping(value = "/student/produces", produces = "application/vnd.company.app-v2+json")
  public StudentV2 producesV2() {
    return new StudentV2(new Name("Bob", "Charlie"));
  }

}
```
---

### /src/main/resources/application.properties

```properties
```
---
### /src/test/java/com/in28minutes/springboot/rest/example/SpringBoot2RestServiceApplicationTests.java

```java
package com.in28minutes.springboot.rest.example;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBoot2RestServiceApplicationTests {

  @Test
  public void contextLoads() {
  }

}
```
---
