import { PricingData } from '../model/pricing-data.model';

export function createPricingData(): PricingData[] {
  return [
    {
      pricingHeading: 'Pricing that grows with your team size',
      pricingDesc:
        'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',

      // Basic Info
      id: 'starter',
      name: 'Starter',
      monthlyCost: 99,
      oneTimeSetupFee: 500,
      idealFor: 'Single-page landing or service site',

      // Site Structure & Features
      pagesIncluded: '1 (single-page)',
      locationExpansions: 'Not included',
      customDomains: '1 domain included',
      edgeContentDelivery: true,
      mobileFirstDesign: true,
      imageOptimization: true,

      // Performance & SEO
      target90PageSpeed: true,
      googleSearchConsoleSetup: false, // Adjust if needed
      sitemapRobots: true,
      googleAnalyticsSetup: true,
      noPluginBloat: true,

      // Maintenance & Support
      onlineSupport: 'Included',
      phoneSupport: false,
      minorUpdatesTurnaround: '1–2 day turnaround',
      majorUpdatesTurnaround: '3–5 day turnaround',
      securityUpdates: 'Basic',
      monitoring: 'Basic checks',

      // Scalability & Expandability
      locationServiceDataInjection: 'Not included',
      futureGrowthPotential: 'Limited—upgrade required for expansions',
      additionalDomains: 'Pay per additional domain',
    },
    {
      pricingHeading: 'Pricing that grows with your team size',
      pricingDesc:
        'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',

      // Basic Info
      id: 'growth',
      name: 'Growth',
      monthlyCost: 199,
      oneTimeSetupFee: 500,
      idealFor: 'Multi-page sites with moderate expansion',

      // Site Structure & Features
      pagesIncluded: 'Up to 5 pages',
      locationExpansions: 'Up to 3 expansions',
      customDomains: '3 domains included',
      edgeContentDelivery: true,
      mobileFirstDesign: true,
      imageOptimization: true,

      // Performance & SEO
      target90PageSpeed: true,
      googleSearchConsoleSetup: true,
      sitemapRobots: true,
      googleAnalyticsSetup: true,
      noPluginBloat: true,

      // Maintenance & Support
      onlineSupport: 'Included',
      phoneSupport: false,
      minorUpdatesTurnaround: 'Within 24 hours',
      majorUpdatesTurnaround: '1–3 business days',
      securityUpdates: 'Basic',
      monitoring: 'Basic checks',

      // Scalability & Expandability
      locationServiceDataInjection: 'Partial (on request)',
      futureGrowthPotential: 'Moderate expansions possible',
      additionalDomains: 'Pay per additional domain',
    },
    {
      pricingHeading: 'Pricing that grows with your team size',
      pricingDesc:
        'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.',

      // Basic Info
      id: 'scale',
      name: 'Scale',
      monthlyCost: 299,
      oneTimeSetupFee: 500,
      idealFor: 'Large or multi-location sites needing max flexibility',

      // Site Structure & Features
      pagesIncluded: 'Unlimited pages',
      locationExpansions: 'Unlimited expansions',
      customDomains: 'Unlimited domains',
      edgeContentDelivery: true,
      mobileFirstDesign: true,
      imageOptimization: true,

      // Performance & SEO
      target90PageSpeed: true,
      googleSearchConsoleSetup: true,
      sitemapRobots: true,
      googleAnalyticsSetup: true,
      noPluginBloat: true,

      // Maintenance & Support
      onlineSupport: 'Priority',
      phoneSupport: true,
      minorUpdatesTurnaround: 'Same-day',
      majorUpdatesTurnaround: '~1 day (depending on scope)',
      securityUpdates: 'Priority patches',
      monitoring: 'Advanced monitoring',

      // Scalability & Expandability
      locationServiceDataInjection: 'Fully configured',
      futureGrowthPotential:
        'Virtually unlimited scaling for new pages/locations',
      additionalDomains: 'Unlimited included',
    },
  ];
}
