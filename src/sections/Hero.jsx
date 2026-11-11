import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  const { name, hero, about } = profile
  const pills = hero.pills || []
  const stats = hero.stats || []

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  // The hero doubles as the "About" intro, so it shows the first About
  // paragraph beneath the headline — Home and About read as one section.
  // Scroll to the section a circle points at (same behaviour as the menu).
  const goTo = (id) => {
    const el = id && document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const aboutLead = about?.paragraphs?.[0] || hero.intro

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__name">{name}</h1>
          <p className="hero__headline">{hero.headline}</p>

          {pills.length > 0 && (
            <ul className="hero__pills" aria-label="Focus areas">
              {pills.map((p) => (
                <li key={p} className="hero__pill">{p}</li>
              ))}
            </ul>
          )}

          <p className="hero__intro">{aboutLead}</p>

          {stats.length > 0 && (
            <ul className="hero__stats" aria-label="At a glance">
              {stats.map((s) => (
                <li key={s.label}>
                  <button
                    type="button"
                    className="hero__stat"
                    onClick={() => goTo(s.target)}
                    aria-label={`${s.value} ${s.label} — go to section`}
                  >
                    <span className="hero__stat-value">{s.value}</span>
                    <span className="hero__stat-label">{s.label}</span>
                  </button>
                </li>
              ))}
            </ul>
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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
