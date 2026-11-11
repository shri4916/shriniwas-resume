# Agent rules

- All portfolio copy and lists live in `src/data/portfolio-data.ts`, typed by `src/types/portfolio.ts`; components only render data. Why: the owner edits content in one place.
- Site must work on GitHub Pages sub-paths: Vite `base` comes from `BASE_PATH`, the router uses `import.meta.env.BASE_URL`, and public files are linked via `publicUrl()`. Why: deployment target is GitHub Pages.
- Images and the resume PDF are real files in the repo (`src/assets`, `public/`), not Lovable CDN asset pointers. Why: `/__l5e/` asset URLs do not resolve on GitHub Pages.
- Styling uses tokens from `src/index.css` `@theme` (Tailwind v4); no raw color utilities in components. Why: one place to change the palette.
