package com.example.Travel_Planning_BackEnd.respository;

import com.example.Travel_Planning_BackEnd.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRespository extends JpaRepository<Users,String> {
    Users findByUsername(String Username);
    Users findByEmail(String Email);
}
