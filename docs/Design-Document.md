# Portfolio Website — Design Document

*Final version — describes the website as it currently stands.*

---

## 1. Overview

A personal portfolio website for Hemasri Kalaiselvan, an experienced technology professional with a background in Mainframe and Big Data, now exploring Artificial Intelligence. The site presents this as one continuous journey rather than two separate careers.

**Live site:** https://hemasri-kalaiselvan.github.io/hemasri-portfolio/

**Theme of the journey:** Experience → Evolution → Exploration → Building → Growth

---

## 2. Goals

- Present a professional, mature portfolio — not a student-style site.
- Tell one connected career story, from enterprise systems to AI.
- Keep every piece of content honest — no invented titles, achievements, statistics, or links.
- Be easy to maintain: adding or changing content should be a simple text edit, never a redesign.
- Host it for free, reliably, on GitHub Pages.

---

## 3. Functional Requirements

- Single-page layout with smooth scrolling between sections.
- Separate case-study pages for individual projects.
- Light and dark themes, with the visitor's choice remembered between visits.
- Fully responsive across phone, tablet, laptop, and desktop (mobile-first).
- A downloadable resume (PDF).
- Contact links (email, LinkedIn, GitHub) that appear only when provided.
- The ability to show or hide whole sections without touching code.

---

## 4. Sections

The site is organised into these sections:

1. **Home / Hero** — name, headline, tagline, short introduction, profile photo, and quick navigation buttons.
2. **About** — the professional story in a few short paragraphs, with four supporting pillars.
3. **Experience** — work history, including roles, duration, technology areas, responsibilities, contributions, projects, and achievements.
4. **Skills** — grouped into Enterprise Technologies, Data Technologies, Artificial Intelligence, and Development.
5. **Projects** — project cards, each linking to a full case-study page (VetriHub is the first).
6. **AI Exploration** — genuine hands-on AI work, following an Explore → Experiment → Build → Document flow.
7. **Certifications** — real credentials with issuer, date, topics covered, and verification links.
8. **Career Highlights** — milestones, contributions, and recognition.
9. **Resume** — professional summary and downloadable resume.
10. **Contact** — professional links.

---

## 5. Show / Hide Sections

The site includes a simple visibility control. Each section (except Home, Resume, and Contact, which are always shown) can be switched on or off from a single place in the content file.

- Setting a section to shown displays it on the page and in the top menu.
- Setting it to hidden removes it from both the page and the menu.
- Hiding never deletes content — a hidden section can be switched back on at any time.

This makes it easy to keep a section ready in the background and reveal it only when its content is complete.

---

## 6. Content Accuracy Rule

Nothing on the site is fabricated. Where real information is not yet available, the structure stays ready and shows a clean placeholder rather than inventing details. This applies to job titles, responsibilities, clients, achievements, statistics, technologies, links, and contact details.

---

## 7. Design Direction

**Overall feel:** professional, modern, clean, elegant, mature, minimal, and personal.

**Colour:** a restrained palette — deep navy as the primary colour, with blue and teal accents used sparingly for buttons, links, and small emphasis.

**Themes:** light mode is the default and is clean and comfortable to read; dark mode is a natural continuation of the same brand, avoiding pure black and neon. The chosen theme is remembered across visits.

**Typography:** modern and highly readable, with a clear hierarchy — a serif display face for headings, a clean sans-serif for body text, and a monospace face for small documentation-style labels.

**Avoided throughout:** student-portfolio styling, neon or cyberpunk effects, heavy gradients, glowing effects, moving backgrounds, decorative technology icons, and visual clutter.

---

## 8. Architecture

- Built with React and Vite.
- Reusable components for navigation, sections, experience entries, skill groups, project cards, project detail pages, certifications, and contact links.
- All personal content lives in a single, well-commented content file, keeping content cleanly separated from the code. Adding a project, skill, certification, or role is a content edit.
- Hash-based routing, so project detail pages work correctly on GitHub Pages without any server configuration.

---

## 9. Responsiveness & Accessibility

- Mobile-first responsive design — not a shrunk-down desktop layout.
- No horizontal overflow; readable text; comfortable touch targets; a mobile-friendly navigation drawer.
- Semantic HTML, good colour contrast, meaningful labels, clear focus states, and keyboard accessibility where practical.
- Respects reduced-motion preferences.

---

## 10. Hosting

- Hosted free on GitHub Pages.
- Deploys automatically whenever changes are pushed, using a build-and-deploy workflow.
- Served from a project subpath (`/hemasri-portfolio/`), which the build is configured to match.
