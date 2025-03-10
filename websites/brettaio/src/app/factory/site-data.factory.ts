import { SiteData } from '../model/site-data.model';
import { BrandData } from '../model/brand-data.model';

export function createSiteData(brandData: BrandData): SiteData {
  return {
    navigationLinkOne: `How We Do It`,
    navigationLinkTwo: `Case Studies`,
    navigationLinkThree: `FAQ`,
    navigationLinkFour: ``,

    heroPillQ: `Latest Builds`,
    heroPillA: `@angular 19.1.7`,

    heroH1: `<h1>${brandData.businessName}</h1>`,
    heroSubParagraph: `Building Entry Level Enterprise Apps<br> For Substantially Less Than The Price Of A Website<br> Thanks To The Modern Web Development Frameworks<br> And A Subscription Payment Model.`,

    problemPropHeading: `I can tell what is wrong with your current site...`,
    problemPropParagraph: `It's probablly best you sit down. Which you've probablly done to this point with many different people within the agency you just spent thousands of dollars for who all told you nice things you want to hear. Here's what they didn't tell you.`,

    ProblemPropOne: `Massive Upfront Costs & Slow Launches`,
    ProblemPropOneDesc: `Traditional sites demand huge payments before you’ve even launched, then take weeks or months to finish. Our subscription model saves you thousands up front and delivers a professional web application in a matter of days—ready to start ranking sooner and drive leads faster. Plus, the ongoing subscription means continuous updates without extra fees, so you can adapt to SEO needs and market changes on the fly.`,
    ProblemPropTwo: `Bloated Builders Kill Speed`,
    ProblemPropTwoDesc: `Platforms like WordPress and Wix pile on plugins and drag-and-drop code that bogs down load times, torpedoing your Google PageSpeed scores and user experience. We build streamlined Angular apps that target 90+ performance ratings, optimizing every asset and deploying on top-tier CDNs. This “green circle only” approach not only cuts overhead but also gives you a rock-solid foundation for expansions, whether you want a simple landing page or a more complex service-based site.`,
    ProblemPropThree: `No Real Support—And Plenty of Security Risks`,
    ProblemPropThreeDesc: `Most developers vanish after delivery, leaving you to wrestle with clunky backends, endless patches, and potential hacks. Our front-end, client-side Angular sites minimize security vulnerabilities and come with 24/7 expert support. You stay focused on your business while we handle updates, changes, and any technical hiccups. It’s a hands-off, worry-free solution—no more being left on your own with a bloated, vulnerable site.`,

    footerText: `&copy; ${brandData.currentYear} ${brandData.businessName} - Always Was [-o-] Always Will Be`,
  };
}
