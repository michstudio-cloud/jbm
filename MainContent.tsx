import React from 'react';
import AnimateOnScroll from './components/AnimateOnScroll';
import { Testimonial, GalleryItem } from './types'; // Keep these if you plan to use a subset of the data

// Reusable CheckIcon for lists
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jbm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const MainContent: React.FC = () => {

  // --- Data relevant for new content structure ---
  // Only keeping a subset of gallery and testimonials for the "Confianza Local" section
  const galleryData: GalleryItem[] = [
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549958669_1388021789992079_3355981115219770301_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtWA_remiGwlp3AghjQBBLdTa0gF-dqol1NrSAX52qiaX_ag9SLDkMkia4J2No3F4_her3cD2MtPmOjcZEokPP&_nc_ohc=I1YQfKGtAQQ7kNvwEprBi_&_nc_oc=AdnOzfe623B0ycoI3OkqsEbJI_X-jr-H2tXjh39EOtqjVm7x207v5tR-8iIfLZ737tU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=2zw7fiK6LLkSszB_o8JXAw&oh=00_AfdRg2XIq6geXCN923FYxwXxLnB4cs9C42nZTTuyV4i_RA&oe=69096838", alt: "Deportivo", title: "Vehículos de Lujo", description: "Acabado premium para deportivos y vehículos de alta gama", isLarge: true },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/549269839_1388021676658757_7830736364413838806_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVAqB55FeOxcaNqTsGj3Oxf7kqaCPunKF_uSpoI-6coZYxQ3HM9y9zr3bHU90rcfUHf1NVU3CW_vI8diJUv8iU&_nc_ohc=wyHKwLUiuNUQ7kNvwEbCm5R&_nc_oc=AdmDUFlfwcWljKNleanu5EYgG-iHrQF05inAg_ZVzDXCiQagGlo2dbmDjBB3a5b4w1Q&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=UxwwHYhO7yzy0licIW64kg&oh=00_Aff_vsi3y4r3yCi0LckojBqaoy60PNs6gfQ1EM4mu3otlQ&oe=69094F33", alt: "SUV", title: "SUV & Familiares", description: "Protección completa para toda la familia" },
    { image: "https://scontent.fntr10-2.fna.fbcdn.net/v/t39.30808-6/549628459_1391716376289287_5487471753615711144_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFtaueqDo-FEWsR44Dt2N6yCgOP6dJf4rsKA4_p0l_iu_Ahh7HUyrt0NebppGFpYEqBxPxSANoX8sl6dl-XylZv&_nc_ohc=Uypq21vRJ-EQ7kNvwHAl4dM&_nc_oc=AdkiENx69WGNWeUbBXiUGG7IQr0F9V76TT-BJTnspoXzVdXDac1R9teK4vg6XTSbFSU&_nc_zt=23&_nc_ht=scontent.fntr10-2.fna&_nc_gid=zgEPDxSGrk9nphmVOwJnTA&oh=00_AfclrtvyChimeoiqCu7YVyQk-O-IsYk76IKOECfdvGeV_w&oe=69094C6C", alt: "Sedán", title: "Sedanes Ejecutivos", description: "Elegancia y privacidad empresarial" },
    { image: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/506738091_1301384058655853_1693792106479304873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFNbKCvWyxL1Zcoeb64yVJ3d54oesNvpnt3nih6w2-me2GhZVC4778XCgHdVCHF6nT_ohgEXogn8aokuD0ErjWU&_nc_ohc=_DARtmESgDQQ7kNvwFmECRT&_nc_oc=Adm3WMm4jbceHuzvZvhPw9gcoX_ayIJH-dTH0Sp8HrksII2lGL8yDUIWlcFumZOwRg4&_nc_zt=23&_nc_ht=scontent.fntr10-1.fna&_nc_gid=Vp_D1D_o-0XFMy95NSMKMg&oh=00_Affk5n4yt4pSvcGNfSuu4-va0QRmNh2NGT1M6NHRHgXqyQ&oe=690950FE", alt: "Pickup", title: "Pickups & Trabajo", description: "Resistencia para vehículos de trabajo" },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.49%20%281%29.jpeg", alt: "Vehículo con Acabado Premium", title: "Auto con Polarizado Elegante", description: "Un vehículo con un acabado de polarizado sofisticado y protector.", isLarge: false },
    { image: "https://aovdenhnjal4d1pi.public.blob.vercel-storage.com/photos/WhatsApp%20Image%202025-11-11%20at%2013.12.49%20%282%29.jpeg", alt: "Instalación de Película", title: "Aplicación Detallada", description: "Técnicos especializados asegurando una instalación perfecta.", isLarge: false },
  ];

  const testimonialsData: Testimonial[] = [
    { name: "Carlos G.", rating: 5, reviewText: "Excelente servicio de polarizados en Reynosa. La película nanocerámica ha hecho una gran diferencia en el calor de mi auto y la protección UV es inigualable. ¡Muy recomendados!" },
    { name: "Ana M.", rating: 5, reviewText: "Pedí polarizado para mi camioneta y el trabajo fue impecable. Ahora en Reynosa el calor ya no es un problema. La atención al cliente fue fantástica." },
    { name: "Roberto P.", rating: 5, reviewText: "Contratamos a JBM para polarizar las ventanas de nuestra oficina en Reynosa y los resultados son geniales. Mucho menos resplandor y la oficina se mantiene más fresca." },
    { name: "Sofía L.", rating: 5, reviewText: "Los mejores polarizados de seguridad que he probado. Me siento mucho más segura en mi vehículo, y el look es increíble. Servicio profesional en Reynosa." },
    { name: "Miguel R.", rating: 5, reviewText: "Buscaba polarizados de calidad en Reynosa y encontré JBM. No solo redujeron el calor, sino que también mejoró la privacidad. ¡Contentísimo con el polarizado!" },
    { name: "Laura F.", rating: 5, reviewText: "El polarizado inteligente ha sido la mejor inversión para mi auto. En Reynosa, con tanto sol, realmente se nota la diferencia. ¡Súper contenta con el servicio y la calidad!" },
  ];


  return (
    <div className="bg-black">

      {/* 1. HERO (DIRECTO AL PROBLEMA) */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.1)_0%,_transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_90%,_rgba(96,165,250,0.1)_0%,_transparent_40%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <AnimateOnScroll>
            <p className="text-xl md:text-2xl text-white/70 mb-4 font-semibold">¿Tu carro se convierte en horno cada vez que sales?</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Instala polarizado profesional y legal en Reynosa
              y maneja más fresco, más cómodo y sin preocupaciones.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <ul className="list-none space-y-3 mb-10 text-lg text-white/80 max-w-md mx-auto">
              <li className="flex items-center justify-center gap-3"><CheckIcon /> Menos calor desde el primer día</li>
              <li className="flex items-center justify-center gap-3"><CheckIcon /> Polarizado nanocerámico</li>
              <li className="flex items-center justify-center gap-3"><CheckIcon /> Garantía por escrito</li>
              <li className="flex items-center justify-center gap-3"><CheckIcon /> Instalación profesional</li>
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="bg-jbm-orange text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 hover:shadow-2xl hover:shadow-jbm-orange/30">
              👉 Agenda tu cita por WhatsApp
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. SECCIÓN 2 — HABLANDO CLARO (TONO MASCULINO) */}
      <section id="hablando-claro" className="py-24 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">La Verdad es...</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">El problema no es tu carro…</h2>
            <p className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-jbm-red-orange animate-pulse">es el calor de Reynosa.</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-xl text-white/70 mb-8">Un polarizado común solo oscurece el vidrio. Nuestro polarizado nanocerámico trabaja donde importa:</p>
            <ul className="list-none space-y-4 text-xl text-white/90 max-w-xl mx-auto">
              <li className="flex items-center justify-center gap-3"><span className="text-jbm-orange text-3xl">🔥</span> Reduce el calor real dentro del auto</li>
              <li className="flex items-center justify-center gap-3"><span className="text-jbm-yellow text-3xl">☀️</span> Bloquea rayos UV</li>
              <li className="flex items-center justify-center gap-3"><span className="text-jbm-orange text-3xl">😎</span> Evita deslumbramientos</li>
              <li className="flex items-center justify-center gap-3"><span className="text-jbm-yellow text-3xl">🧊</span> Ayuda a que el A/C no trabaje de más</li>
            </ul>
            <p className="text-2xl font-bold text-white mt-12">Se siente la diferencia desde que te subes.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3. SECCIÓN 3 — EL PRODUCTO (SIN COMPLICAR) */}
      <section id="el-producto" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Nuestra Tecnología</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Polarizado Nanocerámico</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Este es el polarizado que sí funciona en el calor fuerte.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center">
                <span className="text-jbm-orange text-5xl mb-4">🌡️</span>
                <h3 className="text-2xl font-semibold mb-3">Rechazo de calor hasta 92%</h3>
                <p className="text-white/60">Mantén tu vehículo fresco incluso en los días más calurosos.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center">
                <span className="text-jbm-yellow text-5xl mb-4">📶</span>
                <h3 className="text-2xl font-semibold mb-3">No interfiere con señal</h3>
                <p className="text-white/60">Totalmente compatible con GPS, celular y radio.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center">
                <span className="text-jbm-orange text-5xl mb-4">👀</span>
                <h3 className="text-2xl font-semibold mb-3">Buena visibilidad al manejar</h3>
                <p className="text-white/60">Claridad excepcional de día y de noche, sin distorsiones.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center">
                <span className="text-jbm-yellow text-5xl mb-4">🛋️</span>
                <h3 className="text-2xl font-semibold mb-3">Protege el interior del auto</h3>
                <p className="text-white/60">Evita la decoloración y el agrietamiento de asientos y tablero.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.5}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center">
                <span className="text-jbm-orange text-5xl mb-4">💪</span>
                <h3 className="text-2xl font-semibold mb-3">Material duradero</h3>
                <p className="text-white/60">Resistente a la decoloración y al desgaste por años.</p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.6} className="text-center mt-12">
            <p className="text-xl text-white/80 italic max-w-2xl mx-auto">
              👉 Ideal si manejas mucho o simplemente ya no aguantas el calor.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. SECCIÓN 4 — TONOS (EXPLICADO SIMPLE) */}
      <section id="tonos" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-jbm-orange">¿Qué tan oscuro lo quieres?</h2>
            <p className="text-lg text-white/70 mb-8">El porcentaje indica cuánta luz entra al auto. <strong className="text-jbm-yellow">Entre más bajo el número, más oscuro se ve.</strong></p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <AnimateOnScroll delay={0.1}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-3xl font-bold text-white/80 border-4 border-jbm-orange mb-6">05%</div>
                <h3 className="text-2xl font-semibold mb-2">Muy oscuro</h3>
                <p className="text-white/60 text-sm">(máxima privacidad)</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-3xl font-bold text-white/80 border-4 border-jbm-orange mb-6">20%</div>
                <h3 className="text-2xl font-semibold mb-2">Oscuro</h3>
                <p className="text-white/60 text-sm"></p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center text-3xl font-bold text-white/80 border-4 border-jbm-orange mb-6">35%</div>
                <h3 className="text-2xl font-semibold mb-2">Claro y balanceado</h3>
                <p className="text-white/60 text-sm"></p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.4} className="text-lg text-white/70 mt-12 italic">
            👉 Puedes combinar tonos según tu gusto y lo permitido. Si tienes duda, nosotros te recomendamos el mejor.
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. SECCIÓN 5 — LEGALIDAD + RESPALDO */}
      <section id="legalidad-respaldo" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Nuestra Confianza</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Polarizado legal, bien instalado</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Aquí no improvisamos.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <ul className="list-none space-y-6 text-xl text-white/90">
                <li className="flex items-start gap-4 p-4 bg-zinc-900 rounded-xl border border-white/10">
                  <span className="text-jbm-orange text-3xl flex-shrink-0">📜</span>
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">Instalamos conforme a normativa</h3>
                    <p className="text-white/70 text-lg">Nos aseguramos de que tu polarizado cumpla con todas las regulaciones vigentes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-zinc-900 rounded-xl border border-white/10">
                  <span className="text-jbm-yellow text-3xl flex-shrink-0">✨</span>
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">Trabajo limpio y profesional</h3>
                    <p className="text-white/70 text-lg">Acabados impecables sin burbujas ni imperfecciones.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-zinc-900 rounded-xl border border-white/10">
                  <span className="text-jbm-orange text-3xl flex-shrink-0">✅</span>
                  <div>
                    <h3 className="font-semibold text-2xl mb-1">Garantía por escrito</h3>
                    <p className="text-white/70 text-lg">Total tranquilidad con nuestro respaldo.</p>
                  </div>
                </li>
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="bg-gradient-to-br from-jbm-orange/20 to-jbm-red-orange/20 p-8 rounded-2xl border border-jbm-orange/50 shadow-lg shadow-jbm-orange/10">
                <h3 className="text-3xl font-bold mb-6 text-jbm-orange">Nuestra Garantía:</h3>
                <ul className="list-none space-y-4 text-xl text-white/90">
                  <li className="flex items-center gap-3"><CheckIcon /> <strong>3 años</strong> en desprendimiento o globos</li>
                  <li className="flex items-center gap-3"><CheckIcon /> <strong>5 años</strong> en decoloración</li>
                  <li className="flex items-center gap-3"><CheckIcon /> Material con vida útil mínima de <strong>7 años</strong></li>
                </ul>
                <p className="text-white/70 text-lg mt-8 italic">Si algo falla, respondemos.</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN 6 — PRECIOS CLAROS (ESTO CIERRA) */}
      <section id="precios" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-jbm-orange">💰 Precios de Polarizado Nanocerámico</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Precios claros. Sin letras chiquitas.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">🚗 Auto</h3>
                  <p className="text-white/70 text-lg mb-6">Polarizado nanocerámico de alta calidad para tu vehículo.</p>
                  <ul className="list-none space-y-4 text-lg text-white/90">
                    <li className="flex items-start justify-between gap-4 py-2 border-b border-white/5">
                      <span>Vidrios laterales + vidrio trasero (sin parabrisas)</span>
                      <span className="font-bold text-jbm-yellow text-xl flex-shrink-0">$2,200 MXN</span>
                    </li>
                    <li className="flex items-start justify-between gap-4 py-2 border-b border-white/5">
                      <span>➕ Parabrisas (opcional)</span>
                      <span className="font-bold text-jbm-yellow text-xl flex-shrink-0">$1,600 MXN</span>
                    </li>
                    <li className="text-white/70 text-base mt-2">
                        <span className="font-bold">Nota:</span> El parabrisas no oscurece, pero rechaza calor.
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="bg-gradient-to-br from-jbm-orange/20 to-jbm-red-orange/20 rounded-2xl p-8 border border-jbm-orange/50 shadow-lg shadow-jbm-orange/10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-jbm-orange mb-4">🚨 PAQUETE COMPLETO</h3>
                  <p className="text-white/80 text-lg mb-6">Obtén la máxima protección y confort para todo tu auto.</p>
                  <ul className="list-none space-y-4 text-lg text-white/90">
                    <li className="flex items-start justify-between gap-4 py-2 border-b border-white/5">
                      <span>Laterales + trasero + parabrisas</span>
                      <span className="font-bold text-jbm-yellow text-xl flex-shrink-0">$3,500 MXN</span>
                    </li>
                    <li className="flex items-start justify-between gap-4 py-2 border-b border-white/5">
                      <span>🔹 Panorámico doble</span>
                      <span className="font-bold text-jbm-yellow text-xl flex-shrink-0">$850 MXN</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.4} className="text-center mt-12">
            <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block bg-jbm-orange text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1 hover:shadow-2xl hover:shadow-jbm-orange/30">
              Cotiza tu polarizado ahora
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* NEW SECTION: Soluciones para Negocios */}
      <section id="soluciones-para-negocios" className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Para tu Empresa</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">También polarizamos tu Negocio</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">¿Tienes un negocio, oficina o local comercial? También realizamos trabajos de polarizado para comercios y empresas en Reynosa.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <img
                src="https://images.unsplash.com/photo-1544377193-339235e07a3d?w=800&auto=format&fit=crop&q=60"
                alt="Oficina moderna con ventanas polarizadas"
                className="rounded-2xl shadow-2xl shadow-black/50 w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <h3 className="text-3xl font-bold tracking-tight mb-6 text-jbm-orange">
                Beneficios Clave para tu Espacio Comercial
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Instalamos películas de control solar que ayudan a transformar cualquier ambiente:
              </p>
              <ul className="list-none space-y-4 text-lg text-white/90 mb-8">
                <li className="flex items-start gap-3"><CheckIcon /> Reducir el calor dentro del local</li>
                <li className="flex items-start gap-3"><CheckIcon /> Disminuir el deslumbramiento</li>
                <li className="flex items-start gap-3"><CheckIcon /> Mejorar el confort de clientes y empleados</li>
                <li className="flex items-start gap-3"><CheckIcon /> Proteger mobiliario y equipo</li>
                <li className="flex items-start gap-3"><CheckIcon /> Reducir el uso del aire acondicionado</li>
              </ul>
              <p className="text-jbm-yellow text-xl font-bold mb-6">Soluciones pensadas para el clima extremo de la región.</p>
              
              <h3 className="text-2xl font-semibold mb-4 text-white/90">Atendemos proyectos para:</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-white/80 text-lg mb-8">
                <p className="flex items-center gap-2">🏢 Oficinas</p>
                <p className="flex items-center gap-2">🏬 Locales comerciales</p>
                <p className="flex items-center gap-2">🏫 Escuelas</p>
                <p className="flex items-center gap-2">🏭 Naves industriales</p>
                <p className="flex items-center gap-2">💼 Franquicias</p>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Trabajamos con materiales de alta durabilidad, instalación profesional y asesoría personalizada según el tipo de vidrio y la exposición solar. Cada proyecto se evalúa de forma individual para ofrecer la mejor solución según el uso del espacio y el presupuesto.
              </p>
              <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-jbm-orange text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1">
                Cotizar Proyecto Comercial
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN 7 — CÓMO TRABAJAMOS */}
      <section id="como-trabajamos" className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Proceso Simple</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">¿Cómo funciona?</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col items-center bg-zinc-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-16 h-16 bg-jbm-orange/20 rounded-full flex items-center justify-center text-3xl font-bold text-jbm-orange mb-4">1️⃣</div>
                <h3 className="text-xl font-semibold mb-2">Agenda tu cita</h3>
                <p className="text-white/60 text-center">Contáctanos fácilmente por WhatsApp.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="flex flex-col items-center bg-zinc-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-16 h-16 bg-jbm-orange/20 rounded-full flex items-center justify-center text-3xl font-bold text-jbm-orange mb-4">2️⃣</div>
                <h3 className="text-xl font-semibold mb-2">Llegas con tu carro</h3>
                <p className="text-white/60 text-center">Te esperamos a la hora acordada.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-col items-center bg-zinc-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-16 h-16 bg-jbm-orange/20 rounded-full flex items-center justify-center text-3xl font-bold text-jbm-orange mb-4">3️⃣</div>
                <h3 className="text-xl font-semibold mb-2">Instalamos el polarizado</h3>
                <p className="text-white/60 text-center">Profesional y eficientemente.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <div className="flex flex-col items-center bg-zinc-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-16 h-16 bg-jbm-orange/20 rounded-full flex items-center justify-center text-3xl font-bold text-jbm-orange mb-4">4️⃣</div>
                <h3 className="text-xl font-semibold mb-2">Te vas manejando más fresco</h3>
                <p className="text-white/60 text-center">¡Disfruta del confort y la protección!</p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.5} className="mt-12 text-2xl font-bold text-white/90">
            Así de simple.
          </AnimateOnScroll>
        </div>
      </section>

      {/* 8. SECCIÓN 8 — CONFIANZA LOCAL */}
      <section id="confianza-local" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Somos de Aquí</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Estamos en Reynosa</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimateOnScroll className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 h-full">
                <h3 className="text-2xl font-bold mb-4 text-jbm-orange">Horarios y Ubicación</h3>
                <p className="text-white/70 text-lg mb-4 flex items-center gap-3">
                  <span className="text-jbm-yellow text-2xl">⏰</span> Lunes a sábado
                </p>
                <p className="text-white/70 text-lg mb-6 pl-9">9:00 a.m. a 6:30 p.m.</p>
                <p className="text-white/70 text-lg flex items-start gap-3">
                  <span className="text-jbm-yellow text-2xl flex-shrink-0">📍</span> Fracc. San Pedro, Reynosa, Tamaulipas
                </p>
                <a href="https://maps.app.goo.gl/BAnYRRBaPuoLfHyj8" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-jbm-orange hover:text-jbm-red-orange transition-colors underline">
                    Ver en Google Maps
                </a>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 h-full">
                <h3 className="text-2xl font-bold mb-4 text-jbm-orange">Lo Que Dicen Nuestros Clientes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonialsData.slice(0, 2).map((testimonial, index) => ( // Show first 2 testimonials
                    <div key={index} className="bg-black rounded-xl p-6 border border-white/5">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-jbm-yellow">⭐</span>
                        ))}
                      </div>
                      <p className="text-white/80 text-sm italic mb-4">"{testimonial.reviewText}"</p>
                      <p className="text-white/70 text-xs font-semibold">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-jbm-orange">Galería de Trabajos</h3>
                <div className="grid grid-cols-2 gap-4">
                  {galleryData.slice(0, 4).map((item, index) => ( // Show first 4 gallery items
                    <div key={index} className="relative h-40 rounded-lg overflow-hidden border border-white/10">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-black/50 flex items-end p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-xs font-semibold">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA FINAL — CIERRE FUERTE */}
      <section id="cta-final" className="py-24 bg-jbm-orange text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">¿Listo para dejar de sufrir el calor?</h2>
            <a href="https://wa.me/528992557561" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-jbm-orange font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 transform shadow-lg shadow-jbm-red-orange/40">
              👉 AGENDAR CITA POR WHATSAPP
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FRASE FINAL DE MARCA */}
      <section className="py-12 bg-black text-center border-t border-white/10">
        <AnimateOnScroll>
          <p className="text-lg text-white/50 font-light">
            <strong className="text-jbm-orange">JBM Tecnología Solar</strong> <br/> Polarizado bien hecho, para el calor de Reynosa.
          </p>
        </AnimateOnScroll>
      </section>

    </div>
  );
};

export default MainContent;