import Section from '../components/Section'
import { profile } from '../data/profile'
import Icon from '../components/Icon'
import './Contact.css'

export default function Contact() {
  const { contact } = profile

  // Build the list of links from real values only.
  const links = []
  if (contact.email)
    links.push({ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: 'mail' })
  if (contact.linkedin)
    links.push({ label: 'LinkedIn', value: 'Connect on LinkedIn', href: contact.linkedin, icon: 'linkedin' })
  if (contact.github)
    links.push({ label: 'GitHub', value: 'View GitHub', href: contact.github, icon: 'github' })
  contact.other?.forEach((o) =>
    links.push({ label: o.label, value: o.label, href: o.url, icon: 'external' })
  )

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      intro="Open to conversations around technology, projects, and where the industry is heading."
    >
      {links.length > 0 ? (
        <div className="contact__grid">
          {links.map((link) => (
            <a
              key={link.label}
              className="contact__item card"
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <span className="contact__icon">
                <Icon name={link.icon} size={20} />
              </span>
              <span className="contact__text">
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">{link.value}</span>
              </span>
              <span className="contact__arrow">
                <Icon name="arrowRight" size={16} />
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="contact__empty card">
          <p className="placeholder-note">
            Contact details will be added here (email, LinkedIn, GitHub)
          </p>
        </div>
      )}
    </Section>
  )
}
