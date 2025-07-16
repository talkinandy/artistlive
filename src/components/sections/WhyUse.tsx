'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlurFade from '@/components/ui/blur-fade';

interface WhyUseProps {
  content: {
    title: string;
    subtitle: string;
    verified: {
      title: string;
      problem: string;
      solution: string;
    };
    transparent: {
      title: string;
      problem: string;
      solution: string;
    };
    smart: {
      title: string;
      problem: string;
      solution: string;
    };
    automated: {
      title: string;
      problem: string;
      solution: string;
    };
  };
}

const WhyUse: React.FC<WhyUseProps> = ({ content }) => {
  const features = [
    {
      ...content.verified,
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: "from-emerald-500/10 to-emerald-500/5"
    },
    {
      ...content.transparent,
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-blue-500/10 to-blue-500/5"
    },
    {
      ...content.smart,
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      gradient: "from-purple-500/10 to-purple-500/5"
    },
    {
      ...content.automated,
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-orange-500/10 to-orange-500/5"
    }
  ];

  return (
    <section id="why-use" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
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
            <h2 className="text-4xl md:text-5xl font-display font-normal text-slate-900 mb-6 tracking-tight">
              {content.title}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto font-body leading-relaxed">
              {content.subtitle}
            </p>
          </motion.div>
        </BlurFade>
        
        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.1}>
              <motion.div 
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden h-full"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200/50">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-display font-medium text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 font-body leading-relaxed">
                        {feature.problem}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 font-body leading-relaxed font-medium">
                        {feature.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUse;