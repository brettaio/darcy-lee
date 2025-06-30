import { Component } from '@angular/core';
import { LoginModalService } from '../../../../../service/src/services';
@Component({
  selector: 'component-hero',
  template: `
    <section>
      <div class="bg-white">
        <div class="relative">
          <div class="mx-auto max-w-7xl">
            <div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div
                class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0"
              >
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div class="hidden sm:mb-10 sm:flex">
                    <div
                      class="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      SponOS by bretta.io MVP Launches to rave reviews.
                      <a
                        href="#"
                        class="font-semibold whitespace-nowrap text-indigo-600"
                      >
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        Read more
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl tet-">sponOS</h1>
                  <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-500 sm:text-4xl">Player Sponsorship Platform</h2>
                  <p
                    class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                  >
                    SponOS is the crowdfunding approach to sports sponsorship. 
                    Engage your network and community to meet your funding needs. 
                    Whether grassroots, aiming for the pros or keeping the dream alive, 
                    gain greater access and exposure to elevate your game, and leave the fundraising to us.
                  </p>
                  <div class="mt-10 flex items-center gap-x-6">
                    <button (click)="loginModal.open()"
                      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
</button>
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
              src="bretta-footy.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  constructor(public loginModal: LoginModalService ) {}
}
