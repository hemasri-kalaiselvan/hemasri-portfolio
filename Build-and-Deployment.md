# Portfolio Website — Build & Deployment Steps

*Final version — the process that produces and publishes the site as it currently runs.*

---

## What you need

- A **GitHub account** (this project uses Google sign-in for GitHub).
- **Git** installed on your computer, used for the first upload of the project.
  (On older Windows versions such as Windows 8, use the last Git release that still supports that system — Git for Windows 2.46.2.)
- The project source code, in a folder on your computer.
- **Node.js is optional** — you do **not** need it. The site is built automatically by GitHub in the cloud, so nothing has to be installed or run locally. (Node.js is only needed if you ever want to preview the site on your own computer before pushing, which is not required.)

---

## 1. Create the repository on GitHub

1. Sign in to github.com.
2. Click the **+** icon (top-right) → **New repository**.
3. Name it **hemasri-portfolio**.
4. Set it to **Public**.
5. Leave it empty (no README, no .gitignore) so it's ready to receive the project.
6. Click **Create repository**.

---

## 2. Create a Personal Access Token (PAT)

Because the GitHub account uses Google sign-in (no password), pushing code needs a Personal Access Token used in place of a password.

1. Profile photo → **Settings** → **Developer settings** (bottom of the left sidebar).
2. **Personal access tokens** → **Tokens (classic)**.
3. **Generate new token** → **Generate new token (classic)**.
4. Add a note (e.g. "portfolio deploy"), set an expiration, and tick the **repo** and **workflow** scopes.
5. **Generate token**, then copy the token string (starts with `ghp_`) and keep it private and safe. It is shown only once.

Keep this token private — never share it or commit it into any file.

---

## 3. First upload — PowerShell + Git

Done once (the initial upload of the whole project). Open **PowerShell**, go to the project folder, and run:

```
cd C:\path\to\hemasri-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/hemasri-kalaiselvan/hemasri-portfolio.git
git push https://<username>:<your-token>@github.com/hemasri-kalaiselvan/hemasri-portfolio.git main
```

Replace `<username>` with the GitHub username and `<your-token>` with the Personal Access Token. The token goes in the push URL in place of a password.

---

## 4. Set the base path

The site is served from a project subpath on GitHub Pages (`/hemasri-portfolio/`), so the build must know that path.

- In `vite.config.js`, `base` is set to `'/hemasri-portfolio/'`.
- Asset links (photo, certificates, resume) are written to respect this base path, so they load correctly on the live subpath instead of the domain root.
- If the repository is ever renamed, update this value to match.

---

## 5. Enable GitHub Pages (once)

The site needs a build step, so it is published through GitHub Actions.

1. In the repository: **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.

A workflow file in the project (`.github/workflows/deploy.yml`) handles building and publishing. This setup is done only once.

Once published, the site is live at:
`https://hemasri-kalaiselvan.github.io/hemasri-portfolio/`

---

## 6. How deployment happens automatically

After the one-time setup above, **every commit triggers a build and deploy by itself** — there is no separate "build" button to press.

- Make a commit (either by pushing from Git, or by editing/uploading a file on the GitHub website and clicking **Commit changes**).
- GitHub automatically runs the build-and-deploy workflow.
- A minute or two later, the live site updates.

---

## 7. Checking the Actions tab

To confirm a deploy is running or finished:

1. Open the repository's **Actions** tab.
2. Look for a workflow run matching your latest commit.
3. A **yellow dot** means it's still building; a **green check** means it deployed successfully; a **red X** means it failed.
4. After a green check, refresh the live site (in a private/incognito window) to see the change.

---

## 8. Making updates (the everyday way)

After the first upload, most updates were made **directly on the GitHub website**, without PowerShell:

1. In the repository, open the file to change (for most content, that's `src/data/my-content.js`).
2. Click the pencil (Edit) icon, make the change — or use **Add file → Upload files** to replace a file.
3. Click **Commit changes**.
4. GitHub automatically rebuilds and redeploys (check the Actions tab).

Pushing again from Git (as in step 3) also works for updates; it was used once or twice early on. Both methods do the same thing — they create a commit, which triggers the automatic deploy.

To update the downloadable resume: replace the PDF in the `public` folder (keep the same filename) and commit — no code change needed.

---

## 9. Revoking and replacing a token

Tokens should be replaced when they **expire** (for example, after 90 days) or if one is ever **exposed** (accidentally shared, committed into a file, or pasted somewhere public). Revoking instantly disables a token everywhere.

1. Profile photo → **Settings** → **Developer settings**.
2. **Personal access tokens** → **Tokens (classic)**.
3. Find the token in the list, click it (or the **Delete** / **Revoke** button next to it), and confirm. It stops working immediately — no one can use it again.
4. Create a replacement: **Generate new token (classic)**, add a note, set an expiration, tick the **repo** and **workflow** scopes, then **Generate token**.
5. Copy the new token and keep it private. Use it in the git push URL wherever the old one was.

Treat any exposed token as compromised and revoke it right away, even if you think only you saw it.

---

## 10. Practical lessons learned

- **Leading-slash asset paths** (like `/my-photo.png`) resolve to the domain root, not the project subpath. Assets are referenced through the configured base path so they load correctly on the live site.
- **Re-running an old workflow replays the old commit.** To include newly added files, make a fresh commit rather than re-running a previous build.
- **Browser cache can make a working deploy look broken.** Always confirm changes in a private/incognito window.
- **First deploys can take a few minutes.** A 404 right after enabling Pages is usually just the first build still finishing.

---

## 11. Summary

The portfolio is a React + Vite site, content-driven from a single file, hosted free on GitHub Pages. The whole project was uploaded once with Git via PowerShell; after that, updates were mostly made by editing files directly on GitHub and committing. Every commit triggers an automatic build-and-deploy — no local build tools required.
