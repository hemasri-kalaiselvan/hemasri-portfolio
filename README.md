# Hemasri Kalaiselvan — Portfolio

> A modern, responsive personal portfolio presenting one connected career journey — from Mainframe and Big Data into AI.

**Tech:** React, Vite, JavaScript, CSS
**Tools:** GitHub
**AI Tools:** ChatGPT, Claude

## About

- The personal portfolio of Hemasri Kalaiselvan — an experienced technology professional with a background in Mainframe and Big Data at TCS, now exploring AI.
- Presents the whole journey as one continuous story — experience, evolution, exploration, and building — rather than two separate careers.
- Brings together a professional summary, work experience and achievements, skills, projects, certifications, and a downloadable resume.
- Easy to maintain: all content lives in a single file, so updates are simple text edits.
- Whole sections can be shown or hidden without touching code.
- The site you're viewing is itself the project — built with AI assistance and hosted free on GitHub Pages.

## How AI Helped

- **ChatGPT** — initial design direction and the first build prompt
- **Claude** — finalized the prompt; built, debugged, and deployed the site
- **GitHub** — source hosting and free deployment via GitHub Pages
- Set up a repo-driven system: each project page is generated from its own README, so adding a project means writing one README, not editing the site
- Solved the real deployment details — GitHub Pages base paths, asset links, and caching

Full documentation:

- [Design Document](docs/Design-Document.md)
- [Prompt Document](docs/Prompt-Document.md)
- [Build & Deployment](docs/Build-and-Deployment.md)

---

## Tech notes

- React + Vite, deployed on GitHub Pages via GitHub Actions.
- All personal content lives in a single file (`src/data/my-content.js`), separate from the code.
- Uses hash-based routing so project detail pages work correctly on GitHub Pages.
- Light and dark themes, remembered across visits.
