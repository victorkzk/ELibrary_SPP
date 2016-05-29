package com.antonchernov.yetilibrary.rest.repository;

import com.antonchernov.yetilibrary.rest.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by anton.charnou on 21.03.2016.
 */
public interface AccountRepository extends MongoRepository<Account, Long> {
    Account findByUsername(String username);
}
