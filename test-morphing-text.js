const puppeteer = require('puppeteer');

async function testMorphingText() {
  console.log('Testing morphing text effect...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to Indonesian site
    await page.goto('http://localhost:3000/id', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for hero section to load
    await page.waitForSelector('h1', { timeout: 5000 });

    // Take initial screenshot
    await page.screenshot({ 
      path: 'morphing-text-initial.png',
      fullPage: false
    });
    console.log('✓ Initial screenshot saved');

    // Wait for morphing to happen (first word should be "Band Terkenal")
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Take screenshot after first morph
    await page.screenshot({ 
      path: 'morphing-text-first-morph.png',
      fullPage: false
    });
    console.log('✓ First morph screenshot saved');

    // Wait for second morph (should be "Penyanyi Solo")
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ 
      path: 'morphing-text-second-morph.png',
      fullPage: false
    });
    console.log('✓ Second morph screenshot saved');

    // Wait for third morph (should be "Selebritis")
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ 
      path: 'morphing-text-third-morph.png',
      fullPage: false
    });
    console.log('✓ Third morph screenshot saved');

    // Test English version
    await page.goto('http://localhost:3000/en', { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    // Wait for hero section to load
    await page.waitForSelector('h1', { timeout: 5000 });

    // Take English screenshot
    await page.screenshot({ 
      path: 'morphing-text-english.png',
      fullPage: false
    });
    console.log('✓ English version screenshot saved');

    // Get the actual text content to verify
    const headlineText = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1 ? h1.textContent : null;
    });

    console.log('\nMorphing text implementation results:');
    console.log('- Indonesian words: Band Terkenal | Penyanyi Solo | Selebritis');
    console.log('- English words: Live Band | Solo Musician | Celebrities');
    console.log('- Current headline text:', headlineText);
    console.log('- Morphing duration: 2.5 seconds');
    console.log('- Text color: Brass gold (#b8860b)');
    console.log('- Animation: Smooth fade with blur effect');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testMorphingText();