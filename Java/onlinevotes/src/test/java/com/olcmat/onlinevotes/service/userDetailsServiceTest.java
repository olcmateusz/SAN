package com.olcmat.onlinevotes.service;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


class userDetailsServiceTest {
    @Test
    public void generateEncryptedPassword(){
        BCryptPasswordEncoder ecnoder = new BCryptPasswordEncoder();
        String rawPassword = "admin";
        String encodedPassword = ecnoder.encode(rawPassword);

        System.out.println(encodedPassword);

    }
}