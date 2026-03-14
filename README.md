<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

# IP:PORT—folio

A personal portfolio built with Next.js, Sanity CMS, and Tailwind CSS. Content is managed via Sanity and rendered as a single-page, snap-scroll layout with dark/light mode.

**Live site:** [eyyMinda.com](https://www.eyyMinda.com)

---

## Tech Stack

<a href="https://react.dev/" target="_blank" title="React" rel="noreferrer"><img alt="React" width="32" style="padding-right:8px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" title="TypeScript" rel="noreferrer"><img alt="TypeScript" width="32" style="padding-right:8px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" /></a>
<a href="https://nextjs.org/" target="_blank" title="Next.js" rel="noreferrer"><img alt="Next.js" width="32" style="padding-right:8px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /></a>
<a href="https://tailwindcss.com/" target="_blank" title="Tailwind CSS" rel="noreferrer"><img alt="Tailwind" width="32" style="padding-right:8px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" /></a>
<a href="https://www.sanity.io/" target="_blank" title="Sanity" rel="noreferrer"><img alt="Sanity" width="32" style="padding-right:8px;" src="https://icon.icepanel.io/Technology/svg/Sanity.svg" /></a>

| Area      | Stack                                   |
| --------- | --------------------------------------- |
| Framework | Next.js 16 (Pages Router)               |
| Language  | TypeScript 5.9                          |
| UI        | React 19, Tailwind CSS, Framer Motion   |
| CMS       | Sanity (next-sanity, @sanity/image-url) |
| Contact   | EmailJS                                 |
| Analytics | Vercel Analytics                        |

---

## Project Structure

```
├── components/          # React components
│   ├── Hero.tsx         # Landing section, typewriter intro
│   ├── About.tsx        # Profile, bio
│   ├── WorkExperience.tsx  # Experience carousel
│   ├── Skills.tsx       # Skills grid
│   ├── Projects.tsx    # Projects carousel
│   ├── Contact.tsx      # Contact form (EmailJS)
│   └── ui/              # Shared UI (SanityImage, ImageModal, etc.)
├── lib/
│   ├── api/             # Errors, rate limiting for Pages API
│   └── sanity/          # GROQ queries
├── pages/
│   ├── index.tsx        # Home (getStaticProps + ISR)
│   └── api/v1/          # REST endpoints (optional, build uses direct fetch)
├── sanity/              # Sanity Studio schemas
│   └── schemas/         # pageInfo, experience, skill, project, social
├── utils/fetchData.ts   # Direct Sanity fetch, fetchAllPageData (parallel)
└── sanity.ts            # Sanity client config
```

---

## Features

- **Snap scroll** — Full-height sections with scroll snap
- **Dark / light mode** — Toggle with persisted preference
- **Sanity CMS** — Edit page info, experiences, skills, projects, and socials in [Sanity Studio](https://www.sanity.io/docs)
- **Carousels** — Swipeable Work Experience and Projects with touch/drag
- **Contact form** — Sends via EmailJS
- **ISR** — `revalidate: 300` for content updates

---

## Prerequisites

- Node.js ≥ 24
- [Sanity](https://www.sanity.io/) project (or use existing dataset)

---

## Setup

1. **Clone and install**

   ```bash
   git clone https://github.com/eyyMinda/ip-port-folio.git
   cd ip-port-folio
   npm install
   ```

2. **Environment variables**

   Create `.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   Optional:
   - `NEXT_PUBLIC_SANITY_STUDIO_API_VERSION` — Sanity API version
   - EmailJS vars — if using the contact form

3. **Run dev**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Sanity Studio**

   ```bash
   cd sanity
   npm install
   npm run dev
   ```

   Run Studio separately to manage content.

---

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start Next.js dev server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## Deployment

Deployed on [Vercel](https://vercel.com). Build uses direct Sanity fetch (no `NEXT_PUBLIC_BASE_URL`). Set `engines.node` ≥ 24 in Vercel project settings if required.

---

## License

ISC — [eyyMinda](https://github.com/eyyMinda)
