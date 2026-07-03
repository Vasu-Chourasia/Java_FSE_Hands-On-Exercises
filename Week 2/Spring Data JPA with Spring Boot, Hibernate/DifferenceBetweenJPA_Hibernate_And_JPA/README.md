# Hands-on 4 – Difference between JPA, Hibernate and Spring Data JPA

## Overview

This exercise explains the differences between **Java Persistence API (JPA)**, **Hibernate**, and **Spring Data JPA**. It demonstrates how Spring Data JPA simplifies database operations by reducing boilerplate code compared to traditional Hibernate.

---

## Technologies Discussed

- Java
- JPA (Java Persistence API)
- Hibernate ORM
- Spring Framework
- Spring Data JPA

---

# What is JPA?

**Java Persistence API (JPA)** is a Java specification (JSR 338) for managing relational data in Java applications.

It defines:

- Entity mapping
- CRUD operations
- Relationships
- JPQL (Java Persistence Query Language)

JPA itself **does not provide an implementation**. It only defines the standard that ORM frameworks must follow.

Examples of JPA implementations include:

- Hibernate
- EclipseLink
- OpenJPA

---

# What is Hibernate?

Hibernate is an **Object Relational Mapping (ORM)** framework.

It is the most popular implementation of the JPA specification.

Hibernate provides:

- Entity management
- Session management
- Transaction management
- SQL generation
- Caching
- Lazy Loading

Using Hibernate directly requires writing more code to manage sessions and transactions.

Example:

```java
Session session = factory.openSession();

Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();

session.close();
```

---

# What is Spring Data JPA?

Spring Data JPA is a Spring Framework module that simplifies database access.

It **does not implement JPA**.

Instead, it sits on top of a JPA provider (such as Hibernate) and automatically generates repository implementations.

It reduces boilerplate code by providing built-in CRUD operations through `JpaRepository`.

Example:

```java
@Repository
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}
```

Saving an entity becomes:

```java
employeeRepository.save(employee);
```

No session or transaction handling code is required.

---

# Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | ❌ No | ✅ Yes | ❌ No |
| Implements JPA | — | ✅ Yes | Uses JPA Provider |
| Boilerplate Code | Medium | High | Very Low |
| CRUD Operations | Defined by Specification | Manual | Automatically Provided |
| Transaction Management | Depends on Provider | Manual | Managed by Spring |
| SQL Generation | Depends on Provider | Automatic | Uses Hibernate |

---

# Hibernate Example

```java
public Integer addEmployee(Employee employee){

    Session session = factory.openSession();

    Transaction tx = null;

    Integer employeeID = null;

    try{

        tx = session.beginTransaction();

        employeeID = (Integer) session.save(employee);

        tx.commit();

    }catch(HibernateException e){

        if(tx != null)
            tx.rollback();

    }finally{

        session.close();

    }

    return employeeID;
}
```

---

# Spring Data JPA Example

Repository

```java
@Repository
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer>{

}
```

Service

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee){

    employeeRepository.save(employee);

}
```

---

# Advantages of Spring Data JPA

- Reduces boilerplate code
- Automatic CRUD implementation
- Built-in pagination
- Sorting support
- Custom query generation
- Repository abstraction
- Easy integration with Spring Boot
- Automatic transaction management

---

# Key Learnings

- JPA is only a specification.
- Hibernate is one implementation of JPA.
- Spring Data JPA is built on top of JPA providers like Hibernate.
- Spring Data JPA minimizes code by providing repository interfaces.
- Spring Boot automatically configures Hibernate when using Spring Data JPA.

---

# Conclusion

JPA defines the standard for object-relational mapping, Hibernate implements that standard, and Spring Data JPA further simplifies development by eliminating repetitive persistence code through repository abstractions.

Together, these technologies make database access in Java applications easier, cleaner, and more maintainable.

---