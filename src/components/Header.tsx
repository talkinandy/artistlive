'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  locale: string;
  translations: {
    navigation: {
      home: string;
      about: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ locale, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-midnight-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="group">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-2xl">🎵</div>
              <span className="text-xl md:text-2xl font-display font-medium text-cream-50 group-hover:text-brass-900 transition-colors duration-300">
                ArtistLive.id
              </span>
            </motion.div>
          </Link>

          {/* Navigation & Language Switcher */}
          <div className="flex items-center space-x-6">
            <Navigation locale={locale} translations={translations} />
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;