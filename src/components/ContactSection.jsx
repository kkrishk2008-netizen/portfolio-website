import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="border-t border-[#161616] pt-[clamp(6rem,12vw,15rem)] pb-[clamp(4rem,8vw,10rem)] bg-black select-none">
      <div className="site-container">
        {/* Contact Headline matching reference */}
        <h2 className="font-sans-main text-[clamp(3rem,8.5vw,8.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em] text-white mb-[clamp(4rem,8vw,8rem)]">
          {contact.headline}
        </h2>

        {/* Contact Methods Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[clamp(3rem,6vw,6rem)]">
          {/* Email Big Link */}
          <div className="border-b border-[#161616] pb-10 flex flex-col justify-between gap-4 group">
            <a
              href={`mailto:${contact.email}?subject=Project%20Inquiry%20%E2%80%94%20Video%20Edit`}
              className="flex flex-col gap-3 group-hover:border-white transition-colors"
            >
              <span className="font-mono-main text-[11px] uppercase tracking-[0.15em] text-gray-500">
                EMAIL
              </span>
              <span className="font-sans-main text-[clamp(1.2rem,2.8vw,2.5rem)] font-semibold tracking-[-0.03em] text-white break-all group-hover:text-gray-300 transition-colors">
                {contact.email}
              </span>
            </a>

            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handleCopyEmail}
                className="font-mono-main text-xs uppercase tracking-[0.15em] border border-[#222222] hover:border-white text-gray-400 hover:text-white px-4 py-2 transition-colors cursor-pointer"
              >
                {copied ? 'COPIED TO CLIPBOARD ✓' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="flex flex-col gap-5">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group font-mono-main text-xs sm:text-[13px] uppercase tracking-[0.15em] text-gray-400 border-b border-[#161616] flex items-center justify-between pb-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-white hover:pl-2"
              >
                <span>{link.label}</span>
                <span className="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
