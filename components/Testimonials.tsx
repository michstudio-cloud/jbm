
import React from 'react';
import { Testimonial } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const StarIcon: React.FC = () => (
  <svg className="w-5 h-5 text-jbm-yellow" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Opiniones</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Experiencias reales con los mejores polarizados en Reynosa</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5 transition-all duration-300 hover:border-jbm-orange/30 hover:-translate-y-2 h-full flex flex-col justify-between">
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.reviewText}"</p>
                </div>
                <div className="text-sm font-semibold text-white/70">
                  - {testimonial.name}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;