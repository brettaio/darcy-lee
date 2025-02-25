import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnalyticsConfig, ANALYTICS_CONFIG } from './analytics.config';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private isBrowser: boolean;

  constructor(
    @Inject(ANALYTICS_CONFIG) private config: AnalyticsConfig,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  trackPageView(pagePath: string): void {
    if (this.isBrowser && (window as any).gtag && this.config.gaId) {
      (window as any).gtag('config', this.config.gaId, { page_path: pagePath });
    }
  }

  trackEvent(
    eventName: string,
    eventParams: { [key: string]: any } = {},
  ): void {
    if (this.isBrowser && (window as any).gtag && this.config.gaId) {
      (window as any).gtag('event', eventName, {
        ...eventParams,
        send_to: this.config.gaId,
      });
    }
  }
}
