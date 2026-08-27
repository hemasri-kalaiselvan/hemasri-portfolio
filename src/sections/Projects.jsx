import Section from '../components/Section'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const PHASES = ['Explore', 'Experiment', 'Build', 'Document']

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects & AI Exploration"
      title="Practical things, built and documented"
      intro="Each project opens into a full case study, including how AI helped build it. Details are read directly from each project's repository."
    >
      <div className="projects__flow" aria-label="Exploration approach">
        {PHASES.map((phase, i) => (
          <div key={phase} className="projects__phase">
            <span className="projects__phase-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="projects__phase-name">{phase}</span>
            {i < PHASES.length - 1 && (
              <span className="projects__phase-arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="projects__grid">
        {projects.map((repo) => (
          <ProjectCard key={repo} repo={repo} />
        ))}
      </div>
    </Section>
  )
}
