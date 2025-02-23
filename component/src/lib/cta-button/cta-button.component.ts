import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-cta-button',
  imports: [],
  template: `
    <a
      class="block rounded-md bg-black px-5 py-2.5 text-xl font-bold text-white transition hover:bg-red-700 hover:drop-shadow-lg"
      [href]="appDataStore.brandData().ctaLink"
      [innerHTML]="appDataStore.brandData().ctaText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonComponent {
  appDataStore = appDataStore;
}
