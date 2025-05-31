import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col w-full min-h-screen">
      <component-header-brettio-app />
      <component-hero-brettaio-app />
      <component-logo-marquee />
      <component-customer-onboarding-brettaio />
      <component-pricing-brettaio />
      <!-- <component-under-construction />  -->
    </div>
    <!-- <page-landing-page-one /> -->
    <!-- <page-landing-page-two /> -->
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'brettaio';
}
