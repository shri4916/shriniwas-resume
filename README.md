# Shriniwas Ambad — Portfolio

Personal portfolio for Shriniwas Ambad, Senior Business Analyst & Product Owner.
Built with React, TypeScript, Vite and Tailwind CSS. No backend.

## Editing content

All text, lists and links live in **`src/data/portfolio-data.ts`**:

- `personalInfo` — name, headline, titles, about text, email, location, resume file
- `industries`, `expertise` — cards in About and Core Expertise
- `journey` — Professional Journey milestones
- `experience` — timeline entries. `employer` is the company you worked for;
  add client organisations to `clients: ["Client name"]` to show them separately.
  Add `period: "2022 – 2024"` to show dates.
- `caseStudies` — Business Challenge, My Role, Approach, Solution, Business Impact
- `toolGroups`, `certifications`, `awards`

Replace the resume at `public/resume/Shriniwas_Ambad_Resume.pdf` and the photo at
`src/assets/shriniwas-ambad-portrait.jpg` (keep the same file names).

## Local development

```sh
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Push this project to a GitHub repository (branch `main`).
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds the
   site with the correct base path and publishes it.
