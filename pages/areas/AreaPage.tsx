import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ArrowUpRight } from '../../components/Icons';
import { getAreaBySlug } from '../../data/locations';

const AreaPage: React.FC = () => {
  const { slug, subslug } = useParams<{ slug: string; subslug?: string }>();
  const fullSlug = subslug ? `${slug}/${subslug}` : slug || '';
  const area = getAreaBySlug(fullSlug);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
          <span>
            <Link to="/areas/kent" className="hover:text-white transition-colors">.areas</Link>
            {area.parentSlug && (
              <> / <Link to={`/areas/${area.parentSlug}`} className="hover:text-white transition-colors">{area.region.toLowerCase()}</Link></>
            )}
            {' / '}{area.name.toLowerCase()}
          </span>
          <span>{area.region}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white mb-8">
          {area.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-3xl">
          {area.heroDescription}
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.why {area.name.toLowerCase()}</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              {area.aboutHeading}
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
            src={area.image}
            alt={area.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.services in {area.name.toLowerCase()}</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {area.services.map((service) => (
            <Link
              key={service.slug}
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

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.nearby areas</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {area.nearbyAreas.map((nearby) => (
            <Link
              key={nearby.slug}
              to={`/areas/${nearby.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{nearby.name}</h3>
                <span className="font-mono text-sm text-text-muted">Web design, SEO & advertising in {nearby.name}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.get started</span>
          <div className="h-[1px] w-24 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight mb-12">
              {area.ctaHeading}
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

export default AreaPage;
