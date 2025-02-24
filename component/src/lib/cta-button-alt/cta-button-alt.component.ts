import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-cta-button-alt',
  imports: [],
  template: `
    <a
      class="block rounded-[999px] bg-white ring-2 ring-gray-600 px-5 py-2.5 text-2xl hover:shadow-lg hover:shadow-gray-600 hover:inset-shadow-2xl font-bold text-gray-600 transition hover:bg-gray-600 hover:text-gray-100 hover:ring-2 hover:ring-white"
      [href]="appDataStore.brandData().ctaAltLink"
      [innerHTML]="appDataStore.brandData().ctaAltText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonAltComponent {
  appDataStore = appDataStore;
}
