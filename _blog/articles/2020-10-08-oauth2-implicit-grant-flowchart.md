---
layout:  post
title: Oauth2.0 - Implicit grant workflow
date:    2020-10-08 14:47:00
summary:  Let us understand the Oauth2.0 implicit grant workflow
categories:  SpringBootMicroservices
permalink:  /oauth2-implicit-grant-flowchart
image: /images/rest-api-category.png
---

# OAUTH2.0 - Implicit Grant Workflow

Greetings from [in28minutes.com](https://courses.in28minutes.com/).

In this read, we will take a look at OAUTH2.0 and under the implicit grant in the simplest manner (i.e. via a workflow)

## What is OAuth2.0
It is an open authorization protocol that allows accessing the resource owner resources by enabling the client applications (like Facebook, GitHub, etc.) on HTTP services. This protocol was made famous by HTTP Basic authentication wherein the user is required to enter the username and password and was created as a response to the direct authentication pattern. It allows the exchange of resources stored on one site with another site by using the credentials token. It used - 

 - To read the user data from another application
 - Supplies the authorization workflow for web and desktop applications along with mobile devices
 - It uses the authorization code and does not interact with the user credentials

### OAuth2.0 Roles

 1. *Resource Owner* - It is the person who authorizes an application to access their account. The application's access to the user's account is limited to the "*scope*" of the authorization granted (e.g. read or  write access)
 2. *Authorization Server* - Hosts the protected user accounts, and the authorization server verifies the user identity and then issues the access token to the application
 3. *Client* - It is the application that wants to access the user's account

### OAuth2.0 Advantages

 - It is a flexible protocol that relies on SSL to save the user access token
 - It relies on SSL to ensure cryptography protocol is used to ensure the data integrity
 - Allows limited access to the user's data
 - Allows the ability to share user's data without releasing the PI information for the users
 - It is easier to implement and provides stronger authentication

### OAuth2.0 Disadvantages

 - Adding more extensions to the application will require a separate piece of code for each extension

## Implicit Grant

 - This grant is used for mobile and web applications where the confidentiality of the client-secret is not guaranteed
 - It is a redirection-based flow where the access token is given to the user-agent to forward to the application so it may be exposed to the user and other applications on the user’s device
 - This flow does not authenticate the identity of the application and relies on the redirect URI
 - Does not support the refresh tokens
 - Basically works as follows: 
	 - The user is asked to authorize the application, then the authorization server passes the access token back to the user-agent, which passes it to the application.

Let us understand this via a workflow diagram.

![](/images/oauth2-markdowns/implicit-grant-flowchart.jpeg)

