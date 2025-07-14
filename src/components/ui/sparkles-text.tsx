"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

export function SparklesText({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSpark = (): Sparkle => ({
      id: `${Math.random()}-${Date.now()}`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 ? colors.first : colors.second,
      delay: Math.random() * 2,
      scale: Math.random() * 1 + 0.3,
      lifespan: Math.random() * 10 + 5,
    });

    const initializeSparkles = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateSpark);
      setSparkles(newSparkles);
    };

    const interval = setInterval(() => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((sparkle) =>
          Math.random() > 0.8 ? generateSpark() : sparkle,
        ),
      );
    }, 3000);

    initializeSparkles();

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <svg
            key={sparkle.id}
            className="pointer-events-none absolute animate-float"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.lifespan}s`,
              transform: `scale(${sparkle.scale})`,
            }}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0001 3.84615L12.7693 8.46154H17.6924L13.4616 11.5385L15.2308 16.1538L11.0001 13.0769L6.76925 16.1538L8.53848 11.5385L4.30771 8.46154H9.23079L11.0001 3.84615Z"
              fill={sparkle.color}
            />
          </svg>
        ))}
      </span>
    </div>
  );
} 