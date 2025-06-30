import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../../service/src/services';
import { LoginModalService } from '../../../../service/src/services';
@Component({
  selector: 'component-header',
  standalone: true,
  imports: [ CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <!-- header.component.html -->
 <header class="bg-white p-4 shadow">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a routerLink="/" class="font-bold text-xl">Sponus</a>
        <div>
          <button
            *ngIf="!(auth.currentPlayer$ | async)"
            (click)="loginModal.open()"
            class="px-3 py-2 text-sm font-medium text-gray-900 hover:underline"
          >
            Login
          </button>
          <button
            *ngIf="auth.currentPlayer$ | async"
            (click)="auth.logout().subscribe()"
            class="px-3 py-2 text-sm font-medium text-gray-900 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

  `,
})
export class HeaderComponent {
 constructor(
  public auth: AuthService,
  public loginModal: LoginModalService) {}

}