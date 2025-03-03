import { Component } from '@angular/core';
import { appDataStore } from './store/app-data.store';

@Component({
  selector: 'app-root',
  template: `
    <component-header />
    <component-announcement-bar
      [customClasses]="appDataStore.homeData().announcementBarColour"
    ></component-announcement-bar>

    <router-outlet />
    <component-footer />
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  public appDataStore = appDataStore;
}
