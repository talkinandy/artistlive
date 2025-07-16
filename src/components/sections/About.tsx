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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
        </svg>
      ),
      title: content.values.innovation.title,
      description: content.values.innovation.description,
      gradient: "from-brass-900/20 to-brass-900/10"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
        </svg>
      ),
      title: content.values.security.title,
      description: content.values.security.description,
      gradient: "from-brass-900/15 to-brass-900/5"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
        </svg>
      ),
      title: content.values.simplicity.title,
      description: content.values.simplicity.description,
      gradient: "from-brass-900/10 to-transparent"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
        </svg>
      ),
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
                  <div className="w-16 h-16 bg-gradient-to-br from-brass-900/10 to-brass-900/20 rounded-brand flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="text-brass-900">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                      <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg>
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
                  <div className="w-16 h-16 bg-gradient-to-br from-brass-900/10 to-brass-900/20 rounded-brand flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="text-brass-900">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
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
                      className="mb-6 w-16 h-16 bg-gradient-to-br from-brass-900/10 to-brass-900/20 rounded-brand flex items-center justify-center shadow-sm border border-brass-900/20 group-hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="text-brass-900">
                        {value.icon}
                      </div>
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