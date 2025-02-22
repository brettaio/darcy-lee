import { Component, computed } from '@angular/core';
import { HeroComponent } from '../../../../component/src/components';
import { AppFactory } from '../../../../websites/enzo-concrete/src/app/factory/app-data.factory';
import { NgForOf, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'page-services',
  imports: [HeroComponent, NgForOf, NgIf, NgClass],
  template: `
    <component-hero />

    <div class="services-container space-y-16">
      <div
        *ngFor="let service of servicesData(); let i = index"
        class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <!-- Image with alternating position -->
          <div
            [ngClass]="
              i % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'
            "
          >
            <img
              *ngIf="service.featuredImage"
              [src]="service.featuredImage"
              [alt]="service.name"
              class="rounded shadow-lg w-full"
            />
          </div>

          <!-- Text content with alternating position -->
          <div
            [ngClass]="
              i % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'
            "
          >
            <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {{ service.name }}
            </h2>

            <p class="mt-4 text-gray-700">{{ service.shortDescription }}</p>

            <div [innerHTML]="service.content" class="mt-4 text-gray-700"></div>

            <div *ngIf="service.houseApplications?.length" class="mt-6">
              <h3 class="text-lg font-medium text-gray-900">
                Where This Service is Commonly Used
              </h3>
              <ul class="list-disc pl-5 mt-2 text-gray-700">
                <li *ngFor="let place of service.houseApplications">
                  {{ place }}
                </li>
              </ul>
            </div>

            <div *ngIf="service.galleryImages?.length" class="mt-6">
              <h3 class="text-lg font-medium text-gray-900">Gallery</h3>
              <div class="grid grid-cols-2 gap-4 mt-2">
                <img
                  *ngFor="let image of service.galleryImages"
                  [src]="image"
                  [alt]="service.name"
                  class="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  standalone: true,
})
export class ServicesPage {
  servicesData = computed(() => AppFactory.getServicesData());
}
