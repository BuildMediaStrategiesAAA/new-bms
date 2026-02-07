import React from 'react';
import { Project } from '../types';
import { ArrowRight } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.link || '#'}
      className="group relative block w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[2/1] rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
      style={{ backgroundColor: project.bgColor, color: project.textColor }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-20">
        <div className="font-mono text-sm opacity-60">{project.year}</div>
        <div className="font-mono text-sm opacity-60 text-right">{project.category}</div>
      </div>

      {/* Title */}
      <div className="absolute top-20 left-6 md:left-8 z-20">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
          {project.title}
        </h3>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Image Container */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <div className="relative w-3/4 h-3/4 md:w-2/3 md:h-4/5 translate-y-10 group-hover:translate-y-4 transition-transform duration-700 ease-out">
           {/* Mockup shadow/container */}
           <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
      
      {/* Subtle overlay for better text contrast if needed, but Nitro usually relies on clean bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
};

export default ProjectCard;
