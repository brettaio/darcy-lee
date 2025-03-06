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
            <div
              [id]="service.slug"
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 my-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              <!-- EVEN INDEX: Text left on desktop, image right on desktop -->
              <ng-container *ngIf="i % 2 === 0; else oddLayout">
                <!-- TEXT BLOCK: on mobile, text is order-1; on desktop, still order-1 -->
                <div class="order-1 lg:order-1 lg:pt-4 lg:pr-8">
                  <div class="lg:max-w-lg">
                    <div
                      class="mt-2 text-4xl text-center font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                      [innerHTML]="service.name"
                    ></div>
                    <div
                      class="mt-6 text-lg/8 text-gray-600"
                      [innerHTML]="service.shortDescription"
                    ></div>
                    <div
                      class="mt-4"
                      [innerHTML]="service.introductionParagraph"
                    ></div>

                    <!-- House Applications, if any -->
                    <div *ngIf="service.houseApplications?.length" class="mt-4">
                      <div
                        class="text-lg font-semibold text-gray-900 mb-2"
                        [innerHTML]="service.applicationsHeading"
                      ></div>
                      <ul class="space-y-2">
                        <li
                          *ngFor="let app of service.houseApplications"
                          class="relative pl-9"
                        >
                          <icon-check
                            class="absolute top-1 left-1 size-5 text-indigo-600"
                          ></icon-check>
                          <span [innerHTML]="app"></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- IMAGE BLOCK: on mobile, image is order-2; on desktop, still order-2 -->
                <!-- "flex items-center" vertically centers the image if the row is taller than the image. -->
                <div
                  class="order-2 lg:order-2 flex items-center justify-center"
                >
                  <img
                    [src]="service.featuredImage"
                    [alt]="service.slug"
                    class="w-full aspect-3/2 object-cover rounded-xl ring-1 shadow-xl ring-gray-400/10 mt-6"
                    width="512"
                    height="512"
                  />
                </div>
              </ng-container>

              <!-- ODD INDEX: Text right on desktop, image left on desktop -->
              <ng-template #oddLayout>
                <!-- TEXT BLOCK: on mobile, text is order-1; on desktop, text is order-2 -->
                <div class="order-1 lg:order-2 lg:pt-4 lg:pl-4">
                  <div class="lg:max-w-lg">
                    <div
                      class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                      [innerHTML]="service.name"
                    ></div>
                    <div
                      class="mt-6 text-lg/8 text-gray-600"
                      [innerHTML]="service.shortDescription"
                    ></div>
                    <div
                      class="mt-4"
                      [innerHTML]="service.introductionParagraph"
                    ></div>

                    <div *ngIf="service.houseApplications?.length" class="mt-4">
                      <div
                        class="text-lg font-semibold text-gray-900 mb-2"
                        [innerHTML]="service.applicationsHeading"
                      ></div>
                      <ul class="space-y-2">
                        <li
                          *ngFor="let app of service.houseApplications"
                          class="relative pl-9"
                        >
                          <icon-check
                            class="absolute top-1 left-1 size-5 text-indigo-600"
                          ></icon-check>
                          <span [innerHTML]="app"></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- IMAGE BLOCK: on mobile, image is order-2; on desktop, image is order-1 -->
                <div
                  class="order-2 lg:order-1 flex items-center justify-center"
                >
                  <img
                    [src]="service.featuredImage"
                    [alt]="service.slug"
                    class="w-full aspect-3/2 object-cover rounded-xl ring-1 shadow-xl ring-gray-400/10 mt-6"
                    width="512"
                    height="512"
                  />
                </div>
              </ng-template>
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
