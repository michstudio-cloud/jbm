import React from 'react';
import AnimateOnScroll from './components/AnimateOnScroll';

const QuotePage: React.FC = () => {
  const prices = [
    { service: 'Polarizado nanocerámico', description: 'Vidrios laterales + vidrio trasero (sin parabrisas)', price: '$2,200 MXN' },
    { service: 'Parabrisas inteligente cerámico', description: 'Polarizado transparente que no oscurece, pero rechaza el calor solar', price: '$1,600 MXN' },
    { service: 'Paquete completo', description: 'Laterales + trasero + parabrisas completo', price: '$3,500 MXN' },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8 text-jbm-orange text-center">
            🌞 Cotización – Polarizado Nanocerámico
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto text-center">
            En JBM Tecnología Solar te ofrecemos materiales de alta calidad con garantía y rendimiento comprobado.
            El polarizado nanocerámico es la mejor opción para quienes buscan larga duración, alto rechazo de calor y máxima claridad visual.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            🔰 Características del Material
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Nuestras películas nanocerámicas están diseñadas con tecnología de punta para ofrecer la mejor experiencia:
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white/90">🧾 Garantía escrita:</h3>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4 mb-8">
            <li><strong>3 años</strong> contra desprendimiento o burbujas.</li>
            <li><strong>5 años</strong> contra decoloración.</li>
            <li>Vida útil aproximada: <strong>7 años o más.</strong></li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-white/90">🌗 Tonos disponibles:</h3>
          <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
            <li><strong>05% Oscuro</strong></li>
            <li><strong>20% Medio</strong></li>
            <li><strong>35% Claro</strong></li>
            <li><strong>50% Claro Premium</strong></li>
          </ul>
          <p className="text-white/70 leading-relaxed mt-6 italic bg-zinc-900 border border-white/10 p-6 rounded-xl">
            📌 Puedes combinar los tonos según tus preferencias.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
            💰 Precios
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-white/10">
              <thead>
                <tr className="bg-jbm-orange/20 text-jbm-orange uppercase text-sm leading-normal">
                  <th className="py-4 px-6 text-left font-semibold">Servicio</th>
                  <th className="py-4 px-6 text-left font-semibold">Descripción</th>
                  <th className="py-4 px-6 text-left font-semibold">Precio</th>
                </tr>
              </thead>
              <tbody className="text-white/80 text-sm font-light">
                {prices.map((item, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-zinc-800 transition-colors duration-200">
                    <td className="py-4 px-6 whitespace-nowrap">{item.service}</td>
                    <td className="py-4 px-6">{item.description}</td>
                    <td className="py-4 px-6 font-bold text-jbm-yellow">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default QuotePage;