'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from './shimmer-button';
import { createWhatsAppUrl, businessConfig } from '@/lib/config';

interface FloatingWhatsAppCTAProps {
  content: {
    ctaPrimary: string;
    whatsappMessage: string;
  };
  locale: string;
}

const FloatingWhatsAppCTA: React.FC<FloatingWhatsAppCTAProps> = ({ content, locale }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroCtaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the CTA button by its specific ID (hero or about page)
    const findCTA = () => {
      const heroCta = document.getElementById('hero-whatsapp-cta');
      const aboutCta = document.querySelector('[data-cta="about-whatsapp"]');
      
      const ctaButton = heroCta || aboutCta;
      if (ctaButton) {
        heroCtaRef.current = ctaButton as HTMLElement;
        return true;
      }
      return false;
    };

    // Try to find the CTA immediately, if not found, try again with increasing delays
    if (!findCTA()) {
      const timeout1 = setTimeout(() => {
        if (!findCTA()) {
          setTimeout(findCTA, 500);
        }
      }, 100);
      return () => clearTimeout(timeout1);
    }
  }, []);

  useEffect(() => {
    if (!heroCtaRef.current) return;

    const targetElement = heroCtaRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating CTA when hero CTA is NOT visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px' // Increased buffer
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = content.whatsappMessage
      .replace('{location}', businessConfig.business.defaultLocation)
      .replace('{time}', 'bulan depan');
    const whatsappUrl = createWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3 
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ShimmerButton 
              className="relative px-4 py-3 md:px-6 md:py-3 bg-whatsapp text-white font-body font-medium text-sm md:text-base rounded-brand border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group min-w-[160px] md:min-w-[200px]"
              shimmerColor="#25D366"
              shimmerSize="0.05em"
              borderRadius="12px"
              shimmerDuration="2s"
              background="#25D366"
              onClick={handleWhatsAppClick}
            >
              <span className="relative z-10 flex items-center gap-2 md:gap-3 justify-center">
                <motion.svg 
                  className="w-4 h-4 md:w-5 md:h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </motion.svg>
                <span>{content.ctaPrimary}</span>
              </span>
            </ShimmerButton>
          </motion.div>

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-whatsapp/20 rounded-brand blur-xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsAppCTA;