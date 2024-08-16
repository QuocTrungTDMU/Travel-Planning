package com.example.Travel_Planning_BackEnd.service.tourService;

import com.example.Travel_Planning_BackEnd.base_exception.appException;
import com.example.Travel_Planning_BackEnd.base_exception.errorCode;
import com.example.Travel_Planning_BackEnd.entity.Tours;
import com.example.Travel_Planning_BackEnd.respository.tourRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class tourService implements tourServiceImp {
    @Autowired
    private tourRespository tourRespository;
    @Override
    public List<Tours> getAllTours() {
        return tourRespository.findAll();
    }
    public List<Tours> getToursByName(String keyword) {
        List<Tours> allTours = tourRespository.findAll();
        List<Tours> resTours = new ArrayList<Tours>();
        for (Tours tour : allTours) {
            if(tour.getTourName().toLowerCase().contains(keyword.toLowerCase()))
            {
                resTours.add(tour);
            }
        }
        if(resTours.size() > 0)
        {
            return resTours;
        }
        throw new appException(errorCode.NOT_FOUND_TOUR_BY_NAME);
    }
}
