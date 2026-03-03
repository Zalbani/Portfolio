'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Navigation } from './Navigation'
import { LogoIcon } from '@/components/ui/LogoIcon'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '@/components/ui/SocialIcons'
import { about } from '@/data/resume'

const socialLinks = [
  {
    key: 'github' as const,
    href: `https://github.com/${about.github}`,
    hoverText: `@${about.github}`,
    icon: <GitHubIcon />,
  },
  {
    key: 'linkedin' as const,
    href: `https://www.linkedin.com/in/${about.linkedin}/`,
    hoverText: about.linkedinHovertext,
    icon: <LinkedInIcon />,
  },
  {
    key: 'email' as const,
    href: `mailto:${about.email}`,
    hoverText: about.email,
    icon: <EmailIcon />,
  },
]

export function Sidebar() {
  const t = useTranslations('sidebar')
  const tAbout = useTranslations('about')
  const { scrollY } = useScroll()
  const nameY = useTransform(scrollY, [0, 300], [0, -15])

  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 h-screen flex flex-col justify-between py-16 px-8 lg:px-12"
    >
      {/* Identity */}
      <div>
        <motion.div style={{ y: nameY }} className="mb-8">
          <LogoIcon className="mb-6" />
          <h1 className="text-3xl lg:text-4xl font-bold text-ink dark:text-slate-100 tracking-tight leading-tight mb-2">
            {about.name}
          </h1>
          <h2 className="text-base font-medium text-terra-500 dark:text-[#00ADB5] mb-4">
            {t('role')}
          </h2>
        </motion.div>

        <Navigation />
      </div>

      {/* Bottom controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="space-y-4"
      >
        {/* Social */}
        <div className="space-y-3">
          <span className="text-xs font-medium text-ink-muted dark:text-slate-500 uppercase tracking-wider block">
            {tAbout('linksLabel')}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(s.key)}
                className="group relative z-0 hover:z-50 w-9 h-9 glass rounded-xl flex items-center justify-center text-ink-secondary dark:text-slate-400 hover:text-terra-600 dark:hover:text-[#00ADB5] hover:bg-pastel-terra/30 dark:hover:bg-[#00ADB5]/10 transition-all duration-200"
              >
                {s.icon}
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1.5 rounded-lg bg-[#FFFBF8] dark:bg-[#222831] border border-[rgba(255,255,255,0.9)] dark:border-white/[0.08] text-ink-secondary dark:text-slate-400 text-[11px] font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none [@media(hover:none)]:hidden shadow-lg">
                  {s.hoverText}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}
