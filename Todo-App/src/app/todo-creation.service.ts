import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoCreationService {

  todos=[];
  todoListStream: Subject<any> = new Subject();

  constructor() { }

  getTodoStream(){
    return this.todoListStream;
  }

  addToList(todo) {
    this.todos.push(todo);
    this.publishToStream();
    return this.todos.length;
  }

  publishToStream(){
    this.todoListStream.next({todos:this.todos});
  }

  removeTodo(todo){
    this.todos = this.todos.filter(e=>e!=todo);
    this.publishToStream();
    return this.todos.length;
  }
}
