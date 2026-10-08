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
            <h3 className="edu__degree">{item.degree}</h3>
            {item.institution && (
              <p className="edu__institution">{item.institution}</p>
            )}
            {item.period && <p className="edu__period">{item.period}</p>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
