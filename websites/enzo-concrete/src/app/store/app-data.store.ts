import { signal } from '@angular/core';
import { createServicesData } from '../factory/services-data.factory';
import { ServicesData } from '../model/services-data.model';

export class AppDataStore {
  servicesData = signal<ServicesData[]>(createServicesData());
}

export const appDataStore = new AppDataStore();
