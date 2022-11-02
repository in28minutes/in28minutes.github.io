---
layout:     post
title:      Microservices with Spring Boot and Java - Part 3 - Example 2 - Creating Currency Conversion Microservice
date:       2022-07-01 12:31:19
summary:    Let's learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. In part 3 of this series, we will focus on Creating Currency Conversion Microservice.
categories:  SpringBootMicroservices
permalink:  /creating-microservices-with-spring-boot-part-3-currency-conversion-microservice
image: /images/microservices-category.png
---

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

Let's learn the basics of microservices and microservices architectures. We will also start looking at a basic implementation of a microservice with Spring Boot. We will create a couple of microservices and get them to talk to each other using Eureka Naming Server and Ribbon for Client Side Load Balancing. 

![Image](/images/spring-boot-microservice-currency-conversion-service-project-structure.png "Project Structure") 

Here is the Microservice Series Outline:
Microservices with Spring Boot 
- Part 1 - [Getting Started with Microservices Architecture](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-1-getting-started){:target="_blank"}
- Part 2 - [Creating Forex Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-2-forex-microservice){:target="_blank"}
- Current Part - Part 3 - Creating Currency Conversion Microservice
- Part 4 - [Using Ribbon for Load Balancing](http://www.springboottutorial.com/microservices-with-spring-boot-part-4-ribbon-for-load-balancing){:target="_blank"}
- Part 5 - [Using Eureka Naming Server](http://www.springboottutorial.com/microservices-with-spring-boot-part-5-eureka-naming-server){:target="_blank"}

This is part 3 of this series. In this part, we will focus on creating the Currency Conversion Microservice.
 
## You will learn
- How to create a microservice with Spring Boot?
- How to use RestTemplate to execute a REST Service?
- How to use Feign to execute a REST Service?
- What are the advantages of Feign over RestTemplate?



## Resources Overview

Currency Conversion Service (CCS) can convert a bucket of currencies into another currency. It uses the Forex Service to get current currency exchange values. CCS is the Service Consumer.

An example request and response is shown below:

GET to http://localhost:8100/currency-converter/from/EUR/to/INR/quantity/10000

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  quantity: 10000,
  totalCalculatedAmount: 750000,
  port: 8000,
}
```

The request above is to find the value of 10000 EUR in INR. The totalCalculatedAmount is 750000 INR.

The diagram below shows the communication between CCS and FS.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

## Project Code Structure

Following screenshot shows the structure of the project we will create.

![Image](/images/spring-boot-microservice-currency-conversion-service-project-structure.png "Project Structure") 

A few details:
- `SpringBootMicroserviceCurrencyConversionApplication.java` - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter Web.
- `CurrencyConversionBean.java` - Bean to hold the response that we want to send out.
- `CurrencyExchangeServiceProxy.java` - This will be the Feign Proxy to call the Forex Service.
- `CurrencyConversionController.java` - Spring Rest Controller exposing the currency conversion service. This will use the `CurrencyExchangeServiceProxy` to call the Forex Service.

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-basic-microservice

## Bootstrapping with Spring Initializr

Creating a Microservice with Spring Initializr is a cake walk. 

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

You can create a wide variety of projects using Spring Initializr.

![Image](/images/Spring-Initializr-Web-JPA.png "Web, JPA, Hibernate and Developer Tools")

Following steps have to be done for a Web Services project

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.springboot.microservice.example.currencyconversion` as Group
  - Choose `spring-boot-microservice-currency-conversion` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
    - Feign
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

> Do not forget to choose Feign in the dependencies

## Creating CurrencyConversionBean

This is a simple bean for creating the response.

```
public class CurrencyConversionBean {
  private Long id;
  private String from;
  private String to;
  private BigDecimal conversionMultiple;
  private BigDecimal quantity;
  private BigDecimal totalCalculatedAmount;
  private int port;

  public CurrencyConversionBean() {

  }

  public CurrencyConversionBean(Long id, String from, String to, BigDecimal conversionMultiple, BigDecimal quantity,
      BigDecimal totalCalculatedAmount, int port) {
    super();
    this.id = id;
    this.from = from;
    this.to = to;
    this.conversionMultiple = conversionMultiple;
    this.quantity = quantity;
    this.totalCalculatedAmount = totalCalculatedAmount;
    this.port = port;
  }

```

## Implement REST Client with RestTemplate

The code below shows the implementation of REST Client to call the forex service and process the response. As you can see there is a lot of code that needs to be written for making a simple service call.

```
@RestController
public class CurrencyConversionController {

  private Logger logger = LoggerFactory.getLogger(this.getClass());

  @GetMapping("/currency-converter/from/{from}/to/{to}/quantity/{quantity}")
  public CurrencyConversionBean convertCurrency(@PathVariable String from, @PathVariable String to,
      @PathVariable BigDecimal quantity) {

    Map<String, String> uriVariables = new HashMap<>();
    uriVariables.put("from", from);
    uriVariables.put("to", to);

    ResponseEntity<CurrencyConversionBean> responseEntity = new RestTemplate().getForEntity(
        "http://localhost:8000/currency-exchange/from/{from}/to/{to}", CurrencyConversionBean.class,
        uriVariables);

    CurrencyConversionBean response = responseEntity.getBody();

    return new CurrencyConversionBean(response.getId(), from, to, response.getConversionMultiple(), quantity,
        quantity.multiply(response.getConversionMultiple()), response.getPort());
  }

```

## Configure application name and port

/spring-boot-microservice-currency-conversion-service/src/main/resources/application.properties

```properties
spring.application.name=currency-conversion-service
server.port=8100
```

We are assigning an application name as well as a default port of `8100`.

## Testing the Microservice

Start the Spring Boot Application by launching SpringBootMicroserviceCurrencyConversionApplication.java


GET to `http://localhost:8100/currency-converter/from/EUR/to/INR/quantity/10000`

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  quantity: 10000,
  totalCalculatedAmount: 750000,
  port: 8000,
}
```

## Creating a Feign Proxy

Feign provide a better alternative to RestTemplate to call REST API.

/spring-boot-microservice-currency-conversion-service/src/main/java/com/in28minutes/springboot/microservice/example/currencyconversion/CurrencyExchangeServiceProxy.java

```java
package com.in28minutes.springboot.microservice.example.currencyconversion;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="forex-service" url="localhost:8000")
public interface CurrencyExchangeServiceProxy {
  @GetMapping("/currency-exchange/from/{from}/to/{to}")
  public CurrencyConversionBean retrieveExchangeValue
    (@PathVariable("from") String from, @PathVariable("to") String to);
}
```

We first define a simple proxy. 
- `@FeignClient(name="forex-service" url="localhost:8100")` - Declares that this is a Feign Client and the url at which forex-service is present is `localhost:8100`
- `@GetMapping("/currency-exchange/from/{from}/to/{to}")` - URI of the service we would want to consume


## Using Feign Proxy from the Microservice Controller

Making the call using the proxy is very simple. You can see it in action in the code below. All that we had to do was to autowire the proxy and use to call the method.

```
  @Autowired
  private CurrencyExchangeServiceProxy proxy;

  @GetMapping("/currency-converter-feign/from/{from}/to/{to}/quantity/{quantity}")
  public CurrencyConversionBean convertCurrencyFeign(@PathVariable String from, @PathVariable String to,
      @PathVariable BigDecimal quantity) {

    CurrencyConversionBean response = proxy.retrieveExchangeValue(from, to);

    logger.info("{}", response);

    return new CurrencyConversionBean(response.getId(), from, to, response.getConversionMultiple(), quantity,
        quantity.multiply(response.getConversionMultiple()), response.getPort());
  }

```

## Enable Feign Clients

Before we are able to use Feign, we need to enable it by using `@EnableFeignClients` annotation on the appropriate package where the client proxies are defined.

```
@SpringBootApplication
@EnableFeignClients("com.in28minutes.springboot.microservice.example.currencyconversion")
@EnableDiscoveryClient
public class SpringBootMicroserviceCurrencyConversionApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBootMicroserviceCurrencyConversionApplication.class, args);
  }
}
```

## Testing the Microservice using Feign

GET to http://localhost:8100/currency-converter-feign/from/EUR/to/INR/quantity/10000

```json
{
  id: 10002,
  from: "EUR",
  to: "INR",
  conversionMultiple: 75,
  quantity: 10000,
  totalCalculatedAmount: 750000,
  port: 8000,
}
```

## Summary

We have now created two microservices and established communication between them.

![Image](/images/Spring-Boot-Microservice-1-CCS-FS.png "Spring-Boot-Microservice-1-CCS-FS") 

However, we are hardcoding the url for FS in CCS. That means when new instances of FS are launched up we have no way to distribute load between them.


## Next Steps

In the next part, we will enable client side load distribution using Ribbon.

Microservices with Spring Boot 
- Part 1 - [Getting Started with Microservices Architecture](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-1-getting-started){:target="_blank"}
- Part 2 - [Creating Forex Microservice](http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-2-forex-microservice){:target="_blank"}
- Current Part - Part 3 - Creating Currency Conversion Microservice
- Part 4 - [Using Ribbon for Load Balancing](http://www.springboottutorial.com/microservices-with-spring-boot-part-4-ribbon-for-load-balancing){:target="_blank"}
- Part 5 - [Using Eureka Naming Server](http://www.springboottutorial.com/microservices-with-spring-boot-part-5-eureka-naming-server){:target="_blank"}


## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-basic-microservice
