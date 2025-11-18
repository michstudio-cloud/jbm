

import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';


const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center lg:text-left overflow-hidden bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.1)_0%,_transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_90%,_rgba(96,165,250,0.1)_0%,_transparent_40%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
              <AnimateOnScroll>
                <div className="inline-flex items-center gap-2 py-2 px-4 mb-8 bg-jbm-orange/10 border border-jbm-orange/30 rounded-full text-sm text-jbm-yellow">
                    <span>⚡</span> Tecnología Nanocerámica Premium
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                      Protección Solar de<br/>Alta Tecnología en Reynosa
                  </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                  <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto lg:mx-0">
                      Polarizados nanocerámicos y películas de seguridad premium para vehículos y edificios en Reynosa, Tamaulipas.
                  </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                      <a href="#contacto" className="bg-jbm-orange text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 hover:shadow-2xl hover:shadow-jbm-orange/30">
                          Solicitar Cotización
                      </a>
                      <a href="#servicios" className="bg-white/5 border border-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10">
                          Ver Servicios
                      </a>
                  </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center lg:justify-start">
                      <div className="text-center lg:text-left">
                          <div className="text-5xl font-bold text-jbm-orange mb-1">99%</div>
                          <div className="text-sm text-white/50">Protección UV</div>
                      </div>
                      <div className="text-center lg:text-left">
                          <div className="text-5xl font-bold text-jbm-orange mb-1">93%</div>
                          <div className="text-sm text-white/50">Reducción Resplandor</div>
                      </div>
                      <div className="text-center lg:text-left">
                          <div className="text-5xl font-bold text-jbm-orange mb-1">290+</div>
                          <div className="text-sm text-white/50">Clientes Satisfechos</div>
                      </div>
                  </div>
              </AnimateOnScroll>
          </div>
      </div>
    </section>
  );
};

export default Hero;