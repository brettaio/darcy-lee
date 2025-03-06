import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-solution-intro',
  imports: [],
  template: `
    <section
      class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      [style.backgroundImage]="
        'url(' + appDataStore.homeData().solutionImage + ')'
      "
      style="background-size: cover; background-position: center;"
    >
      <!-- Dark overlay -->
      <div class="absolute inset-0 -z-10 bg-black/50"></div>

      <!-- Outer container matching your other sections -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Optional narrower container for text -->
        <div class="">
          <div
            class="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
            [innerHTML]="appDataStore.homeData().solutionHeading"
          ></div>
          <div
            class="mt-8 text-2xl font-medium text-white"
            [innerHTML]="appDataStore.homeData().solutionSubHeading"
          ></div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class SolutionIntroComponent {
  appDataStore = appDataStore;
}
