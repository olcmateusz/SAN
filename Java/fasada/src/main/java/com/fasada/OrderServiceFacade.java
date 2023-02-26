package com.fasada;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public interface OrderServiceFacade {
    boolean placeOrder(int productId);
}