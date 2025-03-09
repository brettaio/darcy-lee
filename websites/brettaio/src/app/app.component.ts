import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <component-header-brettaio />
    <router-outlet />
    <component-footer-brettaio />
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'brettaio';
}
