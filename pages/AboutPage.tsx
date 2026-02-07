import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';

const VALUES = [
  {
    id: '1',
    title: 'Strategy-First Approach',
    description: 'Every project begins with research and strategic planning to ensure measurable results.',
  },
  {
    id: '2',
    title: 'Transparent Partnership',
    description: 'We believe in open communication and treating every client relationship as a true collaboration.',
  },
  {
    id: '3',
    title: 'Results-Driven Execution',
    description: 'Our focus is on delivering tangible growth through data-informed decisions and creative excellence.',
  },
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
          BuildMediaStrategies is a growth-focused agency dedicated to helping businesses scale through strategic digital solutions.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.our story</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              we started with a simple belief: businesses deserve partners who care about growth as much as they do. every strategy we craft, every campaign we launch, and every site we build is rooted in that commitment.
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
          <span className="font-mono text-sm text-text-muted">.our values</span>
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
    </>
  );
};

export default AboutPage;
