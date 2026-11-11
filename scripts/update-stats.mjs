// Reads your public LeetCode and GeeksforGeeks profiles and saves the
// problems-solved counts into src/data/stats.json.
//
// Runs automatically in GitHub Actions before every build (see
// .github/workflows/deploy.yml). If a site cannot be reached or changes its
// format, the previous number in stats.json is kept — the build never fails
// because of this script.
//
// Run it by hand:  node scripts/update-stats.mjs

import { readFile, writeFile } from 'node:fs/promises'

const LEETCODE_USER = 'hemasri_kalaiselvan'
const GFG_HANDLE = 'vsks5dqmb'
const FILE = new URL('../src/data/stats.json', import.meta.url)
const UA = 'Mozilla/5.0 (compatible; portfolio-stats-updater)'

async function get(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { 'User-Agent': UA, ...(options.headers || {}) },
    signal: AbortSignal.timeout(15000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res
}

async function leetcode() {
  const query = `query ($u: String!) {
    matchedUser(username: $u) { submitStatsGlobal { acSubmissionNum { difficulty count } } }
  }`
  const res = await get('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com' },
    body: JSON.stringify({ query, variables: { u: LEETCODE_USER } }),
  })
  const json = await res.json()
  const list = json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum
  const all = list?.find((x) => x.difficulty === 'All')
  if (!all || !Number.isInteger(all.count)) throw new Error('unexpected response')
  return all.count
}

async function gfg() {
  // 1) GeeksforGeeks' own profile API
  try {
    const res = await get(
      `https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${GFG_HANDLE}`
    )
    const json = await res.json()
    const n = Number(json?.data?.total_problems_solved)
    if (Number.isInteger(n)) return n
  } catch {
    /* fall through to the page */
  }
  // 2) Fallback: read the number out of the public profile page
  const res = await get(`https://www.geeksforgeeks.org/profile/${GFG_HANDLE}`)
  const html = await res.text()
  const m = html.match(/total_problems_solved"?\s*[:=]\s*"?(\d+)/i)
  if (!m) throw new Error('number not found on page')
  return Number(m[1])
}

let stats = {}
try {
  stats = JSON.parse(await readFile(FILE, 'utf8'))
} catch {
  /* start fresh */
}

let changed = false
for (const [key, fn] of [['leetcode', leetcode], ['gfg', gfg]]) {
  try {
    const n = await fn()
    console.log(`${key}: ${n}`)
    if (stats[key] !== n) changed = true
    stats[key] = n
  } catch (e) {
    console.warn(`${key}: could not update (${e.message}) — keeping ${stats[key] ?? 'old value'}`)
  }
}

// Only touch the file when a number really changed, so the workflow commits
// only when there is something new to save.
if (changed) {
  stats.updated = new Date().toISOString().slice(0, 10)
  await writeFile(FILE, JSON.stringify(stats, null, 2) + '\n')
}
