package com.example.Travel_Planning_BackEnd.dto.request.userRequest;

public class loginUserRequest {
    String email;
    String password;

    public loginUserRequest() {
    }

    public loginUserRequest(String email, String password) {
        this.email = email;
        this.password = password;
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
}
