package com.example.Travel_Planning_BackEnd.service.reviewService;

import com.example.Travel_Planning_BackEnd.entity.Reviews;

import java.util.List;

public interface reviewServiceImp {
    public List<Reviews> getAllReviews();
    public Reviews createReview(Reviews reviews);
}
