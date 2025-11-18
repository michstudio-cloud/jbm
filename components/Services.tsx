

import React from 'react';
import { Service } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Nuestros Servicios</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Soluciones Premium</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Tecnología de vanguardia para proteger tu inversión</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 group transition-all duration-300 hover:border-jbm-orange/30 hover:-translate-y-2 cursor-pointer">
                    <div className="overflow-hidden h-64">
                        <img src={service.image} alt={service.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-white/60 leading-relaxed">{service.description}</p>
                    </div>
                </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;