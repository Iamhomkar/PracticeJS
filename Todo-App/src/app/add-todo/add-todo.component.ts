import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { TodoCreationService } from '../todo-creation.service'
import { FilteringService } from '../filtering.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public isCollapsed = true;
  order="asc"
  todoInput= new FormControl('');
  constructor(private todoCreationService:TodoCreationService,private filteringService:FilteringService) { }
  ngOnInit() {
    this.todoCreationService.getTodoStream()
    .subscribe(e=>{
    });
  }
  
  todoCreation(){
    if(this.todoInput.value.length)
    {
      console.log(this.todoInput.value);
      this.todoCreationService.addToList(this.todoInput.value);
    }
  }

  filter(prop){
    if(this.order==="asc")
    {
      this.order="desc";
    }else
    {
      this.order="asc"
    }
    this.filteringService.setFilterProps(prop,this.order)
  }  
}
