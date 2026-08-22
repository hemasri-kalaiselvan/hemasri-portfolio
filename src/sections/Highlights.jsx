import Section from '../components/Section'
import { highlights } from '../data/journey'
import Icon from '../components/Icon'
import './Highlights.css'

export default function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="Career highlights"
      title="Milestones along the way"
      intro="Key moments, contributions, and recognition — added as the story unfolds."
      alt
    >
      {highlights.length > 0 ? (
        <ul className="hl__list">
          {highlights.map((h) => (
            <li key={h.id} className="hl__item card">
              <span className="hl__flag">
                <Icon name="flag" size={18} />
              </span>
              <div>
                <h3 className="hl__title">{h.title}</h3>
                {h.detail && <p className="hl__detail">{h.detail}</p>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="hl__empty card">
          <span className="hl__flag">
            <Icon name="flag" size={20} />
          </span>
          <p className="placeholder-note">
            Career milestones and achievements will be highlighted here
          </p>
        </div>
      )}
    </Section>
  )
}
