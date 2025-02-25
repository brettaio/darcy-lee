import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-cta-button',
  imports: [],
  template: `
    <a
      class="block rounded-[999px] ring-2 ring-white bg-gray-600 px-5 py-2.5 text-2xl hover:shadow-lg hover:shadow-gray-600 hover:inset-shadow-2xl font-bold text-gray-100 transition hover:bg-white hover:text-gray-600 hover:ring-2 hover:ring-gray-600"
      [href]="appDataStore.brandData().ctaLink"
      [innerHTML]="appDataStore.brandData().ctaText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonComponent {
  appDataStore = appDataStore;
}
