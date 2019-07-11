import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class TodoCreationService {  
  todos=[];
  todoListStream: Subject<any> = new Subject();

  constructor(private http:HttpClient) { }

  getTodoStream(){
    return this.todoListStream;
  }


  addToList(todo) {
    // console.log("here s ",todo)
    let api = "http://localhost:8651/addNewTodo"
    this.http.post(api,{title:todo})
    .subscribe(e=>{
      console.log(e);
      this.todos.push(e);
    });
  }

  loadTodos(){
    let api="http://localhost:8651/getAllTodo";
    this.http.get(api)
    .subscribe((e:any)=>{
      this.todos=e;
      this.publishToStream({todos:this.todos});
    });
  }

  publishToStream(value){
    this.todoListStream.next(value);
  }

  getTodoCount(): number {
    return Object.keys(this.todos).length;
  }

  removeTodo(todo){
    let api = "http://localhost:8651/id/"+todo;
    this.http.delete(api).subscribe(e=>{
      console.log("init ",this.todos);
      this.todos=this.todos.filter(e=>e.id!=todo);
      this.publishToStream({todos:this.todos});
      console.log(e)
    });
  }
  updateStatus(id: any) {
    throw new Error("Method not implemented.");
  }
}
