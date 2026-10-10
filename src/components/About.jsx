import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onCursorChange }) {
  const { about } = portfolioData;

  return (
    <section id="about" className="w-full bg-black px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-[#222222] select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Section Header */}
        <div className="w-full flex items-center justify-between border-b border-[#222222] pb-6 font-mono-code text-xs text-[#888888] tracking-widest uppercase">
          <span>// 02 STATEMENT & STORY</span>
          <span>KRISHNA KUMAR</span>
        </div>

        {/* Narrative Statement — Flex column on mobile, flex row with generous gap on large screens */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="w-full lg:w-5/12 shrink-0 flex flex-col gap-4">
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.94] break-words">
              NO CLIENTS.
              <br />
              <span className="text-[#888888]">YET.</span>
            </h2>

            <div className="pt-3 font-mono-code text-[11px] text-[#888888] tracking-widest uppercase">
              STATUS: BUILDING FROM GROUND ZERO
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-6 lg:pt-1">
            <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug tracking-tight">
              “I’m building my portfolio one edit at a time — experimenting with cinematic storytelling, short-form content, motion and sound.”
            </p>

            <p className="font-display font-medium text-lg sm:text-xl text-[#888888] leading-relaxed">
              “Looking for the first project worth putting my name on.”
            </p>

            <div className="border-l-2 border-white pl-6 py-2 font-mono-code text-xs text-[#888888] leading-relaxed">
              {about.manifesto}
            </div>
          </div>
        </div>

        {/* Minimal Capabilities List — Brutalist Typography, ZERO progress bars */}
        <div className="border-t border-[#222222] pt-12 flex flex-col gap-8">
          <div className="flex justify-between items-center font-mono-code text-xs text-[#888888] tracking-widest uppercase">
            <span>CORE DISCIPLINES</span>
            <span>ZERO PERCENTAGES / 100% INTENT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {about.capabilities.map((cap, index) => (
              <div
                key={cap.name}
                onMouseEnter={() => onCursorChange?.({ type: 'VIEW' })}
                onMouseLeave={() => onCursorChange?.(null)}
                className="group border border-[#222222] hover:border-white p-6 sm:p-8 flex flex-col justify-between min-h-[190px] transition-colors duration-300 bg-black"
              >
                <div className="flex justify-between items-start font-mono-code text-xs text-[#888888] group-hover:text-white transition-colors">
                  <span>0{index + 1}</span>
                  <span className="text-sm">↗</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#888888] transition-colors">
                    {cap.name}
                  </h3>
                  <p className="font-mono-code text-[11px] text-[#888888] tracking-wide">
                    {cap.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edit Suite NLE Track Visual */}
        <div className="border border-[#222222] p-5 sm:p-6 font-mono-code text-[10px] text-[#888888] flex flex-col gap-2">
          <div className="flex justify-between text-white/50 pb-1 border-b border-[#222222]">
            <span>NLE SEQUENCE RHYTHM</span>
            <span>4K PRORES TIMELINE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-12 text-white/40 shrink-0">V2</span>
            <div className="flex-1 h-3 bg-[#111111] flex gap-1">
              <div className="w-1/6 bg-white/30" />
              <div className="w-1/4 bg-white/20" />
              <div className="w-1/3 bg-white/40" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-12 text-white/40 shrink-0">V1</span>
            <div className="flex-1 h-3 bg-[#111111] flex gap-1">
              <div className="w-1/3 bg-white/50" />
              <div className="w-1/5 bg-white/40" />
              <div className="w-1/4 bg-white/60" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-12 text-white/40 shrink-0">A1-A4</span>
            <div className="flex-1 h-3 bg-[#111111] flex gap-1">
              <div className="w-1/4 bg-white/30" />
              <div className="w-1/2 bg-white/20" />
              <div className="w-1/6 bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
