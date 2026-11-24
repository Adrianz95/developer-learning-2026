
package com.example.productapi.exception;

import java.util.List;

public class InvalidProductException extends RuntimeException {

    private final List<String> errors;

    public InvalidProductException(List<String> errors) {
        super("Datos de producto no válidos: " + String.join("; ", errors));
        this.errors = List.copyOf(errors);
    }

    public List<String> getErrors() {
        return errors;
    }

}
