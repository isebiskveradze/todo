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
    
    this.todoService.deleteTodo(id)
    .subscribe((data)=>{
      // for (let i = 0; i < this.todoArray.length; i++) {
      //   if(id === this.todoArray[i].id){
      //     this.todoArray.splice(i,1);
      //     this.todoIncompletedArray = this.todoArray.filter((todo)=>{
      //       return !todo.completed
      //     });
      //     this.todoCompletedArray = this.todoArray.filter((todo)=>{
      //       return todo.completed
      //     })
      //     break;
      //   }
      // }
      const currentTodo = this.todoArray.find((todo)=>{
        return todo.id === id;
      });
      
      const currentTodoIndex = this.todoArray.indexOf(currentTodo);
      this.todoArray.splice(currentTodoIndex, 1);
      
      this.todoIncompletedArray = this.todoArray.filter((todo)=>{
        return !todo.completed
      });
      this.todoCompletedArray = this.todoArray.filter((todo)=>{
        return todo.completed
      })


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



// deleteToDo(id) {
//   this.todoService.deleteTodo(id)
//     .subscribe(() => {
//       for (let i = 0; i < this.todos.length; i++) {
//         if (id === this.todos[i].id) {
//           this.todos.splice(i, 1);
//           this.completedTodosArr = this.todos.filter((todo)=>{
//             return todo.completed
//           })
//           this.inCompletedTodosArr = this.todos.filter((todo)=>{
//             return !todo.completed
//           })
//           break;
//         }

//       }
//     })

// }