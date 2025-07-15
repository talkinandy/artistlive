const puppeteer = require('puppeteer');

async function analyzeSite() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('🔍 Starting ArtistLive.id Site Analysis...\n');
  
  try {
    // Test Indonesian locale (default)
    console.log('📍 Testing Indonesian locale (http://localhost:3000/id)...');
    await page.goto('http://localhost:3000/id', { waitUntil: 'networkidle0' });
    
    // Check hero section content
    const heroContent = await page.evaluate(() => {
      const heroSection = document.querySelector('[data-testid="hero"], .hero, section:first-of-type');
      if (!heroSection) return 'Hero section not found';
      
      const headings = Array.from(heroSection.querySelectorAll('h1, h2, .text-4xl, .text-5xl, .text-6xl'));
      const text = Array.from(heroSection.querySelectorAll('p, .text-lg, .text-xl'));
      
      return {
        headings: headings.map(h => h.textContent.trim()),
        text: text.map(p => p.textContent.trim()),
        html: heroSection.innerHTML.substring(0, 500) + '...'
      };
    });
    
    console.log('📝 Hero Content (ID locale):', JSON.stringify(heroContent, null, 2));
    
    // Test English locale
    console.log('\n📍 Testing English locale (http://localhost:3000/en)...');
    await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle0' });
    
    const heroContentEN = await page.evaluate(() => {
      const heroSection = document.querySelector('[data-testid="hero"], .hero, section:first-of-type');
      if (!heroSection) return 'Hero section not found';
      
      const headings = Array.from(heroSection.querySelectorAll('h1, h2, .text-4xl, .text-5xl, .text-6xl'));
      const text = Array.from(heroSection.querySelectorAll('p, .text-lg, .text-xl'));
      
      return {
        headings: headings.map(h => h.textContent.trim()),
        text: text.map(p => p.textContent.trim()),
        html: heroSection.innerHTML.substring(0, 500) + '...'
      };
    });
    
    console.log('📝 Hero Content (EN locale):', JSON.stringify(heroContentEN, null, 2));
    
    // Analyze brand compliance
    console.log('\n🎨 Analyzing Brand Identity Compliance...');
    await page.goto('http://localhost:3000/id', { waitUntil: 'networkidle0' });
    
    const brandAnalysis = await page.evaluate(() => {
      // Check colors
      const computedStyles = window.getComputedStyle(document.body);
      const allElements = document.querySelectorAll('*');
      
      // Find primary buttons
      const buttons = Array.from(document.querySelectorAll('button, .btn, [role="button"]'));
      const primaryButtons = buttons.filter(btn => 
        btn.textContent.toLowerCase().includes('whatsapp') || 
        btn.textContent.toLowerCase().includes('hubungi') ||
        btn.classList.toString().includes('primary')
      );
      
      // Check typography
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
      const bodyText = Array.from(document.querySelectorAll('p'));
      
      // Color analysis
      const colors = {
        royalIndigo: '#4B3BFF',
        deepGold: '#E2B007', 
        charcoal: '#222222',
        ghostWhite: '#F7F8FF',
        whatsappGreen: '#25D366'
      };
      
      const usedColors = new Set();
      allElements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        const textColor = style.color;
        const borderColor = style.borderColor;
        
        [bgColor, textColor, borderColor].forEach(color => {
          if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent') {
            usedColors.add(color);
          }
        });
      });
      
      return {
        primaryButtons: primaryButtons.map(btn => ({
          text: btn.textContent.trim(),
          backgroundColor: window.getComputedStyle(btn).backgroundColor,
          color: window.getComputedStyle(btn).color,
          classes: btn.className
        })),
        headingFonts: headings.slice(0, 3).map(h => ({
          text: h.textContent.trim(),
          fontFamily: window.getComputedStyle(h).fontFamily,
          fontWeight: window.getComputedStyle(h).fontWeight,
          fontSize: window.getComputedStyle(h).fontSize
        })),
        bodyFonts: bodyText.slice(0, 3).map(p => ({
          text: p.textContent.trim().substring(0, 50) + '...',
          fontFamily: window.getComputedStyle(p).fontFamily,
          fontWeight: window.getComputedStyle(p).fontWeight
        })),
        usedColors: Array.from(usedColors).slice(0, 10),
        brandColorUsage: {
          royalIndigo: Array.from(usedColors).some(color => color.includes('75, 59, 255') || color.includes('#4B3BFF')),
          deepGold: Array.from(usedColors).some(color => color.includes('226, 176, 7') || color.includes('#E2B007')),
          whatsappGreen: Array.from(usedColors).some(color => color.includes('37, 211, 102') || color.includes('#25D366'))
        }
      };
    });
    
    console.log('🎨 Brand Analysis:', JSON.stringify(brandAnalysis, null, 2));
    
    // Check overall design quality
    console.log('\n🏗️ Analyzing Design Quality...');
    const designQuality = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, .section, main > div'));
      
      return {
        sectionCount: sections.length,
        hasHeroSection: !!document.querySelector('[data-testid="hero"], .hero'),
        hasNavigation: !!document.querySelector('nav, .nav, header nav'),
        hasFooter: !!document.querySelector('footer, .footer'),
        hasWhatsAppCTA: !!document.querySelector('[href*="whatsapp"], [href*="wa.me"]'),
        cardElements: document.querySelectorAll('.card, [class*="card"]').length,
        buttonElements: document.querySelectorAll('button, .btn, [role="button"]').length,
        imageElements: document.querySelectorAll('img').length,
        hasBrandColors: document.documentElement.style.getPropertyValue('--brand-primary') || 
                       document.querySelector('[style*="#4B3BFF"], [class*="bg-brand"]'),
        responsiveElements: document.querySelectorAll('[class*="sm:"], [class*="md:"], [class*="lg:"]').length
      };
    });
    
    console.log('🏗️ Design Quality:', JSON.stringify(designQuality, null, 2));
    
    // Take screenshots
    console.log('\n📸 Taking screenshots...');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ path: 'analysis-desktop-id.png', fullPage: true });
    
    await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'analysis-desktop-en.png', fullPage: true });
    
    // Mobile screenshots
    await page.setViewport({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/id', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'analysis-mobile-id.png', fullPage: true });
    
    console.log('✅ Analysis complete! Screenshots saved.');
    
  } catch (error) {
    console.error('❌ Error during analysis:', error.message);
  } finally {
    await browser.close();
  }
}

analyzeSite().catch(console.error);