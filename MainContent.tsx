
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
      <FeatureSection
        direction="reverse"
        label="Tecnología Inteligente"
        title="Película Fotocromática"
        subtitle="Se adapta automáticamente a las condiciones de luz"
        image="https://images.unsplash.com/photo-15196417267-b50a006371f4?w=800&auto=format&fit=crop&q=60"
        imageAlt="Película fotocromática"
        badgeText="Adaptable"
        heading="Película Fotocromática"
        tagline="Inteligencia que se adapta a ti"
        description="Nuestra película fotocromática ajusta su tonalidad según la intensidad de la luz solar, ofreciendo máxima visibilidad y protección sin importar las condiciones externas. Ideal para quienes buscan lo último en tecnología de polarizado."
        ctaText="Descubrir Más"
      />
      <FeatureSection
        id="empresa"
        label="Soluciones Corporativas"
        title="JBM para tu Negocio"
        subtitle="Optimiza el ambiente y protege tu inversión comercial"
        image="https://images.unsplash.com/photo-1544733319-3c35b8cf41f0?w=800&auto=format&fit=crop&q=60"
        imageAlt="JBM Tecnología Solar para negocios"
        badgeText="Ahorro Energético"
        heading="Soluciones para Edificios Comerciales"
        tagline="Eficiencia y Protección para tu Empresa"
        description="Ofrecemos películas arquitectónicas que transforman cualquier espacio comercial. Reduce el calor, mejora la privacidad y protege tus interiores con films de alto rendimiento diseñados para durar."
        ctaText="Cotizar para mi Negocio"
        features={businessFeatures}
      />
      <Comparison />
      <Benefits benefits={benefitsData} />
      <Testimonials testimonials={testimonialsData} />
      <Gallery items={galleryData} />

      {/* --- Legal Tint Page Content --- */}
      <section id="polarizados-legales" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
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
      </section>

      {/* --- Smart Tint Page Content --- */}
      <section id="polarizado-inteligente" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
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
      </section>

      {/* --- Why Tint Page Content --- */}
      <section id="por-que-polarizar" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
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
      </section>

      {/* --- Quote Page Content --- */}
      <section id="cotizacion-polarizado-nanoceramico" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
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
      </section>

      <CTA />
    </div>
  );
};

export default MainContent;