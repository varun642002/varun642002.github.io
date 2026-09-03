// Renders resume/resume.html to public/Varun_S_Resume_DataAnalyst.pdf.
//
// Playwright is not a dependency of this project — the browser is only needed
// when the resume actually changes, which is rarely. Run it through npx:
//
//   npx --yes playwright@1.49.0 --version   (once, to fetch the package)
//   npm run resume
//
// If the import fails, the message below says what to install.

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const html = resolve(here, "../resume/resume.html");
const pdf = resolve(here, "../public/Varun_S_Resume_DataAnalyst.pdf");

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "playwright not found. Install it first:\n" +
      "  npm i -D playwright && npx playwright install chromium",
  );
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${html}`, { waitUntil: "networkidle" });
await page.pdf({
  path: pdf,
  format: "Letter",
  printBackground: true,
  margin: { top: "0.5in", bottom: "0.5in", left: "0.55in", right: "0.55in" },
});
await browser.close();

console.log(`wrote ${pdf}`);
