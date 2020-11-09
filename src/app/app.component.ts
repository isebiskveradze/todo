import { Component, OnInit } from '@angular/core';
import { TodoModel } from './models/to-do.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray: Array <TodoModel> = [
    
  ];
  todoIncompletedArray: Array <TodoModel> = [];
  todoCompletedArray: Array<TodoModel> = [];
  

  title = 'todo';

  constructor(private todoService: TodoService){

  }
  ngOnInit(){
    this.todoService.getTodos()
    .subscribe((data)=>{
      this.todoArray = data
      this.todoIncompletedArray = this.todoArray.filter((todo)=>{
        return !todo.completed
      });
      this.todoCompletedArray = this.todoArray.filter((todo)=>{
        return todo.completed
      })
      
    })

    

  }

  deleteTodo(id: number){
    console.log(id, `123`)
    this.todoService.deleteTodo(id)
    .subscribe((data)=>{
      const currentTodo = this.todoArray.find((todo)=>{
        return todo.id === id;
        this.todoIncompletedArray = this.todoArray.filter((todo)=>{
          return !todo.completed
        });
        this.todoCompletedArray = this.todoArray.filter((todo)=>{
          return todo.completed
        })
        
        
      });
      const currentTodoIndex = this.todoArray.indexOf(currentTodo);
      this.todoArray.splice(currentTodoIndex, 1);


    })
  }

  addNewTodo(newTodo){
    this.todoService.addTodo(newTodo)
    .subscribe((data)=>{
      this.todoArray.push(data);
      console.log(data);
      this.todoIncompletedArray = this.todoArray.filter((todo)=>{
        return !todo.completed
      });
      this.todoCompletedArray = this.todoArray.filter((todo)=>{
        return todo.completed
      })


    })


  }
}
