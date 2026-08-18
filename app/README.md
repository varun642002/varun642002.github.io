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
| Skills | `src/components/Skills.tsx` | Six numbered capability cards |
| Projects | `src/components/SelectedWorks.tsx` | Bento grid, six projects with tags and metrics |
| Experience | `src/components/Experience.tsx` | Timeline of roles |
| Achievements | `src/components/Achievements.tsx` | Competition results and leadership |
| Education | `src/components/Education.tsx` | MBA and B.E. |
| Certifications | `src/components/Certifications.tsx` | Eight credentials, image preview + Coursera verify |
| Explorations | `src/components/Explorations.tsx` | Pinned heading + parallax columns + lightbox |
| Stats | `src/components/Stats.tsx` | Three figures |
| Contact / footer | `src/components/ContactFooter.tsx` | Flipped video, GSAP marquee, contact links |

Navigation lives in `src/components/Navbar.tsx` — the floating pill carries the
first few links, and the Menu button opens an overlay listing every section.

## Editing content

Copy, links, project titles, journal entries and stats all live in
[`src/lib/site.ts`](src/lib/site.ts).

The abstract artwork in `public/art/` is generated — edit
`scripts/gen-art.mjs` and run `npm run art` to regenerate it.

## Deploying

`npm run publish` builds and copies the output into the repository root, which
is what GitHub Pages serves for `varun642002.github.io`. Commit and push after
running it.

## Notes

- All copy comes from the previous site (kept at `/legacy/`) — projects,
  experience, achievements, education and certifications are the real content.
- The hero/footer video streams from a public Mux sample URL.
- The four decorative images in the About section hotlink a third-party
  `figma.site` host; download them into `public/` if you want them to survive
  that host going away.
