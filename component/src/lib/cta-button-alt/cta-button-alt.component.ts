import { Component, computed, Input, signal } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-cta-button-alt',
  imports: [CommonModule],
  template: `
    <a
      [ngClass]="combinedClasses()"
      [href]="appDataStore.brandData().ctaAltLink"
      [innerHTML]="appDataStore.brandData().ctaAltText"
    ></a>
  `,
  styles: ``,
})
export class CtaButtonAltComponent {
  appDataStore = appDataStore;

  private customClassesSignal = signal<string>('');

  @Input() set customClasses(classes: string) {
    this.customClassesSignal.set(classes);
  }

  combinedClasses = computed(() => {
    return `block rounded-[999px] bg-white ring-2 ring-slate-600 px-5 py-2.5  hover:shadow-lg hover:shadow-slate-600 hover:inset-shadow-2xl  transition hover:bg-slate-600 hover:text-slate-100 hover:ring-2 hover:ring-white ${this.customClassesSignal()}`;
  });
}
