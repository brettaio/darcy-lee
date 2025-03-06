import { ServicesData } from '../model/services-data.model';

export function createServicesData(): ServicesData[] {
  return [
    {
      name: '<h2>Stamped Concrete</h2>',
      slug: 'stamped-concrete',
      featuredImage: '/stamped-concrete03-512.webp',
      featuredImageSize: 512,
      shortDescription:
        'Elegant and durable decorative concrete that mimics stone, brick, or wood.',
      metaDescription:
        'Enhance your outdoor spaces with premium stamped concrete—perfect for patios, walkways, and driveways.',
      introductionParagraph: `
        <p>Stamped concrete offers the perfect blend of <strong>durability</strong> and <strong>aesthetic appeal</strong>, making it an ideal choice for patios, driveways, and walkways. Our specialized stamping techniques allow us to replicate the appearance of natural stone, brick, or even wood—at a fraction of the cost.</p>
        <br>`,
      serviceProposition: ` <h3>What Are The Benefits of Stamped Concrete?</h3>
        <br>
        <ul>
          <li><strong>Versatility:</strong> Wide range of patterns and colors.</li>
          <li><strong>Low Maintenance:</strong> Resists stains, cracks, and fading.</li>
          <li><strong>Cost-Effective:</strong> Achieve a high-end look affordably.</li>
        </ul>`,
      applicationsHeading: `<h3>Ideal Applications Around the Home: </h3>`,
      houseApplications: [
        'Driveways',
        'Patios',
        'Pool Decks',
        'Walkways',
        'Porches',
        'Garden Paths',
      ],
      galleryImages: [
        '/stamped-concrete01.webp',
        '/stamped-concrete02.webp',
        '/stamped-concrete03.webp',
      ],
    },
    {
      name: '<h2>Brushed Concrete</h2>',
      slug: 'brushed-concrete',
      featuredImage: '/brushed-concrete02-512.webp',
      featuredImageSize: 512,
      shortDescription:
        'A clean, slip-resistant finish perfect for high-traffic outdoor areas.',
      metaDescription:
        'Brushed concrete offers durability and grip, making it ideal for driveways, walkways, and porches.',
      introductionParagraph: `
        <p>Brushed concrete is known for its classic, slip-resistant finish, achieved by brushing the surface before it fully sets. It's a versatile and cost-effective option, widely used in residential and commercial applications. Brushed concrete combines functionality and durability.</p>
        <br>`,
      serviceProposition: `<h3>What Are The Benefits of Brushed Concrete?</h3>
        <br>
        <ul>
          <li><strong>Slip-Resistant:</strong> Ideal for areas prone to moisture.</li>
          <li><strong>Cost-Effective:</strong> A budget-friendly option without sacrificing durability.</li>
          <li><strong>Low Maintenance:</strong> Minimal upkeep required.</li>
        </ul>`,
      applicationsHeading: `<h3>Ideal Applications Around the Home:</h3>`,
      houseApplications: [
        'Driveways',
        'Sidewalks',
        'Patios',
        'Garage Floors',
        'Porches',
        'Basement Floors',
      ],
      galleryImages: [
        '/brushed-concrete01.webp',
        '/brushed-concrete02.webp',
        '/brushed-concrete03.webp',
        '/brushed-concrete04.webp',
        '/brushed-concrete05.webp',
        '/brushed-concrete06.webp',
        '/brushed-concrete07.webp',
        '/brushed-concrete08.webp',
        '/brushed-concrete09.webp',
      ],
    },
    {
      name: '<h2>Exposed Aggregate</h2>',
      slug: 'exposed-aggregate',
      featuredImage: '/stamped-concrete01-512.webp',
      featuredImageSize: 512,
      shortDescription:
        'A decorative, slip-resistant concrete finish revealing natural stone textures.',
      metaDescription:
        'Exposed aggregate concrete combines aesthetics with functionality, ideal for driveways, pool decks, and patios.',
      introductionParagraph: `
        <p>Exposed aggregate is a durable and decorative concrete finish that reveals the natural beauty of stones and pebbles. It's a popular choice for homeowners seeking a unique texture and enhanced slip resistance for outdoor spaces. Perfect if you're looking to add style and durability to your property?</p><br>`,
      serviceProposition: `
        <h3>What Are The Benefits of Exposed Aggregate?</h3>
        <br>
        <ul>
          <li><strong>Textured Surface:</strong> Excellent slip resistance for wet areas.</li>
          <li><strong>Durability:</strong> Withstands heavy traffic and weather conditions.</li>
          <li><strong>Low Maintenance:</strong> Easy to clean and long-lasting.</li>
        </ul>`,
      applicationsHeading: ` <h3>Ideal Applications Around the Home:</h3>`,
      houseApplications: [
        'Driveways',
        'Pool Decks',
        'Patios',
        'Walkways',
        'Outdoor Stairs',
        'Porches',
      ],
      galleryImages: [
        '/assets/images/exposed1.jpg',
        '/assets/images/exposed2.jpg',
        '/assets/images/exposed3.jpg',
      ],
    },
  ];
}
