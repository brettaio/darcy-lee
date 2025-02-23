import { HomeData } from '../model/home-data.model';
import { BrandData } from '../model/brand-data.model';

export function createHomeData(brandData: BrandData): HomeData {
  return {
    navigationLink1: `Services`,
    navigationLink2: `Reviews`,
    navigationLink3: `FAQ`,
    navigationLink4: `Contact`,
    heroH1: `<h1>${brandData.companyName}</h1>`,
    heroH2: `<h2> Get ${brandData.city}'s Trusted Concrete Contractors</h2>`,
    heroParagraph: `<p>${brandData.shortDescription}</p><br><p>Whether you need a stamped, brushed, broomed, or exposed aggregate finish, we have the expertise and craftsmanship to bring your vision to life. Fully insured and backed by over 25 years of experience, we provide durable, eco-friendly, and aesthetically appealing concrete services for driveways, patios, porches, pool decks, and more.</p>`,
    heroImageLink: `/brushed-concrete02.webp`,

    problemH2: `<h2>We've All Seen The Common Mistakes That Could Ruin Your Concrete Project</h2>`,

    problem1H3: `<h3>Cracking and Uneven Surfaces</h3>`,
    problem1Paragraph: `<p>A poorly prepared base or rushed finishing can leave you with cracks, dips, and an unlevel stamped concrete driveway that ages prematurely—lowering curb appeal and forcing costly repairs.</p>`,
    problem2H3: `<h3>Subpar Sealing or No Sealing at All</h3>`,
    problem2Paragraph: `<p>nexperienced contractors often skimp on or misuse sealing methods. Without proper sealing, your stamped concrete is prone to discoloration, staining, and moisture damage. A single bad sealing job can ruin the look of your driveway just days after it’s poured.</p>`,
    problem3H3: `<h3>Mismanaged Projects and Hidden Costs</h3>`,
    problem3Paragraph: `<p>Lack of clear communication and poor planning can lead to missed deadlines, sudden price hikes, or unexpected site work. You risk stretching your budget—and your patience—when your concrete contractor isn’t transparent or skilled in project coordination.</p>`,
    solutionHeading: `<h2>Elevate Your Property with 30 Years of Stamped Concrete Mastery in ${brandData.city}, ${brandData.province}</h2>`,
  };
}
