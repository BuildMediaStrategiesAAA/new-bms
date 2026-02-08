import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import TextRotator from '../components/TextRotator';
import { ArrowUpRight } from '../components/Icons';
import { PROJECTS, BLOG_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
          <span>BuildMediaStrategies</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFFFFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFFFFF]"></span>
            </span>
            <span>accepting new clients across Kent</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white">
          Growth partners focused on <br className="block md:hidden xl:block" />
          <TextRotator
            words={[
              "Website Design",
              "Paid Ad Campaigns",
              "Local SEO",
              "Graphic Design"
            ]}
            className="text-white"
          />
        </h1>
      </section>

      <section className="flex flex-col gap-20 md:gap-32 mb-32 md:mb-48">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-32 md:top-40 transition-all duration-700"
            style={{ zIndex: index + 1 }}
          >
            <ProjectCard
              project={{
                ...project,
                title: project.slug === 'me-stewart' ? 'M E Stewart LTD' : project.title,
              }}
            />
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.about</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              we help small and medium businesses across Kent get found online, win more customers, and grow. websites, SEO, advertising, and design, built around your goals, not ours.
            </h2>
          </div>
          <div>
            <Link to="/about">
              <Button as="span">about us</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="assets/Graphic & Web Design (1).png"
            alt="Portrait"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-sm text-text-muted">.latest insights</span>
          <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
        </div>

        <div className="flex flex-col">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              to={post.link || '#'}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">{post.title}</h3>
                <span className="font-mono text-sm text-text-muted">{post.date}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/strategies">
            <Button as="span">view all services</Button>
          </Link>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.say hello</span>
          <div className="h-[1px] w-24 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight mb-12">
              ready to grow your business? get in touch and let's discuss what we can build together.
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

export default HomePage;
