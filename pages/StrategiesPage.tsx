import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowUpRight } from '../components/Icons';
import { SERVICES } from '../data/services';
import { AREAS } from '../data/locations';

const PROCESS_STEPS = [
  {
    id: '1',
    title: 'Discovery',
    description: 'We audit your current digital presence, research your competitors, and define clear commercial goals.',
  },
  {
    id: '2',
    title: 'Strategy',
    description: 'A focused plan covering exactly what needs building, optimising, or running to hit your targets.',
  },
  {
    id: '3',
    title: 'Execution',
    description: 'We build, launch, and manage. Websites go live, campaigns start running, rankings start climbing.',
  },
  {
    id: '4',
    title: 'Reporting',
    description: 'Monthly reporting on leads, traffic, rankings, and spend. You always know what\'s working and what\'s next.',
  },
];

const mainAreas = AREAS.filter((a) => !a.parentSlug);

const StrategiesPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
          <span>.services</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a24d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a24d]"></span>
            </span>
            <span>accepting new clients across Kent</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white">
          What we do
        </h1>
      </section>

      <section className="flex flex-col gap-20 md:gap-32 mb-32 md:mb-48">
        {SERVICES.map((service, index) => (
          <div
            key={service.slug}
            className="sticky top-32 md:top-40 transition-all duration-700"
            style={{ zIndex: index + 1 }}
          >
            <Link to={`/services/${service.slug}`} className="block">
              <div
                className="group relative block w-full rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
                style={{ backgroundColor: service.features[0].bgColor, color: service.features[0].textColor }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
                    <div>
                      <div className="font-mono text-sm opacity-60 mb-6">0{index + 1}</div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
                        {service.title}
                      </h3>
                      <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
                        {service.heroDescription}
                      </p>
                    </div>
                    <div className="mt-8">
                      <span className="font-mono text-sm opacity-60">{service.tagline}</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={service.features[0].image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </Link>
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
            <span className="block font-mono text-sm text-text-muted mb-8">.areas we serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              we work with businesses across Kent, from Dover to Canterbury to Thanet. every strategy is tailored to your local market and the customers searching in your area.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {mainAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white font-mono text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                {area.name}
              </Link>
            ))}
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
              stop paying for digital services that don't deliver. let's build something that works.
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
