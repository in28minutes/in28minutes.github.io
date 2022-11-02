---
layout:  post
title:  Code Quality Basics - What Is Readability Of Code?
date:    2019-11-14 12:31:19
summary: One activity that you be doing a lot as a programmer, is reading code. That's where the concept of readability comes into the picture. How do you ensure that code written in a project is easily understandable?
categories: SwCodeQuality
permalink:  /code-quality-basics-introduction-to-readability-of-code
image: /images/design-category.png
---

One activity that you be doing a lot as a programmer, is reading code. That's where the concept of readability comes into the picture. How do you ensure that code written in a project is easily understandable?

## You will learn
- What is readability Of code?
- What are the challenges with having bad code?
- How do you improve readability of code?



### Article Series

This is second article in a series of 6 articles on important code quality terminology:
- [1 - What Is Technical Debt?](/introduction-to-technical-debt){:target='_blank'}
- [2 - What Is Readability Of Code?](/code-quality-basics-introduction-to-readability-of-code){:target='_blank'}
- [3 - What Is Code Complexity?](/code-quality-what-is-code-complexity){:target='_blank'}
- [4 - What Is Code Duplication?](/code-quality-what-is-code-duplication){:target='_blank'}
- [5 - What Is Code Coverage?](/code-quality-what-is-code-coverage){:target='_blank'}
- [6 - What Is Legacy Code?](/introduction-to-legacy-code){:target='_blank'}


### Readability Of Code - Example

Have a look at the following code example:

#### Example Code-1

```java

	public Lock isLockAvailableForFile(long clientID, String status, boolean firstScreen, User user, List list) {
		Date sysTime = new Date();
		Lock lock = new Lock();
		if(list.size() > 0 && list.get(0) != null) {
			Object[] o1 = (Object[]) list.get(0);
			String userId = (String) o1[0];
			Date lockTimestamp = (Date) o1[1];
		
			if(userId != null) {
				//The message shown to the user
				String lockMsg = Constants.LOCK_REASON.replaceAll("@@USER@@", userId);

				//if userId is present, then lockTimestamp will also be present
				//72000000 milliseconds equals to 2 hours
				if(sysTime.gettime() - locktimestamp.getTime() > 7200000) {
					//The new user should attain lock only in the first screen
					//If 2 hours expires when user is not present on 1st screen, then user Id...
					if(firstScreen 
						|| userId.equalsIgnoreCase(user.getUserId())) {
						//to set the file access to write mode
						lock.setReadAccess(false);
						Logger.debug(
									 "Write access is permitted to the User for client {0}",
									clientId);
						return lock;
					}

					/*   ...  BLAH BLAH BLAH !!!  ...   */
				}
			}
		}
	}

```

Try and spend some time to see, whether this code is readable. 

Would you like to see such code as part of your application? 

Would you enjoy maintaining an applicaton that has code such as this?

#### Example Code-2

```java

	public Lock isLockAvailableForFile(boolean isFirstScreen, User user, List list) {
		if(isListEmpty(list)) {
			return lockWithWriteAccess();
		}
		Object[] lockObject = (Object[]) list.get(0);
		String userId = (String) lockObject[0];
		Date lockTimestamp = (Date) lockObject[1];

		if(userId == null) {
			return lockWithWriteAccess();
		}

		boolean userHasLockedEarlier = userId.equalsIgnoreCase(user.userId);
		boolean lockPeriodExceeded = new Date().getTime() -
									 lockTimeStamp.getTime > 2 * 60 * 60 * 1000;

		if(userHasLockEarlier)
			return lockWithWriteAccess();
		if(lockPeriodExceeded && isFirstScreen)
			return lockWithWriteAccess();

		return lockWithReadAccess(userId);
	}

```

The second example is refactored from the first example.

You can immediately see, that the second code is much more readable than the first. 


### Improving Readability of Code

What is the difference between these two examples?

#### Readability Is About Proper Naming

Readability of code is all about giving proper names. In general, the readability of code can be improved by 75% by properly naming variables, methods and classes. 

For example, have a look at the extracted methods ```lockWithWriteAccess()``` and ```lockWithReadAccess()```. With proper names such as these, you can identify the functionality very easily. There is almost no need to peek into the implementation details of the method to understand what it does.

#### Single Responsibility Principle

The next important factor is to ensure that we do only a single thing inside a particular method. If a method or a class does one thing only, then it is quite easy to give it a readable name. 

#### Ensure Great Unit Tests

If you have great unit tests in place, you have the freedom to refactor code. You would no longer be worried about breaking functionality.

#### Adhere To Test-Driven Development (TDD)

With TDD, you write the tests before you write the code. You start with an outside-in perspective on your code. You are concerned about the interface, and that helps in writing great code.

Do check out our video on the same topic:

[![image info](images/Capture-071-01.png)](https://www.youtube.com/watch?v=DoX3UiYn85A)

### Summary

In this article, we discussed readability of code and why it is important. We saw an example of code that has poor readability, and what it looked like after refactoring.
