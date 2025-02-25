import { brandDataStore } from './brand-data.store';
import { servicesDataStore } from './services-data.store';
import { homeDataStore } from './home-data.store';
import { reviewDataStore } from './review-data.store';

export class AppDataStore {
  brandData = brandDataStore.brandData;
  servicesData = servicesDataStore.servicesData;
  homeData = homeDataStore.homeData;
  reviewData = reviewDataStore.reviews;
}

export const appDataStore = new AppDataStore();
