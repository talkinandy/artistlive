"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface EnhancedCardProps {
  className?: string;
  children: React.ReactNode;
  gradient?: string;
  delay?: number;
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, children, gradient = "from-purple-50 to-violet-50", delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-opacity-20 p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2",
          `bg-gradient-to-br ${gradient}`,
          className,
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: delay,
          ease: "easeOut" 
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        viewport={{ once: true, margin: "-50px" }}
        {...props}
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  },
);

EnhancedCard.displayName = "EnhancedCard";

export { EnhancedCard }; 