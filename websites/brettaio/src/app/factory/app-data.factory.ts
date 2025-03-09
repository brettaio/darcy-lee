import { appDataStore } from '../store/app-data.store';

export class AppFactory {
  static getBrandData = () => appDataStore.brandData();
  static getSiteData = () => appDataStore.siteData();
}
