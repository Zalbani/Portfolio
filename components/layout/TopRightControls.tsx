'use client'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'

export function TopRightControls() {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 glass-strong rounded-2xl px-3 py-2 border border-white/60 dark:border-white/10 shadow-sm">
      <LocaleSwitcher />
      <div className="w-px h-4 bg-white/60 dark:bg-white/10 mx-1" />
      <ThemeToggle />
    </div>
  )
}
