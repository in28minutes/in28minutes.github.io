---
layout:     post
title:      Spring Boot and Embedded Servers - Tomcat, Jetty and Undertow
date:       2017-12-17 12:31:19
summary:    Let's understand the need for embedded servers. We will understand the default embedded server provided by Spring Boot i.e. Tomcat and discuss the other options that Spring Boot supports - Jetty and Undertow.
categories:  SpringBoot
permalink:  /spring-boot-with-embedded-servers-tomcat-jetty
---

This guide will help you understand why embedded servers are gaining popularity. We will discuss the different options that Spring Boot supports - Tomcat, Jetty and Undertow.
 
## You will learn
- What is an embedded server?
- Why are embedded servers getting popular?
- What are the different embedded servers that Spring Boot supports?
- How do you switch from one embedded server to another?

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

## What is an Embedded Server?

Think about what you would need to be able to deploy your application (typically) on a virtual machine.
- Step 1 : Install Java
- Step 2 : Install the Web/Application Server (Tomcat/Websphere/Weblogic etc)
- Step 3 : Deploy the application war

What if we want to simplify this?

How about making the server a part of the application? 

> You would just need a virtual machine with Java installed and you would be able to directly deploy the application on the virtual machine. Isn't it cool?

This idea is the genesis for Embedded Servers.

When we create an application deployable, we would embed the server (for example, tomcat) inside the deployable. 
> For example, for a Spring Boot Application, you can generate an application jar which contains Embedded Tomcat. You can run a web application as a normal Java application!

Embedded server implies that our deployable unit contains the binaries for the server (example, tomcat.jar).

## Creating an Embedded Server Project with Spring Initializr

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-initializer-web-h2-devtools-jdbc.png "Web, JDBC,H2 and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.tutorial.basics.example` as Group
  - Choose `spring-boot-tutorial-basics` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

## Default Embedded Server with Spring Boot - Tomcat

We have included Spring Boot Starter Web in our dependencies when creating the spring boot project.

Let's take a quick look at the dependencies for `spring-boot-starter-web`

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-tomcat</artifactId>
  <version>2.0.0.RELEASE</version>
  <scope>compile</scope>
</dependency>
```

You can see that by default Starter Web includes a dependency on starter tomcat.

Starter Tomcat has the following dependencies.

```
<dependency>
  <groupId>org.apache.tomcat.embed</groupId>
  <artifactId>tomcat-embed-core</artifactId>
  <version>8.5.23</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.apache.tomcat.embed</groupId>
  <artifactId>tomcat-embed-el</artifactId>
  <version>8.5.23</version>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.apache.tomcat.embed</groupId>
  <artifactId>tomcat-embed-websocket</artifactId>
  <version>8.5.23</version>
  <scope>compile</scope>
</dependency>
```

Starter Tomcat brings in all the dependencies need to run Tomcat as an embedded server.

## Run the web application using an Embedded Server

When you run SpringBootTutorialBasicsApplication.java as a Java Application, you would see that the server would start up and start serving requests.

An extract from the log
```
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
```

You can see that tomcat has started by default on port 8080.

You can customize the port in application.properties
```
server.port=9080
```

When you do a 'mvn clean install' on the project, a jar artifact named `spring-boot-tutorial-basics-0.0.1-SNAPSHOT.jar` is generated.

This jar can be used to run the application on any machine where Java 8 is installed.

> The tomcat embedded server is also packaged inside this jar


## Using Jetty as Embedded Server with Spring Boot

Remove the existing dependency on spring-boot-starter-web and add these in.

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

## Using Undertow as Embedded Server with Spring Boot

Remove the existing dependency on spring-boot-starter-web and add these in.

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```

## Embedded Server Spring Boot Configuration

Spring Boot provides a number of options to configure the embedded server through application.properties

```
# EMBEDDED SERVER CONFIGURATION (ServerProperties)
server.compression.enabled=false # If response compression is enabled.
server.context-path= # Context path of the application.
server.display-name=application # Display name of the application.
server.error.include-stacktrace=never # When to include a "stacktrace" attribute.
server.error.path=/error # Path of the error controller.
server.error.whitelabel.enabled=true # Enable the default error page displayed in browsers in case of a server error.
server.port=8080 # Server HTTP port.
server.server-header= # Value to use for the Server response header (no header is sent if empty)
server.servlet-path=/ # Path of the main dispatcher servlet.

```

Here are a few Jetty specific options

```
server.jetty.acceptors= # Number of acceptor threads to use.
server.jetty.max-http-post-size=0 # Maximum size in bytes of the HTTP post or put content.
server.jetty.selectors= # Number of selector threads to use.
```

You can also configure ssl on the embedded server

```
server.ssl.ciphers= # Supported SSL ciphers.
server.ssl.client-auth= # Whether client authentication is wanted ("want") or needed ("need"). Requires a trust store.
server.ssl.enabled= # Enable SSL support.
server.ssl.enabled-protocols= # Enabled SSL protocols.
server.ssl.key-alias= # Alias that identifies the key in the key store.
server.ssl.key-password= # Password used to access the key in the key store.
server.ssl.key-store= # Path to the key store that holds the SSL certificate (typically a jks file).
server.ssl.key-store-password= # Password used to access the key store.
server.ssl.key-store-provider= # Provider for the key store.
server.ssl.key-store-type= # Type of the key store.
server.ssl.protocol=TLS # SSL protocol to use.
server.ssl.trust-store= # Trust store that holds SSL certificates.
server.ssl.trust-store-password= # Password used to access the trust store.
server.ssl.trust-store-provider= # Provider for the trust store.
server.ssl.trust-store-type= # Type of the trust store.
```

A few tomcat specific properties are listed below
```
server.tomcat.accept-count= # Maximum queue length for incoming connection requests when all possible request processing threads are in use.
server.tomcat.accesslog.directory=logs # Directory in which log files are created. Can be relative to the tomcat base dir or absolute.
server.tomcat.accesslog.enabled=false # Enable access log.
server.tomcat.basedir= # Tomcat base directory. If not specified a temporary directory will be used.
server.tomcat.max-connections= # Maximum number of connections that the server will accept and process at any given time.
server.tomcat.max-threads=0 # Maximum amount of worker threads.
server.tomcat.uri-encoding=UTF-8 # Character encoding to use to decode the URI.
```

For complete list options refer spring documentation - https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html

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

