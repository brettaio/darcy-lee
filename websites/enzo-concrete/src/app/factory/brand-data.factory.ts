import { BrandData } from '../model/brand-data.model';

export function createBrandData(): BrandData {
  const companyName = 'Enzo Concrete';
  const address = '243 Ferndale Avenue';
  const city = 'London';
  const province = 'Ontario';
  const postcode = 'N6C 5L1';
  const email = 'info@enzoconcrete.com';
  const phoneNumber = '+1(519)630-1975';

  const ctaText = `Call Now`;
  const ctaAltText = `Request A Quote`;

  const smsMessage = `Hi Enzo Concrete, I'd Love To Get In Touch & Request A Quote, Please Call Back, Thank You`;

  const headerLogoSize = 64;
  const headerLogoPadding = 10;
  const headerLogoRounding = 999;

  const footerLogoSize = 128;
  const footerLogoPadding = 0;
  const footerLogoRounding = 999;

  const logoSrc = '/enzo-logo-square-200.webp';

  return {
    companyName,
    address,
    city,
    province,
    postcode,
    email,
    phoneNumber,
    postalAddress: `${address}, ${city}, ${province}, ${postcode}`,
    shortDescription: `At ${companyName}, we specialize in delivering exceptional concrete solutions throughout ${city}, ${province}.`,
    ctaText,
    ctaLink: `tel:${phoneNumber}`,
    ctaAltText,
    ctaAltLink: `sms:${phoneNumber}?body=${encodeURIComponent(smsMessage)}`,
    headerLogoSize,
    headerLogoPadding,
    headerLogoRounding,
    footerLogoSize,
    footerLogoPadding,
    footerLogoRounding,
    logoSrc,
    logoAlt: `${companyName} Logo`,
  };
}
