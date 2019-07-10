import { Component, OnInit, Input } from '@angular/core';
import { TodoCreationService } from '../todo-creation.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo;

  constructor(private todoCreationService:TodoCreationService) { }

  ngOnInit() {
  }
  removeTodo(){
    console.log("removing "+this.todo);
    this.todoCreationService.removeTodo(this.todo);
  }
}
