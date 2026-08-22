import Section from '../components/Section'
import { aiExplorations } from '../data/journey'
import './AIExploration.css'

const PHASES = ['Explore', 'Experiment', 'Build', 'Document']

function EmptyState() {
  return (
    <div className="ai__empty card">
      <p className="ai__empty-text">
        This space documents genuine, hands-on exploration of AI and emerging
        technologies — following a simple rhythm of learning by doing. Entries
        will appear here as the work takes shape.
      </p>
      <p className="placeholder-note">First exploration entry coming soon</p>
    </div>
  )
}

function ExplorationEntry({ entry }) {
  return (
    <article className="ai__entry card">
      <h3 className="ai__topic">{entry.topic}</h3>
      {entry.description && <p className="ai__desc">{entry.description}</p>}
      <dl className="ai__meta">
        {entry.explored && (
          <div>
            <dt>Explored</dt>
            <dd>{entry.explored}</dd>
          </div>
        )}
        {entry.experiment && (
          <div>
            <dt>Experiment</dt>
            <dd>{entry.experiment}</dd>
          </div>
        )}
        {entry.implementation && (
          <div>
            <dt>Implementation</dt>
            <dd>{entry.implementation}</dd>
          </div>
        )}
        {entry.learning && (
          <div>
            <dt>Key learning</dt>
            <dd>{entry.learning}</dd>
          </div>
        )}
      </dl>
      {entry.tools?.length > 0 && (
        <div className="ai__tools">
          {entry.tools.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default function AIExploration() {
  return (
    <Section
      id="ai-exploration"
      eyebrow="AI Exploration"
      title="Learning the way I've always worked — by building"
      intro="Not a wall of certificates, but a record of real exploration and practical work."
      alt
    >
      <div className="ai__flow" aria-label="Exploration approach">
        {PHASES.map((phase, i) => (
          <div key={phase} className="ai__phase">
            <span className="ai__phase-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="ai__phase-name">{phase}</span>
            {i < PHASES.length - 1 && <span className="ai__phase-arrow" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div className="ai__entries">
        {aiExplorations.length > 0 ? (
          aiExplorations.map((entry) => (
            <ExplorationEntry key={entry.id} entry={entry} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </Section>
  )
}
