
package com.example.productapi.service;

import com.example.productapi.DTO.ProductResponse;
import com.example.productapi.exception.InvalidProductException;
import com.example.productapi.exception.ProductNotFoundException;
import com.example.productapi.model.Product;
import com.example.productapi.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(Long id) {
        return repository.findById(id).
                orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product create(ProductResponse response) {
        validate(response);
        Product product = new Product(null, response.name().trim(), response.price(), response.stock());
        return repository.save(product);
    }

    public Product update(Long id, ProductResponse response) {
        if (!repository.existsById(id)) {
            throw new ProductNotFoundException(id);
        }
        validate(response);
        Product product = new Product(id, response.name().trim(), response.price(), response.stock());
        return repository.save(product);
    }

    public void delete(Long id) {
        if (!repository.deleteById(id)) {
            throw new ProductNotFoundException(id);
        }
    }

    private void validate(ProductResponse response) {
        List<String> errors = new ArrayList<>();

        if (response == null) {
            throw new InvalidProductException(List.of("El cuerpo de la petición es obligatorio"));
        }
        if (response.name() == null || response.name().isBlank()) {
            errors.add("El nombre es obligatorio");
        }
        if (response.price() == null) {
            errors.add("El precio es obligatorio");
        } else if (response.price().compareTo(BigDecimal.ZERO) < 0) {
            errors.add("El precio no puede ser negativo");
        }
        if (response.stock() == null) {
            errors.add("El stock es obligatorio");
        } else if (response.stock() < 0) {
            errors.add("El stock no puede ser negativo");
        }

        if (!errors.isEmpty()) {
            throw new InvalidProductException(errors);
        }
    }

}
