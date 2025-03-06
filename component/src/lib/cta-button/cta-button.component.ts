import { Component, computed, Input, signal } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CommonModule } from '@angular/common';
import { PhoneCallIcon } from '../../../../icon/src/lib/phone-call/phone-call.icon';

@Component({
  selector: 'component-cta-button',
  imports: [CommonModule, PhoneCallIcon],
  template: `
    <button
      type="button"
      [ngClass]="combinedClasses()"
      (click)="navigateToLink(appDataStore.brandData().ctaLink)"
    >
      <span>{{ ctaText || appDataStore.brandData().ctaText }}</span>
      <icon-phone-call></icon-phone-call>
    </button>
  `,
  styles: ``,
})
export class CtaButtonComponent {
  appDataStore = appDataStore;

  private customClassesSignal = signal<string>('');

  @Input() set customClasses(classes: string) {
    this.customClassesSignal.set(classes);
  }

  @Input() ctaText?: string;

  combinedClasses = computed(() => {
    return `inline-flex items-center gap-x-2 rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
        `;
  });
  navigateToLink(url: string) {
    window.location.href = url; // Directly navigating to the link
  }
}
