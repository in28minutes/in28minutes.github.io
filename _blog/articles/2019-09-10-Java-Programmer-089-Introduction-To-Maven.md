---
title:  Java Tools and Frameworks - Introduction To Maven
date:    2019-09-04 12:31:19
summary: In this article, we experience a brief introduction to Maven, and will see how it helps in managing your project dependencies.
categories: SwJavaProgrammers
permalink:  /java-tools-and-frameworks-introduction-to-maven
image: /images/java-category.png
---

In this article, we get a brief introduction to Maven, and see how it helps in managing project dependencies.

## You will learn
- What is Maven?
- Why do we need Maven in the Java World?
- How does Maven do dependency management?
- How does Maven help you to build and deploy projects?



### Java Programmer Essentials

As we go towards microservices architectures, what should a Java Programmer learn? 

This is the fourth article in series of six articles on Java Programmer Essentials :
- [1 - Five Languages To Learn as a Java Programmer](/five-great-languages-to-learn-as-a-java-programmer){:target='_blank'}
- [2 - Five Great Frameworks To Try for Java Programmers](/five-frameworks-for-java-programmers){:target='_blank'}
- [3 - Five Tools To Learn as a Java Developer](/five-tools-to-learn-for-java-programmers){:target='_blank'}
- [4 - Java Tools and Frameworks : Introduction To Maven](/java-tools-and-frameworks-introduction-to-maven){:target='_blank'}
- [5 - What is an Embedded Server?](/java-programmer-essentials-what-is-an-embedded-server){:target='_blank'}
- [6 - What is an In Memory Database?](/java-programmer-essentials-what-is-an-in-memory-database){:target='_blank'}



### What Is Maven?

When we develop a Java software project, such as a microservice, the major dependencies we need are: 

* Spring MVC framework.
* Spring framework
* Hibernate

In addition to these 3 direct dependencies, we need to include their individual dependencies as well. So we need the dependencies of Spring MVC, Spring and Hibernate.  

Let's consider an example: REST API typically returns JSON responses. Spring MVC needs to convert Java Bean to JSON. It makes use of the Jackson framework to do the conversion. Jackson framework is a dependency of Spring MVC. 

### What if I manually download all the jars?

It is quite a task at project start-up, because you need to download a large number of JARs in the proper way, and set them up in the project folder. 

The flip side of doing this manually is that each time there is a change in version of a dependency, you need to manually download the new version of dependency and its dependencies again.

### Enter Maven

Maven provides **dependency management**. Any Maven project contains a file called pom.xml. In this file, we specify the dependencies that we need. This is done within the <dependency> tag. 

###### Example pom.xml

Within each <dependency> tag, we specify the dependency we need for an application to work. Maven reads this pom.xml file, downloads the dependencies and transitive dependencies (dependencies of dependencies) , and makes them available for your project. 

![image info](images/Capture-089-02.png)

### Dependency Management With Maven 

#### Identifying Artifacts

In order to describe each of the artifacts stored here, Maven uses two tags - <groupId> and <artifactId>. In addition to that, there is also a version that is maintained for each artifact. using these 3 identifiers, Maven can retrieve the correct version of the required dependency.

#### Managing Transitive Dependencies

When Maven downloads a particular artifact, it also downloads those dependencies of this artifact that are needed in the project. These are known as **transitive dependencies**. This reduces the amount of effort that is spent on enumerating all the artifacts. 

### Maven Does A Lot More!

The truth is in the Java world, Maven does a lot more than just dependency management. 

#### Building Deployable unit - Jars and Wars

Suppose we want to deploy an application to a different environment. We do not want to take the source code and build it again! 

We can create an application deployable unit JAR/WAR/EAR and use it in other environments. Maven enables us to create application deployable unit in a simple way. 

This entire sequence is called a **build** process, thereby making Maven a **build tool** as well. 

### Summary

In this article, we had an introduction on Maven. Maven is primarily used as a dependency management tool. In a large Java project, managing application dependencies manually is a daunting task. Maven steps up by automating the dependency identification and download process. Maven is also used in the Java world as an efficient build tool.

Do check out our video on the same topic:

[![image info](images/Capture-089-01.png)](https://www.youtube.com/watch?v=EjymtpicGtg)
