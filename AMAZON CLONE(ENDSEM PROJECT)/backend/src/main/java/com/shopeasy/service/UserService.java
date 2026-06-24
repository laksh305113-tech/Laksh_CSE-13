package com.shopeasy.service;

import com.shopeasy.entity.User;
import com.shopeasy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by ID
    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    // Delete user
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
