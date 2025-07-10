import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingAppAuthService } from '../../../../../service/src/services';
import { BookingAppCalendarComponent } from '../../calendar/booking-app/booking-app-calendar.component';

@Component({
  selector: 'component-stacked-layout-one',
  standalone: true,
  imports: [ CommonModule, BookingAppCalendarComponent ],
  template: `
    <div class="min-h-full">
      <nav class="border-b border-gray-200 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <!-- left logo + links -->
            <div class="flex">
              <div class="flex shrink-0 items-center">
                <img class="block h-8 w-auto lg:hidden"
                     src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company" />
                <img class="hidden h-8 w-auto lg:block"
                     src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company" />
              </div>
              <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <a href="#"
                   class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900">
                  Scheduled Flights
                </a>
              </div>
            </div>

            <!-- right: notifications + profile -->
            <div class="hidden sm:ml-6 sm:flex sm:items-center">

              <!-- profile dropdown trigger -->
              <div class="relative ml-3">
                <button type="button"
                        (click)="toggleProfile()"
                        class="flex rounded-full bg-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                        [attr.aria-expanded]="isProfileOpen">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                       alt="User avatar" />
                </button>

                <!-- profile dropdown panel -->
                <div *ngIf="isProfileOpen"
                     class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
                     role="menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Settings</a>
                  <a href="#" (click)="onLogout()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</a>
                </div>
              </div>
            </div>

            <!-- mobile menu button -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button type="button"
                      (click)="toggleMobile()"
                      class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      aria-controls="mobile-menu"
                      [attr.aria-expanded]="isMobileOpen">
                <span class="sr-only">Open main menu</span>
                <svg *ngIf="!isMobileOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/>
                </svg>
                <svg *ngIf="isMobileOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- mobile menu panel -->
        <div *ngIf="isMobileOpen" id="mobile-menu" class="sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="#" class="block px-3 py-2 text-base font-medium text-indigo-700 bg-indigo-50">Scheduled Flights</a>
          </div>
        </div>
      </nav>

      <!-- main content -->
      <div class="py-10">
        <header>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Scheduled Flights</h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <component-booking-app-calendar></component-booking-app-calendar>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [``]
})
export class StackedLayoutOneComponent {
  isProfileOpen = false;
  isMobileOpen  = false;

  constructor(
    private auth: BookingAppAuthService,
    private router: Router
  ) {}

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  onLogout(): void {
    //Call your AuthService.logout(), then navigate to /login
    this.auth.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => console.error('Logout failed', err)
    })
  }
}