---
layout:     post
title:      Introduction to Spring Boot Starter Parent
date:       2017-01-30 02:31:19
summary:    Key goal of Spring Boot is to enable a quick start to developing production ready applications. Spring Boot Starter Parent plays a key role in managing dependency versions and having the right plug-ins configured.  
categories: SpringBoot
permalink:  /spring-boot-starter-parent
---

This guide will help you understand how Spring Boot Starter Parent helps with managing dependency versions, the java version used by project and the default configuration for plug-ins.
 
## You will learn
- What is Spring Boot Starter Parent?
- What are the important features of Spring Boot Starter Parent?
- When do you use Spring Boot Starter Parent?

## Recommended Spring Boot Courses

[![Image](/images/Course-Learn-Spring-Boot-in-100-Steps---Beginner-to-Expert.png "Learn Spring Boot in 100 Steps - Beginner to Expert")](https://www.udemy.com/spring-boot-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/spring-tutorial-for-beginners/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Hibernate-and-JPA-with-Spring-Boot-in-100-Steps.png "Master Hibernate and JPA with Spring Boot in 100 Steps")](https://www.udemy.com/hibernate-jpa-tutorial-for-beginners-in-100-steps/?couponCode=SBT-2019){:target="_blank"}

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

## Tools you will need
- Maven 3.1+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## What is Spring Boot Starter Parent?

All Spring Boot projects typically use spring-boot-starter-parent as the parent in pom.xml.

```
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.4.0.RELEASE</version>
    </parent>
```

Parent Poms allow you to manage the following things for multiple child projects and modules:

- Configuration - Java Version and Other Properties
- Depedency Management - Version of dependencies
- Default Plugin Configuration

## What is inside Spring Boot Starter Parent?

First of all - Spring Boot Starter Parent defines spring-boot-dependencies as the parent pom. It inherits dependency management from spring-boot-dependencies. Details in the next section.

```
<parent>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-dependencies</artifactId>
	<version>1.4.0.RELEASE</version>
	<relativePath>../../spring-boot-dependencies</relativePath>
</parent>

```

Default java version is 1.6. A project can override this by specifying a property `<java.version>1.8</java.version>` in the project pom. A few other settings related to encoding and source, target version are also set in the parent pom.

```
<java.version>1.6</java.version>
<resource.delimiter>@</resource.delimiter> <!-- delimiter that doesn't clash with Spring ${} placeholders -->
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
<maven.compiler.source>${java.version}</maven.compiler.source>
<maven.compiler.target>${java.version}</maven.compiler.target>

```

Spring Boot Starter Parent specifies the default configuration for a host of plugins including maven-failsafe-plugin, maven-jar-plugin and maven-surefire-plugin.

```
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-failsafe-plugin</artifactId>
	<executions>
		<execution>
			<goals>
				<goal>integration-test</goal>
				<goal>verify</goal>
			</goals>
		</execution>
	</executions>
</plugin>
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-jar-plugin</artifactId>
	<configuration>
		<archive>
			<manifest>
				<mainClass>${start-class}</mainClass>
				<addDefaultImplementationEntries>true</addDefaultImplementationEntries>
			</manifest>
		</archive>
	</configuration>
</plugin>
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-surefire-plugin</artifactId>
	<configuration>
		<includes>
			<include>**/*Tests.java</include>
			<include>**/*Test.java</include>
		</includes>
		<excludes>
			<exclude>**/Abstract*.java</exclude>
		</excludes>
	</configuration>
</plugin>

```

## What does Spring Boot Starter Parent inherit from spring-boot-dependencies?

Spring Boot Dependencies defines the default dependency management for all Spring Boot projects. If we would want to use a new version of a specific dependency, we can override the version by specifying a new property in the project pom. The extract below shows some of the important dependencies that are managed by Spring Boot Dependencies parent pom. Since Spring Boot Starter Parent inherit from spring-boot-dependencies, it shares all these characteristics as well.  

```
<properties>
	<activemq.version>5.13.4</activemq.version>
	...
	<ehcache.version>2.10.2.2.21</ehcache.version>
	<ehcache3.version>3.1.1</ehcache3.version>
	...
	<h2.version>1.4.192</h2.version>
	<hamcrest.version>1.3</hamcrest.version>
	<hazelcast.version>3.6.4</hazelcast.version>
	<hibernate.version>5.0.9.Final</hibernate.version>
	<hibernate-validator.version>5.2.4.Final</hibernate-validator.version>
	<hikaricp.version>2.4.7</hikaricp.version>
	<hikaricp-java6.version>2.3.13</hikaricp-java6.version>
	<hornetq.version>2.4.7.Final</hornetq.version>
	<hsqldb.version>2.3.3</hsqldb.version>
	<htmlunit.version>2.21</htmlunit.version>
	<httpasyncclient.version>4.1.2</httpasyncclient.version>
	<httpclient.version>4.5.2</httpclient.version>
	<httpcore.version>4.4.5</httpcore.version>
	<infinispan.version>8.2.2.Final</infinispan.version>
	<jackson.version>2.8.1</jackson.version>
	....
	<jersey.version>2.23.1</jersey.version>
	<jest.version>2.0.3</jest.version>
	<jetty.version>9.3.11.v20160721</jetty.version>
	<jetty-jsp.version>2.2.0.v201112011158</jetty-jsp.version>
	<spring-security.version>4.1.1.RELEASE</spring-security.version>
	<tomcat.version>8.5.4</tomcat.version>
	<undertow.version>1.3.23.Final</undertow.version>
	<velocity.version>1.7</velocity.version>
	<velocity-tools.version>2.0</velocity-tools.version>
	<webjars-hal-browser.version>9f96c74</webjars-hal-browser.version>
	<webjars-locator.version>0.32</webjars-locator.version>
	<wsdl4j.version>1.6.3</wsdl4j.version>
	<xml-apis.version>1.4.01</xml-apis.version>
</properties>
```
Defines Maven 3.2.1 as the minimum version needed.

```
<prerequisites>
	<maven>3.2.1</maven>
</prerequisites>

```
> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

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
