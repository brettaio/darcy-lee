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
    <header id="header" class="sticky top-0 z-10">
      <div class="relative">
        <!-- Thin black bar at the very top -->
        <div class="h-6 bg-black"></div>

        <!-- Main header container -->
        <div
          class="relative -mt-4 bg-white shadow-[0_30px_20px_rgba(0,0,0,0.20)] rounded-2xl px-4 py-4 sm:px-6 lg:px-8"
        >
          <!-- Header Content -->
          <div class="relative flex items-center justify-between">
            <!-- Left: Logo -->
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

            <!-- Center: Nav Links (hidden on mobile) -->
            <div class="hidden md:block">
              <nav aria-label="Global">
                <ul class="flex items-center gap-6 text-xl font-bold">
                  <li>
                    <a
                      class="text-gray-900 transition hover:text-gray-900/50"
                      [href]="'#' + appDataStore.homeData().navigationLink1"
                      [innerHTML]="appDataStore.homeData().navigationLink1"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="text-gray-900 transition hover:text-gray-900/50"
                      [href]="'#' + appDataStore.homeData().navigationLink2"
                      [innerHTML]="appDataStore.homeData().navigationLink2"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="text-gray-900 transition hover:text-gray-900/50"
                      [href]="'#' + appDataStore.homeData().navigationLink3"
                      [innerHTML]="appDataStore.homeData().navigationLink3"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="text-gray-900 transition hover:text-gray-900/50"
                      [href]="'#' + appDataStore.homeData().navigationLink4"
                      [innerHTML]="appDataStore.homeData().navigationLink4"
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Right: CTA Button -->
            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <component-cta-button
                  customClasses="text-lg text-slate-100 font-semibold"
                ></component-cta-button>
              </div>
            </div>
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
