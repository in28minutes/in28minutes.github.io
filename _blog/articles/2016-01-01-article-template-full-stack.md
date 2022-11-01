---
layout:     post
title:      TODO
date:       2019-01-01 12:31:19
summary:    TODO
categories:  ZZZZZZ
permalink:  /full-stack-url
---

This guide will help you create a full stack application integrating Angular/React/Vue JS as frontend and using Spring Boot to create the backend REST API.

## Todo
- How to import and run projects from git repository?
- Create videos based on full stack articles.

We will and create a TODO***. 
 
## You will learn

- What?
- Why?
- How?
- Where?
- When?





## Resources/URLs/Entities Overview

In this guide, we will create TODO services. 

> The REST API can be enhanced to interact with other microservices infrastructure components and act as microservices.


## Complete Maven Project With Code Examples

> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/TODO_URL


## Project Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/SpringBootRestService-ProjectStructure.png "Spring Boot Rest Service - Project Structure") 

A few details:

- `StudentController.java` - Rest controller exposing all the three service methods discussed above.
- `Course.java, Student.java, StudentService.java` - Business Logic for the application. StudentService exposes a couple of methods we would consume from our Rest Controller.
- `StudentControllerIT.java` - Integration Tests for the Rest Services.
- `StudentControllerTest.java` - Unit Tests for the Rest Services.
- `StudentServicesApplication.java` - Launcher for the Spring Boot Application. To run the application, just launch this file as Java Application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter Web.


## Tools you will need

- Maven 3.0+ for building Spring Boot API Project
- npm, webpack for building frontend
- Your favorite IDE. We use Eclipse for Java and Visual Studio Code for Frontend - JavaScript, TypeScript, Angular and React.
- JDK 1.8+
- Node v8+
- Embedded Tomcat, built into Spring Boot Starter Web

#### Installing Node Js (npm) & Visual Studio Code 

- Playlist - https://www.youtube.com/playlist?list=PLBBog2r6uMCQN4X3Aa_jM9qVjgMCHMWx6
- Steps
  - Step 01 - Installing NodeJs and NPM - Node Package Manager
  - Step 02 - Quick Introduction to NPM
  - Step 03 - Installing Visual Studio Code - Front End Java Script Editor

#### Installing Java, Eclipse & Embedded Maven

- Playlist - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
- Steps
  - 0 - Overview - Installation Java, Eclipse and Maven
  - 1 - Installing Java JDK
  - 2 - Installing Eclipse IDE
  - 3 - Using Embedded Maven in Eclipse
  - 4 - Troubleshooting Java, Eclipse and Maven

## Article Begins
Some theory

## Bootstrapping Spring Boot REST API with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `TODO` as Group
  - Choose `TODO` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
    - TODO
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.
- If you want to understand all the files that are part of this project, you can go here TODO.

## Bootstrapping Angular Frontend with Create React App

Change title to '<title>My Full Stack Application with Spring Boot and React</title>' in index.html

```
import React, { Component } from 'react';

class InstructorApp extends Component {
    render() {
        return (

            <div className="InstructorApp">
                <h1>Instructor Application</h1>
            </div>
        )
    }
}

export default InstructorApp
```

npm add axios
npm add react-router-dom
npm add formik

Recommended Watch - Watch this video to understand [Full Stack Application Architecture - Angular + Spring Boot](https://youtu.be/7ZsHQNlkF2g){:target="_blank"}

Recommended Watch - Watch this video to understand about [Installing Angular CLI - Awesome Tool to create Angular Projects](https://youtu.be/e9JhAwtW9Hk){:target="_blank"}
Recommended Watch - Watch this video to understand about using [Angular CLI to Create and Launch Angular Application](https://youtu.be/0PlPY0wlNaw){:target="_blank"}
Recommended Watch - Watch this video to understand about [Importing Angular App into Visual Studio Code](https://youtu.be/rMZNsb685r4){:target="_blank"}
Recommended Watch - Watch this video to understand about [Angular Project Structure](https://youtu.be/ZOq9S8nSCF0){:target="_blank"}
Recommended Watch - Watch this video to understand about [Generating a Angular Component with ng generate](https://youtu.be/8YC-4u3jm94){:target="_blank"}


Recommended Watch - Watch this video to understand [Full Stack Application Architecture - Spring Boot and React](https://youtu.be/TTWH_Q7uSlY){:target="_blank"}
Recommended Watch - Watch this video to understand about [Create React App - Create and Launch a React Application](https://youtu.be/PR1pXhesetg){:target="_blank"}
Recommended Watch - Watch this video to understand about [Importing React App into Visual Studio Code](https://youtu.be/Cw-bSD6Q8xI){:target="_blank"}
Recommended Watch - Watch this video to understand about [React Project Structure](https://youtu.be/wI5G8FNFrto){:target="_blank"}
Recommended Watch - Watch this video to understand about [React Components](https://youtu.be/OmwcVGZWM98){:target="_blank"}



## STEP 1 : TODO


## Step N : Executing the TODO Service 

Below picture shows how we can execute this Get Service from Postman - my favorite tool to run rest services.

![Image](/images/ExecutingGetRestServiceUsingPostman.png "Executing Rest Service From Postman")   

## Executing a POST Rest Service

Example Request is shown below. 

```json
```

Below picture shows how we can execute this Post Service from Postman - my favorite tool to run rest services. Make sure you go to the Body tab and select raw. Select JSON from the dropdown. Copy above request into body.

![Image](/images/ExecutingPostRestServiceUsingPostman.png "Executing Post Rest Service From Postman")   


## Complete Code Example
- TODO
