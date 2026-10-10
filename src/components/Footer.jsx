import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { editor } = portfolioData;

  return (
    <footer className="border-t border-[#161616] py-14 bg-black select-none font-mono-main text-[11px] uppercase tracking-[0.15em] text-gray-500">
      <div className="site-container flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p>© 2026 {editor.name}. ALL RIGHTS RESERVED.</p>
        <p className="text-white font-semibold">STAY INTENTIONAL.</p>
      </div>
    </footer>
  );
}
