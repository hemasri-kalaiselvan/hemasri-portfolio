import { profile } from '../data/profile'
import Icon from '../components/Icon'
import './Hero.css'

export default function Hero() {
  const { name, hero } = profile

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

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">15+ years in technology</p>
          <h1 className="hero__name">{name}</h1>
          <p className="hero__headline">{hero.headline}</p>
          <p className="hero__tagline">{hero.tagline}</p>
          <p className="hero__intro">{hero.intro}</p>
          <div className="hero__cta">
            <button className="btn btn--primary" onClick={() => scrollTo('experience')}>
              Explore experience
              <Icon name="arrowRight" size={17} />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('projects')}>
              View projects
            </button>
          </div>
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
