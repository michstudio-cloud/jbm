
import React from 'react';
import AnimateOnScroll from './components/AnimateOnScroll';

const SmartTintPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8 text-jbm-orange text-center">
            🚘 Polarizado Inteligente Transparente
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto text-center">
            La nueva generación en protección solar automotriz.
            Ideal para quienes buscan máxima protección sin perder visibilidad ni estilo.
            Este polarizado inteligente combina tecnología avanzada y estética moderna para ofrecerte claridad total con beneficios reales.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            ✅ Beneficios del Polarizado Inteligente Transparente
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>Transparente y elegante:</strong> prácticamente invisible, mantiene la claridad del vidrio original sin alterar el diseño de tu vehículo.</li>
            <li><strong>Protección UV y contra el calor:</strong> bloquea rayos ultravioleta y reduce la temperatura interior, manteniendo tu auto fresco y cómodo.</li>
            <li><strong>Seguridad y visibilidad total:</strong> conducción segura de día y de noche, sin reflejos ni distorsión.</li>
            <li><strong>Instalación rápida y limpia:</strong> aplicamos procedimientos profesionales que no dañan el vidrio ni requieren mantenimiento adicional.</li>
            <li><strong>Durabilidad garantizada:</strong> materiales de alta resistencia con protección a largo plazo contra el desgaste, rayas y burbujas.</li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🌞 Ideal para:
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li>Conductores que buscan protección sin oscurecer su vehículo.</li>
            <li>Vehículos ejecutivos, flotillas empresariales o autos de exhibición.</li>
            <li>Conductores que viajan constantemente bajo el sol de Tamaulipas.</li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🧡 Comprueba la diferencia
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            Solicita tu prueba gratuita del Polarizado Inteligente Transparente y siente la diferencia desde el primer minuto.
            Tu auto lucirá igual, pero se sentirá mucho mejor.
          </p>
          <p className="text-xl md:text-2xl font-bold text-white/90 mb-6">
            📲 Agenda por WhatsApp:
          </p>
          <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block bg-jbm-orange text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 transform shadow-lg hover:shadow-jbm-orange/30">
            899 255 7561
          </a>
          <p className="text-white/70 text-sm mt-4">🚗 JBM Tecnología Solar – Reynosa, Tamaulipas</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default SmartTintPage;