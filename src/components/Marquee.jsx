import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Marquee() {
  const words = portfolioData.marquee;
  const marqueeString = words.join(' • ') + ' • ';

  return (
    <section className="w-full border-t border-b border-[#161616] bg-black py-7 sm:py-9 overflow-hidden select-none">
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 font-sans-main text-white font-extrabold uppercase text-[clamp(2rem,5vw,5rem)] leading-none tracking-[0.05em]">
          <span>{marqueeString}&nbsp;</span>
          <span>{marqueeString}&nbsp;</span>
          <span>{marqueeString}&nbsp;</span>
        </div>
        <div className="animate-marquee flex shrink-0 font-sans-main text-white font-extrabold uppercase text-[clamp(2rem,5vw,5rem)] leading-none tracking-[0.05em]" aria-hidden="true">
          <span>{marqueeString}&nbsp;</span>
          <span>{marqueeString}&nbsp;</span>
          <span>{marqueeString}&nbsp;</span>
        </div>
      </div>
    </section>
  );
}
