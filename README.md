# varun642002.github.io

Personal site for Varun S. — Data Analyst & Data Engineer.

| Path | What it is |
| --- | --- |
| `index.html`, `assets/`, `art/`, `404.html` | Built output served by GitHub Pages — do not edit by hand |
| `app/` | React + Vite + Tailwind source for the site ([README](app/README.md)) |
| `legacy/` | The previous static site, kept at [/legacy/](https://varun642002.github.io/legacy/) |
| `*.pdf`, `CERTIFICATE_*.jpeg` | Resume, project report and certificate scans |

## Making a change

```bash
cd app
npm install
npm run dev        # http://localhost:5180
npm run publish    # build + copy into the repo root
```

Then commit and push — Pages serves `main` from the root.
