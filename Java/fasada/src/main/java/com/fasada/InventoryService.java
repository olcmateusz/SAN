package com.fasada;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class InventoryService {
	public static boolean isAvailable(Optional<Product> product) {
		
		return true;
	}
}
