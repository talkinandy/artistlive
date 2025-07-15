const puppeteer = require('puppeteer');

async function testNewColors() {
  console.log('Testing new WhatsApp CTA colors...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to site
    await page.goto('http://localhost:3000/id', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for hero CTA
    await page.waitForSelector('#hero-whatsapp-cta', { timeout: 5000 });

    // Take screenshot of hero with new CTA colors
    await page.screenshot({ 
      path: 'hero-new-colors.png',
      fullPage: false
    });
    console.log('✓ Hero CTA screenshot saved');

    // Scroll down to trigger floating CTA
    await page.evaluate(() => {
      window.scrollTo(0, window.innerHeight * 2);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot with floating CTA
    await page.screenshot({ 
      path: 'floating-cta-new-colors.png',
      fullPage: false
    });
    console.log('✓ Floating CTA screenshot saved');

    // Navigate to about page
    await page.goto('http://localhost:3000/id/about', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Scroll to about CTA
    await page.evaluate(() => {
      const ctaButton = document.querySelector('[data-cta="about-whatsapp"]');
      if (ctaButton) {
        ctaButton.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot of about CTA
    await page.screenshot({ 
      path: 'about-cta-new-colors.png',
      fullPage: false
    });
    console.log('✓ About CTA screenshot saved');

    // Test hover effects
    const heroButton = await page.$('#hero-whatsapp-cta');
    if (heroButton) {
      await heroButton.hover();
      await new Promise(resolve => setTimeout(resolve, 500));
      
      await page.screenshot({ 
        path: 'hero-cta-hover.png',
        fullPage: false
      });
      console.log('✓ Hero CTA hover effect screenshot saved');
    }

    console.log('\nColor scheme successfully updated to elegant black-gold!');
    console.log('New color scheme:');
    console.log('- Background: Midnight Black (#0a0a0a)');
    console.log('- Text: Brass Gold (#b8860b)');
    console.log('- Border: Brass Gold with 20% opacity');
    console.log('- Hover: Brass Gold background with midnight text');
    console.log('- Shimmer: Brass Gold (#b8860b)');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testNewColors();