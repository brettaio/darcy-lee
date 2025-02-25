import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-faq',
  imports: [],
  template: `
    <section class="w-4/5 mx-auto py-12">
      <div class="space-y-4">
        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionOne"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerOne"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionTwo"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerTwo"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionThree"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerThree"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionFour"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerFour"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionFive"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerFive"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionSix"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerSix"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionSeven"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerSeven"
          ></div>
        </details>

        <details
          class="group border-s-4 border-slate-900 bg-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5"
          >
            <div
              class="text-lg font-medium text-slate-900"
              [innerHTML]="appDataStore.homeData().faqQuestionEight"
            ></div>
            <span
              class="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div
            class="mt-4 leading-relaxed text-gray-700"
            [innerHTML]="appDataStore.homeData().faqAnswerEight"
          ></div>
        </details>
      </div>
    </section>
  `,
  styles: ``,
})
export class FaqComponent {
  appDataStore = appDataStore;
}
