package com.example.Travel_Planning_BackEnd.service.reviewService;

import com.example.Travel_Planning_BackEnd.base_exception.appException;
import com.example.Travel_Planning_BackEnd.base_exception.errorCode;
import com.example.Travel_Planning_BackEnd.entity.Reviews;
import com.example.Travel_Planning_BackEnd.respository.reviewRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class reviewService implements reviewServiceImp{
    @Autowired
    reviewRespository reviewRepository;
    @Override
    public List<Reviews> getAllReviews(){
        return reviewRepository.findAll();
    };
    @Override
    public Reviews createReview(Reviews review) {
        try{
            return reviewRepository.save(review);
        }catch (Exception e) {
            throw new appException(errorCode.CREATE_REIVEW_FAILED);
        }
    }
}
