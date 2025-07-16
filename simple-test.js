const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop view
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/id', { waitUntil: 'networkidle0', timeout: 10000 });
  
  // Take full page screenshot
  await page.screenshot({ path: 'desktop-full.png', fullPage: true });
  console.log('Desktop screenshot saved');
  
  // Mobile view
  await page.setViewport({ width: 375, height: 812 });
  await page.reload({ waitUntil: 'networkidle0' });
  
  // Take full page screenshot
  await page.screenshot({ path: 'mobile-full.png', fullPage: true });
  console.log('Mobile screenshot saved');
  
  await browser.close();
})().catch(console.error);