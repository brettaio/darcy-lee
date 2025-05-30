import { Component } from '@angular/core';

import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';

@Component({
  selector: 'component-testimonial-hero',
  imports: [],
  template: `
    <section class="w-full bg-black my-20 flex justify-center"></section>
  `,
  styles: ``,
})
export class TestimonialHeroComponent {
  appDataStore = appDataStore;
}
