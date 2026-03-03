'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { about } from '@/data/resume'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { LogoIcon } from '@/components/ui/LogoIcon'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/ui/SocialIcons'

const STATS = ['openTo', 'basedIn', 'yearsExp'] as const

const mobileSocialLinks = [
  { href: `https://github.com/${about.github}`, label: 'GitHub', icon: <GitHubIcon />, external: true },
  { href: `https://www.linkedin.com/in/${about.linkedin}/`, label: 'LinkedIn', icon: <LinkedInIcon />, external: true },
  { href: `mailto:${about.email}`, label: 'Email', icon: <EmailIcon /> },
]

export function About() {
  const t = useTranslations('about')
  const tSidebar = useTranslations('sidebar')
  const tagline = t('tagline').split('')

  return (
    <section
      id="about"
      className="flex flex-col min-h-[calc(100vh-6.5rem)] lg:min-h-screen justify-between lg:justify-center py-14 lg:py-24"
    >
      <div className="flex flex-col justify-center">
        {/* Mobile: name & role (Sidebar is hidden) */}
        <div className="lg:hidden mb-6">
          <LogoIcon className="mb-4" />
          <h1 className="text-2xl font-bold text-ink dark:text-slate-100 tracking-tight leading-tight mb-1">
            {about.name}
          </h1>
          <p className="text-sm font-medium text-terra-500 dark:text-[#00ADB5]">
            {tSidebar('role')}
          </p>
        </div>

        <ScrollReveal>
          <p className="section-heading">{t('sectionTitle')}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="overflow-hidden">
              <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-slate-100 leading-tight">
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
              </h2>
            </div>

            <p className="text-ink-secondary dark:text-slate-400 leading-relaxed text-base">
              {t('bio')}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {STATS.map((key) => (
                <div key={key} className="glass dark:border-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full ring-2 flex-none bg-terra-500 dark:bg-pastel-violet ring-terra-200 dark:ring-[#00ADB5]/40" />
                  <span className="text-sm text-ink-secondary dark:text-slate-400">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile: social links */}
      <div className="lg:hidden flex flex-col gap-3 pt-6 pb-8">
        <span className="text-xs font-medium text-ink-muted dark:text-slate-500 uppercase tracking-wider">
          {t('linksLabel')}
        </span>
        <div className="flex items-center gap-2">
          {mobileSocialLinks.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-ink-secondary dark:text-slate-400 hover:text-terra-600 dark:hover:text-[#00ADB5] transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
