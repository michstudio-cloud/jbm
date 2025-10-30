
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

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Productos" },
    { href: "#galeria", label: "Galería" },
    { href: "#empresa", label: "Empresa" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-black/50 backdrop-blur-md'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
          JBM Tecnología
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/70 hover:text-white transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
            Cotizar
          </a>
        </div>
        <div className="md:hidden">
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300">
                Cotizar
            </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
