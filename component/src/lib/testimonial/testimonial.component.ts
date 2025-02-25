import { Component } from '@angular/core';
import { StarIcon } from '../../../../icon/src/lib/star/star.icon';
import { CommonModule } from '@angular/common';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-testimonial',
  imports: [StarIcon, CommonModule],
  template: `
    <section class="bg-white w-4/5 mx-auto">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div
          class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          [innerHTML]="appDataStore.homeData().testimonialHeading"
        ></div>

        <div
          class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          <div
            class="mb-8 sm:break-inside-avoid"
            *ngFor="let review of appDataStore.reviewData()"
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
      </div>
    </section>
  `,
  styles: ``,
})
export class TestimonialComponent {
  appDataStore = appDataStore;
}
