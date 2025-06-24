import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <component-header />
    <router-outlet />
    <h1>Welcome to {{ subltitle }}!</h1>
  `,
  standalone: false,
  styles: [],
})
export class App {
  protected title = 'sponus';
  protected subltitle = `We are ${this.title}`;
}
