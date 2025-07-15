const puppeteer = require('puppeteer');

async function debugMorphing() {
  console.log('Debugging morphing text issue...');
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
    await page.waitForSelector('h1', { timeout: 10000 });

    // Take screenshot to see current state
    await page.screenshot({ 
      path: 'debug-morphing-current.png',
      fullPage: false
    });
    console.log('✓ Current state screenshot saved');

    // Check console errors
    const logs = [];
    page.on('console', msg => logs.push(`CONSOLE: ${msg.text()}`));
    page.on('pageerror', error => logs.push(`ERROR: ${error.message}`));

    // Wait a bit and capture again
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ 
      path: 'debug-morphing-after-wait.png',
      fullPage: false
    });
    console.log('✓ After wait screenshot saved');

    // Get the headline structure
    const headlineInfo = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return { error: 'No h1 found' };

      const morphingDiv = h1.querySelector('div[class*="relative"]');
      const morphingSpans = h1.querySelectorAll('span');
      
      return {
        h1Text: h1.textContent,
        h1HTML: h1.innerHTML,
        morphingDivExists: !!morphingDiv,
        morphingSpansCount: morphingSpans.length,
        morphingSpansContent: Array.from(morphingSpans).map(span => ({
          text: span.textContent,
          style: span.style.cssText,
          classes: span.className
        })),
        svgFiltersExists: !!document.querySelector('#filters')
      };
    });

    console.log('\n=== MORPHING TEXT DEBUG INFO ===');
    console.log('Headline structure:', JSON.stringify(headlineInfo, null, 2));
    
    console.log('\nConsole logs and errors:');
    logs.forEach(log => console.log(log));

    // Check if morphing words are in content
    const contentCheck = await page.evaluate(() => {
      const scripts = Array.from(document.scripts).map(s => s.textContent);
      const hasIndonesianWords = scripts.some(s => 
        s.includes('Band Terkenal') || s.includes('Penyanyi Solo') || s.includes('Selebritis')
      );
      
      return {
        hasIndonesianWords,
        // Check if the content is being passed properly
        windowContent: typeof window !== 'undefined' ? 'window exists' : 'no window'
      };
    });

    console.log('\nContent check:', contentCheck);

  } catch (error) {
    console.error('Debug error:', error);
  } finally {
    await browser.close();
  }
}

debugMorphing();