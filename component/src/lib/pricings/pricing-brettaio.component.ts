import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { popBounceAnimation } from '../../../../animation/src/animation';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-pricing-brettaio',
  imports: [CommonModule],
  animations: [popBounceAnimation],
  template: `
    <div class="isolate overflow-hidden bg-gray-900">
      <div
        class="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8"
      >
        <div class="mx-auto max-w-4xl">
          <h2 class="text-base/7 font-semibold text-indigo-400">Pricing</h2>
          <p
            #textElement
            [@popBounce]="popState"
            class="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl"
          >
            Choose the right plan for you
          </p>
        </div>
        <div class="relative mt-6">
          <p
            class="mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
          >
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx="604"
              cy="512"
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx="604"
              ry="512"
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="flow-root bg-white pb-24 sm:pb-32">
        <div class="-mt-80">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2"
            >
              <div
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 shadow-xl ring-gray-900/10 sm:p-10"
              >
                <div>
                  <h3
                    id="tier-hobby"
                    class="text-base/7 font-semibold text-indigo-600"
                  >
                    Hobby
                  </h3>
                  <div class="mt-4 flex items-baseline gap-x-2">
                    <span
                      class="text-5xl font-semibold tracking-tight text-gray-900"
                    >
                      $29
                    </span>
                    <span class="text-base/7 font-semibold text-gray-600">
                      /month
                    </span>
                  </div>
                  <p class="mt-6 text-base/7 text-gray-600">
                    Modi dolorem expedita deleniti. Corporis iste qui inventore
                    pariatur adipisci vitae.
                  </p>
                  <ul
                    role="list"
                    class="mt-10 space-y-4 text-sm/6 text-gray-600"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      5 products
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Up to 1,000 subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Basic analytics
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      48-hour support response time
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  (click)="pay($event)"
                  aria-describedby="tier-hobby"
                  class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started today
                </a>
                <div *ngIf="paymentResponse">
                  <h3>Payment Response:</h3>
                  <pre>{{ paymentResponse | json }}</pre>
                </div>
              </div>
              <div
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 shadow-xl ring-gray-900/10 sm:p-10"
              >
                <div>
                  <h3
                    id="tier-team"
                    class="text-base/7 font-semibold text-indigo-600"
                  >
                    Team
                  </h3>
                  <div class="mt-4 flex items-baseline gap-x-2">
                    <span
                      class="text-5xl font-semibold tracking-tight text-gray-900"
                    >
                      $99
                    </span>
                    <span class="text-base/7 font-semibold text-gray-600">
                      /month
                    </span>
                  </div>
                  <p class="mt-6 text-base/7 text-gray-600">
                    Explicabo quo fugit vel facere ullam corrupti non dolores.
                    Expedita eius sit sequi.
                  </p>
                  <ul
                    role="list"
                    class="mt-10 space-y-4 text-sm/6 text-gray-600"
                  >
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Unlimited products
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Unlimited subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Advanced analytics
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      1-hour, dedicated support response time
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        class="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  aria-describedby="tier-team"
                  class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started today
                </a>
              </div>

              <div
                class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
              >
                <div class="lg:min-w-0 lg:flex-1">
                  <h3 class="text-base/7 font-semibold text-indigo-600">
                    Discounted
                  </h3>
                  <p class="mt-1 text-base/7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  class="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy discounted license
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PricingBrettaioComponent {
  @ViewChild('textElement', { static: false }) textElement!: ElementRef;
  popState: 'default' | 'visible' = 'default';

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.textElement) return;

    const rect = this.textElement.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
      this.popState = 'visible'; // Activate animation when in view
    } else {
      this.popState = 'default'; // Reset animation when out of view
    }
  }

  paymentResponse: any;

  constructor(private http: HttpClient) {}

  pay(event: Event) {
    event.preventDefault();

    const paymentData = {
      amount: 10000,
      currency: 'usd',
      source: 'tok_visa',
    };

    this.http.post('/.netlify/functions/stripePayment', paymentData).subscribe({
      next: (response) => {
        console.log('Payment successful:', response);
        this.paymentResponse = response;
      },
      error: (error) => {
        console.error('Payment error:', error);
        this.paymentResponse = error;
      },
    });
  }
}
