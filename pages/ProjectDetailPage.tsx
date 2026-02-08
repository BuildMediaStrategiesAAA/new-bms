import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { ArrowUpRight } from '../components/Icons';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <section className="mb-32 md:mb-48 animate-fade-in-up">
        <div className="flex justify-between items-start mb-8 font-mono text-sm text-text-muted">
          <Link to="/projects" className="hover:text-white transition-colors">.projects / {project.title}</Link>
          <span>{project.year}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.2] font-medium tracking-tighter text-white">
          {project.title}
        </h1>
      </section>

      <section className="mb-32 md:mb-48">
        <div
          className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] rounded-lg overflow-hidden"
          style={{ backgroundColor: project.bgColor }}
        >
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <div className="relative w-3/4 h-3/4 md:w-2/3 md:h-4/5 translate-y-10">
              <img
                src={project.image.startsWith('/') ? project.image : '/' + project.image}
                alt={project.title}
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 md:mb-48">
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="block font-mono text-sm text-text-muted mb-8">.overview</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-medium mb-12">
              {project.description}
            </h2>
          </div>
          <div>
            <Link to="/contact">
              <Button as="span">discuss this project</Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">Category</h3>
                <span className="font-mono text-sm text-text-muted">{project.category}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">Year</h3>
                <span className="font-mono text-sm text-text-muted">{project.year}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-medium">Scope</h3>
                <span className="font-mono text-sm text-text-muted">Design, Development, Strategy</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 md:mb-48">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-sm text-text-muted">.next project</span>
          <div className="h-[1px] w-24 bg-white/10"></div>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          <div className="sticky top-32 md:top-40 transition-all duration-700" style={{ zIndex: 1 }}>
            <ProjectCard
              project={{
                ...nextProject,
                image: nextProject.image.startsWith('/') ? nextProject.image : '/' + nextProject.image,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
