import { BlogData } from '../model/blog-data.model';

export function createBlogData(): BlogData[] {
  return [
    {
      id: 'blog-001',
      title: 'Top 5 Concrete Finishes',
      slug: 'top-5-concrete-finishes',
      author: 'John Doe',
      publishedDate: '2024-02-15',
      excerpt:
        'Discover the most popular concrete finishes that can transform your outdoor spaces.',
      featuredImage: '/assets/images/concrete-finishes.jpg',
      categories: ['Concrete Tips', 'Design'],
      tags: ['concrete', 'finishes', 'home improvement'],
      metaDescription:
        'A deep dive into the top 5 concrete finishes for residential and commercial spaces.',
      readTime: 5,
      isFeatured: true,
      contentFilePath: '/assets/blogs/top-5-concrete-finishes.md',
      callToAction: {
        text: 'Get a Free Quote Today!',
        link: '/contact',
      },
    },
    {
      id: 'blog-002',
      title: 'How to Maintain Concrete Driveways',
      slug: 'maintain-concrete-driveways',
      author: 'Jane Smith',
      publishedDate: '2024-02-10',
      excerpt: 'A complete guide to extending the life of your driveway.',
      featuredImage: '/assets/images/driveway-maintenance.jpg',
      categories: ['Maintenance', 'How-To'],
      tags: ['concrete', 'driveway', 'care'],
      metaDescription:
        'Learn how to keep your concrete driveway in top shape with these simple maintenance tips.',
      readTime: 7,
      isFeatured: false,
      contentFilePath: '/assets/blogs/maintain-concrete-driveways.md',
    },
  ];
}
