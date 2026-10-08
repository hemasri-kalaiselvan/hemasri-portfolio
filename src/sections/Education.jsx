import Section from '../components/Section'
import { education } from '../data/education'
import './Education.css'

export default function Education() {
  if (!education || education.length === 0) return null

  return (
    <Section
      id="education"
      title="Education"
    >
      <ul className="edu__list">
        {education.map((item) => (
          <li key={item.id} className="edu__item card">
            <div className="edu__row">
              <span className="edu__degree">{item.degree}</span>
              {item.institution && (
                <span className="edu__institution">{item.institution}</span>
              )}
              {item.period && <span className="edu__period">{item.period}</span>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
