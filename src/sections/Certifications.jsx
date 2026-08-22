import Section from '../components/Section'
import { certifications } from '../data/journey'
import Icon from '../components/Icon'
import './Certifications.css'

// Resolve an image path against the site base (works in the GitHub Pages subfolder).
function resolveImg(path) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}

function CertCard({ cert }) {
  const img = resolveImg(cert.image)
  return (
    <article className="certs__card card">
      {img && (
        <a
          className="certs__image-wrap"
          href={cert.verifyUrl || img}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.name} certificate`}
        >
          <img className="certs__image" src={img} alt={`${cert.name} certificate`} />
        </a>
      )}

      <div className="certs__body">
        <div className="certs__head">
          <span className="certs__icon">
            <Icon name="badge" size={18} />
          </span>
          <div>
            <h3 className="certs__name">{cert.name}</h3>
            {cert.issuer && <p className="certs__issuer">{cert.issuer}</p>}
          </div>
        </div>

        {cert.description && <p className="certs__desc">{cert.description}</p>}

        {cert.covers?.length > 0 && (
          <ul className="certs__covers">
            {cert.covers.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        )}

        <div className="certs__footer">
          {cert.date && <span className="certs__date">{cert.date}</span>}
          {cert.verifyUrl && (
            <a
              className="certs__verify"
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify credential
              <Icon name="external" size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials"
      intro="Certifications from hands-on learning, shown with what they cover and a link to verify."
    >
      {certifications.length > 0 ? (
        <div className="certs__grid">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <div className="certs__empty card">
          <span className="certs__icon">
            <Icon name="badge" size={22} />
          </span>
          <p className="placeholder-note">Certifications will be added here</p>
        </div>
      )}
    </Section>
  )
}
