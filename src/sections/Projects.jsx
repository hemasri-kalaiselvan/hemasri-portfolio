//
import Section from '../components/Section'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects & AI Exploration"
      title="Practical things, built and documented"
      intro="Each project opens into a full case study, including how AI helped build it. Details are read directly from each project's repository."
    >
      <div className="projects__grid">
        {projects.map((repo) => (
          <ProjectCard key={repo} repo={repo} />
        ))}
      </div>
    </Section>
  )
}
