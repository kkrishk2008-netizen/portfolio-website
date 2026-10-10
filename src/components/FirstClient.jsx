import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function FirstClient({ onCursorChange }) {
  const { firstClient, editor, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(editor.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-[#222222] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-6 gap-3 font-mono-code text-xs text-[#888888] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 border border-white flex items-center justify-center">
              <span className="w-1 h-1 bg-white animate-pulse" />
            </span>
            <span className="text-white font-bold tracking-widest">
              // 03 {firstClient.tag} & CONTACT
            </span>
          </div>
          <span className="text-white/70">[ SLOT 01 RESERVED // AVAILABLE NOW ]</span>
        </div>

        {/* The Signature Billboard Frame */}
        <div className="relative border-2 border-[#222222] hover:border-white/60 transition-colors duration-500 p-6 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[620px] bg-black">
          {/* Viewfinder Corner Crosshairs */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono-code text-xs text-white/30 pointer-events-none">+</div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 font-mono-code text-xs text-white/30 pointer-events-none">+</div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono-code text-xs text-white/30 pointer-events-none">+</div>
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 font-mono-code text-xs text-white/30 pointer-events-none">+</div>

          {/* Center Crosshair Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
            <div className="w-full h-px bg-white" />
            <div className="h-full w-px bg-white absolute" />
          </div>

          {/* Top Meta within Frame */}
          <div className="relative z-10 flex flex-wrap justify-between items-center gap-4 font-mono-code text-[11px] text-[#888888] tracking-[0.25em] uppercase border-b border-[#222222] pb-5">
            <span className="text-white font-semibold">POSITION: 01 // VACANT</span>
            <span>FORMAT: 4K MASTER / 24.00 FPS</span>
            <span className="hidden md:inline">TIMELINE: UNLOCKED</span>
          </div>

          {/* Giant Typography — The Core Narrative */}
          <div className="relative z-10 py-8 sm:py-12 my-auto flex flex-col gap-6">
            <div className="font-mono-code text-xs text-[#888888] tracking-[0.3em] uppercase">
              LET'S MAKE SOMETHING
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5vw] text-white uppercase tracking-tight leading-[0.92] flex flex-col break-words">
              {firstClient.lines.map((line, idx) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="inline-block hover:text-[#888888] transition-colors duration-300"
                >
                  {line}
                </motion.span>
              ))}
            </h2>

            <p className="max-w-xl font-mono-code text-xs sm:text-sm text-[#888888] leading-relaxed pt-2">
              {firstClient.description}
            </p>
          </div>

          {/* Integrated Direct Contact Block */}
          <div className="relative z-10 pt-8 border-t border-[#222222] flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${editor.email}?subject=First%20Client%20Project%20Inquiry%20%E2%80%94%20Video%20Edit`}
                  onMouseEnter={() => onCursorChange?.({ type: 'VIEW' })}
                  onMouseLeave={() => onCursorChange?.(null)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300 font-mono-code text-xs uppercase tracking-[0.25em] font-bold group cursor-pointer"
                >
                  <span>EMAIL ME</span>
                  <span className="text-sm font-bold group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-6 py-4 border border-[#222222] hover:border-white text-white font-mono-code text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  {copied ? 'COPIED TO CLIPBOARD ✓' : 'COPY EMAIL'}
                </button>
              </div>

              {/* Direct Email Address Display */}
              <div className="flex flex-col font-mono-code text-xs text-[#888888]">
                <span className="text-[10px] tracking-widest text-[#888888] uppercase">
                  DIRECT INBOX
                </span>
                <span className="text-white tracking-wider">
                  {editor.email}
                </span>
              </div>
            </div>

            {/* Channels & Philosophy Footer Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#1a1a1a] font-mono-code text-xs text-[#888888]">
              <span className="text-[11px] tracking-widest uppercase">
                ZERO CLIENT LIST. 100% DEDICATED TO YOUR EDIT.
              </span>

              <div className="flex items-center gap-5 tracking-widest uppercase">
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => onCursorChange?.({ type: 'VIEW' })}
                    onMouseLeave={() => onCursorChange?.(null)}
                    className="text-white hover:text-[#888888] transition-colors text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
