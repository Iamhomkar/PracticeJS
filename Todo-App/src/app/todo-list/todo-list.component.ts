import { Component, OnInit } from '@angular/core';
import { TodoCreationService } from '../todo-creation.service'
import { FilteringService } from '../filtering.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoCreationService:TodoCreationService,private filterService:FilteringService) { }
  property="title"
  orderby="asc"
  todos=[]
  ngOnInit() {
    this.todoCreationService.getTodoStream()
    .subscribe(e=>{
      this.todos=e.todos;
      console.log("todo-list ",this.todos);
    });
    this.todoCreationService.loadTodos();

    this.filterService.getFilterStream()
    .subscribe(e=>{
      this.property=e.prop;
      this.orderby=e.order;
      console.log("subs are ",this.property,this.orderby)
    });
  }
}
