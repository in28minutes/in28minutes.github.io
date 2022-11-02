---
layout:  post
title:  Software Design - Coupling - with examples
date:    2019-04-16 12:31:19
summary: Software architects and programmers love low coupling. What is coupling? Why is coupling important? Let's get started.
categories: SwDesign
permalink:  /software-design-coupling-with-examples
image: /images/design-category.png
---

Software architects and programmers love low coupling. What is coupling? Why is coupling important? Let's get started.

### You will learn

* What is coupling?
* What are common examples of coupling in software?
* How can we reduce the amount of coupling between classes, between components, and the like?



### Software Design

This is the fifth article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### Example of Couping

Let's start with an example.

Let's say a friend of mine is developing a Java component, in the form of a JAR file, for me to use. However, there is an implicit constraint imposed here - I need to use Java (or a JVM Based language) to use the utility JAR file! In other words, developing the component as a Java JAR has **coupled** me to using Java as well. To break free, I need to **decouple**. 

#### How to Decouple? An Example:

Instead of providing me with a JAR, I could ask my friend to create a web service interface for me to access the same functionality. The concept would look something like this:

![image info](/images/Capture-06-01.png)

The web service is created around the JAR, and can be accessed from a Java, a PHP, or a .NET application. We can use any kind of application to invoke the web service. 

This implies we have effectively decoupled from the underlying technology of the component. We are no longer affected by the fact that the component was developed in Java.

### Another Example for Low Coupling - Spring Framework

Spring Framework has a highly modular structure: 

![image info](/images/Capture-06-03.png)

Suppose we want to use a specific module from this framework; for instance, the Spring JDBC module. 

What would happen if Spring tells you that you can only use Spring JDBC if you also use the Beans and Context modules? 

You would probably not use it at all, because it introduces additional dependencies such as configuration etc. 

Spring does get this right; it does not force you to use Beans or Context along with JDBC. In other words, Spring modules are not coupled with the other ones.

### Class-level coupling - The ```Order``` class

Let's now go one level deeper. Let's look at Coupling at the level of classes.

Let's look at a simple shopping cart example:

```java

	class ShoppingCartEntry {
		public float price;
		public int quantity;
	}

	class ShoppingCart {
		public ShoppingCartEntry[] items;
	}

	class Order {
		private ShoppingCart cart;
		private float salesTax;

		public Order(ShoppingCart cart, float salesTax) {
			this.cart = cart;
			this.salesTax = salexTax;
		}

		public float orderTotalPrice() {
			float cartTotalPrice = 0;

			for(int i=0; i<cart.items.length; i++) {
				cartTotalPrice += cart.items[i].price * cart.items[i].quantity;
			}
			cartTotalPrice += cartTotalPrice * salesTax;
			return cartTotalPrice;
		}
	}

```  

You would observe that ```orderTotalPrice()``` knows the internal details of the ```ShoppingCart``` and ```ShoppingCartEntry``` classes:

* It accesses the ```items``` field of ```ShoppingCart``` directly
* It accesses the ```price``` and ```quantity``` fields of ```ShoppingCartEntry```, also directly

Scenario : Try and imagine a situation where we change the name of the ```price``` field of ```ShoppingCartEntry```, to something else. 

Approach : Code within ```orderTotalPrice()``` would also need to change. 

If you change the type of the ```items``` array (possibly to a list) within ```ShoppingCart```, that would also lead to a change within ```orderTotalPrice()```.  

```Order``` class is **tightly coupled** to the ```ShoppingCart``` and ```ShoppingCartEntry``` classes. 

How do we decouple them?

#### Decoupling the ```Order``` class Example

Here is one way of achieving this:

```java

	class ShoppingCartEntry {
		float price;
		int quantity;

		public float getTotalPrice() {
			return price*quantity;
		}
	}

	class CartContents {
		ShoppingCartEntry[] items;

		public float getTotalPrice() {
			float totalPrice = 0;

			for(ShoppingCartEntry item:items) {
				totalPrice += item.getTotalPrice();
			}
			return totalPrice;
		}
	}

	class Order {
		CartContents cart;
		float salesTax;

		public Order(CartContents cart, float salesTax) {
			this.cart = cart;
			this.salesTax = salesTax;
		}

		public float totalPrice() {
			return cart.getTotalPrice * (1.0f + salesTax);
		}
	}

```

Note the following points:

* Instead of making the ```price``` and ```quantity``` fields accessible, ```ShoppingCartEntry``` now makes a method named ```getTotalPrice()``` available to ```CartContents```.
* The ```CartContents``` class does something very similar, by also providing a ```getTotalPrice()``` method for ```Order``` to use.
* The ```Order``` class now only invokes the ```getTotalPrice()``` methhod exposed by ```CartContents```, to compute the total cart value in ```totalPrice()```.

Now,

* If the ```price``` field in ```ShoppingCartEntry``` has its name changed, only ```getTotalPrice()``` within the same class would be affected
* If the type of ```items``` within ```CartContents``` is changed from an array to a list, again only the ```CartContents``` ```getTotalPrice()``` method needs to be altered.
* The code within ```Order``` is not affected by either of these changes at all.

We have now completely decoupled ```Order``` from both ```ShoppingCartEntry``` and ```CartContents```.

### Another Coupling Example with Spring Framework

Consider the following body of code:

```java

	public class BinarySearchImpl {
		public int binarySearch(int[] numbers, int numberToSearchFor) {
			BubbleSortAlgorithm bubbleSortAlgorthm = new BubbleSortAlgorithm();
			int[] sortedNumbers = bubbleSortAlgorithm.sort(numbers);

			//...
		}
	}

```   

You would notice that the ```BinarySearchImpl``` class is directly dependent on the ```BubbleSortAlgorithm``` class. If we need to change the actual sort algorithm, to use quicksort for instance, then a lot of code within ```BinarySearchImpl``` needs to change.

We can solve this issue by making use of **interfaces**. Here is how our modified code would look like:

```java

	public intrface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

```

If you use the Spring framework, you could use the ```@Autowired``` annotation with the ```BinarySearchImpl``` class, to automatically fetch an implementation of an available sort algorithm:

```java

	@Component
	public class BinarySearchImpl {
		@Autowired
		private SortAlgorithm sortAlgorithm;

		public BinarySearchImpl(SortAlgorithm sortAlgorithm) {
			super();
			this.sortAlgorithm = sortAlgorithm;
		}

		public int[] binarySearch(int[] numbers, int numberToSearchFor) {
			int[] sortedNumbers = sortAlgorithm.sort(numbers);
			//...
		}
	}

```

What we have achieved here is reduce the coupling between ```BinarySeacrhImpl``` and a specific sort algorithm.

### A Practical Viewpoint of Coupling

A good way of thinking about coupling, is if you change the inner details of a class or a component, do you need to make changes elsewhere as well? 

Such dependencies are not desirable. If you intend to reuse code from one place to another, the related dependencies should be as few as possible.

Coupling can occur at multiple levels in an application:
* Class-level
* API-level
* Component-level

Let's look at an example of coupling at component level:

### Component-Level Coupling

Consider the following organization of an enterprise web application:

![image info](/images/Capture-05-02.png)

If the Security component were coupled with the Logging component, then wherever we need Security, we would also need to access Logging. That's not good.

### Coupling With Layers

Let's look at an example of a layered web application:

![image info](/images/Capture-06-04.png)

It is organized into these three layers. Also assume that from the Web layer Controller, I need to call multiple methods from the Business layer. Let's say five different methods need to be called for a single such requirement. This is a clear case of coupling. 

A very effective way to avoid such layer-to-layer coupling is to use the **Facade Pattern**. You can create a Facade component on top of the Business layer, that manages calls to these five methods. The web layer can then make do with calling a  single method from the Facade component.

*All in all, decoupling makes the code more reusable and testable.*

Do check out our video on this:

[![image info](/images/Capture-06-05.png)](https://www.youtube.com/watch?v=f32UZn8fQiw)

### Summary

In this article, we looked at the concept of coupling at multiple levels: at the class, the component, the API and the layer level. We also looked at how to get around this factor through decoupling, at each of these levels. We identified the key question to ask about coupling:  "If something changes at a particular place, would other things need to change as well? And If I use something, would I be forced to use something else as well?"



