'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from '@/components/ui/magic-card';
import BlurFade from '@/components/ui/blur-fade';

interface ServicesProps {
  content: {
    title: string;
    wedding: {
      title: string;
      description: string;
    };
    corporate: {
      title: string;
      description: string;
    };
    school: {
      title: string;
      description: string;
    };
    solo: {
      title: string;
      description: string;
    };
  };
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop&auto=format",
      title: content.wedding.title,
      description: content.wedding.description,
      accent: "from-brass-900/20 to-brass-900/10"
    },
    {
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop&auto=format",
      title: content.corporate.title,
      description: content.corporate.description,
      accent: "from-brass-900/15 to-brass-900/5"
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format",
      title: content.school.title,
      description: content.school.description,
      accent: "from-brass-900/10 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop&auto=format",
      title: content.solo.title,
      description: content.solo.description,
      accent: "from-brass-900/25 to-brass-900/5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-brass-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Section Header */}
        <BlurFade delay={0.2}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-normal text-midnight-950 mb-6 tracking-tight">
              {content.title}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto"></div>
          </motion.div>
        </BlurFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.1}>
              <MagicCard
                className="group cursor-pointer h-full"
                gradientColor="#b8860b"
                gradientSize={150}
                gradientOpacity={0.06}
              >
                <div className="p-6 md:p-8 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                  {/* Service image */}
                  <motion.div 
                    className="mb-6 w-full h-48 rounded-brand overflow-hidden shadow-sm border border-brass-900/20 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-medium text-midnight-950 mb-4 group-hover:text-brass-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-midnight-900/70 font-body leading-relaxed group-hover:text-midnight-900 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-brand pointer-events-none`}></div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 