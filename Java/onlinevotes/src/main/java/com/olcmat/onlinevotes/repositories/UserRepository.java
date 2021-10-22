package com.olcmat.onlinevotes.repositories;

import com.olcmat.onlinevotes.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
