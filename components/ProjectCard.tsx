import React from 'react';
import { Project } from '../types';
import { ExternalLink, Code, Play, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full">
      {/* Image Container - Optimized for vertical phone screenshots */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative h-80 overflow-hidden block cursor-pointer bg-darker/50"
      >
        {/* Blurred Background for fill effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        
        {/* Main Image */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="max-h-full w-auto object-contain rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
          />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 z-20" />
      </a>
      
      <div className="p-6 flex-grow flex flex-col z-20 bg-card border-t border-gray-800">
        <div className="mb-4">
           <a 
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="text-xl font-bold text-white mb-2 hover:text-primary transition-colors block"
           >
             {project.title}
           </a>
           <span className="inline-block text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded border border-primary/20">
             {project.role}
           </span>
        </div>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Impact</h4>
            <ul className="space-y-1">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="text-secondary text-sm flex items-center">
                  <span className="mr-2 text-xs">●</span> {metric}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-800/50">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700">
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
                 className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
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