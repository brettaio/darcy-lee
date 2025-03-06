import { Component, signal } from '@angular/core';
import { appDataStore } from './store/app-data.store';

@Component({
  selector: 'app-root',
  template: `
    <component-header />
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
    console.log('🛑 handleDismiss() called in AppComponent');
    this.showBanner.set(false);
  }
}
