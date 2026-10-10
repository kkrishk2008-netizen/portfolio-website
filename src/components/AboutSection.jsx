import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="border-t border-b border-[#161616] py-[clamp(6rem,12vw,12rem)] bg-black select-none">
      <div className="site-container">
        {/* About Statement matching reference */}
        <p className="font-sans-main text-gray-400 font-light text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.15] tracking-[-0.04em] max-w-[1100px]">
          I'm <span className="text-white font-semibold">Krishna</span>. A video editor building his portfolio from the ground up — obsessed with cinematic storytelling, video editing, motion, and sound.
        </p>

        <p className="font-sans-main text-gray-500 font-light text-[clamp(1.3rem,2.5vw,2.2rem)] leading-[1.3] tracking-[-0.03em] max-w-[950px] mt-8">
          “I don’t have a client list yet. I’m building one — looking for the first project worth putting my name on.”
        </p>

        {/* Minimal Discipline Tags */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[#161616]">
          {about.capabilities.map((cap) => (
            <div
              key={cap.name}
              className="border border-[#161616] hover:border-gray-500 transition-colors px-4 py-2 font-mono-main text-xs uppercase tracking-widest text-gray-400 hover:text-white"
            >
              {cap.name} • {cap.note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
