---
layout:  post
title:  Spring Framework Basics - What Is Inversion Of Control?
date:   2019-04-10 12:31:19
summary: Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concept of Inversion of Control.
categories:  SpringFramework
permalink:  /spring-framework-what-is-inversion-of-control
image: /images/spring-features.png
---

Developers starting with the Spring framework often get confused with terminology - Dependency, Dependency Injection and Inversion Of Control. In this article, we introduce you to the concept of Inversion of Control.
 
## You will learn
- What Is Inversion Of Control?
- What are good examples of inversion of control?
- How does Spring Framework implement Inversion of Control?
- Why Is Inversion of Control Important and what are its advantages?


### What Is Inversion Of Control?

#### Approach-1

Have a look at the following implementation of ```ComplexAlgorithmImpl```:

```java

	public class ComplexAlgorithmImpl {
		BubbleSortAlgorithm bubbleSortAlgorithm = new BubbleSortAlgorithm();
		//...
	}

``` 

One of the numerous things that ```ComplexAlgorithmImpl``` does is sorting. It creates an instance of ```BubbleSortAlgorithm``` directly within its code. 

#### Approach-2

Now look at this implementation for a change:

```java

	public interface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

	@Component
	public class ComplexAlgorithmImpl {
		@AutoWired
		private SortAlgorithm sortAlgorithm;
		//...
	}

```

```ComplexAlgorithmImpl``` here makes use of the ```SortAlgorithm``` interface. It also provides a constructor or a setter method, where you can set the ```SortAlgorithm``` instance into it. The user tells ```ComplexAlgorithmImpl``` which sort algorithm to make use of.

### Comparing Approach-1 and Approach-2

#### Approach-1

* ```ComplexAlgorithmImpl``` can only use ```BubbleSortAlgorithm```, it is **tightly coupled**. 
* If we need to change ```ComplexAlgorithmImpl``` to use quicksort, the relevant code needs to be changed entirely.
* The control over the ```BubbleSortAlgorithm``` dependency is with the ```ComplexAlgorithmImpl``` class. 


#### Approach-2

* ```ComplexAlgorithmImpl``` is open to using any implementation of ```SortAlgorithm```, it is **loosely coupled**.
* We only need to change the parameter we pass to the constructor or setter of ```ComplexAlgorithmImpl```.
*  The control over the ```SortAlgorithm``` dependency is with the user of ```ComplexAlgorithmImpl```. 

### Inversion Of Control At Play!

In Approach-1, ```ComplexAlgorithmImpl```  is tied to a specific sort algorithm. 

In Approach-2, it say's - give me any sort algorithm and I will work with it. 

This is **inversion of control**. 

Instead of creating its own dependencies, a class declares its dependencies. The control now shifts from the class to the user of the class to provide the dependency.

### Why Is Inversion of Control Important?

Once you wrote code with inversion of control, you can use frameworks like Spring to do Dependency Injection and wire up beans and dependencies.

### Advantages Of Inversion Of Control
* Inversion of control makes your code loosely coupled
* Inversion of control makes it easy for the programmer to write great unit tests

Do check out our video on the same topic:

[![image info](images/Capture-090-01.png)](https://www.youtube.com/watch?v=oLxsTnH_peI)

### Summary

In this article, we talked about inversion of control. Instead of a class creating an instance of its own dependency, it leaves it to the user of class to pass it in. Inversion of control makes code loosely coupled. 

