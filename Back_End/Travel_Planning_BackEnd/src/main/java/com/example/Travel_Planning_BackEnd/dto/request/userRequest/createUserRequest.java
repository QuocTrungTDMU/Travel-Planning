package com.example.Travel_Planning_BackEnd.dto.request.userRequest;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.logging.Level;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class createUserRequest {
    private String username;
    private String email;
    private String password;
    private char gender;
    private LocalDate dob;
}
