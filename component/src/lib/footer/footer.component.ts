import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { SqaureLogo } from '../../../../logo/src/logo';
import { GoogleIcon } from '../../../../icon/src/lib/google/google.icon';
import { EnvelopeIcon } from '../../../../icon/src/lib/envelope/envelope.icon';

@Component({
  selector: 'component-footer',
  imports: [SqaureLogo, GoogleIcon, EnvelopeIcon],
  template: `
    <footer class="bg-slate-200">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center">
          <logo-square
            [src]="appDataStore.brandData().logoSrc"
            [alt]="appDataStore.brandData().logoAlt"
            [size]="appDataStore.brandData().footerLogoSize"
            [padding]="appDataStore.brandData().footerLogoPadding"
            [rounding]="appDataStore.brandData().footerLogoRounding"
          ></logo-square>
        </div>

        <div
          class="mx-auto mt-6 max-w-md text-justify leading-relaxed text-gray-800"
          [innerHTML]="appDataStore.brandData().shortDescription"
        ></div>

        <ul
          class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
        >
          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink1"
              [innerHTML]="appDataStore.homeData().navigationLink1"
            ></a>
          </li>
          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink2"
              [innerHTML]="appDataStore.homeData().navigationLink2"
            ></a>
          </li>

          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink3"
              [innerHTML]="appDataStore.homeData().navigationLink3"
            ></a>
          </li>

          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink4"
              [innerHTML]="appDataStore.homeData().navigationLink4"
            ></a>
          </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().googleMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Google Link On Mobile</span>
              <icon-google [size]="appDataStore.brandData().footerIconSize" />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().googleDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Google Link On Desktop</span>
              <icon-google [size]="appDataStore.brandData().footerIconSize" />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().emailLink"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Email Link On Mobile</span>
              <icon-envelope [size]="appDataStore.brandData().footerIconSize" />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().emailLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Email Link On Desktop</span>
              <icon-envelope [size]="appDataStore.brandData().footerIconSize" />
            </a>
          </li>
        </ul>
        <div class="mt-12 border-t border-gray-800 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <div
              class="text-xl text-gray-800 block sm:inline hover:text-purple-900"
              [innerHTML]="appDataStore.brandData().footerTag"
            ></div>

            <div
              class="mt-4 text-xl text-gray-800 sm:order-first sm:mt-0"
              [innerHTML]="appDataStore.brandData().footerCopyright"
            ></div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  appDataStore = appDataStore;
}
