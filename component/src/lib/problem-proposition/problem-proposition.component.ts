import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-problem-proposition',
  imports: [],
  template: `
    <section class="bg-gray-white">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <!-- Heading -->
        <div class="mx-auto max-w-3xl text-center">
          <div
            class="text-2xl font-bold text-gray-900 md:text-3xl"
            [innerHTML]="appDataStore.homeData().problemH2"
          ></div>
        </div>

        <div
          class="mx-auto mt-8 max-w-4xl grid grid-cols-1 gap-6 text-left md:grid-cols-3 items-start"
        >
          <!-- Column 1 -->
          <div>
            <!-- Enforce the same heading space for each column -->
            <div class="min-h-[60px]">
              <div
                class="text-lg font-semibold text-gray-900 mb-2"
                [innerHTML]="appDataStore.homeData().problem1H3"
              ></div>
            </div>
            <div
              class="text-gray-500 text-justify"
              [innerHTML]="appDataStore.homeData().problem1Paragraph"
            ></div>
          </div>

          <!-- Column 2 -->
          <div>
            <div class="min-h-[60px]">
              <div
                class="text-lg font-semibold text-gray-900 mb-2"
                [innerHTML]="appDataStore.homeData().problem2H3"
              ></div>
            </div>
            <div
              class="text-gray-500 text-justify"
              [innerHTML]="appDataStore.homeData().problem2Paragraph"
            ></div>
          </div>

          <!-- Column 3 -->
          <div>
            <div class="min-h-[60px]">
              <div
                class="text-lg font-semibold text-gray-900 mb-2"
                [innerHTML]="appDataStore.homeData().problem3H3"
              ></div>
            </div>
            <div
              class="text-gray-500 text-justify"
              [innerHTML]="appDataStore.homeData().problem3Paragraph"
            ></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProblemPropositionComponent {
  appDataStore = appDataStore;
}
