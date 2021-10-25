package com.olcmat.onlinevotes.service;

import com.olcmat.onlinevotes.domain.User;
import com.olcmat.onlinevotes.repositories.UserRepository;
import com.olcmat.onlinevotes.security.Authority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User save(User user){
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        Authority authority = new Authority();
        authority.setAuthority("ROLE_USER");
        authority.setUser(user);
        user.getAuthorities().add(authority);

        return userRepo.save(user);
    }
}
