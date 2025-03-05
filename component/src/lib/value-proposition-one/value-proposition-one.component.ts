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

@Component({
  selector: 'component-value-proposition-one',
  imports: [CommonModule],
  template: `
    <section>
      <div
        [id]="appDataStore.homeData().navigationLink1"
        class="mx-auto max-w-screen-xl py-4 px-4 sm:px-6 lg:px-8"
      >
        <div
          *ngFor="let service of servicesData; let i = index"
          [id]="service.slug"
          class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8"
        >
          <!-- Even Index: Text Left, Image Right -->
          <div *ngIf="i % 2 === 0" class="order-1 md:order-none">
            <div class="max-w-lg md:max-w-none">
              <div
                class="text-2xl font-semibold text-gray-900 sm:text-3xl text-center mt-10"
                [innerHTML]="service.name"
              ></div>
              <div
                class="mt-4 text-gray-700"
                [innerHTML]="service.shortDescription"
              ></div>
              <div class="mt-4" [innerHTML]="service.content"></div>
            </div>
          </div>
          <div
            *ngIf="i % 2 === 0"
            class="order-2 md:order-none flex justify-center"
          >
            <img
              [src]="service.featuredImage"
              [style.width.px]="service.featuredImageSize"
              [style.height.px]="service.featuredImageSize"
              class="rounded-xl w-full h-auto object-cover"
              alt="{{ service.name }}"
            />
          </div>

          <!-- Odd Index: Image Left, Text Right -->
          <div
            *ngIf="i % 2 !== 0"
            class="order-2 md:order-1 flex justify-center"
          >
            <img
              [src]="service.featuredImage"
              [style.width.px]="service.featuredImageSize"
              [style.height.px]="service.featuredImageSize"
              class="rounded-xl w-full h-auto object-cover"
              alt="{{ service.slug }}"
            />
          </div>
          <div *ngIf="i % 2 !== 0" class="order-1 md:order-2">
            <div class="max-w-lg md:max-w-none">
              <h2
                class="text-2xl font-semibold text-gray-900 sm:text-3xl mt-10 text-center"
                [innerHTML]="service.name"
              ></h2>
              <p
                class="mt-4 text-gray-700"
                [innerHTML]="service.shortDescription"
              ></p>
              <div class="mt-4" [innerHTML]="service.content"></div>
            </div>
          </div>
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
