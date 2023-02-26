package com.fasada;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class OrderFulfillmentControllerTest {
    @Test
    public void testOrderProduct() throws Exception {
        OrderFulfillmentController controller=new OrderFulfillmentController();
        controller.facade=new OrderServiceFacadeImpl();
        controller.orderProduct(2);
        boolean result=controller.orderFulfilled;
        assertTrue(result);
    }

}
