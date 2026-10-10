import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onCursorChange }) {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full bg-black px-6 sm:px-10 lg:px-16 py-32 border-t border-[#222222] select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Header Line */}
        <div className="w-full flex items-center justify-between border-b border-[#222222] pb-6 font-mono-code text-xs text-[#888888] tracking-widest uppercase">
          <span>// 04 CONTACT</span>
          <span>KRISHNA KUMAR</span>
        </div>

        {/* Huge Headline */}
        <div className="flex flex-col">
          <span className="font-mono-code text-xs sm:text-sm text-[#888888] tracking-[0.3em] uppercase mb-6">
            {contact.subheading}
          </span>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-tighter leading-[0.88] flex flex-col break-words">
            {contact.heading.map((word) => (
              <span
                key={word}
                className="inline-block hover:text-[#888888] transition-colors duration-300"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Primary CTA + Quick Direct Actions */}
        <div className="border-t border-[#222222] pt-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-mono-code text-xs text-[#888888] tracking-widest uppercase">
              DIRECT INBOX
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}?subject=Project%20Inquiry%20%E2%80%94%20Video%20Edit`}
                onMouseEnter={() => onCursorChange?.({ type: 'VIEW' })}
                onMouseLeave={() => onCursorChange?.(null)}
                className="inline-flex items-center gap-4 px-8 py-5 border border-white bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-mono-code text-xs uppercase tracking-[0.25em] font-bold cursor-pointer"
              >
                <span>{contact.emailCta}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-5 border border-[#222222] hover:border-white text-white font-mono-code text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                {copied ? 'COPIED TO CLIPBOARD ✓' : 'COPY EMAIL ADDRESS'}
              </button>
            </div>
            <p className="font-mono-code text-xs text-[#888888] pt-1">
              {contact.email}
            </p>
          </div>

          {/* Social Links List */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-code text-xs text-[#888888] tracking-widest uppercase">
              DISPATCH & CHANNELS
            </span>
            <div className="flex flex-wrap gap-4 sm:gap-6 font-mono-code text-xs tracking-[0.2em] uppercase">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => onCursorChange?.({ type: 'VIEW' })}
                  onMouseLeave={() => onCursorChange?.(null)}
                  className="text-white hover:text-[#888888] transition-colors py-2 border-b border-transparent hover:border-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
