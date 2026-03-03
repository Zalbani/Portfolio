export const about = {
  name: 'Alban Pierson',
  title: 'Full-Stack Developer',
  tagline: 'Driven to build the web of tomorrow.',
  bio: 'Développeur, passionné par le web et la technologie. Motivé par l\'envie d\'apprendre, j\'aime relever de nouveaux défis et mettre mes compétences au service de l\'innovation.',
  website: 'www.zalbani.dev',
  github: 'Zalbani',
  email: 'pro.pierson.alban@gmail.com',
  phone: '+33 6 47 22 83 20',
  languages: [
    { lang: 'French', level: 'C2 — Fluent' },
    { lang: 'English', level: 'C1 — Advanced' },
  ],
}

export type Experience = {
  role: string
  company: string
  type: string
  period: string
  tasks: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Chiliz',
    type: 'CDI',
    period: '2022 – 2026',
    tasks: [],
  },
  {
    role: 'Web Developer',
    company: 'Bibliothèque Municipale de Lyon',
    type: 'Work-study — Employee',
    period: '2018 – 2022',
    tasks: [
      'Maintenance (reverse engineering / documentation / updates)',
      'Web integration (HTML / CSS / JavaScript)',
      'Web development (Symfony / Vue / API)',
      'Project manager (Agile / Kanban / user tests)',
    ],
  },
]

export type Project = {
  name: string
  role: string
  description: string
  tech: string[]
}

export const projects: Project[] = [
  {
    name: 'Agenda',
    role: 'Project Manager & Developer',
    description:
      'During my work-study, I was in charge of the complete redesign of an internal tool managing all events offered by the libraries of the Lyon metropolis. I led this large-scale project from A to Z — from conception to production.',
    tech: ['PHP', 'Symfony', 'Vue.js', 'SQL', 'Agile'],
  },
  {
    name: 'Greenhouse',
    role: 'Developer',
    description: '',
    tech: [],
  },
  {
    name: 'Oracle',
    role: 'Developer',
    description: '',
    tech: [],
  },
]

export type HardSkill = {
  name: string
  icon: string
  invertOnDark?: boolean
}

export const hardSkills: HardSkill[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'PHP', icon: 'php' },
  { name: 'Solidity', icon: 'solidity' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs', invertOnDark: true },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Symfony', icon: 'symfony', invertOnDark: true },
  { name: 'Docker', icon: 'docker' },
  { name: 'Claude', icon: 'claude', invertOnDark: true },
  { name: 'Ollama', icon: 'ollama', invertOnDark: true },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
]

export const softSkills = {
  Work: ['Self-sufficiency', 'Curiosity', 'Ethic', 'Resilient'],
  Social: ['Teamwork', 'Open-minded', 'Stress handling'],
  Dev: ['Thorough', 'Learning', 'Motivated', 'Persevering'],
}

export type Education = {
  level: string
  title: string
  school: string
  period: string
}

export const education: Education[] = [
  {
    level: 'Master — Level 7',
    title: 'Web Developer / IT Expert',
    school: 'Ynov Campus — Lyon',
    period: '2018 – 2022',
  },
  {
    level: 'DUT — Level 5',
    title: 'MMI — Multimedia and Internet Professions',
    school: 'IUT de Belfort-Montbéliard',
    period: '2016 – 2018',
  },
]
