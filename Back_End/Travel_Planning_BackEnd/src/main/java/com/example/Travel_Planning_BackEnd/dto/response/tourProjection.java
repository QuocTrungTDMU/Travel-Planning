package com.example.Travel_Planning_BackEnd.dto.response;

public interface tourProjection {
    String getId();
    String getTourName();
    String getDescription();
    Integer getPrice();
    Integer getDay();
    Integer getPerson();
    String getCountry();
    Double getRatingAvg();
    Integer getRatingCount();
}
