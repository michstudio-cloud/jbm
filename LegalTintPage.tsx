import React from 'react';
import AnimateOnScroll from './components/AnimateOnScroll';

const LegalTintPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8 text-jbm-orange text-center">
            🛡️ Polarizados Permitidos en México para Automóviles
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto text-center">
            El polarizado de las ventanas se ha convertido en una de las modificaciones más comunes y funcionales para los vehículos en México. Además de mejorar la apariencia del auto, las películas polarizadas o de seguridad están diseñadas con materiales de poliéster de alta resistencia que reducen el calor, bloquean los rayos UV y brindan mayor privacidad a los pasajeros.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🌞 Beneficios de los polarizados automotrices
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            El polarizado no solo es cuestión de estética. También aporta protección, confort y seguridad:
          </p>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>Protección solar:</strong> bloquea hasta el 99% de los rayos UV, evitando daños en la piel y el interior del vehículo.</li>
            <li><strong>Mayor seguridad:</strong> las películas de seguridad mantienen los fragmentos de vidrio adheridos ante un impacto.</li>
            <li><strong>Confort térmico:</strong> reduce significativamente la temperatura interior del auto.</li>
            <li><strong>Privacidad y estilo:</strong> mejora la apariencia del vehículo sin afectar la visibilidad.</li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            ⚖️ Regulaciones de polarizado en México
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Antes de elegir el nivel de oscuridad de tu polarizado, es importante conocer las normas vigentes en México.
            Según la NOM-001-SSP-2008, el uso de polarizados está permitido siempre y cuando no afecte la visibilidad del conductor ni impida la vista hacia el interior del vehículo durante inspecciones de seguridad.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white/90">Recomendaciones generales:</h3>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>Parabrisas:</strong> solo se permite una franja superior de 10 cm o película transparente con filtro UV.</li>
            <li><strong>Ventanas delanteras:</strong> deben permitir una transmisión de luz visible (VLT) mínima del 70%.</li>
            <li><strong>Ventanas traseras y medallón:</strong> pueden tener mayor tonalidad, siempre que el vehículo cuente con espejos laterales.</li>
          </ul>
          <p className="text-white/70 leading-relaxed mt-6 italic bg-zinc-900 border border-white/10 p-6 rounded-xl">
            💡 En JBM Tecnología Solar trabajamos con películas certificadas y dentro de la norma mexicana, asegurando visibilidad, protección y cumplimiento legal.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🚗 Tipos de polarizados recomendados
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>Nanocerámicos:</strong> bloquean rayos IR y UV, reducen el calor sin oscurecer en exceso.</li>
            <li><strong>De seguridad:</strong> refuerzan el vidrio ante impactos o vandalismo.</li>
            <li><strong>Decorativos o estéticos:</strong> disponibles en distintas tonalidades para un look más personalizado.</li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            📍 Polarizados legales y seguros en Reynosa
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            En JBM Tecnología Solar, te ayudamos a elegir el nivel de polarizado ideal para tu vehículo o flotilla, cumpliendo con las regulaciones mexicanas y utilizando materiales de calidad nanocerámica y de seguridad.
            Protege tu inversión, mejora tu confort y evita multas innecesarias.
          </p>
          <p className="text-xl md:text-2xl font-bold text-white/90 mb-6">
            📲 Cotiza tu polarizado autorizado hoy mismo.
          </p>
          <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block bg-jbm-orange text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 transform shadow-lg hover:shadow-jbm-orange/30">
            👉 WhatsApp 899 255 7561
          </a>
          <p className="text-white/70 text-sm mt-4">📍 Reynosa, Tamaulipas</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default LegalTintPage;