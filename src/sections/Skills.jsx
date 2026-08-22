import Section from '../components/Section'
import { skillCategories } from '../data/skills'
import Icon from '../components/Icon'
import './Skills.css'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & technologies"
      title="Grouped by where they live in the journey"
      intro="From enterprise systems to emerging tools. Only technologies genuinely used or explored appear here — this list grows as the work does."
      alt
    >
      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <article key={cat.id} className="skills__card card">
            <div className="skills__head">
              <span className="skills__icon">
                <Icon name={cat.icon} size={20} />
              </span>
              <h3 className="skills__title">{cat.title}</h3>
            </div>
            <p className="skills__desc">{cat.description}</p>
            {cat.items.length > 0 ? (
              <ul className="skills__tags">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="placeholder-note">Ready to add as it is applied</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
