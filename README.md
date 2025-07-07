# ArtistLive.id

> Bilingual platform for booking live musicians and singers in Indonesia

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TaskMaster](https://img.shields.io/badge/Project%20Management-TaskMaster-green)](https://github.com/TaskMaster-ai/task-master-ai)

## 🎯 Project Goals

Re-platform artistlive.id from a thin brochure site to a conversion-optimized, bilingual landing page targeting the Indonesian market for live music bookings.

### Success Metrics
- **≥150 WhatsApp leads/month** - Qualified booking requests
- **≥10 artist sign-ups/month** - New talent acquisition  
- **≥3,000 organic sessions/month** - SEO-driven traffic within 6 months
- **Top-3 SERP ranking** for "sewa band" within 4 months

## 🚀 Tech Stack

- **Framework**: Next.js 15.1 with App Router
- **Frontend**: React 19, Tailwind CSS, MagicUI components
- **Content**: MDX for blog with automated generation via n8n + OpenAI
- **Internationalization**: Native Next.js i18n (Indonesian/English)
- **Analytics**: Google Analytics 4 with conversion tracking
- **Hosting**: Netlify with staging/production environments
- **SEO**: Structured data, sitemap automation, Core Web Vitals optimization

## 🎨 Design System

- **Visual Language**: Friendly, familiar, helpful
- **Typography**: Inter font family
- **Components**: MagicUI animated React components
- **Responsive**: Mobile-first design for Indonesian mobile users
- **Accessibility**: WCAG 2.1 AA compliance

## 🇮🇩 SEO Strategy

Targeting high-intent Indonesian queries:
- **Primary Keywords**: "sewa band", "sewa band pernikahan", "sewa band Jakarta"
- **Content Strategy**: 4 auto-generated blog posts/month
- **Local SEO**: Jakarta, Bandung, Surabaya market focus
- **Technical SEO**: Structured data, optimized meta tags, Core Web Vitals

## 📋 Development Workflow

This project uses **TaskMaster** for organized development:

```bash
# View current tasks
tm list

# Get next task to work on  
tm next

# View specific task details
tm show <task-id>

# Update task status
tm set-status <task-id> done
```

### Current Progress
- ✅ Project initialization and repository setup
- ✅ Comprehensive PRD with SEO integration
- ✅ TaskMaster configuration with 28 prioritized tasks
- 🔄 **Next**: Next.js project setup and i18n configuration

## 🌐 Internationalization

- **Default Language**: Indonesian (id-ID)
- **Secondary Language**: English (en-US)  
- **Routing**: `/id/*` and `/en/*` paths
- **Content Management**: JSON-based translation files
- **SEO**: Localized meta tags and structured data

## 📊 Compliance

- **Indonesian PDP Law No. 27/2022**: Privacy policy and cookie consent
- **WCAG 2.1 AA**: Accessibility compliance
- **Performance**: Core Web Vitals optimization
- **SEO**: Google Search Console integration

## 🔧 Development Setup

```bash
# Install dependencies (once project is created)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# TaskMaster commands
tm next-task      # Get next task to work on
tm show <id>      # View task details  
tm update-subtask # Log progress during development
```

## 📁 Project Structure

```
artistlive/
├── .taskmaster/          # TaskMaster configuration and tasks
│   ├── tasks/           # Generated task files
│   ├── docs/            # PRD and documentation
│   └── config.json      # TaskMaster settings
├── .cursor/             # Cursor IDE rules and configuration
├── src/                 # Source code (to be created)
├── public/              # Static assets (to be created)
├── content/             # MDX blog content (to be created)
├── locales/             # Translation files (to be created)
└── SEO_strategy.md      # SEO implementation guide
```

## 🎵 Target Audiences

1. **Event Planners & Couples** - Wedding entertainment booking
2. **Corporate HR/Event Organizers** - Office event entertainment
3. **Students & Teachers** - School concert bands (pensi)
4. **Artists & Agencies** - Platform for talent registration

## 📈 Monitoring & Analytics

- **Google Analytics 4**: Conversion tracking and user behavior
- **Google Search Console**: SEO performance monitoring  
- **Core Web Vitals**: Performance tracking
- **WhatsApp Integration**: Deep-link conversion tracking

## 🚀 Deployment

- **Staging**: https://artistlive.netlify.app
- **Production**: https://artistlive.id (planned)
- **CI/CD**: Automated builds via Netlify + GitHub integration

---

**Built with ❤️ for the Indonesian music community**

For detailed development workflow and task management, see [TaskMaster Documentation](.taskmaster/) 