import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];

  constructor() {
    
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "Description2",
        active: true
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "Description3",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log("del",todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }

  addTodo(todo:Todo){
    console.log("Add",todo);
    this.todos.push(todo);
  }

}
