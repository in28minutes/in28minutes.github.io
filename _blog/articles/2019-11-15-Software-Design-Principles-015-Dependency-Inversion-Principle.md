---
layout:  post
title:  Software Design - What is Dependency Inversion Principle?
date:    2019-11-14 12:31:19
summary: Dependency Inversion Principle is one of the important SOLID Principles. Dependency Inversion Principle is implemented by one of the most popular Java frameworks - Spring. What is it all about? How does it help you design good applications?
categories: SwDesign
permalink:  /software-design-dependency-inversion-principle
image: /images/design-category.png
---

Dependency Inversion Principle is one of the important SOLID Principles. Dependency Inversion Principle is implemented by one of the most popular Java frameworks - Spring. What is it all about? How does it help you design good applications?

### You will Learn
- What is Dependency Inversion Principle?
- How are Dependency Inversion Principle and Spring Framework related?
- A few examples of Dependency Inversion Principle in action


### Software Design Principles

This is the last article in a series of articles on important Software Design Principles:

- [1 - Introduction to Four Principles Of Simple Design](/four-principles-of-simple-design){:target='_blank'}
- [2 - Software Design - Separation Of Concerns - with examples](/software-design-seperation-of-concerns-with-examples){:target='_blank'}
- [3 - Object Oriented Software Design - Solid Principles - with examples](/software-design-solid-principles){:target='_blank'}
- [4 - Software Design - Single Responsibility Principle - with examples](/software-design-single-responsibility-principle){:target='_blank'}
- [5 - Software Design - Open Closed Principle - with examples](/software-design-open-closed-principle){:target='_blank'}
- [6 - Software Design - What is Dependency Inversion Principle?](/software-design-dependency-inversion-principle){:target='_blank'}


### What Is Dependency Inversion principle (DIP)?

> "Depend Upon Abstractions (interfaces), not Implementations (concrete classes)"

What does this statement mean? Let's try understanding that with an example:

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

What we have done here is define two separate interfaces, one to provide the ```read()```, and the other to define the ```write()``` methods. 

The responsibility of the ```copy()``` method is quite clear here: it reads from the ```Reader``` ```interface```, and writes whatever it gets to the ```Writer``` ```interface```. 

```copy()``` now focuses only on the actual operation, and it does so by identifying everything else as its dependencies. 

It can now work with any implementation of ```Reader``` and ```Writer``` interfaces.

### DIP and The Spring Framework

DIP is one of the core principles that the Spring Framework enables. Have a look at this example:

```java

	public class BinarySearchImpl {
		public int binarySearch(int[] numbers, int numberToSearchFor) {
			BubbleSortAlgorithm bubbleSortAlgorthm = new BubbleSortAlgorithm();
			int[] sortedNumbers = bubbleSortAlgorithm.sort(numbers);

			//...
		}
	}

```

```BinarySearchImpl``` directly creates an instance of the ```BubbleSortAlgorithm```. Note that ```BubbleSortAlgorithm``` is a dependency of ```BinarySearchImpl```, and as we saw in our previous example, directly accessing it is not a great idea. If you want to switch from a bubble-sort to a quicksort algorithm later, you need to change quite a lot of code inside ```BinarySearchImpl```. 

Better Approach for ```BinarySearchImpl``` is to make use of an interface - sort algorithm. Here is how our modified code would look like:

```java

	public intrface SortAlgorithm {
		public int[] sort(int[] numbers);
	}

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

User of the ```BinarySearchImpl``` class, can also pass in a specific implementation of ```SortAlgorithm```, such as a bubble-sort or a quick-sort implementation. 

> ```BinarySearchImpl``` is **decoupled** from which ```SortAlgorithm``` to use.

> If you use the Spring framework, you could use the ```@Autowired``` annotation with the ```BinarySearchImpl``` class, to automatically auto wire an implementation of an available sort algorithm.

> By applying the DIP, you make your code more testable. The test code could pass in dependency mocks to properly test the code. 

Do check out our video on this:

[![image info](/images/Capture-015-01.png)](https://www.youtube.com/watch?v=PdQ4xAUGitk)   

### Summary

Dependency Inversion is about identifying dependencies and externalizing them. You can use a framework like Spring to simplify Dependency Inversion. DIP makes your code more maintainable, reusable and testable.

