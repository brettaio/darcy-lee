import { Component } from '@angular/core';
import { CtaButtonAltComponent } from '../cta-button-alt/cta-button-alt.component';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-hero',
  imports: [CtaButtonAltComponent],
  template: `
    <section
      class="overflow-hidden bg-slate-200 md:grid md:grid-cols-2 md:items-center md:h-[90vh] lg:h-screen"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <span
            class="sr-only"
            [innerHTML]="appDataStore.homeData().heroH1"
          ></span>
          <div
            class="text-3xl font-bold text-gray-900"
            [innerHTML]="appDataStore.homeData().heroH2"
          ></div>

          <div
            class="text-gray-500 mt-12 text-justify leading-8"
            [innerHTML]="appDataStore.homeData().heroParagraph"
          ></div>

          <div class="m-12 inline-block xs:hidden">
            <component-cta-button-alt />
          </div>
        </div>
      </div>

      <img
        alt=""
        [src]="appDataStore.homeData().heroImageLink"
        class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  appDataStore = appDataStore;
}
