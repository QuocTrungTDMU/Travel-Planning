package com.example.Travel_Planning_BackEnd.base_exception;

import com.example.Travel_Planning_BackEnd.dto.response.apiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class globalException {
    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<apiResponse> runtimeExceptionHandler(RuntimeException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new apiResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),"")
        );
    }
}