import { Component, signal } from '@angular/core';
import { appDataStore } from './store/app-data.store';

@Component({
  selector: 'app-root',
  template: `
    <component-header-enzo />
    <component-announcement-bar
      *ngIf="showBanner()"
      (dismiss)="handleDismiss()"
    ></component-announcement-bar>

    <router-outlet />
    <component-footer />
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  public appDataStore = appDataStore;
  showBanner = signal(true);

  handleDismiss() {
    this.showBanner.set(false);
  }
}
