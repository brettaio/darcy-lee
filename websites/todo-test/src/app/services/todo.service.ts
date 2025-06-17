import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos$ = new BehaviorSubject<Todo[]>([]);
  private idCounter = 1;

  getTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  getTodoById(id: number): Observable<Todo | undefined> {
    return this.todos$.pipe(map((list) => list.find((t) => t.id === id)));
  }

  add(title: string): void {
    const newTodo: Todo = {
      id: this.idCounter++,
      title,
      completed: false,
    };
    this.todos$.next([newTodo, ...this.todos$.value]);
  }

  toggle(id: number): void {
    const updated = this.todos$.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    this.todos$.next(updated);
  }

  delete(id: number): void {
    this.todos$.next(this.todos$.value.filter((todo) => todo.id !== id));
  }
}
