import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../../service/src/services';

@Component({
  selector: 'app-root',
  template: `
    <component-header></component-header>
    <router-outlet />
    <component-footer></component-footer>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {
    // Optionally track the initial page view
    this.analytics.trackPageView('/home');
  }

  // handleClick(): void {
  //   this.analytics.trackEvent('button_click', { label: 'Click Me Button' });
  // }
}
