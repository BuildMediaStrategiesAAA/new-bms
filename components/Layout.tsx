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

        <footer className="pb-12 border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm font-mono text-text-muted">
            <div className="flex flex-col gap-3">
              <span className="text-white mb-2">Pages</span>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/strategies" className="hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white mb-2">Services</span>
              <Link to="/services/website-design" className="hover:text-white transition-colors">Website Design</Link>
              <Link to="/services/graphic-design" className="hover:text-white transition-colors">Graphic Design</Link>
              <Link to="/services/local-seo" className="hover:text-white transition-colors">Local SEO</Link>
              <Link to="/services/paid-ads" className="hover:text-white transition-colors">Paid Ads</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white mb-2">Areas</span>
              <Link to="/areas/kent" className="hover:text-white transition-colors">Kent</Link>
              <Link to="/areas/dover" className="hover:text-white transition-colors">Dover</Link>
              <Link to="/areas/deal" className="hover:text-white transition-colors">Deal</Link>
              <Link to="/areas/canterbury" className="hover:text-white transition-colors">Canterbury</Link>
              <Link to="/areas/thanet" className="hover:text-white transition-colors">Thanet</Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white mb-2">Thanet</span>
              <Link to="/areas/thanet/margate" className="hover:text-white transition-colors">Margate</Link>
              <Link to="/areas/thanet/ramsgate" className="hover:text-white transition-colors">Ramsgate</Link>
              <Link to="/areas/thanet/broadstairs" className="hover:text-white transition-colors">Broadstairs</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-text-muted pt-8 border-t border-white/5">
            <Link to="/" className="hover:text-white transition-colors">BuildMediaStrategies</Link>
            <span>Kent, United Kingdom</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
