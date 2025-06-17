import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  standalone: false,
  template: `
    <ng-container *ngIf="todo$ | async as t; else notFound">
      <h2 [class.completed]="t.completed">{{ t.title }}</h2>
      <button (click)="toggle()">Toggle Complete</button>
      <button (click)="delete()">Delete & Back</button>
      <a routerLink="/todos">Back To List</a>

      <hr />

      <h3>All Todos</h3>

      <ul>
        <li *ngFor="let item of todos$ | async">
          <input
            type="checkbox"
            [checked]="item.completed"
            (change)="toggleTask(item.id)"
          />
          <span [class.completed]="item.completed">{{ item.title }}</span>
          <button (click)="deleteTask(item.id)">x</button>
        </li>
      </ul>
    </ng-container>

    <ng-template #notFound>
      <p>
        Todo Not Found.
        <a routerLink="/todos">Go Back.</a>
      </p>
    </ng-template>
  `,
  styles: ``,
})
export class TodoDetailsComponent implements OnInit {
  todo$!: Observable<Todo | undefined>;
  todos$!: Observable<Todo[]>;
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo$ = this.todoService.getTodoById(this.id);
    this.todos$ = this.todoService.getTodos();
  }

  toggle() {
    this.todoService.toggle(this.id);
  }

  delete() {
    this.todoService.delete(this.id);
    this.router.navigate(['todos']);
  }

  toggleTask(id: number) {
    this.todoService.toggle(id);
  }

  deleteTask(id: number) {
    this.todoService.delete(id);
  }
}
