'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { about } from '@/data/resume'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function About() {
  const t = useTranslations('about')
  const tagline = t('tagline').split('')

  return (
    <section id="about" className="flex flex-col justify-center py-14 lg:min-h-screen lg:py-24">
      <ScrollReveal>
        <p className="section-heading dark:text-slate-500">{t('sectionTitle')}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="overflow-hidden">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-ink dark:text-slate-100 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {tagline.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.012, duration: 0.3 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <p className="text-ink-secondary dark:text-slate-400 leading-relaxed text-base">
            {t('bio')}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { key: 'openTo' },
              { key: 'basedIn' },
              { key: 'yearsExp' },
            ].map(({ key }) => (
              <div key={key} className="glass dark:border-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full ring-2 flex-none bg-terra-500 dark:bg-pastel-violet ring-terra-200 dark:ring-[#00ADB5]/40" />
                <span className="text-sm text-ink-secondary dark:text-slate-400">{t(key as 'openTo' | 'basedIn' | 'yearsExp')}</span>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${about.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-terra-600 dark:text-[#00ADB5] hover:text-terra-700 dark:hover:text-[#33c4cc] group transition-colors w-fit"
          >
            <span>{about.email}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}
