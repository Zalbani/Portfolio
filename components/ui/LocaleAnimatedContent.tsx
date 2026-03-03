'use client'

import { useLocale } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocaleContext } from '@/components/providers/LocaleProvider'

const DURATION = 0.25
const EASING = [0.25, 0.46, 0.45, 0.94] as const

export function LocaleAnimatedContent({ children }: { children: React.ReactNode }) {
  const locale = useLocale()
  const { pendingLocale, onExitComplete } = useLocaleContext()

  const key = pendingLocale ?? locale

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: DURATION, ease: EASING }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
