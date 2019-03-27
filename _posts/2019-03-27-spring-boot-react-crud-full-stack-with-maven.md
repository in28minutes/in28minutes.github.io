---
layout:     post
title:      Spring Boot and React Full Stack CRUD Application with Maven
date:       2019-01-01 12:31:19
summary:    This guide will help you create a full stack application with all the CRUD (Create, Read, Update and Delete) features using React as Frontend framework and  Spring Boot as the backend REST API.
categories: Spring Boot, REST API, Full Stack Application, React, Angular, Frontend, CRUD, Maven
permalink:  /spring-boot-react-full-stack-crud-maven-application
---

This guide will help you create a full stack application with all the CRUD (Create, Read, Update and Delete) features using React as Frontend framework and  Spring Boot as the backend REST API. We will be using JavaScript as the frontend language and Java as the backend language.
 
## You will learn

- What is a full stack application?
- Why do we create full stack applications?
- How do you use React as a Frontend Framework?
- How do you use Spring to create Backend REST Service API?
- How to you call Spring Boot REST API from React using axios framework?
- How and When to use different REST API Request Methods - GET, POST, PUT and DELETE?
- How do you perform CRUD (Create, Read, Update and Delete) operations using React as Frontend framework and  Spring Boot as the backend REST API?
- How do you create a form in React using Formik?

## 10 Step Reference Courses

- [Spring Framework for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-framework-for-beginners){:target="_blank"}
- [Spring Boot for Beginners in 10 Steps](https://courses.in28minutes.com/p/spring-boot-for-beginners-in-10-steps){:target="_blank"}
- [Angular in 10 Steps](https://www.youtube.com/watch?v=8ueiZf988qY){:target="_blank"}
- [React in 10 Steps](https://www.youtube.com/watch?v=SWXuXhZkNQc){:target="_blank"}
- [JPA and Hibernate in 10 Steps](https://courses.in28minutes.com/p/jpa-and-hibernate-tutorial-for-beginners-with-spring-boot){:target="_blank"}
- [Complete in28Minutes Course Guide](https://courses.in28minutes.com/p/in28minutes-course-guide){:target="_blank"}


## Full Stack Application Overview

Following screenshot shows the application we would like to build: It is a basic instructor portal allowing instructors to maintain their courses.

![Image](/images/full-stack-application-with-spring-boot-screenshot.png "Spring Boot Full Stack Application") 

Following Screenshot shows the architecture of the application we would create:

![Image](/images/react_00_architecture.png "Architecture of Spring Boot React Full Stack Application")

Important points to note:
- REST API is exposed using Spring Boot
- REST API is consumed from React Frontend to expose the UI
- The Database, in this example, is a hardcoded in memory static list.

You can find more details about Full Stack Architecture here - [Full Stack Application Architecture - Spring Boot and React](https://youtu.be/TTWH_Q7uSlY){:target="_blank"}

## Resources Overview

In this guide, we will create three services using proper URIs and HTTP methods:

- @GetMapping("/instructors/{username}/courses") : Get Request Method exposing the list of courses taught by a specific instructor
- @GetMapping("/instructors/{username}/courses/{id}") : Get Request Method exposing the details of a specific course taught by a specific instructor
- @DeleteMapping("/instructors/{username}/courses/{id}") : Delete Request Method to delete a course belonging to a specific instructor
- @PutMapping("/instructors/{username}/courses/{id}") : Put Request Method to update the course details of a specific course taught by a specific instructor
- @PostMapping("/instructors/{username}/courses") : Post Request Method to create a new course for a specific instructor

> The REST API can be enhanced to interact with other microservices infrastructure components and act as microservices.

## Complete Maven Project With Code Examples

Complete frontend and backend projects are hosted in the following folder in github repository - https://github.com/in28minutes/spring-boot-react-fullstack-examples/tree/master/spring-boot-react-crud-full-stack-with-maven

> Our Github repository has all the code examples - https://github.com/in28minutes/spring-boot-react-examples/

## Spring Boot REST API Project Structure

Following screenshot shows the structure of the Spring Boot project we will create.
![Image](/images/project-structure-spring-boot-fullstack-crud-maven.png "Spring Boot Rest Service - Project Structure") 

A few details:

- `CourseResource.java` - Rest Resource exposing all the service methods discussed above.
- `Course.java, CoursesHardcodedService.java` - Business Logic for the application. CoursesHardcodedService exposes a few methods we would invoke from our Rest Resource.
- `SpringBootFullStackCrudFullStackWithMavenApplication.java` - Launcher for the Spring Boot Application. To run the application, just launch this file as Java Application.
- `pom.xml` - Contains all the dependencies needed to build this project. We will use Spring Boot Starter Web and Spring Boot DevTools.


## React Frontend Project Structure

Following screenshot shows the structure of the React project we will create.
![Image](/images/project-structure-react-fullstack-crud-maven.png "React Frontend - Project Structure") 

> Quick Tip : You can get a high level overview of all files in the React Project Structure here [React Project Structure](https://youtu.be/wI5G8FNFrto){:target="_blank"}

A few details:
- `InstructorApp.jsx` : React Component representing the high level structure of the application. Routing is defined in this file.
- `ListCoursesComponent.jsx` - React Component for listing all the courses for an instructor.
- `CourseComponent.jsx` - React Component for editing Course Details and creating a new course
- `CourseDataService.js` - Service using axios framework to make the Backend REST API Calls.


## Tools you will need

- Maven 3.0+ for building Spring Boot API Project
- npm, webpack for building frontend
- Your favorite IDE. We use Eclipse for Java and Visual Studio Code for Frontend - JavaScript, TypeScript, Angular and React.
- JDK 1.8+
- Node v8+
- Embedded Tomcat, built into Spring Boot Starter Web

#### Installing Node Js (npm) & Visual Studio Code 

- Playlist - https://www.youtube.com/playlist?list=PLBBog2r6uMCQN4X3Aa_jM9qVjgMCHMWx6
- Steps
  - Step 01 - Installing NodeJs and NPM - Node Package Manager
  - Step 02 - Quick Introduction to NPM
  - Step 03 - Installing Visual Studio Code - Front End Java Script Editor

#### Installing Java, Eclipse & Embedded Maven

- Playlist - https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3
- Steps
  - 0 - Overview - Installation Java, Eclipse and Maven
  - 1 - Installing Java JDK
  - 2 - Installing Eclipse IDE
  - 3 - Using Embedded Maven in Eclipse
  - 4 - Troubleshooting Java, Eclipse and Maven

## Creating Full Stack CRUD application with React and Spring Boot

We will use a step by step approach to create the full stack application
- Create a Spring Boot Application with Spring Boot Initializr
- Create a React application using Create React App
- Create the Retrieve Courses REST API and Enhance the React Front end to retrieve the courses using axios framework
- Add feature to delete a course in React front end and Spring Boot REST API
- Add feature to update course details in React front end and Spring Boot REST API
- Add feature to create a course in React front end and Spring Boot REST API

> You can get an introduction to REST down here - http://www.springboottutorial.com/creating-rest-service-with-spring-boot

## Bootstrapping Spring Boot REST API with Spring Initializr

Creating a REST service with Spring Initializr is a cake walk. We will use Spring Web MVC as our web framework.  

Spring Initializr [http://start.spring.io/](http://start.spring.io/){:target="_blank"} is great tool to bootstrap your Spring Boot projects.

![Image](/images/spring-boot-full-stack-with-web-and-dev-tools.png "Spring Boot Project with Web and Developer Tools")

As shown in the image above, following steps have to be done

- Launch Spring Initializr and choose the following
  - Choose `com.in28minutes.fullstack.springboot.maven.crud` as Group
  - Choose `spring-boot-fullstack-crud-full-stack-with-maven` as Artifact
  - Choose following dependencies
    - Web
    - DevTools
- Click Generate Project.
- Import the project into Eclipse. File -> Import -> Existing Maven Project.

## Bootstrapping React Frontend with Create React App

Creating React Frontend Applications with Create React App is very simple. 

```
npx create-react-app frontend-spring-boot-react-crud-full-stack-with-maven
```

You can find more information about using Create React App here - [Create React App - Create and Launch a React Application](https://youtu.be/PR1pXhesetg){:target="_blank"}

You can get a high level overview of all files in the React Project Structure here [React Project Structure](https://youtu.be/wI5G8FNFrto){:target="_blank"}



### Launching up React Frontend

You would need to cd to the project we created and execute `npm start`

```
cd frontend-spring-boot-react-crud-full-stack-with-maven
npm start
```
You would see the screen below:

![Image](/images/npm-start-new-react-app.png "Starting a React Project")

When you launch up the application in the browser at ```http://localhost:3000/```, you would see the following welcome screen.

![Image](/images/react-on-load-screenshot.png "New React Project on the Browser")

You can import the created project into Visual Studio Code by using ```File > Open > Select the project created earlier```. You can find more details here - [Importing React App into Visual Studio Code](https://youtu.be/Cw-bSD6Q8xI){:target="_blank"}


Cool! You are all set to rock and roll with React.

### Making a few changes to the React Frontend

Open up public/index.html and change the title to '<title>My Full Stack Application with Spring Boot and React</title>'. The change would be autoloaded into the Browser.

## Creating REST API for Retrieve All Courses and Connecting React Frontend

Let's start with creating REST API for Retrieve All Courses.

We will start with create a model object ```Course.java```. Snippet below shows the content of the model class. For complete listing, refer ```course/Course.java``` in complete code example at the end of this article.

```
public class Course {
  private Long id;
  private String username;
  private String description;
```

Next, let's create a Business Service. In this article, we will use hardcoded data.

```
@Service
public class CoursesHardcodedService {

  private static List<Course> courses = new ArrayList<>();
  private static long idCounter = 0;

  static {
    courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
    courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
    courses.add(new Course(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
    courses.add(new Course(++idCounter, "in28minutes",
        "Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
  }

  public List<Course> findAll() {
    return courses;
  }
}
```

Next, let create the REST Resource to retrieve the list of courses for an instructor.

```
@RestController
public class CourseResource {

  @Autowired
  private CoursesHardcodedService courseManagementService;

  @GetMapping("/instructors/{username}/courses")
  public List<Course> getAllCourses(@PathVariable String username) {
    return courseManagementService.findAll();
  }
}
```

If you launch up ```http://localhost:8080/instructors/in28minutes/courses``` in the browser, you would see the response from the API.

```
[
   {
      "id": 1,
      "username": "in28minutes",
      "description": "Learn Full stack with Spring Boot and Angular"
   },
   {
      "id": 2,
      "username": "in28minutes",
      "description": "Learn Full stack with Spring Boot and React"
   },
   {
      "id": 3,
      "username": "in28minutes",
      "description": "Master Microservices with Spring Boot and Spring Cloud"
   },
   {
      "id": 4,
      "username": "in28minutes",
      "description": "Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"
   }
]
```
We have the REST API up and running. Its time to focus on the Frontend.

### Enhancing React App to consume the REST API

One of the first things you would need to understand about React is the concept of component. You can find more about a react component here - [React Components](https://youtu.be/OmwcVGZWM98){:target="_blank"}


Let's start with creating an Application Component - ```InstructorApp.jsx```

/src/component/InstructorApp.jsx

```
class InstructorApp extends Component {
    render() {
        return (
              <h1>Instructor Application</h1>
        )
    }
}

export default InstructorApp
```

Let's update the ```App.js``` to display the InstructorApp component.

src/App.js

```js
import React, { Component } from 'react';
import './App.css';
import InstructorApp from './component/InstructorApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <InstructorApp />
      </div>
    );
  }
}

export default App;
```

Let's update the App.css to use Bootstrap framework:

/src/App.css

```css
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
```

When you launch the React app in the browser, it will appear as shown below:

![Image](/images/react-initial-instructor-component.png "Initial View of Instructor Component")

#### Adding Frameworks to React Application

In this project, we will make use of axios to execute REST APIs, react-router-dom to do the Routing between pages and formik to create forms. Let's stop the front end app running in the command prompt and execute these commands.

```
npm add axios
```

```
npm add react-router-dom
```

```
npm add formik
```

If these commands are executed successfully, you would see new entries in ```package.json```

```
    "axios": "^0.18.0",
    "formik": "^1.5.1",
    "react-router-dom": "^5.0.0",
```

You can run 'npm start' to run the front end app again.

#### Adding Hardcoded List Courses Component to Frontend

Let's create a new component for showing the List of courses - `ListCoursesComponent.jsx`. For now, let's hardcode the course list.

/src/component/ListCoursesComponent.jsx

```
class ListCoursesComponent extends Component {

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Learn Full stack with Spring Boot and Angular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
```

Let's update the InstructorApp component to display the ListCoursesComponent.

/src/component/InstructorApp.jsx

```
class InstructorApp extends Component {
    render() {
        return (<>
              <h1>Instructor Application</h1>
              <ListCoursesComponent/>
            </>
        )
    }
}

export default InstructorApp
```

When you launch the React app in the browser, it will appear as shown below:

![Image](/images/react-second-stage-hardcoded-instructor-component.png "Hardcoded Instructor Component")

#### Invoking Retrieve Courses REST API from React


/src/service/CourseDataService.js

```js
import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }
}

```

```
class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }
    ....
}

```

```
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseResource {

```

```
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

```

When you launch the React app in the browser, it will appear as shown below:

![Image](/images/react-third-stage-getting-course-listing-from-rest-api.png "Course Listing Component Retrieving from REST API")

### Adding Delete Method in the Backend REST API

```
@Service
public class CoursesHardcodedService {



  public Course deleteById(long id) {
    Course course = findById(id);

    if (course == null)
      return null;

    if (courses.remove(course)) {
      return course;
    }

    return null;
  }

```

```
public class CourseResource {

  @DeleteMapping("/instructors/{username}/courses/{id}")
  public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {

    Course course = courseManagementService.deleteById(id);

    if (course != null) {
      return ResponseEntity.noContent().build();
    }

    return ResponseEntity.notFound().build();
  }
```

```
class CourseDataService {

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

```

```
class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

```
When you launch the React app in the browser, it will appear as shown below:

![Image](/images/react-course-listing-with-delete.png "Course Listing Component Retrieving from REST API and Delete Button")

When you click the delete button you would see that the course is deleted.


### Updating Course Details

To be able to update course details, we would need to create a new component to represent the form. Let's create a simple

/src/component/CourseComponent.jsx
```
class CourseComponent extends Component {
      render() {
        return (
              <h1>Course Details</h1>
        )
    }

}

export default CourseComponent
```

#### Implementing Routing

When user clicks the update course button on the course listing page, we would want to route to the course component. How do we do it? That's where Routing comes into picture.

/src/component/InstructorApp.jsx

```
class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp
```

When you launch the React app in the browser using this url ```http://localhost:3000/courses/2```, it will appear as shown below:

![Image](/images/react-1-course-details.png "Course Component First Version")

#### Adding Update Button to Course Listing Page

Let's add update button to the course listing page

/src/component/ListCoursesComponent.jsx
```
.....

<th>Update</th>

....
<td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
```

We can create the add ```updateCourseClicked``` method to redirect to Course Component and add the binding in the constructor method

```
...
this.updateCourseClicked = this.updateCourseClicked.bind(this)

...
updateCourseClicked(id) {
    console.log('update ' + id)
    this.props.history.push(`/courses/${id}`)
}
```

#### Adding Add button to Course Listing Page

Let's add an Add button at the bottom of Course Listing Page

/src/component/ListCoursesComponent.jsx
```
<div className="row">
    <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
</div>
```

Let's add the appropriate binding and the method to handle click of Add button.

```
this.addCourseClicked = this.addCourseClicked.bind(this)

addCourseClicked() {
    this.props.history.push(`/courses/-1`)
}
```

When you launch the React app in the browser using this url ```http://localhost:3000```, it will appear as shown below:

![Image](/images/full-stack-application-with-spring-boot-screenshot.png "Course listing page final version")

Clicking any of the Update or Add buttons would take you to the Course Component.


#### Create API to Retrieve Specific Course Details

public class CoursesHardcodedService {

```
  public Course findById(long id) {
    for (Course course : courses) {
      if (course.getId() == id) {
        return course;
      }
    }
    return null;
  }
```

public class CourseResource {


```
  @GetMapping("/instructors/{username}/courses/{id}")
  public Course getCourse(@PathVariable String username, @PathVariable long id) {
    return courseManagementService.findById(id);
  }

```

#### Invoking the API from Course Component

```
class CourseDataService {

    retrieveCourse(name, id) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }
```

```
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class CourseComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Course</h3>
                <div>{id}</div>
                <div>{description}</div>
            </div>
        )
    }
}

export default CourseComponent
```

When you try to update a course, you would see the screen below

![Image](/images/react-2-course-details-update.png "Course Component Second Version")

When you try to create a course, you would see the screen below

![Image](/images/react-3-course-details-create.png "Course Component Second Version")

#### Create a Form using Formik
Let's now create a simple form using formik.

```
render() {

    let { description, id } = this.state

    return (
        <div>
            <h3>Course</h3>
            <div className="container">
                <Formik
                    initialValues={{ id, description }}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
}
```

When you try to update a course, you would see the screen below

![Image](/images/react-4-course-details-form.png "Course Component Fourth Version")

#### Adding Handling of Submit Event

```
this.onSubmit = this.onSubmit.bind(this)
...



onSubmit(values) {
    console.log(values);
}

...
<Formik
      initialValues={{ id, description }}
      onSubmit={this.onSubmit}
                    >
```

When you click Submit, the form details are printed to the console.s

```
{id: "2", description: "Learn Microservices"}
```

#### Adding Validation using Formik

Let's add validations to the form.

```
....

this.validate = this.validate.bind(this)

....

validate(values) {
    let errors = {}
    if (!values.description) {
        errors.description = 'Enter a Description'
    } else if (values.description.length < 5) {
        errors.description = 'Enter atleast 5 Characters in Description'
    }

    return errors

}

....

<Formik
      initialValues={{ id, description }}
      onSubmit={this.onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      validate={this.validate}
      enableReinitialize={true}>

```

You can see that validations prevent form from getting submitted. But, how do we see validation messages on the screen? Formik provides ErrorMessage.

```
<ErrorMessage name="description" component="div"
    className="alert alert-warning" />
```

When you try to update a course, you would see the screen below

![Image](/images/react-5-course-details-validation-error.png "Course Component Fifth Version")

### Updating Course Details on click of submit

Before we are able to update the course details, we need the API for it. Let's quickly create the API to Update and Create Courses.

#### Create API to Update Course

```
@Service
public class CoursesHardcodedService {

  public Course save(Course course) {
    if (course.getId() == -1 || course.getId() == 0) {
      course.setId(++idCounter);
      courses.add(course);
    } else {
      deleteById(course.getId());
      courses.add(course);
    }
    return course;
  }

```


```
  @PutMapping("/instructors/{username}/courses/{id}")
  public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
      @RequestBody Course course) {

    Course courseUpdated = courseManagementService.save(course);

    return new ResponseEntity<Course>(course, HttpStatus.OK);
  }
```

#### Adding API to Create Course

```
  @PostMapping("/instructors/{username}/courses")
  public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course) {

    Course createdCourse = courseManagementService.save(course);

    // Location
    // Get current resource url
    /// {id}
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
        .toUri();

    return ResponseEntity.created(uri).build();
  }
```

#### Invoking Update and Create APIs from Course Screen

Let's create respective methods in the CourseDataService.

```
class CourseDataService {
  updateCourse(name, id, course) {
      return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
  }

  createCourse(name, course) {
      return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
  }
```

Let's update the CourseComponent to invoke the right service on the click of submit button.

```
    onSubmit(values) {
        let username = INSTRUCTOR

        let course = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }

        console.log(values);
    }

```

> Congratulations! You are reading an article from a series of 50+ articles on Spring Boot and Microservices. We also have 20+ projects on our Github repository. For the complete series of 50+ articles and code examples, [click here](http://www.springboottutorial.com/spring-boot-tutorials-for-beginners).

## Next Steps
[![Image](/images/Course-Go-Full-Stack-With-Spring-Boot-and-React.png "Go Full Stack with Spring Boot and React")](https://www.udemy.com/full-stack-application-with-spring-boot-and-react/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Go-Full-Stack-With-SpringBoot-And-Angular.png "Go Full Stack with Spring Boot and Angular")](https://www.udemy.com/full-stack-application-development-with-spring-boot-and-angular/?couponCode=SBT-2019){:target="_blank"}

[![Image](/images/Course-Master-Microservices-with-Spring-Boot-and-Spring-Cloud.png "Master Microservices with Spring Boot and Spring Cloud")](https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/?couponCode=SBT-2019){:target="_blank"}


## Complete Code Example

---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/public/index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="theme-color" content="#000000" />
  <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
  <title>My Full Stack Application with Spring Boot and React</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/public/manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/App.css

```css
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/component/ListCoursesComponent.jsx

```
import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/component/InstructorApp.jsx

```
import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/component/CourseComponent.jsx

```
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../service/CourseDataService';

const INSTRUCTOR = 'in28minutes'

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let username = INSTRUCTOR

        let course = {
            id: this.state.id,
            description: values.description
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }

        console.log(values);
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CourseComponent
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/index.css

```css
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/App.test.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/serviceWorker.js

```js
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/service/CourseDataService.js

```js
import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }
}

export default new CourseDataService()
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/logo.svg

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
    <g fill="#61DAFB">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
        <circle cx="420.9" cy="296.5" r="45.7"/>
        <path d="M520.5 78.1z"/>
    </g>
</svg>
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/src/App.js

```js
import React, { Component } from 'react';
import './App.css';
import InstructorApp from './component/InstructorApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <InstructorApp />
      </div>
    );
  }
}

export default App;
```
---

### /spring-boot-react-crud-full-stack-with-maven/frontend-spring-boot-react-crud-full-stack-with-maven/package.json

```json
{
  "name": "spring-boot-react-crud-full-stack-with-maven",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.18.0",
    "formik": "^1.5.1",
    "react": "^16.8.5",
    "react-dom": "^16.8.5",
    "react-router-dom": "^5.0.0",
    "react-scripts": "2.1.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.3.RELEASE</version>
    <relativePath /> <!-- lookup parent from repository -->
  </parent>
  <groupId>com.in28minutes.fullstack.springboot.maven.crud</groupId>
  <artifactId>spring-boot-fullstack-crud-full-stack-with-maven</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>spring-boot-fullstack-crud-full-stack-with-maven</name>
  <description>Demo project for Spring Boot</description>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

</project>
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/test/java/com/in28minutes/fullstack/springboot/react/maven/crud/springbootreactcrudfullstackwithmaven/SpringBootReactCrudFullStackWithMavenApplicationTests.java

```java
package com.in28minutes.fullstack.springboot.react.maven.crud.springbootreactcrudfullstackwithmaven;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootReactCrudFullStackWithMavenApplicationTests {

  @Test
  public void contextLoads() {
  }

}
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/main/resources/application.properties

```properties

```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/main/java/com/in28minutes/fullstack/springboot/maven/crud/springbootcrudfullstackwithmaven/SpringBootFullStackCrudFullStackWithMavenApplication.java

```java
package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootFullStackCrudFullStackWithMavenApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBootFullStackCrudFullStackWithMavenApplication.class, args);
  }

}
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/main/java/com/in28minutes/fullstack/springboot/maven/crud/springbootcrudfullstackwithmaven/course/CoursesHardcodedService.java

```java
package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

  private static List<Course> courses = new ArrayList<>();
  private static long idCounter = 0;

  static {
    courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
    courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
    courses.add(new Course(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
    courses.add(new Course(++idCounter, "in28minutes",
        "Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
  }

  public List<Course> findAll() {
    return courses;
  }

  public Course save(Course course) {
    if (course.getId() == -1 || course.getId() == 0) {
      course.setId(++idCounter);
      courses.add(course);
    } else {
      deleteById(course.getId());
      courses.add(course);
    }
    return course;
  }

  public Course deleteById(long id) {
    Course course = findById(id);

    if (course == null)
      return null;

    if (courses.remove(course)) {
      return course;
    }

    return null;
  }

  public Course findById(long id) {
    for (Course course : courses) {
      if (course.getId() == id) {
        return course;
      }
    }

    return null;
  }
}
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/main/java/com/in28minutes/fullstack/springboot/maven/crud/springbootcrudfullstackwithmaven/course/Course.java

```java
package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;

public class Course {
  private Long id;
  private String username;
  private String description;

  public Course() {

  }

  public Course(long id, String username, String description) {
    super();
    this.id = id;
    this.username = username;
    this.description = description;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((description == null) ? 0 : description.hashCode());
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    result = prime * result + ((username == null) ? 0 : username.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Course other = (Course) obj;
    if (description == null) {
      if (other.description != null)
        return false;
    } else if (!description.equals(other.description))
      return false;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    if (username == null) {
      if (other.username != null)
        return false;
    } else if (!username.equals(other.username))
      return false;
    return true;
  }

}
```
---

### /spring-boot-react-crud-full-stack-with-maven/backend-spring-boot-react-crud-full-stack-with-maven/src/main/java/com/in28minutes/fullstack/springboot/maven/crud/springbootcrudfullstackwithmaven/course/CourseResource.java

```java
package com.in28minutes.fullstack.springboot.maven.crud.springbootcrudfullstackwithmaven.course;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseResource {

  @Autowired
  private CoursesHardcodedService courseManagementService;

  @GetMapping("/instructors/{username}/courses")
  public List<Course> getAllCourses(@PathVariable String username) {
    return courseManagementService.findAll();
  }

  @GetMapping("/instructors/{username}/courses/{id}")
  public Course getCourse(@PathVariable String username, @PathVariable long id) {
    return courseManagementService.findById(id);
  }

  @DeleteMapping("/instructors/{username}/courses/{id}")
  public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {

    Course course = courseManagementService.deleteById(id);

    if (course != null) {
      return ResponseEntity.noContent().build();
    }

    return ResponseEntity.notFound().build();
  }

  @PutMapping("/instructors/{username}/courses/{id}")
  public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
      @RequestBody Course course) {

    Course courseUpdated = courseManagementService.save(course);

    return new ResponseEntity<Course>(course, HttpStatus.OK);
  }

  @PostMapping("/instructors/{username}/courses")
  public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course) {

    Course createdCourse = courseManagementService.save(course);

    // Location
    // Get current resource url
    /// {id}
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
        .toUri();

    return ResponseEntity.created(uri).build();
  }

}
```
