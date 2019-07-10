package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;

@SpringBootApplication(scanBasePackages={ "com.example.demo.model", "com.example.demo.repository","com.example.demo.controller"})
public class TodoAppBackendApplication {

//	@Autowired
//	static TodoRepository todoRepository;
	public static void main(String[] args) {
		SpringApplication.run(TodoAppBackendApplication.class, args);
//		todoRepository.save((new Todo(1,"new Todo")));
	}

}
