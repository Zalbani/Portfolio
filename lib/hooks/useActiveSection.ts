'use client'

import { useState, useEffect } from 'react'

export const NAV_IDS = ['about', 'projects', 'experience', 'skills', 'education'] as const

export function scrollToSection(id: string) {
  if (id === 'about') return window.scrollTo({ top: 0, behavior: 'smooth' })
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function useActiveSection() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
