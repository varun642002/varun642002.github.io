// Renders resume/resume.html to public/Varun_S_Resume_DataAnalyst.pdf, then
// clears the identifying metadata Chromium stamps into the file.
//
// Playwright is not a dependency of this project — the browser is only needed
// when the resume actually changes, which is rarely:
//
//   npm i -D playwright && npx playwright install chromium
//   npm run resume

import { readFileSync, writeFileSync } from "node:fs";
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

// Skia writes the document Info dictionary uncompressed, so the renderer
// fingerprint and the build timestamp can be overwritten in place. The xref
// table addresses objects by byte offset, so every replacement is padded back
// to the exact length of what it replaced — the file stays valid without
// rebuilding the table.
const pad = (replacement, width) =>
  replacement.length > width
    ? " ".repeat(width)
    : replacement + " ".repeat(width - replacement.length);

let doc = readFileSync(pdf, "latin1");
const cleared = [];

for (const [key, value] of [
  ["Creator", "Varun S"],
  ["Producer", "Varun S"],
  ["CreationDate", ""],
  ["ModDate", ""],
]) {
  doc = doc.replace(new RegExp(`/${key} \\(([^)]*)\\)`, "g"), (_m, old) => {
    cleared.push(`${key}="${old}"`);
    return `/${key} (${pad(value, old.length)})`;
  });
}

writeFileSync(pdf, doc, "latin1");

console.log(`wrote ${pdf}`);
console.log(cleared.length ? `cleared ${cleared.join(", ")}` : "no metadata found to clear");
