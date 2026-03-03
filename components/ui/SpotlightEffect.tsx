'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function SpotlightEffect() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const color = resolvedTheme === 'dark'
        ? 'rgba(124,58,237,0.07)'
        : 'rgba(124,58,237,0.03)'
      el.style.background = `radial-gradient(400px at ${e.clientX}px ${e.clientY}px, ${color}, transparent 80%)`
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [resolvedTheme])

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none transition-[background] duration-0"
    />
  )
}
