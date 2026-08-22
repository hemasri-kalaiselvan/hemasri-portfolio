import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import Icon from '../components/Icon'
import './ProjectDetail.css'

function Block({ eyebrow, title, children }) {
  return (
    <section className="pd__block">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="pd__block-title">{title}</h2>}
      {children}
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
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

  const backToProjects = () => {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  const hasLinks = project.links?.live || project.links?.source

  return (
    <main className="pd">
      <div className="container">
        <button className="pd__back" onClick={backToProjects}>
          <Icon name="arrowLeft" size={16} />
          Back to projects
        </button>

        <header className="pd__header">
          <div className="pd__header-top">
            <h1 className="pd__title">{project.name}</h1>
            {project.status && (
              <span className="pd__status">{project.status}</span>
            )}
          </div>
          <p className="pd__lead">{project.summary}</p>

          {hasLinks && (
            <div className="pd__links">
              {project.links.live && (
                <a
                  className="btn btn--primary"
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="external" size={16} />
                  Live project
                </a>
              )}
              {project.links.source && (
                <a
                  className="btn btn--ghost"
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" size={16} />
                  Source code
                </a>
              )}
            </div>
          )}
        </header>

        <div className="pd__body">
          {project.purpose && (
            <Block eyebrow="Problem / purpose" title="Why it exists">
              <p className="pd__text">{project.purpose}</p>
            </Block>
          )}

          {project.solution && (
            <Block eyebrow="Solution" title="How it works">
              <p className="pd__text">{project.solution}</p>
            </Block>
          )}

          {project.role && (
            <Block eyebrow="My role & contribution">
              <p className="pd__text">{project.role}</p>
            </Block>
          )}

          {project.features?.length > 0 && (
            <Block eyebrow="Key features">
              <ul className="pd__features">
                {project.features.map((f) => (
                  <li key={f.name} className="pd__feature card">
                    <h3 className="pd__feature-name">{f.name}</h3>
                    {f.text && <p className="pd__feature-text">{f.text}</p>}
                  </li>
                ))}
              </ul>
              {project.featureNote && (
                <p className="placeholder-note pd__feature-note">
                  {project.featureNote}
                </p>
              )}
            </Block>
          )}

          <Block eyebrow="Technologies used">
            {project.technologies?.length > 0 ? (
              <div className="pd__tech">
                {project.technologies.map((t) => (
                  <span key={t} className="chip chip--tech">
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <p className="placeholder-note">
                The technology stack will be documented here
              </p>
            )}
          </Block>

          {project.architecture && (
            <Block eyebrow="Architecture / workflow">
              <p className="pd__text">{project.architecture}</p>
            </Block>
          )}

          <Block eyebrow="Screenshots / demonstrations">
            {project.screenshots?.length > 0 ? (
              <div className="pd__shots">
                {project.screenshots.map((s, i) => (
                  <figure key={i} className="pd__shot card">
                    <img src={s.src} alt={s.alt || `${project.name} screenshot ${i + 1}`} />
                    {s.caption && <figcaption>{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="pd__shot-empty card">
                <p className="placeholder-note">
                  Screenshots, images, or a demo video will appear here
                </p>
              </div>
            )}
          </Block>

          {project.challenges?.length > 0 && (
            <Block eyebrow="Challenges">
              <ul className="pd__list">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </Block>
          )}

          {project.learnings?.length > 0 && (
            <Block eyebrow="Key learnings">
              <ul className="pd__list">
                {project.learnings.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </Block>
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
