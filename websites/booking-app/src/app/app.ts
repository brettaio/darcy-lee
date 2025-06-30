import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <page-booking-app />
  `,
  standalone: false,
  styles: []
})
export class App {
  protected title = 'booking-app';
}
