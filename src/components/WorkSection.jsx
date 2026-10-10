import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

export default function WorkSection({ onSelectProject }) {
  return (
    <section id="work" className="py-[clamp(6rem,12vw,12rem)] bg-black select-none">
      <div className="site-container">
        {/* Section Title matching reference */}
        <h2 className="font-sans-main text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-[-0.04em] text-white mb-[clamp(3rem,6vw,6rem)]">
          WORK
        </h2>

        {/* Projects Grid matching reference */}
        <div className="flex flex-col gap-[clamp(4rem,8vw,8rem)]">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
