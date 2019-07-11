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
    this.todoCreationService.removeTodo(this.todo.id);
  }
  markCompleted(){
    this.todo.completed=true;
    this.todoCreationService.updateStatus(this.todo.id);
  }
}
