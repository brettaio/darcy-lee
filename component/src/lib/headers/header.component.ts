import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SponOSAuthService } from '../../../../service/src/services';
import { LoginModalService } from '../../../../service/src/services';
import { Router } from '@angular/router';
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
        <ng-container *ngIf="auth.currentPlayer$ | async as user; else showLogin">
          <button
            (click)="onLogout()"
            class="px-3 py-2 text-sm font-medium text-gray-900 hover:underline"
          >
            Logout
          </button>
        </ng-container>
        <ng-template #showLogin>
          <button
            (click)="loginModal.open()"
            class="px-3 py-2 text-sm font-medium text-gray-900 hover:underline"
          >
            Login
          </button>
        </ng-template>
      </div>
    </header>

  `,
})
export class HeaderComponent {
 constructor(
  public auth: SponOSAuthService,
  public loginModal: LoginModalService,
  private router:     Router) {}


  onLogout(): void {
    this.auth.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    })
  }
}