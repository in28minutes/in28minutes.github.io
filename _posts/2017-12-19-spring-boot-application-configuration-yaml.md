---
layout:     post
title:      Spring Boot Application Configuration with YAML
date:       2017-12-19 12:31:19
summary:    YAML stands for Yet Another Markup Language. It makes application configuration human readable. In this tutorial, we will understand what YAML is and how your can configure Spring Boot applications using YAML. 
categories:  SpringBoot
permalink:  /spring-boot-application-configuration-with-yaml
---

This guide will introduce you to YAML and the YAML support with the various application configuration options that are present in Spring Boot. 
 
## You will learn
- What is application configuration?
- What is YAML?
- What are the advantages of YAML?
- How do you specify application configuration using YAML with Spring Boot?
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


## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Master-Java-Unit-Testing-with-Spring-Boot-Mockito.png "Master Java Unit Testing with Spring Boot & Mockito")](https://www.udemy.com/course/learn-unit-testing-with-spring-boot/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=NOVEMBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=NOVEMBER-2019){:target="_blank"}

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---

---
***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***
---


---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---
---

***300,000*** learners re-skill and learn every day with our amazing courses. ***[TRY A FREE COURSE NOW!](https://rebrand.ly/in28minutes-try-free-course)***

---

