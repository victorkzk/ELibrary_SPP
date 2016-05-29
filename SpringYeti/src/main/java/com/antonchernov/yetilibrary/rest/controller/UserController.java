package com.antonchernov.yetilibrary.rest.controller;

import com.antonchernov.yetilibrary.rest.model.Account;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by anton.charnou on 23.03.2016.
 */
@RequestMapping("/rest/users")
@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
@RestController
public class UserController {


    @RequestMapping(value = "/roles",method = RequestMethod.GET)
    public ResponseEntity getGreetings() {
        Account user = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return new ResponseEntity(user.getAuthorities(), HttpStatus.OK);
    }
}
