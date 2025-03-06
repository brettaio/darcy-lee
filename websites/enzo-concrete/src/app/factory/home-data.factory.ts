import { HomeData } from '../model/home-data.model';
import { BrandData } from '../model/brand-data.model';

export function createHomeData(brandData: BrandData): HomeData {
  return {
    navigationLink1: `Services`,
    navigationLink2: `Reviews`,
    navigationLink3: `FAQ`,
    navigationLink4: `Contact`,

    announcementBarColour: `bg-slate-800 bg-gradient-to-b from-white-900/20 to-slate-700/100`,
    announcementBarHook: `<h2><i>First Bookings For 2025 Open Now!</i></h2>`,

    heroH1: `<h1>${brandData.companyName}</h1>`,
    heroH2: `<h2> ${brandData.companyName} Are ${brandData.city}'s Finest In Concrete</h2>`,
    heroParagraph: `<p>${brandData.shortDescription}</p><br><p>Whether you need a stamped, brushed, broomed, or exposed aggregate finish, we have the expertise and craftsmanship to bring your vision to life. Fully insured and backed by over 25 years of experience, we provide durable, eco-friendly, and aesthetically appealing concrete services for driveways, patios, porches, pool decks, and more.</p>`,

    solutionHeading: `<h2>Elevate Your Property with 30 Years of Stamped Concrete Mastery in ${brandData.city}, ${brandData.province}</h2>`,

    testimonialHeading: `<h2>Look don't take our word for it, here's what some of our previous projects have to say`,
    formHeading: `<h2>Let's Get In Touch</h2>`,
    formParagraph: `<h3>Since we've made it this far, what are you waiting for? Drop us a line and we'll get the ball rolling on your next concrete project. No project is too big, too small or too far away. Let's work it out and put your mind at ease now that you've found the experts in the trade. Speak soon!</h3>`,

    faqQuestionOne: `<p>Is concrete the right material for my project?</p>`,
    faqAnswerOne: `<p>Concrete is one of the most versatile and durable materials available. It's ideal for driveways, patios, walkways, foundations, and decorative elements. If you're looking for something that lasts decades with minimal maintenance, concrete is often the best choice. Not sure if it's right for your specific project? Our team can help you weigh your options based on budget, aesthetics, and durability.</p>`,
    faqQuestionTwo: `<p>What’s the difference between regular concrete and decorative options like stamped or brushed concrete?</p>`,
    faqAnswerTwo: `<p>While regular concrete offers durability and function, decorative options like stamped, brushed, or exposed aggregate add visual appeal. Stamped concrete can mimic brick, stone, or wood patterns, while brushed concrete gives a clean, slip-resistant finish—perfect for driveways and walkways. Decorative options often cost slightly more but add significant value and curb appeal to your property.</p>`,
    faqQuestionThree: `<p>How much does a concreting project typically cost?</p>`,
    faqAnswerThree: `<p>Concrete costs vary based on the size, complexity, and finish you choose. Basic concrete slabs generally cost less, while decorative finishes or larger-scale projects can increase the price. We offer transparent, no-obligation quotes and can help tailor the project to your budget while still achieving your desired look and function.</p>`,
    faqQuestionFour: `<p>How long will my concreting project take from start to finish?</p>`,
    faqAnswerFour: `<p>The timeline depends on factors like project size, weather conditions, and finish type. A simple driveway might take 2-3 days, while more complex decorative patios could require up to a week. We’ll provide a clear project timeline before starting, and our team prioritizes efficiency without compromising quality.
</p>`,
    faqQuestionFive: `<p>What preparation is needed before starting my concreting project?</p>`,
    faqAnswerFive: `<p>Preparation is crucial for a long-lasting concrete surface. This includes site clearing, grading, forming, and ensuring proper drainage. Don’t worry—our team handles all prep work, but it’s helpful if the area is free of large obstacles or debris before we start. We’ll walk you through the entire process beforehand.</p>`,
    faqQuestionSix: `<p>How do I maintain my concrete after installation?</p>`,
    faqAnswerSix: `<p>Concrete is low-maintenance but benefits from sealing every few years to protect against weather, staining, and cracking. Regular cleaning with a hose or pressure washer helps maintain its appearance. We also offer post-installation care guides and optional maintenance services to keep your concrete looking great for years to come.</p>`,
    faqQuestionSeven: `<p>What makes your concreting services stand out?</p>`,
    faqAnswerSeven: `<p>We combine expert craftsmanship, high-quality materials, and transparent communication. Our team specializes in both functional and decorative concreting, ensuring every project is built to last and customized to match your vision. From the initial quote to the final finish, we focus on reliability, safety, and customer satisfaction.</p>`,
    faqQuestionEight: `<p>How do I get started with a quote or consultation?</p>`,
    faqAnswerEight: `<p>Getting started is simple! Let's chat and give us a call, or send us a request quote text and we'll call back for a free, no-obligation quote. We’ll discuss your project, offer expert recommendations, and provide a detailed estimate. Let’s bring your concreting vision to life — reach out today!</p>`,
  };
}
