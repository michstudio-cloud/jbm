
import React, { useRef, useEffect, useState } from 'react';

// Define the props interface for AnimateOnScroll
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string; // Make className optional
  delay?: number; // Make delay optional
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '', // Default to empty string if not provided
  delay = 0,      // Default to 0 if not provided
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;