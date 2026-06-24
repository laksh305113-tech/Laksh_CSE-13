package com.shopeasy.entity;

// Abstract base class - demonstrates OOP (like BankAccount experiment)
abstract class Person {

    protected String name;
    protected String email;

    public Person(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Abstract method - must be implemented by subclass
    public abstract String getRole();

    public String getName()  { return name; }
    public String getEmail() { return email; }
    public void setName(String name)   { this.name = name; }
    public void setEmail(String email) { this.email = email; }
}
