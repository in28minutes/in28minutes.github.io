---
layout:  post
title: Introduction To Spring Data Rest - Quick Tutorial for Beginners
date:   2019-04-10 12:31:19
summary: Spring Data project provides common abstractions to integrate with different kinds of data stores. Spring Data Rest is part of the umbrella of Spring Data projects. It makes it easy to build hypermedia-driven REST web services, on top of Spring Data repositories.
categories:  SpringBoot
permalink:  /spring-boot-introduction-to-spring-data-rest
---

Spring Data project provides common abstractions to integrate with different kinds of data stores. Spring Data Rest is part of the umbrella of Spring Data projects. It makes it easy to build hypermedia-driven REST web services, on top of Spring Data repositories.

## You will learn
- What is Spring Data Rest?
- How does Spring Data Rest make building REST API easier?
- How to integration Spring Data Rest with Spring Data JPA?
- What are important features of Spring Data Rest?
- How to execute REST API created using Spring Data Rest?

### What Does Spring Data Rest Do?

It does all of the following:
* Exposes REST services around the Spring Data, without having to write a lot of code. 
* Supports both SQL-based and No SQL-based databases.
* Supports Pagination
* Enables Filtering
* Allows for Sorting
* Supports HATEOAS

### Why Spring Data Rest

Spring Data Rest is ideal for simple projects, that quickly want to get started with creating REST API. 

Let's look at a quick example of using Spring Data Rest to build a REST API.

#### Generate your project

The easiest way to bring such projects up, would be to use the Spring Initializr:

![image info](images/Capture-082-03.png)

Note that we have included the dependencies such as Web, JPA and Rest Repositories.You can generate the project, and then import it as a maven project into Eclipse IDE.

#### Create Entity

Once you have the project imported into eclipse, lets create a JPA Entity - Todo:

![image info](images/Capture-082-04.png)

```@Entity``` ```Todo``` has an Id, and has a few fields and methods. 

#### Create RepositoryRestResource

Once you have an entity, you can create a RepositoryRestResource for it.

```java

	@RepositoryRestResource(collectionResourceRel="todos", path="todos")
	public interface TodoRepository 
					extends PagingAndSortingRepository<Todo, Long> {
		List<Todo> findByUser(@Param("user") String user);
	}
	
``` 

#### Testing REST API

Once you have the Entity and RepositoryRestResource, you are ready to fire your requests.

For example, you can send a POST request to a URL to create a resource:

![image info](images/Capture-082-05.png)

You can see that the link of the created resource is returned to you. 

Another thing you can do is go to the URL and see what resources are currently stored there:
![image info](images/Capture-082-06.png)

You can also access a specific todo stored in the repository:
![image info](images/Capture-082-07.png)

You can do a search on the repository by typing in a query such as:
```https://localhost:8080/todos?user="Jill"```

You can also do a search by directly invoking the repository method:
```https://localhost:8080/search/findByUser?user="Jill"```

### When to use Spring Data Rest?

Remember to use Spring Data Rest only for simple projects. It is great to use when you are building a prototype for your application. However, when it comes to production applications, you need to think twice before using Spring Data Rest.

Do check out our video on the same topic:

[![image info](images/Capture-082-01.png)](https://www.youtube.com/watch?v=prtat_cKUVA)

### Summary

In this article, we had a look at Spring Data Rest, which is a framework used to build REST services around Spring Data repositories. It is ideal to use with simple applications or prototypes.


	Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

	<blockquote>
		<H2>Join 300,000 Learners!</H2>
		<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
	</blockquote>


## Spring Boot Courses

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/spring-interview-questions-and-answers/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/learn-unit-testing-with-spring-boot/?couponCode=SBT-2019){:target="_blank"}

