// ---------------------------------------------------------------------------
//  README-driven projects
//
//  Each project on the site is just a GitHub repository name (see my-content.js).
//  This file fetches that repo's README and parses a few known parts out of it
//  so the project card and project page can be built automatically.
//
//  The README is expected to (optionally) follow this shape:
//
//    # Title
//    > Short description (one line, used on the card)
//    **Tech:** HTML, CSS, JavaScript
//    **Tools:** GitHub
//    **AI Tools:** ChatGPT, Claude
//    ## About
//    ...paragraph...
//    ## How AI Helped
//    ...
//
//  EVERYTHING is optional. If a part is missing, it is simply skipped — the
//  page never breaks because of a missing piece.
// ---------------------------------------------------------------------------

// The GitHub account that owns the project repositories.
const GITHUB_OWNER = 'hemasri-kalaiselvan'

// Which branch to read the README from.
const DEFAULT_BRANCH = 'main'

// Build the raw URL of a repo's README file.
export function readmeRawUrl(repo, branch = DEFAULT_BRANCH) {
  return `https://raw.githubusercontent.com/${GITHUB_OWNER}/${repo}/${branch}/README.md`
}

// The public web URL of the repo (used for the "Source code" link).
export function repoUrl(repo) {
  return `https://github.com/${GITHUB_OWNER}/${repo}`
}

// Fetch the raw README text for a repo. Returns the markdown string, or null
// if it could not be fetched (network error, repo/README missing, etc.).
export async function fetchReadme(repo, branch = DEFAULT_BRANCH) {
  try {
    const res = await fetch(readmeRawUrl(repo, branch), { cache: 'no-store' })
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

// Pull a comma-separated label line like "**Tech:** a, b, c" out of the text.
// Returns an array of trimmed values, or [] if the label isn't present.
function parseLabelList(markdown, label) {
  // Matches: **Label:** value   (also tolerates no bold, and : or ：)
  const re = new RegExp(
    `^\\s*\\*{0,2}${label}\\*{0,2}\\s*[:：]\\s*(.+)$`,
    'im'
  )
  const m = markdown.match(re)
  if (!m) return []
  return m[1]
    .replace(/\*\*/g, '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

// Parse the first level-1 heading (# Title) as the title.
function parseTitle(markdown) {
  const m = markdown.match(/^\s*#\s+(.+?)\s*$/m)
  return m ? m[1].trim() : null
}

// Parse the first blockquote (> ...) as the short description.
function parseDescription(markdown) {
  const m = markdown.match(/^\s*>\s+(.+?)\s*$/m)
  return m ? m[1].trim() : null
}

// Given a repo name, produce a clean fallback title if the README has none.
// e.g. "hemasri-portfolio" -> "Hemasri Portfolio"
export function prettyRepoName(repo) {
  return repo
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// Remove the header block we already show separately at the top of the page
// (the # title, the > description, and the Tech/Tools/AI Tools label lines),
// so the rendered README body doesn't repeat them. Everything from the first
// real section onward is kept as-is.
function stripHeader(markdown) {
  const lines = markdown.split('\n')
  let i = 0

  const isSkippable = (line) => {
    const t = line.trim()
    if (t === '') return true
    if (/^#\s+/.test(t)) return true // # title
    if (/^>\s+/.test(t)) return true // > description
    if (/^\*{0,2}(Tech|Tools|AI Tools)\*{0,2}\s*[:：]/i.test(t)) return true
    if (/^-{3,}$/.test(t)) return true // horizontal rule right after header
    return false
  }

  // Skip leading header lines until we hit the first line that isn't part
  // of the header block (typically the first "## Section").
  while (i < lines.length && isSkippable(lines[i])) {
    i++
  }

  return lines.slice(i).join('\n').trim()
}

// Rewrite relative links in the README (like docs/Design-Document.md) into
// absolute GitHub URLs, so they work when rendered on the deployed site
// rather than 404-ing against the portfolio's own address.
function absolutizeLinks(markdown, repo, branch = DEFAULT_BRANCH) {
  // Matches markdown links [text](target) where target is a relative path
  // (doesn't start with http, #, or /).
  return markdown.replace(
    /\]\((?!https?:\/\/|#|\/)([^)]+)\)/g,
    (match, target) =>
      `](https://github.com/${GITHUB_OWNER}/${repo}/blob/${branch}/${target})`
  )
}

// Parse a full README into the structured pieces the UI needs.
// Any missing piece comes back as null / empty array, never throws.
export function parseReadme(markdown, repo) {
  if (!markdown) {
    return {
      title: prettyRepoName(repo),
      description: null,
      tech: [],
      tools: [],
      aiTools: [],
      body: null,
    }
  }

  const stripped = stripHeader(markdown)
  return {
    title: parseTitle(markdown) || prettyRepoName(repo),
    description: parseDescription(markdown),
    tech: parseLabelList(markdown, 'Tech'),
    tools: parseLabelList(markdown, 'Tools'),
    aiTools: parseLabelList(markdown, 'AI Tools'),
    body: absolutizeLinks(stripped, repo),
  }
}

// Convenience: fetch + parse in one call.
export async function loadProject(repo) {
  const markdown = await fetchReadme(repo)
  return { repo, ...parseReadme(markdown, repo) }
}
