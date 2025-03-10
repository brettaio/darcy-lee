import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { appDataStore } from '../../../../websites/brettaio/src/app/store/app-data.store';
import { GridOverlay } from '../../../../overlay/src/lib/grid/grid.overlay';
import { GradientSmudgeOverlay } from '../../../../overlay/src/lib/gradient-smudge/gradient-smudge.overlay';
import { ChevronRightIcon } from '../../../../icon/src/lib/chevron-right/chevron-right.icon';
import {
  flipAnimation,
  popBounceAnimation,
  scaleInAnimation,
} from '../../../../animation/src/animation';
@Component({
  selector: 'component-hero-brettaio',
  imports: [GridOverlay, GradientSmudgeOverlay, ChevronRightIcon],
  animations: [scaleInAnimation, flipAnimation, popBounceAnimation],
  template: `
    <div class="relative isolate overflow-hidden bg-gray-900">
      <overlay-grid />
      <overlay-gradient-smudge />
      <div
        class="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40"
      >
        <div class="mx-auto max-w-2xl shrink-0 lg:mx-0">
          <div class="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" class="inline-flex space-x-6">
              <span
                class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset"
                [innerText]="appDataStore.siteData().heroPillQ"
              ></span>
              <span
                class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300"
              >
                <span [innerText]="appDataStore.siteData().heroPillA"></span>
                <icon-chevron-right />
              </span>
            </a>
          </div>
          <div
            class="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl"
            #cardElement
            [@flipState]="flipState"
            [innerHTML]="appDataStore.brandData().businessName"
          ></div>
          <p
            #textElement
            [@popBounce]="popState"
            class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
            [innerHTML]="appDataStore.siteData().heroSubParagraph"
          ></p>
          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" class="text-sm/6 font-semibold text-white">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div
          class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/enzoconcrete-ss-hero.webp"
              #imageElement
              [@scaleIn]="scaleState"
              alt="App screenshot"
              width="2432"
              height="1442"
              class="w-[76rem] rounded-md bg-white/5 ring-1 shadow-2xl ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeroBrettaioComponent {
  appDataStore = appDataStore;
  @ViewChild('imageElement', { static: false }) imageElement!: ElementRef;
  @ViewChild('cardElement', { static: false }) cardElement!: ElementRef;
  @ViewChild('textElement', { static: false }) textElement!: ElementRef;

  scaleState: 'default' | 'visible' = 'default';
  flipState: 'default' | 'visible' = 'default';
  popState: 'default' | 'visible' = 'default';

  @HostListener('window:scroll', [])
  onScroll() {
    const windowHeight = window.innerHeight;

    if (this.imageElement) {
      const rect = this.imageElement.nativeElement.getBoundingClientRect();
      this.scaleState =
        rect.top < windowHeight * 0.75 && rect.bottom > 0
          ? 'visible'
          : 'default';
    }

    if (this.cardElement) {
      const rect = this.cardElement.nativeElement.getBoundingClientRect();
      this.flipState =
        rect.top < windowHeight * 0.75 && rect.bottom > 0
          ? 'visible'
          : 'default';
    }

    if (this.textElement) {
      const rect = this.textElement.nativeElement.getBoundingClientRect();
      this.popState =
        rect.top < windowHeight * 0.75 && rect.bottom > 0
          ? 'visible'
          : 'default';
    }
  }
}
