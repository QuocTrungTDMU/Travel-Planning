package com.example.Travel_Planning_BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    @Column(name = "user_id")
    String userId;
    @Column(name = "tour_id")
    String tourId;
    int rating;
    String comment;
    @Column(name = "create_date")
    LocalDate createDate = LocalDate.now();
    @Column(name = "update_date")
    LocalDate updateDate = LocalDate.now();

}
