export interface BlogData {
  id: string; // Unique ID for routing and references
  title: string; // Blog post title
  slug: string; // URL-friendly version (for routing)
  author: string; // Author's name
  publishedDate: string; // ISO Date string
  lastUpdatedDate?: string; // (Optional) Last modified date
  excerpt: string; // Short summary/teaser
  featuredImage?: string; // URL to featured image
  categories?: string[]; // Blog categories (e.g., 'Concrete Tips', 'How-To')
  tags?: string[]; // SEO tags or keywords
  metaDescription?: string; // For SEO meta tag
  readTime?: number; // Estimated read time in minutes
  isFeatured?: boolean; // For homepage highlights
  contentFilePath: string; // Path to the corresponding `.md` file
  callToAction?: {
    text: string;
    link: string;
  }; // Optional CTA at the end of the blog
}
