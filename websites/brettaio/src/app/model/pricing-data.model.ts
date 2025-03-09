export interface PricingData {
  pricingHeading: string;
  pricingDesc: string;

  // Basic Info
  id: string; // e.g. 'starter' | 'growth' | 'scale'
  name: string; // e.g. 'Starter'
  monthlyCost: number; // e.g. 99
  oneTimeSetupFee: number; // e.g. 500
  idealFor: string; // e.g. 'Single-page landing or service site'

  // Site Structure & Features
  pagesIncluded: string; // e.g. '1 (single-page)' or 'Unlimited'
  locationExpansions: string; // e.g. 'Not included' or 'Unlimited expansions'
  customDomains: string; // e.g. '1 domain included' or 'Unlimited domains'
  edgeContentDelivery: boolean; // e.g. true if included
  mobileFirstDesign: boolean; // e.g. true
  imageOptimization: boolean; // e.g. true

  // Performance & SEO
  target90PageSpeed: boolean; // e.g. true if "Yes"
  googleSearchConsoleSetup: boolean;
  sitemapRobots: boolean; // e.g. true if "Included"
  googleAnalyticsSetup: boolean; // e.g. true if "Included"
  noPluginBloat: boolean; // e.g. true if "Yes (custom code)"

  // Maintenance & Support
  onlineSupport: string; // e.g. 'Included', 'Priority', etc.
  phoneSupport: boolean; // e.g. true if phone support is included
  minorUpdatesTurnaround: string; // e.g. '1–2 business days'
  majorUpdatesTurnaround: string; // e.g. '3–5 business days'
  securityUpdates: string; // e.g. 'Basic' or 'Priority patches'
  monitoring: string; // e.g. 'Basic checks' or 'Advanced monitoring'

  // Scalability & Expandability
  locationServiceDataInjection: string; // e.g. 'Not included', 'Partial', 'Fully configured'
  futureGrowthPotential: string; // e.g. 'Limited', 'Moderate expansions', 'Virtually unlimited'
  additionalDomains: string; // e.g. 'Pay per additional domain' or 'Unlimited included'
}
