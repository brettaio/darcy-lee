import { Component } from '@angular/core';
import { StarIcon } from '../../../../../icon/src/lib/star/star.icon';
import { appDataStore } from '../../../../../websites/brettaio/src/app/store/app-data.store';

@Component({
  selector: 'component-hero-brettaio-app',
  imports: [StarIcon],
  template: `
    <section class="w-full bg-black py-16">
      <!-- Outer Container for consistent width and centering -->
      <div class=" mx-auto flex flex-col items-center text-center my-20 px-4">
        <!-- Testimonial Row -->
        <div class="flex items-center space-x-4 mb-8">
          <!-- Avatar Group -->
          <div class="flex">
            <img
              src="/mugshot.svg"
              alt="User 1"
              class="w-10 h-10 rounded-full"
            />
            <img
              src="/mugshot.svg"
              alt="User 2"
              class="w-10 h-10 rounded-full -ml-4"
            />
            <img
              src="/mugshot.svg"
              alt="User 3"
              class="w-10 h-10 rounded-full -ml-4"
            />
            <img
              src="/mugshot.svg"
              alt="User 4"
              class="w-10 h-10 rounded-full -ml-4"
            />
            <img
              src="/mugshot.svg"
              alt="User 5"
              class="w-10 h-10 rounded-full -ml-4"
            />
          </div>

          <!-- Stars & Text -->
          <div class="flex flex-col text-left ">
            <div class="flex space-x-1 text-yellow-400 ">
              <icon-star
                [size]="appDataStore.brandData().starIconSize"
              ></icon-star>
              <icon-star
                [size]="appDataStore.brandData().starIconSize"
              ></icon-star>
              <icon-star
                [size]="appDataStore.brandData().starIconSize"
              ></icon-star>
              <icon-star
                [size]="appDataStore.brandData().starIconSize"
              ></icon-star>
              <icon-star
                [size]="appDataStore.brandData().starIconSize"
              ></icon-star>
            </div>
            <p class="text-white text-sm font-medium mt-1">
              A handful of small business owners love Bretta Etc
            </p>
          </div>
        </div>

        <!-- Headline -->
        <h2
          class="text-4xl font-bold sm:text-5xl w-full text-white mt-20 lg:max-w-[50%] mx-auto"
        >
          We write content, code and deploy sites to enhance web traffic, leads
          and get you paid
        </h2>

        <!-- Subtext -->
        <p class="text-lg text-white mt-4 w-[80%] mx-auto">
          Your solution focused professional Web Developer. Trusting and
          transparent.
        </p>

        <!-- Feature Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 mt-10 w-full gap-6 text-white lg:max-w-[60%] mx-auto justify-items-center"
        >
          <div class="flex items-center space-x-3">
            <icon-star
              [size]="appDataStore.brandData().starIconSize"
            ></icon-star>
            <span>On-Call, Development & Deployment</span>
          </div>
          <div class="flex items-center space-x-3">
            <icon-star
              [size]="appDataStore.brandData().starIconSize"
            ></icon-star>
            <span>Senior-level Talent</span>
          </div>
          <div class="flex items-center space-x-3">
            <icon-star
              [size]="appDataStore.brandData().starIconSize"
            ></icon-star>
            <span>No Locked-In Contracts</span>
          </div>
          <div class="flex items-center space-x-3">
            <icon-star
              [size]="appDataStore.brandData().starIconSize"
            ></icon-star>
            <span>24/7 within the hour response</span>
          </div>
        </div>

        <div class="mt-10 flex justify-center gap-10 w-full">
          <!-- First Link -->
          <a
            href="tel:+61423905238"
            class="px-6 py-3 border border-white rounded-full text-white text-lg hover:bg-white hover:text-black transition inline-flex items-center justify-center"
          >
            Find Out What We've Done
          </a>

          <!-- Second Link -->
          <a
            href="https://buy.stripe.com/fZe5ln224amc0WQ7sy"
            class="px-6 py-3 bg-white text-black rounded-full text-lg inline-flex items-center space-x-2 hover:bg-gray-300 transition"
          >
            <span>Get Better With Bretta Etc</span>
            <icon-star
              [size]="appDataStore.brandData().starIconSize"
            ></icon-star>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroBrettaioAppComponent {
  appDataStore = appDataStore;
}
