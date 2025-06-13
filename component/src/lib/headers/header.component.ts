import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a routerLink="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Sponus</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Sponus logo"
            />
          </a>
        </div>

        <!-- mobile menu button -->
        <div class="flex lg:hidden">
          <button
            (click)="isMenuOpen = true"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <!-- desktop nav -->
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            routerLink="/product"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Product
          </a>
          <a
            routerLink="/features"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Features
          </a>
          <a
            routerLink="/marketplace"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Marketplace
          </a>
          <a
            routerLink="/company"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Company
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 space-x-4 lg:justify-end">
          <a
            routerLink="/player/login"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Log in
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            *ngIf="isOnPlayerHome"
            (click)="onLogout()"
            class="text-sm/6 font-semibold text-gray-900"
          >
            Logout
          </a>
        </div>
      </nav>

      <!-- mobile menu, toggled -->
      <div *ngIf="isMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
        <!-- backdrop -->
        <div
          class="fixed inset-0 z-50 bg-black/50"
          (click)="isMenuOpen = false"
        ></div>

        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
        >
          <div class="flex items-center justify-between">
            <a routerLink="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Sponus</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Sponus logo"
              />
            </a>
            <button
              (click)="isMenuOpen = false"
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  routerLink="/product"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Product
                </a>
                <a
                  routerLink="/features"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Features
                </a>
                <a
                  routerLink="/marketplace"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Marketplace
                </a>
                <a
                  routerLink="/company"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                >
                  Company
                </a>
              </div>
              <div class="py-6">
                <a
                  routerLink="/player/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold"
                >
                  Log in
                </a>
                <a
                  *ngIf="isOnPlayerHome"
                  (click)="onLogout()"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isMenuOpen = false;
  isOnPlayerHome = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        // true only for paths like /sponus-player/<id>/home
        this.isOnPlayerHome = /^\/player\/[^\/]+\/home$/.test(
          e.urlAfterRedirects,
        );
      });
  }

  onLogout() {
    this.router.navigate(['/']);
  }
}
