import { BrandData } from '../model/brand-data.model';

export function createBrandData(): BrandData {
  const currentYear = new Date().getFullYear();

  const companyName = 'Enzo Concrete';
  const address = '243 Ferndale Avenue';
  const city = 'London';
  const province = 'Ontario';
  const postcode = 'N6C 5L1';
  const email = 'info@enzoconcrete.com';
  const phoneNumber = '+1(519)630-1975';

  const googleDesktopLink = `https://g.co/kgs/BMcb3aq`;
  const googleMobileLink = `https://g.co/kgs/BMcb3aq`;
  const emailLink = `mailto:info@enzoconcrete.com?subject=Request%20Quote&body=Hi%20Enzo%20Concrete,%0A%0AI%20would%20like%20to%20get%20a%20quote,%20thanks.`;

  const ctaText = `Find Out More`;
  const ctaAltText = `Request A Quote`;

  const smsMessage = `Hi Enzo Concrete, I'd Love To Get In Touch & Request A Quote, Please Call Back, Thank You`;

  const headerLogoSize = 64;
  const headerLogoPadding = 10;
  const headerLogoRounding = 25;

  const footerLogoSize = 128;
  const footerLogoPadding = 0;
  const footerLogoRounding = 999;

  //tailwind class icon sizes
  const testimonialStarSize = `size-8`;
  const footerIconSize = `size-12`;

  const ctaButtonIconSize = `size-8`;
  const ctaButtonIconAltSize = `size-8`;

  const problemPropIconSize = `size-8`;

  const logoSrc = '/enzo-logo-square-200.webp';

  return {
    companyName,
    address,
    city,
    province,
    postcode,
    email,
    phoneNumber,
    googleDesktopLink,
    googleMobileLink,
    emailLink,
    testimonialStarSize,
    footerIconSize,
    postalAddress: `${address}, ${city}, ${province}, ${postcode}`,
    shortDescription: `<h3>At ${companyName}, we specialize in delivering exceptional concrete solutions throughout ${city}, ${province} and surrounding areas with decades of time honoured tradition.</h3>`,
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
    footerCopyright: `<h2>&copy; ${currentYear} ${companyName}</h2>`,
    footerTag: `<h4><a href="https://bretta.io" target="_blank" rel="noopener noreferrer">Give It Up For Bretta Etc</a></h4>`,
    logoSrc,
    logoAlt: `${companyName} Logo`,
    ctaButtonIconSize,
    ctaButtonIconAltSize,
    problemPropIconSize,
  };
}
