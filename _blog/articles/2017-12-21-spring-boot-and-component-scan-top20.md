---
layout:     post
title:      Spring, Spring Boot and Component Scan
date:       2022-07-05 12:31:19
summary:    Understand the most important concept in Spring Framework - Component Scan. Let's see how you can configure a Component Scan in Spring and Spring Boot. We will also look at how you can debug problems related to Component Scan.
categories:  SpringBoot
permalink:  /spring-boot-and-component-scan
image: /images/spring-features.png
---

This guide will help you understand the most important concept in Spring - Component Scan. Spring Boot does some magic around Component Scan. Let's understand that in this article.

![Image](/images/SpringBootApplicationConfiguration-ProjectStructure.png "Spring Boot Application Configuration Project Structure")
 
## You will learn
- What is Component Scan?
- Why is Component Scan important?
- Which packages does Spring Boot do a Component Scan automatically?
- How do you define Component Scan with Spring Boot?
- How do you resolve problems involving Component Scan?



### @ComponentScan

If you understand component scan, you understand Spring.


Spring is a dependency injection framework. It is all about beans and wiring in dependencies. 

The first step of defining Spring Beans is by adding the right annotation - @Component or @Service or @Repository. 

However, Spring does not know about the bean unless it knows where to search for it. 

> This part of "telling Spring where to search" is called a Component Scan. 

You define the packages that have to be scanned.

Once you define a Component Scan for a package, Spring would search the package and all its sub packages for components/beans.

Defining a Component Scan
- If you are using Spring Boot, check configuration in Approach 1.
- If you are doing a JSP/Servlet or a Spring MVC application without using Spring Boot use Approach 2.



## Approach 1 : Component Scan in a Spring Boot Project

Executive Summary
- If your other packages hierarchies are below your main app with the @SpringBootApplication annotation, you're covered by implicit components scan.
- If there are beans/components in other packages which are not sub packages of the main package, you should manually add them as @ComponentScan

####### Detailed Example

Consider the class below:

```
package com.in28minutes.springboot.basics.springbootin10steps;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringbootIn10StepsApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = 
				SpringApplication.run(SpringbootIn10StepsApplication.class, args);
		
		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}
}
```

```@SpringBootApplication``` is defined on ```SpringbootIn10StepsApplication class``` which is package ```com.in28minutes.springboot.basics.springbootin10steps.```

```@SpringBootApplication``` defines an automatic component scan on package ```com.in28minutes.springboot.basics.springbootin10steps```.

You are fine if all your components are defined in the above package or a sub-package of it.

However, let's say one of the components is defined in a package ```com.in28minutes.springboot.somethingelse```

In this case, you would need add the new package into component scan.

Two Options
-  Define @ComponentScan(“com.in28minutes.springboot”) 
    - This would scan the entire parent tree of com.in28minutes.springboot.
- Or Define two specific Component Scans by using an array. 
    - @ComponentScan({"com.in28minutes.springboot.basics.springbootin10steps","com.in28minutes.springboot.somethingelse"})

Option 1
```
@ComponentScan(“com.in28minutes.springboot”)
@SpringBootApplication
public class SpringbootIn10StepsApplication {
```

Option 2
```
@ComponentScan({"com.in28minutes.springboot.basics.springbootin10steps","com.in28minutes.springboot.somethingelse"})
@SpringBootApplication
public class SpringbootIn10StepsApplication {
```

### Approach 2: Non Spring Boot Project

In a non Spring Boot Project, we would typically define the component scan explicitly in an XML application context or a Java Application Context.

####### Java Application Context

Option 1
```
@ComponentScan(“com.in28minutes)
@Configuration
public class SpringConfiguration {
```

Option 2
```
@ComponentScan({"com.in28minutes.package1","com.in28minutes.package2"})
@Configuration
public class SpringConfiguration {
```

####### XML Application Context

```
<context:component-scan base-package="com.in28minutes" />
```

or Specific Multiple Packages

```
<context:component-scan base-package="com.in28minutes.package1, com.in28minutes.package2" />
```

### Errors related to Component Scan

#### URL Not working

Server starts up fine but
- My URL is not working
- My login url is not working
- My todo url is not working
```
WARNING: No mapping found for HTTP request with URI [/spring-mvc/login] in DispatcherServlet with name 'dispatcher'
WARNING: No mapping found for HTTP request with URI [/login] in DispatcherServlet with name 'dispatcher'
WARNING: No mapping found for HTTP request with URI [/list-todos] in DispatcherServlet with name 'dispatcher'

```

#### No qualifying bean of type found
```
No qualifying bean of type [com.in28minutes.springboot.jpa.UserRepository] found for dependency [com.in28minutes.springboot.jpa.UserRepository]: expected at least 1 bean which qualifies as autowire candidate for this dependency. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}

```
> Same root cause for both above problems - The component is not being picked up.

Three possible things you would need to look at
a. You have not added the right annotation - @Controller, @Repository or @Controller
b. You have not added a component scan. 
c. The package of your component is not defined in component scan.

You have two options
1) Add the annotation or component scan
2) Move the component to a package already under component scan

#### What is the difference between @Component and @ComponentScan? 

@Component and @ComponentScan are for different purposes.
- @Component indicates that a class might be a candidate for creating a bean. Its like putting a hand up.
- @ComponentScan is searching packages for Components. Trying to find out who all put their hands up.

