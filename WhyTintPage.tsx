import React from 'react';
import AnimateOnScroll from './components/AnimateOnScroll';

const WhyTintPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8 text-jbm-orange text-center">
            🌞 ¿Por qué polarizar tu vehículo?
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto text-center">
            El polarizado automotriz combina estilo, confort y protección.
            No solo mejora la apariencia de tu auto, sino que también te protege a ti y a tus pasajeros frente al sol, el calor y los impactos.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            Beneficios clave:
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>🔒 Seguridad:</strong> las películas de seguridad actúan como una barrera protectora, evitando que el vidrio se desprenda en caso de accidente o intento de robo.</li>
            <li><strong>🌡️ Rechazo de calor:</strong> reduce significativamente la temperatura interior del vehículo, haciendo cada viaje más cómodo.</li>
            <li><strong>🕶️ Privacidad y estética:</strong> aporta un aspecto elegante y moderno, al tiempo que brinda discreción.</li>
            <li><strong>☀️ Protección UV:</strong> bloquea hasta el 99.9% de los rayos ultravioleta, cuidando tu piel y evitando el deterioro del interior de tu auto.</li>
          </ul>
          <p className="text-white/70 leading-relaxed mt-6 italic bg-zinc-900 border border-white/10 p-6 rounded-xl">
            En JBM Tecnología Solar, trabajamos con películas nanocerámicas y de seguridad certificadas, diseñadas para resistir el clima extremo de Reynosa y ofrecerte máxima durabilidad.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🔧 Instalación Profesional
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Cada instalación de polarizado se realiza con precisión y estándares de calidad internacional.
            Nuestro proceso es rápido, limpio y garantiza un acabado perfecto, sin bordes visibles ni burbujas.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white/90">Proceso de instalación:</h3>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li>Preparación y limpieza del vidrio.</li>
            <li>Moldeado y ajuste de la película en el exterior del cristal.</li>
            <li>Instalación interna con herramientas especializadas.</li>
            <li>Sellado y revisión final de detalles.</li>
          </ul>
          <p className="text-white/70 leading-relaxed mt-6">
            La instalación suele completarse en unas pocas horas, dependiendo del tipo de vehículo y del material seleccionado.
            Nuestro equipo técnico utiliza herramientas de última generación y películas originales garantizadas para asegurar un resultado impecable.
          </p>
          <p className="text-white/70 leading-relaxed mt-6 italic bg-zinc-900 border border-white/10 p-6 rounded-xl">
            🛠️ Calidad, precisión y garantía — eso es lo que diferencia a JBM Tecnología Solar.
          </p>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default WhyTintPage;