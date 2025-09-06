---
layout: post
title: Spring Initializr - Bootstrap Your Spring Boot Applications at F1 speed!
date: 2025-09-06 06:14:13
summary: Discover what Spring Initializr is and how to rapidly Bootstrap a Spring Boot Web Application.
categories: SpringBoot
permalink: /spring-initialzr-bootstrap-spring-boot-applications
image: /images/spring-boot-category.png
---

![Image](/images/Spring-Initializr-Web.png 'Web, Actuator and Developer Tools')

[Spring Initializr](http://start.spring.io/) is a great tool to quickly bootstrap your Spring Boot projects.


![Image](/images/Spring-Initializr-Web-ApplicationStructure.png 'Spring Initializr Web Application - Folder Structure')

It enables you to construct a wide range of **Spring Boot-based applications** using a simple user interface.  
With Spring Initializr, you can bootstrap applications such as:

- Web Applications
- RESTful Applications
- Batch Applications

Spring Boot provides a diverse set of starter projects, and Spring Initializr is compatible with all of them (and more).  
Some commonly used starters include:

- `spring-boot-starter-web-services` – Build applications exposing **SOAP Web Services**
- `spring-boot-starter-web` – Build **Web applications** & **RESTful services**
- `spring-boot-starter-test` – Write Unit and Integration Tests
- `spring-boot-starter-jdbc` – Build traditional **JDBC applications**
- `spring-boot-starter-hateoas` – Add **HATEOAS** features to make your services more RESTful
- `spring-boot-starter-security` – Implement **authentication and authorization** using Spring Security
- `spring-boot-starter-data-jpa` – Use **Spring Data JPA with Hibernate**
- `spring-boot-starter-cache` – Enable caching support in your applications
- `spring-boot-starter-data-rest` – Quickly expose simple REST services using Spring Data REST

---

👉 In this guide, we will focus on creating a **simple web application** with **Spring Initializr**.


## Bootstrapping a Web Application with Spring Initializr

Creating a web application with **Spring Initializr** is straightforward and fast.  
With just a few clicks, you can generate a fully working Spring Boot project and import it into your IDE.


![Image](/images/Spring-Initializr-Web.png 'Web, Actuator and Developer Tools')

As shown in the image above, follow these steps:

- Launch **Spring Initializr** [http://start.spring.io/](http://start.spring.io/) and choose the following:
    - **Group**: `com.in28minutes.springboot`
    - **Artifact**: `student-services`
    - **Dependencies**:
        - Spring Web
        - Spring Boot Actuator
        - Spring Boot DevTools
- Click the **Generate Project** button at the bottom of the page.
- Import the project into **Eclipse** or **IntelliJ IDEA**.


## Project Structure Established

After importing the Maven project, the following project structure is created (as shown in the screenshot).

![Image](/images/Spring-Initializr-Web-ApplicationStructure.png "'Spring Initializr Web Application - Folder Structure'")

### Key Project Files

- **StudentServicesApplication.java** – The main launcher class for Spring Boot. It initializes Auto Configuration and the Spring Application Context.
- **application.properties** – Central configuration file for the application.
- **StudentServicesApplicationTests.java** – Basic test launcher for running unit tests.
- **pom.xml** – Declares project dependencies such as Spring Boot Starter Web, Actuator, and DevTools. It also uses the Spring Boot Starter Parent as the parent POM.


## Completely Created Code

When the project is generated, the following key files are included.

### /pom.xml

The `pom.xml` is the backbone of the project, managing dependencies and build configuration. Three important configurations are included:

- **Spring Boot Parent POM** – Provides default configuration for dependency versions and plugins.  
  👉 [Learn more](http://www.springboottutorial.com/spring-boot-starter-parent)

- **Spring Boot Starter Web** – Adds support for building web applications and RESTful services.  
  👉 [Learn more](http://www.springboottutorial.com/spring-boot-starter-projects)

- **Spring Boot Maven Plugin** – Simplifies building and running Spring Boot applications directly from Maven.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.0.0-M2</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.in28minutes.springboot</groupId>
    <artifactId>student-services</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>student-services</name>
    <description>Demo project for Spring Boot</description>
    <url/>
    <licenses>
        <license/>
    </licenses>
    <developers>
        <developer/>
    </developers>
    <scm>
        <connection/>
        <developerConnection/>
        <tag/>
        <url/>
    </scm>
    <properties>
        <java.version>21</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

---

### /src/main/java/com/in28minutes/springboot/StudentServicesApplication.java

This is the **main entry point** of the Spring Boot application.

- **`@SpringBootApplication`** – A convenience annotation that enables:
    - Auto Configuration
    - Component Scanning
    - Configuration support  
      👉 [Learn more about Auto Configuration](http://www.springboottutorial.com/spring-boot-auto-configuration)
    - Signifies that this is a Spring Boot application
    - It is a composite annotation that combines the following annotations
      - `@SpringBootConfiguration` + `@EnableAutoConfiguration` + `@ComponentScanning`
- **`SpringApplication.run(...)`** – A static method to bootstrap and launch the Spring Boot application.


```java
package com.in28minutes.springboot.studentservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentServicesApplication {

  public static void main(String[] args) {
    SpringApplication.run(StudentServicesApplication.class, args);
  }
}
```

---

### /src/main/resources/application.properties

```

```

---

### /src/test/java/com/in28minutes/springboot/StudentServicesApplicationTests.java

This is the **default test class** generated by Spring Initializr.

- It uses **Spring Boot Test support** to start the entire application context.
- Provides a simple way to verify that the Spring Boot application loads successfully.
- Serves as a good starting point to add **integration tests** for your services and controllers.

👉 [Learn more about Integration Testing in Spring Boot](http://www.springboottutorial.com/integration-testing-for-spring-boot-rest-services)


```java
package com.in28minutes.springboot.student_services;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StudentServicesApplicationTests {

    @Test
    void contextLoads() {
    }

}
```

---

## Running the application

When you execute StudentServicesApplication.java as a Java application, the following log is generated.

```

 /Users/puneethsai/Library/Java/JavaVirtualMachines/corretto-21.0.7/Contents/Home/bin/java -XX:TieredStopAtLevel=1 -Dspring.output.ansi.enabled=always -Dcom.sun.management.jmxremote -Dspring.jmx.enabled=true -Dspring.liveBeansView.mbeanDomain -Dspring.application.admin.enabled=true -Dmanagement.endpoints.jmx.exposure.include=* -javaagent:/Users/puneethsai/Applications/IntelliJ IDEA Ultimate.app/Contents/lib/idea_rt.jar=58604 -Dfile.encoding=UTF-8 -Dsun.stdout.encoding=UTF-8 -Dsun.stderr.encoding=UTF-8 -classpath /Users/puneethsai/Downloads/student-services/target/classes:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter-actuator/4.0.0-M2/spring-boot-starter-actuator-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter/4.0.0-M2/spring-boot-starter-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter-logging/4.0.0-M2/spring-boot-starter-logging-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/ch/qos/logback/logback-classic/1.5.18/logback-classic-1.5.18.jar:/Users/puneethsai/.m2/repository/ch/qos/logback/logback-core/1.5.18/logback-core-1.5.18.jar:/Users/puneethsai/.m2/repository/org/apache/logging/log4j/log4j-to-slf4j/2.24.3/log4j-to-slf4j-2.24.3.jar:/Users/puneethsai/.m2/repository/org/apache/logging/log4j/log4j-api/2.24.3/log4j-api-2.24.3.jar:/Users/puneethsai/.m2/repository/org/slf4j/jul-to-slf4j/2.0.17/jul-to-slf4j-2.0.17.jar:/Users/puneethsai/.m2/repository/jakarta/annotation/jakarta.annotation-api/3.0.0/jakarta.annotation-api-3.0.0.jar:/Users/puneethsai/.m2/repository/org/yaml/snakeyaml/2.4/snakeyaml-2.4.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-actuator-autoconfigure/4.0.0-M2/spring-boot-actuator-autoconfigure-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-actuator/4.0.0-M2/spring-boot-actuator-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/core/jackson-databind/2.20.0-rc1/jackson-databind-2.20.0-rc1.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/core/jackson-annotations/2.20-rc1/jackson-annotations-2.20-rc1.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/core/jackson-core/2.20.0-rc1/jackson-core-2.20.0-rc1.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.20.0-rc1/jackson-datatype-jsr310-2.20.0-rc1.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-health/4.0.0-M2/spring-boot-health-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-micrometer-metrics/4.0.0-M2/spring-boot-micrometer-metrics-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-micrometer-observation/4.0.0-M2/spring-boot-micrometer-observation-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/io/micrometer/micrometer-core/1.16.0-M2/micrometer-core-1.16.0-M2.jar:/Users/puneethsai/.m2/repository/org/hdrhistogram/HdrHistogram/2.2.2/HdrHistogram-2.2.2.jar:/Users/puneethsai/.m2/repository/org/latencyutils/LatencyUtils/2.0.3/LatencyUtils-2.0.3.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-micrometer-tracing/4.0.0-M2/spring-boot-micrometer-tracing-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/io/micrometer/micrometer-tracing/1.6.0-M2/micrometer-tracing-1.6.0-M2.jar:/Users/puneethsai/.m2/repository/io/micrometer/context-propagation/1.2.0-M1/context-propagation-1.2.0-M1.jar:/Users/puneethsai/.m2/repository/io/micrometer/micrometer-observation/1.16.0-M2/micrometer-observation-1.16.0-M2.jar:/Users/puneethsai/.m2/repository/org/jspecify/jspecify/1.0.0/jspecify-1.0.0.jar:/Users/puneethsai/.m2/repository/io/micrometer/micrometer-commons/1.16.0-M2/micrometer-commons-1.16.0-M2.jar:/Users/puneethsai/.m2/repository/io/micrometer/micrometer-jakarta9/1.16.0-M2/micrometer-jakarta9-1.16.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter-web/4.0.0-M2/spring-boot-starter-web-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter-jackson/4.0.0-M2/spring-boot-starter-jackson-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-jackson/4.0.0-M2/spring-boot-jackson-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.20.0-rc1/jackson-datatype-jdk8-2.20.0-rc1.jar:/Users/puneethsai/.m2/repository/com/fasterxml/jackson/module/jackson-module-parameter-names/2.20.0-rc1/jackson-module-parameter-names-2.20.0-rc1.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-starter-tomcat/4.0.0-M2/spring-boot-starter-tomcat-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-tomcat/4.0.0-M2/spring-boot-tomcat-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-web-server/4.0.0-M2/spring-boot-web-server-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/apache/tomcat/embed/tomcat-embed-core/11.0.10/tomcat-embed-core-11.0.10.jar:/Users/puneethsai/.m2/repository/org/apache/tomcat/embed/tomcat-embed-el/11.0.10/tomcat-embed-el-11.0.10.jar:/Users/puneethsai/.m2/repository/org/apache/tomcat/embed/tomcat-embed-websocket/11.0.10/tomcat-embed-websocket-11.0.10.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-http-converter/4.0.0-M2/spring-boot-http-converter-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-web/7.0.0-M8/spring-web-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-beans/7.0.0-M8/spring-beans-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-webmvc/4.0.0-M2/spring-boot-webmvc-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-servlet/4.0.0-M2/spring-boot-servlet-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-webmvc/7.0.0-M8/spring-webmvc-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-aop/7.0.0-M8/spring-aop-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-expression/7.0.0-M8/spring-expression-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-devtools/4.0.0-M2/spring-boot-devtools-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot/4.0.0-M2/spring-boot-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-context/7.0.0-M8/spring-context-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/org/springframework/boot/spring-boot-autoconfigure/4.0.0-M2/spring-boot-autoconfigure-4.0.0-M2.jar:/Users/puneethsai/.m2/repository/org/slf4j/slf4j-api/2.0.17/slf4j-api-2.0.17.jar:/Users/puneethsai/.m2/repository/org/springframework/spring-core/7.0.0-M8/spring-core-7.0.0-M8.jar:/Users/puneethsai/.m2/repository/commons-logging/commons-logging/1.3.5/commons-logging-1.3.5.jar com.in28minutes.springboot.student_services.StudentServicesApplication

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::             (v4.0.0-M2)

2025-09-06T16:17:54.722+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] c.i.s.s.StudentServicesApplication       : Starting StudentServicesApplication using Java 21.0.7 with PID 13610 (/Users/puneethsai/Downloads/student-services/target/classes started by puneethsai in /Users/puneethsai/Downloads/student-services)
2025-09-06T16:17:54.728+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] c.i.s.s.StudentServicesApplication       : No active profile set, falling back to 1 default profile: "default"
2025-09-06T16:17:54.792+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2025-09-06T16:17:54.793+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2025-09-06T16:17:55.942+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
2025-09-06T16:17:55.958+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2025-09-06T16:17:55.959+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.10]
2025-09-06T16:17:55.993+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1200 ms
2025-09-06T16:17:56.617+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2025-09-06T16:17:56.658+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
2025-09-06T16:17:56.720+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] o.s.boot.tomcat.TomcatWebServer          : Tomcat started on port 8080 (http) with context path '/'
2025-09-06T16:17:56.729+05:30  INFO 13610 --- [student-services] [  restartedMain] [                                                 ] c.i.s.s.StudentServicesApplication       : Started StudentServicesApplication in 2.524 seconds (process running for 3.535)
2025-09-06T16:17:58.404+05:30  INFO 13610 --- [student-services] [on(3)-127.0.0.1] [                                                 ] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
2025-09-06T16:17:58.405+05:30  INFO 13610 --- [student-services] [on(3)-127.0.0.1] [                                                 ] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
2025-09-06T16:17:58.407+05:30  INFO 13610 --- [student-services] [on(3)-127.0.0.1] [                                                 ] o.s.web.servlet.DispatcherServlet        : Completed initialization in 2 ms

```
