import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // this output is necessary to bring the event in 'onSubmit()' to the parent component which is
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;
  constructor() { }

  ngOnInit() {
  }

  // Just like delete, need to emit upwards. Need to catch in 'todos.component.html'
  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
    this.title = '';

  }

}
