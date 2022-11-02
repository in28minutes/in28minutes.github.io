---
layout:     post
title:      Spring Boot and Swagger - Documenting RESTful Services (REST API)
date:       2022-07-02 12:31:19
summary:    Learn how to use Swagger with Spring Boot to document your RESTful services. We will learn how to expose automated swagger documentation from your REST API. We will also add documentation to the REST API with swagger annotations.
categories:  SpringBoot
permalink:  /spring-boot-swagger-documentation-for-rest-services
image: /images/rest-api-category.png
---

This guide will help you use Swagger with Spring Boot to document your RESTful services. We will learn how to expose automated swagger documentation from your application. We will also add documentation to the REST API with swagger annotations.

![Image](/images/SwaggerDocumentation-1-HomePage.png "SwaggerDocumentation-1-HomePage") 

 
## You will learn
- What is the need for documenting your RESTful services?
- How do you document RESTful web services?
- Why Swagger?
- How can you use Swagger UI?
- How do you automate generation of Swagger Documentation from RESTful Web Services?
- How do you add custom information to Swagger Documentation generated from RESTful Web Services?
- What is Swagger-UI?



## Project Code Structure

Following screen shot shows the structure of the project we will create.

![Image](/images/SpringBootSwaggerDocumentation-ProjectStructure.png "SpringBootSwaggerDocumentation-ProjectStructure") 

A few details:
- SpringBoot2RestServiceApplication.java - The Spring Boot Application class generated with Spring Initializer. This class acts as the launching point for application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter AOP.
- `Student.java` - Student JPA Entity
- StudentRepository.java - Student JPA Repository. This is created using Spring Data JpaRepository.
- StudentResource.java - Spring Rest Controller exposing all services on the student resource.
- data.sql - Initial data for the student table. Spring Boot would execute this script after the tables are created from the entities.
- ApiDocumentationConfig.java - Meta Information about the API that will included in the documentation.
- SwaggerConfig.java - Contains the Swagger Configuration for generating documentation

## Tools you will need
- Maven 3.0+ is your build tool
- Your favorite IDE. We use Eclipse.
- JDK 1.8+

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-swagger

## Why do we need to document your RESTful API?

The most important design principle for RESTful Services is 
> Think about consumer of the API.

How does the consumer know
- What is format of the request?
- What content types your API supports?
- What is the structure of the response?
- Do you use HATEOAS?
- How to test your API?
- What kind of security mechanism you use?

REST does not specify a documentation standard or a contract like SOAP (WSDL). REST gives you the flexibility to choose your documentation format and approach. But that does not mean "No documentation"

> It's a misconception that REST means No documentation. You need to document your API.

## How do you document your RESTful API?

One option is to maintain documentation manually. But that gets outdated quickly.

Other option is to generate documentation from code. And that's the approach we would discuss in this guide.

There are multiple approaches to documenting your RESTful API
- WADL
- RESTDocs
- Swagger or OpenDocs

Swagger has picked up momentum in the last couple of years and is now the most popular REST API documentation standard. We will use Swagger in this guide.

## Bootstrapping a Project with a REST Resource

In the previous article in the series - http://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate, we set up a simple restful service with a resource exposing CRUD methods. 

> We will use the same example to generate Swagger Documentation.

## Generating Swaggger Documentation with Spring Boot

We would need to add a couple of dependencies related to Swagger and configure a Docket to generate Swagger Documentation. We will also use Swagger UI to have a visual representation of the Documentation and execute Test Requests.

### Adding Swagger Dependencies

Let's add a couple of dependencies to our Swagger Project pom.xml.

```
    <dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-boot-starter</artifactId>
      <version>3.0.0-SNAPSHOT</version>
    </dependency>
```

As we are using a SNAPSHOT version, you would need to add a repository for jfrog-snapshots in your pom.xml.

```
<repository>
      <id>jfrog-snapshots</id>
      <name>JFROG Snapshots</name>
      <url>http://oss.jfrog.org/artifactory/oss-snapshot-local</url>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
```


### Adding Swagger Spring Configuration Docket

Let's now add the Spring configuration needed to generate Swagger Documentation. 

/src/main/java/com/in28minutes/springboot/rest/example/swagger/SwaggerConfig.java

```java
@Configuration
@EnableSwagger2WebMvc
public class SwaggerConfig {

  public static final Contact DEFAULT_CONTACT = new Contact(
      "Ranga Karanam", "http://www.in28minutes.com", "in28minutes@gmail.com");
  
  public static final ApiInfo DEFAULT_API_INFO = new ApiInfo(
      "Awesome API Title", "Awesome API Description", "1.0",
      "urn:tos", DEFAULT_CONTACT, 
      "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0",Arrays.asList());

  private static final Set<String> DEFAULT_PRODUCES_AND_CONSUMES = 
      new HashSet<String>(Arrays.asList("application/json",
          "application/xml"));

  @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(DEFAULT_API_INFO)
        .produces(DEFAULT_PRODUCES_AND_CONSUMES)
        .consumes(DEFAULT_PRODUCES_AND_CONSUMES);
  }
}
```
Notes
- `@Configuration` - This file contains Spring configuration.
- `@EnableSwagger2WebMvc` - Annotation to Enable Swagger Documentation on the API
- `public static final Contact DEFAULT_CONTACT` - Has the contact information of the API. This will be exposed as part of the Swagger Documentation.
- `public static final ApiInfo DEFAULT_API_INFO` - Meta information about the API - Description, Licensing etc. This will be exposed as part of the Swagger Documentation.
- `private static final Set<String> DEFAULT_PRODUCES_AND_CONSUMES` - What content types does your API support?
- `public Docket api() {` - Docket to decide what kind of APIs you would want to document. In this example, we are documenting all APIs. You can filter out APIs you do not want to document with Swagger.

### Exposing meta API information using @SwaggerDefinition

You can also expose meta API information using @SwaggerDefinition as shown below. The information in the class is self explanatory.

```
@SwaggerDefinition(
        info = @Info(
                description = "Awesome Resources",
                version = "V12.0.12",
                title = "Awesome Resource API",
                contact = @Contact(
                   name = "Ranga Karanam", 
                   email = "ranga@in28minutes.com", 
                   url = "http://www.in28minutes.com"
                ),
                license = @License(
                   name = "Apache 2.0", 
                   url = "http://www.apache.org/licenses/LICENSE-2.0"
                )
        ),
        consumes = {"application/json", "application/xml"},
        produces = {"application/json", "application/xml"},
        schemes = {SwaggerDefinition.Scheme.HTTP, SwaggerDefinition.Scheme.HTTPS},
        externalDocs = @ExternalDocs(value = "Read This For Sure", url = "http://in28minutes.com")
)
public interface ApiDocumentationConfig {

}
```

### Generated Swagger Documentation

When you restart the application, you are all set to view the documentation that is generated.

Go to URL `http://localhost:8080/v2/api-docs`

At the top of the documentation is the Meta Information of the API
```
{
  "swagger": "2.0",
  "info": {
    "description": "Awesome API Description",
    "version": "1.0",
    "title": "Awesome API Title",
    "termsOfService": "urn:tos",
    "contact": {
      "name": "Ranga Karanam",
      "url": "http://www.in28minutes.com",
      "email": "in28minutes@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0"
    }
  },
  "host": "localhost:8080",
  "basePath": "/",
  "tags": [
    {
      "name": "web-mvc-endpoint-handler-mapping",
      "description": "Web Mvc Endpoint Handler Mapping"
    },
    {
      "name": "student-resource",
      "description": "Student Resource"
    },
    {
      "name": "operation-handler",
      "description": "Operation Handler"
    },
    {
      "name": "basic-error-controller",
      "description": "Basic Error Controller"
    }
  ],
  "consumes": [
    "application/xml",
    "application/json"
  ],
  "produces": [
    "application/xml",
    "application/json"
  ],
```

The paths contain the details of the resources being exposed
- You can see the different request methods, a summary of each method and all details about each request and response 

```
  "paths": {
    "/students": {
      "get": {
        "tags": [
          "student-resource"
        ],
        "summary": "retrieveAllStudents",
        "operationId": "retrieveAllStudentsUsingGET",
        "consumes": [
          "application/xml",
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Student"
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "post": {
        "tags": [
          "student-resource"
        ],
        "summary": "createStudent",
        "operationId": "createStudentUsingPOST",
        "consumes": [
          "application/xml",
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "student",
            "description": "student",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Student"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "object"
            }
          },
          "201": {
            "description": "Created"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/students/{id}": {
      "get": {
        "tags": [
          "student-resource"
        ],
        "summary": "Find student by id",
        "description": "Also returns a link to retrieve all students with rel - all-students",
        "operationId": "retrieveStudentUsingGET",
        "consumes": [
          "application/xml",
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/Resource«Student»"
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "put": {
        "tags": [
          "student-resource"
        ],
        "summary": "updateStudent",
        "operationId": "updateStudentUsingPUT",
        "consumes": [
          "application/xml",
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "student",
            "description": "student",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Student"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "object"
            }
          },
          "201": {
            "description": "Created"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "delete": {
        "tags": [
          "student-resource"
        ],
        "summary": "deleteStudent",
        "operationId": "deleteStudentUsingDELETE",
        "consumes": [
          "application/xml",
          "application/json"
        ],
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "204": {
            "description": "No Content"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          }
        }
      }
    }
  },
```

Definitions contain the detailed structure of the elements used in Request and Responses above.
```
  "definitions": {
    "Resource«Student»": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "links": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Link"
          }
        },
        "name": {
          "type": "string",
          "description": "Name should have atleast 2 characters"
        },
        "passportNumber": {
          "type": "string"
        }
      }
    },
    "Map«string,Link»": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/Link"
      }
    },
    "Student": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string",
          "description": "Name should have atleast 2 characters"
        },
        "passportNumber": {
          "type": "string"
        }
      },
      "description": "All details about the student. "
    },
    "Link": {
      "type": "object",
      "properties": {
        "href": {
          "type": "string"
        },
        "templated": {
          "type": "boolean"
        }
      }
    }
  }
}
```

### Launching Swagger UI

You can also use the Swagger UI available at `http://localhost:8080/swagger-ui/index.html`.

> Older url was http://localhost:8080/swagger-ui.html

Below screenshot shows the Home Page of Swagger UI. It shows a list of all the resources that are exposed.

![Image](/images/SwaggerDocumentation-1-HomePage.png "SwaggerDocumentation-1-HomePage") 


Choosing the Student resource takes you to details of the resource. It shows all the request methods that can be used with a Resource.

![Image](/images/SwaggerDocumentation-2-ResourceDetails-Student.png "SwaggerDocumentation-2-ResourceDetails-Student") 

You can also see the details for a Specific Request Method.

![Image](/images/SwaggerDocumentation-3-StudentGetMethodDetails.png "SwaggerDocumentation-3-StudentGetMethodDetails") 

You can use the 'Try it out' button to execute a request and see the response.

![Image](/images/SwaggerDocumentation-4-TryItOut-Request-And-Response.png "SwaggerDocumentation-4-TryItOut-Request-And-Response") 

### Customizing Swagger Documentation with Annotations
You can add notes on the resource method to add more documentation
```
  @GetMapping("/students/{id}")
  @ApiOperation(value = "Find student by id",
    notes = "Also returns a link to retrieve all students with rel - all-students")
  public Resource<Student> retrieveStudent(@PathVariable long id) {

```

Also supported is enhancing the documentation on the Request and Response Beans. 
```
@Entity
@ApiModel(description="All details about the student. ")
public class Student {
  
  @ApiModelProperty(notes="Name should have atleast 2 characters")
  @Size(min=2, message="Name should have atleast 2 characters")
  private String name;
```

## Complete Maven Project With Code Examples
> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-2-rest-service-swagger
