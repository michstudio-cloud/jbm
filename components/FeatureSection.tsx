
import React from 'react';
import { Feature } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

interface FeatureSectionProps {
  id?: string;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  badgeText?: string;
  badgeComponent?: React.ReactNode;
  heading: string;
  tagline: string;
  description: string;
  features?: Feature[];
  children?: React.ReactNode;
  ctaText: string;
  direction?: 'normal' | 'reverse';
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jbm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  label,
  title,
  subtitle,
  image,
  imageAlt,
  badgeText,
  badgeComponent,
  heading,
  tagline,
  description,
  features,
  children,
  ctaText,
  direction = 'normal',
}) => {
  return (
    <section id={id} className={`py-24 ${direction === 'normal' ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-black'}`}>
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <div className="text-sm font-semibold text-jbm-orange uppercase tracking-widest mb-4">{label}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{title}</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">{subtitle}</p>
        </AnimateOnScroll>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${direction === 'reverse' ? 'lg:grid-flow-col-dense' : ''}`}>
          <AnimateOnScroll className={`${direction === 'reverse' ? 'lg:col-start-2' : ''}`}>
            <div className="relative">
              <img src={image} alt={imageAlt} className="rounded-2xl shadow-2xl shadow-black/50 w-full h-auto object-cover aspect-[4/3]" />
              {badgeText && (
                <div className="absolute top-6 right-6 bg-jbm-orange/90 backdrop-blur-sm py-3 px-6 rounded-xl font-bold text-lg">
                  {badgeText}
                </div>
              )}
              {badgeComponent}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className={`${direction === 'reverse' ? 'lg:col-start-1' : ''}`} delay={0.2}>
            <h3 className="text-4xl font-bold tracking-tight mb-3">{heading}</h3>
            <p className="text-lg font-semibold text-jbm-orange mb-6">{tagline}</p>
            <p className="text-white/60 leading-relaxed mb-6">{description}</p>
            
            {features && (
              <ul className="space-y-4 my-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 py-3 border-b border-white/10">
                    <div className="flex-shrink-0 w-6 h-6 bg-jbm-orange/20 border-2 border-jbm-orange rounded-full flex items-center justify-center mt-1">
                      <CheckIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-sm text-white/50">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {children}

            <a href="#contacto" className="inline-block mt-8 bg-jbm-orange text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-jbm-red-orange hover:-translate-y-1">
              {ctaText}
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;