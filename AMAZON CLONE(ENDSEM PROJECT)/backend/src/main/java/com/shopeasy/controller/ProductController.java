package com.shopeasy.controller;

import com.shopeasy.entity.Product;
import com.shopeasy.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// REST Controller - handles all HTTP requests for Product
// Builds on StudentController (Exp 2) + EmployeeRepository (Exp 3)
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class ProductController {

    @Autowired
    private ProductService productService;

    // GET  /api/products          → Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // GET  /api/products/{id}     → Get product by ID
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    // GET  /api/products/category/{cat} → Filter by category
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    // GET  /api/products/search?keyword=gaming → Search
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String keyword) {
        return productService.searchProducts(keyword);
    }

    // POST /api/products          → Add new product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    // PUT  /api/products/{id}     → Update product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id,
                                 @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    // DELETE /api/products/{id}   → Delete product
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        return "Product deleted successfully!";
    }
}
