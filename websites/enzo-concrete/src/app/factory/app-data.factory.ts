import { appDataStore } from '../store/app-data.store';

export class AppFactory {
  // Expose service data
  static getServicesData = () => appDataStore.servicesData();
}
