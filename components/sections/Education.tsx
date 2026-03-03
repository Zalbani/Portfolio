'use client'

import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { about } from '@/data/resume'

type EducationItem = {
  level: string
  title: string
  school: string
  period: string
}

export function Education() {
  const t = useTranslations('education')
  const items = t.raw('items') as EducationItem[]
  const tSidebar = useTranslations('sidebar')

  return (
    <section id="education" className="py-12 pb-24 lg:py-24 lg:pb-32">
      <ScrollReveal>
        <p className="section-heading dark:text-slate-500">{t('sectionTitle')}</p>
      </ScrollReveal>

      <div className="relative flex flex-col gap-5">
        <div className="absolute left-[7px] top-3 bottom-3 w-px z-0 bg-gradient-to-b from-pastel-terra to-transparent dark:from-[#00ADB5]/30" />

        {items.map((edu, i) => (
          <ScrollReveal key={edu.title} delay={i * 0.1}>
            <div className="flex gap-6">
              <div className="relative z-10 flex-none">
                <span className="block w-4 h-4 rounded-full mt-1 bg-terra-500 dark:bg-pastel-violet ring-2 ring-terra-200 dark:ring-[#00ADB5]/30" />
              </div>
              <GlassCard className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <span className="text-xs font-medium text-ink-muted dark:text-slate-500 uppercase tracking-wider">
                      {edu.level}
                    </span>
                    <h3 className="font-semibold text-ink dark:text-slate-100 text-sm mt-0.5">{edu.title}</h3>
                    <p className="text-sm text-terra-500 dark:text-[#00ADB5] font-medium mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-xs text-ink-muted dark:text-slate-500 font-medium flex-none">
                    {edu.period}
                  </span>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-16 pt-8 border-t border-white/60 dark:border-white/10 text-center">
          <p className="text-sm text-ink-muted dark:text-slate-500">
            {tSidebar('builtBy')}{' '}
            <span className="font-semibold text-ink dark:text-slate-300">{about.name}</span>
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
