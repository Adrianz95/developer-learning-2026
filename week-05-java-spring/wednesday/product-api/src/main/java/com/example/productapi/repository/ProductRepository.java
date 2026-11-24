
package com.example.productapi.repository;

import com.example.productapi.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {

    List<Product> findAll();

    Optional<Product> findById(Long id);

    Product save(Product product);

    boolean deleteById(Long id);

    boolean existsById(Long id);

}
