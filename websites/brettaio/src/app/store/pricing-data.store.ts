import { signal } from '@angular/core';
import { createPricingData } from '../factory/pricing-data.factory';
import { PricingData } from '../model/pricing-data.model';

export class PricingDataStore {
  pricingData = signal<PricingData[]>(createPricingData());
}

export const pricingDataStore = new PricingDataStore();
