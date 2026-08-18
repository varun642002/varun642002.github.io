// Generates the abstract artwork used by the works / journal / explorations
// sections. Data-flavoured shapes on the site's dark palette, so the visuals
// stay in one system with the rest of the page. Run: npm run art
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/art");
mkdirSync(OUT, { recursive: true });

const A1 = "#89AACC";
const A2 = "#4E85BF";
const BG = "#0a0a0a";

// Deterministic PRNG so regenerating the art does not reshuffle the page.
const rng = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const shell = (w, h, id, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${A1}"/><stop offset="1" stop-color="${A2}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.5" cy="0.4" r="0.7">
      <stop offset="0" stop-color="${A1}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${A1}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${BG}"/>
  <rect width="${w}" height="${h}" fill="url(#glow${id})"/>
  ${body}
</svg>`;

const grid = (w, h, step = 40) => {
  let out = "";
  for (let x = step; x < w; x += step)
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#ffffff" stroke-opacity="0.05"/>`;
  for (let y = step; y < h; y += step)
    out += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#ffffff" stroke-opacity="0.05"/>`;
  return out;
};

const bars = (w, h, seed) => {
  const r = rng(seed);
  const n = 14;
  const gap = 10;
  const bw = (w - gap * (n + 1)) / n;
  let out = grid(w, h);
  for (let i = 0; i < n; i++) {
    const bh = (0.15 + r() * 0.75) * (h - 120);
    out += `<rect x="${gap + i * (bw + gap)}" y="${h - 60 - bh}" width="${bw}" height="${bh}" rx="${bw / 3}" fill="url(#g${seed})" fill-opacity="${(0.35 + r() * 0.6).toFixed(2)}"/>`;
  }
  out += `<line x1="0" y1="${h - 60}" x2="${w}" y2="${h - 60}" stroke="${A1}" stroke-opacity="0.5"/>`;
  return out;
};

const lines = (w, h, seed) => {
  const r = rng(seed);
  let out = grid(w, h);
  for (let s = 0; s < 3; s++) {
    const pts = [];
    let y = h * (0.3 + s * 0.18);
    for (let x = 0; x <= w; x += w / 12) {
      y += (r() - 0.5) * h * 0.18;
      y = Math.max(50, Math.min(h - 50, y));
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    out += `<polyline points="${pts.join(" ")}" fill="none" stroke="url(#g${seed})" stroke-width="${3 - s * 0.7}" stroke-opacity="${0.9 - s * 0.25}" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return out;
};

const scatter = (w, h, seed) => {
  const r = rng(seed);
  let out = grid(w, h, 50);
  for (let i = 0; i < 90; i++) {
    const x = r() * w;
    const y = h - (x / w) * h * (0.55 + r() * 0.5) - r() * h * 0.2;
    out += `<circle cx="${x.toFixed(1)}" cy="${Math.max(12, y).toFixed(1)}" r="${(2 + r() * 7).toFixed(1)}" fill="url(#g${seed})" fill-opacity="${(0.2 + r() * 0.6).toFixed(2)}"/>`;
  }
  out += `<line x1="0" y1="${h * 0.95}" x2="${w}" y2="${h * 0.2}" stroke="#ffffff" stroke-opacity="0.35" stroke-dasharray="8 8"/>`;
  return out;
};

const radial = (w, h, seed) => {
  const r = rng(seed);
  const cx = w / 2;
  const cy = h / 2;
  let out = "";
  for (let i = 0; i < 5; i++)
    out += `<circle cx="${cx}" cy="${cy}" r="${(i + 1) * (Math.min(w, h) / 12)}" fill="none" stroke="#ffffff" stroke-opacity="0.07"/>`;
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    const len = (0.25 + r() * 0.7) * (Math.min(w, h) / 2.4);
    out += `<line x1="${cx + Math.cos(a) * 30}" y1="${cy + Math.sin(a) * 30}" x2="${cx + Math.cos(a) * (30 + len)}" y2="${cy + Math.sin(a) * (30 + len)}" stroke="url(#g${seed})" stroke-opacity="${(0.3 + r() * 0.6).toFixed(2)}" stroke-width="3" stroke-linecap="round"/>`;
  }
  return out;
};

const waves = (w, h, seed) => {
  const r = rng(seed);
  let out = "";
  for (let s = 0; s < 22; s++) {
    const amp = 8 + r() * 26;
    const y = (h / 22) * s + 12;
    let d = `M 0 ${y}`;
    for (let x = 0; x <= w; x += 20)
      d += ` Q ${x + 10} ${y + Math.sin((x + s * 30) / 60) * amp} ${x + 20} ${y}`;
    out += `<path d="${d}" fill="none" stroke="url(#g${seed})" stroke-opacity="${(0.12 + r() * 0.5).toFixed(2)}" stroke-width="1.5"/>`;
  }
  return out;
};

const blocks = (w, h, seed) => {
  const r = rng(seed);
  let out = grid(w, h, 60);
  const cols = 6;
  const rows = 5;
  const cw = w / cols;
  const ch = h / rows;
  for (let i = 0; i < cols; i++)
    for (let j = 0; j < rows; j++) {
      const v = r();
      if (v < 0.35) continue;
      out += `<rect x="${i * cw + 8}" y="${j * ch + 8}" width="${cw - 16}" height="${ch - 16}" rx="10" fill="url(#g${seed})" fill-opacity="${(v * 0.55).toFixed(2)}"/>`;
    }
  return out;
};

const makers = { bars, lines, scatter, radial, waves, blocks };

const pieces = [
  ["work-forgeinsight", "waves", 1200, 800],
  ["work-retail", "bars", 1200, 900],
  ["work-ecommerce", "scatter", 1200, 900],
  ["work-hr", "radial", 1200, 800],
  ["journal-01", "lines", 600, 600],
  ["journal-02", "blocks", 600, 600],
  ["journal-03", "bars", 600, 600],
  ["journal-04", "scatter", 600, 600],
  ["explore-01", "radial", 700, 700],
  ["explore-02", "bars", 700, 700],
  ["explore-03", "waves", 700, 700],
  ["explore-04", "scatter", 700, 700],
  ["explore-05", "blocks", 700, 700],
  ["explore-06", "lines", 700, 700],
];

pieces.forEach(([name, kind, w, h], i) => {
  const svg = shell(w, h, i + 1, makers[kind](w, h, i + 1));
  writeFileSync(resolve(OUT, `${name}.svg`), svg);
});

console.log(`generated ${pieces.length} artwork files in public/art`);
