import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-solution-intro',
  imports: [],
  template: `
    <section
      class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
      [style.backgroundImage]="
        'url(' + appDataStore.homeData().solutionImage + ')'
      "
      style="background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 -z-10 bg-black/50"></div>
      <!-- Dark overlay -->

      <div class="mx-auto max-w-2xl text-left">
        <div
          class="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
          [innerHTML]="appDataStore.homeData().solutionHeading"
        ></div>
        <div
          class="mt-8 text-2xl font-medium text-white"
          [innerHTML]="appDataStore.homeData().solutionSubHeading"
        ></div>
      </div>
    </section>
  `,
  styles: ``,
})
export class SolutionIntroComponent {
  appDataStore = appDataStore;
}
