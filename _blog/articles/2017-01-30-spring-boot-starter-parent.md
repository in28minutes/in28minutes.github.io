---
layout: post
title: Introduction to Spring Boot Starter Parent
date: 2025-09-07 02:31:19
summary: Key goal of Spring Boot is to enable a quick start to developing production ready applications. Spring Boot Starter Parent plays a key role in managing dependency versions and having the right plug-ins configured.
categories: SpringBoot
permalink: /spring-boot-starter-parent
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")

This guide will help you understand how the Spring Boot Starter Parent simplifies project setup by managing dependency
versions, defining the Java version, and providing default configurations for commonly used plugins.

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

## You will learn

- What is the Spring Boot Starter Parent?
- What are its key features?
- When should you use it?

## Tools you will need

- Maven 3.1+ as your build tool
- Your favorite IDE (Eclipse or IntelliJ IDEA)
- JDK 17+

## What is Spring Boot Starter Parent?

In a typical **pom.xml**, most Spring Boot projects use **spring-boot-starter-parent** as the parent POM.  
It provides sensible defaults for dependency versions, plugin management, and build configuration,  
so you don’t have to configure them manually.

```xml

<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.0.0-M2</version>
</parent>
```

Parent POMs let you handle the following for several child projects and modules:

- **Configuration** – Java version and other project-wide properties
- **Dependency Management** – Centralized version management for dependencies
- **Default Plugin Configuration** – Predefined settings for common Maven plugins

## What is inside Spring Boot Starter Parent?

- The **Spring Boot Starter Parent POM** defines `spring-boot-dependencies`.
- It inherits the dependency management from `spring-boot-dependencies`.
- This ensures consistent and compatible versions for all Spring Boot modules and third-party libraries.
- More details are covered in the next section.

```xml

<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>4.0.0-M2</version>
    <relativePath>../../spring-boot-dependencies</relativePath>
</parent>

```

Default java version is 1.6. A project can override this by specifying a property `<java.version>17</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>` in the project pom. A few other settings related to encoding
and source, target version are also set in the parent pom.

```xml

<properties>
    <java.version>17</java.version>
    <resource.delimiter>@</resource.delimiter>
    <maven.compiler.release>${java.version}</maven.compiler.release>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <spring-boot.run.main-class>${start-class}</spring-boot.run.main-class>
</properties>

```

Spring Boot Starter Parent specifies the default configuration for a host of plugins, including:

- `maven-compiler-plugin`
- `maven-failsafe-plugin`
- `maven-jar-plugin`
- `maven-war-plugin`
- and many more...

```xml

<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <configuration>
        <parameters>true</parameters>
    </configuration>
</plugin>
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
<configuration>
    <classesDirectory>${project.build.outputDirectory}</classesDirectory>
</configuration>
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
<artifactId>maven-war-plugin</artifactId>
<configuration>
    <archive>
        <manifest>
            <mainClass>${start-class}</mainClass>
            <addDefaultImplementationEntries>true</addDefaultImplementationEntries>
        </manifest>
    </archive>
</configuration>
</plugin>
```

## What does Spring Boot Starter Parent inherit from spring-boot-dependencies?

Spring Boot Dependencies defines the Spring Boot project's default **dependency management**.

If we want to use a different version of a specific dependency, we can override it by adding a new property in the
project `pom.xml`.

The following extract demonstrates some of the key dependencies managed by the Spring Boot Dependencies parent POM.  
Spring Boot Starter Parent inherits all of these properties from `spring-boot-dependencies`.

```xml

<properties>
    <activemq.version>6.1.7</activemq.version>
    <angus-mail.version>2.0.3</angus-mail.version>
    <artemis.version>2.42.0</artemis.version>
    <aspectj.version>1.9.24</aspectj.version>
    <assertj.version>3.27.3</assertj.version>
    <awaitility.version>4.3.0</awaitility.version>
    <zipkin-reporter.version>3.5.1</zipkin-reporter.version>
    <brave.version>6.3.0</brave.version>
    <build-helper-maven-plugin.version>3.6.1</build-helper-maven-plugin.version>
    <byte-buddy.version>1.17.6</byte-buddy.version>
    <cache2k.version>2.6.1.Final</cache2k.version>
    <caffeine.version>3.2.2</caffeine.version>
    <cassandra-driver.version>4.19.0</cassandra-driver.version>
    <classmate.version>1.7.0</classmate.version>
    <commons-codec.version>1.19.0</commons-codec.version>
    <commons-dbcp2.version>2.13.0</commons-dbcp2.version>
    <commons-lang3.version>3.18.0</commons-lang3.version>
    <commons-logging.version>1.3.5</commons-logging.version>
    <commons-pool.version>1.6</commons-pool.version>
    <commons-pool2.version>2.12.1</commons-pool2.version>
    <couchbase-client.version>3.8.2</couchbase-client.version>
    <crac.version>1.5.0</crac.version>
    <cyclonedx-maven-plugin.version>2.9.1</cyclonedx-maven-plugin.version>
    <db2-jdbc.version>12.1.2.0</db2-jdbc.version>
    <dependency-management-plugin.version>1.1.7</dependency-management-plugin.version>
    <derby.version>10.16.1.1</derby.version>
    <ehcache3.version>3.10.8</ehcache3.version>
    <elasticsearch-client.version>9.0.3</elasticsearch-client.version>
    <flyway.version>11.10.3</flyway.version>
    <freemarker.version>2.3.34</freemarker.version>
    <git-commit-id-maven-plugin.version>9.0.2</git-commit-id-maven-plugin.version>
    <glassfish-jaxb.version>4.0.5</glassfish-jaxb.version>
    <glassfish-jstl.version>3.0.1</glassfish-jstl.version>
    <graphql-java.version>24.1</graphql-java.version>
    <groovy.version>4.0.28</groovy.version>
    <gson.version>2.13.1</gson.version>
    <h2.version>2.3.232</h2.version>
    <hamcrest.version>3.0</hamcrest.version>
    <hazelcast.version>5.5.0</hazelcast.version>
    <hibernate.version>7.0.7.Final</hibernate.version>
    <hibernate-validator.version>9.0.1.Final</hibernate-validator.version>
    <hikaricp.version>6.3.1</hikaricp.version>
    <hsqldb.version>2.7.3</hsqldb.version>
    <htmlunit.version>4.13.0</htmlunit.version>
    <httpasyncclient.version>4.1.5</httpasyncclient.version>
    <httpclient5.version>5.5</httpclient5.version>
    <httpcore.version>4.4.16</httpcore.version>
    <httpcore5.version>5.3.4</httpcore5.version>
    <infinispan.version>15.2.5.Final</infinispan.version>
    <influxdb-java.version>2.25</influxdb-java.version>
    <jackson-bom.version>2.19.2</jackson-bom.version>
    <jakarta-activation.version>2.1.3</jakarta-activation.version>
    <jakarta-annotation.version>3.0.0</jakarta-annotation.version>
    <jakarta-inject.version>2.0.1</jakarta-inject.version>
    <jakarta-jms.version>3.1.0</jakarta-jms.version>
    <jakarta-json.version>2.1.3</jakarta-json.version>
    <jakarta-json-bind.version>3.0.1</jakarta-json-bind.version>
    <jakarta-mail.version>2.1.3</jakarta-mail.version>
    <jakarta-management.version>1.1.4</jakarta-management.version>
    <jakarta-persistence.version>3.2.0</jakarta-persistence.version>
    <jakarta-servlet.version>6.1.0</jakarta-servlet.version>
    <jakarta-servlet-jsp-jstl.version>3.0.2</jakarta-servlet-jsp-jstl.version>
    <jakarta-transaction.version>2.0.1</jakarta-transaction.version>
    <jakarta-validation.version>3.1.1</jakarta-validation.version>
    <jakarta-websocket.version>2.2.0</jakarta-websocket.version>
    <jakarta-ws-rs.version>4.0.0</jakarta-ws-rs.version>
    <jakarta-xml-bind.version>4.0.2</jakarta-xml-bind.version>
    <jakarta-xml-soap.version>3.0.2</jakarta-xml-soap.version>
    <jakarta-xml-ws.version>4.0.2</jakarta-xml-ws.version>
    <janino.version>3.1.12</janino.version>
    <javax-cache.version>1.1.1</javax-cache.version>
    <javax-money.version>1.1</javax-money.version>
    <jaxen.version>2.0.0</jaxen.version>
    <jaybird.version>6.0.2</jaybird.version>
    <jboss-logging.version>3.6.1.Final</jboss-logging.version>
    <jdom2.version>2.0.6.1</jdom2.version>
    <jedis.version>6.0.0</jedis.version>
    <jersey.version>4.0.0-M2</jersey.version>
    <jetty-reactive-httpclient.version>4.0.10</jetty-reactive-httpclient.version>
    <jetty.version>12.0.23</jetty.version>
    <jmustache.version>1.16</jmustache.version>
    <jooq.version>3.19.24</jooq.version>
    <json-path.version>2.9.0</json-path.version>
    <json-smart.version>2.5.2</json-smart.version>
    <jsonassert.version>1.5.3</jsonassert.version>
    <jtds.version>1.3.1</jtds.version>
    <junit.version>4.13.2</junit.version>
    <junit-jupiter.version>5.13.4</junit-jupiter.version>
    <kafka.version>4.0.0</kafka.version>
    <kotlin.version>2.2.0</kotlin.version>
    <kotlin-coroutines.version>1.10.2</kotlin-coroutines.version>
    <kotlin-serialization.version>1.9.0</kotlin-serialization.version>
    <lettuce.version>6.7.1.RELEASE</lettuce.version>
    <liquibase.version>4.33.0</liquibase.version>
    <log4j2.version>2.24.3</log4j2.version>
    <logback.version>1.5.18</logback.version>
    <lombok.version>1.18.38</lombok.version>
    <mariadb.version>3.5.4</mariadb.version>
    <maven-antrun-plugin.version>3.1.0</maven-antrun-plugin.version>
    <maven-assembly-plugin.version>3.7.1</maven-assembly-plugin.version>
    <maven-clean-plugin.version>3.5.0</maven-clean-plugin.version>
    <maven-compiler-plugin.version>3.14.0</maven-compiler-plugin.version>
    <maven-dependency-plugin.version>3.8.1</maven-dependency-plugin.version>
    <maven-deploy-plugin.version>3.1.4</maven-deploy-plugin.version>
    <maven-enforcer-plugin.version>3.6.1</maven-enforcer-plugin.version>
    <maven-failsafe-plugin.version>3.5.3</maven-failsafe-plugin.version>
    <maven-help-plugin.version>3.5.1</maven-help-plugin.version>
    <maven-install-plugin.version>3.1.4</maven-install-plugin.version>
    <maven-invoker-plugin.version>3.9.1</maven-invoker-plugin.version>
    <maven-jar-plugin.version>3.4.2</maven-jar-plugin.version>
    <maven-javadoc-plugin.version>3.11.2</maven-javadoc-plugin.version>
    <maven-resources-plugin.version>3.3.1</maven-resources-plugin.version>
    <maven-shade-plugin.version>3.6.0</maven-shade-plugin.version>
    <maven-source-plugin.version>3.3.1</maven-source-plugin.version>
    <maven-surefire-plugin.version>3.5.3</maven-surefire-plugin.version>
    <maven-war-plugin.version>3.4.0</maven-war-plugin.version>
    <micrometer.version>1.16.0-M1</micrometer.version>
    <micrometer-tracing.version>1.6.0-M1</micrometer-tracing.version>
    <mockito.version>5.18.0</mockito.version>
    <mongodb.version>5.5.1</mongodb.version>
    <mssql-jdbc.version>12.10.1.jre11</mssql-jdbc.version>
    <mysql.version>9.3.0</mysql.version>
    <native-build-tools-plugin.version>0.10.6</native-build-tools-plugin.version>
    <nekohtml.version>1.9.22</nekohtml.version>
    <neo4j-java-driver.version>5.28.9</neo4j-java-driver.version>
    <netty.version>4.2.3.Final</netty.version>
    <opentelemetry.version>1.52.0</opentelemetry.version>
    <oracle-database.version>23.8.0.25.04</oracle-database.version>
    <oracle-r2dbc.version>1.3.0</oracle-r2dbc.version>
    <pooled-jms.version>3.1.7</pooled-jms.version>
    <postgresql.version>42.7.7</postgresql.version>
    <prometheus-client.version>1.3.10</prometheus-client.version>
    <prometheus-simpleclient.version>0.16.0</prometheus-simpleclient.version>
    <pulsar.version>4.0.5</pulsar.version>
    <pulsar-reactive.version>0.7.0</pulsar-reactive.version>
    <quartz.version>2.5.0</quartz.version>
    <querydsl.version>5.1.0</querydsl.version>
    <r2dbc-h2.version>1.0.0.RELEASE</r2dbc-h2.version>
    <r2dbc-mariadb.version>1.3.0</r2dbc-mariadb.version>
    <r2dbc-mssql.version>1.0.2.RELEASE</r2dbc-mssql.version>
    <r2dbc-mysql.version>1.4.1</r2dbc-mysql.version>
    <r2dbc-pool.version>1.0.2.RELEASE</r2dbc-pool.version>
    <r2dbc-postgresql.version>1.0.7.RELEASE</r2dbc-postgresql.version>
    <r2dbc-proxy.version>1.1.6.RELEASE</r2dbc-proxy.version>
    <r2dbc-spi.version>1.0.0.RELEASE</r2dbc-spi.version>
    <rabbit-amqp-client.version>5.26.0</rabbit-amqp-client.version>
    <rabbit-stream-client.version>0.23.0</rabbit-stream-client.version>
    <reactive-streams.version>1.0.4</reactive-streams.version>
    <reactor-bom.version>2025.0.0-M5</reactor-bom.version>
    <rest-assured.version>5.5.5</rest-assured.version>
    <rsocket.version>1.1.5</rsocket.version>
    <rxjava3.version>3.1.11</rxjava3.version>
    <saaj-impl.version>3.0.4</saaj-impl.version>
    <selenium.version>4.34.0</selenium.version>
    <selenium-htmlunit.version>4.33.0</selenium-htmlunit.version>
    <sendgrid.version>4.10.3</sendgrid.version>
    <slf4j.version>2.0.17</slf4j.version>
    <snakeyaml.version>2.4</snakeyaml.version>
    <spring-amqp.version>4.0.0-M3</spring-amqp.version>
    <spring-authorization-server.version>2.0.0-M1</spring-authorization-server.version>
    <spring-batch.version>6.0.0-M1</spring-batch.version>
    <spring-data-bom.version>2025.1.0-M4</spring-data-bom.version>
    <spring-framework.version>7.0.0-M7</spring-framework.version>
    <spring-graphql.version>2.0.0-M1</spring-graphql.version>
    <spring-hateoas.version>3.0.0-M3</spring-hateoas.version>
    <spring-integration.version>7.0.0-M1</spring-integration.version>
    <spring-kafka.version>4.0.0-M3</spring-kafka.version>
    <spring-ldap.version>4.0.0-M1</spring-ldap.version>
    <spring-pulsar.version>2.0.0-M1</spring-pulsar.version>
    <spring-restdocs.version>4.0.0-M1</spring-restdocs.version>
    <spring-retry.version>2.0.12</spring-retry.version>
    <spring-security.version>7.0.0-M1</spring-security.version>
    <spring-session.version>4.0.0-M1</spring-session.version>
    <spring-ws.version>5.0.0-M1</spring-ws.version>
    <sqlite-jdbc.version>3.50.3.0</sqlite-jdbc.version>
    <testcontainers.version>1.21.3</testcontainers.version>
    <testcontainers-redis-module.version>2.2.4</testcontainers-redis-module.version>
    <thymeleaf.version>3.1.3.RELEASE</thymeleaf.version>
    <thymeleaf-extras-data-attribute.version>2.0.1</thymeleaf-extras-data-attribute.version>
    <thymeleaf-extras-springsecurity.version>3.1.3.RELEASE</thymeleaf-extras-springsecurity.version>
    <thymeleaf-layout-dialect.version>3.4.0</thymeleaf-layout-dialect.version>
    <tomcat.version>11.0.9</tomcat.version>
    <unboundid-ldapsdk.version>7.0.3</unboundid-ldapsdk.version>
    <undertow.version>2.3.18.Final</undertow.version>
    <versions-maven-plugin.version>2.18.0</versions-maven-plugin.version>
    <vibur.version>26.0</vibur.version>
    <webjars-locator-core.version>0.59</webjars-locator-core.version>
    <webjars-locator-lite.version>1.1.0</webjars-locator-lite.version>
    <wsdl4j.version>1.6.3</wsdl4j.version>
    <xml-maven-plugin.version>1.1.0</xml-maven-plugin.version>
    <xmlunit2.version>2.10.3</xmlunit2.version>
    <yasson.version>3.0.4</yasson.version>
</properties>
```

Defines Maven 3.14.0 as the minimum version needed.

```xml

<prerequisites>
    <maven>3.14.0</maven>
</prerequisites>
```
