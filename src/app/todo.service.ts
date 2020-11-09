import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
  getTodos(): Observable <Array<TodoModel>>{
    return this.http.get<Array<TodoModel>>('http://localhost:3000/todos');
  }


  editTodo(todo: TodoModel): Observable<TodoModel>{
    return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`,todo);
  }

  deleteTodo(id: number | string){
    return this.http.delete<TodoModel>(`http://localhost:3000/todos/${id}`);
  }

  addTodo(todo: TodoModel): Observable<TodoModel>{
    return this.http.post<TodoModel>('http://localhost:3000/todos',todo);
  }
}
