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

          {/* Mobile: social links */}
          <div className="lg:hidden flex items-center gap-2 pt-6">
            <a
              href={`https://github.com/${about.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-ink-secondary dark:text-slate-400 hover:text-terra-600 dark:hover:text-[#00ADB5] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={`mailto:${about.email}`}
              aria-label="Email"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-ink-secondary dark:text-slate-400 hover:text-terra-600 dark:hover:text-[#00ADB5] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={`https://${about.website}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-ink-secondary dark:text-slate-400 hover:text-terra-600 dark:hover:text-[#00ADB5] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
