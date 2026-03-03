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
}

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

export type Education = {
  level: string
  title: string
  school: string
  period: string
}
