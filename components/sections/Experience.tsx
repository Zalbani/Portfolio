'use client'

import { useTranslations } from 'next-intl'
import { GlassCard } from '@/components/ui/GlassCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type ExperienceItem = {
  role: string
  company: string
  type: string
  period: string
  tasks: string[]
}

export function Experience() {
  const t = useTranslations('experience')
  const items = t.raw('items') as ExperienceItem[]

  return (
    <section id="experience" className="py-12 lg:py-24">
      <ScrollReveal>
        <p className="section-heading dark:text-slate-500">{t('sectionTitle')}</p>
      </ScrollReveal>

      <div className="relative flex flex-col gap-5">
        <div className="absolute left-[7px] top-3 bottom-3 w-px z-0 bg-gradient-to-b from-pastel-terra to-transparent dark:from-[#00ADB5]/30" />

        {items.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 0.12}>
            <div className="flex gap-6">
              <div className="relative z-10 flex-none">
                <span className="block w-4 h-4 rounded-full mt-1 bg-terra-500 dark:bg-pastel-violet ring-2 ring-terra-200 dark:ring-[#00ADB5]/30" />
              </div>
              <GlassCard className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-ink dark:text-slate-100 text-base">{exp.role}</h3>
                    <p className="text-terra-500 dark:text-[#00ADB5] font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex-none sm:text-right">
                    <span className="text-xs text-ink-muted dark:text-slate-500 font-medium">{exp.period}</span>
                    <p className="text-xs text-ink-muted dark:text-slate-500">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {exp.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-ink-secondary dark:text-slate-400">
                      <span className="mt-2 w-1 h-1 rounded-full bg-terra-300 dark:bg-[#00ADB5] flex-none" />
                      {task}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
