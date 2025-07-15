'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MorphingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function MorphingText({ words, className, interval = 3000 }: MorphingTextProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (words.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [words.length, interval]);

  if (words.length === 0) return null;

  return (
    <span className={cn("inline-block min-h-[1em]", className)}>
      <span
        key={currentWord}
        className="inline-block animate-in fade-in-0 slide-in-from-bottom-1 duration-500"
      >
        {words[currentWord]}
      </span>
    </span>
  );
}