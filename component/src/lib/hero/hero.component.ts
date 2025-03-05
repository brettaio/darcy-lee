import { Component } from '@angular/core';
import { CtaButtonAltComponent } from '../cta-button-alt/cta-button-alt.component';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-hero',
  imports: [CtaButtonAltComponent],
  template: `
    <section class="relative mx-auto overflow-hidden">
      <picture>
        <!-- Mobile version for viewports 600px and below -->
        <source
          media="(max-width: 525px)"
          srcset="/brushed-concrete02-256.webp"
        />
        <!-- Desktop fallback image -->
        <img
          alt="Hero Image"
          loading="eager"
          class="absolute inset-0 w-full h-full object-cover"
          src="/brushed-concrete-hero.webp"
        />
      </picture>

      <div
        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-justify ltr:sm:text-left rtl:sm:text-right">
          <div
            class="text-3xl font-extrabold sm:text-5xl"
            [innerHTML]="appDataStore.homeData().heroH2"
          ></div>
          <div
            class="mt-4 max-w-lg sm:text-xl/relaxed"
            [innerHTML]="appDataStore.homeData().heroParagraph"
          ></div>
          <div class="inline-block xs:hidden">
            <component-cta-button-alt
              customClasses="text-lg font-bold text-slate-600"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  appDataStore = appDataStore;
}
