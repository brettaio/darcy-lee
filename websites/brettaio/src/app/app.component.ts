import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col w-full min-h-screen">
      <component-header-brettio-app />
      <component-hero-brettaio-app />
      <component-logo-marquee />
      <component-pricing-brettaio />
      <!-- <component-under-construction /> -->
    </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'brettaio';
}
