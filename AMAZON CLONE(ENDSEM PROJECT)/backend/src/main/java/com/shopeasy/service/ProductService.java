package com.shopeasy.service;

import com.shopeasy.entity.Product;
import com.shopeasy.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// Service layer - handles business logic
// Controller calls Service, Service calls Repository
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    // Get products by category
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    // Search products by name
    public List<Product> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCase(keyword);
    }

    // Add new product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Update product
    public Product updateProduct(int id, Product updatedProduct) {
        updatedProduct.setId(id);
        return productRepository.save(updatedProduct);
    }

    // Delete product
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
