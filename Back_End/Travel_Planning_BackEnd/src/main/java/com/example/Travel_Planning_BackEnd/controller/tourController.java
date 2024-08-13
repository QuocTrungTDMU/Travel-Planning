package com.example.Travel_Planning_BackEnd.controller;

import com.example.Travel_Planning_BackEnd.dto.response.apiResponse;
import com.example.Travel_Planning_BackEnd.service.tourService.tourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class tourController {
    @Autowired
    tourService service;

    @GetMapping("/tours")
    public ResponseEntity<apiResponse> getAllTours() {
        apiResponse apiResponse = new apiResponse();
        apiResponse.setMessage("tours");
        apiResponse.setCode(HttpStatus.OK.value());
        apiResponse.setData(service.getAllTours());
        return ResponseEntity.status(HttpStatus.OK).body(
                apiResponse
        );
    }
    @GetMapping("tours/search/")
    public ResponseEntity<apiResponse> getAllToursBySearch(@RequestParam String keyword) {
        apiResponse apiResponse = new apiResponse();
        apiResponse.setMessage("get tours successfully");
        apiResponse.setCode(HttpStatus.OK.value());
        apiResponse.setData(service.getToursByName(keyword));
        return ResponseEntity.status(HttpStatus.OK).body(
                apiResponse
        );
    }
}
