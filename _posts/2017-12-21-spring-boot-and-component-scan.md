---
layout:     post
title:      Spring, Spring Boot and Component Scan
date:       2017-12-21 12:31:19
summary:    Understand the most important concept in Spring Framework - Component Scan. Let's see how you can configure a Component Scan in Spring and Spring Boot. We will also look at how you can debug problems related to Component Scan.
categories:  SpringBoot
permalink:  /spring-boot-and-component-scan
---

This guide will help you understand the most important concept in Spring - Component Scan. Spring Boot does some magic around Component Scan. Let's understand that in this article.
 
## You will learn
- What is Component Scan?
- Why is Component Scan important?
- Which packages does Spring Boot do a Component Scan automatically?
- How do you define Component Scan with Spring Boot?
- How do you resolve problems involving Component Scan?

## Recommended Courses - Java and Spring Interview Guides

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/course/spring-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Java-Interview-Guide-200-Interview-Questions-and-Answers.png "Java Interview Guide : 200+ Interview Questions and Answers")](https://www.udemy.com/course/java-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}


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

### @ComponentScan

If you understand component scan, you understand Spring.


Spring is a dependency injection framework. It is all about beans and wiring in dependencies. 

The first step of defining Spring Beans is by adding the right annotation - @Component or @Service or @Repository. 

However, Spring does not know about the bean unless it knows where to search for it. 

> This part of "telling Spring where to search" is called a Component Scan. 

You define the packages that have to be scanned.

Once you define a Component Scan for a package, Spring would search the package and all its sub packages for components/beans.

Defining a Component Scan
- If you are using Spring Boot, check configuration in Approach 1.
- If you are doing a JSP/Servlet or a Spring MVC application without using Spring Boot use Approach 2.

## Approach 1 : Component Scan in a Spring Boot Project

Executive Summary
- If your other packages hierarchies are below your main app with the @SpringBootApplication annotation, you're covered by implicit components scan.
- If there are beans/components in other packages which are not sub packages of the main package, you should manually add them as @ComponentScan

####### Detailed Example

Consider the class below:

```
package com.in28minutes.springboot.basics.springbootin10steps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringbootIn10StepsApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = 
				SpringApplication.run(SpringbootIn10StepsApplication.class, args);
		
		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}
}
```

```@SpringBootApplication``` is defined on ```SpringbootIn10StepsApplication class``` which is package ```com.in28minutes.springboot.basics.springbootin10steps.```

```@SpringBootApplication``` defines an automatic component scan on package ```com.in28minutes.springboot.basics.springbootin10steps```.

You are fine if all your components are defined in the above package or a sub-package of it.

However, let's say one of the components is defined in a package ```com.in28minutes.springboot.somethingelse```

In this case, you would need add the new package into component scan.

Two Options
-  Define @ComponentScan(“com.in28minutes.springboot”) 
    - This would scan the entire parent tree of com.in28minutes.springboot.
- Or Define two specific Component Scans by using an array. 
    - @ComponentScan({"com.in28minutes.springboot.basics.springbootin10steps","com.in28minutes.springboot.somethingelse"})

Option 1
```
@ComponentScan(“com.in28minutes.springboot”)
@SpringBootApplication
public class SpringbootIn10StepsApplication {
```

Option 2
```
@ComponentScan({"com.in28minutes.springboot.basics.springbootin10steps","com.in28minutes.springboot.somethingelse"})
@SpringBootApplication
public class SpringbootIn10StepsApplication {
```

### Approach 2: Non Spring Boot Project

In a non Spring Boot Project, we would typically define the component scan explicitly in an XML application context or a Java Application Context.

####### Java Application Context

Option 1
```
@ComponentScan(“com.in28minutes)
@Configuration
public class SpringConfiguration {
```

Option 2
```
@ComponentScan({"com.in28minutes.package1","com.in28minutes.package2"})
@Configuration
public class SpringConfiguration {
```

####### XML Application Context

```
<context:component-scan base-package="com.in28minutes" />
```

or Specific Multiple Packages

```
<context:component-scan base-package="com.in28minutes.package1, com.in28minutes.package2" />
```

### Errors related to Component Scan

#### URL Not working

Server starts up fine but
- My URL is not working
- My login url is not working
- My todo url is not working
```
WARNING: No mapping found for HTTP request with URI [/spring-mvc/login] in DispatcherServlet with name 'dispatcher'
WARNING: No mapping found for HTTP request with URI [/login] in DispatcherServlet with name 'dispatcher'
WARNING: No mapping found for HTTP request with URI [/list-todos] in DispatcherServlet with name 'dispatcher'

```

#### No qualifying bean of type found
```
No qualifying bean of type [com.in28minutes.springboot.jpa.UserRepository] found for dependency [com.in28minutes.springboot.jpa.UserRepository]: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}

```
> Same root cause for both above problems - The component is not being picked up.

Three possible things you would need to look at
a. You have not added the right annotation - @Controller, @Repository or @Controller
b. You have not added a component scan. 
c. The package of your component is not defined in component scan.

You have two options
1) Add the annotation or component scan
2) Move the component to a package already under component scan

#### What is the difference between @Component and @ComponentScan? 

@Component and @ComponentScan are for different purposes.
- @Component indicates that a class might be a candidate for creating a bean. Its like putting a hand up.
- @ComponentScan is searching packages for Components. Trying to find out who all put their hands up.

> Congratulations! You are reading an article from a series of 50+ articles on Spring, Spring Boot , Hibernate, Full Stack, Cloud and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](https://www.springboottutorial.com/tags/#SpringBoot).

<blockquote>
	<H2>Join 300,000 Learners!</H2>
	<p><a href="https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps" target="_blank">Learn Spring Boot in 10 Steps - FREE Course</a></p>
</blockquote>

## Next Steps

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/course/spring-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Java-Interview-Guide-200-Interview-Questions-and-Answers.png "Java Interview Guide : 200+ Interview Questions and Answers")](https://www.udemy.com/course/java-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-SpringBoot-To-Azure-Web-Apps.png "Azure Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/deploy-spring-boot-to-azure/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/course/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=OCTOBER-2019){:target="_blank"}


[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/course/spring-web-services-tutorial/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://www.udemy.com/course/spring-interview-questions-and-answers/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/course/spring-boot-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}