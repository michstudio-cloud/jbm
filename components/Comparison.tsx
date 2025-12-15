
import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Resultados Reales</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Antes y Después</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Transforma tu vehículo con tecnología premium</p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[600px] border border-white/10">
            <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1400&auto=format&fit=crop&q=60" alt="Comparación" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 flex">
              <div className="w-1/2 p-6 md:p-12 flex flex-col justify-end bg-gradient-to-r from-red-500/30 to-transparent border-r-2 border-red-500/50">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-red-500 uppercase tracking-wider mb-4">ANTES</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>❌ Calor excesivo</li>
                    <li>❌ Rayos UV dañinos</li>
                    <li>❌ Sin privacidad</li>
                    <li>❌ Resplandor molesto</li>
                    <li>❌ Decoloración interior</li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 p-6 md:p-12 flex flex-col justify-end items-start text-left bg-gradient-to-l from-green-500/30 to-transparent">
                 <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-green-500 uppercase tracking-wider mb-4">DESPUÉS</h3>
                    <ul className="space-y-2 text-sm md::text-base">
                        <li>✓ Temperatura ideal</li>
                        <li>✓ Protección UV 100%</li>
                        <li>✓ Privacidad total</li>
                        <li>✓ Confort visual</li>
                        <li>✓ Interior protegido</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Comparison;