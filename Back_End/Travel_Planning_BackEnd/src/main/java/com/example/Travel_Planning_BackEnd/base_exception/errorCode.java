package com.example.Travel_Planning_BackEnd.base_exception;

public enum errorCode {
    USER_NOT_FOUND(1000,"User Not Found"),
    EMAIL_USER_ALREADY_EXIST(999,"Email User Already Exist"),
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
