# Professional Audio Developer Resume/CV

This is a custom web-based easy customizable resume/cv for corpo world.

## Running the code

Run `npm install` to install the dependencies.

Run `npm run dev` to start the development server.

## Export PDF (with working hyperlinks)

**Recommended:** Build and run the export server (uses Puppeteer + system Chrome):

```bash
npm run build
npm run export-server
```

Then open http://localhost:3000 and click **Download PDF**. The PDF will include clickable links for phone, email, website, and project URLs.

**Alternative (CLI):** With the dev server running (`npm run dev`), run `npm run export-pdf` in another terminal to generate `resume.pdf`.

**Note:** Requires [Google Chrome](https://www.google.com/chrome/) installed. Chromium's PDF engine preserves hyperlinks from `<a href>` elements.
