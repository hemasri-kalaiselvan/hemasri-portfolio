import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { loadProject, prettyRepoName } from '../lib/readme'
import './ProjectCard.css'

// A project card is built from its GitHub repo README.
// `repo` is the repository name (e.g. 'vetrihub').
export default function ProjectCard({ repo }) {
  const [data, setData] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    loadProject(repo)
      .then((d) => {
        if (active) setData(d)
      })
      .catch(() => {
        if (active) setFailed(true)
      })
    return () => {
      active = false
    }
  }, [repo])

  // While loading, show a light placeholder card.
  const title = data?.title || prettyRepoName(repo)
  const description = data?.description
  const tech = data?.tech || []
  const tools = data?.tools || []
  const aiTools = data?.aiTools || []

  return (
    <article className="pcard card">
      <div className="pcard__top">
        <h3 className="pcard__name">{title}</h3>
      </div>

      {description ? (
        <p className="pcard__summary">{description}</p>
      ) : (
        <p className="pcard__summary pcard__summary--muted">
          {failed ? 'Details will load from the project repository.' : 'Loading project details…'}
        </p>
      )}

      {(tech.length > 0 || tools.length > 0 || aiTools.length > 0) && (
        <div className="pcard__tags">
          {tech.map((t) => (
            <span key={`tech-${t}`} className="chip chip--tech">
              {t}
            </span>
          ))}
          {tools.map((t) => (
            <span key={`tool-${t}`} className="chip chip--tech">
              {t}
            </span>
          ))}
          {aiTools.map((t) => (
            <span key={`ai-${t}`} className="chip chip--ai">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="pcard__footer">
        <Link className="pcard__link" to={`/projects/${repo}`}>
          View case study
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  )
}
