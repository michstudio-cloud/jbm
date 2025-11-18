


import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const LocationIcon = () => (
    <span className="text-2xl">📍</span>
);
const PhoneIcon = () => (
    <span className="text-2xl">📱</span>
);
const FacebookIcon = () => (
    <span className="text-2xl">💬</span>
);


const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="bg-gradient-to-br from-jbm-yellow to-jbm-red-orange rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_80%)]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_80%)]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">¿Listo para Proteger tu Inversión?</h2>
              <p className="text-lg md::text-xl text-white/80 mb-8 max-w-3xl mx-auto">Solicita una cotización sin compromiso y descubre cómo podemos ayudarte</p>
              
              <div className="my-10">
                <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-jbm-orange font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 transform shadow-lg">
                  💬 Chatear por WhatsApp
                </a>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <LocationIcon/>
                  <div>
                    <strong className="block text-sm">Ubicación</strong>
                    <span className="text-xs text-white/70">Reynosa, Tamaulipas</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <PhoneIcon/>
                  <div>
                    <strong className="block text-sm">Teléfono</strong>
                    <span className="text-xs text-white/70">+52 899 255 7561</span>
                  </div>
                </div>
                <a href="https://www.facebook.com/solarcontrol20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm group">
                   <FacebookIcon/>
                  <div>
                    <strong className="block text-sm">Facebook</strong>
                    <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300">JBM Tecnología Solar</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTA;