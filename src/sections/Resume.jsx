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
      title="Resume"
    >
      <div className="resume__card card">
        <div className="resume__actions">
          {resumeHref && (
            <a
              className="btn btn--primary"
              href={resumeHref}
              download
            >
              <Icon name="download" size={17} />
              Download resume
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
