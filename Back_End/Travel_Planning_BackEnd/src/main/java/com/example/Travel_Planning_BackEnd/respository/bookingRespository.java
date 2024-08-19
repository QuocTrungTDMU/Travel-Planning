package com.example.Travel_Planning_BackEnd.respository;

import com.example.Travel_Planning_BackEnd.entity.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRespository extends JpaRepository<Bookings,String> {
}
