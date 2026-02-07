import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, ArrowUpRight } from './Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-6 md:px-12 lg:px-20 py-6 pointer-events-none">
      <div className="w-full max-w-[1440px] flex justify-between items-center pointer-events-auto backdrop-blur-sm bg-[#0e2a1f]/80 p-4 rounded-xl border border-white/5">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-text-muted">
          <Link to="/projects" className="hover:text-white transition-colors">projects</Link>
          <Link to="/about" className="hover:text-white transition-colors">about</Link>
          <Link to="/strategies" className="hover:text-white transition-colors">strategies</Link>
          <Link to="/contact" className="hover:text-white transition-colors">contact</Link>
        </div>

        <div className="flex items-center">
          <Link
            to="/contact"
            className="flex items-center gap-2 text-accent-green font-mono text-sm hover:opacity-80 transition-opacity"
          >
            get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
