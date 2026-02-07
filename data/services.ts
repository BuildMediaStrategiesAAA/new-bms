export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  features: {
    id: string;
    title: string;
    detail: string;
    description: string;
    bgColor: string;
    textColor: string;
    image: string;
  }[];
  deliverables: {
    id: string;
    title: string;
    description: string;
  }[];
  whyTitle: string;
  whyDescription: string;
  whyImage: string;
  ctaHeading: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'website-design',
    title: 'Website Design & Development',
    tagline: 'Websites that convert visitors into paying customers',
    heroDescription: 'We build fast, mobile-first websites for businesses across Kent. No templates. No page builders. Every site is purpose-built to generate leads, book appointments, and drive revenue.',
    features: [
      {
        id: '1',
        title: 'Bespoke Design',
        detail: 'Every layout is designed from scratch around your business goals. We study your competitors, your customers, and your market position before a single pixel is placed.',
        description: 'Custom layouts built for your market and audience.',
        bgColor: '#1a3d2e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '2',
        title: 'Performance-First Build',
        detail: 'Sub-second load times, clean code, and mobile responsiveness as standard. Fast sites rank higher and convert better. We optimise every build for Core Web Vitals.',
        description: 'Speed and technical quality that search engines reward.',
        bgColor: '#2a1f0e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '3',
        title: 'Conversion Architecture',
        detail: 'Strategic page flows, clear calls to action, and user journeys mapped to your sales process. Every element serves a purpose: turning visitors into enquiries.',
        description: 'Page structures engineered to generate leads.',
        bgColor: '#0e1f2a',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    deliverables: [
      { id: '1', title: 'Responsive Design', description: 'Pixel-perfect on every device from mobile to desktop.' },
      { id: '2', title: 'SEO Foundations', description: 'On-page SEO, meta structure, and schema markup built in from day one.' },
      { id: '3', title: 'CMS Integration', description: 'Easy content management so you can update pages without a developer.' },
      { id: '4', title: 'Analytics Setup', description: 'Google Analytics 4 and conversion tracking configured at launch.' },
      { id: '5', title: 'SSL & Security', description: 'HTTPS, security headers, and hosting hardened against common threats.' },
      { id: '6', title: 'Ongoing Support', description: 'Post-launch maintenance, updates, and performance monitoring.' },
    ],
    whyTitle: 'your website is your hardest-working salesperson. we build sites that earn their keep, loading fast, ranking well, and turning clicks into customers across Kent and the South East.',
    whyDescription: '',
    whyImage: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
    ctaHeading: 'ready for a website that actually generates business? let\'s talk about what you need.',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Brand identity that earns trust before you say a word',
    heroDescription: 'From logos to full brand systems, we create visual identities that make small businesses look established. Professional design builds credibility, and credibility wins customers.',
    features: [
      {
        id: '1',
        title: 'Brand Identity',
        detail: 'Logo design, colour palettes, typography, and brand guidelines that give your business a consistent, professional presence across every touchpoint.',
        description: 'Complete visual systems that define how your business looks.',
        bgColor: '#2a0e1f',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '2',
        title: 'Marketing Collateral',
        detail: 'Business cards, brochures, flyers, signage, and printed materials that carry your brand into the real world. Designed for impact and built for print.',
        description: 'Print-ready materials that represent your business.',
        bgColor: '#1a3d2e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '3',
        title: 'Digital Assets',
        detail: 'Social media graphics, email headers, ad creative, and web assets. Consistent visual content that keeps your brand recognisable across every digital channel.',
        description: 'On-brand visuals for every online platform.',
        bgColor: '#0e2a24',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    deliverables: [
      { id: '1', title: 'Logo Design', description: 'Primary logo, variations, and usage rules for all contexts.' },
      { id: '2', title: 'Brand Guidelines', description: 'A documented system covering colours, fonts, spacing, and tone.' },
      { id: '3', title: 'Print Design', description: 'Business cards, letterheads, brochures, and signage artwork.' },
      { id: '4', title: 'Social Media Templates', description: 'Editable templates for consistent social content.' },
      { id: '5', title: 'Presentation Design', description: 'Pitch decks and client-facing documents that look sharp.' },
    ],
    whyTitle: 'first impressions happen in seconds. we design brand identities and marketing materials that make your business look as good as the work you do, whether you\'re in Dover, Canterbury, or anywhere in Kent.',
    whyDescription: '',
    whyImage: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800',
    ctaHeading: 'let\'s build a brand that your customers remember and your competitors notice.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    tagline: 'Get found by customers searching in your area',
    heroDescription: 'We put Kent businesses at the top of local search results. Google Business Profile optimisation, local citations, geo-targeted content, and technical SEO that drives foot traffic and phone calls.',
    features: [
      {
        id: '1',
        title: 'Google Business Profile',
        detail: 'Full optimisation of your Google Business listing: categories, attributes, posts, Q&A, photos, and review management. The foundation of local visibility.',
        description: 'The single most important factor in local search rankings.',
        bgColor: '#0e1f2a',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '2',
        title: 'Local Citations',
        detail: 'Consistent NAP (Name, Address, Phone) listings across directories, industry sites, and local platforms. We build and clean up your citation profile to strengthen local trust signals.',
        description: 'Directory presence that reinforces your local authority.',
        bgColor: '#1f2a0e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '3',
        title: 'Geo-Targeted Content',
        detail: 'Location-specific landing pages and content built around the search terms your customers actually use. Targeting town-level and service-area keywords with commercial intent.',
        description: 'Content strategy that captures local search demand.',
        bgColor: '#2a1f0e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '4',
        title: 'Technical SEO',
        detail: 'Site speed, mobile usability, structured data, internal linking, and crawlability. The technical foundation that gives your content the best chance of ranking.',
        description: 'The behind-the-scenes work that search engines care about.',
        bgColor: '#1a3d2e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    deliverables: [
      { id: '1', title: 'GBP Optimisation', description: 'Full setup and ongoing management of your Google Business Profile.' },
      { id: '2', title: 'Citation Building', description: '50+ local and industry directory listings, cleaned and consistent.' },
      { id: '3', title: 'Local Landing Pages', description: 'SEO-optimised pages targeting your key service areas.' },
      { id: '4', title: 'Review Strategy', description: 'Systems to generate and manage customer reviews consistently.' },
      { id: '5', title: 'Monthly Reporting', description: 'Ranking positions, traffic, calls, and direction requests tracked monthly.' },
      { id: '6', title: 'Competitor Analysis', description: 'Ongoing monitoring of local competitor activity and rankings.' },
    ],
    whyTitle: 'when someone in Kent searches for what you do, you need to be the first business they see. we build local SEO strategies that put you in the map pack and keep you there.',
    whyDescription: '',
    whyImage: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
    ctaHeading: 'stop losing customers to competitors who rank above you. let\'s fix your local search visibility.',
  },
  {
    slug: 'paid-ads',
    title: 'Paid Ad Campaigns',
    tagline: 'Targeted ads that put your business in front of buyers',
    heroDescription: 'Google Ads and Meta campaigns built for ROI, not vanity metrics. We manage paid advertising for Kent businesses that want more leads, more calls, and more sales from every pound spent.',
    features: [
      {
        id: '1',
        title: 'Google Ads',
        detail: 'Search, display, and local service ads configured to capture high-intent traffic. Keyword research, ad copy, bidding strategy, and conversion tracking all handled.',
        description: 'Capture demand the moment someone searches for your service.',
        bgColor: '#2a1f0e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '2',
        title: 'Meta Advertising',
        detail: 'Facebook and Instagram campaigns with precise audience targeting, creative testing, and retargeting sequences. We build funnels that move people from awareness to action.',
        description: 'Reach your ideal customers where they scroll.',
        bgColor: '#0e2a24',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: '3',
        title: 'Landing Pages',
        detail: 'Campaign-specific landing pages designed to convert ad traffic. A/B tested headlines, forms, and layouts that reduce cost per lead and improve return on ad spend.',
        description: 'Purpose-built pages that turn ad clicks into enquiries.',
        bgColor: '#1a3d2e',
        textColor: '#c9a24d',
        image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
    deliverables: [
      { id: '1', title: 'Campaign Setup', description: 'Account structure, tracking, and conversion goals configured properly.' },
      { id: '2', title: 'Ad Creative', description: 'Copy, headlines, and visuals tested and optimised for your audience.' },
      { id: '3', title: 'Audience Targeting', description: 'Geo-targeting, demographics, and intent signals refined for Kent markets.' },
      { id: '4', title: 'Bid Management', description: 'Daily monitoring and adjustment to maximise budget efficiency.' },
      { id: '5', title: 'Conversion Tracking', description: 'Calls, forms, and sales tracked back to specific ads and keywords.' },
      { id: '6', title: 'Monthly Reporting', description: 'Spend, leads, cost per acquisition, and ROI reported transparently.' },
    ],
    whyTitle: 'every pound of ad spend should be accountable. we build campaigns that target buyers, not browsers, and we prove the return with clear monthly reporting.',
    whyDescription: '',
    whyImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    ctaHeading: 'ready to get more leads from your ad budget? let\'s build campaigns that actually deliver.',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
