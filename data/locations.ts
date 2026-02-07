export interface AreaData {
  slug: string;
  name: string;
  region: string;
  parentSlug?: string;
  heroTitle: string;
  heroDescription: string;
  aboutHeading: string;
  aboutDescription: string;
  services: {
    title: string;
    slug: string;
    description: string;
  }[];
  nearbyAreas: { name: string; slug: string }[];
  ctaHeading: string;
  image: string;
}

export const AREAS: AreaData[] = [
  {
    slug: 'kent',
    name: 'Kent',
    region: 'Kent',
    heroTitle: 'Digital Growth Services Across Kent',
    heroDescription: 'BuildMediaStrategies delivers website design, graphic design, local SEO, and paid advertising for businesses throughout Kent. From the coast to the commuter belt, we help Kent companies get found, get chosen, and grow.',
    aboutHeading: 'Kent is home to thousands of ambitious small and medium businesses competing for local attention. we provide the digital infrastructure, from high-converting websites to local search dominance, that turns online visibility into revenue. we know the Kent market because we work in it every day.',
    aboutDescription: '',
    services: [
      { title: 'Website Design & Development in Kent', slug: 'website-design', description: 'Bespoke websites for Kent businesses that load fast, rank well, and convert visitors into customers. No templates, no shortcuts.' },
      { title: 'Graphic Design in Kent', slug: 'graphic-design', description: 'Brand identity and marketing materials that make Kent businesses look established and trustworthy from the first impression.' },
      { title: 'Local SEO in Kent', slug: 'local-seo', description: 'Dominate local search results across Kent towns and postcodes. Google Business Profile management, citations, and geo-targeted content.' },
      { title: 'Paid Ad Campaigns in Kent', slug: 'paid-ads', description: 'Google Ads and Meta campaigns geo-targeted to Kent audiences. More leads, more calls, better return on every pound spent.' },
    ],
    nearbyAreas: [
      { name: 'Dover', slug: 'dover' },
      { name: 'Deal', slug: 'deal' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Thanet', slug: 'thanet' },
    ],
    ctaHeading: 'looking for a digital partner who understands Kent? let\'s talk about growing your business.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'dover',
    name: 'Dover',
    region: 'East Kent',
    heroTitle: 'Web Design, SEO & Advertising in Dover',
    heroDescription: 'BuildMediaStrategies helps Dover businesses grow with professional websites, local SEO, graphic design, and paid ad campaigns. Whether you serve locals, tourists, or the port economy, we build your digital presence to capture the right customers.',
    aboutHeading: 'Dover\'s business landscape is unique, shaped by the port, the high street, and a growing population of residents who search locally first. we help Dover businesses cut through the noise with websites that convert, search rankings that stick, and ad campaigns that target buyers in your area.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Dover', slug: 'website-design', description: 'Custom-built websites for Dover businesses. Mobile-first, fast-loading, and designed to turn local searches into paying customers.' },
      { title: 'Graphic Design in Dover', slug: 'graphic-design', description: 'Professional branding and design for Dover businesses. Logos, signage, menus, leaflets, and digital assets that build local credibility.' },
      { title: 'Local SEO in Dover', slug: 'local-seo', description: 'Rank at the top when someone in Dover searches for your service. Google Business Profile management, local citations, and Dover-targeted content.' },
      { title: 'Paid Ads in Dover', slug: 'paid-ads', description: 'Google Ads and social media campaigns targeting Dover postcodes. Reach local customers actively searching for what you offer.' },
    ],
    nearbyAreas: [
      { name: 'Deal', slug: 'deal' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'let\'s put your Dover business in front of the customers who are searching for you right now.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'deal',
    name: 'Deal',
    region: 'East Kent',
    heroTitle: 'Web Design, SEO & Advertising in Deal',
    heroDescription: 'BuildMediaStrategies supports Deal businesses with website design, local SEO, graphic design, and paid advertising. From the high street to home-based businesses, we build digital strategies that bring Deal customers to your door.',
    aboutHeading: 'Deal is a tight-knit town with a loyal local customer base. the businesses that win here are the ones that show up first when locals search. we build websites, manage local SEO, and run ad campaigns specifically for Deal businesses that want more local enquiries.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Deal', slug: 'website-design', description: 'Purpose-built websites for Deal businesses. Clean design, fast load times, and clear calls to action that generate enquiries.' },
      { title: 'Graphic Design in Deal', slug: 'graphic-design', description: 'Brand identity and print design for Deal businesses. From shopfront signage to social media, we keep your brand consistent.' },
      { title: 'Local SEO in Deal', slug: 'local-seo', description: 'Own the local search results in Deal. We optimise your Google listing, build citations, and create content that ranks for Deal-specific searches.' },
      { title: 'Paid Ads in Deal', slug: 'paid-ads', description: 'Targeted ad campaigns reaching Deal and surrounding areas. Google Ads and Facebook campaigns that bring local customers directly to you.' },
    ],
    nearbyAreas: [
      { name: 'Dover', slug: 'dover' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'ready to become the first choice for customers searching in Deal? get in touch.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'canterbury',
    name: 'Canterbury',
    region: 'East Kent',
    heroTitle: 'Web Design, SEO & Advertising in Canterbury',
    heroDescription: 'BuildMediaStrategies delivers web design, local SEO, graphic design, and paid advertising for Canterbury businesses. A competitive market demands a strong digital presence. We build it.',
    aboutHeading: 'Canterbury is one of the most competitive local markets in Kent, with established businesses, a university population, and heavy tourist footfall. standing out here requires more than a basic website. we build conversion-focused sites, manage local rankings, and run ad campaigns that target the specific audiences Canterbury businesses need to reach.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Canterbury', slug: 'website-design', description: 'High-performance websites for Canterbury businesses. Built to compete in a busy local market with design that converts visitors into bookings and enquiries.' },
      { title: 'Graphic Design in Canterbury', slug: 'graphic-design', description: 'Brand design for Canterbury businesses. Logos, packaging, print, and digital assets that stand out in a market full of competitors.' },
      { title: 'Local SEO in Canterbury', slug: 'local-seo', description: 'Rank above Canterbury competitors in local search. GBP management, review strategy, local content, and citation building that drives visibility.' },
      { title: 'Paid Ads in Canterbury', slug: 'paid-ads', description: 'Google Ads and Meta campaigns targeting Canterbury residents, students, and visitors. Precise audience targeting with measurable ROI.' },
    ],
    nearbyAreas: [
      { name: 'Dover', slug: 'dover' },
      { name: 'Deal', slug: 'deal' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'Canterbury is competitive. let\'s make sure your business is the one customers find first.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'thanet',
    name: 'Thanet',
    region: 'East Kent',
    heroTitle: 'Web Design, SEO & Advertising in Thanet',
    heroDescription: 'BuildMediaStrategies provides website design, local SEO, graphic design, and paid advertising across Thanet. From Margate to Ramsgate to Broadstairs, we help Thanet businesses capture local search traffic and convert it into revenue.',
    aboutHeading: 'Thanet\'s economy is growing. tourism, hospitality, creative industries, and local services are all competing for attention online. we work with Thanet businesses to build websites that perform, dominate local search results, and run advertising that reaches the right people at the right time.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Thanet', slug: 'website-design', description: 'Custom websites for Thanet businesses. Designed to capture local traffic and convert visitors from Margate, Ramsgate, and Broadstairs.' },
      { title: 'Graphic Design in Thanet', slug: 'graphic-design', description: 'Professional branding for Thanet businesses. Visual identity that works across signage, print, social media, and web.' },
      { title: 'Local SEO in Thanet', slug: 'local-seo', description: 'Local search optimisation across all Thanet towns. Rank in the map pack for Margate, Ramsgate, Broadstairs, and surrounding areas.' },
      { title: 'Paid Ads in Thanet', slug: 'paid-ads', description: 'Geo-targeted Google and Facebook ads reaching Thanet postcodes. Campaigns built for local service businesses and retail.' },
    ],
    nearbyAreas: [
      { name: 'Margate', slug: 'thanet/margate' },
      { name: 'Ramsgate', slug: 'thanet/ramsgate' },
      { name: 'Broadstairs', slug: 'thanet/broadstairs' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Dover', slug: 'dover' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'serving customers in Thanet? let\'s make sure they find you before your competitors.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'thanet/margate',
    name: 'Margate',
    region: 'Thanet',
    parentSlug: 'thanet',
    heroTitle: 'Web Design, SEO & Advertising in Margate',
    heroDescription: 'BuildMediaStrategies helps Margate businesses grow online with professional websites, local SEO, graphic design, and paid advertising. Margate\'s regeneration has brought new opportunities. We make sure your business is visible to capture them.',
    aboutHeading: 'Margate is in the middle of a transformation. new businesses, creative ventures, and tourism are driving demand. but opportunity means competition. we build the digital foundations, fast websites, strong local rankings, and targeted ads, that help Margate businesses stand out and grow.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Margate', slug: 'website-design', description: 'Bespoke websites for Margate businesses. Built to attract tourists, locals, and online searchers with fast, mobile-first design.' },
      { title: 'Graphic Design in Margate', slug: 'graphic-design', description: 'Brand identity and creative design for Margate\'s growing business community. From cafes to studios, we design brands that fit.' },
      { title: 'Local SEO in Margate', slug: 'local-seo', description: 'Get found when people search for services in Margate. Google Business optimisation, local content, and citation building.' },
      { title: 'Paid Ads in Margate', slug: 'paid-ads', description: 'Targeted advertising reaching Margate residents and visitors. Google Ads and social campaigns built for local ROI.' },
    ],
    nearbyAreas: [
      { name: 'Ramsgate', slug: 'thanet/ramsgate' },
      { name: 'Broadstairs', slug: 'thanet/broadstairs' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'Margate is growing. let\'s make sure your business grows with it.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'thanet/ramsgate',
    name: 'Ramsgate',
    region: 'Thanet',
    parentSlug: 'thanet',
    heroTitle: 'Web Design, SEO & Advertising in Ramsgate',
    heroDescription: 'BuildMediaStrategies delivers website design, local SEO, graphic design, and paid ad campaigns for Ramsgate businesses. From the harbour to the high street, we help local businesses attract more customers through search and advertising.',
    aboutHeading: 'Ramsgate has a strong independent business community and a growing reputation as a destination town. we work with Ramsgate businesses to build professional websites, manage local search visibility, and run ad campaigns that bring customers through the door.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Ramsgate', slug: 'website-design', description: 'Professional websites for Ramsgate businesses. Designed to convert local searchers into paying customers with clean, fast builds.' },
      { title: 'Graphic Design in Ramsgate', slug: 'graphic-design', description: 'Branding and design for Ramsgate businesses. Signage, menus, social graphics, and full brand systems built for local credibility.' },
      { title: 'Local SEO in Ramsgate', slug: 'local-seo', description: 'Rank for Ramsgate searches. We manage your Google profile, build local citations, and create content targeting Ramsgate customers.' },
      { title: 'Paid Ads in Ramsgate', slug: 'paid-ads', description: 'Google and Facebook ads targeting Ramsgate and surrounding postcodes. Lead generation campaigns with clear ROI tracking.' },
    ],
    nearbyAreas: [
      { name: 'Margate', slug: 'thanet/margate' },
      { name: 'Broadstairs', slug: 'thanet/broadstairs' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'let\'s get your Ramsgate business ranking above the competition.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'thanet/broadstairs',
    name: 'Broadstairs',
    region: 'Thanet',
    parentSlug: 'thanet',
    heroTitle: 'Web Design, SEO & Advertising in Broadstairs',
    heroDescription: 'BuildMediaStrategies supports Broadstairs businesses with website design, local SEO, graphic design, and paid advertising. A popular coastal town with seasonal and year-round trade, Broadstairs businesses need digital strategies that work consistently.',
    aboutHeading: 'Broadstairs attracts visitors year-round but the businesses that thrive are the ones visible in local search, not just during Folk Week. we build websites that convert, manage local SEO that keeps you ranking, and run ad campaigns that target both residents and visitors.',
    aboutDescription: '',
    services: [
      { title: 'Website Design in Broadstairs', slug: 'website-design', description: 'Fast, mobile-first websites for Broadstairs businesses. Designed to capture tourist traffic and serve local customers year-round.' },
      { title: 'Graphic Design in Broadstairs', slug: 'graphic-design', description: 'Brand identity and design for Broadstairs businesses. Visual consistency from your shopfront to your social feed.' },
      { title: 'Local SEO in Broadstairs', slug: 'local-seo', description: 'Rank for Broadstairs-specific searches. GBP management, local content strategy, and citation building for consistent visibility.' },
      { title: 'Paid Ads in Broadstairs', slug: 'paid-ads', description: 'Advertising campaigns targeting Broadstairs and Thanet audiences. Seasonal and year-round campaigns that flex with your business.' },
    ],
    nearbyAreas: [
      { name: 'Margate', slug: 'thanet/margate' },
      { name: 'Ramsgate', slug: 'thanet/ramsgate' },
      { name: 'Thanet', slug: 'thanet' },
      { name: 'Canterbury', slug: 'canterbury' },
      { name: 'Kent', slug: 'kent' },
    ],
    ctaHeading: 'let\'s make your Broadstairs business the first one customers find online.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return AREAS.find((a) => a.slug === slug);
}
