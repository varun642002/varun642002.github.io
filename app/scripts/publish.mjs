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
for (const route of ["jack"]) {
  mkdirSync(resolve(root, route), { recursive: true });
  copyFileSync(resolve(dist, "index.html"), resolve(root, route, "index.html"));
}

// Stop Pages from running the output through Jekyll.
writeFileSync(resolve(root, ".nojekyll"), "");

console.log("published build to repository root");
