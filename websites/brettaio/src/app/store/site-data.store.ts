import { signal, computed } from '@angular/core';
import { createSiteData } from '../factory/site-data.factory';
import { SiteData } from '../model/site-data.model';
import { brandDataStore } from './brand-data.store';

export class SiteDataStore {
  siteData = signal<SiteData>(createSiteData(brandDataStore.brandData()));
}

export const siteDataStore = new SiteDataStore();

// Compute dynamic navigation paths based on the actual text in `site-data.factory.ts`
export const navigationRoutes = computed(() => ({
  [formatPath(siteDataStore.siteData().navigationLinkOne)]:
    siteDataStore.siteData().navigationLinkOne,
  [formatPath(siteDataStore.siteData().navigationLinkTwo)]:
    siteDataStore.siteData().navigationLinkTwo,
  [formatPath(siteDataStore.siteData().navigationLinkThree)]:
    siteDataStore.siteData().navigationLinkThree,
  [formatPath(siteDataStore.siteData().navigationLinkFour)]:
    siteDataStore.siteData().navigationLinkFour,
}));

// Helper function to format navigation text into kebab-case URLs
function formatPath(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}
