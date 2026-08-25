import { useEffect, useState, lazy, Suspense } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectRepo } from '../data/projects'
import { loadProject, repoUrl } from '../lib/readme'
import Icon from '../components/Icon'
import './ProjectDetail.css'

// react-markdown is only loaded when a project page is actually opened,
// so it never affects the speed of the main site.
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const repo = getProjectRepo(slug)

  const [data, setData] = useState(null)
  const [state, setState] = useState('loading') // loading | ready | error

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!repo) return
    let active = true
    setState('loading')
    loadProject(repo)
      .then((d) => {
        if (!active) return
        setData(d)
        setState(d.body ? 'ready' : 'error')
      })
      .catch(() => active && setState('error'))
    return () => {
      active = false
    }
  }, [repo])

  const backToProjects = () => {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  // Repo not even listed in my-content.js
  if (!repo) {
    return (
      <main className="pd">
        <div className="container pd__notfound">
          <p className="eyebrow">Not found</p>
          <h1 className="pd__title">This project doesn't exist yet</h1>
          <p className="pd__lead">
            The project you're looking for isn't available. It may be added in the future.
          </p>
          <Link className="btn btn--primary" to="/">
            <Icon name="arrowLeft" size={16} />
            Back to portfolio
          </Link>
        </div>
      </main>
    )
  }

  const title = data?.title || slug
  const description = data?.description
  const tech = data?.tech || []
  const tools = data?.tools || []
  const aiTools = data?.aiTools || []

  return (
    <main className="pd">
      <div className="container">
        <button className="pd__back" onClick={backToProjects}>
          <Icon name="arrowLeft" size={16} />
          Back to projects
        </button>

        <header className="pd__header">
          <div className="pd__header-top">
            <h1 className="pd__title">{title}</h1>
          </div>
          {description && <p className="pd__lead">{description}</p>}

          {(tech.length > 0 || tools.length > 0 || aiTools.length > 0) && (
            <div className="pd__tags">
              {tech.map((t) => (
                <span key={`tech-${t}`} className="chip chip--tech">{t}</span>
              ))}
              {tools.map((t) => (
                <span key={`tool-${t}`} className="chip chip--tech">{t}</span>
              ))}
              {aiTools.map((t) => (
                <span key={`ai-${t}`} className="chip chip--ai">{t}</span>
              ))}
            </div>
          )}

          <div className="pd__links">
            <a
              className="btn btn--primary"
              href={`https://hemasri-kalaiselvan.github.io/${repo}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="external" size={16} />
              Live project
            </a>
            <a
              className="btn btn--ghost"
              href={repoUrl(repo)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={16} />
              Source code
            </a>
          </div>
        </header>

        <div className="pd__body">
          {state === 'loading' && (
            <p className="placeholder-note">Loading project details…</p>
          )}

          {state === 'error' && (
            <p className="placeholder-note">
              Project details will load from the repository. You can also view
              the project directly using the links above.
            </p>
          )}

          {state === 'ready' && (
            <Suspense fallback={<p className="placeholder-note">Rendering…</p>}>
              <div className="pd__markdown">
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => (
                      <a target="_blank" rel="noopener noreferrer" {...props} />
                    ),
                  }}
                >
                  {data.body}
                </ReactMarkdown>
              </div>
            </Suspense>
          )}
        </div>

        <div className="pd__footer">
          <button className="btn btn--ghost" onClick={backToProjects}>
            <Icon name="arrowLeft" size={16} />
            Back to all projects
          </button>
        </div>
      </div>
    </main>
  )
}
