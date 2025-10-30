
import React from 'react';
import { Benefit } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-4">Beneficios</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Por Qué Elegirnos</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Haz de tu salud y confort una prioridad</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} delay={index * 0.05}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-blue-600/30 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                  {benefit.number}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
