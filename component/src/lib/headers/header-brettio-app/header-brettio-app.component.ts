import { Component, HostListener } from '@angular/core';
import { appDataStore } from '../../../../../websites/brettaio/src/app/store/app-data.store';
import { BurgerIcon } from '../../../../../icon/src/lib/burger/burger.icon';
import { XmarkIcon } from '../../../../../icon/src/lib/xmark/xmark.icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-header-brettio-app',
  standalone: true,
  imports: [BurgerIcon, XmarkIcon, CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full bg-black p-4 z-50">
      <div class="flex items-center justify-between lg:justify-center lg:px-8">
        <!-- Logo & Title -->
        <div class="flex items-center gap-6">
          <img
            [src]="appDataStore.brandData().logoSrc"
            alt="Bretta Etc Logo"
            class="h-10"
          />
          <span class="text-xl font-semibold text-white tracking-wide">
            Bretta Etc
          </span>
        </div>

        <!-- Mobile Burger Icon -->
        <button class="lg:hidden text-white text-2xl" (click)="toggleMenu()">
          <ng-container *ngIf="isMenuOpen; else burgerIcon">
            <span class="sr-only">Close main menu</span>
            <icon-xmark aria-label="close main menu" />
          </ng-container>
          <ng-template #burgerIcon>
            <span class="sr-only">Open main menu</span>
            <icon-burger aria-label="Open main menu" />
          </ng-template>
        </button>
      </div>

      <!-- Mobile Menu (Folding Dropdown) -->
      <div
        *ngIf="isMenuOpen"
        class="absolute top-full left-0 w-full bg-black overflow-hidden z-59"
      >
        <nav class="py-4 flex flex-col items-center space-y-3">
          <a
            *ngIf="siteData?.navigationLinkOne"
            href="#"
            class="text-white text-xl block w-full text-center py-2 hover:bg-gray-800"
            (click)="closeMenu()"
          >
            {{ siteData?.navigationLinkOne }}
          </a>
          <a
            *ngIf="siteData?.navigationLinkTwo"
            href="#"
            class="text-white text-xl block w-full text-center py-2 hover:bg-gray-800"
            (click)="closeMenu()"
          >
            {{ siteData?.navigationLinkTwo }}
          </a>
          <a
            *ngIf="siteData?.navigationLinkThree"
            href="#"
            class="text-white text-xl block w-full text-center py-2 hover:bg-gray-800"
            (click)="closeMenu()"
          >
            {{ siteData?.navigationLinkThree }}
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderBrettioAppComponent {
  appDataStore = appDataStore;
  isMenuOpen = false;
  siteData: any = {};

  constructor() {
    this.loadSiteData();
  }

  loadSiteData() {
    this.siteData = this.appDataStore.siteData();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:keydown.escape', [])
  handleEscape() {
    this.closeMenu();
  }
}
