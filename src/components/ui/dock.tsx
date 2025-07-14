"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockProps {
  className?: string;
  children: React.ReactNode;
}

export interface DockIconProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        className={cn(
          "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md",
          className,
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

const DockIcon = ({
  className,
  children,
  onClick,
  ...props
}: DockIconProps) => {
  return (
    <motion.div
      className={cn(
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30",
        className,
      )}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon }; 