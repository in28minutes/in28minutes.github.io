---
layout:     post
title:      Spring Boot Application Configuration with YAML
date:       2022-07-05 12:31:19
summary:    YAML stands for Yet Another Markup Language. It makes application configuration human readable. In this tutorial, we will understand what YAML is and how your can configure Spring Boot applications using YAML. 
categories:  SpringBoot
permalink:  /spring-boot-application-configuration-with-yaml
image: /images/spring-boot-feature.png
---

This guide will introduce you to YAML and the YAML support with the various application configuration options that are present in Spring Boot. 

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

 
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

Complete project with code example - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-tutorial-basics-configuration