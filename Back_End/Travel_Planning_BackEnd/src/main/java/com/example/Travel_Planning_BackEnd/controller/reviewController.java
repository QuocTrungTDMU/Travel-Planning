package com.example.Travel_Planning_BackEnd.controller;

import com.example.Travel_Planning_BackEnd.entity.Reviews;
import com.example.Travel_Planning_BackEnd.service.reviewService.reviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.Travel_Planning_BackEnd.dto.response.apiResponse;
@RestController
public class reviewController {
    @Autowired
    reviewService service;

    @GetMapping("reviews/getAll")
    ResponseEntity<apiResponse> getAll(){
        apiResponse response = apiResponse.builder()
                .code(HttpStatus.OK.value())
                .message("Success")
                .data(service.getAllReviews())
                .build();
        return ResponseEntity.ok().body(
                response
        );
    }

    @PostMapping("reviews/create")
    ResponseEntity<apiResponse> createReview(@RequestBody Reviews review){
        apiResponse res = apiResponse.builder()
                .code(HttpStatus.OK.value())
                .message("Create review successfully")
                .data(service.createReview(review))
                .build();
        return ResponseEntity.ok().body(
                res
        );
    }
}
