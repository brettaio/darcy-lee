import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  template: `
    <div class="add-item">
      <input
        [(ngModel)]="newTitle"
        placeholder="New Task"
        (keyup.enter)="add()"
      />
      <button (click)="add()">Add</button>
    </div>

    <ul>
      <li *ngFor="let t of todos$ | async">
        <input
          type="checkbox"
          [checked]="t.completed"
          (change)="toggle(t.id)"
        />
        <a [routerLink]="['/todos', t.id]">{{ t.title }}</a>
        <button (click)="delete(t.id)">x</button>
      </li>
    </ul>
  `,
  styles: ``,
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  newTitle = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  add() {
    const t = this.newTitle.trim();
    if (!t) return;
    this.todoService.add(t);
    this.newTitle = '';
  }

  toggle(id: number) {
    this.todoService.toggle(id);
  }

  delete(id: number) {
    this.todoService.delete(id);
  }
}
