'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function LogoIcon({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const dark = mounted && resolvedTheme === 'dark'
  const transition = mounted ? 'all 0.5s ease' : 'none'

  const bgFrom = dark ? '#393E46' : '#FFD1D1'
  const bgTo = dark ? '#222831' : '#FFE3E1'
  const starFill = dark ? '#00ADB5' : '#FF9494'

  return (
    <svg
      viewBox="0 0 128 128"
      width="64"
      height="64"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ stopColor: bgFrom, transition }} />
          <stop offset="100%" style={{ stopColor: bgTo, transition }} />
        </linearGradient>
        <clipPath id="logo-clip">
          <rect width="128" height="128" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-clip)">
        <rect width="128" height="128" fill="url(#logo-bg)" />
        <g transform="translate(19 19) scale(1.3235)">
          <path
            d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z"
            style={{ fill: starFill, transition }}
          />
        </g>
      </g>
    </svg>
  )
}
