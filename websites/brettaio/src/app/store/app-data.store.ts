import { brandDataStore } from '../store/brand-data.store';
import { siteDataStore } from '../store/site-data.store';
import { pricingDataStore } from '../store/pricing-data.store';

export class AppDataStore {
  brandData = brandDataStore.brandData;
  siteData = siteDataStore.siteData;
  pricingData = pricingDataStore.pricingData;
}

export const appDataStore = new AppDataStore();
