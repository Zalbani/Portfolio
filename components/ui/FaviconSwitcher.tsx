'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function FaviconSwitcher() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!resolvedTheme) return
    const href = resolvedTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
    const links = document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]')
    links.forEach((link) => { link.href = href })
  }, [resolvedTheme])

  return null
}
