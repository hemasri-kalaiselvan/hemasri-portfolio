import { useReveal } from '../hooks/useReveal'

// Standard section shell: id anchor, eyebrow label, title, intro.
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  alt = false,
  children,
}) {
  const ref = useReveal()
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <div ref={ref} className="reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="section-title">{title}</h2>}
          {intro && <p className="section-intro">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
