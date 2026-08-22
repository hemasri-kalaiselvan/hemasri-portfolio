import Section from '../components/Section'
import { certifications } from '../data/journey'
import Icon from '../components/Icon'
import './Certifications.css'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials"
      intro="Professional certifications, shown with their providers and verification links."
    >
      {certifications.length > 0 ? (
        <div className="certs__grid">
          {certifications.map((cert) => (
            <article key={cert.id} className="certs__card card">
              <span className="certs__icon">
                <Icon name="badge" size={20} />
              </span>
              <div className="certs__body">
                <h3 className="certs__name">{cert.name}</h3>
                <p className="certs__provider">{cert.provider}</p>
                <div className="certs__meta">
                  {cert.subject && <span className="chip">{cert.subject}</span>}
                  {cert.date && <span className="certs__date">{cert.date}</span>}
                </div>
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
            </article>
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
