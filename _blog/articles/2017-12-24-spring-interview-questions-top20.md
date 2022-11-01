---
layout:     post
title:      Spring Interview Questions
date:       2022-07-04 12:31:19
summary:    Let's take a quick look at some of the important Spring concepts with examples to get ready for a Spring Interview. We will look at defining beans with Spring (@Component, @Service, etc), auto wiring them (@Autowired), @ComponentScan and understand the basics of Application Context and Bean Factory. We will also look a few important Spring MVC interview questions.
categories:  SpringFramework
permalink:  /spring-interview-questions
image: /images/spring-framework-category.png
---

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

This guide will help you understand the most important concepts in Spring in preparation for a Spring Interview.

![Image](/images/SpringBootApplicationConfiguration-ProjectStructure.png "Spring Boot Application Configuration Project Structure")

 
### Q :  What is the need for a Component Scan?

> If you understand component scan, you understand Spring.

The first step of defining Spring Beans is by adding the right annotation - @Component or @Service or @Repository. 

However, Spring does not know about the bean unless it knows where to search for it. This part of "telling Spring where to search" is called a Component Scan. You define the packages that have to be scanned.

Once you define a Component Scan for a package, Spring would search the package and all its sub packages for components.

### Q :  How do you define a Component Scan with Spring Boot?

Consider the class below:

```
package com.in28minutes.springboot.basics.springbootin10steps;

@SpringBootApplication
public class SpringbootIn10StepsApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = 
				SpringApplication.run(SpringbootIn10StepsApplication.class, args);
```

```@SpringBootApplication``` is defined on ```SpringbootIn10StepsApplication class``` which is package ```com.in28minutes.springboot.basics.springbootin10steps.```

```@SpringBootApplication``` defines an automatic component scan on package ```com.in28minutes.springboot.basics.springbootin10steps```.

You are fine if all your components are defined in the above package or a sub-package.

However, let's say one of the components is defined in a package ```com.in28minutes.springboot.somethingelse```

In this case, you would need add the new package into component scan.

Two Options
-  Define @ComponentScan(“com.in28minutes.springboot”) - This would scan the entire parent tree of com.in28minutes.springboot.
- Or Define two specific Component Scans by using an array. 
   - @ComponentScan({"com.in28minutes.springboot.basics.springbootin10steps","com.in28minutes.springboot.somethingelse"})

### Q :  What is the difference between @Component and @ComponentScan? 

@Component and @ComponentScan are for different purposes.
- @Component indicates that a class might be a candidate for creating a bean. Its like putting a hand up.
- @ComponentScan is searching packages for Components. Trying to find out who all put their hands up.


### Q :  What is the use of an @Bean annotation?
Within a Spring Configuration Class , @Bean is used to define beans with custom configuration. You define the beans to be created!

### Q :  What is the difference between @Bean and @Component?

Here's a quick fire answer
- @Bean is used in Spring Configuration Files and Classes. It is used to directly instantiate or configure spring beans.
- @Component is used with everything that you want Spring to manage. When Spring sees @Component, it creates a bean for you!

### Q :  What is the difference between @Component, @Service and @Repository annotations?

At the core, all of these define spring beans. However, you can further classify them based on the layer you are using them. 
- @Component - Generic Component
- @Repository - encapsulating storage, retrieval, and search behavior typically from a relational database
- @Service - Business Service Facade
- @Controller - Controller in MVC pattern

In addition, these can be used at later point to add additional behaviour using AOP, for example. 
- For example, in case of @Repository, Spring automatically wires in JDBC Exception translation features.

By using a specific annotation, you are giving more information to the framework about your intentions.

### Q :  Can we use @Component annotation instead of @Service for Business Services?

Heres an extract from spring documentation. Since we were creating a business layer service, we used @Service. 

> "@Component serves as a generic stereotype for any Spring-managed component; whereas, @Repository, @Service, and @Controller serve as specializations of @Component for more specific use cases (e.g., in the persistence, service, and presentation layers, respectively). What this means is that you can annotate your component classes with @Component, but by annotating them with @Repository, @Service, or @Controller instead, your classes are more properly suited for processing by tools or associating with aspects. For example, these stereotype annotations make ideal targets for pointcuts. Of course, it is also possible that @Repository, @Service, and @Controller may carry additional semantics in future releases of the Spring Framework. Thus, if you are making a decision between using @Component or @Service for your service layer, @Service is clearly the better choice. Similarly, as stated above, @Repository is already supported as a marker for automatic exception translation in your persistence layer."

### Q :  What is the difference between web.xml and the Spring Context - servlet.xml?

Short Answer:
- web.xml - Java EE Web application Standard. Meta data and configuration of any Java EE compliant web application is stored in web.xml.
- todo-servlet.xml - Spring Configuration file. Specific to Spring Framework.

### Q :  Should we use XML or Annotation based wiring?

Which is better depends on a) context b) preference of the team.

If the configuration is specific to a bean, that is part of the current project code base - for example @Service, @Component, @Autowired - I prefer annotations.

However, when it comes to some application related configuration or a common configuration example @ComponentScan, I do not really have a preference. I would leave it to the team. However, I would definitely want the entire team to discuss and agree what they prefer. 

### Q :  Can we do autowiring with Non Setter and Non Constructor Methods?
Yes you can. 

@Autowired annotation can be used with constructor, setter method or just any other method. Whenever Spring finds @Autowired annotation it will try to find beans matching to method parameters and will invoke that method. If multiple methods (setter or non-setter) have @Autowiredannotation, all will be invoked by Spring after bean instantiation.

Whenever you use an @Autowired on a method in the bean, it will be called after bean instantiation. So, this method would be called and Spring would auto wire the matching objects from the Spring Context.

Here's a recommended reading:
- http://stackoverflow.com/questions/30188262/spring-autowired-for-setter-methods-vs-non-setter-methods

### Q :  Where should we use Checked Exceptions?

I've a simple philosophy!

If you can do something about an Exception other than showing an error page to the user, then consider Checked Exceptions. You want the consumer of the method to do something about that exception!

In all other scenarios where there is nothing a programmer can do - other than showing an error page - use Unchecked exceptions. 

I love keeping exception handling code to a bare minimum!

That's what Spring enables by converting most Checked exceptions into Runtime (also called Unchecked) exceptions.

### Q :  What is the difference between Cross Cutting Concerns and AOP?

A quick fire answer
- Cross Cutting Concerns are features or functionality that you would need in multiple layers - logging, performance management, security etc.
- AOP is one of the preferred approaches to implement Cross Cutting Concerns.

### Q :  What is difference between IOC and Application Context?

IOC is a concept - Inversion of Control. Instead of the programmer injecting dependencies, the framework takes the responsibility of auto wiring.

ApplicationContext is the Spring implementation of IOC.

Bean Factory is the basic version of IOC Container. 

Application Context adds in all the features that are typically needed by enterprise applications. 

### Q :  What is the difference between classPathXmlApplicationContext and annotationConfigApplicationContext ?

- classPathXmlApplicationContext > You want to load an application context using an Spring Config XML present in the class path.
- annotationConfigApplicationContext > You want to load an application context using a Java Config class.


### Q :  When @Around aspect is introduced the value returned by@AfterReturning is lost. Why is this happening?
The around method should return an Object - value returned by joinpoint.proceed(). 

```
@Around("com.in28minutes.spring.aop.springaop.aspect.CommonJoinPointConfig.trackTimeAnnotation()")
public Object around(ProceedingJoinPoint joinPoint) throws Throwable{
    long startTime = System.currentTimeMillis();
 
    Object retVal = joinPoint.proceed();
 
    long timeTaken = System.currentTimeMillis() - startTime;
    logger.info("Time taken by {} is equal to {}",joinPoint, timeTaken);
 
    return retVal;
}
```
### Q :  How do you decide which autowiring type to use when there are multiple matching beans - @Primary or @Qualifier?

If there is a default bean (a bean you prefer over all others) that you want to use most of the times, then go for @Primary and use @Qualifier for non-default scenarios.

If all of the beans have same priority, we would go with @Qualifier always.

If you want to select a bean at runtime, thats business logic - Not auto wiring.

You would need to create a separate class for Selector which has both the sorting algorithms auto wired. It should have the business logic to choose the appropriate algorithm.

### Q :  What are the New Features in Spring Framework 5.0?

I’ve recently wrote a book on Mastering Spring 5.0.

Important features in Spring 5.0 are Functional Web Framework, Kotlin and Reactive Programming support. But none of these are mainstream yet. 

https://github.com/spring-projects/spring-framework/wiki/What%27s-New-in-the-Spring-Framework#whats-new-in-spring-framework-5x 


### Q :  Compare Application Context vs IOC Container vs Web Container vs EJB Container

Do we need a Web Container to run a Spring Boot Application?

Basically spring runs anywhere where we have a JVM because that JVM will have capability to run some sort of a container or capability to run an application. Difference would be that the mechanism to load application context would be different based on where it runs. e.g. 2  high level categories - ApplicationContext for Web and Applicationcontext for standalone and again in those 2 categories we will choose "how" and "from where" we want to load that metadata for those applicationContext. 

Web Container & EJB Containers are part of the application/web servers - Tomcat, Websphere, Weblogic. They run what ever application is given to them. Java EE defines a contract for web applications (web.xml etc etc) and these are the implementations of that contract.

Spring Container is part of the application you are building - the jar or the war. It can run inside a web container, EJB container or even without them :) You can launch it as a java application or you can even run it in an embedded server.

### Q :  How do we inject different bean depending on the configuration in application.properties?

Consider the example

```
interface GreetingService {
public String sayHello();
}
```

Two components
```
@Component(value="real")
class RealGreetingService implements GreetingService {
	public String sayHello() {
		return "I'm real";
	}
}

 
@Component(value="mock")
class MockGreetingService implements GreetingService {
	public String sayHello() {
		return "I'm mock";
	}
}
```

application.properties
```
application.greeting: real 
```

Adding @Resource with the name of the property

```
@RestController
public class WelcomeController {
 
@Resource(name="${application.greeting}")
private GreeterService service1;
```

### Q :  What is the minimum baseline Java Version for Spring Boot 2 and Spring 5?

Spring 5.0 and Spring Boot 2.0 requires Java 8 or later. Java 6 and 7 are no longer supported.

Recommended Reading 
- https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0.0-M1-Release-Notes

### Q :  What is the difference between @Controller and @RestController?

@RestController = @Controller + @ResponseBody

The response from the @RestController are directly returned as a response after conversion to JSON or XML.

In Summary
- @Controller : Uses a view resolver to find the view. You are returning either the View, View Name or Model and View.
- @RestController : You are returning a bean. The bean would be converted to a JSON using a Jackson message converter.


```
@Controller
@ResponseBody
public class MyController { }
 
@RestController
public class MyRestController { }
```

### Q :  Why do we use  @ResponseBody sometimes and ResponseEntity<T> some other times?

Quick Answer - You use ResponseEntity when you want to customize the Response Status. In all other situations, we use @ResponseBody.

###### Example 1
@GetMapping(value="/resource")
@ResponseBody
public Resource sayHello() { 
   return resource;
}

###### Example 2
@PostMapping(value="/resource")
public ResponseEntity<String> createResource() {
    ....
    ....
    return ResponseEntity.created(resource).build();
}

There are a variety of HTTP Response Status Codes that you can return with your response.

- 200 - SUCCESS
- 201 - CREATED
- 404 - RESOURCE NOT FOUND
- 400 - BAD REQUEST
- 401 - UNAUTHORIZED
- 500 - SERVER ERROR

With @ResponseBody the only response type that goes out is SUCCESS (Example 1). (or 500 if a server error happens)

Let's say you are creating a resource. You would want to send a status of 201 CREATED. In this case, we use ResponseEntity as in Example 2.

### Q :  What is the difference between Filters, Listeners and Interceptors?

Conceptually similar. Servlet filters can intercept only HTTPServlets. Listeners can intercept a few specific events. How do you intercept events which are neither of the above.

Both filters and interceptors do the same things - They intercept something and do something before/after an action is performed.

Java EE uses the term filter (in web.xml) and Spring calls them Interceptors.

Thats where AOP comes in. You can intercept calls to any object with AOP. 

More Reading
- http://www.programering.com/a/MzM3EDNwATY.html

### Q :  What is the difference between ModelMap and ModelAndView?

Model is an interface while ModelMap is a class.

ModelAndView is just a container for both a ModelMap and a View object. It allows a controller to return both as a single value.

I usually like ModelAndView to return the model and view from a controller. However, there is an option where you can just add values to ModelMap and return viewname from the controller method. 

More Reading
- http://stackoverflow.com/questions/16951609/when-to-use-modelandview-vs-model-in-spring 

### Q :  What is the difference between model.put() and model.addAttribute()? 

Code for addAttribute method is listed below. It does an additional null check before calling a put. Doesn't really matter which one you use. 

I like addAttribute because you are separated from underlying data structure (```put``` implies you are using a hashmap).

/**
     * Add the supplied attribute under the supplied name.
     * @param attributeName the name of the model attribute (never <code>null</code>)
     * @param attributeValue the model attribute value (can be <code>null</code>)
     */
    public ModelMap addAttribute(String attributeName, Object attributeValue) {
        Assert.notNull(attributeName, "Model attribute name must not be null");
        put(attributeName, attributeValue);
        return this;
    }

One more difference is that addAttribute returns the ModelMap back. So, you can chain calls.

model.addAttribute("attribute1","value1").addAttribute("attribute2","value2");

### Q :  What is Form Binding?
We want to take values from screen and store them to the database. The value on the HTML form needs to be transferred to the bean on the Controller. 

If you use the Spring MVC form tags, Spring MVC automatically takes care of the binding the values in the HTML form to the bean.
- I would recommend you to do a View Source on the browser and see the html that is generated with the form tags

You need a form to bind the value to a bean. 

You can look up the documentation for Spring MVC Form Tags for more details.

I would recommend you to start looking at each of the things thats happening in the browser. See the html that is generated (view source), look at what are the values in the request when you click the submit button on the screen (Look at the network tab : http://code.tutsplus.com/articles/chrome-dev-tools-networking-and-the-console--net-28167)

Couple of Sources which might be useful for you
- Spring MVC Documentation : http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc
- Spring MVC Code : https://github.com/spring-projects/spring-framework/tree/master/spring-webmvc/src

### Q :  Why do we use Hibernate Validator?

Hibernate Validator is not related to Database. It is a validation framework.

Hibernate Validator 5.x is the reference implementation Bean Validation 1.1! 

Actually, you can use any implementation of Bean Validation API.  However, there are really no other popular options.

As you can see at http://beanvalidation.org/2.0/, Hibernate Validator is the only one which is certified!

### Q :  Are Model objects specific to a request?

Yes. They are specific to a request.

Model objects cannot be shared across requests. So, 2 different requests mean 2 different model objects.

If you look at the jsp for a todo page, it shares the responsibility of creating a new todo and modifying an existing todo. And the todo object is binded to the form. 

To display todo page for new todo, we need a model with no values. That's the first model object that's created.
- This is used only for the display of new todo page. 

Once the page is displayed, the first model does not exist anymore. 

When user fills in the values and clicks submit, the values in the form gets bound to a new model object - the second one.

### Q :  How to use own CSS with Spring MVC?

Spring Configuration XML
<mvc:resources mapping="/resources/**" location="/WEB-INF/resources/" />

JSP
<link href="resources/css/main.css" rel="stylesheet">

### Q :  Where should we place our static (css, js, html) resources in a Spring MVC application?

For the Java script, I would have separate Java script files and include them into your jsp.

Here's a small discussion where static files should be located:
- https://stackoverflow.com/questions/7836930/where-do-css-and-javascript-files-go-in-a-maven-web-app-project

### Q :  How to add a custom login page in Spring Security?

Complete example down here 
- http://docs.spring.io/spring-security/site/docs/current/guides/html5/form-javaconfig.html

Other Recommended Reading
- https://docs.spring.io/spring-security/site/docs/3.2.0.RELEASE/guides/form.html
- http://www.concretepage.com/spring-4/spring-4-mvc-security-custom-login-form-and-logout-example-with-csrf-protection-using-annotation-and-xml-configuration

### Q :  Why is request method POST recommended compared to GET for sensitive data?

Following are the steps that happen when you interact with a web page
- Browser : You enter the details
- Browser : Creates a POST request where details are put into the request (and encrypted if you are using https)
- Routers and Network : The POST request is sent through multiple routers before it reaches the destination

In the case of a get request and post request, in steps a and b you can see the details on the browser. The real change is in step c. 

> Important Question to ask is "What is going across the network?"

In the case of GET request, your details are part of url and all routers can see those details. However, in the case of POST, the details are sent as part of the body of the request and hence more safe.

### Q :  We use ${todo.done} in JSP even though the name of the field in Todo.java is isDone. Shouldn't we be using ${todo.isDone}?

Isn't it tricky? Welcome to the fun of Java Beans. 

You can try renaming the variable to done or what ever you want. The important thing is what is the name of getters and setters.

Java Beans work based on the names of your getters and setters. The setter is named setDone. So, we use ${todo.done}.

I would recommend playing with getters and setters to understand this further.

```
public boolean isDone() {
    return isDone;
}

public void setDone(boolean isDone) {
    this.isDone = isDone;
}
```

### Q :  Can I have multiple parameters with the same name in a request?

Let's take an example

http://localhost:8080/login?name=Ranga&name=Ravi&name=Sathish

You can accept all values using an array in the controller method.

Here's a snippet!

```
public String method(@RequestParam(value="name") String[] names){
 
    //if length of names is not 1, throw an error!
 
    //Continue processing.
 
}
```

### Q :  What is the benefit of using view resolver? Will it not take more time to process a request?

It all boils down to good design!

Do one thing very well. 

View Resolver maps a logical view name to a physical view (JSP).

As far as Java is concerned, more method calls does not mean bad performance.

### Q :  What is the difference between put and patch request methods?
- PUT : When you update the entire resource - when you want to update all/most of the fields of a resource.
- PATCH: When you want to update specific details of the resource. All other details remain unchanged. 


## Java and Spring Interview Guides

[![Image](https://www.springboottutorial.com/images/Course-Spring-Framework-Interview-Guide-200-Questions-Answers.png "Spring Framework Interview Guide - 200+ Questions & Answers")](https://links.in28minutes.com/in28minutes-spring-interview)

[![Image](https://www.springboottutorial.com/images/Course-Java-Interview-Guide-200-Interview-Questions-and-Answers.png "Java Interview Guide : 200+ Interview Questions and Answers")](https://links.in28minutes.com/in28minutes-java-interview)
