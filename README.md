# Portfolio

Portfolio personnel développé avec Next.js 14 (App Router), TypeScript et Tailwind CSS.

## Stack

- **Next.js 14** — App Router, i18n via `next-intl`
- **TypeScript** strict
- **Tailwind CSS v3.4**
- **Framer Motion v11** — animations & custom cursor
- **next-themes** — dark / light mode

## Lancer le projet

### Prérequis

- Node.js ≥ 18
- npm

### Installation

```bash
npm install
```

### Développement

```bash
npx next dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Build de production

```bash
npx next build
npx next start
```

## Personnalisation

### Données du CV

Toutes les données (nom, expériences, projets, compétences, formation) sont centralisées dans un seul fichier :

```
data/resume.ts
```

### Traductions

Les textes sont disponibles en **3 langues** (FR / EN / ES) dans :

```
messages/
  fr.json
  en.json
  es.json
```

### Palette de couleurs

| Mode  | Fond       | Secondaire | Tertiaire  | Accent     |
|-------|------------|------------|------------|------------|
| Light | `#FFF5E4`  | `#FFE3E1`  | `#FFD1D1`  | `#FF9494`  |
| Dark  | `#222831`  | `#393E46`  | —          | `#00ADB5`  |

Les couleurs sont définies dans `tailwind.config.ts` et `app/globals.css`.

## Structure

```
app/                  # Routes Next.js (App Router)
components/
  layout/             # Sidebar, Navigation, MobileNav
  sections/           # About, Experience, Projects, Skills, Education
  ui/                 # GlassCard, CustomCursor, ParticlesBackground…
data/
  resume.ts           # Source unique des données CV
messages/             # Traductions i18n (fr / en / es)
lib/
  hooks/              # useActiveSection (scroll-spy)
  utils.ts            # cn() helper
```
