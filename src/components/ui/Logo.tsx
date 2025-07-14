'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  locale: string;
  variant?: 'default' | 'white' | 'black' | 'symbol-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  locale, 
  variant = 'default', 
  size = 'md', 
  className = '',
  showText = true,
  href
}) => {
  const sizeConfig = {
    sm: {
      logo: { width: 80, height: 80 },
      text: 'text-lg',
      spacing: 'space-x-2'
    },
    md: {
      logo: { width: 120, height: 120 },
      text: 'text-xl md:text-2xl',
      spacing: 'space-x-3'
    },
    lg: {
      logo: { width: 160, height: 160 },
      text: 'text-2xl md:text-3xl',
      spacing: 'space-x-4'
    }
  };

  const logoSrc = {
    'default': '/images/logo/noBgColor.png',
    'white': '/images/logo/noBgWhite.png', 
    'black': '/images/logo/noBgBlack.png',
    'symbol-only': '/images/logo/symbol.svg'
  };

  const textColorClass = {
    'default': 'text-cream-50 group-hover:text-brass-900',
    'white': 'text-cream-50 group-hover:text-brass-900',
    'black': 'text-midnight-950 group-hover:text-brass-900',
    'symbol-only': 'text-cream-50 group-hover:text-brass-900'
  };

  const config = sizeConfig[size];
  
  const logoContent = (
    <motion.div
      className={`flex items-center ${config.spacing} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={logoSrc[variant]}
        alt="ArtistLive.id"
        width={config.logo.width}
        height={config.logo.height}
        className="object-contain"
        priority
      />
      {showText && variant !== 'symbol-only' && (
        <span className={`${config.text} font-display font-medium ${textColorClass[variant]} transition-colors duration-300`}>
          ArtistLive.id
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;