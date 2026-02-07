import React from 'react';
import { Logo, ArrowUpRight } from './Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-6 md:px-12 lg:px-20 py-6 pointer-events-none">
      <div className="w-full max-w-[1440px] flex justify-between items-center pointer-events-auto backdrop-blur-sm bg-black/50 p-4 rounded-xl border border-white/5">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">
            <Logo />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-text-muted">
          <a href="#projects" className="hover:text-white transition-colors">projects</a>
          <a href="#about" className="hover:text-white transition-colors">about</a>
          <a href="#notes" className="hover:text-white transition-colors">notes</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </div>

        <div className="flex items-center">
          <a 
            href="#" 
            className="flex items-center gap-2 text-accent-green font-mono text-sm hover:opacity-80 transition-opacity"
          >
            get template <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
