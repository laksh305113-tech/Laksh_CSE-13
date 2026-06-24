package com.shopeasy.controller;

import com.shopeasy.entity.User;
import com.shopeasy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    // GET  /api/users            → Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // GET  /api/users/{id}       → Get user by ID
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    // DELETE /api/users/{id}     → Delete user
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return "User deleted successfully!";
    }
}
