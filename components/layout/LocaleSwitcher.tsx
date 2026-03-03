'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((code) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={cn(
            'text-xs font-semibold px-2 py-1 rounded-lg transition-all duration-200',
            locale === code
              ? 'bg-pastel-terra/60 text-terra-800 dark:bg-[#00ADB5]/15 dark:text-[#00ADB5]'
              : 'text-ink-secondary dark:text-slate-500 hover:text-ink dark:hover:text-slate-400'
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
