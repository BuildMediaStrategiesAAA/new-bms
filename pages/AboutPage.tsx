import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';

const VALUES = [
  {
    id: '1',
    title: 'No Jargon, No Runaround',
    description: 'We explain what we\'re doing, why we\'re doing it, and what results to expect. Plain English, always.',
  },
  {
    id: '2',
    title: 'Results Over Activity',
    description: 'We measure success by leads generated, rankings gained, and revenue influenced, not hours logged or reports filed.',
  },
  {
    id: '3',
    title: 'Built for Kent Businesses',
    description: 'We understand the local market. We work with tradespeople, hospitality, retail, clinics, and service businesses across East Kent.',
  },
  {
    id: '4',
    title: 'Long-Term Partnerships',
    description: 'Most clients stay with us for years. We\'re not interested in quick wins that don\'t last.',
  },
];

const SERVICES_OVERVIEW = [
  { id: '1', title: 'Website Design & Development', slug: 'website-design', description: 'Fast, mobile-first websites that convert visitors into customers.' },
  { id: '2', title: 'Graphic Design', slug: 'graphic-design', description: 'Brand identity and marketing materials that build credibility.' },
  { id: '3', title: 'Local SEO', slug: 'local-seo', description: 'Google Business Profile management, citations, and local content strategy.' },
  { id: '4', title: 'Paid Ad Campaigns', slug: 'paid-ads', description: 'Google Ads and Meta campaigns with transparent ROI reporting.' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.about</span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white mb-8">
          Who we are
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl">
          BuildMediaStrategies is a digital growth partner for small and medium businesses across Kent. We build websites, manage local SEO, run paid advertising, and design brands that earn trust.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.our approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              we started because too many local businesses were paying for digital services that didn't deliver. no clear reporting, no measurable outcomes, no accountability. we do things differently. every strategy is built around your specific market, your customers, and your commercial goals.
            </h2>
          </div>
          <div>
            <Link to="/contact">
              <Button as="span">get in touch</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.how we work</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {VALUES.map((value) => (
            <div
              key={value.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{value.title}</h3>
                <span className="font-mono text-sm text-text-muted">{value.description}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.what we do</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {SERVICES_OVERVIEW.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{service.title}</h3>
                <span className="font-mono text-sm text-text-muted">{service.description}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
