import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CtaButtonComponent } from '../cta-button/cta-button.component';
import { SqaureLogo } from '../../../../logo/src/logo';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [RouterModule, CommonModule, CtaButtonComponent, SqaureLogo],
  template: `
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <logo-square
                [src]="appDataStore.brandData().logoSrc"
                [alt]="appDataStore.brandData().logoAlt"
                [size]="appDataStore.brandData().headerLogoSize"
                [padding]="appDataStore.brandData().headerLogoPadding"
                [rounding]="appDataStore.brandData().headerLogoRounding"
              ></logo-square>
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-xl font-bold">
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    [href]="appDataStore.homeData().navigationLink1"
                    [innerHTML]="appDataStore.homeData().navigationLink1"
                  ></a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    [href]="appDataStore.homeData().navigationLink2"
                    [innerHTML]="appDataStore.homeData().navigationLink2"
                  ></a>
                </li>
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    [href]="appDataStore.homeData().navigationLink3"
                    [innerHTML]="appDataStore.homeData().navigationLink3"
                  ></a>
                </li>
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    [href]="appDataStore.homeData().navigationLink4"
                    [innerHTML]="appDataStore.homeData().navigationLink4"
                  ></a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <component-cta-button />
            </div>
            <!-- 
            <div class="block md:hidden">
              <button
                class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  appDataStore = appDataStore;
}
