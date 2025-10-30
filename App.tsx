
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Service, Benefit, Feature, GalleryItem } from './types';

const App: React.FC = () => {

  const servicesData: Service[] = [
    { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=60", alt: "Protección cerámica", title: "Protección Cerámica", description: "Tecnología nanocerámica de última generación para máxima protección UV y térmica." },
    { image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f1342?w=600&auto=format&fit=crop&q=60", alt: "Corrección de pintura", title: "Corrección de Pintura", description: "Restauración profesional que devuelve el brillo original a tu vehículo." },
    { image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=60", alt: "Cuidado interior", title: "Cuidado Interior", description: "Detallado completo del interior con productos premium especializados." },
    { image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60", alt: "Polarizado premium", title: "Polarizado Premium", description: "Films de alta calidad con garantía de fábrica y tecnología de bloqueo UV." },
    { image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=60", alt: "Cambio de color", title: "Cambio de Color", description: "Transforma tu vehículo con films de cambio de color removibles y protectores." },
    { image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=600&auto=format&fit=crop&q=60", alt: "Ventanas edificios", title: "Edificios Comerciales", description: "Soluciones arquitectónicas para oficinas y construcciones comerciales." },
  ];

  const actionFeatures: Feature[] = [
    { title: "Rechazo UV 99%", description: "Protección total contra rayos ultravioleta dañinos" },
    { title: "Reducción de Resplandor 93%", description: "Máximo confort visual en cualquier condición" },
    { title: "No Interfiere Señales", description: "Compatible con GPS, radio y dispositivos móviles" },
    { title: "Durabilidad Superior", description: "Garantía de fábrica y resistencia comprobada" },
  ];

  const businessFeatures: Feature[] = [
    { title: "Reducción 80% Calor Solar", description: "Disminuye significativamente los costos de climatización" },
    { title: "Control de Resplandor", description: "Mejora la productividad eliminando reflejos en pantallas" },
    { title: "Protección de Activos", description: "Previene decoloración de muebles y equipos" },
    { title: "Instalación Sin Interrupciones", description: "Trabajo rápido sin afectar operaciones" },
  ];

  const benefitsData: Benefit[] = [
    { number: 1, title: "PROTECCIÓN", text: "No permite que los rayos del sol entren directamente al auto, cuidando tu piel y evitando que los rayos ultravioleta desgasten el interior de tu vehículo." },
    { number: 2, title: "PRIVACIDAD", text: "Privacidad tanto para quien conduce o para sus acompañantes y también para lo que pueda transportar." },
    { number: 3, title: "REDUCCIÓN DE CALOR", text: "Se reduce la sensación de calor dentro del auto, haciendo más confortable tu viaje y ahorrando en aire acondicionado." },
    { number: 4, title: "EVITAR ASALTOS", text: "Al tener los cristales más obscuros, evitarás que la gente del exterior pueda visualizar lo que hay dentro del auto. Esto ayuda a prevenir asaltos." },
    { number: 5, title: "VISTA MÁS CLARA", text: "Reducción de la fatiga ocular y mejora la capacidad de concentración al volante, haciendo la conducción más segura." },
    { number: 6, title: "SEGURIDAD", text: "La película de seguridad protege contra fragmentos de vidrio en caso de accidente, manteniendo a los pasajeros más seguros." },
  ];

  const galleryData: GalleryItem[] = [
    { image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60", alt: "Deportivo", title: "Vehículos de Lujo", description: "Acabado premium para deportivos y vehículos de alta gama", isLarge: true },
    { image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=600&auto=format&fit=crop&q=60", alt: "SUV", title: "SUV & Familiares", description: "Protección completa para toda la familia" },
    { image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60", alt: "Sedán", title: "Sedanes Ejecutivos", description: "Elegancia y privacidad empresarial" },
    { image: "https://images.unsplash.com/photo-1617545305992-355bf54a2a1a?w=600&auto=format&fit=crop&q=60", alt: "Pickup", title: "Pickups & Trabajo", description: "Resistencia para vehículos de trabajo" },
    { image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60", alt: "Edificio", title: "Proyectos Comerciales", description: "Soluciones arquitectónicas de alta tecnología", isLarge: true },
  ];

  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <Services services={servicesData} />
        <FeatureSection
          id="productos"
          label="Productos Premium"
          title="Tecnología ACTION"
          subtitle="Premium nano-carbon window film de alta tecnología"
          image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60"
          imageAlt="ACTION Premium"
          badgeText="99% UV"
          heading="ACTION Premium"
          tagline="Película Nano-Carbono de Alta Tecnología"
          description="La tecnología ACTION ofrece el más alto nivel de protección contra rayos UV y reducción de calor, utilizando partículas de nano-carbono que no interfieren con señales electrónicas."
          features={actionFeatures}
          ctaText="Solicitar Información"
        />
        <FeatureSection
          direction="reverse"
          label="Tecnología Inteligente"
          title="Película Fotocromática"
          subtitle="Se adapta automáticamente a las condiciones de luz"
          image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop&q=60"
          imageAlt="Photochromic"
          badgeText="Auto-Adapt"
          heading="Sun Control Photochromic"
          tagline="Royal Rhino Technology"
          description="Nuestra película fotocromática revolucionaria responde automáticamente a los rayos UV del sol, proporcionando protección máxima durante el día y claridad perfecta durante la noche."
          ctaText="Cotizar Ahora"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="mb-2 text-orange-500 font-semibold">DÍA / SOL</h4>
                    <p className="text-white/60 text-sm">Deep/Light Black - Se oscurece automáticamente para máxima protección</p>
                </div>
                <div className="bg-blue-600/10 border border-blue-600/30 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🌙</div>
                    <h4 className="mb-2 text-blue-500 font-semibold">NOCHE</h4>
                    <p className="text-white/60 text-sm">Transparente - Se aclara para óptima visibilidad nocturna</p>
                </div>
            </div>
        </FeatureSection>
        <Comparison />
        <Benefits benefits={benefitsData} />
        <FeatureSection
          id="empresa"
          label="Soluciones Corporativas"
          title="Edificios Comerciales"
          subtitle="Tecnología profesional para espacios empresariales"
          image="https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=800&auto=format&fit=crop&q=60"
          imageAlt="Edificio comercial"
          badgeComponent={
            <div className="absolute bottom-8 left-8 right-8 bg-blue-600/95 backdrop-blur-sm p-6 rounded-2xl text-center">
              <strong className="text-lg block">Recupera tu inversión en 2-3 años</strong>
              <p className="mt-2 text-sm text-white/80">Ahorro energético comprobado</p>
            </div>
          }
          heading="Transforma tu Espacio"
          tagline="Soluciones Arquitectónicas Premium"
          description="Nuestros polarizados nanocerámicos para edificios ofrecen la combinación perfecta entre funcionalidad, estética y ahorro energético para empresas modernas."
          features={businessFeatures}
          ctaText="Solicitar Cotización Empresarial"
        />
        <Gallery items={galleryData} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
