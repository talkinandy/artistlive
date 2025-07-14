"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PremiumFooterProps {
  className?: string;
  copyright: string;
}

const PremiumFooter = React.forwardRef<HTMLDivElement, PremiumFooterProps>(
  ({ className, copyright, ...props }, ref) => {
    return (
      <motion.footer
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-midnight-950 text-cream-50",
          className,
        )}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        {...props}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-brass-900/5 via-transparent to-brass-900/5"></div>
        </div>

        {/* Elegant geometric accents */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            {/* Brand */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-normal text-cream-50 mb-2">
                ArtistLive.id
              </h3>
              <div className="w-12 h-px bg-brass-900 mx-auto"></div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-cream-50/70 max-w-2xl mx-auto font-body font-light leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Bringing celebrity-level talent to your events with sophisticated booking experience
            </motion.p>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-2 text-cream-50/60">
                <span className="w-2 h-2 bg-brass-900 rounded-full"></span>
                <span className="font-body">Live Booking</span>
              </span>
              <span className="flex items-center gap-2 text-cream-50/60">
                <span className="w-2 h-2 bg-brass-900 rounded-full"></span>
                <span className="font-body">Verified Artists</span>
              </span>
              <span className="flex items-center gap-2 text-cream-50/60">
                <span className="w-2 h-2 bg-brass-900 rounded-full"></span>
                <span className="font-body">Premium Quality</span>
              </span>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="pt-8 border-t border-brass-900/20"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-cream-50/60 font-body text-sm">{copyright}</p>
            </motion.div>
          </div>
        </div>

        {/* Elegant bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent"></div>
      </motion.footer>
    );
  },
);

PremiumFooter.displayName = "PremiumFooter";

export { PremiumFooter }; 