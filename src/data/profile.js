// This file now reads from the single personal-data file: my-content.js
// You do NOT need to edit this file. Edit my-content.js instead.
import { identity, about, resume, contact } from './my-content'

export const profile = {
  name: identity.name,
  brandShort: identity.name,
  hero: {
    headline: identity.headline,
    tagline: identity.tagline,
    intro: identity.intro,
    photo: identity.photo,
  },
  about,
  resume,
  contact,
}
