'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useActiveSection, NAV_IDS } from '@/lib/hooks/useActiveSection'

const icons: Record<string, React.ReactNode> = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
}

export function MobileNav() {
  const t = useTranslations('nav')
  const active = useActiveSection()

  const scrollTo = (id: string) => {
    if (id === 'about') return window.scrollTo({ top: 0, behavior: 'smooth' })
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="lg:hidden fixed bottom-3 inset-x-3 z-50">
      <div className="flex items-center rounded-2xl bg-white/80 dark:bg-[#222831]/80 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-xl shadow-[#FFD1D1]/40 dark:shadow-black/30 px-1 py-1">
        {NAV_IDS.map((id) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 rounded-xl bg-[#FFD1D1] dark:bg-[#00ADB5]/20"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#FF9494] dark:text-[#00ADB5]'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {icons[id]}
              </span>
              <span
                className={`relative z-10 text-[9px] font-medium leading-tight text-center transition-colors duration-200 ${
                  isActive
                    ? 'text-[#FF9494] dark:text-[#00ADB5]'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {t(id)}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
