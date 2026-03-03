'use client'

import { useTranslations } from 'next-intl'
import { GlassCard } from '@/components/ui/GlassCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type ProjectItem = {
  name: string
  role: string
  description: string
  tech: string[]
}

export function Projects() {
  const t = useTranslations('projects')
  const items = t.raw('items') as ProjectItem[]

  return (
    <section id="projects" className="py-12 lg:py-24">
      <ScrollReveal>
        <p className="section-heading dark:text-slate-500">{t('sectionTitle')}</p>
      </ScrollReveal>

      <div className="flex flex-col gap-5">
        {items.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.12}>
            <GlassCard>
              <span className="text-xs font-medium text-ink-muted dark:text-slate-500 uppercase tracking-wider">
                {project.role}
              </span>
              <h3 className="text-base font-bold text-ink dark:text-slate-100 mt-1 mb-2">{project.name}</h3>
              <p className="text-sm text-ink-secondary dark:text-slate-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
