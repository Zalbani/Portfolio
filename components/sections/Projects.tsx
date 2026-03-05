'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { Project } from '@/data/resume'

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-terra-500 dark:text-teal-400 shrink-0"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const hasLink = Boolean(project.link)

  const cardContent = (
    <GlassCard className={hasLink ? 'group' : undefined}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span className="text-xs font-medium text-ink-muted dark:text-slate-500 uppercase tracking-wider">
            {project.role}
          </span>
          <h3 className="text-base font-bold text-ink dark:text-slate-100 mt-1 mb-2">{project.name}</h3>
        </div>
        {hasLink && <ExternalLinkIcon />}
      </div>
      <p className="text-sm text-ink-secondary dark:text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </GlassCard>
  )

  if (!hasLink) {
    return <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>{cardContent}</motion.div>
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="external"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="block"
    >
      {cardContent}
    </motion.a>
  )
}

export function Projects() {
  const t = useTranslations('projects')
  const items = t.raw('items') as Project[]

  return (
    <section id="projects" className="py-12 lg:py-24">
      <ScrollReveal>
        <p className="section-heading">{t('sectionTitle')}</p>
      </ScrollReveal>

      <div className="flex flex-col gap-5">
        {items.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.12}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
