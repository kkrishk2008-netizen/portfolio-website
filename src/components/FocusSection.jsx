import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function FocusSection() {
  const { currently } = portfolioData;

  return (
    <section className="py-[clamp(6rem,12vw,12rem)] bg-black select-none">
      <div className="site-container">
        {/* Title matching reference */}
        <h2 className="font-sans-main text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase tracking-[-0.04em] text-white mb-14">
          CURRENTLY
        </h2>

        {/* List matching reference */}
        <ul className="flex flex-col gap-7 list-none">
          {currently.map((item, index) => (
            <li
              key={index}
              className="group flex items-center font-sans-main text-[clamp(1.3rem,2.8vw,2.5rem)] font-medium tracking-[-0.03em] text-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-3 cursor-default"
            >
              <span className="font-mono-main text-gray-500 mr-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white group-hover:translate-x-1">
                →
              </span>
              <span className="group-hover:text-gray-200 transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
