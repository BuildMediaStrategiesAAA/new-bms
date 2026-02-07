import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Button from './components/Button';
import TextRotator from './components/TextRotator';
import { ArrowUpRight } from './components/Icons';
import { PROJECTS, BLOG_POSTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full font-sans text-text selection:bg-white/20 selection:text-white">
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-40">
        
        {/* HERO SECTION */}
        <section className="mb-32 md:mb-48 animate-fade-in-up">
          <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
            <span>Hey, I'm Nick</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>available for new projects</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white">
            Growth partners focused on <br className="block md:hidden xl:block" />
            <TextRotator 
              words={[
                "Website Development",
                "Paid AD Campaigns",
                "Local SEO",
                "Graphic Design"
              ]} 
              className="text-white"
            />
          </h1>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="flex flex-col gap-20 md:gap-32 mb-32 md:mb-48">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`sticky top-32 md:top-40 transition-all duration-700`}
              style={{ zIndex: index + 1 }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="block font-mono text-sm text-text-muted mb-8">.about</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
                my craft is building experiences that bring value to people and celebrate function over form. let's hide the ego and give some freedom to creativity and make the first small step changing the world to a better place
              </h2>
            </div>
            <div>
              <Button href="#about">about me</Button>
            </div>
          </div>
          
          <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[800px] overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700">
             <img 
              src="https://framerusercontent.com/images/INr3fWPwNzKVuKbZgjxl5xvZaSA.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover"
            />
            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
          </div>
        </section>

        {/* NOTES (BLOG) SECTION */}
        <section id="notes" className="mb-32 md:mb-48">
          <div className="flex items-center justify-between mb-12">
             <span className="font-mono text-sm text-text-muted">.three latest notes</span>
             <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
          </div>

          <div className="flex flex-col">
            {BLOG_POSTS.map((post) => (
              <a 
                key={post.id} 
                href={post.link || '#'}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium">{post.title}</h3>
                  <span className="font-mono text-sm text-text-muted">{post.date}</span>
                </div>
                <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
             <Button href="#blog">visit blog</Button>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-32 md:mb-48">
          <div className="flex items-center gap-4 mb-12">
             <span className="font-mono text-sm text-text-muted">.say hello</span>
             <div className="h-[1px] w-24 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight mb-12">
                i'm open for freelance projects, feel free to email me to see how can we collaborate
              </h2>
            </div>
            <div className="lg:col-span-3 flex items-end justify-start lg:justify-end pb-4">
               <Button href="mailto:hello@example.com">contact me</Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pb-12 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-mono text-text-muted">
          <div className="order-2 md:order-1">
            <a href="#" className="hover:text-white transition-colors">easyfast.design</a>
          </div>
          
          <div className="order-1 md:order-2 flex gap-8">
            <a href="#projects" className="hover:text-white transition-colors">projects</a>
            <a href="#about" className="hover:text-white transition-colors">about</a>
            <a href="#notes" className="hover:text-white transition-colors">notes</a>
            <a href="#contact" className="hover:text-white transition-colors">contact</a>
          </div>

          <div className="order-3 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">twitter</a>
            <a href="#" className="hover:text-white transition-colors">instagram</a>
            <a href="#" className="hover:text-white transition-colors">linkedin</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;