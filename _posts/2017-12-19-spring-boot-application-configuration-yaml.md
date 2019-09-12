---
layout:     post
title:      Spring Boot Application Configuration with YAML
date:       2017-12-19 12:31:19
summary:    YAML stands for Yet Another Markup Language. It makes application configuration human readable. In this tutorial, we will understand what YAML is and how your can configure Spring Boot applications using YAML. 
categories: Spring Boot, Application Configuration, YAML
permalink:  /spring-boot-application-configuration-with-yaml
---

This guide will introduce you to YAML and the YAML support with the various application configuration options that are present in Spring Boot. 
 
## You will learn
- What is application configuration?
- What is YAML?
- What are the advantages of YAML?
- How do you specify application configuration using YAML with Spring Boot?

## Spring Boot Courses

[![Image](/images/Course-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps.png "Deploying Spring Boot Microservices to Pivotal Cloud Foundry (PCF)")](https://www.udemy.com/course/learn-pivotal-cloud-foundry-pcf-deploying-spring-boot-apps/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Microservices-To-ECS.png "Deploying Spring Boot Microservices to AWS using ECS and AWS Fargate")](https://www.udemy.com/course/deploy-spring-microservices-to-aws-with-ecs-and-aws-fargate/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Deploy-Java-Spring-Boot-Apps-To-AWS.png "Deploying Spring Boot Apps to AWS using Elastic Beanstalk")](https://www.udemy.com/deploy-java-spring-boot-to-aws-amazon-web-service/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Java-Web-Services-and-REST-API-with-Spring-Boot.png "Master Java Web Services and REST API with Spring Boot")](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBT-2019){:target="_blank"}

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
## What is YAML?

YAML is a human readable serialization language

> YAML stands for Yet Another Markup Language

Let's consider an example

application.properties
```
level1.property1 = 5
level1.property2 = 6
level1.property3 = 7
level1.level2.property4 = 8
level1.level2.property5 = 10
level1.level2.property6 = 11
```
Above property file is cool but it is not very readable.

Let's consider the same example in YAML format:
application.yaml
```
level1:
  property1: 5
  property2: 6
  property3: 7
  level2:
     property4: 8
     property5: 10
     property6: 11
```

YAML 
- is concise
- is more readable

## Spring Boot and YAML

Spring Boot has excellent support for YAML configuration. 

### Example 1

application.properties
```
server.port = 9080
```

application.yaml
```
server:
	port: 9080
```

### Example 2

application.properties
```
app.name=in28Minutes
app.description=${app.name} is your first Spring Boot application
welcome.message=Welcome message from property file! Welcome to ${app.name}
```

application.yaml
```
app:
   name: In28Minutes
   description: ${app.name} is your first Spring Boot application
welcome:
    message: Welcome to your first Spring Boot app!
```

### Example 3 - Dynamic Configuration

application.properties
```
basic.value: true
basic.message: Dynamic Message
basic.number: 100
```

application.yaml
```
basic: 
   value: true
   message: Dynamic Message YAML
   number: 100
```


> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
- Join 100,000 Learners and Become a Spring Boot Expert - [ 5 Awesome Courses on Microservices, API's, Web Services with Spring and Spring Boot. Start Learning Now](https://in28minutes1.teachable.com/p/complete-spring-course-bundle/?coupon_code=HALFOFF&preview=logged_out){:target="_blank"}
- Learn more about the configuration options present in Spring Boot - [Spring Boot Application Configuration](http://www.springboottutorial.com/spring-boot-application-configuration){:target="_blank"}
- Learn Basics of Spring Boot - [Spring Boot vs Spring vs Spring MVC](http://www.springboottutorial.com/spring-boot-vs-spring-mvc-vs-spring){:target="_blank"}, [Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration){:target="_blank"}, [Spring Boot Starter Projects](http://www.springboottutorial.com/spring-boot-starter-projects){:target="_blank"}, [Spring Boot Starter Parent](http://www.springboottutorial.com/spring-boot-starter-parent){:target="_blank"}, [Spring Boot Initializr](http://www.springboottutorial.com/spring-initialzr-bootstrap-spring-boot-applications){:target="_blank"}
- [Learn RESTful and SOAP Web Services with Spring Boot](https://www.udemy.com/spring-web-services-tutorial/?couponCode=SBTWEBSITE){:target="_blank"}
- [Learn Microservices with Spring Boot and Spring Cloud](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBTWEBSITE){:target="_blank"}

[![Image](/images/SpringBootTutorialForBeginnersPlaylist.png "Spring Boot Tutorial For Beginners - 25 Videos")](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}