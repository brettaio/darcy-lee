import { brandDataStore } from './brand-data.store';
import { heroDataStore } from './hero-data.store';
import { servicesDataStore } from './services-data.store';
import { homeDataStore } from './home-data.store';
import { reviewDataStore } from './review-data.store';
import { problemPropDataStore } from './problem-prop-data.store';

export class AppDataStore {
  brandData = brandDataStore.brandData;
  heroData = heroDataStore.heroData;
  servicesData = servicesDataStore.servicesData;
  homeData = homeDataStore.homeData;
  reviewData = reviewDataStore.reviews;
  problemPropData = problemPropDataStore.problemPropData;
}

export const appDataStore = new AppDataStore();
