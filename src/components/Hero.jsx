import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenShowreel }) {
  const { editor, hero } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const fullText = editor.name; // "KRISHNA KUMAR"

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [fullText]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-[120px] pb-[60px] flex items-center overflow-hidden bg-black select-none">
      {/* Background Video Treatment matching reference */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none filter grayscale contrast-125"
        src={hero.videoUrl}
      />

      <div className="site-container relative z-10 w-full">
        {/* Hero Title with Typing Effect & Typebar */}
        <h1 className="font-sans-main text-[clamp(3.5rem,11vw,9.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] text-white mb-6">
          <span>{typedText}</span>
          <span className="typebar">|</span>
        </h1>

        {/* Roles Tags */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 font-sans-main text-[clamp(1.2rem,3vw,2.5rem)] font-medium tracking-[-0.03em] text-white">
          {editor.roles.map((role) => (
            <span key={role} className="role-tag inline-block">
              {role}
            </span>
          ))}
        </div>

        {/* Hero Description / Manifesto */}
        <p className="font-sans-main text-gray-400 font-light text-[clamp(1.05rem,1.8vw,1.4rem)] leading-[1.5] max-w-[650px] mb-12 tracking-[-0.01em]">
          {hero.description}
        </p>

        {/* Hero Action Buttons matching reference */}
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={onOpenShowreel}
            className="btn btn-primary cursor-pointer"
          >
            {hero.ctaPrimary}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="btn btn-secondary cursor-pointer"
          >
            <span>{hero.ctaSecondary}</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
