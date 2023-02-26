package com.fasada;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class OrderServiceFacadeImpl implements OrderServiceFacade{
	
	
	@Autowired
	private ProductRepository repo;
	
    public boolean placeOrder(int pId){
        boolean orderFulfilled=false;
        

        Optional<Product> product = repo.findById(pId);
        int productId = 0;
        if (product.isPresent()) {
            productId = product.get().id;
        }
        

        
        if(InventoryService.isAvailable(product))
        {
            System.out.println("Product with ID: "+ productId +" is available.");
            boolean paymentConfirmed= PaymentService.makePayment();
            if(paymentConfirmed){
                System.out.println("Payment confirmed...");
                ShippingService.shipProduct(product);
                System.out.println("Product shipped...");
                orderFulfilled=true;
            }
        }
        return orderFulfilled;
    }
}
