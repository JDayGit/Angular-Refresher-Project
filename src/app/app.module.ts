// This file is basically the entry point for Angular. Where all your components will 'meet'.
// Whenever you want to use a module, such as, the HTTP module -- you'll need to import it below.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

// Angular is composed of several different modules.
// NgModule is the referencing root of those modules.
@NgModule({
  // Whenever a new component is created it MUST be added to declarations.
  // When using the CLI it will automatically put the components in declarations.
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // Providers refers to services you want to include.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
