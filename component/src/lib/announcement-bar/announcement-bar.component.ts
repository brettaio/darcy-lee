import { Component, computed, Input, signal } from '@angular/core';
import { appDataStore } from '../../../../websites/enzo-concrete/src/app/store/app-data.store';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'component-announcement-bar',
  imports: [CommonModule, CtaButtonComponent],
  template: `
    <div [ngClass]="combinedClasses()">
      <div
        class="text-center font-medium sm:text-left"
        [innerHTML]="appDataStore.homeData().announcementBarHook"
      ></div>

      <component-cta-button
        [ctaText]="'Book Project Now'"
        customClasses="text-lg font-bold text-white mt-2 alighn-center"
      />
    </div>
  `,
  styles: ``,
})
export class AnnouncementBarComponent {
  appDataStore = appDataStore;

  private customClassesSignal = signal<string>('');

  @Input() set customClasses(classes: string) {
    this.customClassesSignal.set(classes);
  }

  combinedClasses = computed(() => {
    return ` px-6 py-6 font-bold text-white flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center sm:gap-4 sm:px-6 lg:px-8 text-xl 
      ${this.customClassesSignal()}`;
  });
}
