import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <component-header></component-header>
    <router-outlet />
    <component-footer></component-footer>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {}
