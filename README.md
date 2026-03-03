# Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Stack

- **Next.js 14** — App Router, i18n via `next-intl`
- **TypeScript** strict
- **Tailwind CSS v3.4**
- **Framer Motion v11** — animations & custom cursor
- **next-themes** — dark / light mode

## Getting started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
npm install
```

### Development

```bash
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npx next build
npx next start
```

## Customization

### Resume data

All data (name, experience, projects, skills, education) is centralized in a single file:

```
data/resume.ts
```

### Translations

Text content is available in **3 languages** (FR / EN / ES) in:

```
messages/
  fr.json
  en.json
  es.json
```

### Color palette

| Mode  | Background | Secondary | Tertiary  | Accent     |
|-------|------------|------------|------------|------------|
| Light | `#FFF5E4`  | `#FFE3E1`  | `#FFD1D1`  | `#FF9494`  |
| Dark  | `#222831`  | `#393E46`  | —          | `#00ADB5`  |

Colors are defined in `tailwind.config.ts` and `app/globals.css`.

## Structure

```
app/                  # Next.js routes (App Router)
components/
  layout/             # Sidebar, Navigation, MobileNav
  sections/           # About, Experience, Projects, Skills, Education
  ui/                 # GlassCard, CustomCursor, ParticlesBackground…
data/
  resume.ts           # Single source for resume data
messages/             # i18n translations (fr / en / es)
lib/
  hooks/              # useActiveSection (scroll-spy)
  utils.ts            # cn() helper
```
