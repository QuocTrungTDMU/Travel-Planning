package com.example.Travel_Planning_BackEnd.service.bookingService;

import com.example.Travel_Planning_BackEnd.entity.Bookings;
import com.example.Travel_Planning_BackEnd.respository.bookingRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class bookingService implements bookingServiceImp{
    @Autowired
    bookingRespository bookingRepo;
    @Override
    public List<Bookings> getAllBookings() {
        return bookingRepo.findAll();
    }
}
