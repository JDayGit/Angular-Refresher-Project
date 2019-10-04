import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  // this output is necessary to bring the event in 'onDelete(todo)' to the parent component which is
  // the Todos component. Step 2 is in 'todos.component.html'.
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
    console.log(todo));
  }

  // in order to delete we need to emit event upwards eventually to todo.component.html
  // to do so we use 'EventEmitter' and 'Output' imported from '@angular/core'.
  onDelete(todo){
    // Delete in UI
    this.deleteTodo.emit(todo);
  }

}
