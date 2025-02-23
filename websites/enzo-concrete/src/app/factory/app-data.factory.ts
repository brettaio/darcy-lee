import { appDataStore } from '../store/app-data.store';

export class AppFactory {
  static getBrandData = () => appDataStore.brandData();
  static getServicesData = () => appDataStore.servicesData();
  static getHomeData = () => appDataStore.homeData();
}
