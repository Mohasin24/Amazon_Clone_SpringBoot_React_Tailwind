package com.amazon.productbackend.service;

import com.amazon.productbackend.dao.ProductDao;
import com.amazon.productbackend.entity.Product;
import com.amazon.productbackend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductDaoImpl implements ProductDao {

    private ProductRepo productRepo;

    @Autowired
    public ProductDaoImpl(ProductRepo productRepo){
        this.productRepo=productRepo;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public Optional<Product> getProductById(String id) {
        return productRepo.findById(id);
    }

    @Override
    public List<Product> saveAllProduct(List<Product> list) {
       return productRepo.saveAll(list);
    }

    @Override
    public Product saveProduct(Product product) {
        product.setProductID(UUID.randomUUID());
        return productRepo.save(product);
    }

    @Override
    public void deleteAllProducts() {
        productRepo.deleteAll();
    }


}
