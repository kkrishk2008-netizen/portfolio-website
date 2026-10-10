import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenShowreel }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[900] backdrop-blur-[12px] bg-black/75 border-b border-[#161616] py-5 sm:py-6 transition-all duration-300">
      <div className="site-container flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="flex flex-col group select-none text-decoration-none"
        >
          <span className="font-sans-main font-extrabold text-white text-base sm:text-lg tracking-[0.1em] uppercase group-hover:text-gray-400 transition-colors">
            KRISHNA KUMAR
          </span>
          <span className="font-mono-main text-[10px] text-gray-500 tracking-[0.2em] uppercase -mt-0.5">
            VIDEO EDITOR
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, '#work')}
            className="font-mono-main uppercase tracking-[0.15em] text-xs text-gray-400 hover:text-white transition-colors relative py-1 group"
          >
            <span>WORK</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="font-mono-main uppercase tracking-[0.15em] text-xs text-gray-400 hover:text-white transition-colors relative py-1 group"
          >
            <span>ABOUT</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="font-mono-main uppercase tracking-[0.15em] text-xs text-gray-400 hover:text-white transition-colors relative py-1 group"
          >
            <span>CONTACT</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-mono-main text-xs uppercase tracking-[0.15em] text-white hover:text-gray-400 border border-[#222222] px-3 py-1.5 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? 'CLOSE ×' : 'MENU +'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-full left-0 w-full bg-black/95 border-b border-[#161616] py-8 px-6 flex flex-col gap-6 shadow-2xl backdrop-blur-lg">
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, '#work')}
            className="font-sans-main text-3xl font-extrabold text-white uppercase tracking-tight hover:text-gray-400"
          >
            WORK
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="font-sans-main text-3xl font-extrabold text-white uppercase tracking-tight hover:text-gray-400"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="font-sans-main text-3xl font-extrabold text-white uppercase tracking-tight hover:text-gray-400"
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
