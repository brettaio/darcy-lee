import { Component, computed, Input, signal } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-cta-button',
  imports: [CommonModule],
  template: `
    <a
      [ngClass]="combinedClasses()"
      [href]="appDataStore.brandData().ctaLink"
      [innerHTML]="appDataStore.brandData().ctaText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonComponent {
  appDataStore = appDataStore;

  private customClassesSignal = signal<string>('');

  @Input() set customClasses(classes: string) {
    this.customClassesSignal.set(classes);
  }

  combinedClasses = computed(() => {
    return `block rounded-[999px] ring-2 ring-white bg-gray-600 px-5 py-2.5 hover:shadow-lg hover:shadow-gray-600 hover:inset-shadow-2xl transition hover:bg-white hover:text-gray-600 hover:ring-2 
            hover:ring-gray-600 ${this.customClassesSignal()}`;
  });
}
