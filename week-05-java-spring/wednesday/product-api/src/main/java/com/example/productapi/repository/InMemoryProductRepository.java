
package com.example.productapi.repository;

import com.example.productapi.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class InMemoryProductRepository implements ProductRepository {

    private final Map<Long, Product> products = new ConcurrentSkipListMap<>();
    private final AtomicLong sequence = new AtomicLong(0);

    @Override
    public List<Product> findAll() {
        return new ArrayList<>(products.values());
    }

    @Override
    public Optional<Product> findById(Long id) {
        return Optional.ofNullable(products.get(id));
    }

    @Override
    public Product save(Product product) {
        if (product.getId() == null) {
            product.setId(sequence.incrementAndGet());
        }
        products.put(product.getId(), product);
        return product;
    }

    @Override
    public boolean deleteById(Long id) {
        return products.remove(id) != null;
    }

    @Override
    public boolean existsById(Long id) {
        return products.containsKey(id);
    }

}
