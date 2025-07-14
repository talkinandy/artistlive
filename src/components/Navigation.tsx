'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavigationProps {
  locale: string;
  translations: {
    navigation: {
      home: string;
      about: string;
    };
  };
}

const Navigation: React.FC<NavigationProps> = ({ locale, translations }) => {
  const pathname = usePathname();
  
  const navItems = [
    {
      href: `/${locale}`,
      label: translations.navigation.home,
      isActive: pathname === `/${locale}`
    },
    {
      href: `/${locale}/about`,
      label: translations.navigation.about,
      isActive: pathname === `/${locale}/about`
    }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative group"
        >
          <motion.span
            className={`font-body font-medium transition-colors duration-300 ${
              item.isActive 
                ? 'text-brass-900' 
                : 'text-cream-50 hover:text-brass-900'
            }`}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {item.label}
          </motion.span>
          
          {/* Active indicator */}
          {item.isActive && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-brass-900"
              layoutId="activeIndicator"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;