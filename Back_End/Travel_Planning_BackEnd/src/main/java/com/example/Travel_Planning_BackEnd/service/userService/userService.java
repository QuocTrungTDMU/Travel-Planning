package com.example.Travel_Planning_BackEnd.service.userService;

import com.example.Travel_Planning_BackEnd.entity.Users;
import com.example.Travel_Planning_BackEnd.respository.userRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class userService implements userServiceImp{
    @Autowired
    private userRespository userRepository;
    @Override
    public List<Users> getAllUser() {
        return userRepository.findAll();
    }
    public String Login(String email, String password) {
        Users user= userRepository.findByEmail(email);
        if(user==null)
        {
            throw new RuntimeException("User not found");
        }
        if(!user.getPassword().equals(password)){
            throw new RuntimeException("Password is incorrect");
        }
        return "Login successfully";
    }
}
