package com.amazon.productbackend.controller;

import com.amazon.productbackend.dao.ProductDao;
import com.amazon.productbackend.entity.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/amazon")
public class ProductController
{
    private ProductDao productDao;

    public ProductController(ProductDao productDao){
        this.productDao = productDao;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return  productDao.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public Optional<Product> getProductById(@PathVariable String id){
        return productDao.getProductById(id);
    }

    @PostMapping("/save-all")
    public List<Product> saveAllProducts(@RequestBody List<Product> list)
    {
        list.forEach(product -> product.setProductID(UUID.randomUUID()));
        return productDao.saveAllProduct(list);
    }

    @PostMapping("/save")
    public Product saveProduct(@RequestBody Product product){
        return productDao.saveProduct(product);
    }

    @DeleteMapping("/delete-all")
    public void deleteAllProduct(){
        productDao.deleteAllProducts();
    }
}
