import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed navLinks array as per new design

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-black/50 backdrop-blur-md'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <img src="https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/jbm%20logo.svg" alt="JBM Tecnología Solar Logo" className="h-8" loading="lazy" />
        </a>
        <div className="flex items-center space-x-8"> {/* Adjusted for single button, hidden md:flex removed as no other nav*/}
          <a href="#contacto" className="bg-jbm-orange hover:bg-jbm-red-orange text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
            Cotizar
          </a>
        </div>
        {/* Removed mobile specific button as per simplified header */}
      </nav>
    </header>
  );
};

export default Header;