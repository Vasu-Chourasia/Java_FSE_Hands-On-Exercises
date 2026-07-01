# JUnit Exercise 5 – Mocking and Stubbing using Mockito

## Overview

This project demonstrates the use of **Mockito** for **Mocking** and **Stubbing** in unit testing with **JUnit 5**.

Mockito allows developers to create mock objects that simulate the behavior of real dependencies, making it possible to test a class in isolation without relying on external systems such as APIs or databases.

In this exercise, a mock implementation of an `ExternalApi` is created, its method is stubbed to return predefined data, and the `MyService` class is tested using the mocked dependency.

---

## Technologies Used

* Java (JDK 17)
* Apache Maven (3.9.x)
* JUnit Jupiter (JUnit 5.10.2)
* Mockito Core (5.12.0)
* IntelliJ IDEA Community Edition

---

## Project Structure

```
MockitoMockingDemo/
├── pom.xml
├── src/
│   ├── main/
│   │   └── java/
│   │       └── org/
│   │           └── example/
│   │               ├── ExternalApi.java
│   │               └── MyService.java
│   └── test/
│       └── java/
│           └── org/
│               └── example/
│                   └── MyServiceTest.java
├── .gitignore
└── README.md
```

---

## Dependency Configuration

The following dependencies are added in `pom.xml` to enable JUnit 5 testing and Mockito support:

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.2</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.12.0</version>
    <scope>test</scope>
</dependency>
```

---

## Application Code

### ExternalApi.java

```java
package org.example;

public interface ExternalApi {

    String getData();

}
```

---

### MyService.java

```java
package org.example;

public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
```

---

## Test Implementation

### MyServiceTest.java

```java
package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call the method
        String result = service.fetchData();

        // Verify interaction
        verify(mockApi).getData();

        // Verify the result
        assertEquals("Mock Data", result);
    }
}
```

---

## Mockito Concepts Demonstrated

### Mocking

A mock object simulates the behavior of a real object without invoking the actual implementation.

```java
ExternalApi mockApi = mock(ExternalApi.class);
```

---

### Stubbing

Stubbing defines the behavior of a mocked method by specifying what it should return when invoked.

```java
when(mockApi.getData()).thenReturn("Mock Data");
```

Whenever `getData()` is called, the mock returns `"Mock Data"` instead of calling a real API.

---

### Verification

Mockito can verify whether a mocked method was invoked during the test.

```java
verify(mockApi).getData();
```

This confirms that `fetchData()` internally called the mocked API.

---

## JUnit Assertions Used

| Assertion | Description |
|-----------|-------------|
| `assertEquals()` | Verifies that the expected and actual values are equal. |

---

## Mockito Methods Used

| Method | Description |
|--------|-------------|
| `mock()` | Creates a mock object. |
| `when()` | Defines the behavior of a mocked method. |
| `thenReturn()` | Specifies the value returned by the stubbed method. |
| `verify()` | Confirms that a mocked method was invoked. |

---

## Build and Execution

To compile the project and execute the test case, run the following command from the project root directory:

```bash
mvn clean test
```

Or execute the test class directly from IntelliJ IDEA by selecting:

```
Run 'MyServiceTest'
```

---

## Expected Result

* The mock object is successfully created.
* The mocked method returns the predefined value.
* The service receives the mocked data.
* The interaction with the mock object is verified.
* All assertions pass successfully.
* Maven completes the execution with a **BUILD SUCCESS** status.

---

## Output

Include a screenshot of the successful test execution.

Example:

## Output

![Test Output](calculator-test-output.png)

---

## Key Learnings

* Understanding the concept of Mocking in unit testing.
* Creating mock objects using Mockito.
* Stubbing methods to return predefined values.
* Injecting mocked dependencies into a service.
* Verifying interactions with mocked objects.
* Writing isolated and reliable unit tests.
* Executing Mockito-based JUnit 5 tests using Maven and IntelliJ IDEA.

---

## Conclusion

* This exercise demonstrates how Mockito can be used to isolate a class from its external dependencies during unit testing.
* By using Mocking, Stubbing, and Verification, developers can write faster, more reliable, and maintainable unit tests without relying on real external systems such as APIs or databases.
* Mockito, together with JUnit 5, provides a powerful framework for building robust automated tests in Java applications.