---
layout:     post
title:      Maven Tutorial for Beginners in 5 Steps
date:       2021-07-07 12:31:19
summary:    Maven Tutorial for Beginners in 5 Steps. Learn the basics of Maven setting up a basic example with Spring Initializr. 
categories: SpringBoot
permalink:  /maven-tutorial-for-beginners
image: /images/java-category.png
---

Defining what Maven does is very difficult.

Every Day Developer does a lot of things
- Manages Dependencies 
	- Web Layer (Spring MVC)
	- Data Layer (JPA - Hibernate) etc..                  
- Build a jar or a war or an ear
- Run the application locally 
	- Tomcat or Jetty
- Deploy to a T environment
- Add new dependencies to a project
- Run Unit Tests
- Generate Projects
- Create Eclipse Workspace

 > Maven helps us do all these and more...



### Getting Started 
- Git Repository - https://github.com/in28minutes/getting-started-in-5-steps/tree/master/maven-in-5-steps
- Pre-requisites 
	- Java & Eclipse - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
- We will use embedded maven in Eclipse

### Overview
- Step 1 : Creating and importing a Maven Project
- Step 2 : Understanding Project Object Model - pom.xml
- Step 3 : Maven Build Life Cycle
- Step 4 : How does Maven Work?
- Step 5 : Important Maven Commands

### Step 1 : Creating and importing a Maven Project
Creating a Spring Project with Spring Initializr is a cake walk. 

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializr-spring-in-10-steps.png "Spring Initializr")   

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.learning.maven` as Group
  - Choose `maven-in-few-steps` as Artifact
  - Choose Dependency
    - Web
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

### Step 2 : Understanding Project Object Model - pom.xml

#### Naming a project

How can other projects use our project? By using our project groupId and artifactId
```
	<groupId>com.in28minutes.learning.maven</groupId>
	<artifactId>maven-in-few-steps</artifactId>
```

#### Parent Pom

Similar to Java Inheritance. We inherit a lot of things from starter parent.

```
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.1.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

```
#### Declaring Dependencies

Dependencies are frameworks that you would need to develop your project.

In the example below we are adding two dependencies.
```
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-test</artifactId>
	<scope>test</scope>
</dependency>
```

### Step 3 : Maven Build Life Cycle
When we run "mvn clean install", we are executing the complete maven build life cycle.

Build LifeCycle is a sequence of steps
 - Validate
 - Compile
 - Test
 - Package
 - Integration Test
 - Verify
 - Install
 - Deploy

> Maven follows Convention over Configuration.

Pre defined folder structure
- Source Code
	- ${basedir}/src/main/java
	- ${basedir}/src/main/resources
- Test Code
	- ${basedir}/src/test

### Step 4 : How does Maven Work?

Maven Repository contains all the jars indexed by artifact id and group id. 

Once we add a dependency to our pom.xml, maven asks the maven repository for the jar dependencies giving group id and the artifact id as the input. 
- Maven repository stores all the versions of all dependencies. JUnit 4.2,4.3,4.4
 
The jar dependencies are stored on your machine in a folder called maven local repository. All our projects would refer to the jars from the maven local repository.

> Local Repository : a temp folder on your machine where maven stores the jar and dependency files that are downloaded from Maven Repository.

### Step 5 : Important Maven Commands
 - mvn --version
 - mvn compile (compiles source files)
 - mvn test-compile (compiles test files) - one thing to observe is this also compiles source files
 - mvn clean - deletes target directory
 - mvn test - run unit tests
 - mvn package - creates the jar
- help:effective-settings
- help:effective-pom
- dependency:tree
- dependency:sources
- --debug

