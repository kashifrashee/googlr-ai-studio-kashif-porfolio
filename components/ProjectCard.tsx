import React from 'react';
import { Project } from '../types';
import { ExternalLink, Code, Play, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full hover:-translate-y-1">
      {/* Image Container - Optimized for vertical phone screenshots */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative h-80 overflow-hidden block cursor-pointer bg-darker"
      >
        {/* Blurred Background for fill effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110 transition-transform duration-700 group-hover:scale-125"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        
        {/* Main Image */}
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="max-h-full w-auto object-contain rounded-[1.5rem] shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80 z-20" />
      </a>
      
      <div className="p-7 flex-grow flex flex-col z-20 bg-card border-t border-gray-800">
        <div className="mb-5">
           <a 
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="text-xl font-bold text-white mb-2 hover:text-primary transition-colors block"
           >
             {project.title}
           </a>
           <span className="inline-block text-primary text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
             {project.role}
           </span>
        </div>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-6 p-4 bg-darker/50 rounded-xl border border-gray-800/50">
            <h4 className="text-[10px] uppercase tracking-wider text-gray-500 mb-3 font-bold">Key Highlights</h4>
            <ul className="space-y-2">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="text-gray-300 text-xs flex items-center font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2.5"></span> {metric}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-5 border-t border-gray-800/50">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-dark text-gray-400 border border-gray-700 group-hover:border-gray-600 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
             {project.link && (
               <a 
                 href={project.link}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]"
               >
                  <Play size={16} className="fill-current" />
                  Get on Play Store
               </a>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};