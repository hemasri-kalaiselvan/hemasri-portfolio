# Portfolio Website — Prompt Document

*Final version — the consolidated prompt that describes the website as it currently stands. The base was drafted with ChatGPT and finalized with Claude during building and deployment.*

---

## How to use this document

This is a single, complete prompt you could give to an AI assistant to build this portfolio. It captures the final requirements — not the step-by-step changes made along the way. Everything here reflects what the site actually is today.

---

## The prompt

Build a polished, modern, professional, responsive personal portfolio website for **Hemasri Kalaiselvan**. This is not a student portfolio. It represents an experienced IT professional with a background at TCS in Mainframe and Big Data, now exploring Artificial Intelligence and emerging technologies.

Present the career as one connected journey — **Experience → Evolution → Exploration → Building → Growth** — not as an old career and a separate new identity.

### Technical requirements

- Use React and Vite, with reusable components and structured content.
- Keep all personal content in a single, well-commented content file, separate from the code, so updates are simple text edits.
- Must be compatible with GitHub Pages: static build, correct asset paths, and a routing strategy (hash-based routing) that makes project detail pages work without server configuration.
- Keep the structure clean, maintainable, and easy to expand.

### Structure

A single-page portfolio with smooth scrolling and these sections: Home, About, Experience, Skills, Projects, AI Exploration, Certifications, Career Highlights, Resume, Contact. Each project also opens as its own case-study page.

Include a way to show or hide whole sections from the content file, without editing code. Home, Resume, and Contact are always shown; every other section can be switched on or off. Hiding a section removes it from both the page and the menu, and hiding never deletes its content.

### Section details

- **Home / Hero:** name, a professional headline, a supporting tagline (Mainframe · Big Data · Exploring AI · Building practical solutions), a short introduction, an optional professional photo (show a clean monogram if none), and buttons to explore experience and view projects.
- **About:** a genuine, mature professional story connecting enterprise experience, Mainframe, Big Data, continuous learning, and AI exploration. Avoid generic lines like "passionate developer who loves coding."
- **Experience:** support company, role, duration, technology areas, responsibilities, contributions, projects, and achievements. Do not invent any of these.
- **Skills:** group into Enterprise Technologies, Data Technologies, Artificial Intelligence, and Development. Only show real skills.
- **Projects:** reusable project cards with name, summary, purpose, solution, role, features, technologies, status, and links, each linking to a full case-study page. Do not invent features, technologies, metrics, or links.
- **AI Exploration:** genuine hands-on AI work, following Explore → Experiment → Build → Document, with topic, description, what was explored, tools used, experiment, implementation, and key learning.
- **Certifications:** real credentials only — name, issuer, date, topics covered, and a verification link where available.
- **Career Highlights:** genuine milestones, contributions, and recognition.
- **Resume:** a short professional summary and a downloadable resume; do not fabricate a resume file.
- **Contact:** email, LinkedIn, GitHub, and any other professional links; hide fields that are empty. No contact form in the initial version.

### Design direction

Professional, modern, clean, elegant, mature, minimal. Use a restrained palette — deep navy primary with blue and teal accents. Provide light and dark modes (light default; dark avoids pure black and neon) and remember the visitor's choice. Use modern, highly readable typography with clear hierarchy. Avoid student-portfolio styling, neon effects, heavy gradients, glowing effects, moving backgrounds, decorative technology icons, and clutter.

### Responsiveness and accessibility

Mobile-first and fully responsive across phone, tablet, laptop, and desktop — not a shrunk desktop layout. No horizontal overflow, readable text, comfortable touch targets, and mobile-friendly navigation. Use semantic HTML, good contrast, meaningful labels, clear focus states, keyboard accessibility, and respect reduced-motion preferences.

### Content accuracy rule (mandatory)

Do not invent or fabricate job titles, responsibilities, clients, achievements, awards, certifications, technologies, project features, results, statistics, contact details, or links. Where real information is not yet available, keep the structure ready and show a clean placeholder — never make placeholder content look real.

### Final goal

A polished, production-quality, long-term professional portfolio that clearly communicates an experienced technologist's journey from Mainframe and Big Data into AI, showcases real projects and certifications, and is built to grow over time with minimal effort.
