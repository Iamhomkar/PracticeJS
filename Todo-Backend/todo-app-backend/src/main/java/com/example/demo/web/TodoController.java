package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;


//@CrossOrigin(origins= {"*"})
//@RestController
//@RequestMapping("/")
@Controller
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepository;
	
//	@RequestMapping(value="/gettodo",method=RequestMethod.GET)
	@GetMapping(value = "/todo")
	public List<Todo> getAll() {
		System.out.println("here");
		return todoRepository.findAll(); 
	}
	@RequestMapping(value="/todo",method=RequestMethod.POST,produces = "application/json",consumes = "application/json")
	public ResponseEntity<?> addNewTodo(@RequestBody Todo todo) {
		todo=todoRepository.save(todo);
		ResponseEntity<Todo> responseEntity=new ResponseEntity<Todo>(todo, HttpStatus.CREATED);
		return responseEntity;
	}
}
