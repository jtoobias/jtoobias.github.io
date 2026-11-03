# Jonathan Tobias — Engineering Portfolio

A lightweight, multi-page Astro portfolio for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to the `main` branch of `jtoobias/jtoobias.github.io`.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The included workflow builds and deploys the site on each push to `main`.

## Updating content

- Edit `src/data/site.ts` for your intro, skills and experience.
- Edit `src/data/projects.ts` to update project cards and project pages.
- Put images in `public/images/` and reference them with paths such as `/images/project-name.jpg`.
- Add your public CV as `public/Jonathan-Tobias-CV.pdf` when ready.

## Before publishing

Review all project descriptions, dates, employer permissions and links. Do not publish confidential work details, internal diagrams, customer information or proprietary images. Replace the CV placeholder with a public-safe version.
