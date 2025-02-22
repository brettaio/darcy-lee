import { HomeData } from '../model/home-data.model';
import { BrandData } from '../model/brand-data.model';

export function createHomeData(brandData: BrandData): HomeData {
  return {
    heroH1: `<h1>${brandData.companyName}</h1>`,
    heroH2: `<h2>${brandData.city}'s Trusted Concrete Contractors</h2>`,
    heroParagraph: `<p>${brandData.shortDescription}</p><br><p>Whether you need a stamped, brushed, broomed, or exposed aggregate finish, we have the expertise and craftsmanship to bring your vision to life. Fully insured and backed by over 25 years of experience, we provide durable, eco-friendly, and aesthetically appealing concrete services for driveways, patios, porches, pool decks, and more.</p>`,
    heroButton1Text: `Call Now`,
    heroButton1Link: `tel:${brandData.phoneNumber}`,
    heroButton2Text: `See Our Services`,
    heroButton2Link: `concrete-tips`,
  };
}
