import Section from '../components/Section'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Practical things, built and documented"
      intro="Each project opens into a full case study. Only completed or actively documented work appears here."
    >
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
