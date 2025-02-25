import { InjectionToken } from '@angular/core';

export interface AnalyticsConfig {
  gaId: string;
  // You can add more configuration options here if needed
}

export const ANALYTICS_CONFIG = new InjectionToken<AnalyticsConfig>(
  'AnalyticsConfig',
);
