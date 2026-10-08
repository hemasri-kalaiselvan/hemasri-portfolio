import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import AIExploration from '../sections/AIExploration'
import Certifications from '../sections/Certifications'
import Highlights from '../sections/Highlights'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'
import { sectionVisibility } from '../data/my-content'

// Section order: Home (with merged About) → Projects → Skills → Experience
// → Education → Certifications → Resume → Contact.
// About is merged into the Home hero (sectionVisibility.about is false).
// AI Exploration and Highlights only appear if switched on in my-content.js.
export default function Home() {
  return (
    <main>
      <Hero />
      {sectionVisibility.about && <About />}
      {sectionVisibility.projects && <Projects />}
      {sectionVisibility.skills && <Skills />}
      {sectionVisibility.experience && <Experience />}
      <Education />
      {sectionVisibility.aiExploration && <AIExploration />}
      {sectionVisibility.certifications && <Certifications />}
      {sectionVisibility.highlights && <Highlights />}
      <Resume />
      <Contact />
    </main>
  )
}
