---
layout:     post
title:      What is Spring Boot Auto Configuration?
date:       2023-02-17 12:31:19
summary:    Auto Configuration is the most important feature in Spring Boot. In this tutorial, we will learn important concepts about Auto Configuration with a couple of examples. 
categories:  SpringBoot
permalink:  /spring-boot-auto-configuration
image: /images/spring-framework-category.png
---

![Image](/images/Spring-Initializr-Web.png "Web, Actuator and Developer Tools")   

Through examples, this book will help you grasp Spring Boot Auto Configuration. We will create a few of basic rest services using a simple code sample. 

![Image](/images/spring-boot-autoconfigure-jar.png "Spring Boot Auto Configure Jar")


## You will learn
- Why do we need Auto Configuration?
- What is Auto Configuration?
- A few examples of Spring Boot Auto Configuration
- How is Auto Configuration implemented in Spring Boot?
- How to debug Auto Configuration?

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 17

## Complete Maven Project With the Code Examples
> Our Github repository has all the code examples - [https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files](https://github.com/in28minutes/in28minutes.github.io/tree/master/code-zip-files){:target="_blank"}

- All other examples related to Restful Web Services
    - Website-springbootrestservices-all-examples.zip

## Why do we need Spring Boot Auto Configuration?

Spring based applications have a lot of configuration. 

Spring MVC requires us to configure component scan, Dispatcher Servlet, a view resolver, and web jars (for serving static content), among other things.

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

A common configuration of a Dispatcher Servlet in a web application is shown in the code snippet below.

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
  
While using Hibernate/JPA, we must establish a data source, an entity management factory, and a transaction manager, among other things. 

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

The examples presented here are typical of any Spring framework installation or interface with other frameworks.

## Spring Boot : Can we think different?

Spring Boot brings in new thought process around this. 

> Can we bring more intelligence into this? When a spring mvc jar is added into an application, can we auto configure some beans automatically? 

- How about auto configuring a Data Source if Hibernate jar is on the class-path? 
- How about auto configuring a Dispatcher Servlet if Spring MVC jar is on the class-path?

There would be provisions to override the default auto configuration. 

> Spring Boot examines a) Frameworks in the CLASSPATH b) The application's current settings. Spring Boot offers the fundamental settings required to configure the application with these frameworks based on these. This is known as 'Auto Configuration'. 

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

Spring Boot Autoconfiguration detects that Spring MVC is on the classpath as soon as we include Spring Boot Starter Web as a dependency in our project. It configures dispatcherServlet, a default error page, and webjars automatically.

When you add Spring Boot Data JPA Starter, you'll see that Spring Boot Auto Configuration creates a datasource and an Entity Manager for you.

## Where is Spring Boot Auto Configuration implemented?

'spring-boot-autoconfigure.jar' contains all auto configuration logic. A single jar contains all auto configuration logic for mvc, data, jms, and other frameworks.  

![Image](/images/spring-boot-autoconfigure-jar.png "Spring Boot Auto Configure Jar")

/META-INF/spring.factories is another crucial file contained within spring-boot-autoconfigure.jar. This file contains a list of all the auto configuration classes that should be imported using the AutoConfigurationImportFilter and AutoConfigurationImportFilter keys, depending on the dependencies found on the classpath.

```properties
# Auto Configuration Import Listeners
org.springframework.boot.autoconfigure.AutoConfigurationImportListener=\
org.springframework.boot.autoconfigure.condition.ConditionEvaluationReportAutoConfigurationImportListener

# Auto Configuration Import Filters
org.springframework.boot.autoconfigure.AutoConfigurationImportFilter=\
org.springframework.boot.autoconfigure.condition.OnBeanCondition,\
org.springframework.boot.autoconfigure.condition.OnClassCondition,\
org.springframework.boot.autoconfigure.condition.OnWebApplicationCondition
```   

### Example Of Auto Configuration 

We will take a look at DataSourceAutoConfiguration.

Typically all Auto Configuration classes look at other classes available in the classpath. If specific classes are available in the classpath, then configuration for that functionality is enabled through auto configuration. Annotations like @ConditionalOnClass, @ConditionalOnMissingBean help in providing these features! 

`@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })` : This configuration is enabled only when these classes are available in the classpath.

```
@AutoConfiguration(
    before = {SqlInitializationAutoConfiguration.class}
)
@ConditionalOnClass({DataSource.class, EmbeddedDatabaseType.class})
@ConditionalOnMissingBean(
    type = {"io.r2dbc.spi.ConnectionFactory"}
)
@EnableConfigurationProperties({DataSourceProperties.class})
@Import({DataSourcePoolMetadataProvidersConfiguration.class})
public class DataSourceAutoConfiguration {
```

`@ConditionalOnMissingBean` : This bean is configured only if there is no other bean configured with the same name.

```java
@Bean
@ConditionalOnMissingBean
public DataSourceInitializer dataSourceInitializer() {
	return new DataSourceInitializer();
}
```

Embedded Database is configured only if there are no beans of type DataSource.class or XADataSource.class already configured.

```java
@Configuration(proxyBeanMethods = false)
@Conditional({EmbeddedDatabaseCondition.class})
@ConditionalOnMissingBean({DataSource.class, XADataSource.class})
@Import({EmbeddedDataSourceConfiguration.class})
protected static class EmbeddedDatabaseConfiguration {
    protected EmbeddedDatabaseConfiguration() {
    }
}

```

## Debugging Auto Configuration

There are two ways you can debug and find more information about auto configuration.

- Turning on debug logging
- Using Spring Boot Actuator

### Debug Logging

You can turn debug logging by adding a simple property value to application.properties. In the example below, we are turning on Debug level for all logging from org.springframework package (and sub packages).

```properties
logging.level.org.springframework=DEBUG
```

When you restart the application, you would see an auto configuration report printed in the log. Similar to what you see below, a report is produced including all the auto configuration classes. The report separates the positive matches from negative matches. It will show why a specific bean is auto configured and also why something is not auto configured. 

```log
=========================
CONDITIONS EVALUATION REPORT
=========================

Positive matches:
-----------------
DispatcherServletAutoConfiguration.DispatcherServletConfiguration matched:
 - @ConditionalOnClass found required class 'jakarta.servlet.ServletRegistration' (OnClassCondition)
 - Default DispatcherServlet did not find dispatcher servlet beans (DispatcherServletAutoConfiguration.DefaultDispatcherServletCondition)


Negative matches:
-----------------
ArtemisAutoConfiguration:
   Did not match:
      - @ConditionalOnClass did not find required class 'jakarta.jms.ConnectionFactory' (OnClassCondition)

AopAutoConfiguration.ClassProxyingConfiguration:
   Did not match:
      - @ConditionalOnMissingClass found unwanted class 'org.aspectj.weaver.Advice' (OnClassCondition)


```

### Spring Boot Actuator

Other way to debug auto configuration is to add spring boot actuator to your project. We will also add in HAL explorer to make things easy.

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.data</groupId>
	<artifactId>spring-data-rest-hal-explorer</artifactId>
</dependency>


```

HAL Explorer auto configuration [http://localhost:8080/actuator/conditions](http://localhost:8080/actuator/conditions){:target="_blank"} would show the details of all the beans which are auto configured and those which are not.

![Image](/images/spring-boot-auto-configuration-actuator-negative-matches.png "Negative Matches Spring Boot Auto Configuration")

![Image](/images/spring-boot-auto-configuration-actuator-positive-matches.png "Positive Matches Spring Boot Auto Configuration")

