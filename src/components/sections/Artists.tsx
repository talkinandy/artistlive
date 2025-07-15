'use client';

import { motion } from 'framer-motion';
import { H2, Lead } from '@/components/ui';
import { Card } from '@/components/ui';
import BlurFade from '@/components/ui/blur-fade';
import { MagicCard } from '@/components/ui/magic-card';
import Marquee from '@/components/magicui/marquee';

interface ArtistsProps {
  content: {
    title: string;
    subtitle: string;
    joinText: string;
    placeholder: {
      name: string;
      genre: string;
    };
  };
}

const Artists: React.FC<ArtistsProps> = ({ content }) => {
  // Featured Indonesian artists
  const featuredArtists = [
    {
      id: 1,
      name: "Indra Lesmana",
      genre: "Jazz & Fusion",
      image: "/images/artists/indralesmana.webp",
      verified: true
    },
    {
      id: 2,
      name: "Lalahuta",
      genre: "Pop & Acoustic",
      image: "/images/artists/lalahuta.webp",
      verified: true
    },
    {
      id: 3,
      name: "Titi DJ",
      genre: "Pop & R&B",
      image: "/images/artists/titidj.webp",
      verified: true
    },
    {
      id: 4,
      name: "Andien",
      genre: "Jazz & Soul",
      image: "/images/artists/andien.webp",
      verified: true
    },
    {
      id: 5,
      name: "Andra & The Backbone",
      genre: "Rock & Alternative",
      image: "/images/artists/andrathebackbone.webp",
      verified: true
    },
    {
      id: 6,
      name: "Balawan",
      genre: "Jazz & World Music",
      image: "/images/artists/balawan.webp",
      verified: true
    },
    {
      id: 7,
      name: "Tohpati",
      genre: "Jazz & Progressive",
      image: "/images/artists/tohpati.webp",
      verified: true
    },
    {
      id: 8,
      name: "Andra Ramadhan",
      genre: "Rock & Pop",
      image: "/images/artists/andraramadhan.webp",
      verified: true
    },
    {
      id: 9,
      name: "Dewa Budjana",
      genre: "Progressive Rock",
      image: "/images/artists/dewabudjana.webp",
      verified: true
    },
    {
      id: 10,
      name: "Erwin Gutawa",
      genre: "Orchestra & Classical",
      image: "/images/artists/erwingutawa.webp",
      verified: true
    },
    {
      id: 11,
      name: "God Bless",
      genre: "Classic Rock",
      image: "/images/artists/godbless.webp",
      verified: true
    },
    {
      id: 12,
      name: "Monita Tahalea",
      genre: "Jazz & Pop",
      image: "/images/artists/monita.webp",
      verified: true
    },
    {
      id: 13,
      name: "Eros Scandra",
      genre: "Pop & Ballad",
      image: "/images/artists/erosscandra.webp",
      verified: true
    },
    {
      id: 14,
      name: "Echa Soemantri",
      genre: "Jazz & Instrumental",
      image: "/images/artists/echasoemantri.webp",
      verified: true
    },
    {
      id: 15,
      name: "Bintang Indrianto",
      genre: "Jazz & Fusion",
      image: "/images/artists/bintangindrianto.webp",
      verified: true
    },
    {
      id: 16,
      name: "Alfariizi",
      genre: "Contemporary & Pop",
      image: "/images/artists/alfariizi.webp",
      verified: true
    },
    {
      id: 17,
      name: "Ridho Slank",
      genre: "Rock & Alternative",
      image: "/images/artists/ridho.webp",
      verified: true
    }
  ];

  return (
    <section className="relative bg-midnight-950 overflow-hidden">
      {/* Background Image - Full Section Coverage */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/band-performance.jpg" 
          alt="Live band performance"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/50 via-midnight-950/70 to-midnight-950"></div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center text-center px-4">
        <BlurFade delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brass-900 to-transparent mx-auto mb-6"></div>
            <H2 className="mb-4 text-cream-50 font-display font-normal text-4xl md:text-5xl lg:text-6xl tracking-tight">
              {content.title}
            </H2>
            <p className="text-cream-50/80 text-lg md:text-xl max-w-2xl mx-auto font-body font-light leading-relaxed">
              {content.subtitle}
            </p>
          </motion.div>
        </BlurFade>
      </div>
      
      {/* Artists Marquee Section */}
      <div className="py-12 md:py-16 relative z-10">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-midnight-950 via-transparent to-midnight-950"></div>
        </div>
        
        <div className="relative">
          {/* Artists Marquee */}
          <Marquee pauseOnHover className="[--duration:30s]">
            {featuredArtists.map((artist, index) => (
              <MagicCard
                key={artist.id}
                className="group cursor-pointer mx-4 w-80 flex-shrink-0"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.08}
              >
                <div className="p-6 md:p-8 h-full bg-midnight-900/80 backdrop-blur-sm rounded-brand border border-brass-900/30 transition-all duration-300 hover:bg-midnight-900/90 hover:border-brass-900/50 hover:shadow-2xl hover:shadow-brass-900/20">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brass-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-brand"></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Artist Avatar/Photo */}
                    <motion.div 
                      className="w-16 h-16 rounded-brand overflow-hidden shadow-lg border border-brass-900/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Artist Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.h3 
                          className="font-display font-medium text-lg text-cream-50 group-hover:text-brass-900 transition-colors duration-300"
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
                      <p className="text-sm md:text-sm text-cream-50/70 group-hover:text-cream-50 transition-colors duration-300 font-body">
                        {artist.genre}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating action hint */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-xs text-brass-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Book Now →
                  </motion.div>
                </div>
              </MagicCard>
            ))}
          </Marquee>
          
          {/* Second row marquee moving in reverse */}
          <Marquee reverse pauseOnHover className="[--duration:35s] mt-8">
            {featuredArtists.slice().reverse().map((artist, index) => (
              <MagicCard
                key={`reverse-${artist.id}`}
                className="group cursor-pointer mx-4 w-80 flex-shrink-0"
                gradientColor="#b8860b"
                gradientSize={200}
                gradientOpacity={0.08}
              >
                <div className="p-6 md:p-8 h-full bg-midnight-900/80 backdrop-blur-sm rounded-brand border border-brass-900/30 transition-all duration-300 hover:bg-midnight-900/90 hover:border-brass-900/50 hover:shadow-2xl hover:shadow-brass-900/20">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brass-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-brand"></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Artist Avatar/Photo */}
                    <motion.div 
                      className="w-16 h-16 rounded-brand overflow-hidden shadow-lg border border-brass-900/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Artist Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.h3 
                          className="font-display font-medium text-lg text-cream-50 group-hover:text-brass-900 transition-colors duration-300"
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
                      <p className="text-sm md:text-sm text-cream-50/70 group-hover:text-cream-50 transition-colors duration-300 font-body">
                        {artist.genre}
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating action hint */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-xs text-brass-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Book Now →
                  </motion.div>
                </div>
              </MagicCard>
            ))}
          </Marquee>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative mt-8">

          {/* Join Text */}
          <BlurFade delay={0.8}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brass-900/20 bg-brass-900/5 backdrop-blur-sm">
                <span className="w-2 h-2 bg-brass-900 rounded-full"></span>
                <p className="text-cream-50/80 font-body text-base">
                  {content.joinText}
                </p>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Artists; 