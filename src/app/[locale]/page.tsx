import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Band & Penyanyi Live untuk Semua Acara di Indonesia',
  description: 'Book live talent in seconds. Sewa band pernikahan, band acara kantor, penyanyi solo untuk semua acara di Jakarta, Bandung, Surabaya.',
  keywords: ['sewa band', 'sewa band pernikahan', 'sewa band Jakarta', 'booking penyanyi solo', 'band acara kantor', 'jasa live music'],
  openGraph: {
    title: 'Sewa Band & Penyanyi Live untuk Semua Acara di Indonesia',
    description: 'Book live talent in seconds. Platform terpercaya untuk booking live musicians dan penyanyi profesional.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Hero } from '@/components/sections/Hero';
import Artists from '@/components/sections/Artists';
import Services from '@/components/sections/Services';
import { PremiumFooter } from '@/components/ui';
import FloatingWhatsAppCTA from '@/components/ui/floating-whatsapp-cta';

// Import translations
import idCommon from '../../../locales/id/common.json';
import enCommon from '../../../locales/en/common.json';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  
  // Get translations based on locale
  const t = locale === 'id' ? idCommon : enCommon;

  return (
    <main className="min-h-screen">
      {/* Language Switcher - positioned absolutely in top right */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageSwitcher currentLocale={locale} />
      </div>
      
      {/* Hero Section */}
      <section id="hero">
        <Hero content={t.hero} locale={locale} />
      </section>

      {/* Artists Section */}
      <section id="artists">
        <Artists content={t.artists} />
      </section>

      {/* Service Categories */}
      <Services content={t.services} />

      {/* Smart WhatsApp CTA - appears when hero CTA is out of view */}
      <FloatingWhatsAppCTA content={t.hero} locale={locale} />

      {/* Premium Footer */}
      <PremiumFooter copyright={`© 2025 ArtistLive.id. ${t.footer.rights}`} />
    </main>
  );
} 