---
layout:  post
title:  Programming Basics - Introduction To Object Oriented Programming
date:    2019-06-20 12:31:19
summary: Object oriented programming (OOP) is all about thinking in terms of objects. Let's dig deeper.
categories:  SwProgramming
permalink:  /programming-basics-introduction-to-object-oriented-programming
image: /images/programming-category.png

---

Object oriented programming (OOP) is all about thinking in terms of objects. Let's dig deeper.
 
## You will learn
- What Is Structured Programming?
- What Is Object Oriented Programming?
- How is Object Oriented Programming different from Structured Programming?
- How can you think in terms of objects - state and responsibility?
- We look at a few examples of designing object oriented programs.




Before we discuss OOP, let us first look at structured programming.

### What Is Structured Programming?

If you have ever done any programming in languages such as C and Pascal, then you have done what is called **procedural**, or **structured programming**. Such programming involves thinking in terms of procedures (or methods/functions). If you have a problem to solve, you split the logic of the solution into a sequence of multiple procedures, as the steps. You would start thinking about what functions need to be written.  

#### Example: Flight Problem

Suppose the problem at hand is flying from one city to another. The different steps involved in that would take the form of a sequence of procedures as shown below:

```

	// Global Data

	fly() {
		travelToairport();
		findCheckInCounter();
		checkIn();
		passSecurityCheck();
		waitForBoardingCall();
		boardTheFlight();
		wishTheAirHostess();
		takeOff();
		haveFun();
		landing();
	}

```

We are looking to combine the functions that we write, to solve the stated problem. 

### What Is Object Oriented Programming?

Object Oriented Programming (OOP) brings a new thought process to the table. OOP focuses instead on the actors in the system called objects. It focuses on:
* The data that these objects contain
* The actions that can be performed on them

If this sounds complex to you, then you are not alone! 

Every new programmer who is introduced to OOP feels pretty much the same way. 

How would OOP approach the problem of taking a flight from one city to another? 

### Example: Flight Problem Revisited

Lets take a step by step approach:

#### Step-1 : Identify Objects

We first think about the different objects involved in the solution.
- Aeroplane
- Airhostess
- Passenger

In addition to these, we could have more objects such as:
* Cab
* Airport
* Co-passengers
* Pilot

and many more. 


#### Step-2

Once you have identified the objects of the system, you next determine the data an object would contains and actions that can be performed on it. 

Aeroplane

- Data : airline, make, type, position
- Actions : takeOff(), land(), cruise()

Airhostess
- Data : name, address
- Actions : wish(), serve()

Passenger
- Data : name, address
- Actions : takeCab(), checkIn(), walk(), smile()

Of course, there could be a lot more data and actions in each of the objects that we have elaborated on, above. 

In summary, structured programming is only concerned about identifying procedures, and combining them to form a solution. In contrast, OOP focuses on the objects involves, and deals with their individual data and actions.

### Understanding OOP Terminology

Let's now deal with a few standard terms that are used, when dealing with OOP. 

#### Class

A class is nothing but a template used to create objects within a program. A class allows you to define the data that can be stored inside the object, as well as what actions can be performed on them. What you see below is the definition of a simple class, named Planet: 

```

	class Planet {
		name, location, distanceFromSun //state
		revolve(), rotate() // behavior
	}

```

#### Object

An object is defined as an instance of a class. For example, earth and venus are instances of the Planet class. Here is how you go about creating Planet instances: 

```
	Planet earth = new Planet();
	Planet venus = new Planet();

```

You can have other instances as well. If Planet defined the attributes of a planet, then earth and venus are live instances of planets.

#### State

The data that an object might contain is also referred to as its **state**. These are represented by the member variables inside the class. 

The state of an object can change over a period of time. 

The position of an Aeroplane at this point of time, would be different from what it will be after say, an hour's time. Similarly, the distance of the earth from the Sun changes with the passage of time. 

#### Behavior

The actions that can be performed on an object are referred to as its **behavior**. This translates to the methods that can be defined inside a class. 

### Let's Try Some Exercises

Let's now apply what we have learned so far, by applying OOPs to a couple of exercises.

#### Exercise 1 : Online Shopping System

Think about the different things that are involved in creating an online shopping system. Make sure to focus on their data, and enumerate what actions can be performed on them.

#### Exercise 2 : Person

Think about the different things that are related to a Person. Make sure to focus on the data that such a class stores, and enumerate what actions can be performed on a Person.

### Solutions To Exercises

#### Exercise 1 : Online Shopping System
Customer
- Data : name, address
- Actions : login(), logout(), selectProduct(product)

Shopping Cart
- Data : items
- Actions : addItem(item), removeItem(item)

Product

- Data : name, price, quantityAvailable
- Actions : order(), changePrice()

#### Exercise 2 : Person

- Data - name, address, hobbies, work
- Actions - walk(), run(), sleep(), eat(), drink()

The idea behind these exercises was to get you thinking about applying concepts in OOP.

Do check out our video on the same topic:

[![image info](images/Capture-088-01.png)](https://www.youtube.com/watch?v=5dObhVYrgsA)

### Summary
In this article, we had a introductory look at object oriented programming, or OOP. We first saw the approach taken by structured programming, that focuses on procedures. OOP brings a different approach by focusing on objects involved, and their data and actions. We introduced some OOP terminology, such as class, object, state and behavior. Finally, we explored a couple of exercises to try and apply the simple concepts of OOP that we saw here.

