package com.amazon.productbackend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

@Document("product")
public class Product
{
    @Id
    private String id;
    private UUID productID;
    private String title;
    private String url;
    private String detailUrl;
    private Integer mrp;
    private Integer cost;
    private String discount;
    private String description;

    public Product() {
    }

    public Product(String id, UUID productID, String title, String url, String detailUrl, Integer mrp, Integer cost, String discount, String description) {
        this.id = id;
        this.productID = productID;
        this.title = title;
        this.url = url;
        this.detailUrl = detailUrl;
        this.mrp = mrp;
        this.cost = cost;
        this.discount = discount;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public UUID getProductID() {
        return productID;
    }

    public void setProductID(UUID productID) {
        this.productID = productID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDetailUrl() {
        return detailUrl;
    }

    public void setDetailUrl(String detailUrl) {
        this.detailUrl = detailUrl;
    }

    public Integer getMrp() {
        return mrp;
    }

    public void setMrp(Integer mrp) {
        this.mrp = mrp;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

