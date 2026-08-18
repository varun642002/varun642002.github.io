# Portfolio landing page

Single-page dark portfolio for Varun S. — React + Vite + TypeScript + Tailwind,
with GSAP for the scroll work, Framer Motion for entrances and transitions, and
hls.js for the background video.

```bash
npm install
npm run dev      # http://localhost:5180
```

## Sections

| Section | File | Notes |
| --- | --- | --- |
| Loading screen | `src/components/LoadingScreen.tsx` | 000→100 counter, rotating words |
| Hero | `src/components/Hero.tsx` | HLS video background, GSAP entrance, cycling role |
| About me | `src/components/AboutMe.tsx` | Kanit type, scroll-driven character reveal |
| Selected work | `src/components/SelectedWorks.tsx` | 7/5/5/7 bento grid |
| Journal | `src/components/Journal.tsx` | Horizontal pills |
| Explorations | `src/components/Explorations.tsx` | Pinned heading + parallax columns + lightbox |
| Stats | `src/components/Stats.tsx` | Three figures |
| Contact / footer | `src/components/ContactFooter.tsx` | Flipped video, GSAP marquee |

## Editing content

Copy, links, project titles, journal entries and stats all live in
[`src/lib/site.ts`](src/lib/site.ts).

The abstract artwork in `public/art/` is generated — edit
`scripts/gen-art.mjs` and run `npm run art` to regenerate it.

## Deploying

`npm run publish` builds and copies the output into the repository root, which
is what GitHub Pages serves for `varun642002.github.io`. Commit and push after
running it.

## Known placeholders

- Journal entries are invented titles — replace them with real posts or drop
  the section.
- The hero/footer video streams from a public Mux sample URL.
- The four decorative images in the About section hotlink a third-party
  `figma.site` host; download them into `public/` if you want them to survive
  that host going away.
