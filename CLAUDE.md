# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server, but make sure it hasn't already run in the background from other terminal if claude want to run this.
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint           # Check for linting issues
npm run lint:fix       # Fix auto-fixable linting issues

# Type checking
npm run type-check     # Run TypeScript type checking
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.1 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: MagicUI components and custom UI components
- **Internationalization**: Next.js native i18n (Indonesian/English)
- **Animation**: Framer Motion

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/          # Page sections (Hero, Artists, Services)
│   ├── ui/               # Reusable UI components
│   └── base/             # Base component patterns
├── lib/                  # Utilities and shared logic
├── middleware.ts         # Next.js middleware for i18n
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

### Internationalization
- Default locale: Indonesian (`id`)
- Secondary locale: English (`en`)
- Route structure: `/[locale]/page` (e.g., `/id/`, `/en/`)
- Middleware handles automatic locale detection and redirection
- Translation files in `/locales/` directory

### Design System & Brand
- **Primary Colors**: 
  Primary	Midnight Black	#0a0a0a	Main backgrounds, sophisticated depth.
  Secondary	Warm Cream	#faf8f5	Primary text, card backgrounds, clean contrast.
  Accent	Warm Brass	#b8860b	Highlights, hover states, premium accents. Evokes jazz instruments.
  Support	Deep Charcoal	#2a2a2a	Secondary backgrounds, subtle contrasts.
  Trust/CTA	WhatsApp Green	#25D366	Primary booking CTA only.
- **Typography**: Poppins (display/headings), Inter (body text)
- **Component Patterns**: 12px border radius, subtle animations ≤150ms
- **Brand Voice**: Premium, professional, Indonesian-focused
- **WhatsApp CTA**: Primary conversion action (#25D366)

### Code Style & Configuration
- **ESLint**: Next.js core web vitals + TypeScript recommended
- **Prettier**: Single quotes, 2 spaces, Tailwind plugin
- **TypeScript**: Strict mode, path aliases (`@/*`)
- **Import Aliases**:
  - `@/*` → `./src/*`
  - `@/components/*` → `./src/components/*`
  - `@/lib/*` → `./src/lib/*`
  - `@/locales/*` → `./locales/*`

### Component Architecture
- Use shadcn/ui patterns with Tailwind CSS
- Leverage class-variance-authority for component variants
- MagicUI components for advanced animations
- Custom UI components in `src/components/ui/`

### Performance & SEO
- Next.js image optimization configured
- Security headers in next.config.js
- Core Web Vitals optimization
- Indonesian market SEO focus ("sewa band", "sewa band pernikahan")

### Key Business Context
- **Target Market**: Indonesian live music booking
- **Primary Users**: Event planners, couples, corporate organizers
- **Conversion Goal**: WhatsApp leads for bookings
- **Content Strategy**: Bilingual (Indonesian-first)

### Environment Variables
Create a `.env.local` file with the following variables:
```bash
# WhatsApp Business Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=6285121207613           # Your WhatsApp business number
NEXT_PUBLIC_BUSINESS_NAME=ArtistLive.id             # Business name for branding
NEXT_PUBLIC_DEFAULT_LOCATION=Jakarta                # Default location for bookings
```

### Development Notes
- Always run `npm run type-check` before committing
- Always run `npm run build` to check is the build success or something is still wrong
- Use the established color system from tailwind.config.js
- Follow the brand guidelines in brand_identity.md
- Maintain performance with Next.js best practices
- Test both Indonesian and English locales
- Use puppeteer to check how the site visual looks like
- WhatsApp configuration is centralized in `src/lib/config.ts`