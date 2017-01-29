---
layout:     post
title:      What is Spring Boot Auto Configuration?
date:       2017-01-28 12:31:19
summary:    Auto Configuration is the most important feature in Spring Boot. We will learn important concepts about Auto Configuration with a couple of examples. 
categories: [Spring Boot, Spring Boot Basics]
permalink:  /spring-boot-auto-configuration
---

This guide will help you understand Spring Boot Auto Configuration with examples. We will use a simple code example creating couple of simple rest services. 
 
## You will learn
- Why do we need Auto Configuration?
- What is Auto Configuration?
  - We will look at a few examples!
- How is Auto Configuration implemented in Spring Boot?
- How to debug Auto Configuration?

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Why do we need Spring Boot Auto Configuration?

Spring based applications have a lot of configuration. 

When we use Spring MVC, we need to configure component scan, dispatcher servlet, a view resolver, web jars(for delivering static content) among other things.

```xml
  <bean
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix">
            <value>/WEB-INF/views/</value>
        </property>
        <property name="suffix">
            <value>.jsp</value>
        </property>
  </bean>
  
  <mvc:resources mapping="/webjars/**" location="/webjars/"/>
    
```

Below code snippet shows typical configuration of a dispatcher servlet in a web application.

```xml
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/todo-servlet.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
```
  
When we use Hibernate/JPA, we would need to configure a datasource, an entity manager factory, a transaction manager among a host of other things. 

```xml
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource"
        destroy-method="close">
        <property name="driverClass" value="${db.driver}" />
        <property name="jdbcUrl" value="${db.url}" />
        <property name="user" value="${db.username}" />
        <property name="password" value="${db.password}" />
    </bean>

    <jdbc:initialize-database data-source="dataSource">
        <jdbc:script location="classpath:config/schema.sql" />
        <jdbc:script location="classpath:config/data.sql" />
    </jdbc:initialize-database>

    <bean
        class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean"
        id="entityManagerFactory">
        <property name="persistenceUnitName" value="hsql_pu" />
        <property name="dataSource" ref="dataSource" />
    </bean>

    <bean id="transactionManager" class="org.springframework.orm.jpa.JpaTransactionManager">
        <property name="entityManagerFactory" ref="entityManagerFactory" />
        <property name="dataSource" ref="dataSource" />
    </bean>

    <tx:annotation-driven transaction-manager="transactionManager"/>

``` 

Above examples are typical with any Spring framework implementation or integration with other frameworks.

Spring Boot brings in new thought process around this. 

> Can we bring more intelligence into this? When somebody adds spring mvc jar into application, can we auto configure the basic things based on this? 

- How about auto configuring a Data Source if Hibernate jar is on the classpath? 
- How about auto configuring a Dispatcher Servlet if Spring MVC jar is on the classpath?

There would be provisions to override the default auto configuration. 

> This entire process of Spring Boot provide default configuration based on what classes are available on the CLASSPATH and what configuration is provided for the application is called Auto Configuration.  

To understand Auto Configuration further, lets bootstrap a simple Spring Boot Application using Spring Initializr.

## Creating REST Services Application with Spring Initializr

> Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

As shown in the image above, following steps have to be done.

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot` as Group
  - Choose `student-services` as Artifact
  - Choose following dependencies
    - Web
    - Actuator
    - DevTools
- Click Generate Project.
- Import the project into Eclipse.
- If you want to understand all the files that are part of this project, you can go here.

### Spring Boot Auto Configuration in action.

When we run StudentServicesApplication.java as a Java Application, you will see a few important things in the log.

```
Mapping servlet: 'dispatcherServlet' to [/]

Mapped "{[/error]}" onto public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)

Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]

```

Above log statements are good examples of `Spring Boot Auto Configuration` in action. 

As soon as we added in Spring Boot Starter Web as a dependency in our project, Spring Boot Autoconfiguration sees that Spring MVC is on the classpath. It autoconfigures dispatcherServlet, a default error page and webjars.

If you add Spring Boot Data JPA Starter, you will see that Spring Boot Auto Configuration auto configures a datasource and an Entity Manager. 

## Where is Spring Boot Auto Configuration implemented?

Good Question.

All auto configuration logic is implemented in `spring-boot-autoconfigure.jar`. All auto configuration logic for mvc, data, jms and other frameworks is present in a single jar.  

![Image](/images/spring-boot-autoconfigure-jar.png "Spring Boot Auto Configure Jar")

Other important file inside spring-boot-autoconfigure.jar is /META-INF/spring.factories.  This file lists all the auto configuration classes that should be enabled under the EnableAutoConfiguration key. A few of the important auto configurations are listed below.

```properties
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\
org.springframework.boot.autoconfigure.MessageSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.PropertyPlaceholderAutoConfiguration,\
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.JndiDataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration,\
org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration,\
org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration,\
org.springframework.boot.autoconfigure.security.SecurityFilterAutoConfiguration,\
org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration,\
org.springframework.boot.autoconfigure.web.EmbeddedServletContainerAutoConfiguration,\
org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration,\
```   

### Example Auto Configuration 

We will take a look at DataSourceAutoConfiguration.

`@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })` : This configuration is enabled only when these classes are available in the classpath.

```
@Configuration
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@EnableConfigurationProperties(DataSourceProperties.class)
@Import({ Registrar.class, DataSourcePoolMetadataProvidersConfiguration.class })
public class DataSourceAutoConfiguration {
```

`@ConditionalOnMissingBean` : This bean is configured only if there is no other bean configured with the same name.

```
@Bean
@ConditionalOnMissingBean
public DataSourceInitializer dataSourceInitializer() {
	return new DataSourceInitializer();
}
```

Embedded Database is configured only if there are no beans of type DataSource.class or XADataSource.class already configured.

```
@Conditional(EmbeddedDatabaseCondition.class)
@ConditionalOnMissingBean({ DataSource.class, XADataSource.class })
@Import(EmbeddedDataSourceConfiguration.class)
protected static class EmbeddedDatabaseConfiguration {
}

```

## Debugging Auto Configuration

There are two ways you can debug and find more information about auto configuration.

- Turning on debug logging
- Using Spring Boot Actuator

### Debug Logging

You can turn debug logging by adding a simple property value to application.properties. In the example below, we are turning on Debug level for all logging from org.springframework package (and sub packages).

```properties
logging.level.org.springframework: DEBUG
```

When you restart the application, you would see an auto configuration report printed in the log. Similar to what you see below, a report is produced including all the auto configuration classes. The report separates the positive matches from negative matches. It will show why a specific bean is auto configured and also why something is not auto configured. 

```log
=========================
AUTO-CONFIGURATION REPORT
=========================

Positive matches:
-----------------
DispatcherServletAutoConfiguration matched
 - @ConditionalOnClass classes found: org.springframework.web.servlet.DispatcherServlet (OnClassCondition)
 - found web application StandardServletEnvironment (OnWebApplicationCondition)


Negative matches:
-----------------
ActiveMQAutoConfiguration did not match
 - required @ConditionalOnClass classes not found: javax.jms.ConnectionFactory,org.apache.activemq.ActiveMQConnectionFactory (OnClassCondition)

AopAutoConfiguration.CglibAutoProxyConfiguration did not match
 - @ConditionalOnProperty missing required properties spring.aop.proxy-target-class (OnPropertyCondition)


```

### Spring Boot Actuator

Other way to debug auto configuration is to add spring boot actuator to your project. We will also add in HAL Browser to make things easy.

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.data</groupId>
	<artifactId>spring-data-rest-hal-browser</artifactId>
</dependency>


```

HAL Browser auto configuration ( [http://localhost:8080/actuator/#http://localhost:8080/autoconfig] ) would show the details of all the beans which are auto configured and those which are not.

![Image](/images/spring-boot-auto-configuration-actuator-negative-matches.png "Negative Matches Spring Boot Auto Configuration")

![Image](/images/spring-boot-auto-configuration-actuator-positive-matches.png "Positive Matches Spring Boot Auto Configuration")