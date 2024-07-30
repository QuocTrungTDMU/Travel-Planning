package com.example.Travel_Planning_BackEnd.dto.request.userRequest;

import org.springframework.cglib.core.Local;

public class createUserRequest {
    private String userName;
    private String email;
    private String password;
    private char gender;
    private Local dateOfBirth;
    public createUserRequest() {}

    public createUserRequest(String userName, String email, String password, char gender, Local dateOfBirth) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public Local getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Local dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
