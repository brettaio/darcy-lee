import { BrandData } from '../model/brand-data.model';

export function createBrandData(): BrandData {
  const currentYear = new Date().getFullYear();

  const businessName = 'Bretta Etc Ltd';
  const websiteName = 'bretta.io';

  const logoSrc = '/bretta-b-logo.png';
  const headerLogoSize = 64;
  const headerLogoPadding = 10;
  const headerLogoRounding = 0;

  const facebookDesktopLink = `https://facebook.com`;
  const instagramDesktopLink = `https://instagram.com`;
  const xDesktopLink = `https://x.com`;
  const linkedInDesktopLink = `https://linkedin.com`;
  const youtubeDesktopLink = `https://youtube.com`;

  const facebookMobileLink = `facebook:something`;
  const instagramMobileLink = `instagram:somthing`;
  const xMobileLink = `x:somthing`;
  const linkedInMobileLink = `linkedin:something`;
  const youtubeMobileLink = `x:somthing`;

  const footerIconSize = `size-8`;

  return {
    businessName,
    websiteName,
    currentYear,

    headerLogoSize,
    headerLogoPadding,
    headerLogoRounding,
    logoSrc,
    logoAlt: `${businessName} & ${websiteName} Logo`,

    facebookDesktopLink,
    facebookMobileLink,
    instagramDesktopLink,
    instagramMobileLink,
    xDesktopLink,
    xMobileLink,
    linkedInDesktopLink,
    linkedInMobileLink,
    youtubeDesktopLink,
    youtubeMobileLink,
    footerIconSize,
  };
}
