import { HeroData } from '../model/hero-data.model';
import { BrandData } from '../model/brand-data.model';

export function createHeroData(brandData: BrandData): HeroData {
  return {
    heroImage1: `/brushed-concrete01.webp`,
    heroImage2: `/brushed-concrete02.webp`,
    heroImage3: `/brushed-concrete03.webp`,
    heroImage4: `/stamped-concrete.webp`,
    heroImage5: `/brushed-concrete05.webp`,
  };
}
