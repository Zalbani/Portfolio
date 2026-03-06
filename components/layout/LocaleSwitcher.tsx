'use client'

import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useLocaleContext } from '@/components/providers/LocaleProvider'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export function LocaleSwitcher() {
  const locale = useLocale()
  const { setLocale } = useLocaleContext()

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((code) => (
        <motion.button
          key={code}
          onClick={() => setLocale(code)}
          aria-label={`Switch to ${code === 'fr' ? 'French' : 'English'}`}
          aria-current={locale === code ? 'true' : undefined}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className={cn(
            'text-xs font-semibold px-2 py-1 rounded-lg transition-colors duration-200',
            locale === code
              ? 'bg-pastel-terra/60 text-terra-800 dark:bg-[#00ADB5]/15 dark:text-[#00ADB5]'
              : 'text-ink-secondary dark:text-slate-500 hover:text-ink dark:hover:text-slate-400'
          )}
        >
          {code.toUpperCase()}
        </motion.button>
      ))}
    </div>
  )
}
