import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-cta-button-alt',
  imports: [],
  template: `
    <a
      class="rounded-sm bg-black px-12 py-3 text-xl font-bold text-white transition hover:bg-red-700 hover:drop-shadow-lg"
      [href]="appDataStore.brandData().ctaAltLink"
      [innerHTML]="appDataStore.brandData().ctaAltText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonAltComponent {
  appDataStore = appDataStore;
}
