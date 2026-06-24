package com.shopeasy.entity;

import jakarta.persistence.*;

// User extends Person - Inheritance (OOP concept from BankAccount experiment)
@Entity
@Table(name = "users")
public class User extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String phone;
    private String password;
    private String city;

    // Default Constructor (required by JPA)
    public User() {
        super("", "");
    }

    // Parameterized Constructor
    public User(String name, String email,
                String phone, String password, String city) {
        super(name, email);
        this.phone    = phone;
        this.password = password;
        this.city     = city;
    }

    // Implementing abstract method from Person
    @Override
    public String getRole() {
        return "CUSTOMER";
    }

    // Getters & Setters
    public int    getId()       { return id; }
    public String getPhone()    { return phone; }
    public String getPassword() { return password; }
    public String getCity()     { return city; }

    public void setId(int id)               { this.id = id; }
    public void setPhone(String phone)      { this.phone = phone; }
    public void setPassword(String pw)      { this.password = pw; }
    public void setCity(String city)        { this.city = city; }
}
