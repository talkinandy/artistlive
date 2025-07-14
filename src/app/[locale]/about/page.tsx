import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/sections/About';
import { PremiumFooter } from '@/components/ui';
import FloatingWhatsAppCTA from '@/components/ui/floating-whatsapp-cta';

// Import translations
import idCommon from '../../../../locales/id/common.json';
import enCommon from '../../../../locales/en/common.json';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'id' 
    ? 'Tentang Kami - ArtistLive.id | Platform Booking Artis Terpercaya'
    : 'About Us - ArtistLive.id | Trusted Artist Booking Platform';
    
  const description = locale === 'id'
    ? 'Pelajari lebih lanjut tentang ArtistLive.id, platform booking artis terdepan di Indonesia. Misi kami adalah menghubungkan talenta terbaik dengan acara istimewa Anda.'
    : 'Learn more about ArtistLive.id, Indonesia\'s leading artist booking platform. Our mission is to connect the finest talents with your special events.';

  return {
    title,
    description,
    keywords: locale === 'id' 
      ? ['tentang artistlive', 'platform booking artis', 'misi visi artistlive', 'layanan booking musik indonesia']
      : ['about artistlive', 'artist booking platform', 'artistlive mission vision', 'music booking services indonesia'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'id': '/id/about',
        'en': '/en/about',
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  
  // Get translations based on locale
  const t = locale === 'id' ? idCommon : enCommon;

  return (
    <main className="min-h-screen">
      {/* Header with Navigation */}
      <Header locale={locale} translations={t} />
      
      <About 
        content={t.about} 
        heroContent={t.hero}
        locale={locale} 
      />
      
      {/* Premium Footer */}
      <PremiumFooter copyright={`© 2025 ArtistLive.id. ${t.footer.rights}`} />
      
      {/* Smart WhatsApp CTA - appears when hero CTA is out of view */}
      <FloatingWhatsAppCTA content={t.hero} locale={locale} />
    </main>
  );
}