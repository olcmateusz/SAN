package com.fasada;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Products")
public class Product {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
    private String name;
    private int quantityAvailable;
    
    
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public int getQuantityAvailable() {
		return quantityAvailable;
	}
    
   
}
