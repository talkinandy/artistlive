'use client';

import { ShimmerButton } from '@/components/ui/shimmer-button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { createWhatsAppUrl, businessConfig } from '@/lib/config';

interface HeroProps {
  content: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    whatsappMessage: string;
    trustIndicators: {
      instant: string;
      professional: string;
      guarantee: string;
    };
  };
  locale: string;
}

export function Hero({ content, locale }: HeroProps) {
  const handleWhatsAppClick = () => {
    const message = content.whatsappMessage
      .replace('{location}', businessConfig.business.defaultLocation)
      .replace('{time}', 'bulan depan');
    const whatsappUrl = createWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-midnight-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/concert-hero.jpg" 
          alt="Live concert performance"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/70 via-midnight-950/85 to-midnight-950"></div>
      </div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="w-full h-full bg-gradient-to-br from-brass-900/5 via-transparent to-brass-900/5"></div>
      </div>
      
      {/* Elegant geometric accent */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-1 h-24 bg-gradient-to-b from-transparent via-brass-900 to-transparent opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        
        {/* Premium Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brass-900/20 bg-brass-900/5 backdrop-blur-sm mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 bg-brass-900 rounded-full"></span>
          <span className="text-brass-900 font-body text-sm tracking-wide">
            {locale === 'id' ? 'Live Entertainment Premium' : 'Premium Live Entertainment'}
          </span>
        </motion.div>

        {/* Hero Title - Sophisticated Typography */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-normal text-cream-50 leading-[1.1] tracking-tight mb-6">
            {content.headline}
          </h1>
          
          {/* Elegant underline accent */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto mb-8"></div>
        </motion.div>

        {/* Sophisticated Description */}
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-cream-50/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-body font-light tracking-wide px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {content.subheadline}
        </motion.p>

        {/* Premium CTA Section */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ShimmerButton 
            id="hero-whatsapp-cta"
            className="relative px-8 py-3 md:px-12 md:py-4 bg-whatsapp text-white font-body font-medium text-base md:text-lg rounded-brand border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto"
            shimmerColor="#25D366"
            shimmerSize="0.05em"
            borderRadius="8px"
            shimmerDuration="2s"
            background="#25D366"
            onClick={handleWhatsAppClick}
          >
            <span className="relative z-10 flex items-center gap-2 md:gap-3 justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              {content.ctaPrimary}
            </span>
          </ShimmerButton>

          <button className="px-8 py-3 md:px-12 md:py-4 border border-brass-900/30 text-brass-900 hover:bg-brass-900/10 transition-all duration-300 rounded-brand font-body font-medium text-base md:text-lg backdrop-blur-sm w-full sm:w-auto">
            {locale === 'id' ? 'Lihat Portofolio' : 'View Portfolio'}
          </button>
        </motion.div>

        {/* Refined Trust Indicators */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brass-900/10 flex items-center justify-center group-hover:bg-brass-900/20 transition-colors duration-300">
              <div className="w-6 h-6 rounded-full bg-brass-900"></div>
            </div>
            <h3 className="text-cream-50 font-display text-lg mb-2">
              {content.trustIndicators.instant}
            </h3>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brass-900/10 flex items-center justify-center group-hover:bg-brass-900/20 transition-colors duration-300">
              <div className="w-6 h-6 rounded-full bg-brass-900"></div>
            </div>
            <h3 className="text-cream-50 font-display text-lg mb-2">
              {content.trustIndicators.professional}
            </h3>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brass-900/10 flex items-center justify-center group-hover:bg-brass-900/20 transition-colors duration-300">
              <div className="w-6 h-6 rounded-full bg-brass-900"></div>
            </div>
            <h3 className="text-cream-50 font-display text-lg mb-2">
              {content.trustIndicators.guarantee}
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Elegant bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-900 to-transparent pointer-events-none"></div>
    </section>
  );
}