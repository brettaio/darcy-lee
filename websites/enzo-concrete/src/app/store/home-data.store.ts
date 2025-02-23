import { signal } from '@angular/core';
import { createHomeData } from '../factory/home-data.factory';
import { HomeData } from '../model/home-data.model';
import { brandDataStore } from './brand-data.store';

export class HomeDataStore {
  homeData = signal<HomeData>(createHomeData(brandDataStore.brandData()));
}

export const homeDataStore = new HomeDataStore();
