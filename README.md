# Hemasri Kalaiselvan — Portfolio

A modern, responsive personal portfolio for an experienced technology professional.
Built with React + Vite, structured for easy long-term maintenance and GitHub Pages hosting.

**Journey:** Experience → Evolution → Exploration → Building → Growth

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build into /dist
npm run preview   # preview the production build locally
```

Requires Node.js 18+ (20 recommended).

---

## How the content is organised

**All your personal information lives in ONE file:**

```
src/data/my-content.js
```

This is the only file you ever need to open to change what appears on your
website — your name, company, experience, skills, projects, resume, and contact
links are all here, with plain-English instructions inside. Open it in Notepad
(or any editor), change the text between the quote marks, save, and the whole
site updates.

**Common examples:**

- **Mask your name** — change `name: 'Hemasri Kalaiselvan',` to `name: 'H. K.',`
- **Mark a company private** — change `company: 'TCS',` to `company: 'Private concern',`
- **Hide something** — set it to `null` (e.g. `email: null,`)
- **Show a contact** — put it in quotes (e.g. `email: 'you@example.com',`)
- **Add a skill** — add it inside the brackets: `items: ['COBOL', 'JCL'],`

The other files in `src/data/` (`profile.js`, `experience.js`, etc.) simply
read from `my-content.js` — you don't need to touch them.

---

## Deploying to GitHub Pages

### 1. Set the base path

Two files reference the repo name. Update them to match your repo:

- `vite.config.js` → `base: '/YOUR-REPO-NAME/'`
  (use `base: '/'` if the repo is named `YOUR-USERNAME.github.io`)
- `package.json` → `homepage` field

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### 3. Enable Pages

In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The included workflow (`.github/workflows/deploy.yml`) builds and deploys
automatically on every push to `main`. Your site appears at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

### Manual alternative

```bash
npm run build
npm run deploy   # publishes /dist to the gh-pages branch
```

---

## Routing note

The site uses `HashRouter`, so project pages look like
`/#/projects/vetrihub`. This is intentional — it makes deep links and refreshes
work on GitHub Pages without any server configuration.

---

## Tech

React 18 · Vite 5 · React Router 6 · plain CSS with design tokens · light/dark themes.
No UI framework, no external icon/logo dependencies.
