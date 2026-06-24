package com.shopeasy.entity;

import jakarta.persistence.*;

// JPA Entity - maps this class to a database table
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private double price;
    private String category;
    private double rating;
    private String imageUrl;

    // Default Constructor (required by JPA)
    public Product() {}

    // Parameterized Constructor
    public Product(String name, String description,
                   double price, String category,
                   double rating, String imageUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.rating = rating;
        this.imageUrl = imageUrl;
    }

    // Getters
    public int getId()            { return id; }
    public String getName()       { return name; }
    public String getDescription(){ return description; }
    public double getPrice()      { return price; }
    public String getCategory()   { return category; }
    public double getRating()     { return rating; }
    public String getImageUrl()   { return imageUrl; }

    // Setters
    public void setId(int id)                   { this.id = id; }
    public void setName(String name)             { this.name = name; }
    public void setDescription(String desc)      { this.description = desc; }
    public void setPrice(double price)           { this.price = price; }
    public void setCategory(String category)     { this.category = category; }
    public void setRating(double rating)         { this.rating = rating; }
    public void setImageUrl(String imageUrl)     { this.imageUrl = imageUrl; }
}
