package com.example.Travel_Planning_BackEnd.controller;

import com.example.Travel_Planning_BackEnd.dto.response.apiResponse;
import com.example.Travel_Planning_BackEnd.service.bookingService.bookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class bookingController {
    @Autowired
    bookingService bookingservice;

    @GetMapping("/booking/getall")
    ResponseEntity<apiResponse> getAllBooking(){
        apiResponse apiResponse = com.example.Travel_Planning_BackEnd.dto.response.apiResponse.builder()
                .code(HttpStatus.OK.value())
                .message("Get all bookings")
                .data(bookingservice.getAllBookings())
                .build();

        return ResponseEntity.status(HttpStatus.OK.value()).body(
                apiResponse
        );
    }
}
