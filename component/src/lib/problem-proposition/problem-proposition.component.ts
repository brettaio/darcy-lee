import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { SlideInAnimationComponent } from '../../../../animation/src/animation';
import { HouseCrackIcon } from '../../../../icon/src/lib/house-crack/house-crack.icon';
import { TrowelIcon } from '../../../../icon/src/lib/trowel/trowel.icon';
import { HelmetSafetyIcon } from '../../../../icon/src/lib/helmet-safety/helmet-safety.icon';

@Component({
  selector: 'component-problem-proposition',
  standalone: true,
  imports: [
    SlideInAnimationComponent,
    HouseCrackIcon,
    TrowelIcon,
    HelmetSafetyIcon,
  ],
  template: `
    <div class="bg-slate-200 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <div
            class="text-base/7 font-semibold text-indigo-600"
            [innerHTML]="appDataStore.problemPropData().problemPropSegue"
          ></div>
          <animation-slide-in>
            <div
              class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
              [innerHTML]="appDataStore.problemPropData().problemPropH2"
            ></div>
          </animation-slide-in>
          <div
            class="mt-6 text-lg/8 text-gray-600 text-justify"
            [innerHTML]="appDataStore.problemPropData().problemPropParagraph"
          ></div>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div class="flex flex-col">
              <dt
                class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900"
              >
                <icon-house-crack />
                <span
                  [innerHTML]="appDataStore.problemPropData().problemPropOneH3"
                ></span>
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600"
              >
                <div
                  class="flex-auto"
                  [innerHTML]="
                    appDataStore.problemPropData().problemPropOneParagraph
                  "
                ></div>
              </dd>
            </div>
            <div class="flex flex-col">
              <dt
                class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900"
              >
                <icon-trowel />
                <span
                  [innerHTML]="appDataStore.problemPropData().problemPropTwoH3"
                ></span>
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600"
              >
                <div
                  class="flex-auto"
                  [innerHTML]="
                    appDataStore.problemPropData().problemPropTwoParagraph
                  "
                ></div>
              </dd>
            </div>
            <div class="flex flex-col">
              <dt
                class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900"
              >
                <icon-helmet-safety />
                <span
                  [innerHTML]="
                    appDataStore.problemPropData().problemPropThreeH3
                  "
                ></span>
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600"
              >
                <div
                  class="flex-auto"
                  [innerHTML]="
                    appDataStore.problemPropData().problemPropThreeParagraph
                  "
                ></div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProblemPropositionComponent {
  appDataStore = appDataStore;
}
