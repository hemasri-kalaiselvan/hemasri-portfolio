import { Link } from 'react-router-dom'
import Icon from './Icon'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const featureNames = project.features?.map((f) => f.name) ?? []

  return (
    <article className="pcard card">
      <div className="pcard__top">
        <h3 className="pcard__name">{project.name}</h3>
        {project.status && (
          <span className="pcard__status">{project.status}</span>
        )}
      </div>

      <p className="pcard__summary">{project.summary}</p>

      {featureNames.length > 0 && (
        <div className="pcard__features">
          <span className="pcard__features-label">Features</span>
          <ul className="pcard__chips">
            {featureNames.map((name) => (
              <li key={name} className="chip">
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies?.length > 0 ? (
        <div className="pcard__tech">
          {project.technologies.map((t) => (
            <span key={t} className="chip chip--tech">
              {t}
            </span>
          ))}
        </div>
      ) : (
        <p className="placeholder-note pcard__tech-note">Technologies to be added</p>
      )}

      <div className="pcard__footer">
        <Link className="pcard__link" to={`/projects/${project.slug}`}>
          View case study
          <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  )
}
