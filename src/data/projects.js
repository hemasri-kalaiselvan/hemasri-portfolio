// This file now reads from the single personal-data file: my-content.js
// You do NOT need to edit this file. Edit my-content.js instead.
import { projects } from './my-content'
export { projects }
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
