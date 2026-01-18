
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <img src="https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/jbm%20logo.svg" alt="JBM Tecnología Solar Logo" className="h-10" loading="lazy" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Líderes en polarizados nanocerámicos y protección solar premium con tecnología de vanguardia en Reynosa, Tamaulipas. Transformando vehículos y edificios.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Secciones</h4>
            <ul className="space-y-3">
              <li><a href="#hablando-claro" className="text-white/50 hover:text-jbm-orange transition-colors">Beneficios</a></li>
              <li><a href="#el-producto" className="text-white/50 hover:text-jbm-orange transition-colors">Nuestro Producto</a></li>
              <li><a href="#tonos" className="text-white/50 hover:text-jbm-orange transition-colors">Tonos</a></li>
              <li><a href="#legalidad-respaldo" className="text-white/50 hover:text-jbm-orange transition-colors">Legalidad y Respaldo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Cotización</h4>
            <ul className="space-y-3">
              <li><a href="#precios" className="text-white/50 hover:text-jbm-orange transition-colors">Ver Precios</a></li>
              <li><a href="#como-trabajamos" className="text-white/50 hover:text-jbm-orange transition-colors">Cómo Trabajamos</a></li>
              <li><a href="#confianza-local" className="text-white/50 hover:text-jbm-orange transition-colors">Nuestra Ubicación</a></li>
              <li><a href="#cta-final" className="text-white/50 hover:text-jbm-orange transition-colors">Agendar Cita</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/50">
              <li>Reynosa, Tamaulipas</li>
              <li>+52 899 255 7561</li>
              <li><a href="https://www.facebook.com/solarcontrol20" target="_blank" rel="noopener noreferrer" className="hover:text-jbm-orange transition-colors">JBM Tecnología Solar</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10 text-sm text-white/40">
          © {new Date().getFullYear()} JBM Tecnología Solar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;