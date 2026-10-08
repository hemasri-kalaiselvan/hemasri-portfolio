import { profile } from '../data/profile'
import Icon from '../components/Icon'
import './Hero.css'

export default function Hero() {
  const { name, hero, about } = profile
  const pills = hero.pills || []
  const stats = hero.stats || []

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  // The hero now doubles as the "About" intro, so it shows the first
  // About paragraph beneath the tagline — Home and About read as one.
  const aboutLead = about?.paragraphs?.[0] || hero.intro

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">15+ years in technology</p>
          <h1 className="hero__name">{name}</h1>
          <p className="hero__headline">{hero.headline}</p>
          <p className="hero__tagline">{hero.tagline}</p>

          {pills.length > 0 && (
            <ul className="hero__pills" aria-label="Focus areas">
              {pills.map((p) => (
                <li key={p} className="hero__pill">{p}</li>
              ))}
            </ul>
          )}

          <p className="hero__intro">{aboutLead}</p>

          <div className="hero__cta">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View projects
              <Icon name="arrowRight" size={17} />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('experience')}>
              Explore experience
            </button>
          </div>

          {stats.length > 0 && (
            <dl className="hero__stats" aria-label="At a glance">
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <dt className="hero__stat-value">{s.value}</dt>
                  <dd className="hero__stat-label">{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="hero__aside" aria-hidden={hero.photo ? undefined : 'true'}>
          {hero.photo ? (
            <img
              className="hero__photo"
              src={
                /^https?:\/\//.test(hero.photo)
                  ? hero.photo
                  : import.meta.env.BASE_URL.replace(/\/$/, '') +
                    '/' +
                    hero.photo.replace(/^\//, '')
              }
              alt={name}
            />
          ) : (
            <div className="hero__monogram">
              <span className="hero__monogram-mark">{initials}</span>
              <div className="hero__monogram-journey">
                <span>Experience</span>
                <span>Evolution</span>
                <span>Exploration</span>
                <span>Building</span>
                <span>Growth</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
