---
layout:  post
title:  Microservice Best Practice - Build an Archetype
date:    2019-06-11 12:31:19
summary:  In this article, we focus on learning why creating proper archetypes is important for successful microservices architecture. 
categories:  SpringBootMicroservices
permalink:  /creating-archetypes-in-microservices-architectures-best-practices
---

In this article, we focus on learning why creating proper archetypes is important for successful microservices architecture. 

# What you will learn
- What is an archetype?
- Why do you want to build microservices quickly?
- How does an archetype help?
- How can you use an archetype?
- How can you build an archetype of your own?

### Best Practices with Cloud and Microservices

This is the fifth article in a series of six articles on best practices with cloud and microservices:
- [1 - The 12 Factor App - Best Practices In Cloud Native Applications and Microservices](/12-factor-app-cloud-native-microservices-best-practices){:target='_blank'}
- [2 - Microservices Architectures - Event Driven Approach](/introduction-to-event-driven-architectures-with-microservices){:target='_blank'}
- [3 - Microservice Best Practice - Why do you build a Vertical Slice?](/software-best-practices-building-a-vertical-slice){:target='_blank'}
- [4 - Microservice Architecture Best Practices - Messaging Queues](/messaging-queues-and-asynchronous-communication-in-microservices){:target='_blank'}
- [5 - Microservice Best Practice - Build an Archetype](/creating-archetypes-in-microservices-architectures-best-practices){:target='_blank'}
- [6 - Asynchronous communication with queues and microservices - A perfect combination?](/asynchronous-communication-with-queues-in-microservices){:target='_blank'}

### Why Do We Need Archetypes?

In microservices architectures, we have a number of microservices interacting with each other. And, we keep adding microservices as we evolve.

![image info](/images/Capture-048-01.png)

A few questions arise:
- How do you ensure that the microservices are consistent i.e. similarly built and deployed? This will ensure that a developer moving from one microservice to another will not have a great deal of learning to do!
- How do you ensure that you are able to setup a new microservice quickly?
- How do you ensure that the new microservice is consistent with older microservices?

 With microservices architectures, while the functionality of each microservice is different, you want a bit of consistency in how they are built and deployed
 - Programming Language used
 - Frameworks used
 - The way unit tests are written
 - Deployment and Monitoring processes
 - QA & Automation Testing Approaches
 - Integration with Infrastructure components like Naming Server, API Gateways etc

This is where the reference architecture for your microservices comes into the picture. Having a good reference architecture ensures that your microservices are uniform. 

How do you ensure that the reference architecture is properly implemented? 

### Enter Archetypes

Creating an **archetype** standardizes the reference architecture. An archetype is a piece of component code that can create the initial setup of microservice, adhering to the reference architecture. 

What would the output of an archetype look like? 

It would consist of an example microservice with
* Framework Integration
* Configuration of common external components
* Multiple layer Setup
* Initial Security Configuration - For Authentication and Authorization
* Sample Automation Tests for Unit Testing and Integration Testing
* Infrastructure setup for communication with other microservices

Once you generate a component using the archetype, you can focus on adding business features to your microservice.

### Reference Archetype Example

We have created a reference archetype for a Spring Boot Microservice. Github repo for the project is https://github.com/in28minutes/microservice-reference-archetype.

#### Using the archetype to create a new project

Steps are detailed below:

##### Download or Clone the github repository 

 You can start with cloning the repository - https://github.com/in28minutes/microservice-reference-archetype. Other option is to download the repository as a zip file using this link - https://github.com/in28minutes/microservice-reference-archetype/archive/master.zip

##### Install the archetype

- cd to the root of the project and run 

```
mvn clean install
```

- This will install the archetype to your local repository

```
[INFO] Installing /in28Minutes/git/microservice-archetype/microservice-archetype/target/project-name-archetype-0.0.2-SNAPSHOT.jar to /Users/rangaraokaranam/.m2/repository/com/organization/project/project-name-archetype/0.0.2-SNAPSHOT/project-name-archetype-0.0.2-SNAPSHOT.jar
```

##### Create a new project using the archetype

- Create a new folder on your hard drive. Let's call it first-project

- Execute the following commands

```
cd first-project
mvn archetype:generate -DarchetypeCatalog=local
```

- archetype plugin asks for a groupId and artifactId as shown below

```
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): : 1
Define value for property 'groupId': com.first
Define value for property 'artifactId': first-project
Define value for property 'version' 1.0-SNAPSHOT: : 
Define value for property 'package' com.first: : 
Confirm properties configuration:
groupId: com.first
artifactId: first-project
version: 1.0-SNAPSHOT
package: com.first
 Y: : Y
```
- When the archetype plugin executes successfully, you should see the message shown below:

```
[INFO] Project created from Archetype in dir: /in28Minutes/git/microservice-archetype/first-project
```

##### Verify the new project

You can do a ```mvn clean install``` on the new project in first-project to check it everything is good.

This is a Spring Boot Project with a couple of controllers and unit/integration tests. 

### Creating Your Own Reference Archetype

You can also create a reference archetype of your own. The first thing you need to do is to create a reference project - which would serve as the base for creating your archetype. 

#### Setting up Reference Project

- We have our reference microservice in the folder microservice-reference. This is a Spring Boot Project with a couple of controllers and unit/integration tests. We use this as the reference project to reverse engineer an archetype. 
- When we create a new project using a maven archetype, the two important inputs are groupId and artifactId. In the reference project we would need to make sure that everything that needs to customized based on these inputs should be using similar values. In the microservice-reference, we use the following as the standard:
     - groupId - com.organization.project 
     - artifactId - project-name
- You would need to customize the reference-project to meet your needs or you can create a new reference-project.
- Ensure that you configure the latest version of maven-archetype-plugin in your microservice-reference 

```xml
	<build>
		<pluginManagement>
			<plugins>
				<plugin>
					<artifactId>maven-archetype-plugin</artifactId>
					<version>3.0.1</version>
				</plugin>
			</plugins>
		</pluginManagement>
	</build>
```

#### Reverse Engineering an Archetype from microservice-reference
- In the command prompt cd to the folder containing this project

```
cd microservice-reference
mvn archetype:create-from-project
```

- You will see the following statements in the log

```
[INFO] Setting default groupId: com.organization.project
[INFO] Setting default artifactId: project-name
[INFO] Setting default version: 0.0.2-SNAPSHOT
[INFO] Setting default package: com.organization.project
```

Archetype project is created in microservice-reference/target/generated-sources/archetype

#### Copy the created archetype to the microservice-archetype project

- Copy the archetype project created in earlier step to the folder microservice-archetype

Do check out our video on this:

[![image info](/images/Capture-048-01.png)](https://www.youtube.com/watch?v=KPAe72TqLIw)

### Summary

In this article, we talked about the need for an archetype in microservices architecture. Archetype serves a starting point for creating new projects and ensure uniformity across microservices. We looked at an example archetype and got an overview of how to create an archetype. 

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

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---




