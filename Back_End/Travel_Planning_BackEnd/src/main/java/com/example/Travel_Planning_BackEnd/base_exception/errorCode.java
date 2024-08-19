package com.example.Travel_Planning_BackEnd.base_exception;

public enum errorCode {
    USER_NOT_FOUND(1000,"User Not Found"),
    EMAIL_USER_ALREADY_EXIST(999,"Email User Already Exist"),
    NOT_FOUND_TOUR_BY_NAME(998,"Not Found Tour By Name"),
    CREATE_REIVEW_FAILED(997,"Create Reivew Failed"),
    ;
    int idCode;
    String message;
    errorCode(int idCode, String message) {
        this.idCode=idCode;
        this.message=message;
    }
    public int getIdCode() {
        return idCode;
    }
    public String getMessage() {
        return message;
    }

}
