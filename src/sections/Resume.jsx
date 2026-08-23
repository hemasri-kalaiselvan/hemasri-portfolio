import Section from '../components/Section'
import { profile } from '../data/profile'
import Icon from '../components/Icon'
import './Resume.css'

export default function Resume() {
  const { resume } = profile
  const base = import.meta.env.BASE_URL
  const resumeHref = resume.resumeFile
    ? `${base}${resume.resumeFile.replace(/^\//, '')}`
    : null
  
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="A concise professional summary"
    >
      <div className="resume__card card">
        <div className="resume__summary">
          <p>{resume.summary}</p>
        </div>
        <div className="resume__actions">
          {resume.resumeFile ? (
            <a
              className="btn btn--primary"
              //href={resume.resumeFile}
              href={resumeHref}
              download
            >
              <Icon name="download" size={17} />
              Download resume
            </a>
          ) : (
            <span className="btn btn--ghost resume__disabled" aria-disabled="true">
              <Icon name="document" size={17} />
              Downloadable resume coming soon
            </span>
          )}
          {resume.onlineResumeUrl && (
            <a
              className="btn btn--ghost"
              href={resume.onlineResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View online resume
              <Icon name="external" size={16} />
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
