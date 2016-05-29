package com.antonchernov.yetilibrary.rest.controller;

import com.antonchernov.yetilibrary.rest.model.Book;
import com.antonchernov.yetilibrary.rest.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * Created by anton.charnou on 21.03.2016.
 */
@RestController

@RequestMapping("rest/books")
@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
public class BookController {
    @Autowired
    public BookRepository repository;



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Book getBookById(@PathVariable String id) {

        return repository.findOne(id);
    }


    @RequestMapping(method = RequestMethod.GET)
    public Page<Book> getBooksPage(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public Book createBook(@RequestBody Book newBook) {
        newBook.setId(null);
        return repository.save(newBook);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Book updateBook(@PathVariable String id, @RequestBody Book updatedBook) {

        updatedBook.setId(id);
        return repository.save(updatedBook);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    void deleteBook(@PathVariable String id) {

        repository.delete(id);
    }


    @RequestMapping(value = "/search/byTitle/{firstName}", method = RequestMethod.GET)
    public Book getBookByTitle(@PathVariable String firstName) {

        return repository.findByTitle(firstName);
    }
}
