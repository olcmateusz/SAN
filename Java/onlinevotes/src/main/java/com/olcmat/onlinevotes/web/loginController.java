package com.olcmat.onlinevotes.web;

import com.olcmat.onlinevotes.domain.User;
import com.olcmat.onlinevotes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class loginController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/login2")
    public String login2(){
        return "login2";
    }

    @GetMapping("/register")
    public String register(ModelMap model){
        model.put("user", new User());
        return  "register";
    }

    @PostMapping("/register")
    public String registerPost(User user){
        User savedUser = userService.save(user);
//        System.out.println(user);
//        System.out.println(savedUser);
        return "redirect:/login";
    }

}
