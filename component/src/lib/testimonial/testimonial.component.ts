import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Renderer2,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal, computed } from '@angular/core';
import { StarIcon } from '../../../../icon/src/lib/star/star.icon';
import { CommonModule } from '@angular/common';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-testimonial',
  imports: [StarIcon, CommonModule],
  template: `
    <section
      class="bg-white w-4/5 mx-auto"
      [id]="appDataStore.homeData().navigationLink2"
    >
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
        <div
          class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          [innerHTML]="appDataStore.homeData().testimonialHeading"
        ></div>

        <div
          class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          <div
            class="mb-8 sm:break-inside-avoid"
            *ngFor="let review of visibleReviews()"
          >
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-xs sm:p-8">
              <div class="flex items-center gap-4">
                <img
                  alt=""
                  [src]="review.avatar"
                  class="size-14 rounded-full object-cover"
                />

                <div>
                  <div class="flex justify-center gap-0.5 text-slate-900">
                    <ng-container
                      *ngFor="let star of [].constructor(review.rating)"
                    >
                      <icon-star />
                    </ng-container>
                  </div>

                  <div
                    class="mt-0.5 text-lg font-medium text-gray-900"
                    [innerHTML]="review.name"
                  ></div>
                </div>
              </div>

              <div
                class="mt-4 text-gray-700"
                [innerHTML]="review.reviewText"
              ></div>
            </blockquote>
          </div>
        </div>

        <!-- Toggle View More / Show Less Button -->
        <div class="text-center mt-6">
          <button
            class="rounded-lg bg-gray-600 px-5 py-2.5 text-lg text-white hover:bg-gray-700"
            (click)="toggleReviews()"
          >
            {{ showAllReviews() ? 'Show Less' : 'View More' }}
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TestimonialComponent implements AfterViewInit {
  appDataStore = appDataStore;

  // Signal to track if all reviews are visible
  showAllReviews = signal<boolean>(false);

  // Compute visible reviews based on showAllReviews state
  visibleReviews = computed(() => {
    const allReviews = this.appDataStore.reviewData();
    return this.showAllReviews() ? allReviews : allReviews.slice(0, 3);
  });

  // Toggle between showing all reviews and limiting to 3
  toggleReviews() {
    this.showAllReviews.set(!this.showAllReviews());
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngAfterViewInit(): void {
    // Only run in browser
    if (isPlatformBrowser(this.platformId)) {
      // Query the header element—adjust the selector as needed
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.getBoundingClientRect().height;
        // Get the target element by the dynamic id
        const targetId = this.appDataStore.homeData().navigationLink2;
        const targetElement = this.el.nativeElement.querySelector(
          `#${targetId}`,
        );
        if (targetElement) {
          // Set dynamic scroll-margin-top so that scrolling accounts for header height
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
