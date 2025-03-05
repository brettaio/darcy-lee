import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { SqaureLogo } from '../../../../logo/src/logo';
import { FacebookIcon } from '../../../../icon/src/lib/facebook/facebook.icon';
import { InstagramIcon } from '../../../../icon/src/lib/instagram/instagram.icon';
import { XIcon } from '../../../../icon/src/lib/x/x.icon';
import { LinkedInIcon } from '../../../../icon/src/lib/linked-in/linked-in.icon';
import { YoutubeIcon } from '../../../../icon/src/lib/youtube/youtube.icon';

@Component({
  selector: 'component-footer',
  imports: [
    SqaureLogo,
    FacebookIcon,
    InstagramIcon,
    XIcon,
    LinkedInIcon,
    YoutubeIcon,
  ],
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
            >
              Careers
            </a>
          </li>

          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink3"
              [innerHTML]="appDataStore.homeData().navigationLink3"
            >
              History
            </a>
          </li>

          <li>
            <a
              class="text-gray-800 transition hover:text-gray-800/50"
              [href]="'#' + appDataStore.homeData().navigationLink4"
              [innerHTML]="appDataStore.homeData().navigationLink4"
            >
              Services
            </a>
          </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().facebookMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook Mobile Icon</span>
              <icon-facebook />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().facebookDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook Desktop Icon</span>
              <icon-facebook />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().instagramMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram Mobile Icon</span>
              <icon-instagram />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().instagramDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram Desktop Icon</span>
              <icon-instagram />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().xMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">X Mobile Icon</span>
              <icon-x />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().xDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">X Desktop Icon</span>
              <icon-x />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().linkedInMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Linked In Mobile Icon</span>
              <icon-linked-in />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().linkedInDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Linked In Desktop Icon</span>
              <icon-linked-in />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().youtubeMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Youtube Mobile Icon</span>
              <icon-youtube />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().youtubeDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Youtube Desktop Icon</span>
              <icon-youtube />
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
