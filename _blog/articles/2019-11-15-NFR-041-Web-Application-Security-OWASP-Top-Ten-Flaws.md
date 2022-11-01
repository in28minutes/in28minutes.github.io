---
layout:  post
title: Web Application Security And OWASP - Top Ten Security Flaws
date:    2019-11-14 12:31:19
summary: In this article, we talk about one of the most important non functional requirements - security. We focus on OWASP Top 10.
categories: SwArchitecture
permalink:  /web-application-security-owasp-top-ten
image: /images/architecture.png
---

In this article, we talk about one of the most important non functional requirements - security. We focus on OWASP Top 10.

### What you will learn
- Why is Application Security Important?
- What is OWASP?
- What are the different OWASP best practices?
- How do you prevent security flaws in your applications?
- What are the important security principles to follow?




### Non Functional Requirements and Microservices

This is the third in a series of articles on Non Functional Requirements:

- [1 - Microservices Architectures - Non Functional Requirements](/non-functional-requirements-in-microservices-architectures){:target='_blank'}
- [2 - Security](/non-functional-requirements-in-microservices-introduction-to-Security){:target='_blank'}
- [3 - Web Application Security And OWASP - Top Ten Security Flaws](/web-application-security-owasp-top-ten){:target='_blank'}
- [4 - Maintainability](/non-functional-requirements-in-microservices-introduction-to-Maintainability){:target='_blank'}
- [5 - Scalability](/non-functional-requirements-in-microservices-introduction-to-Scalability){:target='_blank'}
- [6 - Performance](/non-functional-requirements-in-microservices-introduction-to-performance){:target='_blank'}
- [7 - Reusability](/non-functional-requirements-in-microservices-introduction-to-Reusability){:target='_blank'}
- [8 - Reliability](/non-functional-requirements-in-microservices-introduction-to-Reliability){:target='_blank'}
- [9 - Modularity](/modularity-non-functional-requirement-in-microservices){:target='_blank'}
- [10 - Availability](/availability-non-functional-requirement-in-microservices){:target='_blank'}
- [11 - Portability](/non-functional-requirements-in-microservices-introduction-to-portability){:target='_blank'}


### Why is Application Security Important?

As they say, a chain is only as strong as its weakest link. Same is the case with application security, as a small security flaw can render an application with robust architecture, vulnerable.

### Security And The OWASP Top 10

**OWASP** stands for **Open Web Application Security Project**. It is a non-profit organization that regularly publishes the **OWASP Top 10**, a listing of the major security flaws in web applications.

![image info](/images/Capture-041-02.png)

For example, one of the lists published by them in the year 2016, looks something like this:

![image info](/images/Capture-041-03.png)

For each of the above flaws, we discuss what it exactly is, and how to build an application without this specific flaw.

### SQL Injection

SQL injection is one of the biggest vulnerabilities experienced across web applications. 

#### Example Of SQL Injection

Have a look at the following piece of code:

```java

	public Person find_Unsecure(String inputFromUser) {
		return jdbcTemplate.queryForObject(
							"select * from Person where name=" + inputFromUser,
							new BeanPropertyRowMapper<Person>(Person.class));
	}

```

In the case of the method ```find_Unsecure()```, we are taking ```inputFromUser``` and directly appending it to the SQL query statement. 

What would happen if ```inputFromUser``` is given as ```"Ranga or 1=1"```? 

The query would effectively become ```"select * from Person where name=Ranga or 1=1"```. Every row from the table Person would be returned!

This is what is known as **SQL injection**. 

In a way we are protected, because we use the ```BeanPropertyRowMapper``` and we only try to map it to a single ```Person```. 

However if we use it to map to something like a ```List<Person>```, this code would have a serious security flaw.

#### Avoiding SQL Injection

One way to avoid exposing such a security flaw would be to validate ```userInputData``` before making it part of the SQL query. SQL does offer you a way to do that - **parameterized queries**. 

Before inserting the query parameter, you prefix it with a ```?```, and make sure the value in its entirety is passed in. 

Code to do that would look like this:

```java

	public Person find_Secure(String inputFromUser) {
		return jdbcTemplate.queryForObject(
							"select * from Person where name=?", 
							new Object[] {inputFromUser},
							new BeanPropertyRowMapper<Person>(Person.class));
	}

```

If ```inputFromUser``` is given as ```"Ranga or 1=1"``` to ```find_Secure()```, the query would get it as ```"select * from Person where name='Ranga or 1=1'"```. The parameter ```Ranga or 1=1``` is taken as a single entity.

This was one possible type of SQL injection, and a simple solution to resolve the same. 

#### Other Ways Of Injection

The fact of the matter is, SQL is just one of the ways injection can happen. There are a multitude of other ways in which injections occur: 
- XML & XPath can easily be used to cause injection.
- If user data is received and saved in logs, then that can be a source of this flaw. 
- If user data is taken and used to form operating system commands, that can be misused too. 
- Malicious script can be injected into your frontend JavaScript code. This is called Cross Site Scripting (XSS). We look at it a little later.

![image info](/images/Capture-041-04.png)

#### Prevention 

What are the ways to prevent SQL Injection? 

We just saw that using parameterized queries is one good way out. 

In general, injection can be prevented by validating user input
- You could for example, restrict the set of characters that a user can input to the application - using a white list.
- Avoid directly inserting user input into system commands without preprocessing or checking.


### Broken Authentication

Broken authentication occurs when a user of your application takes the relevant information - possibly a user name and/or password from one website, and reuses it on other sites, including yours. 

#### Preventing Broken Authentication

How do we prevent broken authentication? 

The following diagram outlines an approach for this:

![image info](/images/Capture-041-05.png)

Here are the details:
* You can append a random string to user names. That ensures the resulting string is unique and not easily guessable. This prevents a user from having the same user name across multiple websites.
* When a user provides an invalid user name or password, return as little information as possible. You could simply say "Invalid Credentials", instead of "Invalid Username" or "Invalid Password". Avoid providing detailed information in authentication-related messages.
* Have an auto log-off feature for an application user, when a browser session is terminated. This prevents abuse of authentication credentials across websites. 

### Session Management

Whenever we talk about web applications, we invariably discuss sessions. 

You know that the internet is designed around the HTTP protocol, which is stateless. 

The question is, how do we identify that a request on a time-line is coming from the same user?

![image info](/images/Capture-041-06.png)

We have a number of mechanisms to do that:

#### URL Rewrite

What do we do during URL rewrite?

![image info](/images/Capture-041-07.png)

Whatever session ID is created for a user, is included in the URL itself. This is visible in the address field of a browser window that the user may be using to access the URL.

##### Problems With URL Rewrite

Here are the potential problems with this approach: 
* Vulnerable To Sniffing: Since it is part of the URL, its contents can be sniffed out by an agent listening into your computer or network. The session ID can then be extracted and misused. 
* Multiple Logging: Any request from a user to the web application goes through multiple intermediate systems. Since the request is logged at each node for diagnostic purposes, the session ID can be extracted from such logs and abused.
* Whenever you visit a third party site, the URL is sent as a referral URl in a Request header. 

##### Solutions For URL Rewrite

If you want to do URL rewrite, atleast use the HTTPS protocol, instead of the vulnerable HTTP. This ensures that every part of your HTTP request is encrypted. 

The recommended solution is to use other session management approaches.

#### Basic Authentication

The second possibility is to use basic authentication.

![image info](/images/Capture-041-08.png)

In this approach, we send Base 64 encoded user name and password along with the HTTP Request.  Base-64 is not recommended for web applications, since it has severe security flaws.

#### Cookies

The last approach to session management we use is Cookies. This is one of the most popular approaches.

![image info](/images/Capture-041-09.png)

A cookie is nothing but a file in the browser, which is set to identify a session. When a cookie comes back from the user as part of a browser session, you identify the request as being associated to that user. 

##### Recommendations For Cookies

Cookies also have vulnerabilities. You can use the following options to minimize risk:

###### Set Cookie Domain

Make sure you set the domain on the cookie. The domain specifies the set of hosts, to which this cookie can be sent to. The cookie cannot be sent to other URLs.

###### Set Cookie Path

The path specifies which parts of the website the cookie can be sent to.

###### Set Expiration Date

Make sure you set an expiration date on the cookie, as it prevents requests being associated with a user after the expiration date. Set it to a few hours at the most.

###### Set Secure Flag

If you are running a HTTPS site, then make sure that the cookies are set as secure. This ensures the cookie can only be sent to secure websites running HTTPS, such as yours. 

### Cross Site Scripting (XSS)

Let's now turn our attention towards Cross Site Scripting, also known as XSS. XSS is actually one form of injection, somewhat similar to the SQL injection we discussed earlier. 

![image info](/images/Capture-041-10.png)

We look at: 
* The causes of XSS 
* The types of XSS injections 
* The possible effects of XSS 
* The solutions available to tackle XSS

#### The Causes Of XSS

![image info](/images/Capture-041-11.png)

The major cause of XSS is invalid data. Invalid data could be coming in from the user, who has an intent of hacking the system, and that's where injection happens. Invalid data could be sourced from a database, which could be presented at a later point in time, out of context. Invalid data could also be passed into the system through external services. A security flaw in such a service could be sourcing malicious data to your application.

#### Types Of XSS

![image info](/images/Capture-041-12.png)

The possible types of XSS are:

##### Stored XSS

This happens when invalid data entered by a user is stored in the database. The problem arises when this data is presented to the user, at a later point in time.

##### Reflected XSS

This XSS happens when you take invalid data from a user, and directly present it on the screen at a later point in time.

##### DOM XSS

This occurs when we take invalid data from a user and process it in JavaScript code, within the DOM.

#### Possible Abuses With XSS

Let's now look at the possible effects of XSS.

![image info](/images/Capture-041-13.png) 

##### Stealing Session Cookies

One of the things a hacker can do using XSS, is steal your session cookies. He could insert some JavaScript code and try to compromise your data.

##### Page Content Rewrite

Because a hacker has access to JavaScript through XSS, it is possible to rewrite the page contents. For example, if XSS is used to hack a financial application, the balance shown can be tampered with.

##### Logging Keystrokes

Since there is access to Javscript through XSS, it is possible to capture the keystrokes patterns. This could then be used to steal the user name and password by reconstructing them.

#### Solutions To XSS

Let's now look at the remedies available to tackle system abuse through XSS.

![image info](/images/Capture-041-14.png) 

##### Validate Untrusted Data

Make sure that you validate untrusted data against a white-list of characters. 

##### Encode All Data

Make sure you encode all the data coming in, such as transforming ```<``` to ```&lt;```. This would prevent certain character sequences to be treated as special HTML tags, for example. Also, encode even trusted data.

Encoding should also be contextual; the kind of encoding depending on where the data is going to. For example, the type of encoding depends on whether the data is being sent to CSS styling, HTML markup, or JavaScript logic.

Ideally, contextual encoding should be built into the frameworks that you make use of in the application. 

##### Content Security Policy

When in doubt about untrusted data, lookup the content security policy for your application.

##### XSS Prevention Cheat Sheet

When faced with doubt over how to detect or handle XSS, refer to the XSS prevention cheat sheet for your application.

### Insecure Direct Object References

Insecure direct object reference occurs when a user changes the browser link from a resource he has access to, to another that he has no access to. 

For example, let's say the user has access to the resource at URL ```/account/123```. He changes the link in browser to ```/account/125```. 

If the system allows him to access this other resource, then this is an insecure direct object reference. 

![image info](/images/Capture-041-15.png)

#### Preventing This Vulnerability

The way you can prevent insecure direct object references is two-pronged:

##### Authorization

Make sure that before providing access to a resource, the user is authorized to access it. 

##### Use Object References In URLs

Avoid using direct, readable IDs of resources within URLs. For example, the ID ```123``` is a bad component of the formed URL ```/account/123```. Use some kind of an object reference instead.

Try and form a URL through obscure components, so that it is difficult to predict it from outside the system.

### Security Misconfiguration

One of the things that a developer could say about security misconfiguration, is say "It's not in my hands!". They probably think it's up to the administrator, the server configuration team, or the operations team to handle such issues. They could say it's the responsibility of the team that deploys the operating environment.

![image info](/images/Capture-041-16.png)

The truth is they should be very aware of it, and take all possible steps to prevent it. Not only that, you must pass on any information you have regarding security misconfiguration in the web servers, app servers or the deployment environment to the operations team, and follow it up with activities to patch up the flaws.

What are the common instances of these flaws? 

They include common configuration errors on the admin consoles. For  example, popularly use web servers such as WebSphere provide admin consoles, that having default accounts. 
- You could start off with deleting the default accounts from each of the deployment stages: development, qa, staging and production. 
- Make sure that the admin console is not available outside the enterprise. It should only be accessible from the intranet.

#### Preventing Security Misconfiguration

* Make sure you have the latest versions of software installations, for operating systems, languages, frameworks, etc. 
* Ensure that default accounts in admin consoles are eliminated throughout the deployment pipeline.
* Have a similar execution environment throughout all stages of deployment - development, qa, staging and production. In all of these, employ the exact same security measures.  

### Sensitive Data Exposure

The next security flaw we focus on is called Sensitive Data Exposure.

![image info](/images/Capture-041-17.png)

#### What Causes Sensitive Data Exposure?

* One glaring instance of such a flaw is storing the user name and password credentials directly in a database, without using any encryption. Anyone who has sufficient access can read these credentials and compromise user accounts. 
* A related flaw could be that the encryption algorithm used on the credentials is not strong enough. As a result, anyone can decrypt the stored values.

#### Preventing Sensitive Data Exposure

##### Use One Way Functions

When a one way function is used to encrypt data, it is not possible to recover the original data values in any way. 

The way to use such a function is as follows: Store the encrypted password in the database. When user logs in, encrypt the candidate value and compare it the stored encrypted value. 

##### Add Salt During Hashing

Another way is to add some salt while computing the hash value. Salt refers to a random string that is appended to credentials entered by the user. If the password entered is "abcdefgh" (clearly a weak password), a salt such as "12345678" is appended to it, and the entire resulting string is hashed and stored in the database. The salt is generally also stored in the database, and can be used while validating the user.

The advantage of this approach is that even if the password used is the same on two websites, the encryption will be different on account of the salt.

###  Missing Function Level Access Controls

![image info](/images/Capture-041-18.png)

Whenever we talk about user security, the focus has always been authentication and authorization. The attention is on determining: 
* Authentication: Is this the right user, and is he actually who he claims to be?
* Authorization: Does this user have the access to the resource she requests?

Flaws described as missing function level access controls, happens when you don't have proper authorizations in place. 

#### Preventing This Flaw

##### Complete Mediation Principle

Implement a Complete Mediation Principle. Before providing a resource to a user's request, check if the user has authorization for it. Implement such access checking in a centralized location. 

##### Have Well Defined Roles

Clearly lay out the roles of different users, and enumerate the resources for which access is approved. 

### Insufficient Transport Layer Security

![image info](/images/Capture-041-19.png)

This flaw arises when the request that you send across the network, is not secure enough. Things such as session IDs, passwords and other sensitive data on the submission page need to be sent out with proper encryption. If such encryption is not done, then it poses a problem, especially with websites that have both secure (access only to privileged users) and unsecure parts (access to anybody). 

#### Preventing This Flaw

![image info](/images/Capture-041-20.png)

#### Use TLS

Make sure you use the version of HTTP that uses transport layer security (TLS), namely HTTPS. 

* Ensure that you use TLS on popups
* Always redirect only to HTTPs websites. That way, you will not end up sending a session ID or a cookie insecurely. on a redirect from a secure page.

#### Use Secure Cookies

Mark all your cookies as secure, as this ensures they are sent only to trusted websites. Also, make it a point to have trusted certificates for your cookies.

#### Regerate Session IDs And Reissue Tokens

It is a very secure practice to terminate a session and regenerate the session ID, when a user from a secure to an insecure part of the website. Also, it is good to reissue security tokens during this process.

### Cross Site Request Forgery

![image info](/images/Capture-041-21.png)

Let's say you have already logged in to a website that offers banking services, and from there visit a forum page. What would happen if the forum uses the existing session ID to fire in an AJAX request, or fire a request to an unauthorized URL? 

The banking website session and its cookies are active in your browser, as you haven't logged out. This can lead to abuse, called **Cross Site Request Forgery (CSRF)**. 

#### Preventing CSRF

##### Generate Unique Token

Make sure you generate a random unique token with every request, which cannot be predicted by a system from outside. Allow the next request, only if the token has the right value.

This token is called a CSRF Protection token, and is typically a hidden form field. Such a hidden field is present in a response generated by the website for the initial request. Unless you send that form field back, the next request cannot be successful. 

#####  Re-authenticate Users

The second approach is to re-authenticate the user when a significant action is requested to be performed. Such important actions could be a transfer of USD 100,000 in a banking application,  for instance.

##### Use Security Frameworks

While building the web application, make sure to use frameworks such as Spring Security, or OWASP Security Guard. These help you automate the implementation of remedial measures for CSRF flaws.

### Avoid Using Known Vulnerable Components

![image info](/images/Capture-041-22.png)

If your web application makes use of a framework or component with a well known security flaw, then a hacker can exploit that flaw to compromise your system. 

All he needs to know is that you make use of that framework or component. 

#### Preventing These Flaws

##### Use Latest Versions

Keep track of successive software releases of the frameworks and components you use in your application. Install updated versions whenever they release.

##### Approved Version Lists

It is a good practice to only use software and frameworks from an approved list of versions of software, that are known to be secure. Such a list could be maintained by the Security Team, and updated from time to time.

##### Create Wrapper Services around frameworks

Create Wrapper service around frameworks without exposing complete framework features. Expose/Enable only the features that are used in your application.

### Unavailed Redirects And Forwards

![image info](/images/Capture-041-23.png)

The next flaw we concern ourselves with is that of unavailed redirects and forwards. A lot of web page URLs also have a redirect component within them. An example would be ```www.trustedsite.com/redirect.jsp?url=HACKER_URL```. The URL to which the redirect is done could be a malicious one. 

Any hacker could easily exploit it. The original link appears to be describing a secure site such as bank website. But in effect, it would redirect the request to a malicious URL, where a hacker might be waiting. 

#### Preventing These Flaws

##### Validate Redirect URLs

Make sure you also validate the redirect URL that is provided with the original URL. 

Preferably, avoid using direct URL mappings. Use an object mapping, to a stored string identifier instead. Based on the content of the string, redirect only to another secure URL that you trust. 

##### Show Messages

Show a message to the user regarding the redirect. 

For example, you may want to indicate to the user that he is being redirected to an insecure website, by pausing any further progress. You then ask him to confirm going ahead, or to abandon the request altogether.

### Principles Of Application Security

There are six underlying principles of application security, that are made use of while suggesting recommendations for the OWASP Top 10.

![image info](/images/Capture-041-24.png)

Let us look at each of them in some detail.

#### Assign Least Privileges

The architects and designers must start the design of the system with security requirements in mind. Security must feature as an important project requirement from the initial stages itself. There has to be clear picture of the roles of various users, and the accesses that they need. The idea is to have as few accesses to each role as possible, for any given user.

This applies not just to the application, but also to the infrastructure. This includes the application database, the servers where the system is deployed, and other similar things. The concept of minimized mapping of access to roles for each user, is equally relevant here. 

#### Have Complete Mediation

Have an approach to application security that is similar to a King's Fort, where everyone everyone has to pass through one main gate. Apply a well-implemented security filter at that gate, to test the role and access of each user. 

#### Have Defence In Depth

This concept boils down to having multiple levels of security. For instance, you need to have security built into your architecture at the application, network and operating system levels. 

#### Trust Nothing

Make sure that you validate every piece of data or information that comes into the system . It does not matter if it came from the user domain, or from another system. Ensure that you sanitize all external data.

#### Have Economy Of Mechanism

This says that we need to keep the architecture of the system, simple. The idea is that simple systems are easier to protect.

#### Ensure Openness Of Design

Avoid trying to implement system security by making the design obscure. If that were the case, a hacker might identify a flaw and compromise the system. 

This principle is the opposite of the misplaced idea of "Security Through Obscurity". 

The more open a design, the easier it is to identify and address security flaws.

Do check out our video on this:

[![image info](/images/Capture-041-01.png)](https://www.youtube.com/watch?v=j5PuYFCS0Iw)

### Summary

In this article, we looked ath the various security flaws listed in OWASP Top 10. For each type of security flaw, we looked at what the flaw was, how it could be exploited by malicious users, and also the mechanisms and good practices to follow to prevent them.

