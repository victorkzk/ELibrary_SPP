package com.antonchernov.yetilibrary;

import com.antonchernov.yetilibrary.rest.model.Account;
import com.antonchernov.yetilibrary.rest.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;

@SpringBootApplication
@EnableConfigurationProperties
public class YetiLibraryApplication {


    public static void main(String[] args) {
        SpringApplication.run(YetiLibraryApplication.class, args);
    }

    @Autowired
    AccountRepository userRepository;


}
