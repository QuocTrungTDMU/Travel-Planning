package com.example.Travel_Planning_BackEnd.respository;

import com.example.Travel_Planning_BackEnd.entity.Tours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.Travel_Planning_BackEnd.dto.response.tourProjection;
import java.util.List;
import java.util.Optional;
public interface tourRespository extends JpaRepository<Tours,String> {
    Optional<Tours> findToursByTourName(String tour_name);
    @Query("SELECT t.id as id, t.tourName as tourName, t.description as description, t.price as price, t.day as day, t.person as person, t.country as country, AVG(r.rating) AS ratingAvg, COUNT(r.rating) AS ratingCount " +
            "FROM Tours t " +
            "JOIN Reviews r ON t.id = r.tourId " +
            "GROUP BY t.id, t.tourName, t.description, t.price, t.day, t.person, t.country")
    List<tourProjection> getTourItems();
}
