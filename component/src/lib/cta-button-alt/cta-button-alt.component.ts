import { Component, computed, Input, signal } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CommonModule } from '@angular/common';
import { MessageIcon } from '../../../../icon/src/lib/message/message.icon';

@Component({
  selector: 'component-cta-button-alt',
  imports: [CommonModule, MessageIcon],
  template: `
    <button
      type="button"
      [ngClass]="combinedClasses()"
      (click)="navigateToLink(appDataStore.brandData().ctaLink)"
    >
      <span>{{ appDataStore.brandData().ctaAltText }}</span>
      <icon-message />
    </button>
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
    return `inline-flex items-center gap-x-2 rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `;
  });
  navigateToLink(url: string) {
    window.location.href = url; // Directly navigating to the link
  }
}
