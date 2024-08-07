package com.example.Travel_Planning_BackEnd.base_exception;

public class appException extends RuntimeException {
    private errorCode errorCode;
    public appException(errorCode errorCode) {
        this.errorCode = errorCode;
    }
    public errorCode getErrorCode() {
        return errorCode;
    }
    public void setErrorCode(errorCode errorCode) {
        this.errorCode = errorCode;
    }
}
