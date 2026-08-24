import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import AIExploration from '../sections/AIExploration'
import Certifications from '../sections/Certifications'
import Highlights from '../sections/Highlights'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'
import { sectionVisibility } from '../data/my-content'

export default function Home() {
  return (
    <main>
      <Hero />
      {sectionVisibility.about && <About />}
      {sectionVisibility.experience && <Experience />}
      {sectionVisibility.skills && <Skills />}
      {sectionVisibility.projects && <Projects />}
      {sectionVisibility.aiExploration && <AIExploration />}
      {sectionVisibility.certifications && <Certifications />}
      {sectionVisibility.highlights && <Highlights />}
      <Resume />
      <Contact />
    </main>
  )
}
