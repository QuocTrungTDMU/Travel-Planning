package com.example.Travel_Planning_BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;
    @Column(name = "user_id")
    String userId;
    @Column(name = "tour_id")
    String tourId;
    @Column(name = "booking_date")
    LocalDate bookingDate;
    @Column(name = "name_contact")
    String nameContact;
    @Column(name = "phone_number")
    String phoneNumber;
    String email;
    LocalDate dayofbirth;
    Integer members;
    @Column(name = "location_start")
    String localtionStart;
    String type;
    BigDecimal pay;
    @Column(name = "status_pay")
    Boolean statusPay;
    String note;
    Boolean status;

}
