/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ArtistLive.id Premium Brand Colors (Luxury Jazz Aesthetic)
        // Midnight Black - Primary Background
        midnight: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#2a2a2a',
          950: '#0a0a0a', // Primary Midnight Black
        },
        // Warm Cream - Primary Text & Card Backgrounds
        cream: {
          50: '#faf8f5',
          100: '#f5f2eb',
          200: '#ebe4d5',
          300: '#ddd2b8',
          400: '#cbb898',
          500: '#b8a182',
          600: '#a08870',
          700: '#85705d',
          800: '#6c5b4e',
          900: '#574b42',
        },
        // Warm Brass - Premium Accent
        brass: {
          50: '#fefdf9',
          100: '#fef9eb',
          200: '#fdf0c7',
          300: '#fbe298',
          400: '#f8ce66',
          500: '#f4b53f',
          600: '#e59818',
          700: '#c17d14',
          800: '#9c6317',
          900: '#b8860b', // Primary Warm Brass
        },
        // Legacy colors for compatibility
        charcoal: '#2a2a2a',
        whatsapp: '#25D366',
        
        // System Colors (keeping shadcn/ui compatibility)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors from brand identity
        'royal-indigo': '#6366F1',
        'deep-gold': '#D4AF37',
        'charcoal': '#2D3748',
        'ghost-white': '#F8FAFC',
        'whatsapp': '#25D366',
        
        // Extended palette
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Premium Brand Identity: 8px radius for refined elegance
        'brand': '8px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      fontFamily: {
        // Premium Brand Identity Typography
        sans: ["var(--font-lato)", "Lato", "sans-serif"], // Body copy
        serif: ["var(--font-playfair)", "Playfair Display", "serif"], // Premium headlines
        display: ["var(--font-playfair)", "Playfair Display", "serif"], // Display/headings
        body: ["var(--font-lato)", "Lato", "sans-serif"], // Body text
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      fontWeight: {
        // Playfair Display weights (400-700 for display)
        'display': '400',
        'display-medium': '500',
        'display-semibold': '600',
        'display-bold': '700',
        // Lato weights (300-900 for body)
        'body-light': '300',
        'body': '400',
        'body-bold': '700',
        'body-black': '900',
      },
      animation: {
        // Brand Identity: Subtle fade-up ≤ 150ms
        "fade-up": "fade-up 0.15s ease-out",
        "fade-down": "fade-down 0.15s ease-out", 
        "fade-in": "fade-in 0.15s ease-out",
        "slide-up": "slide-up 0.15s ease-out",
        "slide-down": "slide-down 0.15s ease-out",
        // Micro-interactions (≤ 150ms per brand guidelines)
        "micro-scale": "micro-scale 0.1s ease-out",
        "micro-bounce": "micro-bounce 0.1s ease-out",
        "micro-glow": "micro-glow 0.1s ease-out",
        // Longer animations for ambient effects
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        // MagicUI animations
        gradient: "gradient 8s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed)*2) infinite linear",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "micro-scale": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "micro-bounce": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-2px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "micro-glow": {
          "0%": {
            boxShadow: "0 0 0 rgba(75, 59, 255, 0)",
          },
          "50%": {
            boxShadow: "0 0 8px rgba(75, 59, 255, 0.3)",
          },
          "100%": {
            boxShadow: "0 0 0 rgba(75, 59, 255, 0)",
          },
        },
        "bounce-soft": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotateZ(0deg)",
            opacity: "0",
          },
          "33%": {
            transform: "translate3d(30px, -30px, 0) rotateZ(120deg)",
            opacity: "1",
          },
          "66%": {
            transform: "translate3d(-20px, 20px, 0) rotateZ(240deg)",
            opacity: "1",
          },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 