import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';

const STRATEGIES = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Custom-built, high-performance websites designed to convert visitors into customers.',
    bgColor: '#1a3d2e',
    textColor: '#c9a24d',
    detail: 'From landing pages to full-scale platforms, we build fast, responsive websites that look exceptional and drive measurable results.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Paid AD Campaigns',
    description: 'Data-driven advertising across Google, Meta, and beyond to maximize your return on ad spend.',
    bgColor: '#2a1f0e',
    textColor: '#c9a24d',
    detail: 'We craft targeted campaigns with precise audience segmentation, compelling creative, and continuous optimization to lower your cost per acquisition.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Local SEO',
    description: 'Dominate local search results and drive foot traffic with targeted SEO strategies.',
    bgColor: '#0e1f2a',
    textColor: '#c9a24d',
    detail: 'We optimize your Google Business Profile, build local citations, and create geo-targeted content that puts you at the top of local search results.',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Graphic Design',
    description: 'Brand identity, marketing collateral, and visual assets that communicate your story.',
    bgColor: '#2a0e1f',
    textColor: '#c9a24d',
    detail: 'Logos, brand guidelines, social assets, print materials, and everything visual your business needs to present a cohesive, professional image.',
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    title: 'Content Strategy',
    description: 'Engaging content plans that build authority, drive organic traffic, and nurture leads.',
    bgColor: '#1f2a0e',
    textColor: '#c9a24d',
    detail: 'We develop editorial calendars, SEO-driven blog strategies, and multimedia content plans that position your brand as an industry authority.',
    image: 'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    title: 'Social Media Management',
    description: 'Strategic social presence that builds community and amplifies your brand voice.',
    bgColor: '#0e2a24',
    textColor: '#c9a24d',
    detail: 'From content creation to community management, we handle every aspect of your social media presence to grow engagement and brand loyalty.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const PROCESS_STEPS = [
  {
    id: '1',
    title: 'Discovery',
    description: 'We learn your business, goals, audience, and competitive landscape inside out.',
  },
  {
    id: '2',
    title: 'Strategy',
    description: 'A tailored plan with clear milestones, channels, and measurable KPIs.',
  },
  {
    id: '3',
    title: 'Execution',
    description: 'Our team builds, launches, and manages every deliverable with precision.',
  },
  {
    id: '4',
    title: 'Optimization',
    description: 'Continuous analysis and iteration to improve performance over time.',
  },
];

const StrategiesPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
          <span>.strategies</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a24d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a24d]"></span>
            </span>
            <span>accepting new clients</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white">
          What we do
        </h1>
      </section>

      <section className="flex flex-col gap-20 md:gap-32 mb-32 md:mb-48">
        {STRATEGIES.map((strategy, index) => (
          <div
            key={strategy.id}
            className="sticky top-32 md:top-40 transition-all duration-700"
            style={{ zIndex: index + 1 }}
          >
            <div
              className="group relative block w-full rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
              style={{ backgroundColor: strategy.bgColor, color: strategy.textColor }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
                  <div>
                    <div className="font-mono text-sm opacity-60 mb-6">0{strategy.id}</div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
                      {strategy.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
                      {strategy.detail}
                    </p>
                  </div>
                  <div className="mt-8">
                    <span className="font-mono text-sm opacity-60">{strategy.description}</span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={strategy.image}
                    alt={strategy.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.our process</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{step.title}</h3>
                <span className="font-mono text-sm text-text-muted">{step.description}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.why us</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              we don't just execute tactics. we build integrated growth systems that compound over time. every strategy is tailored to your market, your audience, and your goals.
            </h2>
          </div>
          <div>
            <Link to="/contact">
              <Button as="span">start a project</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Strategy session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.ready to grow</span>
          <div className="h-[1px] w-24 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight mb-12">
              let's build a strategy that moves your business forward
            </h2>
          </div>
          <div className="lg:col-span-3 flex items-end justify-start lg:justify-end pb-4">
            <Link to="/contact">
              <Button as="span">contact us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrategiesPage;
