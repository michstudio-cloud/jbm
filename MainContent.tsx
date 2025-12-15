import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import AnimateOnScroll from './components/AnimateOnScroll';
import { Service, Benefit, Feature, GalleryItem, Testimonial } from './types';

// Reusable CheckIcon for lists
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jbm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const MainContent: React.FC = () => {

  const servicesData: Service[] = [
    { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=60", alt: "Protección cerámica", title: "Protección Cerámica", description: "Tecnología nanocerámica de última generación para máxima protección UV y térmica." },
    { image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop&q=60", alt: "Cuidado interior", title: "Cuidado Interior", description: "Detallado completo del interior con productos premium especializados." },
    { image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=60", alt: "Polarizado premium", title: "Polarizado Premium", description: "Films de alta calidad con garantía de fábrica y tecnología de bloqueo UV." },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.06.43%281%29.jpeg", alt: "Ventanas edificios", title: "Edificios Comerciales", description: "Soluciones arquitectónicas para oficinas y construcciones comerciales." },
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
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549958669_1388021789992079_3355981115219770301_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtWA_remiGwlp3AghjQBBLdTa0gF-dqol1NrSAX52qiaX_ag9SLDkMkia4J2No3F4_her3cD2MtPmOjcZEokPP&_nc_ohc=I1YQfKGtAQQ7kNvwEprBi_&_nc_oc=AdnOzfe623B0ycoI3OkqsEbJI_X-jr-H2tXjh39EOtqjVm7x207v5tR-8iIfLZ737tU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=2zw7fiK6LLkSszB_o8JXAw&oh=00_AfdRg2XIq6geXCN923FYxwXxLnB4cs9C42nZTTuyV4i_RA&oe=69096838", alt: "Deportivo", title: "Vehículos de Lujo", description: "Acabado premium para deportivos y vehículos de alta gama", isLarge: true },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/549269839_1388021676658757_7830736364413838806_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVAqB55FeOxcaNqTsGj3Oxf7kqaCPunKF_uSpoI-6coZYxQ3HM9y9zr3bHU90rcfUHf1NVU3CW_vI8diJUv8iU&_nc_ohc=wyHKwLUiuNUQ7kNvwEbCm5R&_nc_oc=AdmDUFlfwcWljKNleanu5EYgG-iHrQF05inAg_ZVzDXCiQagGlo2dbmDjBB3a5b4w1Q&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=UxwwHYhO7yzy0licIW64kg&oh=00_Aff_vsi3y4r3yCi0LckojBqaoy60PNs6gfQ1EM4mu3otlQ&oe=69094F33", alt: "SUV", title: "SUV & Familiares", description: "Protección completa para toda la familia" },
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549628459_1391716376289287_5487471753615711144_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtaueqDo-FEWsR44Dt2N6yCgOP6dJf4rsKA4_p0l_iu_Ahh7HUyrt0NebppGFpYEqBxPxSANoX8sl6dl-XylZv&_nc_ohc=Uypq21vRJ-EQ7kNvwHAl4dM&_nc_oc=AdkiENx69WGNWeUbBXiUGG7IQr0F9V76TT-BJTnspoXzVdXDac1R9teK4vg6XTSbFSU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=zgEPDxSGrk9nphmVOwJnTA&oh=00_AfclrtvyChimeoiqCu7YVyQk-O-IsYk76IKOECfdvGeV_w&oe=69094C6C", alt: "Sedán", title: "Sedanes Ejecutivos", description: "Elegancia y privacidad empresarial" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/506738091_1301384058655853_1693792106479304873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNbKCvWyxL1Zcoeb64yVJ3d54oesNvpnt3nih6w2-me2GhZVC4778XCgHdVCHF6nT_ohgEXogn8aokuD0ErjWU&_nc_ohc=_DARtmESgDQQ7kNvwFmECRT&_nc_oc=Adm3WMm4jbceHuzvZvhPw9gcoX_ayIJH-dTH0Sp8HrksII2lGL8yDUIWlcFumZOwRg4&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=Vp_D1D_o-0XFMy95NSMKMg&oh=00_Affk5n4yt4pSvcGNfSuu4-va0QRmNh2NGT1M6NHRHgXqyQ&oe=690950FE", alt: "Pickup", title: "Pickups & Trabajo", description: "Resistencia para vehículos de trabajo" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/506038024_1298883508905908_738090214212397964_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbMSrGkwC_fyrF1dbaVQlM7VsR2ThsinDtWxHZOGyKcO-4sD4Op6VDcSw0Ur7wptlFcrznypoSW2PNfnQlmegy&_nc_ohc=HLbQFckMX5sQ7kNvwHhKau3&_nc_oc=AdkiwtPREtIzIXEwBTfLhqUWjIfeWsj33b2Q6q75cS3Lv_lePqCrA3b6JGqAnM2hLJ0&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=zDl8Av5_7YJrSJINr55BBQ&oh=00_Aff2YcWkl74OmJl-KXLoCTFfD-soS8jgfpIoiiMXTDimKA&oe=69093E0A", alt: "Furgoneta", title: "Vehículos de Transporte", description: "Protección y durabilidad para flotas y furgonetas" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/550240057_1388166463310945_2985708923488835037_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpKq8VN1deTy5FB1SS4IIRJNrCOGwc5w8k2sI4bBznD9B8_W0IaYeUFfrSD3o3Gg0WnpuqbGKDqCDj--NXZaMl&_nc_ohc=eSzEL7WmAk0Q7kNvwFr1KDy&_nc_oc=AdnsL0vRxLm9EKU9D-xr4s2xP2VuigHGDllsAEssqZBWli1HtJpronj0-Alf5pc-aqg&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=3ysEimG0lu1ZOCVErTkYgQ&oh=00_AfeBDlMDrW2bc4wnMasXDHFh-jXX7S9ik8fIGb1S1sDbQg&oe=69095836", alt: "Edificio", title: "Proyectos Comerciales", description: "Soluciones arquitectónicas de alta tecnología", isLarge: true },
    
    // New images from user request
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.06.44%20%281%29.jpeg", alt: "Polarizado de Vidrios", title: "Preparación de Cristales", description: "Proceso inicial de aplicación de película de polarizado.", isLarge: true },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.06.45.jpeg", alt: "Edificio con Polarizado", title: "Fachada Comercial", description: "Mejora estética y reducción de calor en edificios.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.49%20%281%29.jpeg", alt: "Vehículo con Acabado Premium", title: "Auto con Polarizado Elegante", description: "Un vehículo con un acabado de polarizado sofisticado y protector.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.49%20%282%29.jpeg", alt: "Instalación de Película", title: "Aplicación Detallada", description: "Técnicos especializados asegurando una instalación perfecta.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.52.jpeg", alt: "Polarizado Oscuro", title: "Máxima Privacidad", description: "Polarizado de alta tonalidad para mayor seguridad y discreción.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.51.jpeg", alt: "Medición de VLT", title: "Verificación de Legalidad", description: "Uso de medidores para asegurar el cumplimiento de la norma (VLT).", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.49.jpeg", alt: "Trabajo en Auto", title: "Detalle en Ventana Automotriz", description: "Precisión en la aplicación del polarizado en vehículos.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.45.jpeg", alt: "Instalación en Edificio", title: "Polarizado Arquitectónico", description: "Expertos instalando películas solares en grandes ventanales.", isLarge: true },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.06.44%20%282%29.jpeg", alt: "Vehículo Finalizado", title: "Transformación Completa", description: "Auto con polarizado recién instalado, listo para proteger.", isLarge: false },
  ];

  const testimonialsData: Testimonial[] = [
    { name: "Carlos G.", rating: 5, reviewText: "Excelente servicio de polarizados en Reynosa. La película nanocerámica ha hecho una gran diferencia en el calor de mi auto y la protección UV es inigualable. ¡Muy recomendados!" },
    { name: "Ana M.", rating: 5, reviewText: "Pedí polarizado para mi camioneta y el trabajo fue impecable. Ahora en Reynosa el calor ya no es un problema. La atención al cliente fue fantástica." },
    { name: "Roberto P.", rating: 5, reviewText: "Contratamos a JBM para polarizar las ventanas de nuestra oficina en Reynosa y los resultados son geniales. Mucho menos resplandor y la oficina se mantiene más fresca." },
    { name: "Sofía L.", rating: 5, reviewText: "Los mejores polarizados de seguridad que he probado. Me siento mucho más segura en mi vehículo, y el look es increíble. Servicio profesional en Reynosa." },
    { name: "Miguel R.", rating: 5, reviewText: "Buscaba polarizados de calidad en Reynosa y encontré JBM. No solo redujeron el calor, sino que también mejoró la privacidad. ¡Contentísimo con el polarizado!" },
    { name: "Laura F.", rating: 5, reviewText: "El polarizado inteligente ha sido la mejor inversión para mi auto. En Reynosa, con tanto sol, realmente se nota la diferencia. ¡Súper contenta con el servicio y la calidad!" },
  ];

  const prices = [
    { service: 'Polarizado nanocerámico', description: 'Vidrios laterales + vidrio trasero (sin parabrisas)', price: '$2,200 MXN' },
    { service: 'Parabrisas inteligente cerámico', description: 'Polarizado transparente que no oscurece, pero rechaza el calor solar', price: '$1,600 MXN' },
    { service: 'Paquete completo', description: 'Laterales + trasero + parabrisas completo', price: '$3,500 MXN' },
  ];

  return (
    <div className="bg-black">
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
        description="La tecnología ACTION ofrece el más alto nivel de protección contra rayos UV y reducción de calor, siendo la mejor opción en polarizados en Reynosa. Utiliza partículas de nano-carbono que no interfieren con señales electrónicas."
        ctaText="Solicitar Información"
        features={actionFeatures}
      />
      
      {/* --- Smart Tint Page Content integrated as FeatureSection --- */}
      <FeatureSection
        id="polarizado-inteligente"
        direction="reverse"
        label="Tecnología Inteligente"
        title="Polarizado Transparente"
        subtitle="La nueva generación en protección solar automotriz"
        image="https://images.unsplash.com/photo-1549397621-3e4b7b2a6a1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&q=80&fit=crop&crop=focalpoint&fp-y=.8"
        imageAlt="Polarizado Inteligente Transparente"
        badgeText="Invisible y Potente"
        heading="Visibilidad Perfecta, Protección Total"
        tagline="Ideal para quienes buscan máxima protección sin perder visibilidad ni estilo."
        description="Este polarizado inteligente combina tecnología avanzada y estética moderna para ofrecerte claridad total con beneficios reales. Prácticamente invisible, mantiene la claridad del vidrio original sin alterar el diseño de tu vehículo."
        ctaText="Agenda tu Prueba Gratuita"
      >
        <ul className="space-y-3 mt-6 text-white/80">
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Transparente y elegante:</strong> mantiene la claridad del vidrio original.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Protección UV y contra el calor:</strong> bloquea rayos ultravioleta y reduce la temperatura interior.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Seguridad y visibilidad total:</strong> conducción segura de día y de noche, sin reflejos ni distorsión.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Durabilidad garantizada:</strong> alta resistencia contra el desgaste, rayas y burbujas.</li>
        </ul>
      </FeatureSection>

      {/* --- Why Tint Page Content integrated as FeatureSections --- */}
      <FeatureSection
        id="por-que-polarizar"
        label="Beneficios Indispensables"
        title="¿Por Qué Polarizar tu Vehículo?"
        subtitle="Estilo, Confort y Protección Avanzada"
        image="https://images.unsplash.com/photo-1629858694002-39c87895e6f6?w=800&auto=format&fit=crop&q=60"
        imageAlt="Beneficios del Polarizado Automotriz"
        heading="Protege tu Inversión y tu Bienestar"
        tagline="El polarizado automotriz combina estilo, confort y protección."
        description="No solo mejora la apariencia de tu auto, sino que también te protege a ti y a tus pasajeros frente al sol, el calor y los impactos."
        ctaText="Descubre Nuestras Soluciones"
      >
        <ul className="space-y-3 mt-6 text-white/80">
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Seguridad:</strong> Actúa como una barrera protectora, evitando que el vidrio se desprenda.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Rechazo de calor:</strong> Reduce significativamente la temperatura interior del vehículo.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Privacidad y estética:</strong> Aporta un aspecto elegante y moderno.</li>
          <li className="flex items-start gap-3"><CheckIcon /> <strong>Protección UV:</strong> Bloquea hasta el 99.9% de los rayos ultravioleta.</li>
        </ul>
      </FeatureSection>

      <FeatureSection
        direction="reverse"
        label="Nuestro Compromiso"
        title="Instalación Profesional Garantizada"
        subtitle="Precisión y Estándares de Calidad Internacional"
        image="https://images.unsplash.com/photo-1582218784260-ebcfce9c3a3b?w=800&auto=format&fit=crop&q=60"
        imageAlt="Proceso de Instalación Profesional"
        heading="Experiencia y Tecnología en Cada Detalle"
        tagline="Cada instalación se realiza con precisión y estándares de calidad internacional."
        description="Nuestro proceso es rápido, limpio y garantiza un acabado perfecto, sin bordes visibles ni burbujas. Nuestro equipo técnico utiliza herramientas de última generación y películas originales garantizadas para asegurar un resultado impecable."
        ctaText="Agenda tu Instalación"
      >
        <h3 className="text-xl font-semibold mb-4 text-white/90 mt-6">Proceso de instalación:</h3>
        <ul className="list-disc list-inside space-y-3 text-white/80 ml-4">
          <li>Preparación y limpieza del vidrio.</li>
          <li>Moldeado y ajuste de la película en el exterior del cristal.</li>
          <li>Instalación interna con herramientas especializadas.</li>
          <li>Sellado y revisión final de detalles.</li>
        </ul>
      </FeatureSection>

      {/* --- Legal Tint Page Content Integrated --- */}
      <section id="polarizados-legales" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 text-jbm-orange">
              🛡️ Polarizados Permitidos en México para Automóviles
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              El polarizado de las ventanas se ha convertido en una de las modificaciones más comunes y funcionales para los vehículos en México.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <img
                src="https://images.unsplash.com/photo-1621643194553-739c3e987c3a?w=800&auto=format&fit=crop&q=60"
                alt="Medición de VLT en automóvil"
                className="rounded-2xl shadow-2xl shadow-black/50 w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-jbm-orange">
                Beneficios y Regulaciones Clave
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Además de mejorar la apariencia del auto, las películas polarizadas o de seguridad están diseñadas con materiales de poliéster de alta resistencia que reducen el calor, bloquean los rayos UV y brindan mayor privacidad a los pasajeros.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-white/90">Regulaciones en México (NOM-001-SSP-2008):</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3"><CheckIcon /> <strong>Parabrisas:</strong> Solo franja superior de 10 cm o película transparente con filtro UV.</li>
                <li className="flex items-start gap-3"><CheckIcon /> <strong>Ventanas delanteras:</strong> Transmisión de luz visible (VLT) mínima del 70%.</li>
                <li className="flex items-start gap-3"><CheckIcon /> <strong>Ventanas traseras y medallón:</strong> Mayor tonalidad permitida con espejos laterales.</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-6 italic bg-zinc-900 border border-white/10 p-6 rounded-xl">
                💡 En JBM Tecnología Solar trabajamos con películas certificadas y dentro de la norma mexicana, asegurando visibilidad, protección y cumplimiento legal.
              </p>
              <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-jbm-orange text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1">
                Cotiza tu Polarizado Legal
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* --- Quote Page Content Integrated --- */}
      <section id="cotizacion-polarizado-nanoceramico" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4 text-jbm-orange">
              💰 Precios y Características – Polarizado Nanocerámico
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Materiales de alta calidad con garantía y rendimiento comprobado para tu vehículo.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimateOnScroll>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-jbm-orange">
                  🔰 Características del Material
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Nuestras películas nanocerámicas están diseñadas con tecnología de punta para ofrecer la mejor experiencia:
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white/90">🧾 Garantía escrita:</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3"><CheckIcon /> <strong>3 años</strong> contra desprendimiento o burbujas.</li>
                    <li className="flex items-start gap-3"><CheckIcon /> <strong>5 años</strong> contra decoloración.</li>
                    <li className="flex items-start gap-3"><CheckIcon /> Vida útil aproximada: <strong>7 años o más.</strong></li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-white/90">🌗 Tonos disponibles:</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center gap-3"><span className="w-5 h-5 bg-gray-900 rounded-full border border-white/20"></span> <strong>05% Oscuro</strong></li>
                    <li className="flex items-center gap-3"><span className="w-5 h-5 bg-gray-700 rounded-full border border-white/20"></span> <strong>20% Medio</strong></li>
                    <li className="flex items-center gap-3"><span className="w-5 h-5 bg-gray-500 rounded-full border border-white/20"></span> <strong>35% Claro</strong></li>
                    <li className="flex items-center gap-3"><span className="w-5 h-5 bg-gray-300 rounded-full border border-white/20"></span> <strong>50% Claro Premium</strong></li>
                  </ul>
                </div>
                <p className="text-white/70 leading-relaxed mt-auto italic bg-black border border-white/10 p-4 rounded-xl">
                  📌 Puedes combinar los tonos según tus preferencias.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 h-full flex flex-col">
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-jbm-orange">
                  💰 Precios de Servicio
                </h2>
                <div className="overflow-x-auto flex-grow">
                  <table className="min-w-full rounded-xl overflow-hidden text-left">
                    <thead className="bg-jbm-orange/20 text-jbm-orange uppercase text-sm leading-normal">
                      <tr>
                        <th className="py-4 px-4 font-semibold">Servicio</th>
                        <th className="py-4 px-4 font-semibold">Descripción</th>
                        <th className="py-4 px-4 font-semibold text-right">Precio</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80 text-sm font-light">
                      {prices.map((item, index) => (
                        <tr key={index} className="border-b border-white/10 hover:bg-zinc-800 transition-colors duration-200">
                          <td className="py-4 px-4 whitespace-nowrap">{item.service}</td>
                          <td className="py-4 px-4">{item.description}</td>
                          <td className="py-4 px-4 font-bold text-jbm-yellow text-right">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-white/70 leading-relaxed mt-8 text-center">
                  ¿Listo para proteger tu vehículo con lo mejor?
                </p>
                <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block self-center mt-6 bg-jbm-orange text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 transform shadow-lg hover:shadow-jbm-orange/30">
                  Cotizar por WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default MainContent;