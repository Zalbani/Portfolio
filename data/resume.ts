export const about = {
  name: 'Alban Pierson',
  github: 'Zalbani',
  email: 'pro.pierson.alban@gmail.com',
  linkedin: 'zalbani',
  linkedinHovertext: 'Alban Pierson',
}

export type Experience = {
  role: string
  company: string
  type: string
  period: string
  tasks: string[]
}

export type Project = {
  name: string
  role: string
  description: string
  tech: string[]
  link?: string
}

export type HardSkill = {
  name: string
  icon: string
  invertOnDark?: boolean
}

export const hardSkills: HardSkill[] = [
  // Languages
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'PHP', icon: 'php' },
  { name: 'Solidity', icon: 'solidity' },
  // Frontend
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs', invertOnDark: true },
  // Backend
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Symfony', icon: 'symfony', invertOnDark: true },
  // Infra
  { name: 'Docker', icon: 'docker' },
  { name: 'Redis', icon: 'redis' },
  // Tools
  { name: 'Ollama', icon: 'ollama', invertOnDark: true },
  { name: 'Figma', icon: 'figma' },
]

export type Education = {
  level: string
  title: string
  school: string
  period: string
  link: string
}
