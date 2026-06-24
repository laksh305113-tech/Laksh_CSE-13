package com.shopeasy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan
@SpringBootApplication
public class ShopEasyApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShopEasyApplication.class, args);
        System.out.println("✅ ShopEasy Backend running at http://localhost:8080");
    }
}
