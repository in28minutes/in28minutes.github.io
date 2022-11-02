---
layout:  post
title: Understanding jwt token
date:    2020-11-12 13:00:00
summary:  Let us understand the json web tokens
categories:  SpringBootMicroservices
permalink:  /understanding-jwt-token
image: /images/rest-api-category.png
---

# Understanding JWT token

Greetings from [in28minutes.com](https://courses.in28minutes.com/). In this read, we will take a look at the basic overview to JWT (i.e. JSON Web tokens).

# What is the JWT token?

JSON Web tokes also known as "*jot*" are the easy to send read-only signed "claims" between the different services. *Claims* in the jot token are the bits of user data that is required by someone else for the verification purpose but not alter it. These claims in the JWT token are signed by a key for the protection purpose

# How the JWT token looks like?

The JWT token structure consists of three parts i.e. Header, Payload, and Signature separate by a period (`.`) symbol.
```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9           // Header
.eyJrZXkiOiJ2YWwiLCJpYXQiOjE0MjI2MDU0NDV9      // Payload
.eUiabuiKv-8PYk2AkGY4Fb5KMZeorYBLw261JPQD5lM   // Signature
```
Let us go ahead and understand each part in a little brief -

 - **Header** - It is the first encoded string part of the jot token that describes the token along with the hashing algorithm uses
 - **Payload** - It is the second encoded string part of the jot token that describes the token core. It basically contains the data you want to store in the jot token. It contains information like the audience, subject, token expiration time, etc
 - **Signature** - It is the final encoded string part of the jot token that describes a signature generated based on the header and the payload and will be used to verify whether the jot token is valid or not

# Claims in JWT token?

**Claims** are the predefined key and their values in the JWT/jot token -

 1. ***iss*** - Refer to the issuer of the jot token
 2. ***exp*** - Refer to the expiration time (in seconds) of the jot token
 3. ***iat*** - Refer to the issuance time of the jwt token. Can be used to determine the age of the jot token
 4. ***nbf*** - Refer to the field in the jwt token that determines the future time when the jot token will become active
 5. ***sub*** - Refer to the subject field
 6. ***aud*** - Refer to the audience field
 7. ***jti*** - Refer to the unique identifier of the jot token so that the token can't be reused

In case you would like to read more take a look at this [link](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#RegisteredClaimName).
