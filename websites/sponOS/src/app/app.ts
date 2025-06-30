import { Component } from '@angular/core';
import { LoginModalService } from '../../../../service/src/services';



@Component({
  selector: 'app-root',
  template: `
    <component-header/>
    <component-login *ngIf="loginModal.visible$ | async " (close)="loginModal.close()" />
    <router-outlet />
  `,
  standalone: false,
  styles: [],
})
export class App {
 constructor(public loginModal: LoginModalService) {}
}
