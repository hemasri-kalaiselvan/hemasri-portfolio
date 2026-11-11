import Section from '../components/Section'
import { skillCategories } from '../data/skills'
import Icon from '../components/Icon'
import './Skills.css'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      alt
    >
      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <article key={cat.id} id={cat.id} className="skills__card card">
            <div className="skills__head">
              <span className="skills__icon">
                <Icon name={cat.icon} size={20} />
              </span>
              <h3 className="skills__title">{cat.title}</h3>
            </div>
            <p className="skills__desc">{cat.description}</p>
            {cat.items.length > 0 && (
              <ul className="skills__tags">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {cat.links?.length > 0 && (
              <div className="skills__links">
                {cat.links.map((l) => (
                  <a
                    key={l.url}
                    className="btn btn--ghost skills__link"
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                    <Icon name="external" size={15} />
                  </a>
                ))}
              </div>
            )}
            {cat.items.length === 0 && !cat.links?.length && (
              <p className="placeholder-note">Ready to add as it is applied</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
