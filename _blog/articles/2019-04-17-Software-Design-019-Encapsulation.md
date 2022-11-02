---
layout:  post
title:  Software Design - Encapsulation - with examples
date:    2019-04-16 12:31:19
summary: Encapsulation is one of the important goals of Software Design. What is Encapsulation? Why is it important? Let's get started.
categories: SwDesign
permalink:  /software-design-encapsulation-with-examples
image: /images/design-category.png
---

Encapsulation is one of the important goals of Software Design. What is Encapsulation? Why is it important? Let's get started.

### You will learn
- What does Encapsulation mean? 
- What are the advantages of building encapsulated software?
- Is encapsulation restricted to Object Oriented Design? 
- How can encapsulation be followed in other programming approaches? 

We initially start with encapsulation at a very basic level - that of a class. We then gradually shift focus to other levels, such as components and web services.



### Software Design

This is the fourth article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### Encapsulation At The Basic Level (Level-1)

Let's look at two implementations of a ```CricketScorer``` ```class```:

```java

	public class CricketScorer {
		private int score;

		public int getScore() {
			return score;
		}
		
		public void setScore(int score) {
			this.score = score;
		}
	}

```

If you're not familiar the sport of cricket, you could imagine a ```FootballScorer``` class instead. Here, ```CricketScorer``` provides its users with two methods, ```setScore()``` and ```getScore()```. These form the class interface. 

Let's next make use of this class:

```java

	public static void main(String[] args) {
		CrickerScorer scorer = new CricketScorer();
		int score = scorer.getScore();
		scorer.setScore(score + 4);
	}

```

The user here gets to call both ```getScore()``` and ```setScore()```. Let's say a boundary is scored in the cricket match, which should result in the score getting incremented by ```4```. The user is responsible for retrieving the current the current score, incrementing it by ```4```, and then setting it. 

There are a few important things to note here:

* The ```score``` is declared ```private```, which means users of ```CricketScorer``` cannot access it directly. We are hiding the implementation of ```score`` from the class users. This is what **encapsulation** is all about.
* The various Java language keywords such as ```private``` and ```protected``` are the most basic level of implementing encapsulation.

### Method-Level Encapsulation (Level-2)

To avoid putting the onus of getting and setting the score on the user, we could define a method such as:

```java

	public void four() {
		score += 4;
	}

	public static void main(String[] args) {
		CrickerScorer scorer = new CricketScorer();
		scorer.four();
	}

```
All the user does is call this ```four()``` method, and no longer needs to explicitly manipulate the stored score. Here we have introduced a ```four()``` method to encapsulate the process of getting and setting the score. This is the next level of encapsulation, at the logical level. The user now no longer needs to know how to manipulate the score.

### Abstraction And Encapsulation

Abstraction is all about hiding complexity. How do you hide that complexity? By using Encapsulation. Apart from the two levels we saw just now, there are more ways to go with encapsulation. Let's look at them next.

### Encapsulation At The Class Level

#### The Factory Pattern

Have a look at the following example of code.

```java

	public class FactoryPattern {

		public static class PersonFactory {
			public static Person getPerson(Strinf name, String gender) {
				if(gender.equalsIgnoreCase("M")) {
					return new Male(name);
				} else if (gender.equalsIgnoreCase("F")) {
					return new Female(name);
				} else {
					//So on...
				}
				return null;
			}
		}
	
		static abstract class Person {
			private String name;
			
			Person(String name) {
				this.name = name;
			}
		
			abstract String getSalutation();
	
			String getNameAndSalutation() {
				return getSalutation() + " " + name;
			}
		}
	
		public static void main(String[] args) {
			Person male = PersonFactory.getPerson("Robinhood", "M");
			System.out.println(male.getNameAndSalutation());
	
			Person female = PersonFactory.getPerson("Mary", "F");
			System.out.println(female.getNameAndSalutation());
		}
	}

``` 

Suppose we have a set of classes to represent and create different kinds of persons. Also, we would need a way to do the same in code as well. Also, we would not like the users of the class not to know, that there are underlying implementations of ```Person``` named ```Male``` and ```Female```. 

We can abstract that detail away by using the **Factory Pattern**. As we see in the code above, the user creates a male person by passing in a name and a string "M" to the ```getPerson()``` method of ```PersonFactory```. He has no idea that there are classes called ```Male``` and ```Female``` hidden away from him.

#### The Strategy Pattern

This is another good example of encapsulation. Consider the following piece of code:

```java

	public class StrategyPattern {
		interface Sortable {
			public int[] sort(int[] numbers);
		}
		
		static class BubbleSort implements Sortable {
			@Override
			public int[] sort(int[] numbers) {
				//Ideally, the bubble sort is implemented completely here
				return numbers;
			}
		}

		static class ComplexClass {
			Sortable sorter;
	
			ComplexClass(Sortable sorter) {
				this.sorter = sorter;
			}

			void doAComplexThing() {
				int[] values = null;

				//... logic...
				sorter.sort(values);
				//...logic...
			}
		}

		public static void main(String[] args) {
			ComplexClass complexClassInstance = new ComplexClass(new BubbleSort());
			//This can also be a setter
			complexClassInstance.doAComplexThing();
		}
	}

```

In this case, we created an ```interface``` called ```Sortable```. Any class that needs sorting behavior, such as:

The user of the interface, ```ComplexClass```, only directly calls the ```sort()``` method on the ```Sortable``` interface. It does not worry about what the underlying class that implements ```Sortbale```, actually is. It does not worry about whether that is a ```BubbleSort```:

```
	static class BubbleSort implements Sortable {
			@Override
			public int[] sort(int[] numbers) {
				//Ideally, the bubble sort is implemented completely here
				return numbers;
			}
		}

```

or a ```QuickSort```. Whoever uses the class ```ComplexClass```, needs to create an instance of it, provide an instance of the sorting algorithm, and out class can make use of ```sort()``` by accessing the interface. 

### An Interface Example

We are very much in the habit of playing games, especially those that involve using gaming consoles. How would a computer game allow you to play it? By allowing the console to use it like this:

```java

	public class Interfaces {

		public interface GamingConsole {
			public void up();
			public void down();
			public void left();
			public void right();
		}
	
		public class MarioGame implements GamingConsole {
			public void up() {
				System.out.println("Jump");
			}
	
			public void down() {
				System.out.println("Goes Into A Hole");
			}
	
			public void left(){
	
			}
	
			public void right(){
				System.out.println("Go Forward");
			} 
		}
	
		public class ChessGame implements GamingConsole {
			public void up() {
				System.out.println("Move Piece Up");
			}
	
			public void down() {
				System.out.println("Move Piece Down");
			}
	
			public void left(){
				System.out.println("Move Piece Left");
			}
	
			public void right(){
				System.out.println("Move Piece Right");
			} 
		}
	
		public static void main(String[] args) {
			GamingConsole games = { new MarioGame(),
									new ChessGame() };
	
			for(GamingConsole game: games) {
				game.up();
				game.down();
				game.left();
				game.right();
			}
		}
	}

```

This shows use of one such console with four buttons: up, down, right and left. We are representing it by an interface, named ```GamingConsole```:


Whoever uses a ```GamingConsole```, can play a game attached to it, irrespective of what the actual game is. It could be a ```MarioGame```, a ```ChessGame```, or whatever. The user knows he can call the ```up()```, ```down()```, ```left()``` and ```right()``` operations with ease. The actual game implementations are hidden away. How a ```MarioGame``` reacts to the console, is different from how a ```ChessGame``` responds.

The fact that we have created a ```GamingConsole``` interface, means the ```Game``` implementations can be hidden away. 

### An Abstract Class Example

The same high-level concept can be applied by using abstract classes as well. Consider the following abstract class definition:


```java

	public abstract class AbstractRecipe {
		public void execute() {
			getReady();
			doTheDish();
			cleanup();
		}

		abstract void getReady();
		abstract void doTheDish();
		abstract void cleasnup();
	}

	public class Recipe1 extends AbstractRecipe() {
		@Override
		public void getReady() {
			//...
		}

		@Override
		public void doTheDish() {
			//...
		}

		@Override
		public void cleanup() {
			//...
		}
	}
	
	public class RecipeWithMicrowave extends AbstractRecipe() {
		@Override
		public void getReady() {
			//...
		}

		@Override
		public void doTheDish() {
			//...
		}

		@Override
		public void cleanup() {
			//...
		}
	}

	public static void main(String[] args) {
		Recipe1 recipe = new Recipe();
		recipe1.execute();

		RecipeWithMicrowave recipeWithMicrowave = new RecipeWithMicrowave();
		recipeWithMicrowave.execute();
	}

```

We are implementing a **Template Method Pattern** in here. For every recipe that we end up creating, we want to make sure it has three steps: getting things ready, doing the dishes, and cleaning up. We are creating an abstract class ```AbstractRecipe```. Any user who ants to use a recipe, does not need to worry about the fact that an ```AbstractRecipe``` exists. They just create an instance of the particular recipe, and call ```execute()``` on it.

Underneath all that, is the recipe implementation:

### Our Journey With Encapsulation Thus Far

We looked at a few examples of how encapsulation is implemented. We saw that:

* At the very basic level, we achieve that by using built-in keywords such as ```private``` and ```protected``` around member variables
*  The next level involves defining utility methods, to achieve encapsulation at a more logical level, to hide variable-level operations
* The next level of abstraction involves creating the appropriate interfaces, or abstract classes
* Another level involves the use of patterns such as Factory Pattern and Strategy Pattern 

The thing is, encapsulation does not end at the code level. Let's look at a few more instances of the same.

### Encapsulation In Layered Architecture

When we build enterprise web applications, we normally like to structure them in layers:

![image info](/images/Capture-019-16.png)

The idea behind doing so is that, for example, you do NOT want:

* The Business layer to be too involved with storing and retrieving data
* The Web layer to know this, and also how business logic deals with data
* The Data layer to be bothered about how the application manages communication with other applications

We achieve this be creating an interface in each layer. For example, the Data layer exposes an interface which is used by the Business Layer. Similarly, other layers can also expose interfaces.

#### A Specific Example: JPA And Hibernate

Another good example of layered encapsulation is that of JPA and Hibernate. JPA is the interface, and Hibernate is the implementation. An application can make use of the JPA  annotations, without worrying about the fact that underneath that interface, lies a Hibernate implementation. 

### Microservices: Common Components

Another example of encapsulation comes from the domain of microservices architecture. Have a look at the following architecture diagram:

![image info](/images/Capture-019-17.png)

Such architectures make heavy use of common components. 

#### Security Example

For example, look at security. Implementation of authentication and authorization  is essentially the same across different microservices. By creating a common security component, you can abstract away how you store the security details of a user. It could be a database, or an LDAP server setup, or whatever. 

The microservice will just end up using the interface that the Security component provides. The microservice will use the mechanism to ask whether a particular user is authorized to perform an action, but the implementation details are abstracted away. 

#### Web Services

This is another scenario where encapsulation is very much used. Suppose we implement one such service using REST. We expose a URL, as an access point for consumers of this service. We would also specify the formats of the messages to be exchanged with users. How the service is implemented underneath - what language and framework is made use of - does not matter to the consumer. All that matters is the interface. 

Do check out our video on this:

[![image info](/images/Capture-019-01.png)](https://www.youtube.com/watch?v=UhzXNlsjHkA) 

### Summary

In this article, we tried to answer the main question of what Encapsulation is all about. We saw that it is all about hiding the implementation, and providing the right interface to the user. That user might be:

* A class using your class
* A component using your component
* A layer using your layer
* An end-user calling your service

We looked at encapsulation in great detail, at many different levels:

* At a basic level with member variables
* At a method level for better utility
* At an interface or abstract class level
* At a pattern level
* At a application layer level
* At a service component level

In particular, we saw how enterprise applications hide away things behind a component, and provide an interface to it.
