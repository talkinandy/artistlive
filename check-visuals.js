const puppeteer = require('puppeteer');
const fs = require('fs');

async function checkVisuals() {
  console.log('Starting visual check...');
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

    // Wait for images to load
    await page.waitForSelector('img[src="/images/concert-hero.jpg"]', { timeout: 5000 });
    await page.waitForSelector('img[src="/images/band-performance.jpg"]', { timeout: 5000 });

    // Take screenshot of hero section
    await page.screenshot({ 
      path: 'screenshot-hero.png',
      fullPage: false
    });
    console.log('✓ Hero section screenshot saved');

    // Scroll to artists section
    await page.evaluate(() => {
      document.querySelector('img[src="/images/band-performance.jpg"]').scrollIntoView();
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot of artists section
    await page.screenshot({ 
      path: 'screenshot-artists.png',
      fullPage: false
    });
    console.log('✓ Artists section screenshot saved');

    // Check mobile view
    await page.setViewport({ width: 375, height: 812 });
    await page.reload({ waitUntil: 'networkidle0' });
    
    await page.screenshot({ 
      path: 'screenshot-mobile.png',
      fullPage: false
    });
    console.log('✓ Mobile view screenshot saved');

    // Verify images are loaded and visible
    const heroImageLoaded = await page.evaluate(() => {
      const img = document.querySelector('img[src="/images/concert-hero.jpg"]');
      return img && img.complete && img.naturalWidth > 0;
    });

    const artistsImageLoaded = await page.evaluate(() => {
      const img = document.querySelector('img[src="/images/band-performance.jpg"]');
      return img && img.complete && img.naturalWidth > 0;
    });

    console.log('\nImage Status:');
    console.log(`Hero image loaded: ${heroImageLoaded ? '✓' : '✗'}`);
    console.log(`Artists image loaded: ${artistsImageLoaded ? '✓' : '✗'}`);

    // Get visual details
    const visualDetails = await page.evaluate(() => {
      const heroSection = document.querySelector('section');
      const heroImage = document.querySelector('img[src="/images/concert-hero.jpg"]');
      const artistsImage = document.querySelector('img[src="/images/band-performance.jpg"]');
      
      return {
        heroSection: {
          height: heroSection?.offsetHeight,
          hasBackgroundImage: heroImage !== null
        },
        artistsSection: {
          hasHeaderImage: artistsImage !== null,
          headerHeight: artistsImage?.parentElement?.offsetHeight
        }
      };
    });

    console.log('\nVisual Details:');
    console.log('Hero Section:', visualDetails.heroSection);
    console.log('Artists Section:', visualDetails.artistsSection);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

checkVisuals();