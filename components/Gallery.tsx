

import React from 'react';
import { GalleryItem } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Nuestro Trabajo</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Descubre nuestros proyectos de polarizados en Reynosa</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <AnimateOnScroll key={index} className={`${item.isLarge ? 'md:col-span-2' : ''}`} delay={index * 0.1}>
              <div className={`relative h-96 ${item.isLarge ? 'md:h-[500px]' : 'md:h-96'} rounded-2xl overflow-hidden group cursor-pointer border border-white/5`}>
                <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-jbm-orange mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;