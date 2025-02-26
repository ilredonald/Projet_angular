import { Component, signal } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';
import { Todo } from '../shared/interfaces';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent],
  template: `

    <app-todo-form (addTodo)= "addTodo($event)"/>
    <app-todos-list (toggleTodo)="toggleTodo($event)" [todosList]="todosList()" />
  `,
  styles: `
    :host {
      padding: 32px;
    }
  `,
})
export class TodoContainerComponent {
  todosList = signal<Todo[]>([
    {
      id: '1',
      name: 'Ranger ma chambre',
      done: false,
    },
    {
      id: '2',
      name: 'Apprendre Angular',
      done: true,
    },
    {
      id: '3',
      name: 'Lire crime et chatiment',
      done: false,
    },
  ]);

  addTodo(todo: Todo){
    this.todosList.update((todos) => [...todos , todo]);
  }
  
  toggleTodo(todoId: string){
    this.todosList.update((todos) =>
    todos.map((todo) =>{
      if(todoId === todo.id){
        return {
          ...todo ,
          done: !todo.done,
        }
      }else{
        return todo;
      }
    })
  );
  }
}