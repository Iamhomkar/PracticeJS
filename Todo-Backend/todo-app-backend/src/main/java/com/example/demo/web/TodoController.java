package com.example.demo.web;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;


@CrossOrigin(origins= {"*"})
@RestController
//@RequestMapping("/")
//@Controller
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepository;
	
//	@RequestMapping(value="/gettodo",method=RequestMethod.GET)
	@GetMapping(value = "/getAllTodo")
	public List<Todo> getAll() {
		System.out.println("here");
		return todoRepository.findAll(); 
	}
	@RequestMapping(value="/addNewTodo",method=RequestMethod.POST,produces = "application/json",consumes = "application/json")
	public ResponseEntity<?> addNewTodo(@RequestBody Todo todo) {
		todo.setCreationTime(LocalDateTime.now());
		todo=todoRepository.save(todo);
		ResponseEntity<Todo> responseEntity=new ResponseEntity<Todo>(todo, HttpStatus.CREATED);
		return responseEntity;
	}
	
	@RequestMapping(value="/getdata.htm",method=RequestMethod.GET,consumes = "application/json")
	public @ResponseBody String getData()
	{
		return "Well Done";
	}
	
	@RequestMapping(value="/id/{id}",method=RequestMethod.DELETE)
	public @ResponseBody Boolean removeTodo(@PathVariable Integer id)
	{
		System.out.println("delete this todo "+id);
		try {
			todoRepository.deleteById(id);
		}catch(Exception e)
		{
			System.out.println("exception "+e);
			return false;
		}
		return true;
	}
}
