package com.example.Travel_Planning_BackEnd.controller;

import com.example.Travel_Planning_BackEnd.dto.request.userRequest.loginUserRequest;
import com.example.Travel_Planning_BackEnd.dto.response.apiResponse;
import com.example.Travel_Planning_BackEnd.service.userService.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {
    @Autowired
    userService service;
    @GetMapping("/user/getAll")
    public ResponseEntity<apiResponse> getAllUser() {
        apiResponse response = new apiResponse();
        response.setCode(HttpStatus.OK.value());
        response.setMessage("Successfully retrieved all users");
        response.setData(service.getAllUser());
        return ResponseEntity.status(HttpStatus.OK).body(
                response
        );
    }
    @PostMapping("/user/login")
    public ResponseEntity<apiResponse> loginUser(@RequestBody loginUserRequest loginUserRequest) {
        apiResponse response = new apiResponse();
        response.setCode(HttpStatus.OK.value());
        response.setMessage(service.Login(loginUserRequest.getEmail(),loginUserRequest.getPassword()));
        response.setData("");
        return ResponseEntity.status(HttpStatus.OK).body(
                response
        );
    }
}
