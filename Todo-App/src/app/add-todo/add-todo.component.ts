import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { TodoCreationService } from '../todo-creation.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todoInput= new FormControl('');
  constructor(private todoCreationService:TodoCreationService) { }
  todoCount=0;
  ngOnInit() {
    this.todoInput.setValue("Enter new Todo Here");
    this.todoCreationService.getTodoStream()
    .subscribe(e=>{
      this.todoCount=e.todos.length;
    })
  }
  
  todoCreation(){
    console.log(this.todoInput.value);
    this.todoCount=this.todoCreationService.addToList(this.todoInput.value);
  }

  
}
