import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // Below: property is 'todos' and type is 'Todo'. Because Angular doesn't know what a 'Todo' is
  // we basically need to create it below and import its properties from the models folder.
  todos:Todo[];

  // Generally don't want to use the constructor too much. Rely more on ngOnInit()
  // Constructor is used primarily to import services.
  // lowercase 'todoService' is a variable. uppercase 'TodoService' refers to the actual service that's being imported.
  constructor(private todoService:TodoService) {}

  // Lifecycle methods. Similiar to componentDidMount in React
  ngOnInit() {
    // Were getting back an observable from 'todo.service'. Think of '.subscribe()' basically as '.then()'
    // 'this.todos' references the 'todos:Todo[]' on line 13.
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo){
    // Delete from UI
    // 't' represents the todos that are not being set for deletion. 'todo.id' is the todo you clicked on to delete.
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    // Add to UI
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
