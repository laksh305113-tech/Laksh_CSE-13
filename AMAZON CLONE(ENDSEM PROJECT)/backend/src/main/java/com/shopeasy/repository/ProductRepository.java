package com.shopeasy.repository;

import com.shopeasy.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// Spring Data JPA - auto-generates all CRUD queries
// Same pattern as EmployeeRepository from Exp 3
public interface ProductRepository extends JpaRepository<Product, Integer> {

    // Custom query method - Spring generates SQL automatically from method name
    List<Product> findByCategory(String category);

    // Search by name containing keyword (case-insensitive)
    List<Product> findByNameContainingIgnoreCase(String name);
}
