---
layout:  post
title:  Object Oriented Software Design - Solid Principles - with examples
date:    2019-11-14 12:31:19
summary: Software design is typically complex. Object oriented design takes it to the next level. There are a number of design patterns and other stuff to be aware of. Can we make things simple? What are the goals to aim for when you are doing object oriented design? SOLID Principles is a great starting point for Object Oriented Design. 
categories: SwDesign
permalink:  /software-design-solid-principles
image: /images/design-category.png
---

Software design is typically complex. Object oriented design takes it to the next level. There are a number of design patterns to be aware of. Can we make things simple?

SOLID Principles is a great starting point for Object Oriented Design.

### What will you learn?
* What are SOLID Principles?
* What are the best practices in designing objected oriented software?


### Software Design Principles

This is the third article in a series of articles on important Software Design Principles:

- [1 - Introduction to Four Principles Of Simple Design](/four-principles-of-simple-design){:target='_blank'}
- [2 - Software Design - Separation Of Concerns - with examples](/software-design-seperation-of-concerns-with-examples){:target='_blank'}
- [3 - Object Oriented Software Design - Solid Principles - with examples](/software-design-solid-principles){:target='_blank'}
- [4 - Software Design - Single Responsibility Principle - with examples](/software-design-single-responsibility-principle){:target='_blank'}
- [5 - Software Design - Open Closed Principle - with examples](/software-design-open-closed-principle){:target='_blank'}
- [6 - Software Design - What is Dependency Inversion Principle?](/software-design-dependency-inversion-principle){:target='_blank'}


### What Are The SOLID Principles?

Plainly listed out, the SOLID principles are:

* **SRP**: Single Responsibility Principle
* **OCP**: Open Closed Principle
* **LSP**: Liskov Substitution Principle
* **ISP**: Interface Segregation Principle
* **DIP**: Dependency Inversion Principle

Let's look at each of these by turn.

### Single Responsibility Principle (SRP)

> "A class should have one, and only one reason to change"

This principle is not just applicable to a class, but also at the level of a package, a component, an application, or a service. Each of these should each have just one responsibility. 

> You should be able to state what each element does in a single sentence. 

When your class or component or application has single responsibility, the options for reuse increases significantly. 

Have a look at the following class:

```

	public class Task {
		public void downloadFile(String location) {
			//...
		}
		
		public void parseTheFile(File file) {
			//...
		}

		public void persistTheData(Data data) {
			//...
		}
	}

```

```Task``` has three main responsibilities: 

* Download a file from a location
* Parse the contents of the file
* Save the data obtained to a database

It clearly does not satisfy SRP. Let's look at another example:

```

	public class Employee {
		public Money calculatePay() {
			//...
		}

		public String reportHours() {
			//...
		}

		public void save() {
			//...
		}
	}

```

```Employee``` has multiple responsibilities as well:

* Calculate the employee's pay
* Create a report of hours of work put in
* Save the employee details to a database

Above examples need re-design to meet Single Responsibility Principle.

### Open Closed Principle (OCP)


> "Software entities should be open for extension, but closed for modification"

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



### Liskov Substitution Principle (LSP)

According to this principle:

> "Subtypes must be substitutable for their base types"

One of the things people try to do with object oriented programming, is to use inheritance even when it is not appropriate. They may do it just for the sake of reusing the code. Have a look at this example:

```

	class Rectangle {
		void setWidth(double w)
		void setHeight(double h)

		double getWidth()
		double getHeight()
	}

	class Square extends Rectangle {
		void setWidth(double w) 	// Set both width and height to w
		void setHeight(double h) 	// Set both height and width to h

		double getWidth()
		double getHeight()
	}

``` 

We have a ```Rectangle``` class that has methods to set and get its width and height. Suppose we have a fresh requirement for a ```Square``` class.  

Instead of implementing it as a separate class, Let's say we extend ```Rectangle``` (as we know from school geometry that a square is a rectangle). ```Square``` redefines all the set and get methods that it inherits from ```Rectangle``` to set both height and width to the same values. 

> Note that the pair of setters and the pair of getters inside ```Square```  are redundant.

Consider a piece of client code such as this:

```

	void test(Rectangle r) {
		r.setWidth(5);
		r.setHeight(4);

		assertEquals(5*4, r.getWidth() * r.getHeight());
	}

```

```test()``` is a method to test rectangles. A ```Square``` is a ```Rectangle```, hence ```test()``` can be called on a ```Square``` object as well. Unfortunately, since both ```setWidth()``` and ```setHeight()``` modify both the width and height to be equal, the expression ```r.getWidth() * r.getHeight()``` always amounts to ```4 * 4```, as that was the last value set. ```test()``` always fails for a ```Square```!

LSP states that inheritance should be used very carefully. Make sure that the super class is always fully replaceable by each of its sub classes.

### Interface Segregation Principle (ISP)

> If two systems are communicating to each other, then the dependency should be in the smallest possible interface. 

Clients should not be forced to implement interfaces that they don't use

Instead of one fat interfaces, a group of smaller interfaces is preferred, each one addressing a sub-module.

Let's look at an example: 

```
	
	public abstract class Animal {
		public abstract void feed();
	}

	public class Dog extends Animal {
		public void feed() {
			//...
		}
	}

	public class Tiger extends Animal {
		public void feed() {
			//...
		}
	}

```

Let's say we now need to add a feature called ```groom()``` to each  kind of ```Animal```. 

One option is to add it to ```Animal``` as an abstract method:

```
	
	public abstract class Animal {
		public abstract void feed();
		public abstract void groom();
	}

	public class Dog extends Animal {
		public void feed() {
			//...
		}
		
		public void groom() {
			//...
		}
	}

	public class Tiger extends Animal {
		public void feed() {
			//...
		}

		// DUMMY implementation, to keep compiler happy
		public void groom() {
			//...
		}
	}

```

In that case, both ```Dog``` and ```Tiger``` need to provide implementations for ```groom()```. 

Now, ```groom()``` makes sense for a ```Dog```, but not so much for a ```Tiger```. 

However, we are forced to provide a dummy implementation in ```Tiger``` to make the code compile.

Above example does not adhere to ISP.

Let's see how to fix this:

```
	
	public abstract class Animal {
		public abstract void feed();
	}

	public class Pet extends Animal {
		public abstract void groom();
		public void feed() {
			//...
		}
	}

	public class Dog extends Pet {
		public void feed() {
			//...
		}
		
		public void groom() {
			//...
		}
	}

	public class Tiger extends Animal {
		public void feed() {
			//...
		}
	}

```

The new interface ```Pet``` extends the existing ```Animal```, and also adds its own abstract method ```groom()```. Now, ```Dog``` will extend ```Pet```, as it needs both ```feed()``` and ```groom()```, whereas ```Tiger``` chooses to extend just ```Animal``` for ```feed()```.

ISP recommends that you keep your interfaces as small as possible. 

The moment you have a fat interface, any changes to that interface will result in changes in all your implementations. 

### Dependency Inversion Principle (DIP)

The Dependency Inversion Principle states that:

> "Depend upon abstract classes (interfaces), not upon concrete classes"

Let's look at an example of what this means:

```

abstract class OutputDevice {
	void copy(String device) {
		Keyboard keyboard = new Keyboard();
		int character;
		while ((character = keyboard.read()) != -1) {
			if (device.equals("Printer")) {
				writeToPrinter(character);
			} else {
				writeToDevice(character);
			}
		}
	}

	private void writeToDevice(int character) {
		// TODO Auto-generated method stub
		
	}

	private void writeToPrinter(int c) {
		// TODO Auto-generated method stub
		
	}
}


```

What does the ```copy()``` method do?

It reads a character from the keyboard, and then decides where this character needs to go. If it's a printer, write to the printer. Else, send it to the disk.  

The problem here is that as the number of ```OutputDevice``` types increase, the logic of ```copy()``` needs to change every single time. 

Let's look at an alternate implementation:

```

	public interface Reader {
		public char read();
	}

	public interface Writer {
		public void write(char ch);
	}

	void copy(Reader r, Writer w) {
		int c;

		while((c = r.read()) != EOF) {
			w.write(c);
		}
	}

```

```copy()``` method explicitly states its dependencies - ```Reader``` and ```Writer``` interfaces.

It inverts responsibility, and leaves the creation of ```Reader``` and ```Writer``` to its users. 

```copy()``` will not change even when there are new ```Writer``` or ```Reader``` implementations.

This is called Dependency Inversion principle.

Frameworks like Spring make it easy to implement Dependency Inversion.

Do check out our video on this:

[![image info](/images/Capture-022-02.png)](https://www.youtube.com/watch?v=yxf2spbpTSw)

### Summary

In this article, we looked at the five SOLID principles: SRP, OCP, LSP, ISP and DIP. We also looked at a few code examples to understand more about each one of them.