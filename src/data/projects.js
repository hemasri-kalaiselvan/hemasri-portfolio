// This file reads from the single personal-data file: my-content.js
// You do NOT need to edit this file. Edit my-content.js instead
// (there, a project is simply its GitHub repository name).

import { projects as projectRepos } from './my-content'

// The list of repo names, exactly as written in my-content.js.
export const projects = projectRepos

// Look up a repo name by its slug. The slug IS the repo name here, so this
// just confirms the repo is in the list (returns the repo name or undefined).
export const getProjectRepo = (slug) =>
  projectRepos.find((repo) => repo === slug)
