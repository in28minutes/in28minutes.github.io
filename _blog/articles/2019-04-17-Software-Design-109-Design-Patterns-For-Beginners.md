---
layout:  post
title:  Design Patterns For Beginners - with Java Examples
date:    2019-12-16 12:31:19
summary: In this guide, we give you an introduction to the world of design patterns.For each pattern, we understand 1) the pattern a2) the context in which it is applicable -  with a real-world example.
categories: SwDesign
permalink:  /design-patterns-for-beginners-with-java-examples
image: /images/design-category.png
---
 
In this guide, we give you an introduction to the world of design patterns.For each pattern, we understand 1) the pattern a2) the context in which it is applicable -  with a real-world example.

## You will learn
- What are Design Patterns?
- Why do you use Design Patterns?
- What are the different types of Design Patterns?
- When do you use Design Patterns?
- How do you implement different Design Patterns in Java?
- What are the real world examples for Design Patterns?



### Software Design

This is the second article in a series of articles on Software Design:

- [1 - How do you keep your design simple?](/software-design-keep-your-design-simple){:target='_blank'}
- [2 - Design Patterns For Beginners - with Java Examples](/design-patterns-for-beginners-with-java-examples){:target='_blank'}
- [3 - What is Abstraction?](/software-design-what-is-abstraction){:target='_blank'}
- [4 - Encapsulation - with examples](/software-design-encapsulation-with-examples){:target='_blank'}
- [5 - Coupling - with examples](/software-design-coupling-with-examples){:target='_blank'}
- [6 - Cohesion - with examples](/software-design-cohesion-with-examples){:target='_blank'}
- [7 - Introduction to Evolutionary Design](/software-design-introduction-to-evolutionary-design){:target='_blank'}



### What Are Design Patterns?

We have been building object-oriented software for over 40 years now, starting with Smalltalk, which was the first object-oriented language. 

The programming world has encountered a large number of problems, and a variety of solution have been proposed to tackle them. 

An attempt was made by a group of four people, famously called the "Gang-Of-Four" or GoF, to come up with a set of common problems and solutions for them, in the given context. 

> This catalog of common problems and their solutions is labeled as GOF (Gang of Four) Design Patterns. 

### Why Design Patterns?

The advantages of design patterns are:
- To provide standard terminology that everybody understands
- Not to repeat the same mistakes over and over again

### What Are The Types Of Design Patterns?

The design patterns we talk about here, are from the perspective of an object-oriented world. There are mainly three different kinds of design patterns:
- Creational Patterns
- Structural Patterns
- Behavioral Patterns

#### Creational

Creational patterns deal with the creation of objects.

#### Structural

Structural patterns deal with the composition of objects.

It deals with questions such as:
* What does a class contain?
* What are the relationships of a class with other classes? Is it inheritance or composition? 

#### Behavioral

Behavioral patterns focus more on the behavior of objects, or more precisely, interactions between objects. 

> How does an object communicate with another object?

![image info](images/Capture-109-02.png)

### Exploring Creational Design Patterns

We explore the following creational design patterns:

![image info](images/Capture-109-03.png)

#### The Prototype Pattern

![image info](images/Capture-109-04.png)

> A Prototype represents a fully initialized instance, to be copied or cloned. 

Let's take an example:

Let's consider the design of a Chess game. Every game of Chess has the same initial setup - The King, Queen, Rook, Bishop, Knight and the Pawns all have their specific places. Let's say we want to build software to model a Chess game. 

Every time a new Chess game is played, we need to create the initial board layout.

Instead of repeating the creation of chess board each time
- We can create an object that contains the initial setup
- Clone from it - each time a new Chess game is played. 

The object with the initial setup of the chess board is the prototype. And, we are using the prototype pattern.

Isn't it simple?

In the Prototype pattern, you have a fully initialized instance - here, the initial board layout - that is readily available. 

Whenever a new Chess game is started - for example, in any of the numerous online Chess portals - this initialized instance is merely copied, or cloned. 

#### The Builder Pattern

The Builder Pattern separates object construction from its representation. What does that mean?

![image info](images/Capture-109-05.png)

Assume that you go out for a multi-course dinner to a Restaurant. Such a dinner would have many options, such as Starters, Main course and Desserts. You would probably choose two or three out of the presented options. A particular client may want to have dinner with the first two options only, leaving out the Desserts option. Yet another would prefer the Main course and Desserts, skipping the Starters entirely. 

Similar situations might arise in designing software. You may need to build an object using a subset of the options that are available - or, create the object in multiple ways. This is where the Builder pattern comes in handy. 

To understand it further, let's look at a small piece of code.

```java

public class BuilderPattern {
    static class Coffee {
        private Coffee(Builder builder) {
            this.type = builder.type;
            this.sugar = builder.sugar;
            this.milk = builder.milk;
            this.size = builder.size;
        }

        private String type;
        private boolean sugar;
        private boolean milk;
        private String size;

        public static class Builder {
            private String type;
            private boolean sugar;
            private boolean milk;
            private String size;

            public Builder(String type) {
                this.type = type;
            }

            public Builder sugar(boolean value) {
                this.sugar = value;
                return this;
            }

            public Builder milk(boolean value) {
                this.milk = value;
                return this;
            }

            public Builder size(String value) {
                this.size = value;
                return this;
            }

            public Coffee build() {
                return new Coffee(this);
            }
        }

        @Override
        public String toString() {
            return String.format("Coffee [type=%s, sugar=%s, milk=%s, size=%s]", this.type, sugar, milk, size);
        }

    }

    public static void main(String[] args) {
        Coffee coffee = new BuilderPattern.Coffee.Builder("Mocha").milk(true).sugar(false).size("Large").build();
        System.out.println(coffee);

    }
}
``` 

Let's say you're writing software for a machine that prepares coffee. The main ingredients of coffee are coffee, milk and sugar. 

Depending from which part of the world you are from, you choose whether or not you have sugar and milk. 

The Builder pattern steps in to provide these Coffee creation options for you. 

Have a look at the code inside ```main()```. 

What we have inside the ```Coffee``` is a ```Builder```, to which we pass the *mandatory* ```type``` of the coffee.  Chained to that call, we make other calls adding in our preferences of the other ingredients. 

Someone else who wants a different coffee can easily build it. This leads to a huge amount of flexibility in building objects.

> Other approaches to solving this problem, such as the use of setters, have many inherent problems. These solutions lead to code that is difficult to read, and also behave erratically in multithreaded programs. The Builder pattern solves all those problems. 

The advantages of using the Builder pattern are:
* It simplifies object creation
* Leads to more readable code
* Does not allow the values to be modified

#### The Singleton Pattern

The Singleton pattern is the most famous among all the design patterns. What this pattern does is very clear from its name - allow only one instance of a class per JVM at any point in time. 

A good real-world comparison would probably be the President of a Nation. 

![image info](images/Capture-109-06.png)

However, there is a disclaimer here - there can only be one instance of that class, **per JVM**. If you have a Java application that runs as part of a cluster of application servers, each server runs a separate JVM instance. Therefore, you are allowed to have one instance of the Singleton created on each application server, at any given point of time. 

There are a few things to remember whenever you create a Singleton class. 

* The constructor needs to be ```private```, to prevent the possibility of other objects creating instances of your class. 
* In Java, build a Singleton using a ```Enum```. 
* JEE 7 has a built-in annotation named ```@Singleton```, along with other related annotations. 
* The main disadvantage of using the Singleton pattern is that the resulting code is difficult to unit test. Make a clear decision as to where you absolutely need to use a Singleton, and where you don't. 
* In frameworks such as Spring, the objects that are managed are called beans, and beans are Singletons by default. What Spring does well is to ensure all this is in the background. 

#### The Factory Method Pattern

![image info](images/Capture-109-07.png)

The intent of the Factory Method pattern is to create a family of object types. Let's look at a code example.

```java

    public class FactoryPattern {
        public static class PersonFactory {
            public static Person getPerson(String name, String gender) {
                if(gender.equalsIgnoreCase("M")) {
                    return new Male(name);
                } else if(gender.equalsIgnoreCase("F")) {
                    return new Female(name);
                } // So on
                return null;
            }
        }
    }

    static abstract class Person {
        Person(String name) {
            this.name = name;
        }

        private String name;

        abstract String getSalutation();

        String getNameAndSalutation() {
            
        }
    }

    static class Male extends Person {
        public Male(String name) {
            super(name);
        }

        @Override
        String getSalutation() {
            return "Mr";
        }
    }

    static class Female extends Person {
        public Female(String name) {
            super(name);
        }

        @Override
        String getSalutation() {
            return "Miss/Mrs";
        }
    }

    public static void main(String[] args) {
        Person male = PersonFactory.getPerson("Robinhood", "M");
        System.out.println(male.getNameAndSalutation);

        Person female = PersonFactory.getPerson("Mary", "F");
        System.out.println(female.getNameAndSalutation);
    }

```

This code implements a ```PersonFactory```. This class has a static method named ```getPerson()``` that accepts a person's name and gender as parameters. Depending on the gender ```String``` passed in, it either returns a ```Male``` or a ```Female``` object. 

If somebody wants to create a male person, they invoke the ```getPerson()``` method on the ```PersonFactory``` with a gender argument of ```"M"```. Similarly, you can create a female person by invoking the ```getPerson()``` method on the ```PersonFactory``` with a gender argument of ```"F"```. 

We are passing in an  identifier of the type of object we need, at the time of creation, while still referring to the generic type, ```Person```. 

The ```Male``` and ```Female``` classes are hidden behind the ```PersonFactory``` implementation. 

The advantage of using the Abstract Method pattern is that you can add additional types to the factory, without much change in the other classes using this class. In our example, you can add more types of gender, without affecting the existing code that deals with other genders, which all use ```Person```.

What about the complexity involved in creating an object? 

It greatly simplifies the task of object creation. The ```PersonFactory``` makes the decision of what object to create, and delivers it to us.

Do check out our video on the same topic:

[![image info](images/Capture-109-01.png)](https://www.youtube.com/watch?v=f5Rzr5mVNbY)

### Structural Design Patterns

Let us now have a look at the structural design patterns we want to explore.

#### The Proxy Pattern

![image info](images/Capture-109-08.png)

> A Proxy is an object that represents another object. 

Let's look at a real-world example.

Your debit card is a proxy for your bank account.  Whenever you make a transaction using a debit card, the corresponding money is deducted from the bank account. 

The debit card is a proxy for your bank account, which is the actual object.

Similar to that, in programming, you might have to program interactions with remote objects. In such situations, you create a proxy object that takes care of all external communications. You would communicate with the proxy as if it were residing on your local machine. 

Good examples are the EJB Home and Remote interfaces. 

A proxy hides the complexity involved in communicating with the real object.

####  The Decorator Pattern

> The Decorator pattern allows us to add responsibilities to objects, dynamically. 

![image info](images/Capture-109-09.png)

In object-oriented programming, we typically use a lot of inheritance. 

##### Example 1

Let's say a particular Pizza outlet has ten types of pizza. Our implementation has ten classes for these Pizza types.

Now there is a requirement to make these pizzas available with three types of toppings. If we would want to create individual classes for each pizza and topping combination, we have a total of 30 classes to manage.

Instead of doing this, can we make the pizza-topping relationship dynamic? Can we add a topping on top of an existing pizza? 

We need to use a topping as a decorator on top of any pizza.

##### Example 2

Another example would be adding a discount on a pizza order. 

Let's say, you have an order, and based on some criteria, you want to offer a discount to the customer. There might be a variety of discounts which might be applicable at different times. If you add a different type of a discount to every kind of order, then in a static relationship, you need to maintain hundreds of classes. 

Treating a discount as a decorator on order makes the relationship dynamic.


##### Example 3

A perfect example where the Decorator pattern is implemented in Java is the Java I/O packages. This is reflected in the way we create an input stream in an I/O program:  

```java

    new LineNumberInputStream(new BufferedInputStream(new FileInputStream()));

```

You have a ```FileInputStream```. If you want to make it buffered, then add a decorator to it in the form of a ```BufferedInputStream```. If you want the buffered ```FileInputStream``` to have line numbers also, then add a decorator for a ```LineNumberInputStream```.

##### Summary

Decorator Pattern enables you to add behavior to existing objects, at run time. This allows the user of the interface to decide, how he/she wants to create the objects. 

The drawback of this approach is the complexity involved in creating objects. The user needs to understand a lot of classes and their relationships before being able to use the power of the Decorator.

#### The Facade Pattern

![image info](images/Capture-109-10.png)

> A Facade is a single class that represents an entire subsystem. 

Let's take the example of an event manager. An event manager is a go-to person when you want to organize an event. He/She would handle several aspects of an event such as the decorations, the food, sending out invitations to guests, the music arrangements, and similar things.  The event manager acts as the facade of the event organization subsystem. 

Consider the case of a distributed system. You typically have the need for multiple calls, across layers. 

Take for instance, a system that offers the service for online book orders. Whenever an order comes in, several things need to be taken care of, such as checking for the stock, reserving the order, accepting the payment, updating the stock, and generating the invoice. 

We can create a single facade, such as the order interface, which would manage all incoming orders and provide an interface to the customer. 

The advantage of using the Facade pattern is that it reduces the number of network calls, as well as reduces coupling among classes. 

It succeeds in establishing a transaction boundary between communicating objects. Facades, like services, are good hubs to implement transactions. 

As long as the interface of the facade remains the same, the implementation details of the subsystem can change.

#### The Adapter Pattern

> An Adapter is used to match interfaces of different classes.

![image info](images/Capture-109-11.png)

Let's take the real world example of power adapters. 

Problem : If you buy a mobile phone in India, it comes with a charger that only works with power sockets used in India. If you take the same charger to the US for example, it will not work, as it will not fit into sockets there. 

Solution : The solution is to use a travel adapter, to use with your charger when you travel. You can plug in your charger into the travel adapter, and the travel adapter is used to connect to the socket in a particular country.

Similarly, when you try to talk to a system that uses a different message format or a language, you need an adapter to translate messages. 

An interesting example is a communication between a Java program and a web service. Before sending out the data to the service, we need to convert the object into XML or JSON format. We are implementing the Adapter pattern!

#### The Flyweight Pattern

Let's consider a few scenarios
- Creation of an object takes a lot of time and involves multiple instances
- Each instance of an object occupies a lot of memory
- Some objects might be used several times across the same application with the same values

In these scenarios, you might not want to create a new instance every time it is needed. 

How about caching an instance and reusing it when needed?

> A Flyweight represents creating a fine-grained instance, that is being used for efficient sharing.

![image info](images/Capture-109-12.png)

##### Example 1

A really good real work example is the public switched telephone network (PSTN). 

In the PSTN, there are always a limited number of lines, and for simplicity, let's assume this number is 10. However, there are thousands of customers that use these lines. Since all 1000 customers would not make calls at about the same time, it is possible to efficiently switch calls coming in, among the existing 10 lines.

##### Example 2

In the software world, a good example of a Flyweight pattern is JDBC connections.

A connection pool is a set of connections to the database. The application may be firing a lot of queries, but we don't create a new connection whenever a new query comes in. As soon as a query comes in, we match it to an available connection, and the query gets fired. Once query execution is done, the connection is released back into the pool. 

Using such a pool allows us to avoid the cost involved in creating and closing a connection.

### Behavioral Design Patterns

Let us now have a look at the behavioral design patterns. 

#### The Chain Of Responsibility Pattern

![image info](images/Capture-109-13.png)

> The Chain Of Responsibility Pattern represents a way of passing a request between a chain of objects. 

##### Example 1

The best example of this pattern can be seen in the exception handling mechanism of most programming languages.

Suppose you have a ```method1()``` calling ```method2()```, and ```method2()``` in turn calls ```method3()```. Assume that ```method3()``` throws an exception. 

If ```method3()``` has no exception handling, then the exception is passed on to ```method2()``` to handle it. If again ```method2()``` has no exception handling inside it, then the exception is passed on to ```method1()```. If even ```method1()``` cannot handle it, it gets thrown out of ```method1()``` as well.

##### Example 2

Consider a real-world example of a loan approval process. 

A bank clerk has permissions to approve loans within a certain amount. If the amount goes above that, then it goes to the supervisor. The supervisor has a similar, albeit larger loan approval limit set for him. If the loan amount exceeds that limit, then it goes to his supervisor, and so on.

##### Summary

With Chain Of Responsibility, we have a chain of objects already ready, that wait to process requests. When a new request enters the system, it goes to the first object in the chain to attempt processing. Depending on the processing condition, the request travels up the chain and gets fully processed at some level, or maybe not processed at all.

#### The Iterator Pattern

![image info](images/Capture-109-14.png)

The Iterator pattern is one of the most simple design patterns. You have a set of elements arranged in a collection, and you want to access those elements sequentially. A good example of an Iterator is a TV remote, which has the "next" and "previous" buttons to surf TV channels. Pressing the "next" button takes me one channel in the forward direction, and pressing the "previous" button takes me one channel in the backward direction.

In the programming works, examples of the ```Iterator``` class and the enhanced ```for``` loop in Java are examples of the Iterator pattern. 

#### The State Pattern

> The State Pattern is used to alter an object's behavior when its state changes. 

![image info](images/Capture-109-15.png)

Take a look at this Java example:

```java

    public class StatePattern {
        static class FanWallControl {
            private SpeedLevel current;
    
            public FanWallControl() {
                current = new Off();
            }

            public void set_state(SpeedLevel state) {
                current = state;
            }
    
            public void rotate() {
                current.rotate(this);
            }

            @Override
            public String toString() {
                return String.format("Fan Wall Control [current = %s]", current);
            }
        }

        interface speedLevel {
            void rotate(FanWallControl fanWallControl);
        }
    
        static class Off implements SpeedLevel {
            public void rotate(FanWallControl fanWallControl) {
                fanWallControl.set_state(new SpeedLevel1());
            }
        }
    
        static class SpeedLevel1 implements SpeedLevel {
            public void rotate(FanWallControl fanWallControl) {
                fanWallControl.set_state(new SpeedLevel2());
            }
        }
    
        static class SpeedLevel2 implements SpeedLevel {
            public void rotate(FanWallControl fanWallControl) {
                fanWallControl.set_state(new SpeedLevel3());
            }
        }
    
        static class SpeedLevel3 implements SpeedLevel {
            public void rotate(FanWallControl fanWallControl) {
                fanWallControl.set_state(new Off());
            }
        }
    }

```  

Let's take the example of a fan wall control. The fan wall control controls the speed with a fan rotates. It has speed levels ranging from 0 to 5. When it is at level 0, the fan does not rotate, and it rotates the fastest at level 5.

When you rotate the knob of the fan control, the level changes, and this causes the speed of the fan to change as well. This is a classic case of a change in state (level) causing a change in behavior (speed). 

A ```FanwallControl``` object is composed of a ```SpeedLevel``` object. ```SpeedLevel``` is an interface that has four different implementations. Initially, the level is at ```Off```, and when you click rotate at that time, the new speed is at ```SpeedLevel1```. The happens successively, and if you rotate at ```SpeedLevel3```, the level returns to ```Off```.

In case you need to define an additional speed level, just add in a new class that implements the ```SpeedLevel``` interface, and implement its rotate method. 

This is an excellent example that highlights the advantages of an extensible class.

#### The Strategy Pattern

![image info](images/Capture-109-16.png)

The strategy has the task of encapsulating an algorithm inside a class. Let's look at a Java code example:

```java

    public class StrategyPattern {
        interface Sortable {
            public int[] sort(int[] numbers);
        }

        static class BubbleSort implements Sortable {
            @Override
            public int[] sort(int[] numbers) {
                //sort using bubble sort algorithm

                return numbers;
            }
        }

        static class QuickSort implements Sortable {
            @Override
            public int[] sort(int[] numbers) {d 
                //sort using quicksort algorithm

                return numbers;
            }
        }

        static class ComplexClass {
            private Sortable sorter;

            ComplexClass(Sortable sorter) {
                this.sorter = sorter;
            }

            void doAComplexThing() {
                int[] values = null;

                //logic...

                sorter.sort(values);

                //logic...
            }
        }

        public static void main(String[] args) {
            ComplexClass complexClassInstance = new ComplexClass(new BubbleSort());
            complexClassInstance.doAComplexThing();
        }
    }

```

The class ```ComplexClass``` intends to perform a lot of complex logic within it. One part of that logic is to sort a set of values. One direct way would be to implement the entire sorting logic within ```ComplexClass```. This would make it very inflexible, since if you wanted to change the sorting logic tomorrow, that entire code needs to change.

When we use the Strategy pattern, we separate the algorithm of how the sorting is done, from ```ComplexClass```. 

We define an interface named ```Sortable```, which has a method named ```sort()```. Any actual sort algorithm is an implementation of ```Sortable```, and needs to override ```sort()``` method. 

Now, ```ComplexClass``` is given a particular ```Sortable``` implementation as a constructor argument. ```ComplexAlgorithm``` does not care what exact sorting algorithm is being used; it is happy that that object implements the ```sort()``` method of ```Sortable```.

A lot of flexibility results due to the use of the Strategy pattern. You can dynamically change the strategy, and pass in the right one according to the context.

#### The Observer Pattern

> The Observer pattern is a way of notifying a change, to a number of classes. 

![image info](images/Capture-109-17.png)

If you are a fan of cricket, you may want to know whenever Sachin Tendulkar scores a century, so that you can celebrate. 

All such similar people would register themselves to the event of Sachin scoring a century. Each of these people is now an Observer for that event. Whenever Sachin does score a century, a centralized program will notify each observer. 

Another example is that of online bidding. A group of bidders at an auction register themselves to receive notifications when a higher bid is placed. As soon as a bid higher than the current one is placed, all the registered bidders get to know about it. 

There are two main parts to implementing the Observer design pattern. 
- Registration - where the interested objects register themselves with the centralized program to receive notifications
- Notification - where the registered observers receive notifications from the centralized program

Here is a simple implementation of the Observer pattern:

```java

    public class Observer Pattern {
        static class SachinCenturyNotifier {
            List<SachinFan> fans = new ArrayList<SachinFan>();
            
            void register(SachinFan fan) {
                fans.add(fan);
            } 

            void sachinScoredACentury() {
                for(SachinFan fan: fans) {
                    fan.announce();
                }
            }
        }

        static class SachinFan {
            private String name;
            
            SachinFan(String name) {
                this.name = name;
            }

            void announce() {
                System.out.println(name + " notified");
            }
        }

        public static void main(String[] args) {
            SachinCenturyNotifier notifier = new SachinCenturyNotifier();
            notifier.register(new SachinFan("Ranga"));
            notifier.register(new SachinFan("Ramya"));
            notifier.register(new SachinFan("Veena"));

            notifier.sachinScoredACentury();
        }
    }

```

We have created an instance of ```SachinCenturyNotifier```, and registered three fans with it. 

Whenever Sachin scores a century, the call ```notifier.sachinScoredACentury()``` would be made, and all three fans would be notified. 

#### The Visitor Pattern

> The Visitor pattern allows us to add a new operation to a class, without changing the class. 

![image info](images/Capture-109-18.png)

There are a lot of scenarios when designing frameworks, where we don't want other people to modify the code in the framework. We want others to extend the functionality without touching the framework code. They are allowed to add new operations, but not to change the existing operations. 

The Visitor pattern allows you to do this.

A good real-world example of the Visitor pattern is the operation of a taxi company. 

As soon as a person calls a taxi company, and a cab is dispatched, the company accepts a visitor. Once the visitor, or customer enters the taxi, he is no longer in control of where he is going. The cab driver is now in control.  

If we look at it as object-oriented code, the driver class is in control of the customer class. The driver class can add new operations on top of the customer/visitor. 

#### The Template Method Pattern

> The Template Method pattern is used to defer the exact steps of an algorithm, to a subclass. 

![image info](images/Capture-109-19.png)

A good real-world example of this pattern is how we go about creating a house plan. Any good house plan consists of a floor plan, the foundation, plumbing, framing and wiring. Such a plan is almost identical for each house. 

If you were to model this in software, you could create a template class with this standard behavior defined. A subclass could extend this and give actual implementations. Such details could include the wooden flooring type, the wall paint colors, and any added wings as required.

A good example of the Template Method pattern is within the Spring framework, in the form of ```AbstractController```:

```java

    @Override
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) {
        checkRequest(request);
        prepareResponse(response);

        if(this.synchronizeOnSession) {
            HttpSession session = request.getSession(false);
            if(session != null) {
                ObjectMutex mutex = WebUtils.getSessionMutex(session);
    
                synchronized(mutex) {
                    return handleRequestInternal(request, response);
                }
            }
        }
        return handleRequestInternal(request, response);
    }

```

```handleRequest()``` merely takes care of the basic things. However, it leaves the lions to share for the implementation to the method ```handleRequestInternal()```. This method is defined by subclasses, where more specific logic can be implemented.

The Template Method pattern is all about doing the high-level steps, and leaving the low-level details to the subclasses. The subclasses can override the low steps and provide their own implementation.

#### The Command Pattern

> The Command pattern encapsulates a command request as an object. 

![image info](images/Capture-109-20.png)

Let's take a real-world example.

Consider the scenario when a customer goes to a restaurant and wants to place an order for a meal. The writer merely writes the order he gets on a piece of paper, and passes it on to the chef. The chef executes the order, and then prepares the meal. He passes the piece of paper to the manager.

The verbal order from the customer has now become a paper object. This piece of paper is the command object. The command object contains all the details needed to execute the request. 

Similarly in object-oriented programming, we can encapsulate all the details of a request into an object, and pass that object to execute it. 

In web applications, when a user types in the details on a form, these details are captured in a single request object, which is then passed across.

The interface ```java.lang.Runnable``` is also a good example of how this pattern is implemented. We create threads in Java by extending the ```Runnable``` interface, which has all the logic for execution in its ```start()``` method. When we want to create and start a thread, we pass this class to the ```start()``` method.

#### The Memento Method

> The Memento pattern captures and later restores an object's internal state. 

![image info](images/Capture-109-21.png)

A lot of games that we play offer the option of performing an intermediate save. At a certain point in the game, you can save it and later come back to it. 

To implement this, we need to save the internal states of the game objects, and restore them at a certain point in time.     

This save-revert functionality can be implemented by using serialization in a language such as Java. 

The memento pattern is very useful for implementing undo/redo operations. 

For example, if you are working on a text document in a word processor. If at a certain point, you decide to undo changes, you can see each undo until you reach a point where you are satisfied. You have now reverted to an earlier saved state of the document.

#### The Mediator Pattern

The Mediator pattern is used to define simplified communication between classes. 

![image info](images/Capture-109-22.png)

Take the example of an Air Traffic Controller (ATC). Let's say that at any point of time in India, we have about 500 flights in the air. We need to decide the routes that each of these flights needs to take. This also includes deciding the times at which each of these flights takes off and lands. It will be a highly complex situation if each of these 500 flights needs to talk with each other and arrive at an acceptable schedule of routes. 

That's why we have the concept of an ATC. The flights communicate with the ATC, and having assimilated the information from all the flights, the ATC makes the decisions and communicates them back the flights. 

In the software world, a good example of the Mediator pattern is the ESB (Enterprise Service Bus). In a distributed system, instead of letting the applications talk to each other, an application drops in a message to the ESB. The ESB routes the request to the application that needs to handle the request. It acts as the Mediator.

Do check out our video on the same topic:

[![image info](images/Capture-109-01.png)](https://www.youtube.com/watch?v=f5Rzr5mVNbY)

### Summary

In this article, we had a quick look over a variety of design patterns.

A design pattern is an approach to solve a problem in a given context. We focused on understanding the context in which a particular pattern may be applicable with real-world examples.
