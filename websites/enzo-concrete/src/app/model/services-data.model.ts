export interface ServicesData {
  name: string; // Service Name (e.g., "Stamped Concrete")
  slug: string; // URL-friendly slug for routing (e.g., "stamped-concrete")
  featuredImage?: string; // Hero image for future use or featured sections
  featuredImageSize?: number;
  shortDescription: string; // Brief summary for service listings or previews
  metaDescription?: string; // SEO meta tag for individual service pages
  introductionParagraph: string; // Full-page content wrapped in HTML tags (<h2>, <h3>, <p>, <ul>)
  serviceProposition: string;
  applicationsHeading: string;
  houseApplications: string[]; // Specific places/parts of a house that require concreting
  galleryImages?: string[]; // Optional array of images for a gallery or slider
}
