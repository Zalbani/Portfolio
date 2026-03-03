'use client'

import { useTranslations } from 'next-intl'
import { useActiveSection, NAV_IDS } from '@/lib/hooks/useActiveSection'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Navigation() {
  const t = useTranslations('nav')
  const active = useActiveSection()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex flex-col gap-1">
      {NAV_IDS.map((id, i) => {
        const isActive = active === id
        return (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
            className={cn(
              'group flex items-center gap-3 text-left py-1.5 transition-all duration-200',
              isActive
                ? 'text-ink dark:text-slate-100'
                : 'text-ink-muted dark:text-slate-500 hover:text-ink-secondary dark:hover:text-slate-400'
            )}
          >
            <span
              className={cn(
                'block h-px transition-all duration-300',
                isActive
                  ? 'w-10 bg-ink dark:bg-slate-100'
                  : 'w-4 bg-ink-muted dark:bg-slate-600 group-hover:w-6 group-hover:bg-ink-secondary dark:group-hover:bg-slate-500'
              )}
            />
            <span
              className={cn(
                'text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200',
                isActive ? 'translate-x-1' : ''
              )}
            >
              {t(id)}
            </span>
          </motion.button>
        )
      })}
    </nav>
  )
}
