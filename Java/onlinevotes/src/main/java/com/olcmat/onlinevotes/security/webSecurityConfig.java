package com.olcmat.onlinevotes.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class webSecurityConfig extends WebSecurityConfigurerAdapter {

    @Qualifier("userDetailsServiceImpl") //Czy napewno?
    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web){
        web.ignoring().antMatchers("/static/**");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(getPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                    .antMatchers("/").permitAll()
                    .antMatchers("/register").permitAll()
                    .antMatchers("/resources/**").permitAll()
                    .antMatchers("/css/**", "/Czcionki/**", "/IMG/**", "/JS/**").permitAll()
                    .antMatchers("/admin/**").hasRole("ADMIN")
                    .anyRequest().hasRole("USER").and()
                .formLogin()
                    .loginPage("/login")
                    .permitAll()
                    .defaultSuccessUrl("/dashboard")
                    .and()
                .logout()
                    .logoutUrl("/logout")
                    .permitAll();
//        super.configure(http);
    }
}
