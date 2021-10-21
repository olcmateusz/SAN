package com.olcmat.onlinevotes.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class dashboardController {
    @GetMapping("/")
    public String mainView(){
        return "index";
    }

    @GetMapping("/dashboard")
    public String dashboard(){
        return"dashboard";
    }
}
