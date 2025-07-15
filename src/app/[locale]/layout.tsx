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
        default: 'ArtistLive.id - Book Band Terkenal, Penyanyi Solo & Selebritis untuk Konser',
        template: '%s | ArtistLive.id',
      },
      description: 'Platform terpercaya untuk booking band terkenal, penyanyi solo, dan selebritis untuk konser dan semua acara. Musisi profesional seperti Indra Lesmana, Titi DJ, Andien tersedia.',
      keywords: ['book band terkenal', 'sewa penyanyi solo', 'booking selebritis', 'konser', 'Indra Lesmana', 'Titi DJ', 'Andien', 'Andra and The Backbone', 'Balawan', 'musisi profesional'],
      openGraph: {
        title: 'ArtistLive.id - Book Band Terkenal, Penyanyi Solo & Selebritis untuk Konser',
        description: 'Platform terpercaya untuk booking band terkenal, penyanyi solo, dan selebritis untuk konser dan semua acara. Musisi profesional tersedia.',
        locale: 'id_ID',
      },
      twitter: {
        title: 'ArtistLive.id - Book Band Terkenal, Penyanyi Solo & Selebritis untuk Konser',
        description: 'Platform terpercaya untuk booking band terkenal, penyanyi solo, dan selebritis untuk konser dan semua acara.',
      },
    },
    en: {
      title: {
        default: 'ArtistLive.id - Book Live Bands, Solo Musicians & Celebrities for Concerts',
        template: '%s | ArtistLive.id',
      },
      description: 'Trusted platform for booking live bands, solo musicians, and celebrities for concerts and all events. Professional artists like Indra Lesmana, Titi DJ, Andien available.',
      keywords: ['book live band', 'solo musicians', 'celebrity booking', 'concerts', 'Indra Lesmana', 'Titi DJ', 'Andien', 'Indonesian artists', 'professional musicians', 'event entertainment'],
      openGraph: {
        title: 'ArtistLive.id - Book Live Bands, Solo Musicians & Celebrities for Concerts',
        description: 'Trusted platform for booking live bands, solo musicians, and celebrities for concerts and all events. Professional artists available.',
        locale: 'en_US',
      },
      twitter: {
        title: 'ArtistLive.id - Book Live Bands, Solo Musicians & Celebrities for Concerts',
        description: 'Trusted platform for booking live bands, solo musicians, and celebrities for concerts and all events.',
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