import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [innerHTML]="Heading"></h1>

    <router-outlet />
  `,
  standalone: false,
  styles: [],
})
export class App {
  protected title = 'todo-test';
  author = 'Brett Connell';
  client = 'Closer.ca';
  date = new Date();

  Heading = `Welcome to the best ever built ${this.title}.<br> My name is ${this.author} and this is a tech test for ${this.client} <br> on ${this.date}`;
}
