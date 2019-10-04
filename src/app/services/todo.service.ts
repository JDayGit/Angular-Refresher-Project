// Injectable allows us to insert this service into a constructor within a component.
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import Todo from 'app.module.ts' in order to use in the below HttpClient calls.
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Below makes the URL a property for this service to pass along.
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // to avoid the limit of todos in the above url, we create a 'todosLimit' property.
  todosLimit = '?_limit=10';

  // lowercase 'http' is the variable set to 'HttpClient'
  constructor(private http:HttpClient) {}

  // GET: get todos from the database
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  };

  // PUT: toggle todo completion status on the database
  toggleCompleted(todo: Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // DELETE: delete todo from the database
  deleteTodo(todo:Todo):Observable<{}> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  // POST: add new todo to the database
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
