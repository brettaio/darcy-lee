import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Renderer2,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CheckIcon } from '../../../../icon/src/lib/check/check.icon';

@Component({
  selector: 'component-value-proposition-one',
  imports: [CommonModule, CheckIcon],
  template: `
    <section [id]="appDataStore.homeData().navigationLink1">
      <div class="overflow-hidden bg-white sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <ng-container *ngFor="let service of servicesData; let i = index">
            <!-- OUTER RING (First Shadow Layer) -->
            <div
              class="m-10 grid grid-cols-1 rounded-[2rem] ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md bg-slate-100"
            >
              <!-- INNER PADDING + SECOND RING SHADOW -->
              <div
                class="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5"
              >
                <!-- MAIN SERVICE CARD -->
                <div
                  class="rounded-3xl bg-slate-200/10 p-10 pb-9 ring-1 shadow-2xl ring-black/5"
                >
                  <div
                    class="grid max-w-2xl grid-cols-1 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 "
                  >
                    <!-- EVEN INDEX: Text left on desktop, image right -->
                    <ng-container *ngIf="i % 2 === 0; else oddLayout">
                      <!-- TEXT BLOCK -->
                      <div
                        class="order-1 lg:order-1 lg:pt-4 lg:pr-8  ring-4 shadow-2xl ring-white p-6 rounded-3xl"
                      >
                        <div class="lg:max-w-lg text-center lg:text-left">
                          <div
                            class="text-xl font-semibold tracking-tight text-slate-600 sm:text-4xl text-center"
                            [innerHTML]="service.name"
                          ></div>
                          <div
                            class="mt-6 text-slate-600 text-left text-md"
                            [innerHTML]="service.shortDescription"
                          ></div>
                          <div
                            class="mt-4 text-slate-600 text-justify text-lg"
                            [innerHTML]="service.introductionParagraph"
                          ></div>

                          <!-- House Applications, if any -->
                          <div
                            *ngIf="service.houseApplications?.length"
                            class="mt-4 text-slate-600"
                          >
                            <div
                              class="text-sm font-semibold text-slate-600 mb-2 text-left"
                              [innerHTML]="service.applicationsHeading"
                            ></div>
                            <ul class="space-y-2 text-left">
                              <li
                                *ngFor="let app of service.houseApplications"
                                class="relative pl-9"
                              >
                                <icon-check
                                  class="absolute top-1 left-1 size-5 text-slate-600"
                                ></icon-check>
                                <span [innerHTML]="app"></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <!-- IMAGE BLOCK -->
                      <div
                        class="order-2 lg:order-2 flex items-center justify-center"
                      >
                        <img
                          [src]="service.featuredImage"
                          [alt]="service.slug"
                          class="w-full aspect-2/2 object-cover rounded-3xl shadow-2xl sm:mt-0 mt-10"
                          width="512"
                          height="512"
                        />
                      </div>
                    </ng-container>

                    <!-- ODD INDEX: Text right on desktop, image left -->
                    <ng-template #oddLayout>
                      <!-- TEXT BLOCK -->
                      <div
                        class="order-1 lg:order-1 lg:pt-4 lg:pr-8  ring-4 shadow-2xl ring-white p-6 rounded-3xl"
                      >
                        <div class="lg:max-w-lg text-center lg:text-left">
                          <div
                            class="text-xl font-semibold tracking-tight text-slate-600 sm:text-4xl text-center"
                            [innerHTML]="service.name"
                          ></div>
                          <div
                            class="mt-6 text-slate-600 text-left text-md"
                            [innerHTML]="service.shortDescription"
                          ></div>
                          <div
                            class="mt-4 text-slate-600 text-justify text-lg"
                            [innerHTML]="service.introductionParagraph"
                          ></div>

                          <!-- House Applications, if any -->
                          <div
                            *ngIf="service.houseApplications?.length"
                            class="mt-4 text-slate-600"
                          >
                            <div
                              class="text-sm font-semibold text-slate-600 mb-2 text-left"
                              [innerHTML]="service.applicationsHeading"
                            ></div>
                            <ul class="space-y-2 text-left">
                              <li
                                *ngFor="let app of service.houseApplications"
                                class="relative pl-9"
                              >
                                <icon-check
                                  class="absolute top-1 left-1 size-5 text-slate-600"
                                ></icon-check>
                                <span [innerHTML]="app"></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <!-- IMAGE BLOCK -->
                      <div
                        class="order-2 lg:order-2 flex items-center justify-center"
                      >
                        <img
                          [src]="service.featuredImage"
                          [alt]="service.slug"
                          class="w-full aspect-2/2 object-cover rounded-3xl shadow-2xl sm:mt-0 mt-10"
                          width="512"
                          height="512"
                        />
                      </div>
                    </ng-template>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ValuePropositionOneComponent implements AfterViewInit {
  appDataStore = appDataStore;
  servicesData = appDataStore.servicesData(); // Load services dynamically

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.getBoundingClientRect().height;
        const targetId = this.appDataStore.homeData().navigationLink1;
        const targetElement = this.el.nativeElement.querySelector(
          `#${targetId}`,
        );
        if (targetElement) {
          this.renderer.setStyle(
            targetElement,
            'scroll-margin-top',
            `${headerHeight}px`,
          );
        }
      }
    }
  }
}
