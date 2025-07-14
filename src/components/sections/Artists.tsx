'use client';

import { motion } from 'framer-motion';
import { H2, Lead } from '@/components/ui';
import { Card } from '@/components/ui';
import BlurFade from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';

interface ArtistsProps {
  content: {
    title: string;
    subtitle: string;
    joinText: string;
    placeholder: {
      name: string;
      genre: string;
      location: string;
    };
  };
}

const Artists: React.FC<ArtistsProps> = ({ content }) => {
  // Sample artist data - in real app this would come from an API
  const featuredArtists = [
    {
      id: 1,
      name: "The Jakarta Sessions",
      genre: "Jazz & Acoustic",
      location: "Jakarta",
      image: "🎷",
      verified: true,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      name: "Bali Vibes Band",
      genre: "Reggae & Pop",
      location: "Bali",
      image: "🎸",
      verified: true,
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      name: "Sarah Melody",
      genre: "Wedding Singer",
      location: "Surabaya",
      image: "🎤",
      verified: true,
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: 4,
      name: "Corporate Sounds",
      genre: "Corporate Music",
      location: "Jakarta",
      image: "🎹",
      verified: true,
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: 5,
      name: "Traditional Fusion",
      genre: "Traditional & Modern",
      location: "Yogyakarta",
      image: "🥁",
      verified: true,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 6,
      name: "Event Masters",
      genre: "All Genres",
      location: "Bandung",
      image: "🎵",
      verified: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-24 bg-midnight-900 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-midnight-950 via-transparent to-midnight-950"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Section Header */}
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <H2 className="mb-4 text-cream-50 font-display font-normal">
                {content.title}
              </H2>
              <p className="text-cream-50/70 text-xl max-w-2xl mx-auto font-body font-light">
                {content.subtitle}
              </p>
            </motion.div>
          </div>
        </BlurFade>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredArtists.map((artist, index) => (
            <BlurFade key={artist.id} delay={0.3 + index * 0.1}>
              <MagicCard
                className="group cursor-pointer"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.08}
              >
                <div className="p-6 md:p-8 h-full bg-cream-50/95 backdrop-blur-sm rounded-brand border border-brass-900/10 transition-all duration-300 hover:bg-cream-50 hover:border-brass-900/20 hover:shadow-2xl">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brass-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-brand"></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Artist Avatar/Icon */}
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-brass-900/10 to-brass-900/20 rounded-brand flex items-center justify-center text-2xl shadow-lg border border-brass-900/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {artist.image}
                    </motion.div>
                    
                    {/* Artist Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.h3 
                          className="font-display font-medium text-lg text-midnight-950 group-hover:text-brass-900 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {artist.name}
                        </motion.h3>
                        {artist.verified && (
                          <motion.span 
                            className="text-brass-900 text-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            ✓
                          </motion.span>
                        )}
                      </div>
                      <p className="text-sm md:text-sm text-midnight-900/70 mb-1 group-hover:text-midnight-900 transition-colors duration-300 font-body">
                        {artist.genre}
                      </p>
                      <p className="text-sm md:text-xs text-midnight-900/60 flex items-center gap-1 group-hover:text-midnight-900/80 transition-colors duration-300 font-body">
                        📍 {artist.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating action hint */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-xs text-brass-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    View Profile →
                  </motion.div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* Join Text */}
        <BlurFade delay={0.8}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-cream-50/70 font-body text-lg">
              {content.joinText}
            </p>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Artists; 