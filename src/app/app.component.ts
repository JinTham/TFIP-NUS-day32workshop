import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32workshop';

  todos:Todo[] = []

  processNewTodo(todo:Todo) {
    console.info(todo)
    this.todos.unshift(todo)
  }
}
