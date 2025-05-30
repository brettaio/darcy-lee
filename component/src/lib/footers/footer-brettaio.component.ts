import { Component } from '@angular/core';
import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  XIcon,
} from '../../../../icon/src/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-footer-brettaio',
  imports: [
    RouterLink,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    YoutubeIcon,
    XIcon,
  ],
  template: `
    <footer class="bg-gray-900">
      <div
        class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
      >
        <nav
          class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
          aria-label="Footer"
        >
          <a
            class="text-gray-400 transition hover:text-white"
            [routerLink]="formatPath(appDataStore.siteData().navigationLinkOne)"
            [innerHTML]="appDataStore.siteData().navigationLinkOne"
          ></a>
          <a
            href="#"
            class="text-gray-400 hover:text-white"
            [routerLink]="formatPath(appDataStore.siteData().navigationLinkTwo)"
            [innerHTML]="appDataStore.siteData().navigationLinkTwo"
          ></a>
          <a
            href="#"
            class="text-gray-400 hover:text-white"
            [routerLink]="
              formatPath(appDataStore.siteData().navigationLinkThree)
            "
            [innerHTML]="appDataStore.siteData().navigationLinkThree"
          ></a>
          <a
            href="#"
            class="text-gray-400 hover:text-white"
            [routerLink]="
              formatPath(appDataStore.siteData().navigationLinkFour)
            "
            [innerHTML]="appDataStore.siteData().navigationLinkFour"
          ></a>
          <a
            [routerLink]="privacyPolicy"
            class="text-gray-400 hover:text-white"
          >
            Privacy
          </a>
          <a
            [routerLink]="refundCancellation"
            class="text-gray-400 hover:text-white"
          >
            Refund & Cancellation
          </a>
          <a
            [routerLink]="termsConditions"
            class="text-gray-400 hover:text-white"
          >
            Terms & Conditions
          </a>
        </nav>
        <ul class="mt-16 flex justify-center gap-x-10">
          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().facebookMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Facebook Mobile Icon</span>
              <icon-facebook [size]="appDataStore.brandData().footerIconSize" />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().facebookDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Facebook Desktop Icon</span>
              <icon-facebook [size]="appDataStore.brandData().footerIconSize" />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().instagramMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Instagram Mobile Icon</span>
              <icon-instagram
                [size]="appDataStore.brandData().footerIconSize"
              />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().instagramDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Instagram Desktop Icon</span>
              <icon-instagram
                [size]="appDataStore.brandData().footerIconSize"
              />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().xMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">X Mobile Icon</span>
              <icon-x [size]="appDataStore.brandData().footerIconSize" />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().xDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">X Desktop Icon</span>
              <icon-x [size]="appDataStore.brandData().footerIconSize" />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().linkedInMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Linked In Mobile Icon</span>
              <icon-linked-in
                [size]="appDataStore.brandData().footerIconSize"
              />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().linkedInDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Linked In Desktop Icon</span>
              <icon-linked-in
                [size]="appDataStore.brandData().footerIconSize"
              />
            </a>
          </li>

          <li>
            <!-- Mobile Link -->
            <a
              [href]="appDataStore.brandData().youtubeMobileLink"
              rel="noreferrer"
              target="_blank"
              class="xs:block md:hidden text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Youtube Mobile Icon</span>
              <icon-youtube [size]="appDataStore.brandData().footerIconSize" />
            </a>

            <!-- Desktop Link -->
            <a
              [href]="appDataStore.brandData().youtubeDesktopLink"
              rel="noreferrer"
              target="_blank"
              class="hidden md:block text-gray-400 transition hover:text-white"
            >
              <span class="sr-only">Youtube Desktop Icon</span>
              <icon-youtube [size]="appDataStore.brandData().footerIconSize" />
            </a>
          </li>
        </ul>
        <p
          class="mt-10 text-center text-sm/6 text-gray-400"
          [innerHTML]="appDataStore.siteData().footerText"
        ></p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterBrettaioComponent {
  appDataStore = appDataStore;

  privacyPolicy = '/privacy-policy';
  refundCancellation = '/refund-cancellation';
  termsConditions = '/terms-conditions';

  formatPath(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to hyphens
  }
}
