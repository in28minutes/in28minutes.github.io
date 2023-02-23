---
layout:     post
title:      Introduction to Spring Boot Starter Parent
date:       2023-02-22 02:31:19
summary:    Key goal of Spring Boot is to enable a quick start to developing production ready applications. Spring Boot Starter Parent plays a key role in managing dependency versions and having the right plug-ins configured.  
categories:  SpringBoot
permalink:  /spring-boot-starter-parent
image: /images/spring-boot-feature.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

This guide will help you understand how Spring Boot Starter Parent helps with managing dependency versions, the java version used by project and the default configuration for plug-ins.

![Image](/images/SpringBootStarterWeb-Dependencies.png "Spring Boot Starter Web - Dependencies")

 
## You will learn
- What is Spring Boot Starter Parent?
- What are the important features of Spring Boot Starter Parent?
- When do you use Spring Boot Starter Parent?

## Tools you will need
- Maven 3.1+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

## What is Spring Boot Starter Parent?

In pom.xml, all Spring Boot projects normally utilise spring-boot-starter-parent as the parent.

```
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.0.2</version>
    </parent>
```

Parent poms' let you handle the following for several child projects and modules:

- Configuration - Java Version and Other Properties
- Depedency Management - Version of dependencies
- Default Plugin Configuration

## What is inside Spring Boot Starter Parent?

First and foremost, Spring Boot Starter The parent pom defines spring-boot-dependencies. It inherits spring-boot-dependencies' dependency management. Details in the next section.

```
<parent>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-dependencies</artifactId>
	<version>3.0.2</version>
	<relativePath>../../spring-boot-dependencies</relativePath>
</parent>

```

Default java version is 1.6. A project can override this by specifying a property `<java.version>17</java.version>
<maven-jar-plugin.version>3.1.1</maven-jar-plugin.version>` in the project pom. A few other settings related to encoding and source, target version are also set in the parent pom.

```
<java.version>17</java.version>
<resource.delimiter>@</resource.delimiter>
<maven.compiler.source>${java.version}</maven.compiler.source>
<maven.compiler.target>${java.version}</maven.compiler.target>
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

```

Spring Boot Starter Parent specifies the default configuration for a host of plugins including `maven-compiler-plugin`, `maven-failsafe-plugin`, `maven-jar-plugin`, `maven-war-plugin` and more .

```
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

Spring Boot Dependencies defines the Spring Boot project's default dependency management. If we wish to utilise a new version of a certain dependency, we may do so by adding a new property to the project pom. The following extract demonstrates some of the essential dependencies controlled by the Spring Boot Dependencies parent pom. Spring Boot Starter Parent inherits all of these properties from spring-boot-dependencies.

```
<properties>
    <angus-mail.version>1.0.0</angus-mail.version>
	<artemis.version>2.26.0</artemis.version>
	...
	<ehcache3.version>3.10.8</ehcache3.version>
	...
	<h2.version>2.1.214</h2.version>
	<hamcrest.version>2.2</hamcrest.version>
	<hazelcast.version>5.1.5</hazelcast.version>
	<hibernate.version>6.1.6.Final</hibernate.version>
	<hibernate-validator.version>8.0.0.Final</hibernate-validator.version>
	<hikaricp.version>5.0.1</hikaricp.version>
	<hsqldb.version>2.7.1</hsqldb.version>
	<htmlunit.version>2.65.0</htmlunit.version>
	<httpasyncclient.version>4.1.5</httpasyncclient.version>
	<httpclient.version>4.5.14</httpclient.version>
	<httpclient5.version>5.1.4</httpclient5.version>
	<httpcore.version>4.4.16</httpcore.version>
	<httpcore5.version>5.1.4</httpcore5.version>
	<influxdb-java.version>2.23</influxdb-java.version>
	<jackson-bom.version>2.14.1</jackson-bom.version>
	<jakarta-activation.version>2.1.1</jakarta-activation.version>
    <jakarta-annotation.version>2.1.1</jakarta-annotation.version>
	....
	<jetty.version>11.0.13</jetty.version>
	<junit-jupiter.version>5.9.2</junit-jupiter.version>
    <kafka.version>3.3.2</kafka.version>
    <kotlin.version>1.7.22</kotlin.version>
	...
	<log4j2.version>2.19.0</log4j2.version>
    <logback.version>1.4.5</logback.version>
    <lombok.version>1.18.24</lombok.version>
	<maven-antrun-plugin.version>3.1.0</maven-antrun-plugin.version>
    <maven-assembly-plugin.version>3.4.2</maven-assembly-plugin.version>
    <maven-clean-plugin.version>3.2.0</maven-clean-plugin.version>
    <maven-compiler-plugin.version>3.10.1</maven-compiler-plugin.version>
    <maven-dependency-plugin.version>3.3.0</maven-dependency-plugin.version>
    <maven-deploy-plugin.version>3.0.0</maven-deploy-plugin.version>
    <maven-enforcer-plugin.version>3.1.0</maven-enforcer-plugin.version>
    <maven-failsafe-plugin.version>2.22.2</maven-failsafe-plugin.version>
    <maven-help-plugin.version>3.3.0</maven-help-plugin.version>
    <maven-install-plugin.version>3.0.1</maven-install-plugin.version>
    <maven-invoker-plugin.version>3.3.0</maven-invoker-plugin.version>
    <maven-jar-plugin.version>3.3.0</maven-jar-plugin.version>
    <maven-javadoc-plugin.version>3.4.1</maven-javadoc-plugin.version>
    <maven-resources-plugin.version>3.3.0</maven-resources-plugin.version>
    <maven-shade-plugin.version>3.4.1</maven-shade-plugin.version>
    <maven-source-plugin.version>3.2.1</maven-source-plugin.version>
    <maven-surefire-plugin.version>2.22.2</maven-surefire-plugin.version>
    <maven-war-plugin.version>3.3.2</maven-war-plugin.version>
    <micrometer.version>1.10.3</micrometer.version>
    <micrometer-tracing.version>1.0.1</micrometer-tracing.version>
	<spring-security.version>6.0.1</spring-security.version>
	<tomcat.version>10.1.5</tomcat.version>
	<undertow.version>2.3.3.Final</undertow.version>
	<webjars-locator.version>0.52</webjars-locator.version>
	<wsdl4j.version>1.6.3</wsdl4j.version>
	<xml-maven-plugin.version>1.0.2</xml-maven-plugin.version>
    <xmlunit2.version>2.9.1</xmlunit2.version>
	<zipkin.version>3.0.2</zipkin.version>
</properties>
```
Defines Maven 3.2.1 as the minimum version needed.

```
<prerequisites>
	<maven>3.2.1</maven>
</prerequisites>
```
