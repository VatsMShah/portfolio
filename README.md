# VATSAL NAGDA — PORTFOLIO

A cinematic, streaming-inspired portfolio for **Vatsal Nagda**: AI Engineer and Full-Stack Developer.
Every section is an episode, every project is an Original, and the whole site plays like a streaming experience.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.

## Updating content

**All content lives in one central file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit in `src/data/portfolio.ts` |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| Projects & live demo URLs | `projects` (add/edit; appears in Originals, modal overlay, resume sheet, and metrics) |
| Achievements & highlights | `achievements` |
| Certifications & credentials | `certifications` |
| Skills and evidence cross-references | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Viewer profiles (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card label | `profile.originalLabel` |

**Resume:** replace `public/assets/Vatsal_Nagda_Resume.pdf`.

**Photo:** replace `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout with the same framing), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## Architecture & Components

```
src/
  data/portfolio.ts        ← Single source of truth for all content & projects
  App.tsx                  ← Lifecycle: opening → profile select → home; overlays
  components/
    OpeningSequence        ← Cinematic intro → studio card → VATSAL → V SERIES → ▶ PLAY
    ProfileSelector        ← "Who's watching?" viewer modes (Recruiter / Developer / Creative)
    Navbar                 ← Hide-on-scroll nav, profile switcher, mobile drawer
    Hero                   ← Billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              ← Highlight reel (pause, ← →, tap zones)
    ContinueWatching       ← Cards with real watch progress indicators
    About                  ← The Pilot: core stats, background & focus
    Seasons / EpisodeCard  ← My Journey as seasons and episodes
    Originals / ProjectCard← Pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← Full-screen project overlay with live demo links & impact metrics
    TopPicks               ← Top 10-style row
    Skills                 ← Skill genres with cross-reference evidence
    Achievements           ← Award-poster cards with credentials rail
    ResumeViewer/ResumeModal ← Designed resume sheet, PDF viewer, download
    FinalCTA               ← TO BE CONTINUED… + direct contact links
    CustomCursor, fx.tsx   ← Interactive cursor states, magnetic buttons, 3D tilt, particles
  hooks/                   ← Lenis smooth scroll, media queries, watch progress
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis Smooth Scroll.
