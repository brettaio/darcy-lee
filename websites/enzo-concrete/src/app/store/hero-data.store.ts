import { signal } from '@angular/core';
import { createHeroData } from '../factory/hero-data.factory';
import { HeroData } from '../model/hero-data.model';
import { brandDataStore } from './brand-data.store';

export class HeroDataStore {
  heroData = signal<HeroData>(createHeroData(brandDataStore.brandData()));
}

export const heroDataStore = new HeroDataStore();
