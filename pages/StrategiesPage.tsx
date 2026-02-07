import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';

const STRATEGIES = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Custom-built, high-performance websites designed to convert visitors into customers.',
  },
  {
    id: '2',
    title: 'Paid AD Campaigns',
    description: 'Data-driven advertising across Google, Meta, and beyond to maximize your return on ad spend.',
  },
  {
    id: '3',
    title: 'Local SEO',
    description: 'Dominate local search results and drive foot traffic with targeted SEO strategies.',
  },
  {
    id: '4',
    title: 'Graphic Design',
    description: 'Brand identity, marketing collateral, and visual assets that communicate your story.',
  },
  {
    id: '5',
    title: 'Content Strategy',
    description: 'Engaging content plans that build authority, drive organic traffic, and nurture leads.',
  },
  {
    id: '6',
    title: 'Social Media Management',
    description: 'Strategic social presence that builds community and amplifies your brand voice.',
  },
];

const StrategiesPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.strategies</span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white mb-8">
          What we do
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl">
          Comprehensive digital growth strategies tailored to your business goals and market position.
        </p>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.services</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {STRATEGIES.map((strategy) => (
            <div
              key={strategy.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{strategy.title}</h3>
                <span className="font-mono text-sm text-text-muted">{strategy.description}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
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
