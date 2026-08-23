/* ============================================================================
 *
 *   YOUR PERSONAL INFORMATION — EDIT THIS FILE ONLY
 *
 *   This is the ONLY file you ever need to open to change what appears on
 *   your website. All your text, company names, skills, projects, and links
 *   live here. The rest of the website reads from this file automatically.
 *
 *   HOW TO EDIT SAFELY:
 *   - Only change text that sits between the quote marks:  '...'  or  "..."
 *   - Keep the quote marks. Keep the commas at the end of lines.
 *   - To hide something, set it to  null   (example:  email: null,)
 *   - To show something, put your text in quotes (example: email: 'me@x.com',)
 *   - Lines starting with  //  are notes to you and are ignored by the site.
 *
 *   Example — to mask your name later, just change this:
 *       name: 'Hemasri Kalaiselvan',
 *   to this:
 *       name: 'H. K.',
 *   Save the file. That's it — the whole site updates.
 *
 * ==========================================================================*/


/* ---------------------------------------------------------------------------
 *  1. IDENTITY  — your name and the headline shown at the top
 * ------------------------------------------------------------------------- */

export const identity = {
  // Your name / personal brand, shown in the header and hero.
  // To mask it later, change the text (e.g. 'H. K.' or 'Confidential').
  name: 'Hemasri Kalaiselvan',

  // The big headline under your name.
  headline: 'Experienced technology professional',

  // The one-line summary of your areas.
  tagline: 'Mainframe · Big Data · Exploring AI · Building practical solutions',

  // The short introduction paragraph on the home screen.
  intro:
    'A career in enterprise technology, grounded in Mainframe and Big Data. Today that same journey continues into Artificial Intelligence, emerging technologies, and hands-on projects — one path of experience, evolution, and continuous building.',

  // Path to a profile photo, if you have one.
  // Leave as null to show a clean monogram instead of a photo.
  // To use a photo: put the image file in the "public" folder and write
  // its name here, e.g. photo: '/my-photo.jpg',
  photo: '/my-photo.png',
}


/* ---------------------------------------------------------------------------
 *  2. ABOUT  — your professional story (three short paragraphs)
 * ------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    'My career in enterprise technology is built on the discipline that large-scale Mainframe and Big Data systems demand. Working close to the systems that businesses depend on has shaped how I think about reliability, data, and solving real problems well.',
    'That experience is not a chapter I have closed — it is the ground I build on. As technology has evolved, so has my work, moving from established enterprise platforms toward data at scale and, increasingly, toward Artificial Intelligence and emerging tools.',
    'I explore new technology the way I have always worked: practically. I learn by building, experimenting, and documenting what actually works. This portfolio brings that whole journey together — the experience behind me, the exploration in front of me, and the projects that connect the two.',
  ],

  // The four short pillars shown beside your story. Edit the text only.
  pillars: [
    { label: 'Experience', text: 'Enterprise technology at scale' },
    { label: 'Evolution', text: 'Mainframe and Big Data expertise' },
    { label: 'Exploration', text: 'AI and emerging technologies' },
    { label: 'Building', text: 'Practical projects and solutions' },
  ],
}


/* ---------------------------------------------------------------------------
 *  3. EXPERIENCE  — your work history
 *
 *  Each { ... } block is one company. To add another company, copy a whole
 *  block (from { to },) and paste it below the last one, then edit its text.
 *
 *  To MASK a company name later, change  company: 'TCS'  to
 *  company: 'Private concern'  (or anything you like).
 *
 *  Fields you haven't filled yet: leave role as null, and leave the empty
 *  lists [ ] empty. They show a tidy "to be added" note until you fill them.
 * ------------------------------------------------------------------------- */

export const experience = [
  {
    id: 'tcs',
    company: 'TCS',            // company name — change to mask if needed
    role: ['Developer', 'Production Support'],                // e.g. 'Senior Systems Engineer' — or keep null
    duration: '15+ years',
    period: 'Sep 2009 — Jun 2026',              // e.g. '2009 — Present' — or keep null
    technologyAreas: ['Mainframe', 'Big Data'],
    responsibilities: [
      // 'Add a real responsibility here',
	  {
		  title: 'Development',
          items: [
					'Component development and enhancements',
					'Defect fixes                          ',
					'Unit testing                          ',
					'UAT deployment                        ',
					'UAT batch execution                   ',
					'Production deployment                 ',
					'Post-deployment monitoring            '
					]
	  },
	  {
		  title: 'Production Support',
		  items: [
					'Ticket handling                      ',
					'Issue analysis and resolution        ',
					'Batch monitoring                     ',
					'Bug fixes                            ',
					'Component enhancements and deployment'
					]
	  }
    ],
    contributions: [
      // 'Add a real contribution here',
	  'Component creation',
	  'Application enhancement',
	  'Task automation',
	  'Root cause analysis'
    ],
    projects: [
      // 'Add a real project name here',
	  'Banking', 'Retail'
    ],
    achievements: [
      'Built an automated monitoring job running every 15 minutes that flagged failed, long-running, and SLA-breaching jobs via email — enabling the team to act immediately and keep batches within SLA. Received an Appreciation Award for the same',
      'Automated recurring reports with a job that reads files, generates Excel output, and emails it directly — replacing manual checks and data entry',
      'Introduced input-check flags that skipped downstream jobs when input was empty, avoiding unnecessary CPU usage and reducing processing costs',
      'Developed a job to monitor critical workflow checklists and alert on abnormalities via email, catching batch issues early'
    ],
	  /*achievements: [
      // 'Add a real achievement here',
	  'Automated some recurring production support tasks — Recognized with an Appreciation Award'

    ],*/
    current: false,             // true shows a "Current" badge
  },

  // To add another job, copy the block above and paste it here.
]


/* ---------------------------------------------------------------------------
 *  4. SKILLS  — grouped into four categories
 *
 *  Add your real skills inside the square brackets, each in quotes,
 *  separated by commas. Example:  items: ['COBOL', 'JCL', 'DB2'],
 *  Empty categories show a tidy "ready to add" note.
 * ------------------------------------------------------------------------- */

export const skills = [
  {
    id: 'enterprise',
    title: 'Enterprise technologies',
    description: 'Mainframe and large-scale enterprise systems.',
    icon: 'server',
    items: [
       'COBOL', 'JCL', 'DB2', 'VSAM',
    ],
  },
  {
    id: 'data',
    title: 'Data technologies',
    description: 'Big Data platforms and data processing.',
    icon: 'database',
    items: [
       'Hadoop', 'PySpark', 'Hive', 'Oozie', 'HBase', 'Shell Scripts'
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'AI tools and frameworks explored through practical work.',
    icon: 'sparkles',
    items: [
      // add AI tools as you genuinely explore them
	  'ChatGPT','Claude','Wispr Flow','Replit','Lovable'
    ],
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Technologies used to build projects and products.',
    icon: 'code',
    items: [
      // add web/app technologies you actually use
	  'HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'
    ],
  },
]


/* ---------------------------------------------------------------------------
 *  5. PROJECTS  — each project + its full case-study page
 *
 *  Each { ... } block is one project. The "slug" becomes its web address
 *  (e.g. slug: 'vetrihub'  ->  your-site/#/projects/vetrihub).
 *
 *  Only filled-in fields appear. Empty ones stay hidden or show a
 *  "to be added" note. Never put information you don't actually have.
 * ------------------------------------------------------------------------- */

export const projects = [
  {
    slug: 'vetrihub',
    name: 'VetriHub',
    status: 'Live',                 // e.g. 'Live', 'In progress'
    summary: 'A personal utility website bringing together useful everyday tools.',

    purpose:
      'VetriHub started as a personal need for a single, reliable place to keep practical everyday tools together — built and maintained hands-on rather than pieced together from separate apps.',

    solution:
      'A lightweight utility website that houses a growing set of focused tools under one roof, designed to be simple to use and straightforward to extend with new utilities over time.',

    role:
      'Designed, built, and maintains VetriHub end to end as a personal project.',

    // The real features of the project.
    features: [
      { name: 'Cycle Tracker', text: 'A tool for tracking cycles.' },
      { name: 'Recipe', text: 'A recipe utility.' },
      { name: 'Situations & Solutions', text: 'A practical situations-and-solutions reference.' },
    ],

    // The technologies used. Add them once known, e.g. ['React', 'CSS'].
    //technologies: [],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PWA'],


    architecture: null,   // optional: describe the workflow/architecture
    challenges: [],        // optional: real challenges you faced
    learnings: [],         // optional: real things you learned
    screenshots: [],       // optional: [{ src: '/vetrihub.png', alt: 'VetriHub' }]

    // Real links only. Leave as null until you have them.
    links: {
 	 	live: 'https://hemasri-kalaiselvan.github.io/vetrihub/',
 	 	source: 'https://github.com/hemasri-kalaiselvan/vetrihub',
	},
    featureNote: 'Additional utilities may be added to VetriHub over time.',
  },

  // To add another project, copy the block above and paste it here.
]


/* ---------------------------------------------------------------------------
 *  6. AI EXPLORATION  — genuine hands-on AI work
 *
 *  Starts empty and shows a clean introduction. When you have real work to
 *  show, copy the example block (remove the // at the start of each line)
 *  and fill it in.
 * ------------------------------------------------------------------------- */

export const aiExplorations = [
  // {
  //   id: 'first-exploration',
  //   topic: 'Topic name',
  //   description: 'What this exploration is about.',
  //   explored: 'What you explored.',
  //   tools: ['Tool A', 'Tool B'],
  //   experiment: 'The experiment you ran.',
  //   implementation: 'How you implemented it in practice.',
  //   learning: 'The key thing you learned.',
  // },
]


/* ---------------------------------------------------------------------------
 *  7. CERTIFICATIONS  — real credentials only
 * ------------------------------------------------------------------------- */

export const certifications = [
  {
    id: 'ai-tools-workshop',
    name: 'AI Tools Workshop',
    issuer: 'be10x',
    date: 'August 9, 2026',
    covers: [
      'Create presentations using AI in 5 minutes',
      'Analyse data using AI in 30 minutes',
      'Code and debug using AI in 10 minutes',
    ],
    image: '/cert-ai-tools.png',
    verifyUrl: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971632835',
  },
  {
    id: 'ai-prompts-fundamentals',
    name: 'AI Prompts Fundamentals',
    issuer: 'Coddy',
    date: 'August 22, 2026',
    covers: [
      'Model',
      'Tokens',
      'System prompt',
      'User prompt',
      'Output format',
    ],
    image: '/cert-ai-prompts.png',
    verifyUrl: 'https://coddy.tech/certifications/nVsWI5-prompts-gO3Q1x',
  },
  {
    id: 'genai-mastermind',
    name: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: 'August 15–17, 2026',
    covers: [
      'Content writing',
      'Workflow automation',
      'Vibe coding',
      'Image and video generation',
    ],
    image: '/cert-genai-mastermind.png',
    verifyUrl: null,
  },

  // To add another certification, copy a block above and edit it.
  // Every field except `id` and `name` is optional — leave out what doesn't apply.
]


/* ---------------------------------------------------------------------------
 *  8. CAREER HIGHLIGHTS  — milestones, contributions, recognition
 * ------------------------------------------------------------------------- */

export const highlights = [
  // {
  //   id: 'highlight-1',
  //   title: 'Milestone or contribution',
  //   detail: 'A short description.',
  // },
]


/* ---------------------------------------------------------------------------
 *  9. RESUME
 * ------------------------------------------------------------------------- */

export const resume = {
  summary:
    'Experienced technology professional with a strong background in Mainframe and Big Data, including tenure at TCS. Currently expanding into Artificial Intelligence and emerging technologies through practical, project-based learning.',

  // To offer a downloadable resume: put the PDF in the "public" folder and
  // write its name here, e.g. resumeFile: '/Hemasri-Resume.pdf'. Keep null
  // and the button politely shows "coming soon".
  resumeFile: '/Hemasri-Kalaiselvan-Resume.pdf',

  // A link to an online resume, if any. Otherwise null.
  onlineResumeUrl: null,
}


/* ---------------------------------------------------------------------------
 *  10. CONTACT  — only filled-in items appear; the rest stay hidden
 * ------------------------------------------------------------------------- */

export const contact = {
  email: 'vsks5587@gmail.com',      // e.g. 'name@example.com'
  linkedin: 'https://www.linkedin.com/in/hemasri-kalaiselvan/',   // e.g. 'https://www.linkedin.com/in/your-handle'
  github: 'https://github.com/hemasri-kalaiselvan',     // e.g. 'https://github.com/your-handle'

  // Any other professional links. Example:
  // other: [ { label: 'Medium', url: 'https://medium.com/@you' } ],
  other: [],
}
