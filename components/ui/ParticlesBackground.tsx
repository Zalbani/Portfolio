'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Light gradient — always rendered as base layer */}
      <div className="wave-primary-light absolute inset-0" />
      <div className="wave-secondary-light absolute inset-0" />

      {/* Dark gradient — fades in over the light layer when switching to dark */}
      <div
        className="wave-primary-dark absolute inset-0"
        style={{
          opacity: isDark ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <div
        className="wave-secondary-dark absolute inset-0"
        style={{
          opacity: isDark ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <style>{`
        .wave-primary-light {
          background: linear-gradient(
            135deg,
            #FFD1D1 0%, #FFE3E1 20%, #FFF5E4 40%,
            #FFE3E1 62%, #FFD1D1 82%, #FFF5E4 100%
          );
          background-size: 300% 300%;
          animation: wavePrimary 50s ease-in-out infinite;
        }
        .wave-secondary-light {
          background: linear-gradient(
            -45deg,
            rgba(255,209,209,0.30) 0%, rgba(255,245,228,0.20) 35%,
            transparent 60%, rgba(255,227,225,0.22) 100%
          );
          background-size: 350% 350%;
          animation: waveSecondary 70s ease-in-out infinite;
        }
        .wave-primary-dark {
          background: linear-gradient(
            135deg,
            #222831 0%, #393E46 20%, #222831 42%,
            #1a2028 62%, #2d343e 82%, #222831 100%
          );
          background-size: 300% 300%;
          animation: wavePrimary 50s ease-in-out infinite;
        }
        .wave-secondary-dark {
          background: linear-gradient(
            -45deg,
            rgba(0,173,181,0.12) 0%, rgba(57,62,70,0.20) 35%,
            transparent 60%, rgba(0,173,181,0.06) 100%
          );
          background-size: 350% 350%;
          animation: waveSecondary 70s ease-in-out infinite;
        }
        @keyframes wavePrimary {
          0%   { background-position: 0% 0%; }
          25%  { background-position: 75% 25%; }
          50%  { background-position: 100% 100%; }
          75%  { background-position: 25% 75%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes waveSecondary {
          0%   { background-position: 100% 0%; }
          33%  { background-position: 20% 60%; }
          66%  { background-position: 80% 100%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
    </div>
  )
}
