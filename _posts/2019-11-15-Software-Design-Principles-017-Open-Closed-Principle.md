---
layout:  post
title:  Software Design - Open Closed Principle - with examples
date:    2019-11-14 12:31:19
summary: Open Closed Principle is one of the SOLID Principles. You want your code to be easily extended. How do you achieve it with minimum fuss? Let's get started.
categories: SwDesign
permalink:  /software-design-open-closed-principle
---

Open Closed Principle is one of the SOLID Principles. You want your code to be extensible. How do you achieve it with minimum fuss? Let's get started.

### We learn
* What is the Open Closed Principle?
* How do you apply this principle in developing and designing software applications?

### Software Design Principles

This is the fifth article in a series of articles on important Software Design Principles:

- [1 - Introduction to Four Principles Of Simple Design](/four-principles-of-simple-design){:target='_blank'}
- [2 - Software Design - Separation Of Concerns - with examples](/software-design-seperation-of-concerns-with-examples){:target='_blank'}
- [3 - Object Oriented Software Design - Solid Principles - with examples](/software-design-solid-principles){:target='_blank'}
- [4 - Software Design - Single Responsibility Principle - with examples](/software-design-single-responsibility-principle){:target='_blank'}
- [5 - Software Design - Open Closed Principle - with examples](/software-design-open-closed-principle){:target='_blank'}
- [6 - Software Design - What is Dependency Inversion Principle?](/software-design-dependency-inversion-principle){:target='_blank'}

## Open Closed Principle

> Your classes should be open to extension, but closed to modification

What does this mean? Let's look at a simple example to understand what this means. 

### An example of Poor Design

Let's take a quick look at the calculateArea method in the Shape class.

```
class Shape {
	public double calculateArea(Shape[] shapes) {
		double area = 0;
		for(Shape shape:shapes) {
			if(shape instanceof Rectangle) {
				//Calculate Area of Rectange
			}
			else if(shape instanceof Circle) {
				//Calculate Area of Circle
			}
		}
		return area;
	}
}

class Rectangle extends Shape {
	
}

class Circle extends Shape {
	
	
}

```

Is there a problem with ```calculateArea()``` method?

What if we add a new shape? What if we remove a shape? What if we want to change the area algorithm for one of the shapes.

For all these modifications, ```calculateArea()``` method needs to change.

How can we make it better?

> Parts of the above code below pseudo code, for ease of explanation

```

abstract class Shape {

	
    abstract double area();
}

class Rectangle extends Shape {

	@Override
	double area() {
		// Area implementation for Rectangle
		return 0;
	}
	
}

class Circle extends Shape {

	@Override
	double area() {
		// Area implementation for Rectangle
		return 0;
	}
	
}

```  

A better solution would be to allow each of the shapes, to define their own ```area()``` method. We have created an abstract class called ```Shape``` (which could also have been an interface), and have each of the different shapes extend it. Each shape also overrides ```Shape```'s abstract ```area()``` method, to compute its specific area. 

The standalone ```calculateArea()``` method would now look like this:

```
abstract class Shape {
	
	
	public double calculateArea(Shape[] shapes)
	{
		double area = 0;
		for(Shape shape:shapes) {
			area += shape.area();
		}
		return area;
	}
	
    abstract double area();
}

```

```calculateArea()``` is now responsible just for looping around the shapes, and invoking the ```area()``` method of individual shapes. 

This is a very good example of the OCP. 

If you now want to add another shape, then you need to extend the ```Shape``` class, and override its ```area()``` method:. That's it.

Here, ```Shape``` class is open to extension, and ```calculateArea()``` is closed to modification.

Do check out our video on this:

[![image info](/images/Capture-017-02.png)](https://www.youtube.com/watch?v=pjDphh9OBVk)

### Summary

In this article, we focused on Open Closed Principle. 

Design should be open for extension, but closed for modification.

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

## Top 5 Recommended in28Minutes Courses
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/course/full-stack-application-with-spring-boot-and-react/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-Spring-Framework-Master-Class---Beginner-to-Expert.png "Spring Master Class - Beginner to Expert")](https://www.udemy.com/course/spring-tutorial-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-KubernetesCrashCourse.png "Kubernetes Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/kubernetes-crash-course-for-java-developers/?couponCode=OCTOBER-2019){:target="_blank"}
[![Image](/images/Course-DockerCrashCourseForJavaSpringBootDevelopers.png "Docker Crash Course for Java Spring Boot Developers")](https://www.udemy.com/course/docker-course-with-java-and-spring-boot-for-beginners/?couponCode=OCTOBER-2019){:target="_blank"}

> in28Minutes is helping 300,000 Learners across the world reach their learning goals. [Click here ](https://github.com/in28minutes/learn#aws-and-cloud-courses){:target="_blank"} for the complete catalogue of 30 Courses.


