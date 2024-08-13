package com.example.Travel_Planning_BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Tours {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    @Column(name = "tour_name")
    String tourName;
    String description;
    int price;
}
