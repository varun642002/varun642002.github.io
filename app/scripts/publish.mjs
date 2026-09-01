// Copies the built site into the repository root, which is what GitHub Pages
// serves for a <user>.github.io repo. Existing non-build files (resume PDF,
// certificates, legacy/) are left alone.
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const dist = resolve(here, "../dist");
const root = resolve(here, "../..");

if (!existsSync(dist)) {
  console.error("No build found — run `npm run build` first.");
  process.exit(1);
}

// assets/ is fully owned by the build, so clear it before copying.
const assets = resolve(root, "assets");
if (existsSync(assets)) rmSync(assets, { recursive: true, force: true });

for (const entry of readdirSync(dist)) {
  cpSync(resolve(dist, entry), resolve(root, entry), { recursive: true });
}

// Pages has no SPA rewrite, so a copy of index.html as 404.html keeps
// client-side routes alive on a hard refresh.
copyFileSync(resolve(dist, "index.html"), resolve(root, "404.html"));

// Give each client-side route a real entry point too, so it answers 200
// instead of falling through the 404 handler.
for (const route of ["studio"]) {
  mkdirSync(resolve(root, route), { recursive: true });
  copyFileSync(resolve(dist, "index.html"), resolve(root, route, "index.html"));
}

// Routes that have been renamed keep a redirect stub, so links already shared
// under the old path still land somewhere useful instead of a 404.
const REDIRECTS = { jack: "/studio/" };
for (const [from, to] of Object.entries(REDIRECTS)) {
  mkdirSync(resolve(root, from), { recursive: true });
  writeFileSync(
    resolve(root, from, "index.html"),
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <link rel="canonical" href="${to}" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <p>This page moved to <a href="${to}">${to}</a>.</p>
    <script>window.location.replace("${to}");</script>
  </body>
</html>
`,
  );
}

// Stop Pages from running the output through Jekyll.
writeFileSync(resolve(root, ".nojekyll"), "");

console.log("published build to repository root");
