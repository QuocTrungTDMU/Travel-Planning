package com.example.Travel_Planning_BackEnd.respository;

import com.example.Travel_Planning_BackEnd.entity.Tours;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface tourRespository extends JpaRepository<Tours,String> {
    Optional<Tours> findToursByTourName(String tour_name);
}
