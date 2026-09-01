// Generates the four floating decorations in the About sections. These were
// hotlinked PNGs on a third-party host; these are local, transparent SVGs in
// the site palette so nothing outside the repo can break them.
// Run: npm run art
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/art");
mkdirSync(OUT, { recursive: true });

const A1 = "#89AACC";
const A2 = "#4E85BF";
const INK = "#D7E2EA";
const S = 300;

// No background rect: these float over the section, so the canvas stays clear.
const shell = (id, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" width="${S}" height="${S}" fill="none">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${A1}"/><stop offset="1" stop-color="${A2}"/>
    </linearGradient>
    <linearGradient id="d${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${A2}"/><stop offset="1" stop-color="#2b4d70"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${A1}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${A1}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="${S / 2}" cy="${S / 2}" r="${S / 2}" fill="url(#glow${id})"/>
  ${body}
</svg>`;

// Isometric cube faces around a centre point.
const cube = (cx, cy, s, id) => {
  const w = s * 0.866;
  const top = `${cx},${cy - s} ${cx + w},${cy - s / 2} ${cx},${cy} ${cx - w},${cy - s / 2}`;
  const left = `${cx - w},${cy - s / 2} ${cx},${cy} ${cx},${cy + s} ${cx - w},${cy + s / 2}`;
  const right = `${cx + w},${cy - s / 2} ${cx},${cy} ${cx},${cy + s} ${cx + w},${cy + s / 2}`;
  return `<polygon points="${top}" fill="url(#g${id})"/>
  <polygon points="${left}" fill="url(#d${id})" opacity="0.85"/>
  <polygon points="${right}" fill="${A2}" opacity="0.55"/>
  <polygon points="${top}" fill="none" stroke="${INK}" stroke-opacity="0.35" stroke-width="1.5"/>`;
};

// 01 — moon: lit sphere with an orbit ring, echoing the original moon icon.
const moon = (id) => `<ellipse cx="150" cy="150" rx="128" ry="46" transform="rotate(-24 150 150)"
    fill="none" stroke="${INK}" stroke-opacity="0.45" stroke-width="2.5"/>
  <circle cx="150" cy="150" r="74" fill="url(#g${id})"/>
  <path d="M150 76a74 74 0 0 0 0 148 74 74 0 0 1 0-148z" fill="#0C0C0C" opacity="0.34"/>
  <circle cx="126" cy="126" r="13" fill="#0C0C0C" opacity="0.22"/>
  <circle cx="171" cy="167" r="8" fill="#0C0C0C" opacity="0.18"/>
  <circle cx="139" cy="180" r="5" fill="#0C0C0C" opacity="0.15"/>
  <ellipse cx="150" cy="150" rx="128" ry="46" transform="rotate(-24 150 150)"
    fill="none" stroke="${INK}" stroke-opacity="0.75" stroke-width="2.5"
    stroke-dasharray="150 400" stroke-dashoffset="60"/>
  <circle cx="34" cy="176" r="5" fill="${A1}"/>
  <circle cx="264" cy="120" r="4" fill="${A1}" opacity="0.7"/>`;

// 02 — a single tilted prism, the abstract shape in the lower-left slot.
const prism = (id) => `<g transform="rotate(-8 150 150)">${cube(150, 148, 78, id)}</g>
  <circle cx="60" cy="66" r="6" fill="${A1}" opacity="0.8"/>
  <circle cx="246" cy="238" r="4" fill="${A1}" opacity="0.6"/>`;

// 03 — stacked studded blocks, standing in for the lego icon.
const blocks = (id) => {
  const studs = (cx, cy, s) => {
    const w = s * 0.866;
    let out = "";
    for (const [dx, dy] of [[-w / 2, -s * 0.75], [w / 2, -s * 0.25]])
      out += `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="${s * 0.17}" ry="${s * 0.1}" fill="${INK}" fill-opacity="0.4"/>`;
    return out;
  };
  return `${cube(150, 214, 54, id)}${studs(150, 214, 54)}
  ${cube(150, 152, 54, id)}${studs(150, 152, 54)}
  ${cube(150, 90, 54, id)}${studs(150, 90, 54)}`;
};

// 04 — a small chart cluster: the data-analyst answer to the original group.
const cluster = (id) => {
  const bars = [56, 96, 74, 122];
  let out = "";
  bars.forEach((h, i) => {
    const x = 168 + i * 26;
    out += `<rect x="${x}" y="${232 - h}" width="16" height="${h}" rx="5" fill="url(#g${id})" opacity="${0.55 + i * 0.14}"/>`;
  });
  return `<circle cx="104" cy="126" r="58" fill="none" stroke="${A2}" stroke-opacity="0.4" stroke-width="20"/>
  <circle cx="104" cy="126" r="58" fill="none" stroke="url(#g${id})" stroke-width="20"
    stroke-linecap="round" stroke-dasharray="230 365" transform="rotate(-90 104 126)"/>
  <circle cx="104" cy="126" r="20" fill="${INK}" fill-opacity="0.12"/>
  ${out}
  <path d="M168 214 L194 178 L220 192 L246 132" fill="none" stroke="${INK}"
    stroke-opacity="0.65" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="246" cy="132" r="6" fill="${INK}"/>`;
};

const pieces = [
  ["corner-moon", moon],
  ["corner-prism", prism],
  ["corner-blocks", blocks],
  ["corner-cluster", cluster],
];

pieces.forEach(([name, maker], i) => {
  writeFileSync(resolve(OUT, `${name}.svg`), shell(i + 1, maker(i + 1)));
});

console.log(`generated ${pieces.length} corner decorations in public/art`);
