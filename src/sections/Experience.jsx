import { useState } from 'react'
import Section from '../components/Section'
import { experience } from '../data/experience'
import './Experience.css'

function DetailBlock({ label, items }) {
  if (!items || items.length === 0) return null

  // Supports two shapes:
  // 1) a flat list of strings: ['A', 'B']
  // 2) grouped sub-sections:   [{ title: 'X', items: ['A','B'] }, ...]
  const isGrouped =
    typeof items[0] === 'object' && items[0] !== null && 'items' in items[0]

  return (
    <div className="exp__detail">
      <h4 className="exp__detail-title">{label}</h4>

      {isGrouped ? (
        <div className="exp__detail-groups">
          {items.map((group, gi) => (
            <div key={gi} className="exp__detail-group">
              {group.title && (
                <h5 className="exp__detail-subtitle">{group.title}</h5>
              )}
              <ul className="exp__detail-list">
                {group.items?.map((it, i) => (
                  <li key={i}>{typeof it === 'string' ? it.trim() : it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="exp__detail-list">
          {items.map((it, i) => (
            <li key={i}>{typeof it === 'string' ? it.trim() : it}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceEntry({ entry, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  const hasDetails =
    (entry.responsibilities && entry.responsibilities.length) ||
    (entry.contributions && entry.contributions.length) ||
    (entry.projects && entry.projects.length) ||
    (entry.achievements && entry.achievements.length)

  const role = Array.isArray(entry.role) ? entry.role.join(' · ') : entry.role
  const where = [entry.company, entry.location].filter(Boolean).join(', ')
  const when = [entry.period, entry.duration].filter(Boolean).join(' · ')

  return (
    <li className="exp__item">
      <div className="exp__card card">
        <button
          className="exp__head"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <div className="exp__head-main">
            {/* Row 1: role (left) + company/location (right) */}
            <div className="exp__line">
              {role ? (
                <span className="exp__line-role">{role}</span>
              ) : (
                <span className="placeholder-note">Role to be added</span>
              )}
              {where && <span className="exp__line-meta exp__line-where">{where}</span>}
            </div>
            {/* Row 2: dates · total years */}
            {when && <p className="exp__line-when">{when}</p>}
          </div>
          <div className="exp__head-meta">
            {entry.current && <span className="exp__badge">Current</span>}
            <span className={`exp__chevron${open ? ' is-open' : ''}`} aria-hidden="true" />
          </div>
        </button>

        <div className={`exp__body${open ? ' is-open' : ''}`}>
          <div className="exp__body-inner">
            {hasDetails ? (
              <div className="exp__details">
                <DetailBlock label="Responsibilities" items={entry.responsibilities} />
                <div className="exp__details-pair">
                  <DetailBlock label="Key contributions" items={entry.contributions} />
                  <DetailBlock label="Domain" items={entry.projects} />
                </div>
                <DetailBlock label="Achievements" items={entry.achievements} />
              </div>
            ) : (
              <p className="placeholder-note exp__placeholder">
                Detailed responsibilities, contributions, projects, and achievements
                will be added here.
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Professional experience"
    >
      <ol className="exp__timeline">
        {experience.map((entry, i) => (
          <ExperienceEntry key={entry.id} entry={entry} defaultOpen={i === 0} />
        ))}
      </ol>
    </Section>
  )
}
