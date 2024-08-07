package com.example.Travel_Planning_BackEnd.mapper;

import com.example.Travel_Planning_BackEnd.dto.request.userRequest.createUserRequest;
import com.example.Travel_Planning_BackEnd.entity.Users;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface userMapper {
    Users toUser(createUserRequest createUserRequest);

}
