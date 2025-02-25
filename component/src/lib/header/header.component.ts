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
    <header
      class="relative bg-white shadow-[0_30px_20px_rgba(0,0,0,0.20)] sticky top-0 z-10"
    >
      <!-- Concrete Overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center opacity-22 pointer-events-none"
        style="background-image: url('/concrete-overlay3.webp');"
      ></div>

      <!-- Header Content -->
      <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
                    class="text-gray-900 transition hover:text-gray-900/50"
                    [href]="appDataStore.homeData().navigationLink1"
                    [innerHTML]="appDataStore.homeData().navigationLink1"
                  ></a>
                </li>
                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/50"
                    [href]="appDataStore.homeData().navigationLink2"
                    [innerHTML]="appDataStore.homeData().navigationLink2"
                  ></a>
                </li>
                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/50"
                    [href]="appDataStore.homeData().navigationLink3"
                    [innerHTML]="appDataStore.homeData().navigationLink3"
                  ></a>
                </li>
                <li>
                  <a
                    class="text-gray-900 transition hover:text-gray-900/50"
                    [href]="appDataStore.homeData().navigationLink4"
                    [innerHTML]="appDataStore.homeData().navigationLink4"
                  ></a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <component-cta-button
                customClasses=" text-lg text-slate-100 font-semibold"
              />
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
