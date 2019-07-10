import { Component, OnInit } from '@angular/core';
import { TodoCreationService } from '../todo-creation.service'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoCreationService:TodoCreationService) { }

  todos=[]
  ngOnInit() {
    this.todoCreationService.getTodoStream()
    .subscribe(e=>{
      this.todos=e.todos;
      console.log(this.todos);
    })
  }
}
