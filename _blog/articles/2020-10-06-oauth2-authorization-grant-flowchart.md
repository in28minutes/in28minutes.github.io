---
layout:  post
title: Oauth2.0 - Authorization grant workflow
date:    2020-10-06 20:40:00
summary:  Let us understand the Oauth2.0 authorization grant workflow
categories:  SpringBootMicroservices
permalink:  /oauth2-authorization-grant-workflow
image: /images/rest-api-category.png
---

# OAUTH2.0 - Authorization Grant Workflow

Greetings from [in28minutes.com](https://courses.in28minutes.com/).

In this read, we will take a look at OAUTH2.0 and under the authorization grant in the simplest manner (i.e. via a workflow)

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

## Authorization Grant

 - It is used with the server-side applications where the source code is not publicly exposed and the client secret confidentiality is maintained
 - This is based on redirection where the application must be capable of interacting with the user's web browser

Now we will describe the authorization code flow.

![](/images/oauth2-markdowns/authorization-grant-flowchart.jpeg)
