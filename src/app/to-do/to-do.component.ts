import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() deleteTodoEmit = new EventEmitter<number>();
  editMode: boolean;
  completed: boolean;
  
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  deleteTodoFunc(){
    // console.log(this.todo.id)
    const todoId = this.todo.id;
    this.deleteTodoEmit.emit(todoId)
    
  }
  canselFunc(){
    if(this.editMode){
      location.reload()
    };
    this.editMode = !this.editMode
  }
  
  get editButton(){
    if(this.editMode){
      
      return 'Cancel Editing'
    } else {
      return `Edit Todo`;
    }
    

  }
  editTodoFunc(){
    this.todoService.editTodo(this.todo)
    .subscribe(()=>{

    })
    this.editMode = !this.editMode;

  }
  isCompleted(){
    
    this.todo.completed = !this.todo.completed;
    console.log(this.todo.completed);
    this.todoService.editTodo(this.todo)
    .subscribe(()=>{
      location.reload();

    })
    this.completed = !this.completed
   
  }
  get buttonCompleted(){
    if(!this.todo.completed){
      return 'Completed'
    } else{
      return 'Do It Again'
    }
  }

  

}
