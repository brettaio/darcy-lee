import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';
import { GuageHighIcon } from '../../../../icon/src/lib/guage-high/guage-high.icon';
import { MagnifyDollarSignIcon } from '../../../../icon/src/lib/magnify-dollar-sign/magnify-dollar-sign.icon';
import { HeadsetIcon } from '../../../../icon/src/lib/headset/headset.icon';

@Component({
  selector: 'component-problem-prop-brettaio',
  standalone: true,
  template: `
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <!-- Background image (behind everything) -->
      <img
        src="/angular-overlay.png"
        alt=""
        class="absolute inset-0 z-[-20] h-full w-full object-cover object-right md:object-center"
      />

      <!-- Semi‐transparent overlay on top of the image -->
      <div class="absolute inset-0 z-[-10] bg-slate-900/90"></div>

      <!-- Decorative shape #1 (behind content, above the image) -->
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:z-[-10] sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          class="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(
            74.1% 44.1%, 100% 61.6%, 97.5% 26.9%,
            85.5% 0.1%, 80.7% 2%, 72.5% 32.5%,
            60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%,
            45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,
            17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,
            74.1% 44.1%
          )"
        ></div>
      </div>

      <!-- Decorative shape #2 (behind content, above the image) -->
      <div
        class="absolute -top-52 left-1/2 z-[-10] -translate-x-1/2 transform-gpu blur-3xl
               sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          class="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(
            74.1% 44.1%, 100% 61.6%, 97.5% 26.9%,
            85.5% 0.1%, 80.7% 2%, 72.5% 32.5%,
            60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%,
            45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,
            17.9% 100%, 27.6% 76.8%, 76.1% 97.7%,
            74.1% 44.1%
          )"
        ></div>
      </div>

      <!-- Main content (on top) -->
      <div class="relative z-0 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-5xl font-semibold tracking-tight text-white sm:text-7xl"
            [innerText]="appDataStore.siteData().problemPropHeading"
          ></h2>
          <p
            class="mt-8 text-lg font-medium text-gray-400 sm:text-xl/8"
            [innerText]="appDataStore.siteData().problemPropParagraph"
          ></p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6
                 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          <div
            class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
          >
            <icon-guage-high />
            <div class="text-base/7">
              <h3
                class="font-semibold text-white"
                [innerText]="appDataStore.siteData().ProblemPropOne"
              ></h3>
              <p
                class="mt-2 text-gray-300"
                [innerText]="appDataStore.siteData().ProblemPropOneDesc"
              ></p>
            </div>
          </div>
          <div
            class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
          >
            <icon-magnify-dollar-sign />
            <div class="text-base/7">
              <h3
                class="font-semibold text-white"
                [innerText]="appDataStore.siteData().ProblemPropTwo"
              ></h3>
              <p
                class="mt-2 text-gray-300"
                [innerText]="appDataStore.siteData().ProblemPropTwoDesc"
              ></p>
            </div>
          </div>
          <div
            class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 ring-inset"
          >
            <icon-headset />
            <div class="text-base/7">
              <h3
                class="font-semibold text-white"
                [innerText]="appDataStore.siteData().ProblemPropThree"
              ></h3>
              <p
                class="mt-2 text-gray-300"
                [innerText]="appDataStore.siteData().ProblemPropThreeDesc"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  imports: [GuageHighIcon, MagnifyDollarSignIcon, HeadsetIcon],
})
export class ProblemPropBrettaioComponent {
  appDataStore = appDataStore;
}
