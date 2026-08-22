import Section from '../components/Section'
import { profile } from '../data/profile'
import './About.css'

export default function About() {
  const { about } = profile
  return (
    <Section
      id="about"
      eyebrow="About"
      title="One continuous journey, not two careers"
      alt
    >
      <div className="about__grid">
        <div className="about__prose">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="about__pillars" aria-label="Career pillars">
          {about.pillars.map((pillar, i) => (
            <li key={pillar.label} className="about__pillar">
              <span className="about__pillar-index">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="about__pillar-label">{pillar.label}</h3>
                <p className="about__pillar-text">{pillar.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
