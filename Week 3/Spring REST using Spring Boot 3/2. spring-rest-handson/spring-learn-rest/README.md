# Hello World RESTful Web Service

## Overview
This project demonstrates the creation of a simple RESTful Web Service using Spring Boot and the Spring Web Framework. The application exposes a GET endpoint that returns a hardcoded response **"Hello World!!"**. It also includes SLF4J logging to record the start and end of the request processing.

---

## Objective
- Create a REST Controller using Spring Boot.
- Implement a GET endpoint.
- Return a simple text response.
- Add logging using SLF4J.
- Test the endpoint using a web browser and Postman.

---

## Technologies Used

- Java 17
- Spring Boot 4.1.0
- Spring Web
- Maven
- Eclipse IDE
- Apache Tomcat (Embedded)
- SLF4J Logging

---

## Project Structure

```
spring-learn-rest
│
├── src
│   ├── main
│   │   ├── java
│   │   │
│   │   └── com
│   │       └── cognizant
│   │           └── springlearn
│   │               ├── SpringLearnRestApplication.java
│   │               └── controller
│   │                   └── HelloController.java
│   │
│   └── resources
│       └── application.properties
│
└── pom.xml
```

---

## REST Endpoint

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/hello` | Returns "Hello World!!" |

---

## Controller Implementation

The `HelloController` contains a single REST endpoint:

- Logs **START** when the request begins.
- Returns the response **"Hello World!!"**.
- Logs **END** after processing the request.

---

## Configuration

`application.properties`

```properties
server.port=8083
```

---

## Running the Application

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd spring-learn-rest
```

### Run the Application

Using Maven

```bash
mvn spring-boot:run
```

or run

```
SpringLearnRestApplication.java
```

as a **Spring Boot App** from Eclipse.

---

## Testing the API

### Browser

```
http://localhost:8083/hello
```

### Postman

**Method**

```
GET
```

**URL**

```
http://localhost:8083/hello
```

---

## Sample Response

```
Hello World!!
```

---

## Console Output

```
INFO  HelloController : START
INFO  HelloController : END
```

---

## HTTP Response

```
Status Code : 200 OK
Content-Type : text/plain;charset=UTF-8
```

---

## Learning Outcomes

- Understanding REST Controllers
- Creating REST APIs using Spring Boot
- Mapping HTTP GET requests
- Using `@RestController`
- Using `@GetMapping`
- Configuring server port
- Logging with SLF4J
- Testing APIs using Browser and Postman

---

