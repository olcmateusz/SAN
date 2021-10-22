package com.olcmat.onlinevotes.security;


import com.olcmat.onlinevotes.domain.User;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
public class Authority implements GrantedAuthority {

    private Long id;
    private String authority;
    private User user;


    @Override
    public String getAuthority(){
        return this.authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @ManyToOne
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
