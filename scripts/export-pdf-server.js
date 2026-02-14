/**
 * Server with PDF export API. Serves the built app and generates PDF with working hyperlinks.
 * Run: npm run build && npm run export-server
 * Then visit http://localhost:3000 and click "Download PDF"
 */
import express from "express";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");

const app = express();
const PORT = process.env.PORT || 3000;

const getChromePath = () => {
  if (process.platform === "darwin") {
    return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  }
  if (process.platform === "win32") {
    return "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  }
  return "/usr/bin/google-chrome";
};

// PDF export - must be before static to avoid being caught by SPA fallback
app.get("/api/export-pdf", async (req, res) => {
  try {
    const pageUrl = `http://localhost:${PORT}`;

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
      executablePath: getChromePath(),
      ignoreDefaultArgs: ["--enable-automation"],
    });

    const page = await browser.newPage();

    // Set viewport to A4 dimensions so page renders at correct size (210mm x 297mm at 96dpi)
    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    await page.emulateMediaType("print");

    await page.goto(pageUrl, {
      waitUntil: "networkidle0",
      timeout: 15000,
    });

    await page.waitForSelector(".resume-container", { timeout: 5000 });

    // Inject A4-specific styles: remove shadows on image, bigger photo, page break, padding
    await page.addStyleTag({
      content: `
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: white; }
        .resume-container { 
          width: 794px !important; 
          max-width: 794px !important;
          min-height: 1123px !important;
          margin: 0 !important;
          padding: 32px 40px !important;
        }
        .resume-container header img {
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          width: 120px !important;
          height: 120px !important;
        }
        .key-projects-section {
          page-break-before: always;
        }
      `,
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
      displayHeaderFooter: false,
    });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');
    res.send(pdfBuffer);
  } catch (err) {
    console.error("PDF export failed:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.use(express.static(distDir));

app.get("*", (req, res) => {
  res.sendFile(join(distDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Download PDF: http://localhost:${PORT}/api/export-pdf`);
});
