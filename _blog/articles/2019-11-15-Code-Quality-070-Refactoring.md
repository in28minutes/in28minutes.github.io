---
layout:  post
title:  Code Quality Basics - What Is Refactoring?
date:    2019-11-14 12:31:19
summary: As you make enhancements to your source code, how do you ensure that you are adhering to all the standards? What is Refactoring? How can you refactor your code?
categories: SwCodeQuality
permalink:  /code-quality-basics-introduction-to-refactoring
image: /images/design-category.png
---

As you make enhancements to your source code, how do you ensure that you are adhering to all the standards? What is Refactoring? How can you refactor your code?

## You will learn
- What is code refactoring?
- What are the challenges with having bad code?
- Why should you refactor code?
- What are the best practices in refactoring code?



## Article Series

This is the seventh article in a series of eight articles on Code Quality
- [1 - Introduction To Code Quality](/introduction-to-code-quality){:target='_blank'}
- [2 - Introduction To Coding Standards - Java examples](/coding-standards-with-java-examples){:target='_blank'}
- [3 - Five Important Coding Standards](/code-quality-five-important-coding-standards){:target='_blank'}
- [4 - Best Practices in Static Code Analysis with SonarQube](/static-code-analysis-and-code-quality-best-practices-sonarqube){:target='_blank'}
- [5 - Code Review Best Practices](/code-review-best-practices){:target='_blank'}
- [6 - What Are Code Smells?](/code-quality-code-smells){:target='_blank'}
- [7 - What Is Refactoring?](/code-quality-basics-introduction-to-refactoring){:target='_blank'}
- [8 - Continuous Integration - 5 Important Questions or Tips](/five-tips-on-continuous-integration-best-practices){:target='_blank'}


### Why Refactoring?

Suppose you end up working in  a project which has code that looks like this:

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

How easy do you think it is to maintain this kind of code? 

Let's say you need to make a change in the piece of code shown above. Is it straightforward, or is it a difficult task?

One thing you can do with difficult code such as this, is to improve its structure, without changing its functionality. Such a transformation is called **refactoring**. 

Here is what the above code will look like when refactored:

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

### What is Refactoring?

> Refactoring involves altering the structure of code, without changing its behavior. 

The goals of refactoring include making the code have less duplication, and making it more readable. 

It may sound very easy, but refactoring is actually a very difficult task. The most difficult part is deciding on a sequence of refactoring steps. 

In the example we saw above, how can you be sure that making the alterations shown, will keep the functionality of the code intact?

#### Build A Test Bed

The only way you can refactor with confidence, is by building a test bed.  Of course, this may not be necessary for very basic forms of refactoring, such as renaming a variable, or extracting a method. Except for such basic refactoring, one would need to make sure that there are very good unit tests in place, to test the code. 

If such unit tests are not available, then you need to write tests first. When you have tests, you can improve the code in small steps. At each stage, make the changes, and run the set of tests. If everything turns out fine, then go ahead with the next refactoring step. 

Do check out our video on the same topic:

[![image info](images/Capture-070-01.png)](https://www.youtube.com/watch?v=2kxgoBZw9Xc)

### Summary

**Continuous Refactoring**, aided by tests, leads to clean code. To be able to continuously refactor, you need good tests. With exprerience, you get better at refactoring, and will figure out a good sequence of steps to approach refactoring, in general.
