'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// 3 layers: accent → mid → bg (the bg layer is what covers the theme switch)
const LAYERS = {
  dark:  ['#00ADB5', '#393E46', '#222831'],
  light: ['#FF9494', '#FFD1D1', '#FFF5E4'],
} as const

const STAGGER      = 0.08   // seconds between each layer
const DURATION_IN  = 0.60
const DURATION_OUT = 0.55
const NUM_LAYERS   = 3

// ms until the last layer fully covers the screen (+ small buffer)
const COVER_MS   = Math.round(((NUM_LAYERS - 1) * STAGGER + DURATION_IN) * 1000) + 60
// ms until the last layer finishes uncovering (+ small buffer)
const UNCOVER_MS = Math.round(((NUM_LAYERS - 1) * STAGGER + DURATION_OUT) * 1000) + 80

export function ThemeTransitionOverlay() {
  const { setTheme, resolvedTheme } = useTheme()
  const [phase, setPhase] = useState<'idle' | 'covering' | 'uncovering'>('idle')
  const [overlayTheme, setOverlayTheme] = useState<'dark' | 'light'>('light')

  // Refs to avoid stale closures inside the event listener
  const phaseRef        = useRef<'idle' | 'covering' | 'uncovering'>('idle')
  const resolvedRef     = useRef<string | undefined>(undefined)
  const setThemeRef     = useRef(setTheme)
  const timersRef       = useRef<ReturnType<typeof setTimeout>[]>([])

  // Keep refs in sync
  useEffect(() => { setThemeRef.current = setTheme }, [setTheme])
  useEffect(() => { resolvedRef.current = resolvedTheme }, [resolvedTheme])

  const updatePhase = (p: typeof phase) => {
    phaseRef.current = p
    setPhase(p)
  }

  // Register event listener once
  useEffect(() => {
    const handleRequest = () => {
      if (phaseRef.current !== 'idle') return

      const nextTheme = resolvedRef.current === 'dark' ? 'light' : 'dark'
      setOverlayTheme(nextTheme)
      updatePhase('covering')

      // Once fully covered → switch theme and start uncovering
      const t1 = setTimeout(() => {
        setThemeRef.current(nextTheme)
        updatePhase('uncovering')
      }, COVER_MS)

      // Once fully uncovered → unmount
      const t2 = setTimeout(() => {
        updatePhase('idle')
      }, COVER_MS + UNCOVER_MS)

      timersRef.current.forEach(clearTimeout)
      timersRef.current = [t1, t2]
    }

    window.addEventListener('theme-toggle-request', handleRequest)
    return () => {
      window.removeEventListener('theme-toggle-request', handleRequest)
      timersRef.current.forEach(clearTimeout)
    }
  }, []) // register once — refs handle freshness

  if (phase === 'idle') return null

  const layers = LAYERS[overlayTheme]

  return (
    <>
      {layers.map((color, i) => (
        <motion.div
          key={`overlay-${i}`}
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ backgroundColor: color, zIndex: 9995 + i }}
          // Expand from top-right corner, shrink back to same corner
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{
            clipPath:
              phase === 'covering'
                ? 'circle(150% at 100% 0%)'
                : 'circle(0% at 100% 0%)',
          }}
          transition={{
            duration: phase === 'covering' ? DURATION_IN : DURATION_OUT,
            ease: [0.37, 0, 0.63, 1],
            // Enter: layer 0 first → layer 2 last
            // Exit:  layer 2 first → layer 0 last (reversed stagger)
            delay:
              phase === 'covering'
                ? i * STAGGER
                : (NUM_LAYERS - 1 - i) * STAGGER,
          }}
        >
          {/* Noise grain on the topmost (bg-color) layer only */}
          {i === layers.length - 1 && (
            <div className="noise-layer" style={{ position: 'absolute', inset: '-20%' }} />
          )}
        </motion.div>
      ))}
    </>
  )
}
