/**
 * Export resume as PDF with working hyperlinks.
 * Option A: npm run dev (terminal 1), then npm run export-pdf (terminal 2)
 * Option B: npm run build && npm run export-server, then visit and click "Download PDF"
 * Output: resume.pdf in project root (Option A)
 */
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const outputPath = join(rootDir, 'resume.pdf');
const appUrl = process.env.APP_URL || 'http://localhost:5173';

const getChromePath = () => {
  if (process.platform === 'darwin') return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (process.platform === 'win32') return 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  return '/usr/bin/google-chrome';
};

async function exportPdf() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: getChromePath(),
  });

  try {
    const page = await browser.newPage();

    // Ensure we get the actual HTML with links (not canvas)
    await page.setJavaScriptEnabled(true);

    console.log(`Loading ${appUrl}...`);
    await page.goto(appUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to render
    await page.waitForSelector('.resume-container', { timeout: 10000 });

    console.log('Generating PDF...');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.35in',
        right: '0.35in',
        bottom: '0.35in',
        left: '0.35in',
      },
      displayHeaderFooter: false,
    });

    console.log(`PDF saved to ${outputPath}`);
  } finally {
    await browser.close();
  }
}

exportPdf().catch((err) => {
  console.error('Export failed:', err.message);
  console.log('\nMake sure the dev server is running: npm run dev');
  process.exit(1);
});
