import { Component, input, output } from '@angular/core';
import { Todo } from '../shared/interfaces';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    @let t = todo();
    <li class="flex px-12 gap-12 border">
      <p class="flex-auto">{{ t.name }}</p>
      <input type="checkbox" />
    </li>
  `,
  host: {
    '(click)': 'toggleTodo.emit(todo().id)',
  },
  styles: ``,
})
export class TodoComponent {
  todo = input.required<Todo>();
  toggleTodo = output<string>();
}