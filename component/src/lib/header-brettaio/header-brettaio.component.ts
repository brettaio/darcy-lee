import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrettaioSquareLogo } from '../../../../logo/src/lib/brettaio-square/brettaio-square.logo';
import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';
import { BurgerIcon } from '../../../../icon/src/lib/burger/burger.icon';
import { XmarkIcon } from '../../../../icon/src/lib/xmark/xmark.icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'component-header-brettaio',
  // If using standalone components, add CommonModule here
  standalone: true,
  imports: [
    CommonModule,
    BrettaioSquareLogo,
    BurgerIcon,
    XmarkIcon,
    RouterModule,
  ],
  template: `
    <header class="fixed top-0 left-0 w-full bg-gray-900 p-4 z-50">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <logo-brettaio-square
            [src]="appDataStore.brandData().logoSrc"
            [alt]="appDataStore.brandData().logoAlt"
            [size]="appDataStore.brandData().headerLogoSize"
            [padding]="appDataStore.brandData().headerLogoPadding"
            [rounding]="appDataStore.brandData().headerLogoRounding"
          ></logo-brettaio-square>
        </div>
        <div class="flex lg:hidden">
          <!-- Hamburger button to open menu -->
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            (click)="openMenu()"
          >
            <span class="sr-only">Open main menu</span>
            <icon-burger />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            [routerLink]="formatPath(appDataStore.siteData().navigationLinkOne)"
            class="text-sm/6 font-semibold text-white"
            [innerText]="appDataStore.siteData().navigationLinkOne"
          ></a>
          <a
            [routerLink]="formatPath(appDataStore.siteData().navigationLinkTwo)"
            class="text-sm/6 font-semibold text-white"
            [innerText]="appDataStore.siteData().navigationLinkTwo"
          ></a>
          <a
            [routerLink]="
              formatPath(appDataStore.siteData().navigationLinkThree)
            "
            class="text-sm/6 font-semibold text-white"
            [innerText]="appDataStore.siteData().navigationLinkThree"
          ></a>
          <a
            [routerLink]="
              formatPath(appDataStore.siteData().navigationLinkFour)
            "
            class="text-sm/6 font-semibold text-white"
            [innerText]="appDataStore.siteData().navigationLinkFour"
          ></a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-white">
            Log in
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <!-- Mobile menu: conditionally rendered with *ngIf -->
      <div *ngIf="isMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Optional backdrop (clicking here will close the menu) -->
        <div class="fixed inset-0 z-10" (click)="closeMenu()"></div>
        <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
        >
          <div class="flex items-center justify-between">
            <logo-brettaio-square
              [src]="appDataStore.brandData().logoSrc"
              [alt]="appDataStore.brandData().logoAlt"
              [size]="appDataStore.brandData().headerLogoSize"
              [padding]="appDataStore.brandData().headerLogoPadding"
              [rounding]="appDataStore.brandData().headerLogoRounding"
            ></logo-brettaio-square>
            <!-- Close button -->
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-400"
              (click)="closeMenu()"
            >
              <span class="sr-only">Close menu</span>
              <icon-xmark />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  [innerText]="appDataStore.siteData().navigationLinkOne"
                ></a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  [innerText]="appDataStore.siteData().navigationLinkTwo"
                ></a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  [innerText]="appDataStore.siteData().navigationLinkThree"
                ></a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  [innerText]="appDataStore.siteData().navigationLinkFour"
                ></a>
              </div>
              <!-- <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                >
                  Log in
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [``],
})
export class HeaderBrettaioComponent {
  appDataStore = appDataStore;

  formatPath(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to hyphens
  }
  // State to track whether the mobile menu is open
  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
