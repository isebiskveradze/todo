import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoModel } from '../models/to-do.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() sendAddTodo = new EventEmitter();

  addMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitNewTodoForm(newTodoForm){
    const inputTitle = newTodoForm.controls.formTitle.value;
    const inputDescription = newTodoForm.controls.formDescription.value;
    
    if(inputTitle && inputDescription){
      const addNewTodo = new TodoModel (inputTitle, inputDescription, false, null);
      this.sendAddTodo.emit(addNewTodo);
      this.addMode = !this.addMode;


    } else{
      alert('please fill all data')
    }
  }

}
