import { signal } from '@angular/core';
import { createBrandData } from '../factory/brand-data.factory';
import { BrandData } from '../model/brand-data.model';

export class BrandDataStore {
  brandData = signal<BrandData>(createBrandData());
}

export const brandDataStore = new BrandDataStore();
