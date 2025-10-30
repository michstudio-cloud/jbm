
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials'; // Import the new component
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Service, Benefit, Feature, GalleryItem, Testimonial } from './types';

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
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549958669_1388021789992079_3355981115219770301_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtWA_remiGwlp3AghjQBBLdTa0gF-dqol1NrSAX52qiaX_ag9SLDkMkia4J2No3F4_her3cD2MtPmOjcZEokPP&_nc_ohc=I1YnQfKGtAQQ7kNvwEprBi_&_nc_oc=AdnOzfe623B0ycoI3OkqsEbJI_X-jr-H2tXjh39EOtqjVm7x207v5tR-8iIfLZ737tU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=2zw7fiK6LLkSszB_o8JXAw&oh=00_AfdRg2XIq6geXCN923FYxwXxLnB4cs9C42nZTTuyV4i_RA&oe=69096838", alt: "Deportivo", title: "Vehículos de Lujo", description: "Acabado premium para deportivos y vehículos de alta gama", isLarge: true },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/549269839_1388021676658757_7830736364413838806_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVAqB55FeOxcaNqTsGj3Oxf7kqaCPunKF_uSpoI-6coZYxQ3HM9y9zr3bHU90rcfUHf1NVU3CW_vI8diJUv8iU&_nc_ohc=wyHKwLUiuNUQ7kNvwEbCm5R&_nc_oc=AdmDUFlfwcWljKNleanu5EYgG-iHrQF05inAg_ZVzDXCiQagGlo2dbmDjBB3a5b4w1Q&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=UxwwHYhO7yzy0licIW64kg&oh=00_Aff_vsi3y4r3yCi0LckojBqaoy60PNs6gfQ1EM4mu3otlQ&oe=69094F33", alt: "SUV", title: "SUV & Familiares", description: "Protección completa para toda la familia" },
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549628459_1391716376289287_5487471753615711144_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtaueqDo-FEWsR44Dt2N6yCgOP6dJf4rsKA4_p0l_iu_Ahh7HUyrt0NebppGFpYEqBxPxSANoX8sl6dl-XylZv&_nc_ohc=Uypq21vRJ-EQ7kNvwHAl4dM&_nc_oc=AdkiENx69WGNWeUbBXiUGG7IQr0F9V76TT-BJTnspoXzVdXDac1R9teK4vg6XTSbFSU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=zgEPDxSGrk9nphmVOwJnTA&oh=00_AfclrtvyChimeoiqCu7YVyQk-O-IsYk76IKOECfdvGeV_w&oe=69094C6C", alt: "Sedán", title: "Sedanes Ejecutivos", description: "Elegancia y privacidad empresarial" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/506738091_1301384058655853_1693792106479304873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNbKCvWyxL1Zcoeb64yVJ3d54oesNvpnt3nih6w2-me2GhZVC4778XCgHdVCHF6nT_ohgEXogn8aokuD0ErjWU&_nc_ohc=_DARtmESgDQQ7kNvwFmECRT&_nc_oc=Adm3WMm4jbceHuzvZvhPw9gcoX_ayIJH-dTH0Sp8HrksII2lGL8yDUIWlcFumZOwRg4&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=Vp_D1D_o-0XFMy95NSMKMg&oh=00_Affk5n4yt4pSvcGNfSuu4-va0QRmNh2NGT1M6NHRHgXqyQ&oe=690950FE", alt: "Pickup", title: "Pickups & Trabajo", description: "Resistencia para vehículos de trabajo" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/506038024_1298883508905908_738090214212397964_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbMSrGkwC_fyrF1dbaVQlM7VsR2ThsinDtWxHZOGyKcO-4sD4Op6VDcSw0Ur7wptlFcrznypoSW2PNfnQlmegy&_nc_ohc=HLbQFckMX5sQ7kNvwHhKau3&_nc_oc=AdkiwtPREtIzIXEwBTfLhqUWjIfeWsj33b2Q6q75cS3Lv_lePqCrA3b6JGqAnM2hLJ0&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=zDl8Av5_7YJrSJINr55BBQ&oh=00_Aff2YcWkl74OmJl-KXLoCTFfD-soS8jgfpIoiiMXTDimKA&oe=69093E0A", alt: "Furgoneta", title: "Vehículos de Transporte", description: "Protección y durabilidad para flotas y furgonetas" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/550240057_1388166463310945_2985708923488835037_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpKq8VN1deTy5FB1SS4IIRJNrCOGwc5w8k2sI4bBznD9B8_W0IaYeUFfrSD3o3Gg0WnpuqbGKDqCDj--NXZaMl&_nc_ohc=eSzEL7WmAk0Q7kNvwFr1KDy&_nc_oc=AdnsL0vRxLm9EKU9D-xr4s2xP2VuigHGDllsAEssqZBWli1HtJpronj0-Alf5pc-aqg&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=3ysEimG0lu1ZOCVErTkYgQ&oh=00_AfeBDlMDrW2bc4wnMasXDHFh-jXX7S9ik8fIGb1S1sDbQg&oe=69095836", alt: "Edificio", title: "Proyectos Comerciales", description: "Soluciones arquitectónicas de alta tecnología", isLarge: true },
  ];

  const testimonialsData: Testimonial[] = [
    { name: "Carlos G.", rating: 5, reviewText: "Excelente servicio de polarizados en Reynosa. La película nanocerámica ha hecho una gran diferencia en el calor de mi auto y la protección UV es inigualable. ¡Muy recomendados!" },
    { name: "Ana M.", rating: 5, reviewText: "Pedí polarizado para mi camioneta y el trabajo fue impecable. Ahora en Reynosa el calor ya no es un problema. La atención al cliente fue fantástica." },
    { name: "Roberto P.", rating: 5, reviewText: "Contratamos a JBM para polarizar las ventanas de nuestra oficina en Reynosa y los resultados son geniales. Mucho menos resplandor y la oficina se mantiene más fresca." },
    { name: "Sofía L.", rating: 5, reviewText: "Los mejores polarizados de seguridad que he probado. Me siento mucho más segura en mi vehículo, y el look es increíble. Servicio profesional en Reynosa." },
    { name: "Miguel R.", rating: 5, reviewText: "Buscaba polarizados de calidad en Reynosa y encontré JBM. No solo redujeron el calor, sino que también mejoró la privacidad. ¡Contentísimo con el polarizado!" },
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
          description="La tecnología ACTION ofrece el más alto nivel de protección contra rayos UV y reducción de calor, siendo la mejor opción en polarizados en Reynosa. Utiliza partículas de nano-carbono que no interfieren con señales electrónicas."
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
                <div className="bg-jbm-orange/10 border border-jbm-orange/30 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="mb-2 text-jbm-orange font-semibold">DÍA / SOL</h4>
                    <p className="text-white/60 text-sm">Deep/Light Black - Se oscurece automáticamente para máxima protección</p>
                </div>
                <div className="bg-indigo-900/10 border border-indigo-900/30 p-6 rounded-2xl">
                    <div className="text-4xl mb-2">🌙</div>
                    <h4 className="mb-2 text-indigo-500 font-semibold">NOCHE</h4>
                    <p className="text-white/60 text-sm">Transparente - Se aclara para óptima visibilidad nocturna</p>
                </div>
            </div>
        </FeatureSection>
        <Comparison />
        <Benefits benefits={benefitsData} />
        <Testimonials testimonials={testimonialsData} /> {/* New Testimonials Section */}
        <FeatureSection
          id="empresa"
          label="Soluciones Corporativas"
          title="Edificios Comerciales"
          subtitle="Tecnología profesional para espacios empresariales"
          image="https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/548976118_1388175596643365_3323515692048945738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFU3n2jQDSV_XZF3REQ7hC2k5YQpxK1JhWTlhCnErUmFUYdw7PM7oJUj3-NtLDTRMrf1KtKZCvxd8ZKtecyOclF&_nc_ohc=j2ChUGvES64Q7kNvwHeF_Mh&_nc_oc=AdlX4UlEJGTq5b_U5VXEjE_mZu3V3pprgKDp9rXGtjxHZvvv-RYKgEp8NBDTdeRrdik&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=fV0WNngpfoqZ3UsVVdMQyw&oh=00_AfeApxK90qIBYaNsPKvCcCJLULIWYcUl6b55_2fIwT0C8Q&oe=690951CC"
          imageAlt="Edificio comercial"
          badgeComponent={
            <div className="absolute bottom-8 left-8 right-8 bg-jbm-orange/95 backdrop-blur-sm p-6 rounded-2xl text-center">
              <strong className="text-lg block">Recupera tu inversión en 2-3 años</strong>
              <p className="mt-2 text-sm text-white/80">Ahorro energético comprobado</p>
            </div>
          }
          heading="Transforma tu Espacio"
          tagline="Soluciones Arquitectónicas Premium"
          description="Nuestros polarizados nanocerámicos para edificios en Reynosa ofrecen la combinación perfecta entre funcionalidad, estética y ahorro energético para empresas modernas."
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
