package com.example.Travel_Planning_BackEnd.service.userService;

import com.example.Travel_Planning_BackEnd.base_exception.appException;
import com.example.Travel_Planning_BackEnd.base_exception.errorCode;
import com.example.Travel_Planning_BackEnd.dto.request.userRequest.createUserRequest;
import com.example.Travel_Planning_BackEnd.entity.Users;
import com.example.Travel_Planning_BackEnd.respository.userRespository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class userService implements userServiceImp{
    @Autowired
    private userRespository userRepository;
    @Autowired
    private com.example.Travel_Planning_BackEnd.mapper.userMapper userMapper;

    @Override
    public List<Users> getAllUser() {
        return userRepository.findAll();
    }
    public Users getUserById(String id) {
        var user = userRepository.findById(id).orElseThrow(()-> new appException(errorCode.USER_NOT_FOUND));
        return user;
    }
    public Users Login(String email, String password) {
        Users user= userRepository.findByEmail(email);
        if(user==null)
        {
            throw new RuntimeException("User not found");
        }
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(!passwordEncoder.matches(password,user.getPassword())){
            throw new RuntimeException("Password is incorrect");
        }
        return user;
    }
    public Users createUser(createUserRequest createUserRequest) {
        Users isCheckUser = userRepository.findByEmail(createUserRequest.getEmail());
        if(isCheckUser!=null)
        {
            throw new appException(errorCode.EMAIL_USER_ALREADY_EXIST);
        }
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(createUserRequest.getPassword());
        createUserRequest.setPassword(encodedPassword);
        Users users = userMapper.toUser(createUserRequest);
        userRepository.save(users);
        return users;
    }
}
