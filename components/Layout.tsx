import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen w-full font-sans text-text selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-40">
        {children}

        <footer className="pb-12 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-mono text-text-muted">
          <div className="order-2 md:order-1">
            <Link to="/" className="hover:text-white transition-colors">BuildMediaStrategies</Link>
          </div>

          <div className="order-1 md:order-2 flex gap-8">
            <Link to="/projects" className="hover:text-white transition-colors">projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">about</Link>
            <Link to="/strategies" className="hover:text-white transition-colors">strategies</Link>
            <Link to="/contact" className="hover:text-white transition-colors">contact</Link>
          </div>

          <div className="order-3 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">twitter</a>
            <a href="#" className="hover:text-white transition-colors">instagram</a>
            <a href="#" className="hover:text-white transition-colors">linkedin</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
