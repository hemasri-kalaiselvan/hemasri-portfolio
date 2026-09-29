import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { loadProject, prettyRepoName } from '../lib/readme'
import './LiveDemos.css'

// Repos to leave OUT of the Live demos strip (by repo name). Everything else
// in the `projects` list is shown automatically. The portfolio site itself is
// excluded by default, since linking to this same page from here is redundant.
// To show every project including the portfolio, make this an empty array: []
const EXCLUDE = ['hemasri-portfolio']

// Resolve a project's live URL exactly the way the project page does:
// use the README's "**Live:**" URL if it declares one (e.g. a Vercel site),
// otherwise fall back to the project's GitHub Pages address.
function liveUrlFor(repo, data) {
  return (data && data.liveUrl) || `https://hemasri-kalaiselvan.github.io/${repo}/`
}

// A compact index of every project's live site, so a visitor can open any
// demo directly without going into each project's case-study page first.
// The list is driven by the same `projects` array as the cards, so adding a
// new repo there automatically adds it here too — no extra upkeep.
export default function LiveDemos() {
  const [items, setItems] = useState([])

  useEffect(() => {
    let active = true
    const shown = projects.filter((repo) => !EXCLUDE.includes(repo))
    Promise.all(
      shown.map((repo) =>
        loadProject(repo)
          .then((data) => ({
            repo,
            title: data.title || prettyRepoName(repo),
            url: liveUrlFor(repo, data),
          }))
          .catch(() => ({
            repo,
            title: prettyRepoName(repo),
            url: liveUrlFor(repo, null),
          }))
      )
    ).then((resolved) => {
      if (active) setItems(resolved)
    })
    return () => {
      active = false
    }
  }, [])

  if (items.length === 0) return null

  return (
    <div className="livedemos" aria-label="Live demos">
      <span className="livedemos__label">Live demos</span>
      <ul className="livedemos__list">
        {items.map((item) => (
          <li key={item.repo} className="livedemos__item">
            <a
              className="livedemos__link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
