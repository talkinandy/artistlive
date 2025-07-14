import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import '@/styles/globals.css';

// Brand Identity Typography
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

// Metadata generation function based on locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadata = {
    id: {
      title: {
        default: 'ArtistLive.id - Sewa Band & Penyanyi Live untuk Acara',
        template: '%s | ArtistLive.id',
      },
      description: 'Platform booking live musicians dan penyanyi untuk acara pernikahan, kantor, dan event di Indonesia. Book live talent in seconds.',
      keywords: ['sewa band', 'sewa band pernikahan', 'sewa band Jakarta', 'booking penyanyi', 'live music', 'band acara kantor'],
      openGraph: {
        title: 'ArtistLive.id - Sewa Band & Penyanyi Live untuk Acara',
        description: 'Platform booking live musicians dan penyanyi untuk acara pernikahan, kantor, dan event di Indonesia.',
        locale: 'id_ID',
      },
      twitter: {
        title: 'ArtistLive.id - Sewa Band & Penyanyi Live untuk Acara',
        description: 'Platform booking live musicians dan penyanyi untuk acara pernikahan, kantor, dan event di Indonesia.',
      },
    },
    en: {
      title: {
        default: 'ArtistLive.id - Book Live Bands & Singers for Events',
        template: '%s | ArtistLive.id',
      },
      description: 'Live music booking platform for weddings, corporate events, and parties in Indonesia. Professional musicians and singers available.',
      keywords: ['book live band', 'wedding musicians', 'corporate entertainment', 'live music booking', 'Indonesia events', 'professional singers'],
      openGraph: {
        title: 'ArtistLive.id - Book Live Bands & Singers for Events',
        description: 'Live music booking platform for weddings, corporate events, and parties in Indonesia. Professional musicians and singers available.',
        locale: 'en_US',
      },
      twitter: {
        title: 'ArtistLive.id - Book Live Bands & Singers for Events',
        description: 'Live music booking platform for weddings, corporate events, and parties in Indonesia. Professional musicians and singers available.',
      },
    },
  };

  const currentMetadata = metadata[locale as keyof typeof metadata] || metadata.id;

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    authors: [{ name: 'ArtistLive.id' }],
    creator: 'ArtistLive.id',
    publisher: 'ArtistLive.id',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://artistlive.id'),
    alternates: {
      canonical: locale === 'id' ? '/' : `/${locale}`,
      languages: {
        'id-ID': '/',
        'en-US': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: currentMetadata.openGraph.locale,
      url: locale === 'id' ? 'https://artistlive.id' : `https://artistlive.id/${locale}`,
      title: currentMetadata.openGraph.title,
      description: currentMetadata.openGraph.description,
      siteName: 'ArtistLive.id',
      images: [
        {
          url: '/images/logo/with_padding.png',
          width: 1200,
          height: 630,
          alt: 'ArtistLive.id - Live Music Booking Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.twitter.title,
      description: currentMetadata.twitter.description,
      creator: '@artistlive_id',
      images: ['/images/logo/with_padding.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#0a0a0a" /> {/* Premium Brand Identity: Midnight Black */}
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="id-ID" href="https://artistlive.id/" />
        <link rel="alternate" hrefLang="en-US" href="https://artistlive.id/en" />
        <link rel="alternate" hrefLang="x-default" href="https://artistlive.id/" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
} 