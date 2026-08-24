// Navigation items for the single-page portfolio.
// `id` matches each section's HTML id for smooth scrolling.
//
// Menu links respect the show/hide switches in my-content.js
// (sectionVisibility). Hide a section there and its menu link
// disappears automatically too.

import { sectionVisibility } from './my-content'

const allNavItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About', key: 'about' },
  { id: 'experience', label: 'Experience', key: 'experience' },
  { id: 'skills', label: 'Skills', key: 'skills' },
  { id: 'projects', label: 'Projects', key: 'projects' },
  { id: 'ai-exploration', label: 'AI Exploration', key: 'aiExploration' },
  { id: 'certifications', label: 'Certifications', key: 'certifications' },
  { id: 'highlights', label: 'Highlights', key: 'highlights' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

// Keep an item if it has no key (always-on: Home, Resume, Contact)
// or if its section is switched on in sectionVisibility.
export const navItems = allNavItems.filter(
  (item) => !item.key || sectionVisibility[item.key]
)
