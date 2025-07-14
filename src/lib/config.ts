// Business configuration with environment variable validation

export const businessConfig = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890',
    baseUrl: 'https://wa.me/'
  },
  business: {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'ArtistLive.id',
    defaultLocation: process.env.NEXT_PUBLIC_DEFAULT_LOCATION || 'Jakarta'
  }
};

// Validation function to ensure required environment variables are set
export const validateConfig = () => {
  const warnings: string[] = [];
  
  if (!process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) {
    warnings.push('NEXT_PUBLIC_WHATSAPP_NUMBER not set, using default number');
  }
  
  if (!process.env.NEXT_PUBLIC_DEFAULT_LOCATION) {
    warnings.push('NEXT_PUBLIC_DEFAULT_LOCATION not set, using default location');
  }
  
  if (warnings.length > 0 && typeof window === 'undefined') {
    console.warn('[ArtistLive.id Config]:', warnings.join(', '));
  }
  
  return warnings.length === 0;
};

// Helper function to generate WhatsApp URL
export const createWhatsAppUrl = (message: string): string => {
  const phoneNumber = businessConfig.whatsapp.number;
  return `${businessConfig.whatsapp.baseUrl}${phoneNumber}?text=${encodeURIComponent(message)}`;
};