import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../shared/interfaces';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  template: `
    <input
      type="text"
      [(ngModel)]="todoName"
      class="flex-auto border"
      placeholder="Entrez une todo"
    />
    <button (click)="addTodoInput()" class="btn btn-primary">Ajouter</button>
  `,
  styles: `
    :host {
      display:flex;
      gap:12px;
    }
  `,
})
export class TodoFormComponent {
  todoName =" ";
  addTodo = output<Todo>();

  addTodoInput(){
    if (this.todoName){
      const newTodo = {
        name: this.todoName,
        done: false,
        id: ''+ Math.floor(Math.random() * 1001)
      };
      this.todoName = ' ';
      this.addTodo.emit(newTodo);
    }
  }

}