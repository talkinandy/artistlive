'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './ui/Logo';

interface HeaderProps {
  locale: string;
  translations: {
    navigation: {
      home: string;
      services: string;
      about: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ locale, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    {
      href: `/${locale}`,
      label: translations.navigation.home,
      isActive: pathname === `/${locale}`
    },
    {
      href: `/${locale}#why-use`,
      label: translations.navigation.services,
      isActive: false
    },
    {
      href: `/${locale}/about`,
      label: translations.navigation.about,
      isActive: pathname === `/${locale}/about`
    }
  ];

  return (
    <>
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
            <Logo 
              locale={locale} 
              variant="white" 
              size="sm" 
              href={`/${locale}`}
              showText={false}
            />

            {/* Desktop Navigation & Language Switcher */}
            <div className="hidden md:flex items-center space-x-6">
              <Navigation locale={locale} translations={translations} />
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Menu Button & Language Switcher */}
            <div className="flex md:hidden items-center space-x-4">
              <LanguageSwitcher currentLocale={locale} />
              
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-6 h-6 focus:outline-none"
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-cream-50 transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-cream-50 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-cream-50 transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-midnight-950/90 backdrop-blur-md z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 left-0 right-0 bg-midnight-950/95 backdrop-blur-md border-t border-brass-900/20 z-30 md:hidden"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <nav className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                          item.isActive
                            ? 'bg-brass-900/20 text-brass-900 border border-brass-900/30'
                            : 'text-cream-50 hover:bg-brass-900/10 hover:text-brass-900'
                        }`}
                      >
                        <span className="font-body font-medium text-lg">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;