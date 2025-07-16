const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    
    // Desktop view
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/id', { waitUntil: 'domcontentloaded' });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if element exists
    const hasElement = await page.evaluate(() => {
      return document.querySelector('#why-use') !== null;
    });
    
    if (hasElement) {
      // Scroll to WhyUse section
      await page.evaluate(() => {
        document.querySelector('#why-use').scrollIntoView({ behavior: 'smooth' });
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Take screenshot of WhyUse section
      const whyUseElement = await page.$('#why-use');
      await whyUseElement.screenshot({ path: 'why-use-desktop.png' });
      console.log('Desktop screenshot saved: why-use-desktop.png');
    } else {
      // Debug - check what sections exist
      const sections = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('section')).map(el => el.id || 'no-id');
      });
      console.log('Available sections:', sections);
      
      // Take full page screenshot for debugging
      await page.screenshot({ path: 'debug-desktop.png', fullPage: true });
      console.log('Debug desktop screenshot saved: debug-desktop.png');
    }
    
    // Mobile view
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 375, height: 812 });
    await mobilePage.goto('http://localhost:3000/id', { waitUntil: 'domcontentloaded' });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if element exists
    const hasElementMobile = await mobilePage.evaluate(() => {
      return document.querySelector('#why-use') !== null;
    });
    
    if (hasElementMobile) {
      // Scroll to WhyUse section
      await mobilePage.evaluate(() => {
        document.querySelector('#why-use').scrollIntoView({ behavior: 'smooth' });
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Take screenshot of WhyUse section
      const whyUseElementMobile = await mobilePage.$('#why-use');
      await whyUseElementMobile.screenshot({ path: 'why-use-mobile.png' });
      console.log('Mobile screenshot saved: why-use-mobile.png');
    } else {
      console.log('WhyUse element not found on mobile');
    }
    
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();