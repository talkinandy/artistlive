'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from '@/components/ui/magic-card';
import BlurFade from '@/components/ui/blur-fade';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { createWhatsAppUrl, businessConfig } from '@/lib/config';

interface AboutProps {
  content: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    story: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      innovation: { title: string; description: string };
      security: { title: string; description: string };
      simplicity: { title: string; description: string };
      reliability: { title: string; description: string };
    };
    services: {
      title: string;
      for_bookers: {
        title: string;
        discovery: string;
        support: string;
        booking: string;
        payment: string;
      };
      for_artists: {
        title: string;
        visibility: string;
        communication: string;
        management: string;
        protection: string;
      };
    };
  };
  heroContent: {
    ctaPrimary: string;
    whatsappMessage: string;
  };
  locale: string;
}

const About: React.FC<AboutProps> = ({ content, heroContent, locale }) => {
  const handleWhatsAppClick = () => {
    const message = heroContent.whatsappMessage
      .replace('{location}', businessConfig.business.defaultLocation)
      .replace('{time}', 'bulan depan');
    const whatsappUrl = createWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  const values = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: content.values.innovation.title,
      description: content.values.innovation.description,
      gradient: "from-brass-900/20 to-brass-900/10"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: content.values.security.title,
      description: content.values.security.description,
      gradient: "from-brass-900/15 to-brass-900/5"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: content.values.simplicity.title,
      description: content.values.simplicity.description,
      gradient: "from-brass-900/10 to-transparent"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: content.values.reliability.title,
      description: content.values.reliability.description,
      gradient: "from-brass-900/25 to-brass-900/5"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-midnight-950 overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-brass-900/5 via-transparent to-brass-900/5"></div>
        </div>

        {/* Elegant geometric accent */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-brass-900 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
          <BlurFade delay={0.2}>
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-cream-50 mb-6 tracking-tight leading-[1.1]">
                {content.title}
              </h1>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-cream-50/80 max-w-3xl mx-auto leading-relaxed font-body font-light">
                {content.subtitle}
              </p>
            </motion.div>
          </BlurFade>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <BlurFade delay={0.3}>
              <MagicCard
                className="group h-full"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.06}
              >
                <div className="p-8 md:p-10 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-brand overflow-hidden mb-6 group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                      alt="Our Mission" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-midnight-950 mb-6 group-hover:text-brass-900 transition-colors duration-300">
                    {content.mission.title}
                  </h2>
                  <p className="text-midnight-900/70 font-body leading-relaxed text-lg group-hover:text-midnight-900 transition-colors duration-300">
                    {content.mission.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>

            <BlurFade delay={0.4}>
              <MagicCard
                className="group h-full"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.06}
              >
                <div className="p-8 md:p-10 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-brand overflow-hidden mb-6 group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80" 
                      alt="Our Vision" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-midnight-950 mb-6 group-hover:text-brass-900 transition-colors duration-300">
                    {content.vision.title}
                  </h2>
                  <p className="text-midnight-900/70 font-body leading-relaxed text-lg group-hover:text-midnight-900 transition-colors duration-300">
                    {content.vision.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-midnight-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-normal text-cream-50 mb-8 tracking-tight">
                {content.story.title}
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto mb-12"></div>
              <p className="text-xl md:text-2xl text-cream-50/80 leading-relaxed font-body font-light">
                {content.story.description}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-normal text-midnight-950 mb-6 tracking-tight">
                {content.values.title}
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto"></div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.1}>
                <MagicCard
                  className="group cursor-pointer h-full"
                  gradientColor="#b8860b"
                  gradientSize={150}
                  gradientOpacity={0.06}
                >
                  <div className="p-6 md:p-8 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                    <motion.div 
                      className="mb-6 w-16 h-16 rounded-brand overflow-hidden shadow-sm border border-brass-900/20 group-hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={value.image} 
                        alt={value.title} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-display font-medium text-midnight-950 mb-4 group-hover:text-brass-900 transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-midnight-900/70 font-body leading-relaxed group-hover:text-midnight-900 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-brand pointer-events-none`}></div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <BlurFade delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-normal text-midnight-950 mb-6 tracking-tight">
                {content.services.title}
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto"></div>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <BlurFade delay={0.3}>
              <MagicCard
                className="group h-full"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.06}
              >
                <div className="p-8 md:p-10 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                  <h3 className="text-2xl font-display font-medium text-midnight-950 mb-6 group-hover:text-brass-900 transition-colors duration-300">
                    {content.services.for_bookers.title}
                  </h3>
                  <ul className="space-y-4 font-body text-midnight-900/70 group-hover:text-midnight-900 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_bookers.discovery}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_bookers.support}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_bookers.booking}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_bookers.payment}
                    </li>
                  </ul>
                </div>
              </MagicCard>
            </BlurFade>

            <BlurFade delay={0.4}>
              <MagicCard
                className="group h-full"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.06}
              >
                <div className="p-8 md:p-10 h-full bg-cream-50/90 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-xl">
                  <h3 className="text-2xl font-display font-medium text-midnight-950 mb-6 group-hover:text-brass-900 transition-colors duration-300">
                    {content.services.for_artists.title}
                  </h3>
                  <ul className="space-y-4 font-body text-midnight-900/70 group-hover:text-midnight-900 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_artists.visibility}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_artists.communication}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_artists.management}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brass-900 mr-3 mt-1">•</span>
                      {content.services.for_artists.protection}
                    </li>
                  </ul>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* CTA Section */}
          <BlurFade delay={0.6}>
            <div className="text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-normal text-midnight-950 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-midnight-900/70 font-body text-lg leading-relaxed">
                  Connect with verified artists through our AI-powered WhatsApp platform
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ShimmerButton 
                  data-cta="about-whatsapp"
                  className="relative px-8 py-4 bg-midnight-950 text-brass-900 font-body font-medium text-lg rounded-brand border border-brass-900/20 shadow-xl hover:shadow-2xl hover:bg-brass-900 hover:text-midnight-950 transition-all duration-300 group"
                  shimmerColor="#b8860b"
                  shimmerSize="0.05em"
                  borderRadius="12px"
                  shimmerDuration="2s"
                  background="#0a0a0a"
                  onClick={handleWhatsAppClick}
                >
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                    {heroContent.ctaPrimary}
                  </span>
                </ShimmerButton>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default About;