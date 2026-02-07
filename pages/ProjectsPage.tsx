import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.projects</span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white mb-8">
          Selected work
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl">
          A curated collection of projects spanning web development, branding, paid campaigns, and digital strategy.
        </p>
      </section>

      <section className="flex flex-col gap-20 md:gap-32 mb-32 md:mb-48">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-32 md:top-40 transition-all duration-700"
            style={{ zIndex: index + 1 }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsPage;
