---
layout:     post
title:      Logging with Spring Boot - Logback, SLF4j and LOG4j2
date:       2022-07-06 12:31:19
summary:    Learn how to log effectively with Spring Boot. We will look at Spring Boot Starter for Logging and Spring Boot starter for log4j2.
categories:  SpringBoot
permalink : /logging-with-spring-boot-logback-slf4j-and-log4j
image: /images/spring-boot-feature.png
---

Learn how to log effectively with Spring Boot. We will look at Spring Boot Starter for Logging. We will look at the defaults in Spring Boot for Logging - Logback and SLF4J. We will also looking at the Spring Boot starter for log4j2.



## Default Logging Framework with Spring Boot

Spring boot provides a default starter for logging - `spring-boot-starter-logging`. It is included by default in `spring-boot-starter` which is included in all other starters.

> This means whenever you use any starters like `spring-boot-starter-web` or `spring-boot-starter-data-jpa`, you get logging for free!

Let's look at what is present in the Logging Starter.
```
<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-to-slf4j</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>jul-to-slf4j</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>log4j-over-slf4j</artifactId>
  <scope>compile</scope>
</dependency>

```

As you can see the default logging framework is Logback with SLF4j as implementation.

By default, all logging goes to console.

### Configure Logging Levels

In application.properties, we can use the "logging.level" prefix to set logging levels.

```
logging.level.some.package.path=DEBUG
logging.level.some.other.package.path=ERROR
```

Root logging level can be configured as shown below
```
logging.level.root=WARN
```
### Configuring a Log File

You can configure a log file by using logging.file property in application.properties. The logging here would be in addition to the logging in console.

```
logging.file=\path_to\logfile.log
```

### Custom configuration using logback.xml
Spring Boot will pick up all custom configuration using logback.xml as long as it is in the application class path.

### Example code

```
LOGGER.trace("Your log - {}", value);
LOGGER.debug("debug - {}", value);
LOGGER.info("info- {}", value);          
LOGGER.warn("warn - {}", value);          
LOGGER.error("error - {}", value);
```

## Using Log4j2 for logging with Spring Boot

We would need to exclude the dependency on `spring-boot-starter-logging` and add a dependency on `spring-boot-starter-log4j2`.

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

Let's take a quick look at the dependencies in log4j2 starter.

```
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-slf4j-impl</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-api</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.apache.logging.log4j</groupId>
  <artifactId>log4j-core</artifactId>
  <scope>compile</scope>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>jul-to-slf4j</artifactId>
  <scope>compile</scope>
</dependency>
```

### Custom configuration using log4j2.xml
Spring Boot will pick up all custom configuration using log4j2.xml as long as it is in the application class path.

You also have the option of using YAML or JSON with Log4j2.
- YAML - log4j2.yaml or log4j2.yml
- JSON - log4j2.json or log4j2.jsn

However, you would need to include the appropriate dependency to handle yaml(jackson-dataformat-yaml) or json(jackson-databind).

