import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-solution-intro',
  imports: [],
  template: `
    <section class="relative bg-gray-50">
      <!-- Concrete Overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style="background-image: url('/concrete-overlay.webp');"
      ></div>

      <div class="p-8 md:p-12 lg:px-16 lg:py-24 relative">
        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center">
          <div
            class="text-2xl font-bold text-gray-900 md:text-3xl"
            [innerHTML]="appDataStore.homeData().solutionHeading"
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
