package com.olcmat.onlinevotes.web;

import com.olcmat.onlinevotes.domain.Product;
import com.olcmat.onlinevotes.domain.User;
import com.olcmat.onlinevotes.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Controller
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @GetMapping("/products")
    public String getProducts(@AuthenticationPrincipal User user, ModelMap model){
//        List<Product> products = productRepo.findAll();
        List<Product> products = productRepo.findByUser(user);

        model.put("products", products);

        return "products";
    }

    @GetMapping("/products/{productId}")
    public String getProduct(@PathVariable Long productId, ModelMap model, HttpServletResponse response) throws IOException {
        Optional<Product> productOpt = productRepo.findByIdWithUser(productId);

        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            model.put("product", product);
        } else {
            response.sendError(HttpStatus.NOT_FOUND.value(), "Product with id " + productId + " was not found");
            return "product";
        }
        return "product";
    }


    @PostMapping("/products/{productId}")
    public String saveProduct(@PathVariable Long productId, Product product) {
        System.out.println(product);

        product = productRepo.save(product);

        return "redirect:/products/"+product.getId();
    }


    @PostMapping("/products")
    public String createProduct(@AuthenticationPrincipal User user) {
        Product product = new Product();

        product.setPublished(false);
        product.setUser(user);
        product = productRepo.save(product);

        return "redirect:/products/"+product.getId();
    }
}


